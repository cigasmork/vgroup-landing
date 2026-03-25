'use client';

import { useLang } from '@/context/LangContext';

function VPayVisual() {
  return (
    <div className="relative">
      {/* Main card */}
      <div className="relative bg-slate-900 rounded-3xl p-8 overflow-hidden shadow-2xl">
        {/* Orange gradient header */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500" />

        {/* Background glow */}
        <div className="absolute top-8 right-8 w-40 h-40 bg-orange-500/10 rounded-full blur-2xl pointer-events-none" />

        {/* Transfer demo */}
        <div className="relative mb-8">
          <div className="text-slate-400 text-xs font-mono mb-4 tracking-widest">
            TRANSFER DEMO
          </div>

          <div className="flex items-center gap-4">
            {/* From */}
            <div className="flex-1 bg-slate-800 rounded-2xl p-4 border border-slate-700/50">
              <div className="text-slate-400 text-xs mb-1">Send</div>
              <div className="text-white font-bold text-xl">₩1,000,000</div>
              <div className="text-slate-400 text-xs mt-1">🇰🇷 Korea</div>
            </div>

            {/* Arrow */}
            <div className="flex flex-col items-center gap-1">
              <div className="w-8 h-8 bg-orange-500/20 rounded-full flex items-center justify-center">
                <svg viewBox="0 0 16 16" className="w-4 h-4 text-orange-400" fill="none" stroke="currentColor" strokeWidth={2}>
                  <polyline points="4 8 12 8" />
                  <polyline points="8 4 12 8 8 12" />
                </svg>
              </div>
              <span className="text-orange-400 text-[10px] font-mono">~sec</span>
            </div>

            {/* To */}
            <div className="flex-1 bg-slate-800 rounded-2xl p-4 border border-slate-700/50">
              <div className="text-slate-400 text-xs mb-1">Receive</div>
              <div className="text-orange-400 font-bold text-xl">$768</div>
              <div className="text-slate-400 text-xs mt-1">🇺🇸 USA</div>
            </div>
          </div>

          {/* Progress bar */}
          <div className="mt-5 h-1.5 bg-slate-800 rounded-full overflow-hidden">
            <div className="h-full w-3/4 bg-gradient-to-r from-orange-500 to-orange-400 rounded-full" />
          </div>
          <div className="mt-2 flex justify-between text-xs text-slate-500">
            <span>Processing...</span>
            <span className="text-orange-400">75%</span>
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: 'Fee', value: '<0.5%' },
            { label: 'Speed', value: '~Sec' },
            { label: 'Coverage', value: '5+ Countries' },
          ].map((s) => (
            <div key={s.label} className="bg-slate-800/60 rounded-xl p-3 text-center border border-slate-700/40">
              <div className="text-orange-400 text-sm font-bold">{s.value}</div>
              <div className="text-slate-500 text-[10px] mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating badge */}
      <div className="absolute -top-4 -right-4 bg-orange-500 text-white text-xs font-bold px-4 py-2 rounded-2xl shadow-lg">
        V Pay
      </div>
    </div>
  );
}

export default function VPaySection() {
  const { t } = useLang();
  const vp = t.vpay;

  return (
    <section id="vpay" className="py-24 lg:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Visual */}
          <div className="order-2 lg:order-1">
            <VPayVisual />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <span className="text-orange-500 text-xs font-semibold tracking-[0.2em] uppercase">
              {vp.tag}
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mt-4 mb-6 pre-line">
              {vp.title}
            </h2>
            <p className="text-slate-500 text-base leading-relaxed mb-10">{vp.desc}</p>

            {/* Features */}
            <div className="flex flex-col gap-5">
              {vp.features.map((f) => (
                <div key={f.label} className="flex gap-4">
                  <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg viewBox="0 0 20 20" className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" strokeWidth={2}>
                      <polyline points="4 10 8 14 16 6" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 text-base mb-1">{f.label}</div>
                    <div className="text-slate-500 text-sm leading-relaxed">{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
