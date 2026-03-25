'use client';

import { useState, useEffect } from 'react';
import { useLang } from '@/context/LangContext';

const navIds = ['about', 'vpay', 'vbazzar', 'vphone', 'healthcare', 'contact'] as const;

export default function Header() {
  const { t, lang, toggleLang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const navLabels: Record<string, string> = {
    about: t.nav.about,
    vpay: t.nav.vpay,
    vbazzar: t.nav.vbazzar,
    vphone: t.nav.vphone,
    healthcare: t.nav.healthcare,
    contact: t.nav.contact,
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-2 group"
            >
              <div className="w-9 h-9 bg-orange-500 rounded-xl flex items-center justify-center shadow-sm group-hover:bg-orange-600 transition-colors">
                <span className="text-white font-bold text-lg leading-none">V</span>
              </div>
              <span
                className={`font-semibold text-base tracking-tight transition-colors ${
                  scrolled ? 'text-slate-900' : 'text-slate-900'
                }`}
              >
                Financial Group
              </span>
            </button>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navIds.map((id) => (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className="px-4 py-2 rounded-xl text-sm font-medium text-slate-600 hover:text-orange-500 hover:bg-orange-50 transition-all"
                >
                  {navLabels[id]}
                </button>
              ))}
            </nav>

            {/* Right side */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={toggleLang}
                className="px-4 py-2 rounded-xl text-sm font-semibold text-slate-600 hover:text-orange-500 hover:bg-orange-50 border border-slate-200 hover:border-orange-200 transition-all"
              >
                {lang === 'ko' ? 'EN' : 'KR'}
              </button>
              <button
                onClick={() => scrollTo('contact')}
                className="px-5 py-2.5 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold rounded-xl transition-colors shadow-sm"
              >
                {t.nav.cta}
              </button>
            </div>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden p-2 rounded-xl hover:bg-slate-100 transition-colors"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              <div className="w-5 flex flex-col gap-1.5">
                <span
                  className={`block h-0.5 bg-slate-700 transition-all duration-300 ${
                    mobileOpen ? 'rotate-45 translate-y-2' : ''
                  }`}
                />
                <span
                  className={`block h-0.5 bg-slate-700 transition-all duration-300 ${
                    mobileOpen ? 'opacity-0' : ''
                  }`}
                />
                <span
                  className={`block h-0.5 bg-slate-700 transition-all duration-300 ${
                    mobileOpen ? '-rotate-45 -translate-y-2' : ''
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-x-0 top-20 z-40 bg-white/98 backdrop-blur-md border-b border-slate-100 shadow-lg transition-all duration-300 lg:hidden ${
          mobileOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-1">
          {navIds.map((id) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="w-full text-left px-4 py-3 rounded-xl text-base font-medium text-slate-700 hover:text-orange-500 hover:bg-orange-50 transition-all"
            >
              {navLabels[id]}
            </button>
          ))}
          <div className="flex gap-3 mt-4 pt-4 border-t border-slate-100">
            <button
              onClick={toggleLang}
              className="flex-1 py-3 rounded-xl text-sm font-semibold text-slate-600 border border-slate-200 hover:border-orange-300 hover:text-orange-500 transition-all"
            >
              {lang === 'ko' ? 'EN' : 'KR'}
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="flex-1 py-3 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold rounded-xl transition-colors"
            >
              {t.nav.cta}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
