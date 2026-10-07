import React from 'react';
import { 
  ShieldCheck, QrCode, FileCode, CheckCircle2, 
  ArrowRight, ArrowLeft, FileCheck2, MessageCircle
} from 'lucide-react';
import { getWhatsAppLink } from '../data/config';

export default function ZatcaSection({ lang, t }) {
  const isAr = lang === 'ar';
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  return (
    <section id="zatca" className="py-20 md:py-28 relative bg-white border-y border-slate-200/80">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs sm:text-sm font-semibold mb-4">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>{t.zatca.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {t.zatca.title}
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            {t.zatca.description}
          </p>
        </div>

        {/* Phase 1 vs Phase 2 Comparison Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          
          {/* Phase 1 Card */}
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-50/70 border border-slate-200 hover:border-slate-300 transition-all shadow-2xs group">
            <div className="flex items-center justify-between mb-4">
              <span className="px-3 py-1 rounded-lg bg-sky-100/70 text-sky-800 text-xs font-bold uppercase tracking-wider">
                المرحلة 1 • Phase 1
              </span>
              <QrCode className="w-6 h-6 text-sky-600 group-hover:scale-105 transition-transform" />
            </div>

            <h3 className="text-xl font-bold text-slate-900 mb-2">
              {t.zatca.phase1Title}
            </h3>

            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              {t.zatca.phase1Desc}
            </p>

            <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{isAr ? 'توليد تلقائي لرموز QR المشفرة (Base64 TLV Encoding)' : 'Automated Base64 TLV encrypted QR code generation'}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{isAr ? 'منع التعديل والحذف العشوائي للفواتير المصدرة' : 'Tamper-proof sequencing preventing invoice deletion or editing'}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{isAr ? 'إصدار الفواتير الضريبية وفواتير المشتريات متضمنة الرقم الضريبي' : 'Compliant B2B & B2C tax invoices with mandatory VAT disclosures'}</span>
              </li>
            </ul>
          </div>

          {/* Phase 2 Card */}
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-50/70 border-2 border-emerald-500/40 hover:border-emerald-500/60 transition-all shadow-2xs group relative">
            
            <div className="flex items-center justify-between mb-4">
              <span className="px-3 py-1 rounded-lg bg-emerald-100/70 text-emerald-800 text-xs font-bold uppercase tracking-wider">
                المرحلة 2 • Phase 2 Integration
              </span>
              <FileCode className="w-6 h-6 text-emerald-600 group-hover:scale-105 transition-transform" />
            </div>

            <h3 className="text-xl font-bold text-slate-900 mb-2">
              {t.zatca.phase2Title}
            </h3>

            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              {t.zatca.phase2Desc}
            </p>

            <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{isAr ? 'توليد ملفات XML متوافقة مع معيار UBL 2.1 ومواصفات فاتورة' : 'Automatic UBL 2.1 standard XML invoice formatting'}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{isAr ? 'التوقيع الرقمي المشفر (Cryptographic Stamp) ومعرف UUID فريد' : 'Cryptographic digital stamp & Universally Unique Identifier (UUID)'}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{isAr ? 'الربط المباشر مع منصة فاتورة (Fatoora) للمسح الضوئي والاعتماد الحي' : 'Direct API integration with Fatoora platform for live clearance'}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Feature Matrix Checkmarks */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-slate-50/50 border border-slate-200">
          <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-6 text-center">
            {isAr ? 'ميزات الامتثال الضريبي الشاملة في EasyERP' : 'Comprehensive Tax Compliance Features Included'}
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {t.zatca.features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                <FileCheck2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-700 font-medium">{feature}</span>
              </div>
            ))}
          </div>

          {/* Guarantee banner & WhatsApp verification CTA */}
          <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-sm text-slate-800 font-semibold text-center sm:text-left rtl:sm:text-right">
              <ShieldCheck className="w-6 h-6 text-emerald-600 shrink-0" />
              <span>{t.zatca.complianceGuarantee}</span>
            </div>

            <a
              href={getWhatsAppLink(lang, isAr ? 'مرحباً، أود استشارة أخصائي زاتكا لديكم والتأكد من مطابقة نظامي.' : 'Hello, I would like to consult your ZATCA specialist.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl transition-all shadow-xs shrink-0"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{isAr ? 'استشر خبير زاتكا الآن' : 'Consult ZATCA Specialist'}</span>
            </a>
          </div>

        </div>

      </div>

    </section>
  );
}
