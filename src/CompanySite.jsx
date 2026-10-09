import { useEffect, useState, useCallback } from 'react';
import { ArrowDownLeft, ArrowRight, ArrowUpRight, Check, ChevronDown, Code2, Globe2, Languages, Menu, MessageCircle, Monitor, Server, ShieldCheck, Video, X } from 'lucide-react';
import { siteConfig } from './data/config';
import './company.css';

const copy = {
  en: {
    nav: [['/', 'Home'], ['/services/', 'Services'], ['/about/', 'About Us'], ['/contact/', 'Contact Us']], lang: 'العربية',
    eyebrow: 'Crystal IT Solutions  /  Saudi Arabia · GCC · Worldwide', title: <>Technology, thoughtfully<br /><em>built around your business.</em></>,
    intro: 'From business software to the infrastructure behind it, we help organizations put practical technology to work—with care, clarity and room to grow.', projects: 'Discuss a project', product: 'Discover EasyERP', marker: 'A technology partner for real-world operations',
    visualLabel: 'Connected by design', visualSub: 'One partner. The right technology for the work.', visualItems: [['01', 'Business software', 'EasyERP & tailored applications'], ['02', 'Digital experiences', 'Websites built for your goals'], ['03', 'Technology infrastructure', 'CCTV & server room setup']],
    servicesOver: 'What we do', servicesTitle: 'Technology that works where your business works.', servicesText: 'Focused services, delivered with attention to your requirements—from the first conversation through implementation.',
    services: [['CCTV installation', 'Security systems planned and installed to suit your site, coverage needs and day-to-day operations.', Video], ['Server room setup', 'Practical server-room planning and setup to support your organization\u2019s technology environment.', Server], ['Websites', 'Professional websites designed to present your business clearly and help customers take the next step.', Globe2], ['Applications', 'Business applications shaped around your workflows, requirements and the way your team works.', Code2]],
    serviceDetails: [['Planning and installation for site coverage', 'Configuration for day-to-day operations'], ['Planning and setup for technology environment', 'Practical implementation support'], ['Design and development', 'Business presentation and customer engagement'], ['Shaped around workflows', 'Requirements-based development']],
    productOver: 'Our flagship project', productTitle: 'A clearer way to run business operations.', productText: 'EasyERP brings core business workflows together in one ERP platform, with product setup that can be tailored to your organization\u2019s needs.',
    productBullets: ['Sales, purchasing, inventory and accounting workflows', 'Arabic and English interface support', 'ZATCA Phase 1 & 2 certification and live integration'], productFine: 'We\u2019ll learn how your business works and discuss the right configuration for your team.', productCta: 'Ask about an EasyERP demo',
    workflowLabel: 'How the sales workflow connects', workflowSteps: [['01', 'Quotation', 'Prepare and send pricing to customers.'], ['02', 'Sales order', 'Confirm the order and plan fulfilment.'], ['03', 'Delivery note', 'Record what was delivered to the customer.'], ['04', 'Invoice', 'Issue the tax invoice and track payment.']], statusLabel: 'Product status', statusPoints: ['ZATCA Phase 1 & 2 certified and live integration', 'Arabic and English interface', 'Inventory and warehouse tools available, configured per company needs'],
    aboutOver: 'About Crystal IT Solutions', aboutTitle: 'Good technology starts with understanding the work.', aboutText: 'Crystal IT Solutions is a technology startup delivering business software and IT services. EasyERP is our main project—and our work also spans the websites, applications and infrastructure businesses rely on.', aboutNote: 'Based in Saudi Arabia, with a focus on serving businesses across the Kingdom and GCC, and an international outlook.',
    contactOver: 'Start a conversation', contactTitle: 'Tell us what you\u2019re working on.', contactText: 'Whether you\u2019re exploring EasyERP or planning another technology project, share a little about what you need. We\u2019ll continue the conversation with you directly.',
    name: 'Your name', phone: 'Phone / WhatsApp', company: 'Company (optional)', interest: 'What would you like to discuss?', choose: 'Choose a topic', options: ['EasyERP demo or customization', 'CCTV installation', 'Server room setup', 'Website', 'Application development', 'Other project'], message: 'A little about your project (optional)', send: 'Continue in WhatsApp', privacy: 'WhatsApp opens with your message ready for review. This website does not submit or store your form.', whatsapp: 'WhatsApp', email: 'Email us', phoneLabel: 'Call or WhatsApp', footer: 'Technology for business, thoughtfully delivered.', back: 'Back to top', leadIntro: 'Crystal IT Solutions website enquiry', nameLabel: 'Name', businessLabel: 'Company', topicLabel: 'Topic', messageLabel: 'Project details', notGiven: 'Not provided', none: 'None',
  },
  ar: {
    nav: [['/', 'الرئيسية'], ['/services/', 'خدماتنا'], ['/about/', 'من نحن'], ['/contact/', 'تواصل معنا']], lang: 'English',
    eyebrow: 'كريستال لحلول تقنية المعلومات  /  السعودية · الخليج · العالم', title: <>تقنية مدروسة،<br /><em>تبدأ من احتياجات أعمالك.</em></>,
    intro: 'من برامج الأعمال إلى البنية التقنية التي تدعمها، نساعد المنشآت على توظيف التقنية العملية بعناية ووضوح، مع مساحة للنمو.', projects: 'ناقش مشروعك معنا', product: 'اكتشف EasyERP', marker: 'شريك تقني لاحتياجات الأعمال اليومية',
    visualLabel: 'ترابط مدروس', visualSub: 'شريك واحد. وتقنية مناسبة لاحتياجات العمل.', visualItems: [['٠١', 'برامج الأعمال', 'EasyERP وتطبيقات مخصصة'], ['٠٢', 'الحضور الرقمي', 'مواقع تدعم أهدافك'], ['٠٣', 'البنية التقنية', 'كاميرات مراقبة وتجهيز غرف الخوادم']],
    servicesOver: 'ماذا نقدم', servicesTitle: 'تقنية تخدم أعمالك في كل موقع.', servicesText: 'خدمات مركزة، ننفذها مع الاهتمام بمتطلباتك، من بداية النقاش وحتى التطبيق.',
    services: [['تركيب كاميرات المراقبة', 'أنظمة مراقبة تُخطط وتُركب بما يناسب موقعك واحتياجات التغطية وطبيعة العمل اليومية.', Video], ['تجهيز غرف الخوادم', 'تخطيط وتجهيز عملي لغرف الخوادم لدعم البيئة التقنية في منشأتك.', Server], ['المواقع الإلكترونية', 'مواقع احترافية تعرض منشأتك بوضوح وتساعد العملاء على اتخاذ الخطوة التالية.', Globe2], ['التطبيقات', 'تطبيقات أعمال تُبنى بما يتناسب مع إجراءاتك ومتطلباتك وطريقة عمل فريقك.', Code2]],
    serviceDetails: [['تخطيط وتركيب لتغطية الموقع', 'تهيئة للعمليات اليومية'], ['تخطيط وتجهيز للبيئة التقنية', 'دعم عملي للتنفيذ'], ['تصميم وتطوير', 'عرض المنشأة وتفاعل العملاء'], ['مصممة حول إجراءات العمل', 'تطوير مبني على المتطلبات']],
    productOver: 'مشروعنا الرئيسي', productTitle: 'طريقة أوضح لإدارة عمليات الأعمال.', productText: 'يجمع EasyERP إجراءات الأعمال الأساسية في منصة تخطيط موارد مؤسسية واحدة، مع إمكانية تهيئة النظام بما يتناسب مع احتياجات منشأتك.',
    productBullets: ['إجراءات المبيعات والمشتريات والمخزون والمحاسبة', 'واجهة تدعم اللغتين العربية والإنجليزية', 'اعتماد زاتكا للمرحلتين الأولى والثانية والربط المباشر'], productFine: 'نتعرف على طريقة عمل منشأتك ونناقش الإعداد الأنسب لفريقك.', productCta: 'استفسر عن عرض EasyERP',
    workflowLabel: 'كيف يتصل سير عمل المبيعات', workflowSteps: [['٠١', 'عرض السعر', 'إعداد وإرسال التسعير للعملاء.'], ['٠٢', 'أمر البيع', 'تأكيد الطلب وتخطيط التنفيذ.'], ['٠٣', 'سند التسليم', 'تسجيل ما تم تسليمه للعميل.'], ['٠٤', 'الفاتورة', 'إصدار الفاتورة الضريبية ومتابعة الدفع.']], statusLabel: 'حالة المنتج', statusPoints: ['معتمد زاتكا للمرحلتين الأولى والثانية مع ربط حي', 'واجهة عربية وإنجليزية', 'أدوات المخزون والمستودعات متاحة وتُهيأ حسب احتياج المنشأة'],
    aboutOver: 'عن كريستال لحلول تقنية المعلومات', aboutTitle: 'التقنية الجيدة تبدأ بفهم طبيعة العمل.', aboutText: 'كريستال لحلول تقنية المعلومات شركة ناشئة في مجال التقنية، تقدم برامج الأعمال وخدمات تقنية المعلومات. EasyERP هو مشروعنا الرئيسي، كما تشمل أعمالنا المواقع والتطبيقات والبنية التقنية التي تعتمد عليها المنشآت.', aboutNote: 'نعمل انطلاقاً من المملكة العربية السعودية، مع تركيز على خدمة المنشآت في المملكة ودول الخليج، وتوجه نحو الأسواق الدولية.',
    contactOver: 'لنبدأ الحديث', contactTitle: 'أخبرنا عن مشروعك.', contactText: 'سواء كنت تستكشف EasyERP أو تخطط لمشروع تقني آخر، شاركنا نبذة عن احتياجك لنواصل النقاش معك مباشرة.',
    name: 'الاسم', phone: 'رقم الهاتف / واتساب', company: 'المنشأة (اختياري)', interest: 'ما الموضوع الذي ترغب بمناقشته؟', choose: 'اختر الموضوع', options: ['عرض أو تخصيص EasyERP', 'تركيب كاميرات مراقبة', 'تجهيز غرفة خوادم', 'موقع إلكتروني', 'تطوير تطبيق', 'مشروع آخر'], message: 'نبذة عن مشروعك (اختياري)', send: 'متابعة عبر واتساب', privacy: 'سيُفتح واتساب ورسالتك جاهزة للمراجعة. لا يرسل الموقع النموذج ولا يخزن بياناته.', whatsapp: 'واتساب', email: 'راسلنا', phoneLabel: 'اتصال أو واتساب', footer: 'تقنية للأعمال، بتنفيذ مدروس.', back: 'العودة للأعلى', leadIntro: 'استفسار من موقع كريستال لحلول تقنية المعلومات', nameLabel: 'الاسم', businessLabel: 'المنشأة', topicLabel: 'الموضوع', messageLabel: 'تفاصيل المشروع', notGiven: 'غير محدد', none: 'لا يوجد',
  }
};

const pageMeta = {
  en: {
    home: { title: 'Crystal IT Solutions | Business Software & IT Services', desc: 'Crystal IT Solutions delivers business software and IT services, with EasyERP as our main project. Serving Saudi Arabia, the GCC and international markets.' },
    services: { title: 'Services | Crystal IT Solutions', desc: 'CCTV installation, server room setup, websites and business applications. EasyERP is our flagship business software project.' },
    about: { title: 'About Us | Crystal IT Solutions', desc: 'Crystal IT Solutions is a Saudi-based technology startup. EasyERP is our main project, delivering business software and IT services.' },
    contact: { title: 'Contact Us | Crystal IT Solutions', desc: 'Start a conversation about your project. Reach us via WhatsApp or email.' },
  },
  ar: {
    home: { title: 'كريستال لحلول تقنية المعلومات | Crystal IT Solutions', desc: 'كريستال لحلول تقنية المعلومات: برامج أعمال وخدمات تقنية، مع EasyERP مشروعنا الرئيسي. نخدم السعودية ودول الخليج والأسواق الدولية.' },
    services: { title: 'خدماتنا | كريستال لحلول تقنية المعلومات', desc: 'تركيب كاميرات المراقبة، تجهيز غرف الخوادم، المواقع الإلكترونية وتطبيقات الأعمال. EasyERP هو مشروع برامج الأعمال الرئيسي.' },
    about: { title: 'من نحن | كريستال لحلول تقنية المعلومات', desc: 'كريستال لحلول تقنية المعلومات شركة ناشئة في مجال التقنية. EasyERP هو مشروعنا الرئيسي، نقدم برامج الأعمال وخدمات تقنية المعلومات.' },
    contact: { title: 'تواصل معنا | كريستال لحلول تقنية المعلومات', desc: 'ابدأ حديثاً عن مشروعك. تواصل معنا عبر واتساب أو البريد الإلكتروني.' },
  }
};

function Brand() {
  return <a className="brand" href="/" aria-label="Crystal IT Solutions home"><img className="brand-logo" src="/crystal-logo.svg" alt="Crystal IT Solutions" /></a>;
}
function ServiceRow({ service, index, rtl, details }) {
  const [title, description, Icon] = service;
  return <article className="service-row"><span className="service-index">0{index + 1}</span><span className="service-icon"><Icon size={21} strokeWidth={1.65} /></span><div className="service-copy"><h3>{title}</h3><p>{description}</p>{details && <ul className="service-details">{details.map((d) => <li key={d}><Check size={13} />{d}</li>)}</ul>}</div><a className="service-arrow" href="#contact" aria-label={rtl ? `${title} — تواصل معنا` : `${title} — contact us`}>{rtl ? <ArrowDownLeft size={19} /> : <ArrowUpRight size={19} />}</a></article>;
}

export default function CompanySite({ page: initialPage = 'home' }) {
  const [lang, setLang] = useState(() => { try { return localStorage.getItem('crystal_site_lang') === 'ar' ? 'ar' : 'en'; } catch { return 'en'; } });
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', company: '', interest: '', message: '' });
  const [currentPage, setCurrentPage] = useState(initialPage);
  const ar = lang === 'ar'; const t = copy[lang];
  const page = currentPage;

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = ar ? 'rtl' : 'ltr';
    const meta = pageMeta[lang][page] || pageMeta[lang].home;
    document.title = meta.title;
    const description = document.querySelector('meta[name="description"]');
    if (description) description.content = meta.desc;
    try { localStorage.setItem('crystal_site_lang', lang); } catch { /* storage may be unavailable */ }
  }, [lang, ar, page]);

  useEffect(() => { window.scrollTo(0, 0); setMenuOpen(false); }, [page]);

  const navigate = useCallback((e, href) => {
    e.preventDefault();
    const path = href.replace(/\/$/, '') || '/';
    const newPage = path === '/services' ? 'services' : path === '/about' ? 'about' : path === '/contact' ? 'contact' : 'home';
    setCurrentPage(newPage);
    window.history.pushState({}, '', href);
  }, []);

  useEffect(() => {
    const onPop = () => {
      const p = window.location.pathname.replace(/\/$/, '') || '/';
      const newPage = p === '/services' ? 'services' : p === '/about' ? 'about' : p === '/contact' ? 'contact' : 'home';
      setCurrentPage(newPage);
    };
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  const submitLead = (event) => {
    event.preventDefault();
    const lead = [t.leadIntro, `${t.nameLabel}: ${form.name}`, `${t.phone}: ${form.phone}`, `${t.businessLabel}: ${form.company || t.notGiven}`, `${t.topicLabel}: ${form.interest}`, `${t.messageLabel}: ${form.message || t.none}`].join('\n');
    window.open(`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(lead)}`, '_blank', 'noopener,noreferrer');
  };

  const navLinks = t.nav.map(([href, label]) => ({ href, label }));
  const activeNav = page === 'home' ? '/' : `/${page}/`;

  const Header = <header className="site-header"><div className="header-inner"><Brand />
    <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`} aria-label={ar ? 'التنقل الرئيسي' : 'Main navigation'}>{navLinks.map(({ href, label }) => <a key={href} href={href} onClick={(e) => { navigate(e, href); }} aria-current={activeNav === href ? 'page' : undefined}>{label}</a>)}</nav>
    <div className="header-actions"><button className="language-toggle" onClick={() => setLang(ar ? 'en' : 'ar')} aria-label={ar ? 'Switch language to English' : 'تغيير اللغة إلى العربية'}><Languages size={16} /><span>{t.lang}</span></button><a className="header-cta" href="/contact/" onClick={(e) => navigate(e, '/contact/')}>{t.projects}<ArrowUpRight size={16} /></a><button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>{menuOpen ? <X size={20} /> : <Menu size={20} />}</button></div>
  </div></header>;

  const Footer = <footer className="site-footer"><div className="footer-main"><Brand /><p>{t.footer}</p><a href="#top" className="back-top">{t.back}<ArrowUpRight size={15} /></a></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Crystal IT Solutions</span><span>{siteConfig.contact.email}</span><span>Saudi Arabia · GCC · Worldwide</span></div></footer>;

  /* ===== HOME PAGE ===== */
  const HomePage = <>
    <section className="hero-section"><div className="hero-copy"><p className="eyebrow"><span className="eyebrow-dot" />{t.eyebrow}</p><h1>{t.title}</h1><p className="hero-intro">{t.intro}</p><div className="hero-actions"><a className="button button-light" href="/contact/" onClick={(e) => navigate(e, '/contact/')}>{t.projects}<ArrowUpRight size={17} /></a><a className="button button-text" href="/easyerp/">{t.product}<ArrowRight size={17} /></a></div><p className="hero-marker"><span />{t.marker}</p></div>
      <div className="hero-art" aria-label={t.visualLabel}><div className="art-topline"><span className="art-grid-mark">C.</span><span>{t.visualLabel}</span></div><div className="art-heading"><span>CRYSTAL</span><b>IT / DIGITAL / BUSINESS</b></div><div className="art-lines" aria-hidden="true">{Array.from({ length: 20 }, (_, i) => <i key={i} />)}</div><div className="art-bottom"><div><span className="art-caption">{t.visualSub}</span><div className="art-services">{t.visualItems.map(([num, title, subtitle]) => <div className="art-service" key={num}><span>{num}</span><p><b>{title}</b><small>{subtitle}</small></p><ArrowUpRight size={15} /></div>)}</div></div><span className="art-orbit" aria-hidden="true" /></div></div>
    </section>
    <section id="services" className="services-section"><div className="section-container"><div className="section-intro"><p className="section-kicker">{t.servicesOver}</p><h2>{t.servicesTitle}</h2><p>{t.servicesText}</p></div><div className="services-list">{t.services.map((service, index) => <ServiceRow key={service[0]} service={service} index={index} rtl={ar} details={t.serviceDetails?.[index]} />)}</div></div></section>
    <section className="easyerp-section company-product-feature"><div className="easyerp-inner"><div className="product-brandline"><span className="product-symbol">E</span><span>{t.productOver}</span></div><div className="product-feature-row"><h2>EasyERP</h2><p>{t.productText}</p><a className="button button-accent" href="/easyerp/">{t.productCta}<ArrowUpRight size={17} /></a></div><div className="product-overview"><div className="product-workflow"><p className="product-workflow-label">{t.workflowLabel}</p><div className="workflow-steps-list">{t.workflowSteps.map(([num, title, text]) => <div className="workflow-step-item" key={num}><span className="step-num">{num}</span><div><b>{title}</b><p>{text}</p></div></div>)}</div></div><div className="product-status"><p className="product-status-label">{t.statusLabel}</p><div className="status-points">{t.statusPoints.map((point) => <div className="status-point" key={point}><Check size={14} />{point}</div>)}</div></div></div></div></section>
    <section id="about" className="about-section"><div className="about-container"><div className="about-label"><span className="about-number">01</span><p className="section-kicker">{t.aboutOver}</p></div><div className="about-copy"><h2>{t.aboutTitle}</h2><p>{t.aboutText}</p><p className="about-note"><Globe2 size={17} />{t.aboutNote}</p></div><div className="about-stamp" aria-hidden="true"><span>CRYSTAL</span><i>IT SOLUTIONS</i><b>SA · GCC · GLOBAL</b></div></div></section>
  </>;

  /* ===== SERVICES PAGE — independent editorial catalog ===== */
  const ServicesPage = <div className="page-services">
    <section className="services-hero">
      <div className="services-hero-inner">
        <p className="services-kicker">{ar ? 'خدماتنا · السعودية · الخليج · العالم' : 'Our services · Saudi Arabia · GCC · Worldwide'}</p>
        <h1 className="services-title">{ar ? <>تقنية تخدم <em>أعمالك.</em></> : <>Technology that serves <em>your business.</em></>}</h1>
        <p className="services-intro">{ar ? 'خدمات تقنية مركزة، ننفذها مع الاهتمام بمتطلباتك، من بداية النقاش وحتى التطبيق.' : 'Focused technology services, delivered with attention to your requirements—from the first conversation through implementation.'}</p>
      </div>
      <nav className="services-rail" aria-label={ar ? 'أقسام الخدمات' : 'Service sections'}>
        {['#cctv', '#server-room', '#websites', '#applications', '#easyerp'].map((id, i) => <a key={id} href={id}><span>0{i + 1}</span>{ar ? ['كاميرات المراقبة','غرف الخوادم','المواقع','التطبيقات','EasyERP'][i] : ['CCTV Installation','Server Room Setup','Websites','Applications','EasyERP'][i]}</a>)}
      </nav>
    </section>
    <section id="cctv" className="service-block service-block-alt">
      <div className="service-block-num" aria-hidden="true">01</div>
      <div className="service-block-content">
        <div className="service-block-icon"><Video size={28} strokeWidth={1.5} /></div>
        <div className="service-block-text">
          <h2>{ar ? 'كاميرات المراقبة' : 'CCTV Installation'}</h2>
          <p>{ar ? 'أنظمة مراقبة تُخطط وتُركب بما يناسب موقعك واحتياجات التغطية وطبيعة العمل اليومية.' : 'Security systems planned and installed to suit your site, coverage needs and day-to-day operations.'}</p>
          <ul className="service-block-details">{t.serviceDetails[0].map((d) => <li key={d}><Check size={13} />{d}</li>)}</ul>
        </div>
      </div>
    </section>
    <section id="server-room" className="service-block">
      <div className="service-block-num" aria-hidden="true">02</div>
      <div className="service-block-content">
        <div className="service-block-icon"><Server size={28} strokeWidth={1.5} /></div>
        <div className="service-block-text">
          <h2>{ar ? 'تجهيز غرف الخوادم' : 'Server Room Setup'}</h2>
          <p>{ar ? 'تخطيط وتجهيز عملي لغرف الخوادم لدعم البيئة التقنية في منشأتك.' : 'Practical server-room planning and setup to support your organization\u2019s technology environment.'}</p>
          <ul className="service-block-details">{t.serviceDetails[1].map((d) => <li key={d}><Check size={13} />{d}</li>)}</ul>
        </div>
      </div>
    </section>
    <section id="websites" className="service-block service-block-alt">
      <div className="service-block-num" aria-hidden="true">03</div>
      <div className="service-block-content">
        <div className="service-block-icon"><Globe2 size={28} strokeWidth={1.5} /></div>
        <div className="service-block-text">
          <h2>{ar ? 'المواقع الإلكترونية' : 'Websites'}</h2>
          <p>{ar ? 'مواقع احترافية تعرض منشأتك بوضوح وتساعد العملاء على اتخاذ الخطوة التالية.' : 'Professional websites designed to present your business clearly and help customers take the next step.'}</p>
          <ul className="service-block-details">{t.serviceDetails[2].map((d) => <li key={d}><Check size={13} />{d}</li>)}</ul>
        </div>
      </div>
    </section>
    <section id="applications" className="service-block">
      <div className="service-block-num" aria-hidden="true">04</div>
      <div className="service-block-content">
        <div className="service-block-icon"><Code2 size={28} strokeWidth={1.5} /></div>
        <div className="service-block-text">
          <h2>{ar ? 'التطبيقات' : 'Applications'}</h2>
          <p>{ar ? 'تطبيقات أعمال تُبنى بما يتناسب مع إجراءاتك ومتطلباتك وطريقة عمل فريقك.' : 'Business applications shaped around your workflows, requirements and the way your team works.'}</p>
          <ul className="service-block-details">{t.serviceDetails[3].map((d) => <li key={d}><Check size={13} />{d}</li>)}</ul>
        </div>
      </div>
    </section>
    <section id="easyerp" className="services-easyerp">
      <div className="services-easyerp-inner">
        <div className="easyerp-showcase">
          <p className="easyerp-symbol">E</p>
          <div>
            <h2>EasyERP</h2>
            <p className="easyerp-tagline">{ar ? 'طريقة أوضح لإدارة عمليات الأعمال.' : 'A clearer way to run business operations.'}</p>
            <p className="easyerp-desc">{t.productText}</p>
          </div>
        </div>
        <div className="easyerp-workflow">
          <p className="easyerp-workflow-label">{t.workflowLabel}</p>
          <div className="easyerp-workflow-steps">{t.workflowSteps.map(([num, title, text]) => <div className="easyerp-wf-step" key={num}><span className="easyerp-wf-num">{num}</span><div><b>{title}</b><p>{text}</p></div></div>)}</div>
        </div>
        <div className="easyerp-status">
          <p className="easyerp-status-label">{t.statusLabel}</p>
          <div className="easyerp-status-points">{t.statusPoints.map((point) => <div className="easyerp-status-point" key={point}><Check size={14} />{point}</div>)}</div>
        </div>
        <div className="easyerp-ctas">
          <a className="button button-accent" href="/easyerp/">{ar ? 'اكتشف EasyERP' : 'Discover EasyERP'}<ArrowUpRight size={17} /></a>
          <a className="button button-text" href="/contact/" onClick={(e) => navigate(e, '/contact/')}>{ar ? 'ناقش مشروعك' : 'Discuss a project'}<ArrowRight size={17} /></a>
        </div>
      </div>
    </section>
  </div>;

  /* ===== ABOUT PAGE — editorial composition ===== */
  const AboutPage = <div className="page-about">
    <section className="about-hero">
      <div className="about-hero-inner">
        <p className="about-kicker">{ar ? 'من نحن · السعودية · الخليج · العالم' : 'About us · Saudi Arabia · GCC · Worldwide'}</p>
        <h1 className="about-title">{ar ? <>تقنية جيدة تبدأ<br /><em>بفهم العمل.</em></> : <>Good technology starts<br /><em>with understanding the work.</em></>}</h1>
        <p className="about-statement">{ar ? 'كريستال لحلول تقنية المعلومات شركة ناشئة في مجال التقنية، تقدم برامج الأعمال وخدمات تقنية المعلومات.' : 'Crystal IT Solutions is a technology startup delivering business software and IT services.'}</p>
      </div>
      <div className="about-geometry" aria-hidden="true">
        <div className="about-geo-ring" /><div className="about-geo-ring two" /><div className="about-geo-core"><span>CRYSTAL</span><small>IT SOLUTIONS</small></div>
      </div>
    </section>
    <section className="about-narrative">
      <div className="about-narrative-inner">
        <p className="about-narrative-text">{ar ? 'EasyERP هو مشروعنا الرئيسي، كما تشمل أعمالنا المواقع والتطبيقات والبنية التقنية التي تعتمد عليها المنشآت. نعمل انطلاقاً من المملكة العربية السعودية، مع تركيز على خدمة المنشآت في المملكة ودول الخليج، وتوجه نحو الأسواق الدولية.' : 'EasyERP is our main project—and our work also spans the websites, applications and infrastructure businesses rely on. Based in Saudi Arabia, with a focus on serving businesses across the Kingdom and GCC, and an international outlook.'}</p>
      </div>
    </section>
    <section className="about-capabilities">
      <div className="about-capabilities-inner">
        <h2>{ar ? 'مجالات عملنا' : 'Our capabilities'}</h2>
        <div className="about-cap-grid">
          <div className="about-cap-item">
            <div className="about-cap-icon"><Code2 size={22} /></div>
            <h3>{ar ? 'برامج الأعمال' : 'Business software'}</h3>
            <p>{ar ? 'EasyERP وتطبيقات مخصصة تُبنى حول احتياج المنشأة.' : 'EasyERP and tailored applications built around your organization\u2019s needs.'}</p>
          </div>
          <div className="about-cap-item">
            <div className="about-cap-icon"><Globe2 size={22} /></div>
            <h3>{ar ? 'المواقع والتطبيقات' : 'Websites & applications'}</h3>
            <p>{ar ? 'مواقع وتطبيقات تعرض منشأتك بوضوح وتساعد العملاء.' : 'Websites and applications that present your business clearly and help customers take the next step.'}</p>
          </div>
          <div className="about-cap-item">
            <div className="about-cap-icon"><Server size={22} /></div>
            <h3>{ar ? 'البنية التقنية' : 'Technology infrastructure'}</h3>
            <p>{ar ? 'كاميرات مراقبة وتجهيز غرف الخوادم لدعم البيئة التقنية.' : 'CCTV and server room setup to support your organization\u2019s technology environment.'}</p>
          </div>
        </div>
      </div>
    </section>
    <section className="about-region">
      <div className="about-region-inner">
        <p className="about-region-label">{ar ? 'نطاق العمل' : 'Where we work'}</p>
        <p className="about-region-text">{ar ? 'السعودية · الخليج · العالم' : 'Saudi Arabia · GCC · Worldwide'}</p>
        <Globe2 size={24} />
      </div>
    </section>
    <section className="about-cta">
      <div className="about-cta-inner">
        <a className="button button-light" href="/services/" onClick={(e) => navigate(e, '/services/')}>{ar ? 'استكشف خدماتنا' : 'Explore our services'}<ArrowUpRight size={17} /></a>
        <a className="button button-text" href="/contact/" onClick={(e) => navigate(e, '/contact/')}>{ar ? 'تواصل معنا' : 'Contact us'}<ArrowRight size={17} /></a>
      </div>
    </section>
  </div>;

  /* ===== CONTACT PAGE — distinctive dark canvas ===== */
  const ContactPage = <div className="page-contact">
    <section className="contact-canvas">
      <div className="contact-canvas-info">
        <p className="contact-canvas-kicker">{ar ? 'تواصل معنا' : 'Contact us'}</p>
        <h1 className="contact-canvas-title">{ar ? <>أخبرنا عن <em>مشروعك.</em></> : <>Tell us about <em>your project.</em></>}</h1>
        <p className="contact-canvas-desc">{ar ? 'سواء كنت تستكشف EasyERP أو تخطط لمشروع تقني آخر، شاركنا نبذة عن احتياجك لنواصل النقاش معك مباشرة.' : 'Whether you\u2019re exploring EasyERP or planning another technology project, share a little about what you need. We\u2019ll continue the conversation with you directly.'}</p>
        <div className="contact-info-cards">
          <a href={`https://wa.me/${siteConfig.contact.whatsappNumber}`} target="_blank" rel="noreferrer"><span className="contact-info-icon"><MessageCircle size={20} /></span><span><small>{t.whatsapp}</small><b>{siteConfig.contact.whatsappFormatted}</b></span><ArrowUpRight size={16} /></a>
          <a href={`mailto:${siteConfig.contact.email}`}><span className="contact-info-icon"><Globe2 size={20} /></span><span><small>{t.email}</small><b>{siteConfig.contact.email}</b></span><ArrowUpRight size={16} /></a>
        </div>
        <p className="contact-phone-note"><Monitor size={16} />{siteConfig.contact.phoneFormatted}</p>
      </div>
      <div className="contact-canvas-form">
        <form className="contact-form-v2" onSubmit={submitLead}>
          <div className="form-row"><label>{t.name}<input required autoComplete="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} /></label><label>{t.phone}<input required type="tel" autoComplete="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} /></label></div>
          <label>{t.company}<input autoComplete="organization" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} /></label>
          <label>{t.interest}<span className="select-wrap"><select required value={form.interest} onChange={(e) => setForm({ ...form, interest: e.target.value })}><option value="">{t.choose}</option>{t.options.map((option) => <option key={option} value={option}>{option}</option>)}</select><ChevronDown size={16} /></span></label>
          <label>{t.message}<textarea rows="3" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} /></label>
          <button className="button button-accent" type="submit">{t.send}<MessageCircle size={17} /></button>
          <p className="form-privacy"><ShieldCheck size={14} />{t.privacy}</p>
        </form>
      </div>
    </section>
  </div>;

  const pageContent = { home: HomePage, services: ServicesPage, about: AboutPage, contact: ContactPage };
  const Content = pageContent[page] || HomePage;

  return <div className={`company-site ${ar ? 'is-ar' : 'is-en'}`}>
    {Header}
    <main id="top">
      {Content}
    </main>
    {Footer}
  </div>;
}
