// Apple-style fluid motion primitives: springs, 1:1 drag, momentum projection, press feedback.
const REDUCE = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export function spring({ from, to, velocity = 0, damping = 1, response = 0.4, onUpdate, onComplete }) {
  let x = from, v = velocity, raf = 0, last = performance.now(), stopped = false;
  const w = (2 * Math.PI) / response;
  const step = (now) => {
    if (stopped) return;
    const dt = Math.min((now - last) / 1000, 1 / 30);
    last = now;
    const a = -w * w * (x - to) - 2 * damping * w * v;
    v += a * dt;
    x += v * dt;
    onUpdate && onUpdate(x, v);
    if (Math.abs(x - to) < 0.15 && Math.abs(v) < 0.6) {
      x = to; v = 0;
      onUpdate && onUpdate(x, v);
      onComplete && onComplete();
      return;
    }
    raf = requestAnimationFrame(step);
  };
  raf = requestAnimationFrame(step);
  return {
    stop() { stopped = true; cancelAnimationFrame(raf); },
    get value() { return x; },
    get velocity() { return v; }
  };
}

// Apple's deceleration projection (Designing Fluid Interfaces sample)
// Guard against contexts where requestAnimationFrame never ticks (prerender, background
// tabs, embedded previews): if the spring has not advanced shortly after starting, jump
// the element to its final state with a plain CSS transition instead.
function fallback(check, applyFinal, delay = 400) {
  setTimeout(() => { if (!check()) applyFinal(); }, delay);
}

export function project(velocity, rate = 0.998) {
  return (velocity / 1000) * rate / (1 - rate);
}

export function rubberband(overshoot, dimension, constant = 0.55) {
  return (overshoot * dimension * constant) / (dimension + constant * Math.abs(overshoot));
}

// Instant, continuous press feedback — starts on pointerdown, never on click.
function attachPress(el) {
  const target = el.getAttribute('data-press') === 'inner' ? el.firstElementChild : el;
  if (!target) return;
  let anim = null, scale = 1;
  const to = (value, response, damping) => {
    if (anim) anim.stop();
    if (REDUCE()) { scale = value; target.style.transform = `scale(${value})`; return; }
    anim = spring({
      from: scale, to: value, damping, response,
      onUpdate: (s) => { scale = s; target.style.transform = `scale(${s})`; }
    });
  };
  el.addEventListener('pointerdown', () => to(0.975, 0.22, 1), { passive: true });
  ['pointerup', 'pointercancel', 'pointerleave'].forEach(t =>
    el.addEventListener(t, () => to(1, 0.36, 0.8), { passive: true })
  );
}

// Drag-scrollable rail: 1:1 tracking, rubber-band edges, momentum projection, velocity handoff.
function attachTrack(track) {
  const inner = track.firstElementChild;
  if (!inner) return;
  let x = 0, anim = null, dragging = false, startX = 0, startOffset = 0;
  let samples = [];
  const maxScroll = () => Math.min(0, track.clientWidth - inner.scrollWidth);
  const apply = () => { inner.style.transform = `translate3d(${x}px,0,0)`; };
  const snapPoints = () => Array.from(inner.children).map(c => -(c.offsetLeft));

  const settle = (velocity) => {
    const bound = maxScroll();
    const projected = x + project(velocity);
    const points = snapPoints().map(p => Math.max(bound, Math.min(0, p)));
    let target = points.reduce((best, p) =>
      Math.abs(p - projected) < Math.abs(best - projected) ? p : best, points[0] || 0);
    if (anim) anim.stop();
    anim = spring({
      from: x, to: target, velocity, damping: 0.82, response: 0.42,
      onUpdate: (val) => { x = val; apply(); }
    });
  };

  track.addEventListener('pointerdown', (e) => {
    if (e.pointerType === 'mouse' && e.button !== 0) return;
    if (anim) anim.stop();
    dragging = true;
    track.setPointerCapture(e.pointerId);
    startX = e.clientX;
    startOffset = x;
    samples = [{ x: e.clientX, t: performance.now() }];
    inner.style.transition = 'none';
  });

  track.addEventListener('pointermove', (e) => {
    if (!dragging) return;
    const raw = startOffset + (e.clientX - startX);
    const bound = maxScroll();
    if (raw > 0) x = rubberband(raw, track.clientWidth);
    else if (raw < bound) x = bound + rubberband(raw - bound, track.clientWidth);
    else x = raw;
    apply();
    samples.push({ x: e.clientX, t: performance.now() });
    if (samples.length > 5) samples.shift();
  });

  const end = () => {
    if (!dragging) return;
    dragging = false;
    const a = samples[0], b = samples[samples.length - 1];
    const dt = b && a ? (b.t - a.t) / 1000 : 0;
    const velocity = dt > 0 ? (b.x - a.x) / dt : 0;
    settle(velocity);
  };
  track.addEventListener('pointerup', end);
  track.addEventListener('pointercancel', end);
  window.addEventListener('resize', () => { x = Math.max(maxScroll(), Math.min(0, x)); apply(); });
  apply();
  return { next: () => settle(-900), prev: () => settle(900) };
}

// Hover lift: spring on enter, spring back on leave — interruptible either way.
function attachLift(el) {
  let anim = null, y = 0;
  const go = (to, response, damping) => {
    if (anim) anim.stop();
    if (REDUCE()) { el.style.transform = `translate3d(0,${to}px,0)`; y = to; return; }
    anim = spring({
      from: y, to, damping, response,
      onUpdate: (v) => { y = v; el.style.transform = `translate3d(0,${v}px,0)`; }
    });
  };
  el.addEventListener('pointerenter', () => go(-8, 0.42, 0.72), { passive: true });
  el.addEventListener('pointerleave', () => go(0, 0.4, 0.9), { passive: true });
}

// Number ticker: counts to the element's target once it scrolls into view.
function attachCount(el) {
  const target = Number(el.getAttribute('data-count'));
  const suffix = el.getAttribute('data-suffix') || '';
  if (!Number.isFinite(target)) return;
  const decimals = (el.getAttribute('data-count').split('.')[1] || '').length;
  el.textContent = '0' + suffix;
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      io.unobserve(e.target);
      if (REDUCE()) { el.textContent = target.toFixed(decimals) + suffix; return; }
      let moved = false;
      spring({
        from: 0, to: target, damping: 1, response: 0.85,
        onUpdate: (v) => { if (v > target * 0.02) moved = true; el.textContent = Math.max(0, v).toFixed(decimals) + suffix; },
        onComplete: () => { el.textContent = target.toFixed(decimals) + suffix; }
      });
      fallback(() => moved, () => { el.textContent = target.toFixed(decimals) + suffix; });
    });
  }, { threshold: 0.4 });
  io.observe(el);
}

// Progress rail: grows to its target scale once in view (scaleX, not width).
function attachGrow(el) {
  const axis = el.getAttribute('data-grow') === 'y' ? 'Y' : 'X';
  el.style.transformOrigin = axis === 'Y' ? 'top' : 'left';
  el.style.transform = `scale${axis}(0)`;
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      io.unobserve(e.target);
      if (REDUCE()) { el.style.transform = `scale${axis}(1)`; return; }
      let moved = false;
      spring({
        from: 0, to: 1, damping: 1, response: 0.95,
        onUpdate: (v) => { if (v > 0.02) moved = true; el.style.transform = `scale${axis}(${Math.min(1, v)})`; }
      });
      fallback(() => moved, () => {
        el.style.transition = 'none';
        el.style.transform = `scale${axis}(1)`;
      });
    });
  }, { threshold: 0.35 });
  io.observe(el);
}

// Slow scroll parallax + gentle scale on hero media (transform only).
function attachParallax(root) {
  const els = Array.from(root.querySelectorAll('[data-parallax]'));
  if (!els.length || REDUCE()) return null;
  let raf = 0;
  const frame = () => {
    raf = 0;
    const vh = window.innerHeight;
    els.forEach(el => {
      const host = el.parentElement;
      const r = host.getBoundingClientRect();
      if (r.bottom < -200 || r.top > vh + 200) return;
      const depth = Number(el.getAttribute('data-parallax')) || 0.12;
      const progress = (vh - r.top) / (vh + r.height);
      const shift = (progress - 0.5) * r.height * depth;
      el.style.transform = `translate3d(0,${shift.toFixed(2)}px,0) scale(${(1 + depth * 0.55).toFixed(3)})`;
    });
  };
  const onScroll = () => { if (!raf) raf = requestAnimationFrame(frame); };
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  frame();
  return onScroll;
}

function attachReveal(root) {
  const targets = Array.from(root.querySelectorAll('[data-rv]'));
  const reduce = REDUCE();
  targets.forEach(el => {
    el.style.opacity = '0';
    if (!reduce) el.style.transform = 'translateY(18px)';
    el.style.willChange = 'opacity, transform';
  });
  const show = (el, delay) => {
    if (el.dataset.rvDone === '1') return;
    el.dataset.rvDone = '1';
    setTimeout(() => {
        if (reduce) {
          el.style.transition = 'none';
          el.style.opacity = '1';
          el.style.transform = 'none';
          return;
        }
        let moved = false;
        spring({
          from: 0, to: 1, damping: 1, response: 0.5,
          onUpdate: (p) => {
            if (p > 0.02) moved = true;
            el.style.opacity = String(Math.min(1, p));
            el.style.transform = `translateY(${18 * (1 - p)}px)`;
          },
          onComplete: () => { el.style.transform = 'none'; el.style.willChange = 'auto'; }
        });
        fallback(() => moved, () => {
          el.style.transition = 'none';
          el.style.opacity = '1';
          el.style.transform = 'none';
          el.style.willChange = 'auto';
        });
    }, delay);
  };
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      // A jump or fast flick can skip the intersecting callback entirely — anything
      // already above the viewport is revealed immediately instead of staying hidden.
      const passed = !e.isIntersecting && e.boundingClientRect.top < 0;
      if (!e.isIntersecting && !passed) return;
      show(e.target, passed ? 0 : Number(e.target.getAttribute('data-d') || 0));
      io.unobserve(e.target);
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -5% 0px' });
  targets.forEach(el => io.observe(el));

  // Failsafe: after scrolling settles, reveal anything at or above the fold that the
  // observer never reported (anchor jumps, programmatic scrolls, restored positions).
  let settle = 0;
  const sweep = () => {
    const vh = window.innerHeight;
    targets.forEach(el => {
      if (el.dataset.rvDone === '1') return;
      const r = el.getBoundingClientRect();
      if (r.top < vh * 0.95) { show(el, 0); io.unobserve(el); }
    });
  };
  const onScroll = () => { clearTimeout(settle); settle = setTimeout(sweep, 120); };
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('hashchange', onScroll);
  onScroll();
  return io;
}

function attachNav(nav) {
  const onScroll = () => {
    const on = window.scrollY > 12;
    nav.style.setProperty('--nav-a', on ? '0.82' : '0.35');
    nav.style.setProperty('--nav-blur', on ? '28px' : '14px');
    nav.style.setProperty('--nav-line', on ? '1' : '0');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
  return onScroll;
}

export function init(root) {
  const api = {};
  const nav = root.querySelector('[data-nav]');
  if (nav) api.onScroll = attachNav(nav);
  root.querySelectorAll('[data-press]').forEach(attachPress);
  root.querySelectorAll('[data-lift]').forEach(attachLift);
  root.querySelectorAll('[data-count]').forEach(attachCount);
  root.querySelectorAll('[data-grow]').forEach(attachGrow);
  api.parallax = attachParallax(root);
  const track = root.querySelector('[data-track]');
  if (track) api.track = attachTrack(track);
  api.io = attachReveal(root);
  return api;
}
