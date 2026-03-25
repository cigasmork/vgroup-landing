'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { ko } from '@/messages/ko';
import { en } from '@/messages/en';
import type { T } from '@/messages/ko';

type Lang = 'ko' | 'en';

interface LangContextType {
  lang: Lang;
  t: T;
  toggleLang: () => void;
}

const LangContext = createContext<LangContextType>({
  lang: 'ko',
  t: ko,
  toggleLang: () => {},
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('ko');
  const t = lang === 'ko' ? ko : en;
  const toggleLang = () => setLang((prev) => (prev === 'ko' ? 'en' : 'ko'));

  return (
    <LangContext.Provider value={{ lang, t, toggleLang }}>
      {children}
    </LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);
