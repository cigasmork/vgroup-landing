'use client';

import { useLang } from '@/context/LangContext';

function VBazzarVisual() {
  const items = [
    { emoji: '👜', name: 'Premium Bag', price: '₩ 85,000', seller: '@user_42', status: 'Safe Trade' },
    { emoji: '📷', name: 'Camera', price: '₩ 320,000', seller: '@photo_kim', status: 'Verified' },
    { emoji: '💻', name: 'Laptop', price: '₩ 750,000', seller: '@tech_seoul', status: 'New Listed' },
  ];

  return (
    <div className="relative">
      <div className="relative bg-slate-900 rounded-3xl p-8 overflow-hidden shadow-2xl">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500" />

        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-orange-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xs">VB</span>
            </div>
            <span className="text-white text-sm font-semibold">V Bazzar</span>
          </div>
          <div className="bg-slate-800 rounded-xl px-3 py-1.5 text-xs text-slate-300 border border-slate-700">
            🔒 Escrow Active
          </div>
        </div>

        {/* Item list */}
        <div className="flex flex-col gap-3">
          {items.map((item) => (
            <div
              key={item.name}
              className="bg-slate-800/60 rounded-2xl p-4 border border-slate-700/40 flex items-center gap-4 hover:border-orange-500/30 transition-colors"
            >
              <div className="w-11 h-11 bg-slate-700 rounded-xl flex items-center justify-center text-xl flex-shrink-0">
                {item.emoji}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-white text-sm font-semibold">{item.name}</div>
                <div className="text-slate-400 text-xs">{item.seller}</div>
              </div>
              <div className="text-right">
                <div className="text-orange-400 text-sm font-bold">{item.price}</div>
                <div className="text-green-400 text-[10px] mt-0.5">{item.status}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom trust indicators */}
        <div className="mt-6 grid grid-cols-3 gap-3">
          {[
            { icon: '🛡️', label: 'Safe Pay' },
            { icon: '✅', label: 'Verified' },
            { icon: '⚡', label: 'Fast' },
          ].map((b) => (
            <div key={b.label} className="bg-slate-800/60 rounded-xl p-2.5 text-center border border-slate-700/40">
              <div className="text-base">{b.icon}</div>
              <div className="text-slate-400 text-[10px] mt-0.5">{b.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating badge */}
      <div className="absolute -top-4 -left-4 bg-orange-500 text-white text-xs font-bold px-4 py-2 rounded-2xl shadow-lg">
        V Bazzar
      </div>
    </div>
  );
}

export default function VBazzarSection() {
  const { t } = useLang();
  const vb = t.vbazzar;

  return (
    <section id="vbazzar" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-orange-500 text-xs font-semibold tracking-[0.2em] uppercase">
              {vb.tag}
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mt-4 mb-6 pre-line">
              {vb.title}
            </h2>
            <p className="text-slate-500 text-base leading-relaxed mb-10">{vb.desc}</p>

            {/* Features */}
            <div className="flex flex-col gap-5">
              {vb.features.map((f) => (
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

          {/* Visual */}
          <div>
            <VBazzarVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
