'use client';

import { useLang } from '@/context/LangContext';

const navSections = [
  { id: 'vpay', labelKey: 'vpay' as const },
  { id: 'vbazzar', labelKey: 'vbazzar' as const },
  { id: 'vphone', labelKey: 'vphone' as const },
  { id: 'healthcare', labelKey: 'healthcare' as const },
];

export default function Footer() {
  const { t } = useLang();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-orange-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg leading-none">V</span>
              </div>
              <span className="font-semibold text-white text-base">Financial Group</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs mb-6">
              {t.footer.desc}
            </p>
            <div className="flex flex-col gap-1.5 text-sm text-slate-500">
              <span>info@vpayv.com</span>
              <span>070-4136-4390</span>
              <span className="text-xs mt-1">{t.footer.biz}</span>
            </div>
          </div>

          {/* Businesses */}
          <div>
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">
              {t.footer.businesses}
            </h4>
            <ul className="flex flex-col gap-3">
              {navSections.map(({ id, labelKey }) => (
                <li key={id}>
                  <button
                    onClick={() => scrollTo(id)}
                    className="text-slate-400 hover:text-white text-sm transition-colors text-left"
                  >
                    {t.nav[labelKey]}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">
              {t.footer.contact}
            </h4>
            <ul className="flex flex-col gap-3 text-sm text-slate-400">
              <li>
                <a
                  href="mailto:info@vpayv.com"
                  className="hover:text-white transition-colors"
                >
                  info@vpayv.com
                </a>
              </li>
              <li>
                <a
                  href="tel:07041364390"
                  className="hover:text-white transition-colors"
                >
                  070-4136-4390
                </a>
              </li>
              <li className="leading-relaxed text-slate-500 text-xs">
                {t.contact.head}
              </li>
              <li className="leading-relaxed text-slate-500 text-xs">
                {t.contact.seoul}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <p className="text-slate-500 text-sm">{t.footer.copy}</p>
          <p className="text-slate-600 text-xs">{t.footer.biz}</p>
        </div>
      </div>
    </footer>
  );
}
