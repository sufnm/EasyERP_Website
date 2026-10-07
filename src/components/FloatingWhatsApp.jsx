import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { getWhatsAppLink } from '../data/config';

export default function FloatingWhatsApp({ lang, t }) {
  const isAr = lang === 'ar';
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      
      {/* Tooltip speech bubble */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-white border border-slate-200 text-xs shadow-md animate-in fade-in slide-in-from-right-2 duration-300">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping shrink-0" />
          <span className="text-slate-800 font-semibold">
            {t.floating.status}
          </span>
          <button 
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-slate-700 ml-1 rtl:mr-1 rtl:ml-0"
            aria-label="Close message"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Button */}
      <a
        href={getWhatsAppLink(lang)}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group w-13 h-13 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shadow-lg shadow-emerald-900/20 hover:scale-105 transition-all focus:outline-none"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 relative z-10" />
      </a>

    </div>
  );
}
