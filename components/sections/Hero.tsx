'use client';

import { useLang } from '@/context/LangContext';

function HeroVisual() {
  return (
    <div className="relative w-full aspect-square max-w-[480px] mx-auto">
      {/* Decorative rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="absolute w-[90%] h-[90%] rounded-full border border-orange-100 opacity-60" />
        <div className="absolute w-[70%] h-[70%] rounded-full border border-orange-200 opacity-40" />
      </div>

      {/* Main dark card */}
      <div className="absolute inset-8 bg-slate-900 rounded-3xl shadow-2xl overflow-hidden">
        {/* Orange gradient top accent */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-400" />

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-dots opacity-10" />

        {/* Content */}
        <div className="relative h-full p-6 flex flex-col">
          {/* Header row */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-white text-xs font-bold">V</span>
              </div>
              <span className="text-slate-300 text-xs font-medium">Financial Group</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
              <span className="text-slate-400 text-xs">Live</span>
            </div>
          </div>

          {/* Business grid */}
          <div className="grid grid-cols-2 gap-3 flex-1">
            {/* V Pay */}
            <div className="bg-slate-800/80 rounded-2xl p-4 border border-slate-700/50 hover:border-orange-500/30 transition-colors group">
              <div className="w-8 h-8 bg-orange-500/20 rounded-xl flex items-center justify-center mb-3 group-hover:bg-orange-500/30 transition-colors">
                <span className="text-orange-400 text-base">💳</span>
              </div>
              <div className="text-white text-xs font-semibold mb-0.5">V Pay</div>
              <div className="text-slate-400 text-[10px]">Cross-Border Finance</div>
              <div className="mt-2 h-px bg-gradient-to-r from-orange-500/40 to-transparent" />
            </div>

            {/* V Bazzar */}
            <div className="bg-slate-800/80 rounded-2xl p-4 border border-slate-700/50 hover:border-orange-500/30 transition-colors group">
              <div className="w-8 h-8 bg-orange-500/20 rounded-xl flex items-center justify-center mb-3 group-hover:bg-orange-500/30 transition-colors">
                <span className="text-orange-400 text-base">🛍️</span>
              </div>
              <div className="text-white text-xs font-semibold mb-0.5">V Bazzar</div>
              <div className="text-slate-400 text-[10px]">C2C Commerce</div>
              <div className="mt-2 h-px bg-gradient-to-r from-orange-500/40 to-transparent" />
            </div>

            {/* V Phone */}
            <div className="bg-slate-800/80 rounded-2xl p-4 border border-slate-700/50 hover:border-orange-500/30 transition-colors group">
              <div className="w-8 h-8 bg-orange-500/20 rounded-xl flex items-center justify-center mb-3 group-hover:bg-orange-500/30 transition-colors">
                <span className="text-orange-400 text-base">📱</span>
              </div>
              <div className="text-white text-xs font-semibold mb-0.5">V Phone</div>
              <div className="text-slate-400 text-[10px]">Digital Platform</div>
              <div className="mt-2 h-px bg-gradient-to-r from-orange-500/40 to-transparent" />
            </div>

            {/* Healthcare */}
            <div className="bg-slate-800/80 rounded-2xl p-4 border border-slate-700/50 hover:border-orange-500/30 transition-colors group">
              <div className="w-8 h-8 bg-orange-500/20 rounded-xl flex items-center justify-center mb-3 group-hover:bg-orange-500/30 transition-colors">
                <span className="text-orange-400 text-base">🧬</span>
              </div>
              <div className="text-white text-xs font-semibold mb-0.5">Healthcare</div>
              <div className="text-slate-400 text-[10px]">SNP Platform</div>
              <div className="mt-2 h-px bg-gradient-to-r from-orange-500/40 to-transparent" />
            </div>
          </div>
        </div>
      </div>

      {/* Floating orange orb */}
      <div className="absolute top-4 right-4 w-12 h-12 bg-orange-500 rounded-2xl shadow-lg flex items-center justify-center">
        <span className="text-white font-bold text-xl">V</span>
      </div>
    </div>
  );
}

export default function Hero() {
  const { t } = useLang();

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToBusinesses = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen bg-white overflow-hidden flex items-center">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-50 rounded-full blur-3xl opacity-40 translate-x-1/3 -translate-y-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-slate-50 rounded-full blur-3xl opacity-60 -translate-x-1/3 translate-y-1/4 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-32 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left: Text content */}
          <div>
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-100 rounded-full px-4 py-1.5 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
              <span className="text-orange-600 text-xs font-semibold tracking-wide">
                {t.hero.eyebrow}
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 leading-[1.05] tracking-tight mb-6 pre-line">
              {t.hero.headline}
            </h1>

            {/* Sub */}
            <p className="text-slate-500 text-lg lg:text-xl leading-relaxed mb-10 pre-line max-w-xl">
              {t.hero.sub}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-12">
              <button
                onClick={scrollToContact}
                className="px-7 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-2xl transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 text-base"
              >
                {t.hero.cta1}
              </button>
              <button
                onClick={scrollToBusinesses}
                className="px-7 py-4 bg-white hover:bg-slate-50 text-slate-700 font-semibold rounded-2xl border-2 border-slate-200 hover:border-slate-300 transition-all text-base"
              >
                {t.hero.cta2}
              </button>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-3">
              {[t.hero.badge1, t.hero.badge2, t.hero.badge3].map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-1.5 text-xs text-slate-500 font-medium"
                >
                  <span className="w-1 h-1 rounded-full bg-orange-400" />
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Visual */}
          <div className="hidden lg:block">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
