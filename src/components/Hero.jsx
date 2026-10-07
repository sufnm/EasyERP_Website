import React from 'react';
import { 
  MessageCircle, Phone, Sparkles, CheckCircle2, 
  ArrowLeft, ArrowRight, ShieldCheck, 
  TrendingUp, Receipt, Package, Building2,
  QrCode, Zap
} from 'lucide-react';
import { getWhatsAppLink, getCallLink } from '../data/config';

export default function Hero({ lang, t, onOpenDemo }) {
  const isAr = lang === 'ar';
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-gradient-to-b from-sky-50/30 via-[#fafbfd] to-[#fafbfd]">
      
      {/* Background subtle micro-dots */}
      <div className="absolute inset-0 bg-dot-pattern opacity-60 pointer-events-none -z-10" />

      {/* Very subtle ambient gradient flare */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-sky-100/40 via-emerald-50/20 to-transparent rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Announcement Tag */}
        <div className="flex flex-col items-center text-center">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/90 text-slate-700 text-xs sm:text-sm font-medium shadow-2xs mb-6">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-slate-800 font-semibold">{t.hero.tag}</span>
            <span className="bg-sky-50 text-sky-700 border border-sky-100 text-[11px] px-2 py-0.5 rounded-full font-bold">
              ZATCA Phase 1 & 2
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="max-w-4xl text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.2] sm:leading-[1.18]">
            {t.hero.titleStart}{' '}
            <span className="text-sky-600 relative inline-block">
              {t.hero.titleHighlight}
              <span className="absolute bottom-1 left-0 right-0 h-2 bg-sky-100/80 -z-1 rounded-sm" />
            </span>{' '}
            {t.hero.titleEnd}
          </h1>

          {/* Subtitle */}
          <p className="mt-5 max-w-2xl text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            {t.hero.description}
          </p>

          {/* Pricing Highlight Pill */}
          <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-200/90 text-slate-700 text-sm shadow-2xs">
            <span className="text-slate-500">{t.hero.pricingBadge}</span>
            <span className="text-xl sm:text-2xl font-black text-sky-600 tracking-tight">
              {t.hero.pricingValue}
            </span>
            <span className="text-slate-500 text-xs font-semibold">{t.hero.pricingPeriod}</span>
            <span className="text-slate-300">|</span>
            <span className="text-xs text-slate-600 font-medium">مبيعات • مشتريات • مخزون • محاسبة • زاتكا</span>
          </div>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
            
            {/* Primary: WhatsApp CTA */}
            <a
              href={getWhatsAppLink(lang)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl shadow-xs transition-all hover:scale-102"
            >
              <MessageCircle className="w-5 h-5" />
              <span>{t.hero.ctaWhatsApp}</span>
            </a>

            {/* Direct Call CTA */}
            <a
              href={getCallLink()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-bold text-slate-800 bg-white hover:bg-slate-50 border border-slate-200 rounded-xl shadow-2xs transition-all hover:scale-102"
            >
              <Phone className="w-4 h-4 text-sky-600" />
              <span>{t.hero.ctaCall}</span>
            </a>

            {/* Interactive Demo CTA */}
            <button
              onClick={onOpenDemo}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm sm:text-base font-semibold text-slate-700 hover:text-slate-900 bg-slate-100/70 hover:bg-slate-200/70 border border-slate-200/60 rounded-xl transition-all group"
            >
              <Zap className="w-4 h-4 text-amber-500 group-hover:scale-110 transition-transform" />
              <span>{t.hero.ctaDemo}</span>
              <ArrowIcon className="w-4 h-4 text-slate-400 group-hover:text-slate-700 transition-transform" />
            </button>

          </div>

          {/* Trust Highlights Checklist */}
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3 text-xs sm:text-sm text-slate-700 max-w-4xl w-full">
            <div className="flex items-center justify-center gap-2 p-3 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span className="font-medium">{t.hero.badgeZatca}</span>
            </div>
            <div className="flex items-center justify-center gap-2 p-3 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
              <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
              <span className="font-medium">{t.hero.badgeVision}</span>
            </div>
            <div className="flex items-center justify-center gap-2 p-3 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
              <Building2 className="w-4 h-4 text-indigo-600 shrink-0" />
              <span className="font-medium">{t.hero.badgeBranches}</span>
            </div>
            <div className="flex items-center justify-center gap-2 p-3 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
              <Sparkles className="w-4 h-4 text-amber-500 shrink-0" />
              <span className="font-medium">{t.hero.badgeCloudLocal}</span>
            </div>
          </div>

        </div>

        {/* Clean Light-Mode Dashboard Mockup Preview */}
        <div className="mt-14 relative max-w-5xl mx-auto">
          
          {/* Subtle Outer Drop Shadow */}
          <div className="relative rounded-2xl bg-white border border-slate-200/90 shadow-xl shadow-slate-200/70 overflow-hidden">
            
            {/* Top Window Bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-slate-50 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-slate-300" />
                <span className="w-3 h-3 rounded-full bg-slate-300" />
                <span className="w-3 h-3 rounded-full bg-slate-300" />
                <span className="text-xs font-mono text-slate-500 ml-2 rtl:mr-2 rtl:ml-0 font-medium">
                  EasyERP Enterprise • Saudi Cloud Instance (KSA)
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  ZATCA LIVE SYNC OK
                </span>
              </div>
            </div>

            {/* Inner Dashboard View */}
            <div className="p-4 sm:p-6 space-y-6 bg-white">
              
              {/* Row 1: Key Performance Metrics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                
                {/* Metric 1 */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70">
                  <div className="flex items-center justify-between text-slate-500 text-xs font-medium">
                    <span>{isAr ? 'مبيعات اليوم الإجمالية' : "Today's Gross Sales"}</span>
                    <TrendingUp className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div className="mt-2 text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    18,450.00 <span className="text-xs text-slate-500 font-normal">ر.س</span>
                  </div>
                  <div className="mt-1 text-[11px] text-emerald-600 font-medium">
                    +14.2% {isAr ? 'مقارنة بالأمس' : 'vs yesterday'}
                  </div>
                </div>

                {/* Metric 2 */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70">
                  <div className="flex items-center justify-between text-slate-500 text-xs font-medium">
                    <span>{isAr ? 'فواتير زاتكا المصدرة' : 'ZATCA Tax Invoices'}</span>
                    <Receipt className="w-4 h-4 text-sky-600" />
                  </div>
                  <div className="mt-2 text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    48 <span className="text-xs text-slate-500 font-normal">{isAr ? 'فاتورة' : 'issued'}</span>
                  </div>
                  <div className="mt-1 text-[11px] text-emerald-600 font-medium flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    <span>100% {isAr ? 'مختومة إلكترونياً' : 'Cryptographically stamped'}</span>
                  </div>
                </div>

                {/* Metric 3 */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70">
                  <div className="flex items-center justify-between text-slate-500 text-xs font-medium">
                    <span>{isAr ? 'حركة المخزون اللحظية' : 'Active Stock Items'}</span>
                    <Package className="w-4 h-4 text-amber-600" />
                  </div>
                  <div className="mt-2 text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    1,280 <span className="text-xs text-slate-500 font-normal">{isAr ? 'صنف نشط' : 'SKUs'}</span>
                  </div>
                  <div className="mt-1 text-[11px] text-amber-600 font-medium">
                    4 {isAr ? 'أصناف بلغت حد الطلب' : 'reorder alerts'}
                  </div>
                </div>

                {/* Metric 4 */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70">
                  <div className="flex items-center justify-between text-slate-500 text-xs font-medium">
                    <span>{isAr ? 'الفروع المتزامنة' : 'Connected Branches'}</span>
                    <Building2 className="w-4 h-4 text-indigo-600" />
                  </div>
                  <div className="mt-2 text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    3 / 3 <span className="text-xs text-slate-500 font-normal">{isAr ? 'فروع نشطة' : 'online'}</span>
                  </div>
                  <div className="mt-1 text-[11px] text-slate-500">
                    {isAr ? 'الرياض • جدة • الدمام' : 'Riyadh • Jeddah • Dammam'}
                  </div>
                </div>

              </div>

              {/* Row 2: Live Invoices Table */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <QrCode className="w-4 h-4 text-emerald-600" />
                    <span className="text-sm font-semibold text-slate-800">
                      {isAr ? 'أحدث الفواتير الضريبية المعتمدة (مباشر)' : 'Live Tax Invoices (Real-Time ZATCA Registry)'}
                    </span>
                  </div>
                  <span className="text-xs text-slate-500">
                    {isAr ? 'تحديث تلقائي كل 10 ثوانٍ' : 'Auto-updates in real-time'}
                  </span>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-xs text-left rtl:text-right text-slate-700">
                    <thead>
                      <tr className="border-b border-slate-200 text-slate-500 font-medium">
                        <th className="py-2.5 px-3">{isAr ? 'رقم الفاتورة' : 'Invoice #'}</th>
                        <th className="py-2.5 px-3">{isAr ? 'العميل' : 'Customer'}</th>
                        <th className="py-2.5 px-3">{isAr ? 'المبلغ الإجمالي' : 'Total (SAR)'}</th>
                        <th className="py-2.5 px-3">{isAr ? 'ضريبة القيمة المضافة' : 'VAT (15%)'}</th>
                        <th className="py-2.5 px-3">{isAr ? 'حالة زاتكا' : 'ZATCA Status'}</th>
                        <th className="py-2.5 px-3">{isAr ? 'المشاركة' : 'Share'}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 bg-white">
                      <tr>
                        <td className="py-3 px-3 font-mono font-medium text-sky-600">INV-2026-0891</td>
                        <td className="py-3 px-3 font-medium text-slate-800">{isAr ? 'مؤسسة الأفق للحلول التقنية' : 'Modern Horizons Est.'}</td>
                        <td className="py-3 px-3 font-bold text-slate-900">4,830.00 ر.س</td>
                        <td className="py-3 px-3 text-slate-500">630.00 ر.س</td>
                        <td className="py-3 px-3">
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] bg-emerald-50 text-emerald-700 border border-emerald-200 font-semibold">
                            <CheckCircle2 className="w-3 h-3" />
                            {isAr ? 'مقبولة - فاتورة' : 'CLEARED - FATOORA'}
                          </span>
                        </td>
                        <td className="py-3 px-3">
                          <span className="text-[11px] text-emerald-600 hover:text-emerald-700 cursor-pointer flex items-center gap-1 font-medium">
                            <MessageCircle className="w-3 h-3" />
                            واتساب PDF
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 px-3 font-mono font-medium text-sky-600">INV-2026-0890</td>
                        <td className="py-3 px-3 font-medium text-slate-800">{isAr ? 'شركة النخبة للمقاولات العامة' : 'Elite Contracting Co.'}</td>
                        <td className="py-3 px-3 font-bold text-slate-900">12,650.00 ر.س</td>
                        <td className="py-3 px-3 text-slate-500">1,650.00 ر.س</td>
                        <td className="py-3 px-3">
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] bg-emerald-50 text-emerald-700 border border-emerald-200 font-semibold">
                            <CheckCircle2 className="w-3 h-3" />
                            {isAr ? 'مقبولة - فاتورة' : 'CLEARED - FATOORA'}
                          </span>
                        </td>
                        <td className="py-3 px-3">
                          <span className="text-[11px] text-emerald-600 hover:text-emerald-700 cursor-pointer flex items-center gap-1 font-medium">
                            <MessageCircle className="w-3 h-3" />
                            واتساب PDF
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
