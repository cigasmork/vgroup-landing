'use client';

import { useLang } from '@/context/LangContext';

const tagColors = [
  'bg-orange-50 text-orange-600 border-orange-100',
  'bg-blue-50 text-blue-600 border-blue-100',
  'bg-violet-50 text-violet-600 border-violet-100',
  'bg-emerald-50 text-emerald-600 border-emerald-100',
];

const topBorders = [
  'before:from-orange-400 before:to-orange-300',
  'before:from-blue-400 before:to-blue-300',
  'before:from-violet-400 before:to-violet-300',
  'before:from-emerald-400 before:to-emerald-300',
];

const icons = ['💳', '🛍️', '📱', '🧬'];

export default function BusinessOverview() {
  const { t } = useLang();
  const o = t.overview;

  const scrollTo = (href: string) => {
    const id = href.replace('#', '');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-orange-500 text-xs font-semibold tracking-[0.2em] uppercase">
            {o.tag}
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mt-4 mb-5 leading-tight">
            {o.title}
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed max-w-2xl mx-auto pre-line">
            {o.sub}
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {o.cards.map((card, i) => (
            <div
              key={card.tag}
              className="group bg-white rounded-3xl border border-slate-100 p-8 shadow-card hover:shadow-card-hover transition-all hover:-translate-y-1 relative overflow-hidden"
            >
              {/* Top color bar */}
              <div
                className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${topBorders[i]
                  .replace('before:from-', 'from-')
                  .replace('before:to-', 'to-')} opacity-80`}
              />

              {/* Tag + Icon */}
              <div className="flex items-start justify-between mb-6">
                <span
                  className={`inline-block px-3 py-1 rounded-lg text-xs font-semibold border ${tagColors[i]}`}
                >
                  {card.tag}
                </span>
                <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-2xl border border-slate-100 group-hover:bg-orange-50 group-hover:border-orange-100 transition-colors">
                  {icons[i]}
                </div>
              </div>

              {/* Title + Desc */}
              <h3 className="text-2xl font-bold text-slate-900 mb-3 leading-snug">
                {card.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">{card.desc}</p>

              {/* Points */}
              <ul className="flex flex-col gap-2.5 mb-8">
                {card.points.map((point) => (
                  <li key={point} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                      <svg viewBox="0 0 12 12" className="w-3 h-3 text-orange-500" fill="none" stroke="currentColor" strokeWidth={2}>
                        <polyline points="2 6 5 9 10 3" />
                      </svg>
                    </div>
                    <span className="text-slate-600 text-sm font-medium">{point}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                onClick={() => scrollTo(card.href)}
                className="inline-flex items-center gap-2 text-orange-500 font-semibold text-sm hover:text-orange-600 transition-colors group-hover:gap-3"
              >
                {o.learnMore}
                <svg viewBox="0 0 16 16" className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth={2}>
                  <polyline points="4 8 12 8" />
                  <polyline points="8 4 12 8 8 12" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
