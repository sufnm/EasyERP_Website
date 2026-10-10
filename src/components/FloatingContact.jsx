import { useState, useEffect, useRef } from 'react';
import { MessageCircle, Phone, Mail, MapPin, X, ArrowUpRight, ArrowDownLeft, Headphones } from 'lucide-react';
import { siteConfig, getWhatsAppLink } from '../data/config';
import './floating-contact.css';

export default function FloatingContact({ lang = 'en' }) {
  const [isOpen, setIsOpen] = useState(false);
  const cardRef = useRef(null);
  const isAr = lang === 'ar';

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const copy = {
    en: {
      buttonLabel: 'CONTACT US',
      title: 'Get in Touch',
      subtitle: 'Crystal IT Solutions & EasyERP · Saudi Arabia & GCC',
      whatsappLabel: 'WhatsApp Direct',
      whatsappSub: 'Instant chat & demo booking',
      phoneLabel: 'Direct Phone',
      phoneSub: 'Speak directly with our team',
      emailLabel: 'Email Inquiries',
      emailSub: 'Official requests & RFPs',
      coverage: 'Serving organizations across Saudi Arabia, GCC & worldwide.',
      fullPageCta: 'Open Full Contact Page',
    },
    ar: {
      buttonLabel: 'تواصل معنا',
      title: 'تواصل مع فريقنا',
      subtitle: 'كريستال لتقنية المعلومات وEasyERP · السعودية والخليج',
      whatsappLabel: 'واتساب مباشر',
      whatsappSub: 'محادثة فورية وحجز عرض للنظام',
      phoneLabel: 'اتصال هاتفي مباشر',
      phoneSub: 'تحدث مباشرة مع مستشارنا التقني',
      emailLabel: 'البريد الإلكتروني',
      emailSub: 'للمراسلات وعروض الأسعار الرسمية',
      coverage: 'نخدم المنشآت والشركات في المملكة العربية السعودية والخليج.',
      fullPageCta: 'الانتقال إلى صفحة التواصل الكاملة',
    },
  };

  const t = copy[isAr ? 'ar' : 'en'];
  const phone = siteConfig.contact.phoneFormatted;
  const rawPhone = siteConfig.contact.phoneClean || siteConfig.contact.whatsappNumber;
  const email = siteConfig.contact.email;

  const handleFullContactClick = (e) => {
    setIsOpen(false);
    const path = window.location.pathname;
    if (path.startsWith('/easyerp')) {
      // On EasyERP page, scroll to #contact
      const el = document.getElementById('contact');
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className={`sticky-contact-root ${isAr ? 'sticky-contact-rtl' : ''}`}>
      {/* Sticky Tab Button on the Left Screen Edge */}
      <button
        type="button"
        className="sticky-contact-trigger"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={t.buttonLabel}
        aria-expanded={isOpen}
      >
        <span className="sticky-contact-pulse" aria-hidden="true" />
        <Headphones size={13} className="sticky-contact-icon" />
        <span className="sticky-contact-label">{t.buttonLabel}</span>
      </button>

      {/* Dimmed backdrop when card is open */}
      {isOpen && (
        <div
          className="sticky-contact-backdrop"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Contact Details Card */}
      {isOpen && (
        <div
          className="sticky-contact-card"
          ref={cardRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby="sticky-card-title"
        >
          {/* Card Head */}
          <div className="sticky-card-head">
            <button
              type="button"
              className="sticky-card-close"
              onClick={() => setIsOpen(false)}
              aria-label={isAr ? 'إغلاق نافذة التواصل' : 'Close contact details'}
            >
              <X size={16} />
            </button>
            <h3 id="sticky-card-title" className="sticky-card-title">
              {t.title}
            </h3>
            <p className="sticky-card-sub">{t.subtitle}</p>
          </div>

          {/* Channels Body */}
          <div className="sticky-card-body">
            {/* WhatsApp */}
            <a
              href={getWhatsAppLink(lang)}
              target="_blank"
              rel="noopener noreferrer"
              className="sticky-channel-row channel-whatsapp"
            >
              <div className="sticky-channel-icon">
                <MessageCircle size={20} />
              </div>
              <div className="sticky-channel-text">
                <span className="sticky-channel-label">{t.whatsappLabel}</span>
                <span className="sticky-channel-value" dir="ltr">{phone}</span>
                <span className="sticky-channel-sub">{t.whatsappSub}</span>
              </div>
              <span className="sticky-channel-arrow" aria-hidden="true">
                {isAr ? <ArrowDownLeft size={16} /> : <ArrowUpRight size={16} />}
              </span>
            </a>

            {/* Direct Phone Call */}
            <a
              href={`tel:${rawPhone}`}
              className="sticky-channel-row channel-phone"
            >
              <div className="sticky-channel-icon">
                <Phone size={20} />
              </div>
              <div className="sticky-channel-text">
                <span className="sticky-channel-label">{t.phoneLabel}</span>
                <span className="sticky-channel-value" dir="ltr">{phone}</span>
                <span className="sticky-channel-sub">{t.phoneSub}</span>
              </div>
              <span className="sticky-channel-arrow" aria-hidden="true">
                {isAr ? <ArrowDownLeft size={16} /> : <ArrowUpRight size={16} />}
              </span>
            </a>

            {/* Email */}
            <a
              href={`mailto:${email}`}
              className="sticky-channel-row channel-email"
            >
              <div className="sticky-channel-icon">
                <Mail size={20} />
              </div>
              <div className="sticky-channel-text">
                <span className="sticky-channel-label">{t.emailLabel}</span>
                <span className="sticky-channel-value">{email}</span>
                <span className="sticky-channel-sub">{t.emailSub}</span>
              </div>
              <span className="sticky-channel-arrow" aria-hidden="true">
                {isAr ? <ArrowDownLeft size={16} /> : <ArrowUpRight size={16} />}
              </span>
            </a>

            {/* Regional Coverage */}
            <div className="sticky-card-coverage">
              <MapPin size={17} />
              <span>{t.coverage}</span>
            </div>
          </div>

          {/* Card Footer / CTA */}
          <div className="sticky-card-foot">
            <a
              href={window.location.pathname.startsWith('/easyerp') ? '#contact' : '/contact/'}
              onClick={handleFullContactClick}
              className="sticky-card-cta"
            >
              <span>{t.fullPageCta}</span>
              {isAr ? <ArrowDownLeft size={14} /> : <ArrowUpRight size={14} />}
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
