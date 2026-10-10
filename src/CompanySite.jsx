import { useEffect, useState, useCallback } from 'react';
import { ArrowDownLeft, ArrowRight, ArrowUpRight, Check, ChevronDown, Code2, Globe2, Languages, Mail, MapPin, Menu, MessageCircle, Monitor, Phone, Server, ShieldCheck, Video, X } from 'lucide-react';
import { siteConfig } from './data/config';
import FloatingContact from './components/FloatingContact';
import './company.css';

const copy = {
  en: {
    nav: [['/', 'Home'], ['/services/', 'Services'], ['/about/', 'About Us'], ['/contact/', 'Contact Us']], lang: 'العربية',
    eyebrow: 'Crystal IT Solutions  /  Saudi Arabia · GCC · Worldwide', title: <>Technology, thoughtfully<br /><em>built around your business.</em></>,
    intro: 'From business software to the infrastructure behind it, we help organizations put practical technology to work—with care, clarity and room to grow.', projects: 'Discuss a project', product: 'Discover EasyERP', marker: 'A technology partner for real-world operations',
    visualLabel: 'Connected by design',
    heroShowcase: {
      badge: 'C.',
      topline: 'Integrated IT Solutions',
      region: 'Saudi Arabia · GCC',
      footerText: 'Your Technology Partner, Build on Trust',
      footerLink: 'All services',
      items: [
        {
          id: 'cctv',
          num: '01',
          title: 'CCTV Installation',
          subtitle: 'Commercial security & 24/7 surveillance',
          image: '/services/cctv.jpg',
          href: '/services/#cctv'
        },
        {
          id: 'servers',
          num: '02',
          title: 'Server Rooms',
          subtitle: 'Enterprise IT infrastructure & networking',
          image: '/services/servers.jpg',
          href: '/services/#server-room'
        },
        {
          id: 'websites',
          num: '03',
          title: 'Websites & Portals',
          subtitle: 'Modern business web experiences',
          image: '/services/websites.jpg',
          href: '/services/#websites'
        },
        {
          id: 'applications',
          num: '04',
          title: 'Mobile Applications',
          subtitle: 'Tailored enterprise software & apps',
          image: '/services/mobile-apps.jpg',
          href: '/services/#applications'
        }
      ]
    },
    servicesOver: 'What we do', servicesTitle: 'Technology that works where your business works.', servicesText: 'Focused services, delivered with attention to your requirements—from the first conversation through implementation.',
    services: [['CCTV installation', 'Security systems planned and installed to suit your site, coverage needs and day-to-day operations.', Video], ['Server room setup', 'Practical server-room planning and setup to support your organization\u2019s technology environment.', Server], ['Websites', 'Professional websites designed to present your business clearly and help customers take the next step.', Globe2], ['Applications', 'Business applications shaped around your workflows, requirements and the way your team works.', Code2]],
    serviceDetails: [['Planning and installation for site coverage', 'Configuration for day-to-day operations'], ['Planning and setup for technology environment', 'Practical implementation support'], ['Design and development', 'Business presentation and customer engagement'], ['Shaped around workflows', 'Requirements-based development']],
    productCards: [
      {
        id: 'easyerp',
        featured: true,
        badge: 'Flagship Software · ZATCA Phase 1 & 2',
        tag: 'Enterprise ERP System',
        title: 'EasyERP',
        desc: 'Complete bilingual ERP software engineered for Saudi Arabia & GCC. Unifies sales, purchasing, inventory, and accounting with ZATCA Phase 1 & 2 live e-invoicing compliance.',
        bullets: [
          'ZATCA Phase 1 & 2 certified live integration with QR codes & cryptographic stamps',
          'Unified sales, quotes, delivery notes, purchasing, inventory & VAT accounting',
          'Bilingual Arabic & English interface, hosted locally on your server or in the cloud'
        ],
        ctaText: 'Discover EasyERP',
        ctaHref: '/easyerp/',
        icon: Monitor
      },
      {
        id: 'cctv',
        tag: 'Physical Security & Surveillance',
        title: 'CCTV Installation',
        desc: 'High-definition commercial and industrial security systems engineered for comprehensive coverage, 24/7 reliability, and remote monitoring across any premises.',
        bullets: [
          'Custom site coverage planning, blind-spot elimination & camera placement',
          'High-resolution IP & analog cameras with night vision and mobile live streaming',
          'On-premise NVR/DVR storage configuration and ongoing maintenance support'
        ],
        ctaText: 'Inquire About CCTV',
        ctaHref: '/contact/',
        topic: 'CCTV installation',
        icon: Video
      },
      {
        id: 'server-room',
        tag: 'IT Infrastructure & Networking',
        title: 'Server Room Setup',
        desc: 'Practical, structured server-room design and deployment to ensure maximum uptime, optimal cooling, clean structured cabling, and rock-solid network security.',
        bullets: [
          'Rack mounting, organized patch cabling, cable management & labeling',
          'Router, firewall, switch, and power protection (UPS) configuration',
          'Clean thermal planning, ventilation airflow, and access security setup'
        ],
        ctaText: 'Plan Your Server Room',
        ctaHref: '/contact/',
        topic: 'Server room setup',
        icon: Server
      },
      {
        id: 'websites',
        tag: 'Digital Presence & Portals',
        title: 'Websites & Portals',
        desc: 'Fast, responsive, modern websites and client portals crafted to showcase your business clearly, generate qualified leads, and establish instant credibility.',
        bullets: [
          'Bilingual Arabic & English modern design with flawless mobile responsiveness',
          'Search engine optimization (SEO), lightning speed performance & security',
          'Content management, contact workflows, and WhatsApp lead integration'
        ],
        ctaText: 'Discuss a Website',
        ctaHref: '/contact/',
        topic: 'Website',
        icon: Globe2
      },
      {
        id: 'applications',
        tag: 'Custom Software Development',
        title: 'Business Applications',
        desc: 'Tailored web and internal applications built from the ground up around your unique business workflows, operational bottlenecks, and reporting needs.',
        bullets: [
          'Engineered specifically around your operational processes and team habits',
          'Custom database structures, role-based dashboards, and automated workflows',
          'Seamless API integrations with third-party systems and legacy tools'
        ],
        ctaText: 'Request Custom App',
        ctaHref: '/contact/',
        topic: 'Application development',
        icon: Code2
      }
    ],
    servicesBannerTitle: 'Need a tailored solution for your business?',
    servicesBannerText: 'From enterprise software to critical IT infrastructure, we deliver practical technology built for Saudi Arabia and the GCC.',
    servicesBannerCta: 'Contact our team',
    servicesBannerWhatsapp: 'Direct WhatsApp',
    productOver: 'Our flagship project', productTitle: 'A clearer way to run business operations.', productText: 'EasyERP brings core business workflows together in one ERP platform, with product setup that can be tailored to your organization\u2019s needs.',
    productBullets: ['Sales, purchasing, inventory and accounting workflows', 'Arabic and English interface support', 'ZATCA Phase 1 & 2 certification and live integration'], productFine: 'We\u2019ll learn how your business works and discuss the right configuration for your team.', productCta: 'Ask about an EasyERP demo',
    productPreviewCaption: 'Sales invoice workspace preview', productPreviewLink: 'Explore EasyERP platform',
    workflowLabel: 'How the sales workflow connects', workflowSteps: [['01', 'Quotation', 'Prepare and send pricing to customers.'], ['02', 'Sales order', 'Confirm the order and plan fulfilment.'], ['03', 'Delivery note', 'Record what was delivered to the customer.'], ['04', 'Invoice', 'Issue the tax invoice and track payment.']], statusLabel: 'Product status', statusPoints: ['ZATCA Phase 1 & 2 certified and live integration', 'Arabic and English interface', 'Inventory and warehouse tools available, configured per company needs'],
    aboutOver: 'About Crystal IT Solutions',
    aboutTitle: 'Good technology starts with understanding the work.',
    aboutText: 'At Crystal IT Solutions, we are committed to helping businesses grow through reliable technology, innovative software, and tailored IT solutions. Based in our commitment to serving the Saudi Arabian market, we work with businesses of all sizes to simplify operations, improve efficiency, and embrace digital transformation.',
    aboutNote: 'Based in Saudi Arabia, with a focus on serving businesses across the Kingdom and GCC, and an international outlook.',
    aboutPage: {
      kicker: 'About Us · Saudi Arabia · GCC · Worldwide',
      heroTitle: 'Your Partner in Digital Growth',
      sections: [
        {
          id: 'who-we-are',
          number: '01',
          tag: 'Who we are',
          title: 'Who we are',
          paragraphs: [
            'At Crystal IT Solutions, we are committed to helping businesses grow through reliable technology, innovative software, and tailored IT solutions. Based in our commitment to serving the Saudi Arabian market, we work with businesses of all sizes to simplify operations, improve efficiency, and embrace digital transformation.',
            'We offer a comprehensive range of IT services, including CCTV installation, server room setup and IT infrastructure, website development, mobile application development, and customized software solutions. From establishing secure technology infrastructure to building digital platforms that support business growth, we deliver solutions designed around our clients\' unique needs.'
          ],
          servicesList: [
            'CCTV Installation',
            'Server Room Setup & IT Infrastructure',
            'Website Development',
            'Mobile Application Development',
            'Customized Software Solutions'
          ]
        },
        {
          id: 'flagship-product',
          number: '02',
          tag: 'Our Flagship product',
          title: 'Our Flagship product — EasyERP',
          paragraphs: [
            'Our flagship product, EasyERP, is designed to bring essential business operations together in one integrated platform. With features covering sales, purchases, sales and purchase returns, quotations, delivery notes, accounting, inventory management, and multi-warehouse operations, EasyERP helps businesses manage their daily activities with greater control and efficiency.',
            'Whether supporting retail businesses, wholesalers, or growing enterprises, our goal is to simplify complex workflows and provide practical tools that help businesses operate more effectively.'
          ],
          featuresList: [
            'Sales & Purchases Workflows',
            'Sales & Purchase Returns',
            'Quotations & Delivery Notes',
            'Accounting & VAT Compliance',
            'Inventory Management',
            'Multi-Warehouse Operations'
          ],
          cta: {
            text: 'Discover EasyERP',
            href: '/easyerp/'
          }
        },
        {
          id: 'commitment',
          number: '03',
          tag: 'Our commitment',
          title: 'Our commitment',
          paragraphs: [
            'At Crystal IT Solutions, we believe that technology is only as valuable as the trust behind it. Customer satisfaction is at the heart of every project, every solution, and every relationship we build. We take the time to understand our clients\' requirements and strive to deliver solutions that are reliable, transparent, and aligned with their business goals.',
            'We aim to build long-term partnerships by providing dependable support, maintaining high standards of quality, and continuously improving the solutions we offer.'
          ],
          pillars: [
            { title: 'Customer Satisfaction', desc: 'At the heart of every project, every solution, and every relationship we build.' },
            { title: 'Dependable Support', desc: 'Providing dependable support and proactive assistance you can rely on.' },
            { title: 'High Standards of Quality', desc: 'Maintaining high standards of quality across every solution we engineer.' },
            { title: 'Continuous Improvement', desc: 'Continuously refining and elevating our solutions to keep you ahead.' }
          ]
        }
      ]
    },
    contactOver: 'Start a conversation', contactTitle: 'Tell us what you\u2019re working on.', contactText: 'Whether you\u2019re exploring EasyERP or planning another technology project, share a little about what you need. We\u2019ll continue the conversation with you directly.',
    contactHeroKicker: 'Contact Crystal IT Solutions · Saudi Arabia & GCC',
    contactHeroTitle: <>Let's start a conversation<br /><em>about your project.</em></>,
    contactHeroIntro: 'Whether you\u2019re exploring EasyERP or planning an IT infrastructure or custom software project, share what you need and our team will get in touch directly.',
    contactCardWhatsappLabel: 'Direct WhatsApp',
    contactCardWhatsappSub: 'Instant replies for sales, demos, & pricing',
    contactCardPhoneLabel: 'Direct Phone Call',
    contactCardPhoneSub: 'Sunday to Thursday · 9:00 AM – 6:00 PM',
    contactCardEmailLabel: 'Official Email',
    contactCardEmailSub: 'For official RFPs, proposals & agreements',
    contactCoverageTitle: 'Regional Coverage & Deployment',
    contactCoverageItems: [
      'On-site installation and support across Riyadh, Jeddah, Eastern Province, and all KSA regions',
      'Cloud ERP deployment & remote onboarding across Saudi Arabia and the GCC',
      'Direct WhatsApp, phone, and technical support in Arabic and English'
    ],
    contactFormTitle: 'Send an inquiry',
    contactFormSubtitle: 'Fill in your details below to continue directly in WhatsApp.',
    name: 'Your name', phone: 'Phone / WhatsApp', company: 'Company (optional)', interest: 'What would you like to discuss?', choose: 'Choose a topic', options: ['EasyERP demo or customization', 'CCTV installation', 'Server room setup', 'Website', 'Application development', 'Other project'], message: 'A little about your project (optional)', send: 'Continue in WhatsApp', privacy: 'WhatsApp opens with your message ready for review. This website does not submit or store your form.', whatsapp: 'WhatsApp', email: 'Email us', phoneLabel: 'Call or WhatsApp', footer: 'Your Technology Partner, Build on Trust', back: 'Back to top', leadIntro: 'Crystal IT Solutions website enquiry', nameLabel: 'Name', businessLabel: 'Company', topicLabel: 'Topic', messageLabel: 'Project details', notGiven: 'Not provided', none: 'None',
  },
  ar: {
    nav: [['/', 'الرئيسية'], ['/services/', 'خدماتنا'], ['/about/', 'من نحن'], ['/contact/', 'تواصل معنا']], lang: 'English',
    eyebrow: 'كريستال لحلول تقنية المعلومات  /  السعودية · الخليج · العالم', title: <>تقنية مدروسة،<br /><em>تبدأ من احتياجات أعمالك.</em></>,
    intro: 'من برامج الأعمال إلى البنية التقنية التي تدعمها، نساعد المنشآت على توظيف التقنية العملية بعناية ووضوح، مع مساحة للنمو.', projects: 'ناقش مشروعك معنا', product: 'اكتشف EasyERP', marker: 'شريك تقني لاحتياجات الأعمال اليومية',
    visualLabel: 'ترابط مدروس',
    heroShowcase: {
      badge: 'ك.',
      topline: 'حلول تقنية متكاملة',
      region: 'السعودية · الخليج',
      footerText: 'شريكك التقني، مبني على الثقة.',
      footerLink: 'جميع الخدمات',
      items: [
        {
          id: 'cctv',
          num: '٠١',
          title: 'تركيب كاميرات المراقبة',
          subtitle: 'أنظمة أمنية وتغطية شاملة للمنشآت',
          image: '/services/cctv.jpg',
          href: '/services/#cctv'
        },
        {
          id: 'servers',
          num: '٠٢',
          title: 'تجهيز غرف الخوادم',
          subtitle: 'بنية تقنية وشبكات اتصالات متطورة',
          image: '/services/servers.jpg',
          href: '/services/#server-room'
        },
        {
          id: 'websites',
          num: '٠٣',
          title: 'المواقع الإلكترونية',
          subtitle: 'منصات وبوابات رقمية حديثة وسريعة',
          image: '/services/websites.jpg',
          href: '/services/#websites'
        },
        {
          id: 'applications',
          num: '٠٤',
          title: 'تطبيقات الجوال',
          subtitle: 'برمجيات أعمال وحلول برمجية مخصصة',
          image: '/services/mobile-apps.jpg',
          href: '/services/#applications'
        }
      ]
    },
    servicesOver: 'ماذا نقدم', servicesTitle: 'تقنية تخدم أعمالك في كل موقع.', servicesText: 'خدمات مركزة، ننفذها مع الاهتمام بمتطلباتك، من بداية النقاش وحتى التطبيق.',
    services: [['تركيب كاميرات المراقبة', 'أنظمة مراقبة تُخطط وتُركب بما يناسب موقعك واحتياجات التغطية وطبيعة العمل اليومية.', Video], ['تجهيز غرف الخوادم', 'تخطيط وتجهيز عملي لغرف الخوادم لدعم البيئة التقنية في منشأتك.', Server], ['المواقع الإلكترونية', 'مواقع احترافية تعرض منشأتك بوضوح وتساعد العملاء على اتخاذ الخطوة التالية.', Globe2], ['التطبيقات', 'تطبيقات أعمال تُبنى بما يتناسب مع إجراءاتك ومتطلباتك وطريقة عمل فريقك.', Code2]],
    serviceDetails: [['تخطيط وتركيب لتغطية الموقع', 'تهيئة للعمليات اليومية'], ['تخطيط وتجهيز للبيئة التقنية', 'دعم عملي للتنفيذ'], ['تصميم وتطوير', 'عرض المنشأة وتفاعل العملاء'], ['مصممة حول إجراءات العمل', 'تطوير مبني على المتطلبات']],
    productCards: [
      {
        id: 'easyerp',
        featured: true,
        badge: 'مشروعنا الرئيسي · معتمد زاتكا مرحلة ١ و ٢',
        tag: 'نظام تخطيط الموارد المؤسسية',
        title: 'EasyERP',
        desc: 'نظام سحابي متكامل ومبني خصيصاً للشركات في السعودية والخليج. يجمع المبيعات، المشتريات، المخزون، والمحاسبة مع الربط المباشر مع هيئة الزكاة والضريبة والجمارك (زاتكا).',
        bullets: [
          'اعتماد رسمي للربط المباشر مع زاتكا (المرحلة الأولى والثانية) ورموز الاستجابة السريعة',
          'دورة مبيعات ومشتريات ومخازن وفواتير ضريبية وحسابات مالية متكاملة',
          'واجهة ثنائية اللغة (عربي / إنجليزي)، مع استضافة محلية على خادمك أو سحابية آمنة'
        ],
        ctaText: 'اكتشف EasyERP',
        ctaHref: '/easyerp/',
        icon: Monitor
      },
      {
        id: 'cctv',
        tag: 'أنظمة الأمن والمراقبة',
        title: 'تركيب كاميرات المراقبة',
        desc: 'أنظمة مراقبة أمنية متطورة وعالية الدقة تُخطط وتُركب لتوفير تغطية شاملة، ومتابعة عن بُعد على مدار الساعة لمقرات الشركات والمصانع والمحلات.',
        bullets: [
          'تخطيط مدروس لتغطية الموقع ومعالجة النقاط العمياء وتحديد زوايا الكاميرات بدقة',
          'كاميرات IP حديثة برؤية ليلية متقدمة مع إمكانية البث المباشر عبر الجوال',
          'تهيئة أجهزة التسجيل NVR/DVR والتخزين مع دعم فني وصيانة دورية مستمرة'
        ],
        ctaText: 'استفسر عن كاميرات المراقبة',
        ctaHref: '/contact/',
        topic: 'تركيب كاميرات مراقبة',
        icon: Video
      },
      {
        id: 'server-room',
        tag: 'البنية التقنية والشبكات',
        title: 'تجهيز غرف الخوادم',
        desc: 'تخطيط وتجهيز احترافي لغرف الخوادم وشبكات الاتصال يضمن استمرارية العمل، وتنظيم الكابلات، والتهوية المناسبة، وأعلى مستويات الحماية.',
        bullets: [
          'تركيب الكبائن (Racks)، تنظيم وتسمية مسارات الكابلات والشبكات بدقة عالية',
          'تهيئة الموجهات (Routers) والجدران النارية وموزعات الشبكة وأنظمة الطوارئ (UPS)',
          'تخطيط التدفق الحراري والتهوية وضوابط أمان الدخول لغرفة الخوادم'
        ],
        ctaText: 'خطط لغرفة الخوادم',
        ctaHref: '/contact/',
        topic: 'تجهيز غرفة خوادم',
        icon: Server
      },
      {
        id: 'websites',
        tag: 'المواقع والبوابات الرقمية',
        title: 'المواقع الإلكترونية',
        desc: 'مواقع حديثة وسريعة تعكس هوية منشأتك باحترافية، وتستقطب العملاء، وتمنح زوارك تجربة تصفح سلسة وموثوقة على مختلف الأجهزة.',
        bullets: [
          'تصميم ثنائي اللغة (عربي وإنجليزي) متجاوب تماماً مع الهواتف الذكية',
          'سرعة فائقة وتهيئة محركات البحث (SEO) وأعلى معايير الحماية الرقمية',
          'إدارة سهلة للمحتوى مع ربط مباشر بنماذج الاستفسار ورسائل الواتساب'
        ],
        ctaText: 'ناقش تصميم موقعك',
        ctaHref: '/contact/',
        topic: 'موقع إلكتروني',
        icon: Globe2
      },
      {
        id: 'applications',
        tag: 'تطوير البرمجيات المخصصة',
        title: 'تطبيقات الأعمال',
        desc: 'تطبيقات وأنظمة مخصصة تُبنى خصيصاً لتناسب خطوات عملك اليومية ومتطلبات فريقك، مما يختصر الوقت ويزيد من كفاءة العمليات.',
        bullets: [
          'تطوير مصمم بدقة حول آليات العمل والعمليات الخاصة بمنشأتك',
          'قواعد بيانات مخصصة، ولوحات تحكم مع صلاحيات دقيقة للمستخدمين',
          'ربط برمجي مرن (APIs) مع الأنظمة والبرامج الأخرى المستخدمة لديك'
        ],
        ctaText: 'اطلب تطبيقاً مخصصاً',
        ctaHref: '/contact/',
        topic: 'تطوير تطبيق',
        icon: Code2
      }
    ],
    servicesBannerTitle: 'هل تحتاج إلى حل مخصص لمنشأتك؟',
    servicesBannerText: 'من برامج الأعمال المتكاملة إلى البنية التحتية والشبكات، ننفذ حلولاً تقنية عملية ومصممة خصيصاً للسعودية والخليج.',
    servicesBannerCta: 'تواصل مع فريقنا',
    servicesBannerWhatsapp: 'واتساب مباشر',
    productOver: 'مشروعنا الرئيسي', productTitle: 'طريقة أوضح لإدارة عمليات الأعمال.', productText: 'يجمع EasyERP إجراءات الأعمال الأساسية في منصة تخطيط موارد مؤسسية واحدة، مع إمكانية تهيئة النظام بما يتناسب مع احتياجات منشأتك.',
    productBullets: ['إجراءات المبيعات والمشتريات والمخزون والمحاسبة', 'واجهة تدعم اللغتين العربية والإنجليزية', 'اعتماد زاتكا للمرحلتين الأولى والثانية والربط المباشر'], productFine: 'نتعرف على طريقة عمل منشأتك ونناقش الإعداد الأنسب لفريقك.', productCta: 'استفسر عن عرض EasyERP',
    productPreviewCaption: 'معاينة شاشة إصدار الفواتير والمبيعات في EasyERP', productPreviewLink: 'اكتشف منصة EasyERP',
    workflowLabel: 'كيف يتصل سير عمل المبيعات', workflowSteps: [['٠١', 'عرض السعر', 'إعداد وإرسال التسعير للعملاء.'], ['٠٢', 'أمر البيع', 'تأكيد الطلب وتخطيط التنفيذ.'], ['٠٣', 'سند التسليم', 'تسجيل ما تم تسليمه للعميل.'], ['٠٤', 'الفاتورة', 'إصدار الفاتورة الضريبية ومتابعة الدفع.']], statusLabel: 'حالة المنتج', statusPoints: ['معتمد زاتكا للمرحلتين الأولى والثانية مع ربط حي', 'واجهة عربية وإنجليزية', 'أدوات المخزون والمستودعات متاحة وتُهيأ حسب احتياج المنشأة'],
    aboutOver: 'عن كريستال لحلول تقنية المعلومات',
    aboutTitle: 'التقنية الجيدة تبدأ بفهم طبيعة العمل.',
    aboutText: 'في كريستال لحلول تقنية المعلومات، نحن ملتزمون بمساعدة الشركات على النمو من خلال تكنولوجيا موثوقة، وبرمجيات مبتكرة، وحلول تقنية معلومات مخصصة. انطلاقاً من التزامنا بخدمة السوق السعودي، نعمل مع الشركات من جميع الأحجام لتبسيط العمليات، وتحسين الكفاءة، وتبني التحول الرقمي.',
    aboutNote: 'نعمل انطلاقاً من المملكة العربية السعودية، مع تركيز على خدمة المنشآت في المملكة ودول الخليج، وتوجه نحو الأسواق الدولية.',
    aboutPage: {
      kicker: 'من نحن · المملكة العربية السعودية · الخليج · العالم',
      heroTitle: 'شريكك في النمو الرقمي',
      sections: [
        {
          id: 'who-we-are',
          number: '٠١',
          tag: 'من نحن',
          title: 'من نحن',
          paragraphs: [
            'في كريستال لحلول تقنية المعلومات، نحن ملتزمون بمساعدة الشركات على النمو من خلال تكنولوجيا موثوقة، وبرمجيات مبتكرة، وحلول تقنية معلومات مخصصة. انطلاقاً من التزامنا بخدمة السوق السعودي، نعمل مع الشركات من جميع الأحجام لتبسيط العمليات، وتحسين الكفاءة، وتبني التحول الرقمي.',
            'نقدم مجموعة شاملة من خدمات تقنية المعلومات، تشمل تركيب كاميرات المراقبة، وتجهيز غرف الخوادم والبنية التحتية لتقنية المعلومات، وتطوير المواقع الإلكترونية، وتطوير تطبيقات الجوال، والحلول البرمجية المخصصة. بدءاً من تأسيس بنية تحتية تقنية آمنة وحتى بناء منصات رقمية تدعم نمو الأعمال، نقدم حلولاً مصممة حول الاحتياجات الفريدة لعملائنا.'
          ],
          servicesList: [
            'تركيب كاميرات المراقبة (CCTV)',
            'تجهيز غرف الخوادم والبنية التحتية',
            'تطوير المواقع الإلكترونية',
            'تطوير تطبيقات الجوال',
            'حلول برمجية مخصصة'
          ]
        },
        {
          id: 'flagship-product',
          number: '٠٢',
          tag: 'منتجنا الرئيسي',
          title: 'منتجنا الرئيسي — EasyERP',
          paragraphs: [
            'تم تصميم منتجنا الرئيسي، EasyERP، لتوحيد عمليات الأعمال الأساسية في منصة واحدة متكاملة. مع ميزات تغطي المبيعات، المشتريات، مردودات المبيعات والمشتريات، عروض الأسعار، سندات التسليم، المحاسبة، إدارة المخزون، وعمليات المستودعات المتعددة، يساعد EasyERP الشركات على إدارة أنشطتها اليومية بتحكم وكفاءة أكبر.',
            'سواء كان الدعم موجهاً لقطاع التجزئة، أو تجار الجملة، أو المنشآت المتنامية، فإن هدفنا هو تبسيط سير العمل المعقد وتوفير أدوات عملية تساعد الشركات على العمل بفعالية أكبر.'
          ],
          featuresList: [
            'إجراءات المبيعات والمشتريات',
            'مردودات المبيعات والمشتريات',
            'عروض الأسعار وسندات التسليم',
            'المحاسبة والامتثال الضريبي',
            'إدارة المخزون والتخزين',
            'عمليات المستودعات المتعددة'
          ],
          cta: {
            text: 'اكتشف EasyERP',
            href: '/easyerp/'
          }
        },
        {
          id: 'commitment',
          number: '٠٣',
          tag: 'التزامنا',
          title: 'التزامنا',
          paragraphs: [
            'في كريستال لحلول تقنية المعلومات، نؤمن بأن التكنولوجيا تكون ذات قيمة بقدر الثقة التي تقف وراءها. رضا العملاء هو جوهر كل مشروع وكل حل وكل علاقة نبنيها. نأخذ الوقت الكافي لفهم متطلبات عملائنا ونسعى جاهدين لتقديم حلول موثوقة وشفافة ومتوافقة مع أهداف أعمالهم.',
            'نهدف إلى بناء شراكات طويلة الأمد من خلال تقديم دعم موثوق، والحفاظ على معايير جودة عالية، والتطوير المستمر للحلول التي نقدمها.'
          ],
          pillars: [
            { title: 'رضا العملاء', desc: 'في صميم كل مشروع، وكل حل، وكل علاقة نبنيها مع شركائنا.' },
            { title: 'دعم فني موثوق', desc: 'شراكات ممتدة مدعومة بمساندة فنية مستمرة يعتمد عليها.' },
            { title: 'معايير جودة عالية', desc: 'الحفاظ على أعلى معايير الجودة والإتقان في جميع الحلول.' },
            { title: 'تطوير مستمر', desc: 'تحديث وتحسين متواصل يضمن استدامة ومواكبة أعمالك.' }
          ]
        }
      ]
    },
    contactOver: 'لنبدأ الحديث', contactTitle: 'أخبرنا عن مشروعك.', contactText: 'سواء كنت تستكشف EasyERP أو تخطط لمشروع تقني آخر، شاركنا نبذة عن احتياجك لنواصل النقاش معك مباشرة.',
    contactHeroKicker: 'تواصل معنا · السعودية · الخليج',
    contactHeroTitle: <>أخبرنا عن<br /><em>مشروعك واحتياجاتك.</em></>,
    contactHeroIntro: 'سواء كنت تستكشف نظام EasyERP أو تخطط لتركيب كاميرات المراقبة وغرف الخوادم أو تطوير برمجي مخصص، شاركنا احتياجك وسيتواصل فريقنا معك مباشرة.',
    contactCardWhatsappLabel: 'واتساب مباشر',
    contactCardWhatsappSub: 'رد فوري لطلبات العروض والأسعار والتجربة',
    contactCardPhoneLabel: 'اتصال هاتفي مباشر',
    contactCardPhoneSub: 'من الأحد إلى الخميس · ٩:٠٠ ص – ٦:٠٠ م',
    contactCardEmailLabel: 'البريد الإلكتروني الرسمي',
    contactCardEmailSub: 'لطلبات العروض والمراسلات الرسمية والشراكات',
    contactCoverageTitle: 'نطاق التغطية والتنفيذ',
    contactCoverageItems: [
      'تنفيذ حضوري وتركيب للأنظمة في الرياض وجدة والمنطقة الشرقية وجميع مناطق المملكة',
      'استضافة سحابية وتدريب وتشغيل عن بعد لكافة منشآت المملكة ودول الخليج',
      'دعم فني وتواصل مباشر باللغتين العربية والإنجليزية'
    ],
    contactFormTitle: 'أرسل تفاصيل استفسارك',
    contactFormSubtitle: 'أدخل بياناتك بالأسفل لنواصل معك الحديث مباشرة عبر واتساب.',
    name: 'الاسم', phone: 'رقم الهاتف / واتساب', company: 'المنشأة (اختياري)', interest: 'ما الموضوع الذي ترغب بمناقشته؟', choose: 'اختر الموضوع', options: ['عرض أو تخصيص EasyERP', 'تركيب كاميرات مراقبة', 'تجهيز غرفة خوادم', 'موقع إلكتروني', 'تطوير تطبيق', 'مشروع آخر'], message: 'نبذة عن مشروعك (اختياري)', send: 'متابعة عبر واتساب', privacy: 'سيُفتح واتساب ورسالتك جاهزة للمراجعة. لا يرسل الموقع النموذج ولا يخزن بياناته.', whatsapp: 'واتساب', email: 'راسلنا', phoneLabel: 'اتصال أو واتساب', footer: 'شريكك التقني، مبني على الثقة.', back: 'العودة للأعلى', leadIntro: 'استفسار من موقع كريستال لحلول تقنية المعلومات', nameLabel: 'الاسم', businessLabel: 'المنشأة', topicLabel: 'الموضوع', messageLabel: 'تفاصيل المشروع', notGiven: 'غير محدد', none: 'لا يوجد',
  }
};

const pageMeta = {
  en: {
    home: { title: 'Crystal IT Solutions | Business Software & IT Services', desc: 'Crystal IT Solutions delivers business software and IT services, with EasyERP as our main project. Serving Saudi Arabia, the GCC and international markets.' },
    services: { title: 'Services | Crystal IT Solutions', desc: 'CCTV installation, server room setup, websites and business applications. EasyERP is our flagship business software project.' },
    about: { title: 'About Us | Crystal IT Solutions', desc: 'At Crystal IT Solutions, we are committed to helping businesses grow through reliable technology, innovative software, and tailored IT solutions.' },
    contact: { title: 'Contact Us | Crystal IT Solutions', desc: 'Start a conversation about your project. Reach us via WhatsApp or email.' },
  },
  ar: {
    home: { title: 'كريستال لحلول تقنية المعلومات | Crystal IT Solutions', desc: 'كريستال لحلول تقنية المعلومات: برامج أعمال وخدمات تقنية، مع EasyERP مشروعنا الرئيسي. نخدم السعودية ودول الخليج والأسواق الدولية.' },
    services: { title: 'خدماتنا | كريستال لحلول تقنية المعلومات', desc: 'تركيب كاميرات المراقبة، تجهيز غرف الخوادم، المواقع الإلكترونية وتطبيقات الأعمال. EasyERP هو مشروع برامج الأعمال الرئيسي.' },
    about: { title: 'من نحن | كريستال لحلول تقنية المعلومات', desc: 'كريستال لحلول تقنية المعلومات: ملتزمون بمساعدة الشركات على النمو من خلال تكنولوجيا موثوقة، وبرمجيات مبتكرة، وحلول تقنية معلومات مخصصة.' },
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
      <div className="hero-art hero-showcase" aria-label={t.heroShowcase.topline}>
        <div className="showcase-header">
          <div className="showcase-tag">
            <span>{t.heroShowcase.topline}</span>
          </div>
          <span className="showcase-region">{t.heroShowcase.region}</span>
        </div>

        <div className="showcase-grid">
          {t.heroShowcase.items.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={(e) => navigate(e, item.href)}
              className="showcase-card"
            >
              <img
                src={item.image}
                alt={item.title}
                className="showcase-card-img"
                loading="eager"
              />
              <div className="showcase-card-overlay" />
              <div className="showcase-card-top">
                <span className="showcase-card-num">{item.num}</span>
                <span className="showcase-card-arrow" aria-hidden="true">
                  {ar ? <ArrowDownLeft size={13} /> : <ArrowUpRight size={13} />}
                </span>
              </div>
              <div className="showcase-card-bottom">
                <h4>{item.title}</h4>
                <p>{item.subtitle}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="showcase-footer">
          <span>{t.heroShowcase.footerText}</span>
          <a
            href="/services/"
            onClick={(e) => navigate(e, '/services/')}
            className="showcase-footer-link"
          >
            <span>{t.heroShowcase.footerLink}</span>
            {ar ? <ArrowDownLeft size={13} /> : <ArrowUpRight size={13} />}
          </a>
        </div>
      </div>
    </section>
    <section className="easyerp-section company-product-feature">
      <div className="easyerp-inner">
        <div className="product-brandline"><span className="product-symbol">E</span><span>{t.productOver}</span></div>
        <div className="product-feature-row"><h2>EasyERP</h2><p>{t.productText}</p><a className="button button-accent" href="/easyerp/">{t.productCta}<ArrowUpRight size={17} /></a></div>
        <div className="product-overview">
          <div className="product-preview-col">
            <a href="/easyerp/" className="product-screenshot-card" aria-label={ar ? 'معاينة واجهة برنامج EasyERP' : 'EasyERP workspace interface preview'}>
              <div className="product-screenshot-frame">
                <img
                  src="/easyerp-preview.png"
                  alt={ar ? 'معاينة واجهة برنامج EasyERP للمبيعات وإصدار الفواتير' : 'EasyERP sales and invoicing workspace interface preview'}
                  className="product-screenshot-img"
                  loading="lazy"
                />
              </div>
              <div className="product-screenshot-foot">
                <span className="screenshot-foot-tag">
                  <span className="screenshot-foot-dot" />
                  {t.productPreviewCaption}
                </span>
                <span className="screenshot-foot-cta">
                  <span>{t.productPreviewLink}</span>
                  {ar ? <ArrowDownLeft size={13} /> : <ArrowUpRight size={13} />}
                </span>
              </div>
            </a>
          </div>
          <div className="product-details-col">
            <div className="product-workflow">
              <p className="product-workflow-label">{t.workflowLabel}</p>
              <div className="workflow-steps-list">
                {t.workflowSteps.map(([num, title, text]) => (
                  <div className="workflow-step-item" key={num}>
                    <span className="step-num">{num}</span>
                    <div><b>{title}</b><p>{text}</p></div>
                  </div>
                ))}
              </div>
            </div>
            <div className="product-status">
              <p className="product-status-label">{t.statusLabel}</p>
              <div className="status-points">
                {t.statusPoints.map((point) => (
                  <div className="status-point" key={point}><Check size={14} />{point}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="services" className="services-section"><div className="section-container"><div className="section-intro"><p className="section-kicker">{t.servicesOver}</p><h2>{t.servicesTitle}</h2><p>{t.servicesText}</p></div><div className="services-list">{t.services.map((service, index) => <ServiceRow key={service[0]} service={service} index={index} rtl={ar} details={t.serviceDetails?.[index]} />)}</div></div></section>
    <section id="about" className="about-section"><div className="about-container"><div className="about-label"><span className="about-number">01</span><p className="section-kicker">{t.aboutOver}</p></div><div className="about-copy"><h2>{t.aboutTitle}</h2><p>{t.aboutText}</p><p className="about-note"><Globe2 size={17} />{t.aboutNote}</p></div><div className="about-stamp" aria-hidden="true"><span>CRYSTAL</span><i>IT SOLUTIONS</i><b>SA · GCC · GLOBAL</b></div></div></section>
  </>;

  /* ===== SERVICES PAGE — modern product & service cards catalog ===== */
  const ServicesPage = <div className="page-services">
    <section className="services-hero">
      <div className="services-hero-inner">
        <p className="services-kicker">{ar ? 'منتجاتنا وخدماتنا · السعودية والخليج' : 'Our Products & Services · Saudi Arabia & GCC'}</p>
        <h1 className="services-title">{ar ? <>حلول تقنية تخدم <em>أعمالك.</em></> : <>Technology solutions that serve <em>your business.</em></>}</h1>
        <p className="services-intro">{ar ? 'من البرمجيات المتكاملة إلى البنية التحتية، نقدم منتجات وخدمات تقنية تلبي احتياجات نمو منشأتك وتدعم استمرارية عملياتها.' : 'From enterprise software to robust IT infrastructure, discover practical solutions engineered for modern organizations across Saudi Arabia and the GCC.'}</p>
      </div>
      <nav className="services-rail" aria-label={ar ? 'أقسام المنتجات والخدمات' : 'Products & Services'}>
        {t.productCards.map((card, i) => (
          <a key={card.id} href={`#${card.id}`}>
            <span>0{i + 1}</span>{card.title}
          </a>
        ))}
      </nav>
    </section>

    <section className="services-grid-section">
      <div className="services-cards-grid">
        {t.productCards.map((card, index) => {
          const Icon = card.icon;
          const isFeatured = !!card.featured;
          return (
            <article id={card.id} key={card.id} className={`service-card ${isFeatured ? 'service-card-featured' : ''}`}>
              <div>
                <div className="card-top">
                  <div className="card-icon-wrap">
                    <Icon size={22} strokeWidth={1.8} />
                  </div>
                  <span className="card-index">0{index + 1}</span>
                </div>

                {card.badge && (
                  <div className="card-badge">
                    <span className="badge-dot" />
                    <span>{card.badge}</span>
                  </div>
                )}

                <div className="card-body">
                  <span className="card-tag">{card.tag}</span>
                  <h2 className="card-title">{card.title}</h2>
                  <p className="card-desc">{card.desc}</p>

                  <ul className="card-bullets">
                    {card.bullets.map((b) => (
                      <li key={b}>
                        <Check size={14} />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="card-footer">
                {card.ctaHref === '/easyerp/' ? (
                  <a className="card-btn card-btn-primary" href="/easyerp/">
                    <span>{card.ctaText}</span>
                    {ar ? <ArrowDownLeft size={16} /> : <ArrowUpRight size={16} />}
                  </a>
                ) : (
                  <a
                    className="card-btn card-btn-outline"
                    href="/contact/"
                    onClick={(e) => {
                      if (card.topic) {
                        setForm((prev) => ({ ...prev, interest: card.topic }));
                      }
                      navigate(e, '/contact/');
                    }}
                  >
                    <span>{card.ctaText}</span>
                    {ar ? <ArrowDownLeft size={16} /> : <ArrowUpRight size={16} />}
                  </a>
                )}
              </div>
            </article>
          );
        })}
      </div>

      <div className="services-consultation-banner">
        <div>
          <h3>{t.servicesBannerTitle}</h3>
          <p>{t.servicesBannerText}</p>
        </div>
        <div className="banner-actions">
          <a
            className="button button-light"
            href="/contact/"
            onClick={(e) => navigate(e, '/contact/')}
          >
            {t.servicesBannerCta}
            <ArrowUpRight size={16} />
          </a>
          <a
            className="button button-outline-dark"
            href={`https://wa.me/${siteConfig.contact.whatsappNumber}`}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle size={16} />
            {t.servicesBannerWhatsapp}
          </a>
        </div>
      </div>
    </section>
  </div>;

  /* ===== ABOUT PAGE — editorial composition ===== */
  const AboutPage = (
    <div className="page-about">
      <section className="about-hero">
        <div className="about-hero-inner">
          <p className="about-kicker">{t.aboutPage.kicker}</p>
          <h1 className="about-title">{t.aboutPage.heroTitle}</h1>
        </div>
        <div className="about-geometry" aria-hidden="true">
          <div className="about-geo-ring" />
          <div className="about-geo-ring two" />
          <div className="about-geo-core">
            <span>CRYSTAL</span>
            <small>IT SOLUTIONS</small>
          </div>
        </div>
      </section>

      <div className="about-sections-container">
        {t.aboutPage.sections.map((section) => (
          <section key={section.id} id={section.id} className={`about-card-section about-${section.id}`}>
            <div className="about-section-header">
              <span className="about-section-number">{section.number}</span>
              <div className="about-section-heading-wrap">
                <p className="about-section-tag">{section.tag}</p>
                <h2 className="about-section-heading">{section.title}</h2>
              </div>
            </div>

            <div className="about-section-body">
              <div className="about-paragraphs">
                {section.paragraphs.map((p, pIdx) => (
                  <p key={pIdx} className={pIdx === 0 ? 'about-paragraph-lead' : 'about-paragraph'}>
                    {p}
                  </p>
                ))}
              </div>

              {section.servicesList && (
                <div className="about-feature-box">
                  <h4 className="about-feature-box-title">{ar ? 'خدماتنا المتكاملة' : 'Our Range of Services'}</h4>
                  <div className="about-tags-grid">
                    {section.servicesList.map((srv, i) => (
                      <div key={i} className="about-tag-chip">
                        <Check size={14} />
                        <span>{srv}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {section.featuresList && (
                <div className="about-feature-box flagship-box">
                  <div className="flagship-box-header">
                    <div className="flagship-badge">
                      <Monitor size={15} />
                      <span>EasyERP</span>
                    </div>
                    {section.cta && (
                      <a href={section.cta.href} className="flagship-cta-link">
                        <span>{section.cta.text}</span>
                        {ar ? <ArrowDownLeft size={15} /> : <ArrowUpRight size={15} />}
                      </a>
                    )}
                  </div>
                  <div className="about-tags-grid">
                    {section.featuresList.map((feat, i) => (
                      <div key={i} className="about-tag-chip">
                        <Check size={14} />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {section.pillars && (
                <div className="about-pillars-grid">
                  {section.pillars.map((pillar, i) => (
                    <div key={i} className="about-pillar-card">
                      <div className="about-pillar-icon">
                        <ShieldCheck size={18} />
                      </div>
                      <h5>{pillar.title}</h5>
                      <p>{pillar.desc}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>
        ))}
      </div>

      <section className="about-region">
        <div className="about-region-inner">
          <p className="about-region-label">{ar ? 'نطاق العمل' : 'Where we work'}</p>
          <p className="about-region-text">{ar ? 'المملكة العربية السعودية · الخليج · العالم' : 'Saudi Arabia · GCC · Worldwide'}</p>
          <Globe2 size={24} />
        </div>
      </section>

      <section className="about-cta">
        <div className="about-cta-inner">
          <a className="button button-light" href="/services/" onClick={(e) => navigate(e, '/services/')}>{ar ? 'استكشف خدماتنا' : 'Explore our services'}<ArrowUpRight size={17} /></a>
          <a className="button button-text" href="/contact/" onClick={(e) => navigate(e, '/contact/')}>{ar ? 'تواصل معنا' : 'Contact us'}<ArrowRight size={17} /></a>
        </div>
      </section>
    </div>
  );

  /* ===== CONTACT PAGE — modern light editorial layout ===== */
  const ContactPage = (
    <div className="page-contact">
      <section className="contact-hero">
        <div className="contact-hero-inner">
          <p className="contact-kicker">{t.contactHeroKicker}</p>
          <h1 className="contact-title">{t.contactHeroTitle}</h1>
          <p className="contact-intro">{t.contactHeroIntro}</p>
        </div>
      </section>

      <section className="contact-section-wrap">
        <div className="contact-grid">
          {/* Direct channels column */}
          <div className="contact-channels">
            <div className="contact-cards-stack">
              <a
                className="contact-card"
                href={`https://wa.me/${siteConfig.contact.whatsappNumber}`}
                target="_blank"
                rel="noreferrer"
              >
                <div className="contact-icon-box">
                  <MessageCircle size={22} strokeWidth={1.8} />
                </div>
                <div className="contact-card-text">
                  <span className="contact-card-label">{t.contactCardWhatsappLabel}</span>
                  <b className="contact-card-val" dir="ltr">{siteConfig.contact.whatsappFormatted}</b>
                  <span className="contact-card-sub">{t.contactCardWhatsappSub}</span>
                </div>
                <span className="contact-card-arrow" aria-hidden="true">
                  {ar ? <ArrowDownLeft size={18} /> : <ArrowUpRight size={18} />}
                </span>
              </a>

              <a
                className="contact-card"
                href={`tel:${siteConfig.contact.phoneClean || siteConfig.contact.whatsappNumber}`}
              >
                <div className="contact-icon-box">
                  <Phone size={22} strokeWidth={1.8} />
                </div>
                <div className="contact-card-text">
                  <span className="contact-card-label">{t.contactCardPhoneLabel}</span>
                  <b className="contact-card-val" dir="ltr">{siteConfig.contact.phoneFormatted}</b>
                  <span className="contact-card-sub">{t.contactCardPhoneSub}</span>
                </div>
                <span className="contact-card-arrow" aria-hidden="true">
                  {ar ? <ArrowDownLeft size={18} /> : <ArrowUpRight size={18} />}
                </span>
              </a>

              <a
                className="contact-card"
                href={`mailto:${siteConfig.contact.email}`}
              >
                <div className="contact-icon-box">
                  <Mail size={22} strokeWidth={1.8} />
                </div>
                <div className="contact-card-text">
                  <span className="contact-card-label">{t.contactCardEmailLabel}</span>
                  <b className="contact-card-val">{siteConfig.contact.email}</b>
                  <span className="contact-card-sub">{t.contactCardEmailSub}</span>
                </div>
                <span className="contact-card-arrow" aria-hidden="true">
                  {ar ? <ArrowDownLeft size={18} /> : <ArrowUpRight size={18} />}
                </span>
              </a>
            </div>

            <div className="contact-coverage-box">
              <div className="contact-coverage-head">
                <MapPin size={20} className="coverage-icon" />
                <h3>{t.contactCoverageTitle}</h3>
              </div>
              <ul className="contact-coverage-list">
                {t.contactCoverageItems.map((item) => (
                  <li key={item}>
                    <Check size={14} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Form column */}
          <div className="contact-form-col">
            <div className="contact-form-card">
              <div className="contact-form-head">
                <h2>{t.contactFormTitle}</h2>
                <p>{t.contactFormSubtitle}</p>
              </div>

              <form className="contact-form-v2" onSubmit={submitLead}>
                <div className="form-row">
                  <label>
                    {t.name}
                    <input
                      required
                      autoComplete="name"
                      placeholder={ar ? 'مثال: محمد السعيد' : 'e.g. John Smith'}
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                  </label>
                  <label>
                    {t.phone}
                    <input
                      required
                      type="tel"
                      autoComplete="tel"
                      dir="ltr"
                      placeholder={ar ? '+966 5x xxx xxxx' : '+966 5x xxx xxxx'}
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    />
                  </label>
                </div>

                <label>
                  {t.company}
                  <input
                    autoComplete="organization"
                    placeholder={ar ? 'اسم المنشأة أو المؤسسة' : 'Company or Organization name'}
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                  />
                </label>

                <label>
                  {t.interest}
                  <span className="select-wrap">
                    <select
                      required
                      value={form.interest}
                      onChange={(e) => setForm({ ...form, interest: e.target.value })}
                    >
                      <option value="">{t.choose}</option>
                      {t.options.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                    <ChevronDown size={16} />
                  </span>
                </label>

                <label>
                  {t.message}
                  <textarea
                    rows="3"
                    placeholder={ar ? 'أخبرنا باختصار عن عدد المستخدمين أو طبيعة الموقع أو الاحتياج...' : 'Briefly describe your requirements, team size, or project scope...'}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />
                </label>

                <button className="button button-accent" type="submit">
                  <span>{t.send}</span>
                  <MessageCircle size={17} />
                </button>

                <p className="form-privacy">
                  <ShieldCheck size={14} />
                  <span>{t.privacy}</span>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const pageContent = { home: HomePage, services: ServicesPage, about: AboutPage, contact: ContactPage };
  const Content = pageContent[page] || HomePage;

  return <div className={`company-site ${ar ? 'is-ar' : 'is-en'}`}>
    {Header}
    <main id="top">
      {Content}
    </main>
    {Footer}
    <FloatingContact lang={lang} />
  </div>;
}
