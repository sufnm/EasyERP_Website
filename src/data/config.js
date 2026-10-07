// Business Configuration for EasyERP Website
export const siteConfig = {
  name: "EasyERP",
  brandSubtitle: {
    ar: "نظام إدارة الموارد المتكامل",
    en: "Next-Gen Enterprise ERP System"
  },
  contact: {
    // Saudi WhatsApp number (international format without + or spaces for api links)
    whatsappNumber: "966500000000", // Update with your actual sales WhatsApp number
    whatsappFormatted: "+966 50 000 0000",
    phone: "+966 50 000 0000",
    phoneClean: "+966500000000",
    email: "sales@easyerp.sa",
    address: {
      ar: "المملكة العربية السعودية - الرياض / جدة",
      en: "Kingdom of Saudi Arabia - Riyadh / Jeddah"
    },
  },
  pricing: {
    starterSar: 100,
    proSar: 250,
    enterpriseCustom: {
      ar: "مخصص للمؤسسات",
      en: "Custom Enterprise"
    }
  },
  links: {
    zatcaPortal: "https://zatca.gov.sa",
    demoVideo: "#demo",
  },
  whatsappMessage: {
    ar: "مرحباً فريق EasyERP، أود الاستفسار عن باقة 100 ريال وتجربة النظام مجاناً.",
    en: "Hello EasyERP team, I would like to inquire about the 100 SAR starter plan and schedule a live demo."
  }
};

export const getWhatsAppLink = (lang = 'ar', customMsg = null) => {
  const msg = customMsg || (lang === 'ar' ? siteConfig.whatsappMessage.ar : siteConfig.whatsappMessage.en);
  return `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(msg)}`;
};

export const getCallLink = () => {
  return `tel:${siteConfig.contact.phoneClean}`;
};
