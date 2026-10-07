import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ZatcaSection from './components/ZatcaSection';
import ModulesShowcase from './components/ModulesShowcase';
import SuperpowersSection from './components/SuperpowersSection';
import PricingSection from './components/PricingSection';
import IndustriesSection from './components/IndustriesSection';
import FaqSection from './components/FaqSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import InteractiveDemoModal from './components/InteractiveDemoModal';
import { translations } from './data/translations';

export default function App() {
  // Saudi & GCC market default: Arabic first, instant toggle to English
  const [lang, setLang] = useState(() => {
    try {
      const saved = localStorage.getItem('easyerp_site_lang');
      if (saved === 'en' || saved === 'ar') return saved;
    } catch (e) {}
    return 'ar';
  });

  const [demoModalOpen, setDemoModalOpen] = useState(false);

  useEffect(() => {
    // Synchronize document direction and language attributes
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    try {
      localStorage.setItem('easyerp_site_lang', lang);
    } catch (e) {}
  }, [lang]);

  const t = translations[lang] || translations.ar;

  return (
    <div className="min-h-screen bg-[#fafbfd] text-slate-900 flex flex-col font-sans relative selection:bg-sky-500 selection:text-white">
      
      {/* Navigation */}
      <Navbar 
        lang={lang} 
        setLang={setLang} 
        t={t} 
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero 
          lang={lang} 
          t={t} 
          onOpenDemo={() => setDemoModalOpen(true)} 
        />

        <ZatcaSection 
          lang={lang} 
          t={t} 
        />

        <ModulesShowcase 
          lang={lang} 
          t={t} 
          onOpenDemo={() => setDemoModalOpen(true)} 
        />

        <SuperpowersSection 
          lang={lang} 
          t={t} 
        />

        <PricingSection 
          lang={lang} 
          t={t} 
        />

        <IndustriesSection 
          lang={lang} 
          t={t} 
        />

        <FaqSection 
          lang={lang} 
          t={t} 
        />

        <ContactSection 
          lang={lang} 
          t={t} 
        />
      </main>

      {/* Footer */}
      <Footer 
        lang={lang} 
        t={t} 
      />

      {/* Speed Dial Floating WhatsApp Button */}
      <FloatingWhatsApp 
        lang={lang} 
        t={t} 
      />

      {/* Interactive Live Preview Sandbox Modal */}
      <InteractiveDemoModal 
        isOpen={demoModalOpen} 
        onClose={() => setDemoModalOpen(false)} 
        lang={lang} 
        t={t} 
      />

    </div>
  );
}
