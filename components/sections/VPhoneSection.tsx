'use client';

import { useLang } from '@/context/LangContext';

function VPhoneVisual() {
  return (
    <div className="relative">
      <div className="relative bg-slate-900 rounded-3xl p-8 overflow-hidden shadow-2xl">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500" />

        {/* Decorative rings */}
        <div className="absolute -right-12 -bottom-12 w-48 h-48 border border-orange-500/10 rounded-full pointer-events-none" />
        <div className="absolute -right-8 -bottom-8 w-32 h-32 border border-orange-500/15 rounded-full pointer-events-none" />
        <div className="absolute right-0 bottom-0 w-16 h-16 border border-orange-500/20 rounded-full pointer-events-none" />

        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-orange-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xs">VP</span>
            </div>
            <span className="text-white text-sm font-semibold">V Phone</span>
          </div>
          <span className="text-orange-400 text-xs font-mono">CONNECTED</span>
        </div>

        {/* Connection hub */}
        <div className="relative flex justify-center mb-8">
          <div className="relative">
            <div className="w-20 h-20 bg-orange-500/20 rounded-full flex items-center justify-center border border-orange-500/30">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">V</span>
              </div>
            </div>
            {/* Connection lines */}
            {[0, 72, 144, 216, 288].map((deg, i) => (
              <div
                key={i}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{
                  width: '80px',
                  height: '1px',
                  background: 'linear-gradient(to right, rgba(249,115,22,0.4), transparent)',
                  transform: `rotate(${deg}deg) translateX(40px)`,
                  transformOrigin: '0 50%',
                }}
              />
            ))}
          </div>
        </div>

        {/* Service nodes */}
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: 'Digital Asset', icon: '💎' },
            { label: 'Connectivity', icon: '🔗' },
            { label: 'Lifestyle', icon: '🌟' },
            { label: 'Commerce', icon: '🛒' },
            { label: 'Finance', icon: '💳' },
            { label: 'Data', icon: '📊' },
          ].map((node) => (
            <div
              key={node.label}
              className="bg-slate-800/60 rounded-xl p-3 text-center border border-slate-700/40 hover:border-orange-500/30 transition-colors"
            >
              <div className="text-base mb-1">{node.icon}</div>
              <div className="text-slate-400 text-[10px]">{node.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating badge */}
      <div className="absolute -top-4 -right-4 bg-orange-500 text-white text-xs font-bold px-4 py-2 rounded-2xl shadow-lg">
        V Phone
      </div>
    </div>
  );
}

export default function VPhoneSection() {
  const { t } = useLang();
  const vph = t.vphone;

  return (
    <section id="vphone" className="py-24 lg:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Visual */}
          <div className="order-2 lg:order-1">
            <VPhoneVisual />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <span className="text-orange-500 text-xs font-semibold tracking-[0.2em] uppercase">
              {vph.tag}
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mt-4 mb-6 pre-line">
              {vph.title}
            </h2>
            <p className="text-slate-500 text-base leading-relaxed mb-10">{vph.desc}</p>

            {/* Features */}
            <div className="flex flex-col gap-5">
              {vph.features.map((f) => (
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
