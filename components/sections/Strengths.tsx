'use client';

import { useLang } from '@/context/LangContext';

const icons = ['◎', '⬡', '◈', '◉', '◇'];

export default function Strengths() {
  const { t } = useLang();
  const s = t.strengths;

  return (
    <section className="py-24 lg:py-32 bg-slate-900 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-dots opacity-[0.04]" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-orange-400 text-xs font-semibold tracking-[0.2em] uppercase">
            {s.tag}
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mt-4 mb-5 leading-tight pre-line">
            {s.title}
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">{s.sub}</p>
        </div>

        {/* Strengths grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {s.items.map((item, i) => (
            <div
              key={item.title}
              className={`group relative bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 hover:border-orange-500/30 rounded-3xl p-8 transition-all ${
                i === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* Top accent */}
              <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent group-hover:via-orange-500/60 transition-colors" />

              {/* Icon */}
              <div className="w-12 h-12 bg-orange-500/10 group-hover:bg-orange-500/20 rounded-2xl flex items-center justify-center mb-6 transition-colors">
                <span className="text-orange-400 text-xl font-light">{icons[i]}</span>
              </div>

              {/* Number */}
              <div className="text-slate-600 text-xs font-mono tracking-widest mb-3">
                0{i + 1}
              </div>

              <h3 className="text-white font-bold text-xl mb-3 leading-snug">{item.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>

              {/* Bottom decoration */}
              <div className="absolute bottom-6 right-6">
                <div className="w-2 h-2 rounded-full bg-orange-500/20 group-hover:bg-orange-500/50 transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
