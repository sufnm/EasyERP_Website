import React from 'react';
import { 
  ShieldCheck, MessageCircle, Phone, MapPin
} from 'lucide-react';
import { siteConfig, getWhatsAppLink, getCallLink } from '../data/config';

export default function Footer({ lang, t }) {
  const isAr = lang === 'ar';

  return (
    <footer className="bg-slate-50 border-t border-slate-200/90 pt-16 pb-12 text-slate-600 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
          {/* Col 1 & 2: Brand & Vision 2030 */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-4">
              <img 
                src="/easyerplogobluetext.jpg" 
                alt="EasyERP" 
                className="h-8 w-auto object-contain"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentNode.innerHTML = '<span class="font-extrabold text-sky-600 text-xl tracking-tight">EasyERP</span>';
                }}
              />

              <img 
                src="/vision2030.svg" 
                alt="Saudi Vision 2030" 
                className="h-8 w-auto opacity-75"
              />
            </div>

            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-sm font-normal">
              {t.footer.desc}
            </p>

            <div className="flex items-center gap-3 pt-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-semibold">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>ZATCA Phase 1 & 2 Approved</span>
              </span>
            </div>
          </div>

          {/* Col 3: Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2">
              <li><a href="#modules" className="hover:text-sky-600 transition-colors">{t.nav.modules}</a></li>
              <li><a href="#zatca" className="hover:text-sky-600 transition-colors">{t.nav.zatca}</a></li>
              <li><a href="#superpowers" className="hover:text-sky-600 transition-colors">{t.nav.superpowers}</a></li>
              <li><a href="#pricing" className="hover:text-sky-600 transition-colors">{t.nav.pricing}</a></li>
              <li><a href="#industries" className="hover:text-sky-600 transition-colors">{t.nav.industries}</a></li>
            </ul>
          </div>

          {/* Col 4: Pricing & Plans */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              {isAr ? 'الباقات والتسعير' : 'Plans & Pricing'}
            </h4>
            <ul className="space-y-2">
              <li><a href="#pricing" className="hover:text-sky-600 transition-colors">{isAr ? 'الباقة الأساسية (100 ر.س)' : 'Starter Plan (100 SAR)'}</a></li>
              <li><a href="#pricing" className="hover:text-sky-600 transition-colors">{isAr ? 'باقة النمو الاحترافية (250 ر.س)' : 'Professional Plan (250 SAR)'}</a></li>
              <li><a href="#pricing" className="hover:text-sky-600 transition-colors">{isAr ? 'باقة المؤسسات والخادم الخاص' : 'Enterprise On-Premise'}</a></li>
              <li><a href="#zatca" className="hover:text-sky-600 transition-colors">{isAr ? 'مطابقة الفوترة الإلكترونية' : 'ZATCA Compliance Guide'}</a></li>
            </ul>
          </div>

          {/* Col 5: Contact Info */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              {t.nav.contact}
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li className="flex items-center gap-2 text-slate-700">
                <Phone className="w-4 h-4 text-sky-600 shrink-0" />
                <a href={getCallLink()} className="hover:text-sky-600 font-medium">{siteConfig.contact.phoneFormatted}</a>
              </li>
              <li className="flex items-center gap-2 text-slate-700">
                <MessageCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <a href={getWhatsAppLink(lang)} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-700 font-medium">واتساب المبيعات المباشر</a>
              </li>
              <li className="flex items-center gap-2 text-slate-700">
                <MapPin className="w-4 h-4 text-sky-600 shrink-0" />
                <span>المملكة العربية السعودية</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 text-center sm:text-left rtl:sm:text-right">
          <div>{t.footer.rights}</div>
          <div className="flex items-center gap-4">
            <span className="text-slate-500">EasyERP Enterprise Cloud v2.6</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
