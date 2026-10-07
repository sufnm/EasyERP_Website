import React, { useState } from 'react';
import { 
  Receipt, ShoppingCart, Package, Wallet, 
  Building2, CheckCircle2, ArrowRight, ArrowLeft, 
  MessageCircle, Layers
} from 'lucide-react';
import { getWhatsAppLink } from '../data/config';

export default function ModulesShowcase({ lang, t, onOpenDemo }) {
  const isAr = lang === 'ar';
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;
  const [activeTab, setActiveTab] = useState('sales');

  const tabs = [
    { id: 'sales', label: t.modules.tabs.sales, icon: Receipt, data: t.modules.sales },
    { id: 'purchase', label: t.modules.tabs.purchase, icon: ShoppingCart, data: t.modules.purchase },
    { id: 'inventory', label: t.modules.tabs.inventory, icon: Package, data: t.modules.inventory },
    { id: 'accounting', label: t.modules.tabs.accounting, icon: Wallet, data: t.modules.accounting },
    { id: 'branches', label: t.modules.tabs.branches, icon: Building2, data: t.modules.branches },
  ];

  const currentTab = tabs.find(tab => tab.id === activeTab) || tabs[0];

  return (
    <section id="modules" className="py-20 md:py-28 relative bg-[#fafbfd]">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs sm:text-sm font-semibold mb-4">
            <Layers className="w-4 h-4 text-sky-600" />
            <span>{t.modules.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {t.modules.title}
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            {t.modules.subtitle}
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="mt-12 flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 no-scrollbar">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-sky-600 text-white shadow-xs'
                    : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-50 border border-slate-200 shadow-2xs'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Display */}
        <div className="mt-8 rounded-3xl bg-white border border-slate-200 p-6 sm:p-10 shadow-lg shadow-slate-200/50 relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left/Right Text Content (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-sky-50 text-sky-700 text-xs font-semibold border border-sky-100">
                <span className="w-2 h-2 rounded-full bg-sky-600" />
                <span>{currentTab.label}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                {currentTab.data.title}
              </h3>

              <p className="text-base text-slate-600 leading-relaxed font-normal">
                {currentTab.data.desc}
              </p>

              {/* Bullet Points */}
              <div className="space-y-3 pt-2">
                {currentTab.data.points.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-200">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-sm text-slate-700 font-medium">{point}</span>
                  </div>
                ))}
              </div>

              {/* Action buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-3">
                <button
                  onClick={onOpenDemo}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs sm:text-sm font-bold shadow-xs transition-all"
                >
                  <span>{isAr ? 'شاهد الشاشة تفاعلياً' : 'Interactive Preview'}</span>
                  <ArrowIcon className="w-4 h-4" />
                </button>

                <a
                  href={getWhatsAppLink(lang, isAr ? `مرحباً، أود معرفة المزيد عن ميزات ${currentTab.label} في EasyERP.` : `Hello, I would like to learn more about the ${currentTab.label} module.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 text-xs sm:text-sm font-semibold border border-slate-200 shadow-2xs transition-all"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>{isAr ? 'استفسر عبر واتساب' : 'Inquire on WhatsApp'}</span>
                </a>
              </div>

            </div>

            {/* Right/Left Interactive Simulated Card (5 cols) */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-slate-50 border border-slate-200 p-5 shadow-inner space-y-4">
                
                {/* Header of simulated card */}
                <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    <span className="text-xs font-mono text-slate-600 font-medium">EasyERP • Module Snapshot</span>
                  </div>
                  <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded">
                    Active & Synced
                  </span>
                </div>

                {/* Dynamic Content based on activeTab */}
                {activeTab === 'sales' && (
                  <div className="space-y-3 text-xs">
                    <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-2xs flex justify-between items-center">
                      <div>
                        <div className="font-bold text-slate-900">فاتورة مبيعات معتمدة #1029</div>
                        <div className="text-slate-500 text-[11px]">مؤسسة التميز للتوريدات</div>
                      </div>
                      <div className="text-right rtl:text-left">
                        <div className="font-bold text-emerald-600">7,245.00 ر.س</div>
                        <div className="text-[10px] text-slate-500">شامل الضريبة 15%</div>
                      </div>
                    </div>
                    <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-2xs flex justify-between items-center">
                      <div>
                        <div className="font-bold text-slate-900">عرض سعر نشط #QUO-441</div>
                        <div className="text-slate-500 text-[11px]">شركة البناء الحديث</div>
                      </div>
                      <div className="text-right rtl:text-left">
                        <div className="font-bold text-sky-600">18,900.00 ر.س</div>
                        <div className="text-[10px] text-emerald-600 font-medium">جاهز للتحويل لفاتورة</div>
                      </div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-sky-50 border border-sky-100 text-sky-900 text-[11px] flex items-center justify-between font-medium">
                      <span>حد الائتمان للعميل: 50,000 ر.س</span>
                      <span className="font-bold text-sky-700">المتبقي: 23,855 ر.س</span>
                    </div>
                  </div>
                )}

                {activeTab === 'purchase' && (
                  <div className="space-y-3 text-xs">
                    <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-2xs flex justify-between items-center">
                      <div>
                        <div className="font-bold text-slate-900">فاتورة مشتريات مورد #PO-881</div>
                        <div className="text-slate-500 text-[11px]">شركة المصنع المتحد للمعدات</div>
                      </div>
                      <div className="text-right rtl:text-left">
                        <div className="font-bold text-amber-600">34,500.00 ر.س</div>
                        <div className="text-[10px] text-slate-500">استحقاق 30 يوم</div>
                      </div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-1">
                      <div className="flex justify-between text-slate-700">
                        <span>إجمالي مستحقات الموردين:</span>
                        <span className="font-bold text-slate-900">142,000 ر.س</span>
                      </div>
                      <div className="flex justify-between text-slate-500 text-[11px]">
                        <span>سندات صرف قيد السداد:</span>
                        <span className="text-emerald-600 font-semibold">18,500 ر.س</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'inventory' && (
                  <div className="space-y-3 text-xs">
                    <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-slate-900">مستودع الرياض المركزي (WH-01)</span>
                        <span className="text-emerald-600 font-semibold">842 صنف</span>
                      </div>
                      <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
                        <div className="bg-emerald-500 h-1.5 rounded-full" style={{ width: '74%' }} />
                      </div>
                      <div className="flex justify-between text-[11px] text-slate-500 font-medium">
                        <span>السعة المستغلة: 74%</span>
                        <span>قيمة المخزون: 412,000 ر.س</span>
                      </div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white border border-slate-200 shadow-2xs flex justify-between items-center text-slate-700">
                      <span>إذن تحويل بضاعة #TR-102</span>
                      <span className="text-sky-600 font-mono font-semibold">الرياض ← جدة (مكتمل)</span>
                    </div>
                  </div>
                )}

                {activeTab === 'accounting' && (
                  <div className="space-y-3 text-xs">
                    <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-2">
                      <div className="font-bold text-slate-900 flex justify-between">
                        <span>قائمة الدخل والأرباح (P&L)</span>
                        <span className="text-emerald-600">+22.4% صافي ربح</span>
                      </div>
                      <div className="space-y-1 text-slate-600 text-[11px]">
                        <div className="flex justify-between">
                          <span className="text-slate-500">إجمالي الإيرادات:</span>
                          <span className="font-semibold text-slate-900">186,400 ر.س</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-500">تكلفة البضاعة المباعة (COGS):</span>
                          <span className="text-slate-700">114,200 ر.س</span>
                        </div>
                        <div className="flex justify-between border-t border-slate-100 pt-1 text-emerald-600 font-bold">
                          <span>مجمل الربح:</span>
                          <span>72,200 ر.س</span>
                        </div>
                      </div>
                    </div>
                    <div className="p-2 rounded-xl bg-sky-50 border border-sky-100 text-sky-800 text-[11px] flex justify-between items-center font-medium">
                      <span>قيد يومية متوازن آلياً (GL Sync)</span>
                      <span className="font-mono font-bold">DEBIT = CREDIT ✓</span>
                    </div>
                  </div>
                )}

                {activeTab === 'branches' && (
                  <div className="space-y-3 text-xs">
                    <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-2">
                      <div className="font-bold text-slate-900 flex justify-between items-center">
                        <span>نقطة بيع فرع التخصصي (POS-01)</span>
                        <span className="text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded text-[10px] font-semibold">كاشير متصل</span>
                      </div>
                      <div className="flex justify-between text-slate-500 text-[11px]">
                        <span>طابعة الإيصالات:</span>
                        <span className="text-slate-800 font-mono font-medium">Epson TM-T20III (80mm) ✓</span>
                      </div>
                      <div className="flex justify-between text-slate-500 text-[11px]">
                        <span>رصيد الصندوق عند الفتح:</span>
                        <span className="text-slate-900 font-semibold">500.00 ر.س</span>
                      </div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white border border-slate-200 shadow-2xs flex justify-between items-center">
                      <span className="text-slate-600">إقفال اليومية (Day Close):</span>
                      <span className="text-emerald-600 font-semibold">جاهز للاعتماد المركزي</span>
                    </div>
                  </div>
                )}

              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
