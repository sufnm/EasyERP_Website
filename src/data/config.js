// Public contact details supplied by the EasyERP owner.
export const siteConfig = {
  name: 'EasyERP',
  contact: {
    whatsappNumber: '966538361171',
    whatsappFormatted: '+966 53 836 1171',
    phone: '+966 53 836 1171',
    phoneClean: '+966538361171',
    email: 'crystalsolutionsit@gmail.com',
  },
};

export const getWhatsAppLink = (lang = 'en', customMsg = null) => {
  const message = customMsg || (lang === 'ar'
    ? 'مرحباً فريق EasyERP، أود معرفة المزيد عن النظام.'
    : 'Hello EasyERP team, I would like to learn more about EasyERP.');
  return `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
};

export const getCallLink = () => `tel:${siteConfig.contact.whatsappNumber}`;
