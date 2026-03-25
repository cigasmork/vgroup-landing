'use client';

import { useLang } from '@/context/LangContext';

function HealthcareVisual() {
  const metrics = [
    { label: 'DNA Profile', value: 'Analyzed', change: '+SNP' },
    { label: 'Nutrition Score', value: '94/100', change: '+12' },
    { label: 'Supplement Match', value: '98%', change: 'Personalized' },
  ];

  return (
    <div className="relative">
      <div className="relative bg-slate-900 rounded-3xl p-8 overflow-hidden shadow-2xl">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500" />

        {/* Background glow */}
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-orange-500 rounded-lg flex items-center justify-center">
              <span className="text-white text-sm">🧬</span>
            </div>
            <span className="text-white text-sm font-semibold">Healthcare</span>
          </div>
          <div className="bg-orange-500/20 rounded-full px-3 py-1">
            <span className="text-orange-400 text-xs font-medium">SNP Analysis</span>
          </div>
        </div>

        {/* DNA visualization - abstract */}
        <div className="relative mb-8 h-16 flex items-center">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full h-px bg-slate-700" />
          </div>
          <div className="relative w-full flex justify-between items-center">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="flex flex-col items-center gap-1">
                <div
                  className={`w-2.5 h-2.5 rounded-full ${
                    i % 3 === 0
                      ? 'bg-orange-500'
                      : i % 3 === 1
                      ? 'bg-orange-300'
                      : 'bg-slate-600'
                  }`}
                />
                <div className={`w-px h-6 ${i % 2 === 0 ? 'bg-orange-500/40' : 'bg-slate-700'}`} />
                <div
                  className={`w-2.5 h-2.5 rounded-full ${
                    i % 3 === 2
                      ? 'bg-orange-500'
                      : i % 3 === 0
                      ? 'bg-slate-600'
                      : 'bg-orange-300'
                  }`}
                />
              </div>
            ))}
          </div>
          <div className="absolute inset-0 flex items-center">
            <div className="text-slate-500 text-[10px] font-mono bg-slate-900 px-2">SNP · DNA · Profile</div>
          </div>
        </div>

        {/* Metrics */}
        <div className="flex flex-col gap-3">
          {metrics.map((m) => (
            <div
              key={m.label}
              className="bg-slate-800/60 rounded-2xl p-4 border border-slate-700/40 flex items-center justify-between"
            >
              <div>
                <div className="text-slate-400 text-xs">{m.label}</div>
                <div className="text-white font-bold text-base mt-0.5">{m.value}</div>
              </div>
              <div className="bg-orange-500/20 rounded-lg px-2.5 py-1">
                <span className="text-orange-400 text-xs font-semibold">{m.change}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating badge */}
      <div className="absolute -top-4 -left-4 bg-orange-500 text-white text-xs font-bold px-4 py-2 rounded-2xl shadow-lg">
        Healthcare
      </div>
    </div>
  );
}

export default function HealthcareSection() {
  const { t } = useLang();
  const hc = t.healthcare;

  return (
    <section id="healthcare" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-orange-500 text-xs font-semibold tracking-[0.2em] uppercase">
              {hc.tag}
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mt-4 mb-6 pre-line">
              {hc.title}
            </h2>
            <p className="text-slate-500 text-base leading-relaxed mb-10">{hc.desc}</p>

            {/* Features */}
            <div className="flex flex-col gap-5">
              {hc.features.map((f) => (
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
            <HealthcareVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
