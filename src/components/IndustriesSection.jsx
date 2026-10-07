import React from 'react';
import { 
  Truck, Store, Wrench, Building, 
  CheckCircle2 
} from 'lucide-react';

export default function IndustriesSection({ lang, t }) {
  const isAr = lang === 'ar';
  const industryIcons = [Truck, Store, Wrench, Building];

  return (
    <section id="industries" className="py-20 md:py-28 relative bg-white border-t border-slate-200/80">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs sm:text-sm font-semibold mb-4">
            <Building className="w-4 h-4 text-sky-600" />
            <span>{t.industries.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {t.industries.title}
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            {t.industries.subtitle}
          </p>
        </div>

        {/* Industries Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.industries.items.map((item, idx) => {
            const Icon = industryIcons[idx] || Building;
            return (
              <div 
                key={idx}
                className="p-6 sm:p-7 rounded-2xl bg-slate-50/70 border border-slate-200 hover:border-slate-300 transition-all shadow-2xs hover:shadow-sm flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-sky-600 mb-5 shadow-2xs group-hover:scale-105 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center gap-1.5 text-xs font-semibold text-emerald-600">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{isAr ? 'متوافق وجاهز فوراً' : 'Ready Out-of-the-Box'}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>

    </section>
  );
}
