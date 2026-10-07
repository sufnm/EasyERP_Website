import React, { useState } from 'react';
import { 
  X, QrCode, CheckCircle2, TrendingUp, 
  Receipt, Package, MessageCircle 
} from 'lucide-react';
import { getWhatsAppLink } from '../data/config';

export default function InteractiveDemoModal({ isOpen, onClose, lang, t }) {
  if (!isOpen) return null;

  const isAr = lang === 'ar';
  const [activeTab, setActiveTab] = useState('invoice'); // 'invoice' | 'dashboard' | 'stock'

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs transition-opacity" 
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-5xl bg-white border border-slate-200 rounded-3xl shadow-2xl overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-150 my-auto">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-50 border-b border-slate-200">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-sky-50 text-sky-600 border border-sky-100 flex items-center justify-center font-bold text-sm">
              ERP
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <span>{isAr ? 'تجربة حية تفاعلية لنظام EasyERP' : 'EasyERP Interactive Live Preview'}</span>
                <span className="text-[10px] bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-0.5 rounded-full font-bold">
                  SIMULATION
                </span>
              </div>
              <div className="text-xs text-slate-500">
                {isAr ? 'بيئة تجريبية حية للمبيعات والمخزون وفواتير زاتكا' : 'Live sandbox for sales, inventory and ZATCA compliance'}
              </div>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 px-6 pt-3 border-b border-slate-200 bg-white overflow-x-auto">
          <button
            onClick={() => setActiveTab('invoice')}
            className={`pb-3 px-3 text-xs sm:text-sm font-bold border-b-2 transition-all flex items-center gap-2 ${
              activeTab === 'invoice'
                ? 'border-sky-600 text-sky-600'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Receipt className="w-4 h-4" />
            <span>{isAr ? 'نموذج فاتورة زاتكا الضريبية' : 'ZATCA Tax Invoice Sample'}</span>
          </button>

          <button
            onClick={() => setActiveTab('dashboard')}
            className={`pb-3 px-3 text-xs sm:text-sm font-bold border-b-2 transition-all flex items-center gap-2 ${
              activeTab === 'dashboard'
                ? 'border-sky-600 text-sky-600'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <TrendingUp className="w-4 h-4" />
            <span>{isAr ? 'لوحة مؤشرات الأداء (Dashboard)' : 'Executive Dashboard'}</span>
          </button>

          <button
            onClick={() => setActiveTab('stock')}
            className={`pb-3 px-3 text-xs sm:text-sm font-bold border-b-2 transition-all flex items-center gap-2 ${
              activeTab === 'stock'
                ? 'border-sky-600 text-sky-600'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Package className="w-4 h-4" />
            <span>{isAr ? 'شاشة جرد ومستودعات' : 'Inventory & Warehouse'}</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 max-h-[70vh] overflow-y-auto bg-slate-50/50">
          
          {/* TAB 1: INVOICE SAMPLE */}
          {activeTab === 'invoice' && (
            <div className="bg-white text-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 text-xs sm:text-sm">
              
              {/* Invoice Top Row */}
              <div className="flex flex-col sm:flex-row justify-between items-start gap-4 border-b border-slate-100 pb-4">
                <div>
                  <h4 className="text-lg sm:text-xl font-extrabold text-slate-900">
                    شركة الرواد للتجارة والمقاولات
                  </h4>
                  <div className="text-xs text-slate-500">AL-ROWWAD TRADING & CONTRACTING CO.</div>
                  <div className="text-xs text-slate-600 mt-1">الرياض - طريق الملك فهد - المملكة العربية السعودية</div>
                  <div className="text-xs font-mono font-bold text-slate-800 mt-1">
                    الرقم الضريبي (VAT): 310123456700003
                  </div>
                </div>

                {/* Simulated ZATCA QR Code */}
                <div className="flex flex-col items-center p-2 rounded-xl border border-slate-200 bg-slate-50">
                  <div className="w-20 h-20 bg-slate-900 text-white flex items-center justify-center rounded-lg p-1">
                    <QrCode className="w-16 h-16 text-white" />
                  </div>
                  <span className="text-[9px] font-mono text-slate-600 mt-1 text-center font-bold">
                    ZATCA PHASE 2 QR
                  </span>
                </div>
              </div>

              {/* Invoice Meta */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-50 p-3.5 rounded-xl border border-slate-200 text-xs">
                <div>
                  <span className="text-slate-500 block">رقم الفاتورة:</span>
                  <span className="font-bold font-mono text-slate-900">INV-2026-0891</span>
                </div>
                <div>
                  <span className="text-slate-500 block">تاريخ الإصدار:</span>
                  <span className="font-bold text-slate-900">2026-09-23 10:45 AM</span>
                </div>
                <div>
                  <span className="text-slate-500 block">اسم العميل:</span>
                  <span className="font-bold text-slate-900">مؤسسة الأفق الذكية</span>
                </div>
                <div>
                  <span className="text-slate-500 block">نوع الفاتورة:</span>
                  <span className="font-bold text-emerald-700">فاتورة ضريبية مبسطة (B2C)</span>
                </div>
              </div>

              {/* Items Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left rtl:text-right">
                  <thead>
                    <tr className="bg-slate-50 border-y border-slate-200 text-slate-600">
                      <th className="py-2.5 px-3">#</th>
                      <th className="py-2.5 px-3">الصنف / الوصف</th>
                      <th className="py-2.5 px-3 text-center">الكمية</th>
                      <th className="py-2.5 px-3">سعر الوحدة</th>
                      <th className="py-2.5 px-3">الضريبة 15%</th>
                      <th className="py-2.5 px-3">المجموع</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-800">
                    <tr>
                      <td className="py-2.5 px-3 font-mono text-slate-500">01</td>
                      <td className="py-2.5 px-3 font-medium">لوحة توزيع كهربائية 12 خط شنايدر</td>
                      <td className="py-2.5 px-3 text-center font-bold">4</td>
                      <td className="py-2.5 px-3">350.00 ر.س</td>
                      <td className="py-2.5 px-3 text-slate-500">210.00 ر.س</td>
                      <td className="py-2.5 px-3 font-bold text-slate-900">1,610.00 ر.س</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-3 font-mono text-slate-500">02</td>
                      <td className="py-2.5 px-3 font-medium">كابل نحاس معزول 4 ملم (لفة 100م) الرياض</td>
                      <td className="py-2.5 px-3 text-center font-bold">10</td>
                      <td className="py-2.5 px-3">280.00 ر.س</td>
                      <td className="py-2.5 px-3 text-slate-500">420.00 ر.س</td>
                      <td className="py-2.5 px-3 font-bold text-slate-900">3,220.00 ر.س</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Totals Box */}
              <div className="flex justify-end pt-2">
                <div className="w-full sm:w-72 bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2 text-xs">
                  <div className="flex justify-between text-slate-600">
                    <span>المجموع الخاضع للضريبة:</span>
                    <span className="font-semibold text-slate-900">4,200.00 ر.س</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>ضريبة القيمة المضافة (15%):</span>
                    <span className="font-semibold text-slate-900">630.00 ر.س</span>
                  </div>
                  <div className="flex justify-between text-base font-extrabold text-slate-900 border-t border-slate-200 pt-2">
                    <span>الإجمالي شامل الضريبة:</span>
                    <span className="text-emerald-700">4,830.00 ر.س</span>
                  </div>
                </div>
              </div>

              {/* Verified Stamp Note */}
              <div className="flex items-center justify-between text-[11px] text-slate-500 pt-2 border-t border-slate-100">
                <span className="flex items-center gap-1 text-emerald-700 font-bold">
                  <CheckCircle2 className="w-4 h-4" />
                  تم الاعتماد والتوقيع الرقمي بنجاح بموجب اشتراطات هيئة الزكاة (ZATCA)
                </span>
                <span className="font-mono text-slate-400">UUID: 8f42a1b9-3c7d-4e92-a1f0-7b2438c8942b</span>
              </div>

            </div>
          )}

          {/* TAB 2: DASHBOARD */}
          {activeTab === 'dashboard' && (
            <div className="space-y-6">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <div className="text-xs text-slate-500">إجمالي مبيعات الشهر</div>
                  <div className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">284,500 ر.س</div>
                  <div className="text-xs text-emerald-600 mt-1 font-medium">+18.5% نمو</div>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <div className="text-xs text-slate-500">صافي الأرباح المحققة</div>
                  <div className="text-xl sm:text-2xl font-bold text-emerald-600 mt-1">62,800 ر.س</div>
                  <div className="text-xs text-slate-500 mt-1">هامش ربح 22%</div>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <div className="text-xs text-slate-500">سندات قبض محصلة اليوم</div>
                  <div className="text-xl sm:text-2xl font-bold text-sky-600 mt-1">14,250 ر.س</div>
                  <div className="text-xs text-slate-500 mt-1">6 شيكات وحوالات</div>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <div className="text-xs text-slate-500">فواتير موردين مستحقة</div>
                  <div className="text-xl sm:text-2xl font-bold text-amber-600 mt-1">19,400 ر.س</div>
                  <div className="text-xs text-amber-600 mt-1">خلال 7 أيام</div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-bold text-slate-900 text-sm">مقارنة مبيعات الفروع الثلاثة (الرياض • جدة • الدمام)</span>
                  <span className="text-xs text-emerald-600 font-medium">بيانات لحظية</span>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-xs text-slate-600 mb-1">
                      <span>فرع الرياض المركزي</span>
                      <span className="font-bold text-slate-900">142,000 ر.س (50%)</span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-2">
                      <div className="bg-sky-600 h-2 rounded-full" style={{ width: '50%' }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs text-slate-600 mb-1">
                      <span>فرع جدة التحلية</span>
                      <span className="font-bold text-slate-900">85,500 ر.س (30%)</span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: '30%' }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs text-slate-600 mb-1">
                      <span>فرع الدمام</span>
                      <span className="font-bold text-slate-900">57,000 ر.س (20%)</span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-2">
                      <div className="bg-amber-500 h-2 rounded-full" style={{ width: '20%' }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: STOCK */}
          {activeTab === 'stock' && (
            <div className="space-y-4 text-xs">
              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs flex justify-between items-center">
                <div className="font-bold text-slate-900 text-sm">أرصدة المخزون والتنبيهات المباشرة</div>
                <span className="text-xs text-slate-500">إجمالي الأصناف: 1,420 صنف</span>
              </div>

              <div className="rounded-xl border border-slate-200 overflow-hidden bg-white shadow-2xs">
                <table className="w-full text-slate-700">
                  <thead className="bg-slate-50 border-b border-slate-200 text-slate-500">
                    <tr>
                      <th className="py-2.5 px-3 text-right rtl:text-right">رمز الصنف (SKU)</th>
                      <th className="py-2.5 px-3 text-right rtl:text-right">اسم الصنف والمستودع</th>
                      <th className="py-2.5 px-3 text-center">الرصيد المتاح</th>
                      <th className="py-2.5 px-3 text-center">حد إعادة الطلب</th>
                      <th className="py-2.5 px-3 text-center">الحالة</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr>
                      <td className="py-2.5 px-3 font-mono text-sky-600 font-medium">EL-CB-401</td>
                      <td className="py-2.5 px-3 font-medium text-slate-900">كابل نحاس 4 ملم (مستودع الرياض)</td>
                      <td className="py-2.5 px-3 text-center font-bold text-slate-900">142 لفة</td>
                      <td className="py-2.5 px-3 text-center text-slate-500">30 لفة</td>
                      <td className="py-2.5 px-3 text-center">
                        <span className="px-2 py-0.5 rounded text-[10px] bg-emerald-50 text-emerald-700 border border-emerald-200 font-bold">
                          متوفر بكثرة
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-3 font-mono text-amber-600 font-medium">EL-DB-12S</td>
                      <td className="py-2.5 px-3 font-medium text-slate-900">قاطع رئيسي شنايدر 100 أمبير</td>
                      <td className="py-2.5 px-3 text-center font-bold text-amber-600">4 قطع</td>
                      <td className="py-2.5 px-3 text-center text-slate-500">10 قطع</td>
                      <td className="py-2.5 px-3 text-center">
                        <span className="px-2 py-0.5 rounded text-[10px] bg-amber-50 text-amber-700 border border-amber-200 font-bold">
                          قارب على النفاد
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-6 py-4 bg-white border-t border-slate-200">
          <div className="text-xs text-slate-500 text-center sm:text-left rtl:sm:text-right">
            {isAr 
              ? 'هل ترغب في تجربة هذه الشاشات مع بيانات منشأتك الحقيقية؟' 
              : 'Would you like to test these features with your real business data?'}
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-1/2 sm:w-auto px-4 py-2 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
            >
              {isAr ? 'إغلاق المعاينة' : 'Close Preview'}
            </button>

            <a
              href={getWhatsAppLink(lang, isAr ? 'مرحباً، جربت المعاينة التفاعلية وأرغب في تفعيل نسخة تجريبية خاصة بي.' : 'Hello, I tested the interactive demo and would like my own trial.')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-1/2 sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl shadow-xs transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{isAr ? 'تفعيل نسخة تجريبية' : 'Activate Free Trial'}</span>
            </a>
          </div>
        </div>

      </div>

    </div>
  );
}
