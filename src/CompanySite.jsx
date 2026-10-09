import { useEffect, useState } from 'react';
import { ArrowDownLeft, ArrowRight, ArrowUpRight, Check, ChevronDown, Code2, Globe2, Languages, Menu, MessageCircle, Monitor, Server, ShieldCheck, Video, X } from 'lucide-react';
import { siteConfig } from './data/config';
import './company.css';

const copy = {
  en: {
    nav: [['#services', 'What we do'], ['/easyerp/', 'EasyERP'], ['#about', 'About us'], ['#contact', 'Contact']], lang: 'العربية',
    eyebrow: 'Crystal IT Solutions  /  Saudi Arabia · GCC · Worldwide', title: <>Technology, thoughtfully<br /><em>built around your business.</em></>,
    intro: 'From business software to the infrastructure behind it, we help organizations put practical technology to work—with care, clarity and room to grow.', projects: 'Discuss a project', product: 'Discover EasyERP', marker: 'A technology partner for real-world operations',
    visualLabel: 'Connected by design', visualSub: 'One partner. The right technology for the work.', visualItems: [['01', 'Business software', 'EasyERP & tailored applications'], ['02', 'Digital experiences', 'Websites built for your goals'], ['03', 'Technology infrastructure', 'CCTV & server room setup']],
    servicesOver: 'What we do', servicesTitle: 'Technology that works where your business works.', servicesText: 'Focused services, delivered with attention to your requirements—from the first conversation through implementation.',
    services: [['CCTV installation', 'Security systems planned and installed to suit your site, coverage needs and day-to-day operations.', Video], ['Server room setup', 'Practical server-room planning and setup to support your organization’s technology environment.', Server], ['Websites', 'Professional websites designed to present your business clearly and help customers take the next step.', Globe2], ['Applications', 'Business applications shaped around your workflows, requirements and the way your team works.', Code2]],
    productOver: 'Our flagship project', productTitle: 'A clearer way to run business operations.', productText: 'EasyERP brings core business workflows together in one ERP platform, with product setup that can be tailored to your organization’s needs.',
    productBullets: ['Sales, purchasing, inventory and accounting workflows', 'Arabic and English interface support', 'ZATCA Phase 1 & 2 certification and live integration'], productFine: 'We’ll learn how your business works and discuss the right configuration for your team.', productCta: 'Ask about an EasyERP demo',
    aboutOver: 'About Crystal IT Solutions', aboutTitle: 'Good technology starts with understanding the work.', aboutText: 'Crystal IT Solutions is a technology startup delivering business software and IT services. EasyERP is our main project—and our work also spans the websites, applications and infrastructure businesses rely on.', aboutNote: 'Based in Saudi Arabia, with a focus on serving businesses across the Kingdom and GCC, and an international outlook.',
    contactOver: 'Start a conversation', contactTitle: 'Tell us what you’re working on.', contactText: 'Whether you’re exploring EasyERP or planning another technology project, share a little about what you need. We’ll continue the conversation with you directly.',
    name: 'Your name', phone: 'Phone / WhatsApp', company: 'Company (optional)', interest: 'What would you like to discuss?', choose: 'Choose a topic', options: ['EasyERP demo or customization', 'CCTV installation', 'Server room setup', 'Website', 'Application development', 'Other project'], message: 'A little about your project (optional)', send: 'Continue in WhatsApp', privacy: 'WhatsApp opens with your message ready for review. This website does not submit or store your form.', whatsapp: 'WhatsApp', email: 'Email us', phoneLabel: 'Call or WhatsApp', footer: 'Technology for business, thoughtfully delivered.', back: 'Back to top', leadIntro: 'Crystal IT Solutions website enquiry', nameLabel: 'Name', businessLabel: 'Company', topicLabel: 'Topic', messageLabel: 'Project details', notGiven: 'Not provided', none: 'None',
  },
  ar: {
    nav: [['#services', 'خدماتنا'], ['/easyerp/', 'EasyERP'], ['#about', 'من نحن'], ['#contact', 'تواصل معنا']], lang: 'English',
    eyebrow: 'كريستال لحلول تقنية المعلومات  /  السعودية · الخليج · العالم', title: <>تقنية مدروسة،<br /><em>تبدأ من احتياجات أعمالك.</em></>,
    intro: 'من برامج الأعمال إلى البنية التقنية التي تدعمها، نساعد المنشآت على توظيف التقنية العملية بعناية ووضوح، مع مساحة للنمو.', projects: 'ناقش مشروعك معنا', product: 'اكتشف EasyERP', marker: 'شريك تقني لاحتياجات الأعمال اليومية',
    visualLabel: 'ترابط مدروس', visualSub: 'شريك واحد. وتقنية مناسبة لاحتياجات العمل.', visualItems: [['٠١', 'برامج الأعمال', 'EasyERP وتطبيقات مخصصة'], ['٠٢', 'الحضور الرقمي', 'مواقع تدعم أهدافك'], ['٠٣', 'البنية التقنية', 'كاميرات مراقبة وتجهيز غرف الخوادم']],
    servicesOver: 'ماذا نقدم', servicesTitle: 'تقنية تخدم أعمالك في كل موقع.', servicesText: 'خدمات مركزة، ننفذها مع الاهتمام بمتطلباتك، من بداية النقاش وحتى التطبيق.',
    services: [['تركيب كاميرات المراقبة', 'أنظمة مراقبة تُخطط وتُركب بما يناسب موقعك واحتياجات التغطية وطبيعة العمل اليومية.', Video], ['تجهيز غرف الخوادم', 'تخطيط وتجهيز عملي لغرف الخوادم لدعم البيئة التقنية في منشأتك.', Server], ['المواقع الإلكترونية', 'مواقع احترافية تعرض منشأتك بوضوح وتساعد العملاء على اتخاذ الخطوة التالية.', Globe2], ['التطبيقات', 'تطبيقات أعمال تُبنى بما يتناسب مع إجراءاتك ومتطلباتك وطريقة عمل فريقك.', Code2]],
    productOver: 'مشروعنا الرئيسي', productTitle: 'طريقة أوضح لإدارة عمليات الأعمال.', productText: 'يجمع EasyERP إجراءات الأعمال الأساسية في منصة تخطيط موارد مؤسسية واحدة، مع إمكانية تهيئة النظام بما يتناسب مع احتياجات منشأتك.',
    productBullets: ['إجراءات المبيعات والمشتريات والمخزون والمحاسبة', 'واجهة تدعم اللغتين العربية والإنجليزية', 'اعتماد زاتكا للمرحلتين الأولى والثانية والربط المباشر'], productFine: 'نتعرف على طريقة عمل منشأتك ونناقش الإعداد الأنسب لفريقك.', productCta: 'استفسر عن عرض EasyERP',
    aboutOver: 'عن كريستال لحلول تقنية المعلومات', aboutTitle: 'التقنية الجيدة تبدأ بفهم طبيعة العمل.', aboutText: 'كريستال لحلول تقنية المعلومات شركة ناشئة في مجال التقنية، تقدم برامج الأعمال وخدمات تقنية المعلومات. EasyERP هو مشروعنا الرئيسي، كما تشمل أعمالنا المواقع والتطبيقات والبنية التقنية التي تعتمد عليها المنشآت.', aboutNote: 'نعمل انطلاقاً من المملكة العربية السعودية، مع تركيز على خدمة المنشآت في المملكة ودول الخليج، وتوجه نحو الأسواق الدولية.',
    contactOver: 'لنبدأ الحديث', contactTitle: 'أخبرنا عن مشروعك.', contactText: 'سواء كنت تستكشف EasyERP أو تخطط لمشروع تقني آخر، شاركنا نبذة عن احتياجك لنواصل النقاش معك مباشرة.',
    name: 'الاسم', phone: 'رقم الهاتف / واتساب', company: 'المنشأة (اختياري)', interest: 'ما الموضوع الذي ترغب بمناقشته؟', choose: 'اختر الموضوع', options: ['عرض أو تخصيص EasyERP', 'تركيب كاميرات مراقبة', 'تجهيز غرفة خوادم', 'موقع إلكتروني', 'تطوير تطبيق', 'مشروع آخر'], message: 'نبذة عن مشروعك (اختياري)', send: 'متابعة عبر واتساب', privacy: 'سيُفتح واتساب ورسالتك جاهزة للمراجعة. لا يرسل الموقع النموذج ولا يخزن بياناته.', whatsapp: 'واتساب', email: 'راسلنا', phoneLabel: 'اتصال أو واتساب', footer: 'تقنية للأعمال، بتنفيذ مدروس.', back: 'العودة للأعلى', leadIntro: 'استفسار من موقع كريستال لحلول تقنية المعلومات', nameLabel: 'الاسم', businessLabel: 'المنشأة', topicLabel: 'الموضوع', messageLabel: 'تفاصيل المشروع', notGiven: 'غير محدد', none: 'لا يوجد',
  },
};

function Brand() {
  return <a className="brand" href="/" aria-label="Crystal IT Solutions home"><img className="brand-logo" src="/crystal-logo.svg" alt="Crystal IT Solutions" /></a>;
}
function ServiceRow({ service, index, rtl }) {
  const [title, description, Icon] = service;
  return <article className="service-row"><span className="service-index">0{index + 1}</span><span className="service-icon"><Icon size={21} strokeWidth={1.65} /></span><div className="service-copy"><h3>{title}</h3><p>{description}</p></div><a className="service-arrow" href="#contact" aria-label={`${title} — contact us`}>{rtl ? <ArrowDownLeft size={19} /> : <ArrowUpRight size={19} />}</a></article>;
}

export default function CompanySite() {
  const [lang, setLang] = useState(() => { try { return localStorage.getItem('crystal_site_lang') === 'ar' ? 'ar' : 'en'; } catch { return 'en'; } });
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', company: '', interest: '', message: '' });
  const ar = lang === 'ar'; const t = copy[lang];
  useEffect(() => {
    document.documentElement.lang = lang; document.documentElement.dir = ar ? 'rtl' : 'ltr';
    document.title = ar ? 'كريستال لحلول تقنية المعلومات | Crystal IT Solutions' : 'Crystal IT Solutions | Business Software & IT Services';
    const description = document.querySelector('meta[name="description"]');
    if (description) description.content = ar ? 'كريستال لحلول تقنية المعلومات: برامج أعمال وخدمات تقنية، مع EasyERP مشروعنا الرئيسي. نخدم السعودية ودول الخليج والأسواق الدولية.' : 'Crystal IT Solutions delivers business software and IT services, with EasyERP as our main project. Serving Saudi Arabia, the GCC and international markets.';
    const keywords = document.querySelector('meta[name="keywords"]');
    if (keywords) keywords.content = 'Crystal IT Solutions, EasyERP, business software, CCTV installation, server room setup, websites, applications, Saudi Arabia, GCC';
    try { localStorage.setItem('crystal_site_lang', lang); } catch { /* storage may be unavailable */ }
  }, [lang, ar]);
  const submitLead = (event) => {
    event.preventDefault();
    const lead = [t.leadIntro, `${t.nameLabel}: ${form.name}`, `${t.phone}: ${form.phone}`, `${t.businessLabel}: ${form.company || t.notGiven}`, `${t.topicLabel}: ${form.interest}`, `${t.messageLabel}: ${form.message || t.none}`].join('\n');
    window.open(`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(lead)}`, '_blank', 'noopener,noreferrer');
  };

  return <div className={`company-site ${ar ? 'is-ar' : 'is-en'}`}>
    <header className="site-header"><div className="header-inner"><Brand />
      <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`} aria-label={ar ? 'التنقل الرئيسي' : 'Main navigation'}>{t.nav.map(([href, label]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}</nav>
      <div className="header-actions"><button className="language-toggle" onClick={() => setLang(ar ? 'en' : 'ar')} aria-label={ar ? 'Switch language to English' : 'تغيير اللغة إلى العربية'}><Languages size={16} /><span>{t.lang}</span></button><a className="header-cta" href="#contact">{t.projects}<ArrowUpRight size={16} /></a><button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>{menuOpen ? <X size={20} /> : <Menu size={20} />}</button></div>
    </div></header>
    <main id="top">
      <section className="hero-section"><div className="hero-copy"><p className="eyebrow"><span className="eyebrow-dot" />{t.eyebrow}</p><h1>{t.title}</h1><p className="hero-intro">{t.intro}</p><div className="hero-actions"><a className="button button-light" href="#contact">{t.projects}<ArrowUpRight size={17} /></a><a className="button button-text" href="/easyerp/">{t.product}<ArrowRight size={17} /></a></div><p className="hero-marker"><span />{t.marker}</p></div>
        <div className="hero-art" aria-label={t.visualLabel}><div className="art-topline"><span className="art-grid-mark">C.</span><span>{t.visualLabel}</span></div><div className="art-heading"><span>CRYSTAL</span><b>IT / DIGITAL / BUSINESS</b></div><div className="art-lines" aria-hidden="true">{Array.from({ length: 20 }, (_, i) => <i key={i} />)}</div><div className="art-bottom"><div><span className="art-caption">{t.visualSub}</span><div className="art-services">{t.visualItems.map(([num, title, subtitle]) => <div className="art-service" key={num}><span>{num}</span><p><b>{title}</b><small>{subtitle}</small></p><ArrowUpRight size={15} /></div>)}</div></div><span className="art-orbit" aria-hidden="true" /></div></div>
      </section>
      <section id="services" className="services-section"><div className="section-container"><div className="section-intro"><p className="section-kicker">{t.servicesOver}</p><h2>{t.servicesTitle}</h2><p>{t.servicesText}</p></div><div className="services-list">{t.services.map((service, index) => <ServiceRow key={service[0]} service={service} index={index} rtl={ar} />)}</div></div></section>
      <section className="easyerp-section company-product-feature"><div className="easyerp-inner"><div className="product-brandline"><span className="product-symbol">E</span><span>{t.productOver}</span></div><div className="product-feature-row"><h2>EasyERP</h2><p>{t.productText}</p><a className="button button-accent" href="/easyerp/">{t.productCta}<ArrowUpRight size={17} /></a></div></div></section>
      <section id="about" className="about-section"><div className="about-container"><div className="about-label"><span className="about-number">01</span><p className="section-kicker">{t.aboutOver}</p></div><div className="about-copy"><h2>{t.aboutTitle}</h2><p>{t.aboutText}</p><p className="about-note"><Globe2 size={17} />{t.aboutNote}</p></div><div className="about-stamp" aria-hidden="true"><span>CRYSTAL</span><i>IT SOLUTIONS</i><b>SA · GCC · GLOBAL</b></div></div></section>
      <section id="contact" className="contact-section"><div className="contact-container"><div className="contact-copy"><p className="section-kicker">{t.contactOver}</p><h2>{t.contactTitle}</h2><p>{t.contactText}</p><div className="contact-links"><a href={`https://wa.me/${siteConfig.contact.whatsappNumber}`} target="_blank" rel="noreferrer"><span className="contact-link-icon"><MessageCircle size={18} /></span><span><small>{t.whatsapp}</small><b>{siteConfig.contact.whatsappFormatted}</b></span><ArrowUpRight size={16} /></a><a href={`tel:${siteConfig.contact.phone}`}><span className="contact-link-icon"><Monitor size={18} /></span><span><small>{t.phoneLabel}</small><b>{siteConfig.contact.phone}</b></span><ArrowUpRight size={16} /></a><a href={`mailto:${siteConfig.contact.email}`}><span className="contact-link-icon"><Globe2 size={18} /></span><span><small>{t.email}</small><b>{siteConfig.contact.email}</b></span><ArrowUpRight size={16} /></a></div></div>
        <form className="contact-form" onSubmit={submitLead}><div className="form-topline"><span>{ar ? 'أخبرنا بالمزيد' : 'A few details to get started'}</span><span>01 / 04</span></div><div className="form-row"><label>{t.name}<input required autoComplete="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} /></label><label>{t.phone}<input required type="tel" autoComplete="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} /></label></div><label>{t.company}<input autoComplete="organization" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} /></label><label>{t.interest}<span className="select-wrap"><select required value={form.interest} onChange={(e) => setForm({ ...form, interest: e.target.value })}><option value="">{t.choose}</option>{t.options.map((option) => <option key={option} value={option}>{option}</option>)}</select><ChevronDown size={16} /></span></label><label>{t.message}<textarea rows="3" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} /></label><button className="button button-submit" type="submit">{t.send}<MessageCircle size={17} /></button><p className="form-privacy"><ShieldCheck size={14} />{t.privacy}</p></form>
      </div></section>
    </main>
    <footer className="site-footer"><div className="footer-main"><Brand /><p>{t.footer}</p><a href="#top" className="back-top">{t.back}<ArrowUpRight size={15} /></a></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Crystal IT Solutions</span><span>{siteConfig.contact.email}</span><span>Saudi Arabia · GCC · Worldwide</span></div></footer>
  </div>;
}
