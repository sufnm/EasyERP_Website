import React, { useState, useEffect } from 'react';
import { Globe, Menu, X, ArrowUpRight } from 'lucide-react';
import { getWhatsAppLink } from '../data/config';

export default function Navbar({ lang, setLang, t }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    const nextLang = lang === 'ar' ? 'en' : 'ar';
    setLang(nextLang);
  };

  // Minimal, high-impact nav links
  const navLinks = [
    { href: '#modules', label: lang === 'ar' ? 'المميزات' : 'Features' },
    { href: '#zatca', label: lang === 'ar' ? 'اعتماد زاتكا' : 'ZATCA' },
    { href: '#pricing', label: lang === 'ar' ? 'الأسعار' : 'Pricing' },
    { href: '#contact', label: lang === 'ar' ? 'تواصل معنا' : 'Contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
      isScrolled 
        ? 'bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-xs py-3' 
        : 'bg-transparent py-4 sm:py-5'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Clean Brand Logo */}
          <a href="#" className="flex items-center group">
            <img 
              src="/easyerplogobluetext.jpg" 
              alt="EasyERP" 
              className="h-8 sm:h-9 w-auto object-contain transition-transform group-hover:scale-102"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentNode.innerHTML = '<span class="font-extrabold text-sky-600 text-xl tracking-tight">EasyERP</span>';
              }}
            />
          </a>

          {/* Clean Centered Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 sm:gap-2">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className="px-3.5 py-1.5 text-sm font-medium text-slate-600 hover:text-sky-600 hover:bg-slate-100/60 rounded-full transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Minimal Action: Language Switcher + Single Clear CTA */}
          <div className="flex items-center gap-2.5">
            
            {/* Compact Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm font-medium text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 rounded-full shadow-2xs transition-colors"
              title={lang === 'ar' ? 'Switch to English' : 'التحويل إلى العربية'}
            >
              <Globe className="w-3.5 h-3.5 text-slate-500" />
              <span>{lang === 'ar' ? 'English' : 'العربية'}</span>
            </button>

            {/* Single Primary Action Button */}
            <a
              href="#pricing"
              className="hidden sm:inline-flex items-center justify-center px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-bold text-white bg-sky-600 hover:bg-sky-500 rounded-full shadow-xs transition-all hover:scale-102"
            >
              <span>{t.nav.startFrom100}</span>
            </a>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-lg focus:outline-none"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

          </div>

        </div>
      </div>

      {/* Clean Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-5 pt-3 pb-5 space-y-3 shadow-lg animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-sky-600 hover:bg-slate-50 rounded-lg"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-100">
            <a
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center px-4 py-2.5 text-sm font-bold text-white bg-sky-600 hover:bg-sky-500 rounded-xl shadow-xs"
            >
              <span>{t.nav.startFrom100}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
