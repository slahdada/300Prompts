import { CategoryInfo } from '../types/prompt';

export const CATEGORIES: CategoryInfo[] = [
  {
    id: 'dev',
    number: 1,
    slug: 'developpement-informatique',
    title_fr: 'Développement informatique',
    title_ar: 'تطوير البرمجيات والأنظمة',
    description_fr: 'Architecture, refactoring, revue de code, algorithmes et debugging.',
    description_ar: 'هندسة البرمجيات، تحسين الأكواد، الخوارزميات وتصحيح الأخطاء.',
    icon_name: 'Code2',
    color_gradient: 'from-blue-600 to-indigo-600',
    badge_color: 'bg-blue-500/15 text-blue-400 border-blue-500/30'
  },
  {
    id: 'apps',
    number: 2,
    slug: 'applications-web-windows-android',
    title_fr: 'Applications Web, Windows et Android',
    title_ar: 'تطبيقات الويب، ويندوز وأندرويد',
    description_fr: 'PWA, applications natives, desktop, packaging et déploiement multiplateforme.',
    description_ar: 'تطبيقات الويب المتقدمة، برامج سطح المكتب وتطبيقات الجوال.',
    icon_name: 'Smartphone',
    color_gradient: 'from-cyan-600 to-blue-600',
    badge_color: 'bg-cyan-500/15 text-cyan-400 border-cyan-500/30'
  },
  {
    id: 'ai',
    number: 3,
    slug: 'intelligence-artificielle-automatisation',
    title_fr: 'Intelligence artificielle et automatisation',
    title_ar: 'الذكاء الاصطناعي والأتمتة',
    description_fr: 'Agents IA, RAG, pipelines LLM, fine-tuning, n8n et scripts d’automatisation.',
    description_ar: 'وكلاء الذكاء الاصطناعي، تقنيات RAG، تدفقات العمل والأتمتة الذكية.',
    icon_name: 'Cpu',
    color_gradient: 'from-purple-600 to-violet-600',
    badge_color: 'bg-purple-500/15 text-purple-400 border-purple-500/30'
  },
  {
    id: 'web-ecom',
    number: 4,
    slug: 'sites-web-ecommerce',
    title_fr: 'Sites Web et e-commerce',
    title_ar: 'المواقع الإلكترونية والتجارة الرقمية',
    description_fr: 'Conversion, fiches produits, entonnoirs de vente, UX checkout et Shopify/Woo.',
    description_ar: 'تحسين التحويل، صفحات المنتجات، مسارات الشراء ومتاجر التجارة الإلكترونية.',
    icon_name: 'ShoppingBag',
    color_gradient: 'from-emerald-600 to-teal-600',
    badge_color: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30'
  },
  {
    id: 'marketing',
    number: 5,
    slug: 'marketing-publicite',
    title_fr: 'Marketing et publicité',
    title_ar: 'التسويق والإعلانات الممولة',
    description_fr: 'Copywriting persuasif, Meta Ads, Google Ads, SEO sémantique et branding.',
    description_ar: 'كتابة الإعلانات المقنعة، الحملات الرقمية، تحسين محركات البحث والوعي بالعلامة.',
    icon_name: 'Megaphone',
    color_gradient: 'from-pink-600 to-rose-600',
    badge_color: 'bg-pink-500/15 text-pink-400 border-pink-500/30'
  },
  {
    id: 'business',
    number: 6,
    slug: 'business-entrepreneuriat',
    title_fr: 'Business et entrepreneuriat',
    title_ar: 'الأعمال وريادة المشاريع',
    description_fr: 'Business plans, levée de fonds, pitch deck, analyse concurrentielle et stratégie.',
    description_ar: 'خطط الأعمال، عروض المستثمرين، دراسات الجدوى والتحليل التنافسي.',
    icon_name: 'Briefcase',
    color_gradient: 'from-amber-600 to-orange-600',
    badge_color: 'bg-amber-500/15 text-amber-400 border-amber-500/30'
  },
  {
    id: 'analysis',
    number: 7,
    slug: 'analyse-recherche',
    title_fr: 'Analyse et recherche',
    title_ar: 'التحليل الاستراتيجي والبحث العلمي',
    description_fr: 'Synthèses bibliographiques, recherche documentaire, frameworks de pensée critique.',
    description_ar: 'البحث المنهجي، التلخيص الأكاديمي، ونماذج التفكير النقدي وصنع القرار.',
    icon_name: 'Search',
    color_gradient: 'from-indigo-600 to-blue-700',
    badge_color: 'bg-indigo-500/15 text-indigo-400 border-indigo-500/30'
  },
  {
    id: 'media-design',
    number: 8,
    slug: 'images-videos-design',
    title_fr: 'Images, vidéos et design',
    title_ar: 'الصور، الفيديو والتصميم الإبداعي',
    description_fr: 'Prompts Midjourney, scripts vidéo TikTok/YouTube, UI/UX systems et direction artistique.',
    description_ar: 'أوامر توليد الصور، نصوص الفيديو، واجهات المستخدم والإخراج الفني.',
    icon_name: 'Palette',
    color_gradient: 'from-fuchsia-600 to-pink-600',
    badge_color: 'bg-fuchsia-500/15 text-fuchsia-400 border-fuchsia-500/30'
  },
  {
    id: 'writing',
    number: 9,
    slug: 'redaction-professionnelle',
    title_fr: 'Rédaction professionnelle',
    title_ar: 'الكتابة الاحترافية والتحرير',
    description_fr: 'Rapports formels, courriers administratifs, discours, storytelling et éditoriaux.',
    description_ar: 'التقارير المؤسسية، الخطابات الرسمية، المقالات وسرد القصص المؤثر.',
    icon_name: 'FileText',
    color_gradient: 'from-teal-600 to-emerald-700',
    badge_color: 'bg-teal-500/15 text-teal-400 border-teal-500/30'
  },
  {
    id: 'education',
    number: 10,
    slug: 'formation-apprentissage',
    title_fr: 'Formation et apprentissage',
    title_ar: 'التعليم والتدريب وتطوير المهارات',
    description_fr: 'Plans de cours, vulgarisation, quizz interactifs, méthode Feynman et fiches de révision.',
    description_ar: 'المناهج التدريبية، تبسيط المفاهيم المعقدة، التقييم التفاعلي وأساليب التعلم السريع.',
    icon_name: 'GraduationCap',
    color_gradient: 'from-sky-600 to-blue-600',
    badge_color: 'bg-sky-500/15 text-sky-400 border-sky-500/30'
  },
  {
    id: 'productivity',
    number: 11,
    slug: 'productivite',
    title_fr: 'Productivité',
    title_ar: 'الإنتاجية وإدارة الوقت',
    description_fr: 'Time-blocking, méthode GTD, priorisation Eisenhower, templates Notion et routines.',
    description_ar: 'تنظيم المهام، مصفوفة الأولويات، تخطيط الأهداف وأنظمة العمل عالية الكفاءة.',
    icon_name: 'Zap',
    color_gradient: 'from-yellow-600 to-amber-600',
    badge_color: 'bg-yellow-500/15 text-yellow-400 border-yellow-500/30'
  },
  {
    id: 'finance',
    number: 12,
    slug: 'finance-comptabilite',
    title_fr: 'Finance et comptabilité',
    title_ar: 'المالية والمحاسبة الاستثمارية',
    description_fr: 'Budgets prévisionnels, analyse de rentabilité, ratios financiers, fiscalité et trésorerie.',
    description_ar: 'التخطيط المالي، حساب العائد على الاستثمار، التدفق النقدي والتحليل المحاسبي.',
    icon_name: 'TrendingUp',
    color_gradient: 'from-green-600 to-emerald-600',
    badge_color: 'bg-green-500/15 text-green-400 border-green-500/30'
  },
  {
    id: 'automotive',
    number: 13,
    slug: 'automobile-mecanique',
    title_fr: 'Automobile et mécanique',
    title_ar: 'السيارات والميكانيكا والتشخيص',
    description_fr: 'Diagnostic de pannes, entretien préventif, mécanique des fluides et fiches techniques.',
    description_ar: 'تشخيص الأعطال الميكانيكية والكهربائية، الصيانة الوقائية والأنظمة الهندسية للسيارات.',
    icon_name: 'Wrench',
    color_gradient: 'from-slate-600 to-zinc-700',
    badge_color: 'bg-slate-500/15 text-slate-300 border-slate-500/30'
  },
  {
    id: 'data-sheets',
    number: 14,
    slug: 'excel-google-sheets-data',
    title_fr: 'Excel, Google Sheets et Data',
    title_ar: 'إكسل، جداول بيانات وتحليل البيانات',
    description_fr: 'Formules avancées, VBA/Apps Script, dashboards interactifs, Power Query et SQL.',
    description_ar: 'الدوال المتقدمة، أتمتة الماكرو والسكربت، لوحات المؤشرات ونمذجة البيانات.',
    icon_name: 'Table',
    color_gradient: 'from-emerald-700 to-green-700',
    badge_color: 'bg-emerald-600/15 text-emerald-300 border-emerald-600/30'
  },
  {
    id: 'social-media',
    number: 15,
    slug: 'reseaux-sociaux',
    title_fr: 'Réseaux sociaux',
    title_ar: 'شبكات التواصل وصناعة المحتوى',
    description_fr: 'Calendriers éditoriaux, crochets viraux, carrousels LinkedIn, Twitter/X threads et reels.',
    description_ar: 'الجداول التحريرية، الخطافات الجاذبة، محتوى لينكدإن والمنشورات واسعة الانتشار.',
    icon_name: 'Share2',
    color_gradient: 'from-violet-600 to-indigo-600',
    badge_color: 'bg-violet-500/15 text-violet-400 border-violet-500/30'
  },
  {
    id: 'architecture',
    number: 16,
    slug: 'architecture-ingenierie',
    title_fr: 'Architecture et ingénierie',
    title_ar: 'الهندسة المعمارية والإنشائية',
    description_fr: 'Cahiers des charges bâtiment, BIM, modélisation durable, calculs de dimensionnement.',
    description_ar: 'كراسات المواصفات، نمذجة معلومات البناء BIM، العمارة المستدامة والمعايير الإنشائية.',
    icon_name: 'Compass',
    color_gradient: 'from-stone-600 to-neutral-700',
    badge_color: 'bg-stone-500/15 text-stone-300 border-stone-500/30'
  },
  {
    id: 'translation',
    number: 17,
    slug: 'traduction-langues',
    title_fr: 'Traduction et langues',
    title_ar: 'الترجمة واللغويات والتعريب',
    description_fr: 'Localisation de logiciels, traduction assermentée, nuances idiomatiques et glossaires.',
    description_ar: 'تعريب البرمجيات، الترجمة القانونية والتقنية الدقيقة، ومطابقة التعبيرات الاصطلاحية.',
    icon_name: 'Languages',
    color_gradient: 'from-blue-600 to-teal-600',
    badge_color: 'bg-blue-500/15 text-blue-300 border-blue-500/30'
  },
  {
    id: 'innovation',
    number: 18,
    slug: 'innovation-rd',
    title_fr: 'Innovation et R&D',
    title_ar: 'الابتكار والبحث والتطوير',
    description_fr: 'Veille technologique, brevets, prototypage rapide, design thinking et prospective.',
    description_ar: 'الرصد التقني، أبحاث براءات الاختراع، النماذج الأولية والتفكير التصميمي المستقبلي.',
    icon_name: 'Lightbulb',
    color_gradient: 'from-amber-500 to-yellow-600',
    badge_color: 'bg-amber-500/15 text-amber-300 border-amber-500/30'
  },
  {
    id: 'admin-docs',
    number: 19,
    slug: 'administration-documentation',
    title_fr: 'Administration et documentation',
    title_ar: 'الإدارة والتوثيق والسياسات',
    description_fr: 'Procédures opérationnelles standard (SOP), contrats, RGPD, PV de réunion et conformité.',
    description_ar: 'إجراءات التشغيل القياسية (SOP)، العقود، سياسات الخصوصية، محاضر الاجتماعات والامتثال.',
    icon_name: 'CheckSquare',
    color_gradient: 'from-cyan-700 to-slate-700',
    badge_color: 'bg-cyan-600/15 text-cyan-300 border-cyan-600/30'
  },
  {
    id: 'lifestyle',
    number: 20,
    slug: 'vie-quotidienne-usages-universels',
    title_fr: 'Vie quotidienne et usages universels',
    title_ar: 'الحياة اليومية والاستخدامات الشاملة',
    description_fr: 'Organisation de voyages, nutrition personnalisée, gestion de budget familial et coaching.',
    description_ar: 'تخطيط السفر، التغذية المتوازنة، إدارة ميزانية الأسرة وحلول المشكلات اليومية.',
    icon_name: 'Heart',
    color_gradient: 'from-rose-500 to-red-600',
    badge_color: 'bg-rose-500/15 text-rose-400 border-rose-500/30'
  }
];

export const CATEGORIES_BY_ID = Object.fromEntries(
  CATEGORIES.map((cat) => [cat.id, cat])
);
