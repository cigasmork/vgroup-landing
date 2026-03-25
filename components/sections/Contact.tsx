'use client';

import { useLang } from '@/context/LangContext';

const EMAIL = 'info@vpayv.com';
const PHONE = '070-4136-4390';
const BIZ_NUM = '283-88-03541';

function InfoCard({
  icon,
  label,
  value,
  sub,
}: {
  icon: string;
  label: string;
  value: string;
  sub?: string;
}) {
  return (
    <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100 hover:border-orange-200 hover:bg-orange-50/30 transition-all">
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0 text-lg">
          {icon}
        </div>
        <div className="min-w-0">
          <div className="text-slate-400 text-xs font-medium mb-1">{label}</div>
          <div className="text-slate-900 font-semibold text-sm break-all">{value}</div>
          {sub && <div className="text-slate-400 text-xs mt-1 leading-relaxed">{sub}</div>}
        </div>
      </div>
    </div>
  );
}

export default function Contact() {
  const { t } = useLang();
  const c = t.contact;

  return (
    <section id="contact" className="py-24 lg:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Headline + CTAs */}
          <div>
            <span className="text-orange-500 text-xs font-semibold tracking-[0.2em] uppercase">
              {c.tag}
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mt-4 mb-6 pre-line">
              {c.title}
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-10 pre-line">{c.desc}</p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-2xl transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 text-base"
              >
                <svg viewBox="0 0 20 20" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5}>
                  <rect x="2" y="5" width="16" height="11" rx="2" />
                  <polyline points="2 7 10 13 18 7" />
                </svg>
                {c.emailBtn}
              </a>
              <a
                href={`tel:${PHONE.replace(/-/g, '')}`}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white hover:bg-slate-50 text-slate-700 font-semibold rounded-2xl border-2 border-slate-200 hover:border-orange-300 transition-all text-base"
              >
                <svg viewBox="0 0 20 20" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5}>
                  <path d="M3 5a2 2 0 012-2h1.5a1 1 0 01.93.64l1 2.5a1 1 0 01-.23 1.08l-1 .96a9.51 9.51 0 004.64 4.64l.96-1a1 1 0 011.08-.23l2.5 1a1 1 0 01.62.93V15a2 2 0 01-2 2C7.16 17 3 12.84 3 7V5z" />
                </svg>
                {c.callBtn}
              </a>
            </div>

            {/* Business number */}
            <div className="inline-flex items-center gap-2 text-sm text-slate-400 bg-white border border-slate-100 rounded-xl px-4 py-2.5">
              <svg viewBox="0 0 20 20" className="w-4 h-4 text-orange-400" fill="none" stroke="currentColor" strokeWidth={1.5}>
                <rect x="3" y="4" width="14" height="13" rx="2" />
                <line x1="7" y1="9" x2="13" y2="9" />
                <line x1="7" y1="12" x2="11" y2="12" />
              </svg>
              <span>{c.bizLabel}: {BIZ_NUM}</span>
            </div>
          </div>

          {/* Right: Contact info cards */}
          <div className="flex flex-col gap-4">
            <InfoCard
              icon="✉️"
              label={c.emailLabel}
              value={EMAIL}
            />
            <InfoCard
              icon="📞"
              label={c.phoneLabel}
              value={PHONE}
            />
            <InfoCard
              icon="🏢"
              label={c.headLabel}
              value="V Financial Group"
              sub={c.head}
            />
            <InfoCard
              icon="🌆"
              label={c.seoulLabel}
              value="Seoul Branch"
              sub={c.seoul}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
