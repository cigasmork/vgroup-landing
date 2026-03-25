'use client';

import { useLang } from '@/context/LangContext';

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-card border border-slate-100 text-center hover:shadow-card-hover transition-shadow">
      <div className="text-3xl font-bold text-orange-500 mb-1">{value}</div>
      <div className="text-slate-500 text-sm font-medium">{label}</div>
    </div>
  );
}

export default function GroupIntro() {
  const { t } = useLang();
  const a = t.about;

  return (
    <section id="about" className="py-24 lg:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <span className="text-orange-500 text-xs font-semibold tracking-[0.2em] uppercase">
              {a.tag}
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mt-4 mb-8 pre-line">
              {a.title}
            </h2>
            <div className="space-y-5">
              <p className="text-slate-600 text-lg leading-relaxed">{a.desc1}</p>
              <p className="text-slate-500 text-base leading-relaxed">{a.desc2}</p>
            </div>

            {/* Divider */}
            <div className="mt-10 h-px bg-gradient-to-r from-orange-200 via-orange-100 to-transparent" />
          </div>

          {/* Right: Stats */}
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-3 gap-4">
              <StatCard value={a.stat1Val} label={a.stat1Label} />
              <StatCard value={a.stat2Val} label={a.stat2Label} />
              <StatCard value={a.stat3Val} label={a.stat3Label} />
            </div>

            {/* Description card */}
            <div className="bg-slate-900 rounded-2xl p-6 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-orange-400" />
              <div className="relative">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-7 h-7 bg-orange-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">V</span>
                  </div>
                  <span className="text-slate-300 text-sm font-medium">Financial Group</span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Finance · Commerce · Digital · Healthcare
                </p>
                <div className="mt-4 flex gap-2 flex-wrap">
                  {['V Pay', 'V Bazzar', 'V Phone', 'Healthcare'].map((b) => (
                    <span
                      key={b}
                      className="text-xs px-2.5 py-1 rounded-lg bg-slate-800 text-slate-300 border border-slate-700"
                    >
                      {b}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
