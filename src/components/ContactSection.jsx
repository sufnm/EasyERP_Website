import React, { useState } from 'react';
import { 
  MessageCircle, Phone, Send, MapPin, Sparkles 
} from 'lucide-react';
import { siteConfig, getWhatsAppLink, getCallLink } from '../data/config';

export default function ContactSection({ lang, t }) {
  const isAr = lang === 'ar';
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    company: '',
    tier: 'starter',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    const tierName = formData.tier === 'starter' 
      ? t.contact.tierStarter 
      : (formData.tier === 'pro' ? t.contact.tierPro : t.contact.tierEnterprise);

    const message = isAr
      ? `طلب جديد من موقع EasyERP:\n- الاسم: ${formData.name}\n- الجوال: ${formData.phone}\n- المنشأة: ${formData.company}\n- الباقة: ${tierName}\n- الملاحظات: ${formData.notes || 'لا يوجد'}`
      : `New Inquiry from EasyERP Website:\n- Name: ${formData.name}\n- Phone: ${formData.phone}\n- Company: ${formData.company}\n- Plan: ${tierName}\n- Notes: ${formData.notes || 'None'}`;

    const link = getWhatsAppLink(lang, message);
    
    // Open WhatsApp in new tab
    setTimeout(() => {
      window.open(link, '_blank');
      setSubmitted(false);
    }, 500);
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative bg-white border-t border-slate-200/80">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs sm:text-sm font-semibold mb-4">
            <Sparkles className="w-4 h-4 text-sky-600" />
            <span>{t.contact.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {t.contact.title}
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct WhatsApp & Call Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* WhatsApp Big Action Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-emerald-50/60 border border-emerald-200 shadow-2xs">
              <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center mb-4 shadow-2xs">
                <MessageCircle className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                {t.contact.chatBtn}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                {isAr 
                  ? 'تواصل مباشرة مع المستشار التقني عبر واتساب لبدء باقة الـ 100 ريال وتفعيل نسختك التجريبية فوراً.'
                  : 'Chat directly with our technical advisor on WhatsApp to activate the 100 SAR plan or schedule a demo.'}
              </p>
              <a
                href={getWhatsAppLink(lang)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl shadow-xs transition-all hover:scale-102"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{t.contact.chatBtn}</span>
              </a>
            </div>

            {/* Direct Phone Call Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200 shadow-2xs">
              <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-600 border border-sky-100 flex items-center justify-center mb-4 shadow-2xs">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                {t.contact.callBtn}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                {isAr 
                  ? 'اتصل مباشرة بفريق المبيعات والدعم الفني للإجابة على جميع استفساراتك حول الفروع واستضافة النظام.'
                  : 'Call our sales specialists directly for immediate answers regarding branches, pricing, and server setup.'}
              </p>
              <a
                href={getCallLink()}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-bold text-slate-800 bg-white hover:bg-slate-100 border border-slate-200 rounded-xl shadow-2xs transition-all"
              >
                <Phone className="w-4 h-4 text-sky-600" />
                <span>{siteConfig.contact.phoneFormatted}</span>
              </a>
            </div>

            {/* Location & Presence */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-center gap-3">
              <MapPin className="w-5 h-5 text-sky-600 shrink-0" />
              <span>{t.contact.location}</span>
            </div>

          </div>

          {/* Right Column: Callback Request Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-md">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
                {t.contact.formTitle}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mb-6">
                {isAr ? 'املأ الحقول التالية وسيتم توجيه طلبك مباشرة إلى مسؤول المبيعات الميداني.' : 'Fill out the form below and your inquiry will be routed directly to our sales team.'}
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Name */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    {t.contact.name} *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={t.contact.namePlaceholder}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-sky-500 focus:bg-white transition-colors"
                  />
                </div>

                {/* Phone & Company */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      {t.contact.phone} *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder={t.contact.phonePlaceholder}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-sky-500 focus:bg-white transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      {t.contact.company} *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder={t.contact.companyPlaceholder}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-sky-500 focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                {/* Selected Tier */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    {t.contact.tier}
                  </label>
                  <select
                    value={formData.tier}
                    onChange={(e) => setFormData({ ...formData, tier: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-sky-500 focus:bg-white transition-colors"
                  >
                    <option value="starter">{t.contact.tierStarter}</option>
                    <option value="pro">{t.contact.tierPro}</option>
                    <option value="enterprise">{t.contact.tierEnterprise}</option>
                  </select>
                </div>

                {/* Notes */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    {t.contact.notes}
                  </label>
                  <textarea
                    rows="3"
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder={t.contact.notesPlaceholder}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-sky-500 focus:bg-white transition-colors resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={submitted}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 disabled:opacity-70 transition-all shadow-xs"
                >
                  <Send className="w-4 h-4" />
                  <span>{submitted ? t.contact.sending : t.contact.submit}</span>
                </button>

              </form>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}
