import React, { useState } from 'react';
import { 
  Check, Sparkles, MessageCircle, Phone, 
  ShieldCheck 
} from 'lucide-react';
import { getWhatsAppLink } from '../data/config';

export default function PricingSection({ lang, t }) {
  const isAr = lang === 'ar';
  const [billingCycle, setBillingCycle] = useState('monthly'); // 'monthly' | 'annual'

  const starterPrice = billingCycle === 'annual' ? 85 : 100;
  const proPrice = billingCycle === 'annual' ? 210 : 250;

  return (
    <section id="pricing" className="py-20 md:py-28 relative bg-[#fafbfd]">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs sm:text-sm font-semibold mb-4">
            <Sparkles className="w-4 h-4 text-sky-600" />
            <span>{t.pricing.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {t.pricing.title}
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            {t.pricing.subtitle}
          </p>

          {/* Billing Cycle Switcher */}
          <div className="mt-8 inline-flex items-center p-1 rounded-2xl bg-slate-100 border border-slate-200 shadow-2xs">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {t.pricing.monthly}
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 ${
                billingCycle === 'annual'
                  ? 'bg-sky-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <span>{t.pricing.annual}</span>
              <span className={`text-[10px] font-black px-1.5 py-0.5 rounded ${billingCycle === 'annual' ? 'bg-white text-sky-700' : 'bg-emerald-100 text-emerald-800'}`}>
                -15%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          
          {/* Card 1: Starter Tier (100 SAR) */}
          <div className="rounded-3xl bg-white border border-slate-200 p-8 flex flex-col justify-between hover:border-slate-300 transition-all shadow-sm hover:shadow-md relative">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-slate-900">
                  {t.pricing.starter.name}
                </h3>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                  {isAr ? 'البداية الذكية' : 'Smart Start'}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed min-h-[40px]">
                {t.pricing.starter.desc}
              </p>

              {/* Price Display */}
              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
                  {starterPrice}
                </span>
                <span className="text-lg font-bold text-slate-700">{t.pricing.sar}</span>
                <span className="text-xs text-slate-500">
                  {billingCycle === 'annual' ? t.pricing.perMonth : t.pricing.perMonth}
                </span>
              </div>
              {billingCycle === 'annual' && (
                <div className="text-[11px] text-emerald-600 mt-1 font-medium">
                  {isAr ? 'فاتورة سنوية 1,020 ر.س (وفر شهرين مجاناً)' : 'Billed annually 1,020 SAR (Save 2 months)'}
                </div>
              )}

              {/* Features List */}
              <div className="mt-8 space-y-3 pt-6 border-t border-slate-100">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  {isAr ? 'الميزات الأساسية المتضمنة:' : 'Included Core Modules:'}
                </div>
                {t.pricing.starter.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100">
              <a
                href={getWhatsAppLink(lang, isAr ? 'مرحباً، أود الاشتراك في باقة البداية (100 ر.س/شهرياً) وتفعيل النسخة.' : 'Hello, I would like to subscribe to the Starter Plan (100 SAR/mo).')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-bold text-white bg-slate-900 hover:bg-slate-800 transition-all shadow-xs"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{t.pricing.starter.cta}</span>
              </a>
            </div>
          </div>

          {/* Card 2: Professional Plan (POPULAR) */}
          <div className="rounded-3xl bg-white border-2 border-sky-600 p-8 flex flex-col justify-between hover:border-sky-500 transition-all shadow-lg shadow-sky-600/10 relative scale-100 lg:-translate-y-2">
            
            {/* Popular Badge */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-sky-600 text-white text-xs font-extrabold uppercase tracking-wider shadow-sm">
              {t.pricing.popularBadge}
            </div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-slate-900">
                  {t.pricing.pro.name}
                </h3>
                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-sky-50 text-sky-700 border border-sky-100">
                  {isAr ? 'الأكثر اكتمالاً' : 'Most Popular'}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed min-h-[40px]">
                {t.pricing.pro.desc}
              </p>

              {/* Price Display */}
              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-4xl sm:text-5xl font-black text-sky-600 tracking-tight">
                  {proPrice}
                </span>
                <span className="text-lg font-bold text-slate-700">{t.pricing.sar}</span>
                <span className="text-xs text-slate-500">
                  {billingCycle === 'annual' ? t.pricing.perMonth : t.pricing.perMonth}
                </span>
              </div>
              {billingCycle === 'annual' && (
                <div className="text-[11px] text-emerald-600 mt-1 font-medium">
                  {isAr ? 'فاتورة سنوية 2,520 ر.س (وفر 480 ر.س)' : 'Billed annually 2,520 SAR (Save 480 SAR)'}
                </div>
              )}

              {/* Features List */}
              <div className="mt-8 space-y-3 pt-6 border-t border-slate-100">
                <div className="text-xs font-bold uppercase tracking-wider text-sky-600 mb-2">
                  {isAr ? 'كل ميزات الأساسية بالإضافة إلى:' : 'Everything in Starter, plus:'}
                </div>
                {t.pricing.pro.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100">
              <a
                href={getWhatsAppLink(lang, isAr ? 'مرحباً، أود الاشتراك في باقة النمو الاحترافية (250 ر.س/شهرياً).' : 'Hello, I would like to subscribe to the Growth Professional Plan (250 SAR/mo).')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 transition-all shadow-xs"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{t.pricing.pro.cta}</span>
              </a>
            </div>
          </div>

          {/* Card 3: Enterprise Custom Tier */}
          <div className="rounded-3xl bg-white border border-slate-200 p-8 flex flex-col justify-between hover:border-slate-300 transition-all shadow-sm hover:shadow-md relative">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-slate-900">
                  {t.pricing.enterprise.name}
                </h3>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                  {isAr ? 'الشركات الكبرى' : 'Enterprise'}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed min-h-[40px]">
                {t.pricing.enterprise.desc}
              </p>

              {/* Price Display */}
              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                  {t.pricing.enterprise.price}
                </span>
              </div>
              <div className="text-[11px] text-slate-500 mt-1">
                {isAr ? 'تثبيت محلي على خوادمك الخاصة أو سحابة مخصصة' : 'On-Premise Server or Dedicated Private Cloud'}
              </div>

              {/* Features List */}
              <div className="mt-8 space-y-3 pt-6 border-t border-slate-100">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  {isAr ? 'ميزات المؤسسات الكبرى:' : 'Enterprise Architecture:'}
                </div>
                {t.pricing.enterprise.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <Check className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100">
              <a
                href={getWhatsAppLink(lang, isAr ? 'مرحباً، نرغب في الحصول على عرض مالي مخصص لباقة المؤسسات (Enterprise) وخيار التثبيت على خادمنا الخاص.' : 'Hello, we would like a custom proposal for the Enterprise Plan and On-Premise server option.')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-all shadow-2xs"
              >
                <Phone className="w-4 h-4 text-sky-600" />
                <span>{t.pricing.enterprise.cta}</span>
              </a>
            </div>
          </div>

        </div>

        {/* Footnote about self-hosting & support */}
        <div className="mt-12 text-center text-xs sm:text-sm text-slate-500 max-w-2xl mx-auto flex items-center justify-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>
            {isAr 
              ? 'جميع الباقات تشمل التحديثات الضريبية المستمرة مع هيئة الزكاة (زاتكا) والنسخ الاحتياطي الآمن.'
              : 'All plans include continuous ZATCA tax regulatory updates and automated encrypted backups.'}
          </span>
        </div>

      </div>

    </section>
  );
}
