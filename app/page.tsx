'use client';

import { LangProvider } from '@/context/LangContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/sections/Hero';
import GroupIntro from '@/components/sections/GroupIntro';
import BusinessOverview from '@/components/sections/BusinessOverview';
import VPaySection from '@/components/sections/VPaySection';
import VBazzarSection from '@/components/sections/VBazzarSection';
import VPhoneSection from '@/components/sections/VPhoneSection';
import HealthcareSection from '@/components/sections/HealthcareSection';
import Strengths from '@/components/sections/Strengths';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <LangProvider>
      <Header />
      <main>
        <Hero />
        <GroupIntro />
        <BusinessOverview />
        <VPaySection />
        <VBazzarSection />
        <VPhoneSection />
        <HealthcareSection />
        <Strengths />
        <Contact />
      </main>
      <Footer />
    </LangProvider>
  );
}
