import React from 'react';
import { 
  Mic, Sparkles, MessageCircle, Printer, 
  Cpu, FileSearch, Send
} from 'lucide-react';
import { getWhatsAppLink } from '../data/config';

export default function SuperpowersSection({ lang, t }) {
  const isAr = lang === 'ar';

  const icons = {
    voice: Mic,
    ai: Sparkles,
    whatsapp: MessageCircle,
    designer: Printer
  };

  const colors = {
    voice: {
      bg: 'bg-sky-50',
      text: 'text-sky-600',
      border: 'border-sky-100',
      badge: 'bg-sky-50 text-sky-700 border-sky-100'
    },
    ai: {
      bg: 'bg-purple-50',
      text: 'text-purple-600',
      border: 'border-purple-100',
      badge: 'bg-purple-50 text-purple-700 border-purple-100'
    },
    whatsapp: {
      bg: 'bg-emerald-50',
      text: 'text-emerald-600',
      border: 'border-emerald-100',
      badge: 'bg-emerald-50 text-emerald-700 border-emerald-100'
    },
    designer: {
      bg: 'bg-amber-50',
      text: 'text-amber-600',
      border: 'border-amber-100',
      badge: 'bg-amber-50 text-amber-700 border-amber-100'
    }
  };

  return (
    <section id="superpowers" className="py-20 md:py-28 relative bg-white border-t border-slate-200/80">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs sm:text-sm font-semibold mb-4">
            <Cpu className="w-4 h-4 text-indigo-600" />
            <span>{t.superpowers.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {t.superpowers.title}
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            {t.superpowers.subtitle}
          </p>
        </div>

        {/* Superpower Bento Cards Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {t.superpowers.cards.map((card) => {
            const Icon = icons[card.id] || Sparkles;
            const theme = colors[card.id] || colors.ai;

            return (
              <div 
                key={card.id}
                className="relative rounded-2xl bg-slate-50/70 border border-slate-200 p-6 sm:p-8 hover:border-slate-300 transition-all shadow-2xs flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl ${theme.bg} ${theme.border} flex items-center justify-center border shadow-2xs`}>
                      <Icon className={`w-6 h-6 ${theme.text}`} />
                    </div>
                    <span className={`text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${theme.badge}`}>
                      {card.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {card.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {card.desc}
                  </p>
                </div>

                {/* Micro Visual representation */}
                <div className="mt-6 pt-4 border-t border-slate-200/80">
                  {card.id === 'voice' && (
                    <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-center gap-3 text-xs">
                      <div className="w-8 h-8 rounded-full bg-sky-50 text-sky-600 flex items-center justify-center shrink-0 border border-sky-100">
                        <Mic className="w-4 h-4" />
                      </div>
                      <div className="flex-1 font-medium text-slate-700">
                        {isAr ? '«إضافة 5 حبات كابل نحاس 4 ملم لسعر 45 ريال»' : '"Add 5 units Copper Cable 4mm at 45 SAR"'}
                      </div>
                      <span className="text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded text-[10px]">✓ مسجل صوتياً</span>
                    </div>
                  )}

                  {card.id === 'ai' && (
                    <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-center gap-3 text-xs">
                      <div className="w-8 h-8 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 border border-purple-100">
                        <FileSearch className="w-4 h-4" />
                      </div>
                      <div className="flex-1 text-slate-700 font-medium">
                        {isAr ? 'مسح فاتورة المورد PDF بواسطة Gemini AI' : 'Scanned Vendor PDF via Gemini AI'}
                      </div>
                      <span className="text-purple-700 font-bold bg-purple-50 px-2 py-0.5 rounded text-[10px]">12 صنف مستخرج</span>
                    </div>
                  )}

                  {card.id === 'whatsapp' && (
                    <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-center gap-3 text-xs">
                      <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-100">
                        <Send className="w-4 h-4" />
                      </div>
                      <div className="flex-1 text-slate-700 font-medium">
                        {isAr ? 'تم إرسال الفاتورة والباركود لرقم العميل' : 'Dispatched Invoice PDF & QR to Customer'}
                      </div>
                      <span className="text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded text-[10px]">✓ تم التسليم</span>
                    </div>
                  )}

                  {card.id === 'designer' && (
                    <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-center gap-3 text-xs">
                      <div className="w-8 h-8 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 border border-amber-100">
                        <Printer className="w-4 h-4" />
                      </div>
                      <div className="flex-1 text-slate-700 font-medium">
                        {isAr ? 'طباعة حرارية 80 ملم + قوالب A4 مخصصة بالكامل' : 'Thermal 80mm + Fully Customized A4 Templates'}
                      </div>
                      <span className="text-amber-700 font-bold bg-amber-50 px-2 py-0.5 rounded text-[10px]">ESC/POS</span>
                    </div>
                  )}
                </div>

              </div>
            );
          })}
        </div>

      </div>

    </section>
  );
}
