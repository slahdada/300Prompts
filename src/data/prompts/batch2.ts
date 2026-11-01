import { PromptItem } from '../../types/prompt';

export const BATCH_2_PROMPTS: PromptItem[] = [
  // ==========================================
  // CATÉGORIE 6 : BUSINESS ET ENTREPRENEURIAT (15 prompts)
  // ==========================================
  {
    id: 'pml-biz-01',
    slash: '/biz-business-model',
    title_fr: 'Architecte Business Model Canvas',
    title_ar: 'تصميم نموذج العمل التجاري Business Model Canvas',
    category_id: 'business',
    category_fr: 'Business et entrepreneuriat',
    category_ar: 'الأعمال وريادة المشاريع',
    function_fr: 'Structurer les 9 blocs stratégiques d’une entreprise ou startup innovante',
    function_ar: 'تخطيط الأركان التسعة لنموذج العمل لتحقيق الاستدامة والربحية',
    prompt_fr: `Tu es un Consultant en Stratégie d'Entreprise et Mentor Startup.
Construis le Business Model Canvas complet pour le projet suivant :
- Nom et idée du projet : [PROJET]
- Secteur d'activité : [SECTEUR]
- Public visé (B2B, B2C, Marketplace) : [PUBLIC]

Détaille rigoureusement les 9 blocs :
1. Segments de clientèle (Early adopters précis).
2. Proposition de valeur unique.
3. Canaux de distribution et d'acquisition.
4. Relation client (Self-service, assistance dédiée, communauté).
5. Flux de revenus (Abonnement, commission, vente directe).
6. Ressources clés (Technologiques, humaines, financières).
7. Activités clés indispensables au succès.
8. Partenaires stratégiques clés.
9. Structure des coûts (Fixes, variables, économies d'échelle).`,
    prompt_ar: `أنت مستشار استراتيجي لريادة الأعمال وموجه للشركات الناشئة.
قم ببناء نموذج العمل التجاري (Business Model Canvas) للمشروع التالي:
- اسم وفكرة المشروع: [المشروع]
- قطاع العمل: [القطاع]
- الجمهور المستهدف: [الجمهور]

المطلوب تفصيله في الأركان التسعة:
1. شرائح العملاء والمتبنين الأوائل (Early Adopters).
2. القيمة المقدمة الفريدة.
3. قنوات الوصول والتوزيع.
4. طبيعة العلاقة مع العملاء.
5. مصادر الإيرادات والتدفق المالي.
6. الموارد والقدرات الأساسية.
7. الأنشطة والعمليات الجوهرية.
8. الشراكات الاستراتيجية.
9. هيكل التكاليف الثابتة والمتغيرة.`,
    level: 'intermediaire',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['business model', 'lean canvas', 'startup', 'strategy', 'entrepreneurship']
  },
  {
    id: 'pml-biz-02',
    slash: '/biz-pitch-deck-vc',
    title_fr: 'Concepteur Pitch Deck pour Levée de Fonds',
    title_ar: 'إعداد العرض التقديمي للمستثمرين Pitch Deck',
    category_id: 'business',
    category_fr: 'Business et entrepreneuriat',
    category_ar: 'الأعمال وريادة المشاريع',
    function_fr: 'Rédiger les 10 diapositives incontournables pour séduire des investisseurs VC et Business Angels',
    function_ar: 'صياغة محتوى الشرائح العشر الأساسية لإقناع صناديق الاستثمار الجريء',
    prompt_fr: `Tu es un Partenaire en Capital-Risque (Venture Capital) ayant financé des licornes.
Rédige le contenu textuel des 10 diapositives de notre Pitch Deck de levée de fonds :
- Startup : [STARTUP]
- Montant recherché et valorisation visée : [MONTANT]
- Métriques actuelles (Traction / MRR / Croissance) : [METRIQUES]

Structure des 10 slides :
1. Vision & Titre accrocheur.
2. Le Problème douloureux chiffré.
3. La Solution élégante et le produit.
4. Taille du marché (TAM, SAM, SOM) justifiée.
5. Modèle économique & Unité économique (CAC vs LTV).
6. Traction actuelle et jalons franchis.
7. Paysage concurrentiel et avantage défendable (Moat).
8. Go-to-Market et stratégie d'acquisition.
9. Équipe fondatrice et complémentarité.
10. La Demande financière (Ask) et utilisation détaillée des fonds sur 18 mois.`,
    prompt_ar: `بصفتك شريكاً في صندوق استثمار جريء (VC) رائد:
قم بصياغة محتوى الشرائح العشر الأساسية لملف العرض الاستثماري (Pitch Deck):
- اسم الشركة الناشئة: [الشركة]
- المبلغ المطلوب جمعه: [المبلغ]
- المؤشرات الحالية وحجم النمو (MRR): [المؤشرات]

هيكل الشرائح العشر:
1. الرؤية والعنوان الملهم في جملة واحدة.
2. المشكلة الحقيقية وحجم الخسائر المادية المترتبة عليها.
3. الحل الذكي واستعراض المنتج.
4. حجم السوق الفعلي (TAM, SAM, SOM).
5. نموذج الإيرادات واقتصاديات الوحدة (CAC مقابل LTV).
6. الإنجازات المحققة حتى الآن (Traction).
7. خريطة المنافسين والميزة التنافسية المحمية (Moat).
8. خطة النزول للسوق واكتساب العملاء.
9. الفريق المؤسس وخبراتهم المتكاملة.
10. الطلب المالي وأوجه إنفاق الاستثمار خلال 18 شهراً.`,
    level: 'expert',
    ai_compatibility: ['Claude', 'ChatGPT', 'Gemini'],
    tags: ['pitch deck', 'fundraising', 'venture capital', 'investors', 'startups']
  },
  {
    id: 'pml-biz-03',
    slash: '/biz-competitive-audit',
    title_fr: 'Auditeur Concurrentiel & Analyse SWOT / Porter',
    title_ar: 'التحليل التنافسي ونموذج SWOT وقوى بورتر الخمس',
    category_id: 'business',
    category_fr: 'Business et entrepreneuriat',
    category_ar: 'الأعمال وريادة المشاريع',
    function_fr: 'Décortiquer les faiblesses des concurrents et identifier les opportunités de marché',
    function_ar: 'تشريح نقاط ضعف المنافسين واقتناص الفجوات السوقية غير المستغلة',
    prompt_fr: `Mène une analyse stratégique approfondie de notre écosystème concurrentiel :
- Notre entreprise : [ENTREPRISE]
- Nos 3 concurrents directs ou indirects : [CONCURRENTS]
- Marché géographique : [MARCHE]

Livrables attendus :
1. Matrice SWOT détaillée (Forces, Faiblesses internes, Opportunités, Menaces externes).
2. Analyse des 5 Forces de Porter (Pouvoir des acheteurs, des fournisseurs, menace des substituts, nouveaux entrants, rivalité).
3. Benchmark comparatif des offres (Prix, fonctionnalités, service client, réputation).
4. 3 manœuvres tactiques d'attaque ou de contournement pour gagner des parts de marché rapidement.`,
    prompt_ar: `قم بإجراء دراسة استراتيجية متعمقة للبيئة التنافسية:
- شركتنا: [الشركة]
- أكبر 3 منافسين: [المنافسون]
- السوق المستهدف: [السوق]

المخرجات المطلوبة:
1. مصفوفة SWOT التفصيلية (نقاط القوة، الضعف، الفرص، والتهديدات).
2. تحليل قوى بورتر الخمس لتحديد جاذبية وربحية السوق.
3. جدول مقارنة تفصيلي للمنتجات والأسعار وخدمة العملاء.
4. 3 خطوات تكتيكية عملية لاقتناص حصة سوقية من المنافسين بسرعة.`,
    level: 'intermediaire',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini', 'Perplexity'],
    tags: ['swot', 'porter 5 forces', 'competitor analysis', 'strategy', 'market research']
  },
  {
    id: 'pml-biz-04',
    slash: '/biz-pricing-strategy',
    title_fr: 'Stratège Tarifaire & Modèles de Prix (Pricing Strategy)',
    title_ar: 'هندسة استراتيجيات التسعير وتحديد القيمة Pricing Strategy',
    category_id: 'business',
    category_fr: 'Business et entrepreneuriat',
    category_ar: 'الأعمال وريادة المشاريع',
    function_fr: 'Optimiser le pricing pour maximiser les marges sans perdre de clients',
    function_ar: 'تحديد الأسعار المثالية لتعظيم الأرباح ورفع القيمة المدركة لدى العميل',
    prompt_fr: `Tu es un Expert en Monétisation et Stratégie Tarifaire.
Définis la grille tarifaire optimale pour :
- Produit / Service : [PRODUIT]
- Coûts de revient ou charges fixes : [COUTS]
- Positionnement souhaité : [POSITIONNEMENT] (Low-cost disruptif, Milieu de gamme accessible, Luxe/Premium)

Élabore :
1. La structure en 3 offres (Tiering : Starter / Pro / Enterprise) avec la formule "Decoy Pricing" (effet leurre favorisant l'offre centrale).
2. La justification psychologique des prix (ex: fin en 7 ou 9, facturation annuelle avec 2 mois offerts).
3. La liste des fonctionnalités réservées exclusivement aux offres supérieures (Feature Gating).
4. Le plan de communication pour augmenter les tarifs actuels sans provoquer de vagues de résiliation (Churn).`,
    prompt_ar: `أنت خبير معتمد في استراتيجيات التسعير وبناء العروض المربحة:
حدد خطة وبنية الأسعار لـ:
- المنتج أو الخدمة: [المنتج]
- التكلفة الحالية: [التكلفة]
- التموضع المستهدف: [التموضع] (اقتصادي، متوسط، فاخر Premium)

المطلوب:
1. صياغة 3 باقات متدرجة (أساسية، احترافية، مؤسسات) مع توظيف تأثير الطعم (Decoy Effect) لترجيح الباقة الوسطى.
2. التبرير النفسي للأرقام (التسعير السنوي مع خصم شهرين مجاناً).
3. توزيع المزايا الاحتكارية لكل باقة لدفع العملاء للترقية.
4. صياغة رسالة إخطار العملاء برفع الأسعار دون التسبب في موجة إلغاء اشتراكات.`,
    level: 'intermediaire',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['pricing', 'saas pricing', 'monetization', 'strategy', 'profitability']
  },
  {
    id: 'pml-biz-05',
    slash: '/biz-mvp-scope',
    title_fr: 'Cadreur de MVP (Minimum Viable Product)',
    title_ar: 'تحديد نطاق وتطوير المنتج الأولي البسيط MVP',
    category_id: 'business',
    category_fr: 'Business et entrepreneuriat',
    category_ar: 'الأعمال وريادة المشاريع',
    function_fr: 'Définir le périmètre strict d’un MVP pour tester le marché en moins de 30 jours',
    function_ar: 'تقليص فكرة المشروع إلى جوهرها الأساسي لإطلاقها واختبار السوق في أقل من شهر',
    prompt_fr: `Agis comme un Product Manager Senior Lean Startup.
Aide-moi à cadrer le MVP (Produit Minimum Viable) de notre idée :
- Idée globale du produit : [IDEE]
- Budget et temps disponibles : [BUDGET_TEMPS]

Livrables d'élagage :
1. L'unique hypothèse critique à valider impérativement (Riskiest Assumption).
2. Découpage MoSCoW des fonctionnalités (Must have, Should have, Could have, Won't have).
3. L'architecture "No-Code / Low-Code / API" la plus rapide pour tester sans coder de zéro.
4. La métrique clé de succès (North Star Metric) qui prouvera l'adéquation produit-marché (PMF).`,
    prompt_ar: `بصفتك مدير منتجات أول وفق منهجية Lean Startup:
ساعدني في تحديد النطاق الدقيق للنسخة الأولية (MVP):
- الفكرة الشاملة: [الفكرة]
- الميزانية والوقت المتاح: [الميزانية_الوقت]

المخرجات:
1. الفرضية الأكثر خطورة التي يجب إثبات صحتها أولاً (Riskiest Assumption).
2. تصنيف المزايا وفق مصفوفة MoSCoW (الإلزامي، الهام، الإضافي، المؤجل).
3. اقتراح أسرع تركيبة أدوات برمجية أو No-Code لإطلاق النسخة في أيام.
4. مؤشر النجاح الأوحد (North Star Metric) للتحقق من وصول المنتج لملاءمة السوق.`,
    level: 'debutant',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['mvp', 'lean startup', 'product management', 'validation', 'scope']
  },
  {
    id: 'pml-biz-06',
    slash: '/biz-okr-framework',
    title_fr: 'Facilitateur OKR (Objectives & Key Results)',
    title_ar: 'صياغة الأهداف والنتائج الرئيسية للشركات OKRs',
    category_id: 'business',
    category_fr: 'Business et entrepreneuriat',
    category_ar: 'الأعمال وريادة المشاريع',
    function_fr: 'Définir des objectifs ambitieux et des résultats clés mesurables pour un trimestre',
    function_ar: 'وضع أهداف فصلية ملهمة ومؤشرات أداء قابلة للقياس الكمي الدقيق',
    prompt_fr: `Tu es un Coach en Management de la Performance et Méthode OKR.
Rédige les OKR pour le prochain trimestre pour :
- Type d'organisation ou pôle : [ORGANISATION] (Direction générale, Équipe Tech, Ventes, Marketing)
- Priorité stratégique du trimestre : [PRIORITE]

Formule :
1. 3 Objectifs (O) qualitatifs, ambitieux et mémorables.
2. Pour chaque Objectif, 3 Résultats Clés (KR) strictement mesurables (formule : "Passer de X à Y d'ici [date]").
3. Les initiatives concrètes planifiées pour atteindre chaque KR.
4. La grille de suivi hebdomadaire (Weekly Check-in) pour mesurer l'état de confiance (vert, orange, rouge).`,
    prompt_ar: `أنت موجه معتمد في إدارة الأداء وفق منهجية OKR:
قم بصياغة الأهداف والنتائج الرئيسية للربع القادم لـ:
- الإدارة أو الفريق: [الفريق] (الإدارة التنفيذية، المبيعات، التقنية)
- الأولوية الاستراتيجية للفصل: [الأولوية]

المطلوب:
1. صياغة 3 أهداف نوعية ملهمة وطموحة (Objectives).
2. تحديد 3 نتائج رئيسية كمية لكل هدف (Key Results) بصيغة دقيقة: "الانتقال من X إلى Y بحلول تاريخ محدد".
3. المبادرات والمشاريع التشغيلية لتحقيق كل نتيجة.
4. آلية المتابعة الأسبوعية لتحديد مؤشرات الثقة (أخضر، أصفر، أحمر).`,
    level: 'intermediaire',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['okr', 'management', 'kpi', 'performance', 'leadership']
  },
  {
    id: 'pml-biz-07',
    slash: '/biz-b2b-negotiation',
    title_fr: 'Conseiller Négociation Commerciale Complexe (Harvard Model)',
    title_ar: 'إدارة المفاوضات التجارية المعقدة وفق نموذج هارفارد',
    category_id: 'business',
    category_fr: 'Business et entrepreneuriat',
    category_ar: 'الأعمال وريادة المشاريع',
    function_fr: 'Préparer une négociation à forts enjeux sans brader ses marges',
    function_ar: 'الاستعداد لمفاوضات العقود الكبرى وحماية هوامش الربح وتحقيق مكاسب للطرفين',
    prompt_fr: `Agis comme un Expert en Négociation selon les principes de Harvard (Gagnant-Gagnant).
Je prépare une négociation d'envergure :
- Ce que nous vendons : [OFFRE]
- Profil et objections anticipées de l'acheteur : [ACHETEUR]
- Notre prix initial et notre seuil plancher absolu : [PRIX]

Construis ma feuille de route de négociation :
1. Définition de notre MESORE (BATNA : Meilleure Solution de Repli).
2. Identification des intérêts sous-jacents de l'acheteur (au-delà de l'objection du prix).
3. 5 monnaies d'échange non financières à concéder en échange de concessions de leur part (délais de paiement, témoignage client, durée d'engagement).
4. Réponses mot-à-mot aux 3 tactiques de pression d'achat les plus courantes.`,
    prompt_ar: `بصفتك مفاوضاً محترفاً مدرباً وفق نموذج هارفارد للمفاوضات (Win-Win):
أستعد لمفاوضة تجارية حاسمة:
- ما نقدمه للعميل: [العرض]
- شخصية واعتراضات المشتري: [المشتري]
- السعر المطلوب والحد الأدنى الذي لا يمكن تجاوزه: [السعر]

المطلوب:
1. تحديد أفضل بديل متاح لدينا في حال فشل الاتفاق (BATNA).
2. استكشاف الدوافع والمصالح الحقيقية للمشتري خلف اعتراضه على السعر.
3. 5 عناصر تفاوضية غير نقدية يمكن تقديمها مقابل تنازلات من طرفه (مدة العقد، الدفع المقدم).
4. ردود حاسمة ولبقة على أساليب الضغط الشائعة التي يمارسها مسؤولو المشتريات.`,
    level: 'expert',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['negotiation', 'sales', 'batna', 'b2b', 'closing']
  },
  {
    id: 'pml-biz-08',
    slash: '/biz-crisis-management',
    title_fr: 'Gestionnaire de Crise d’Entreprise & Continuité',
    title_ar: 'إدارة الأزمات المؤسسية وخطط استمرارية الأعمال BCP',
    category_id: 'business',
    category_fr: 'Business et entrepreneuriat',
    category_ar: 'الأعمال وريادة المشاريع',
    function_fr: 'Organiser la cellule de crise face à un événement majeur (fuite de données, rupture logistique)',
    function_ar: 'توجيه خلية الأزمة وإدارة الاتصال المؤسسي الداخلي والخارجي أثناء الطوارئ',
    prompt_fr: `Tu es un Directeur de Gestion de Crise et Continuité d'Activité.
Notre entreprise fait face à l'incident critique suivant :
- Nature de la crise : [CRISE] (panne serveur généralisée, cyberattaque ransomware, scandale qualité produit)
- Parties prenantes touchées : [IMPACTS] (clients, régulateurs, médias, employés)

Établis le plan d'urgence immédiat :
1. Les actions des premières 2 heures (Isolement du problème, désignation du porte-parole, arrêt des communications marketing automatiques).
2. Modèle de déclaration publique officielle (Holding Statement) transparent et responsable.
3. Communication interne rassurante pour les collaborateurs.
4. Plan de remédiation technique et retour progressif à la normale.`,
    prompt_ar: `أنت مدير إدارة الأزمات واستمرارية الأعمال (Business Continuity):
تواجه مؤسستنا الأزمة الطارئة التالية:
- طبيعة الأزمة: [الأزمة] (اختراق سيبراني، انقطاع الخدمة، عيب صناعي)
- الأطراف المتأثرة: [الأطراف] (العملاء، الموظفون، الإعلام)

المطلوب:
1. خطة التدخل السريع للساعتين الأوليين (عزل المشكلة، تحديد المتحدث الرسمي، إيقاف الإعلانات المجدولة).
2. البيان الرسمي الأول الموجه للجمهور بأسلوب شفاف ومسؤول.
3. رسالة التواصل الداخلي للموظفين لتفادي الشائعات والحفاظ على المعنويات.
4. خطة التعافي واستعادة العمليات التشغيلية الطبيعية.`,
    level: 'expert',
    ai_compatibility: ['Claude', 'ChatGPT', 'Gemini'],
    tags: ['crisis management', 'business continuity', 'public relations', 'security']
  },
  {
    id: 'pml-biz-09',
    slash: '/biz-sdr-sales-script',
    title_fr: 'Scénariste d’Appels Téléphoniques de Qualification (SDR)',
    title_ar: 'كتابة سيناريوهات المكالمات البيعية وتأهيل العملاء SDR',
    category_id: 'business',
    category_fr: 'Business et entrepreneuriat',
    category_ar: 'الأعمال وريادة المشاريع',
    function_fr: 'Outiller une équipe commerciale pour qualifier des prospects et décrocher des démos',
    function_ar: 'تدريب مسؤولي المبيعات على تجاوز حاجز السكرتارية وتحديد احتياجات العميل في دقائق',
    prompt_fr: `Rédige le script d'appel à froid pour une équipe de commerciaux sédentaires (SDR) :
- Solution commercialisée : [SOLUTION]
- Cible : [CIBLE]
- Objectif de l'appel : Obtenir un rendez-vous de démonstration de 20 minutes

Fournis :
1. L'accroche des 10 premières secondes (Pattern Interrupt) évitant de passer pour un télévendeur agressif.
2. La question de cadrage BANT (Budget, Authority, Need, Timeline).
3. La parade exacte aux 3 objections classiques ("Envoyez-moi un email", "Nous avons déjà un fournisseur", "Je n'ai pas le temps").
4. La phrase de conclusion confirmant fermement le créneau de rendez-vous dans l'agenda.`,
    prompt_ar: `اكتب السيناريو المتكامل لمكالمات استقطاب وتأهيل العملاء (SDR Cold Call):
- الحل المقدم: [الحل]
- العميل المستهدف: [العميل]
- الهدف: حجز موعد عرض توضيحي (Demo) لمدة 20 دقيقة

المطلوب:
1. الجملة الافتتاحية لأول 10 ثوانٍ لكسر النمط التقليدي ومنع إغلاق الخط فوراً.
2. أسئلة التأهيل الذكي وفق نموذج BANT (الميزانية، صاحب القرار، الاحتياج، الإطار الزمني).
3. الرد الحاسم على الاعتراضات الثلاثة الأشهر ("أرسل لي بريداً"، "لدينا مورد حالي"، "لست متفرغاً").
4. جملة تثبيت موعد الاجتماع في التقويم بوضوح.`,
    level: 'debutant',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['sales script', 'sdr', 'cold calling', 'lead qualification', 'b2b']
  },
  {
    id: 'pml-biz-10',
    slash: '/biz-franchise-expansion',
    title_fr: 'Consultant Développement de Franchise & Réseau',
    title_ar: 'تأسيس وتوسيع شبكات الامتياز التجاري (الفرنشايز)',
    category_id: 'business',
    category_fr: 'Business et entrepreneuriat',
    category_ar: 'الأعمال وريادة المشاريع',
    function_fr: 'Modéliser les conditions de franchisage et le manuel opératoire (Bible de savoir-faire)',
    function_ar: 'هيكلة متطلبات منح حقوق الامتياز التجاري والدليل التشغيلي القياسي',
    prompt_fr: `Tu es un Expert en Développement de Réseaux de Franchise.
Nous souhaitons dupliquer notre concept en franchise :
- Concept et secteur : [CONCEPT]
- Chiffre d'affaires et marge d'un point de vente pilote : [METRIQUES_PILOTE]

Détaille la stratégie de franchise :
1. Définition des conditions financières (Droit d'entrée, redevance d'exploitation / royalties %, participation au fonds marketing national).
2. Le profil type du franchisé idéal et critères de sélection stricts.
3. Le sommaire détaillé de la Bible de Savoir-Faire (Opérations quotidiennes, charte qualité, hygiène, service client).
4. Le programme d'accompagnement et formation initiale et continue du franchisé.`,
    prompt_ar: `أنت خبير في بناء وتطوير أنظمة الامتياز التجاري (Franchise):
نستعد لتحويل وتوسيع مشروعنا الناجح إلى شبكة امتياز:
- طبيعة النشاط: [النشاط]
- مبيعات وأرباح الفرع النموذجي: [المبيعات]

المطلوب:
1. تحديد الشروط والرسوم المالية (رسوم المنح الأولية، النسبة الشهرية من المبيعات، ومساهمة صندوق التسويق).
2. مواصفات ومعايير اختيار صاحب الامتياز (الممنوح له) المثالي.
3. الفهرس التفصيلي للدليل التشغيلي وحفظ أسرار الصنعة (Manual of Operations).
4. برنامج التدريب والتأهيل المبدئي والمستمر لضمان تطابق الجودة.`,
    level: 'expert',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['franchise', 'business expansion', 'retail', 'operations', 'licensing']
  },
  {
    id: 'pml-biz-11',
    slash: '/biz-customer-journey',
    title_fr: 'Cartographe Parcours Client (Customer Journey Map)',
    title_ar: 'رسم خريطة رحلة العميل Customer Journey Mapping',
    category_id: 'business',
    category_fr: 'Business et entrepreneuriat',
    category_ar: 'الأعمال وريادة المشاريع',
    function_fr: 'Cartographier les points de contact, émotions et opportunités d’enchantement client',
    function_ar: 'تحديد نقاط الاتصال ومشاعر وتجارب العميل من مرحلة الاكتشاف إلى الولاء',
    prompt_fr: `Construis la cartographie complète du parcours client pour :
- Entreprise / Service : [ENTREPRISE]
- Persona cible : [PERSONA]

Pour chacune des 5 phases (Découverte, Évaluation, Achat, Intégration/Onboarding, Rétention/Recommandation) :
1. Ce que fait le client (Actions concrètes).
2. Ce qu'il pense et ressent (Émotions : enthousiasme, doutes, anxiété).
3. Les points de contact (Touchpoints : site web, email, conseiller, application).
4. Les points de friction douloureux potentiels.
5. L'opportunité d'effet "Waouh" pour transformer le client en promoteur fanatique.`,
    prompt_ar: `صمم خريطة رحلة العميل الشاملة (Customer Journey Map) لـ:
- نوع النشاط: [النشاط]
- شخصية العميل المستهدف: [العميل]

لكل مرحلة من المراحل الخمس (الوعي، المقارنة، الشراء، الاستخدام الأولي، الولاء والتوصية):
1. أفعال العميل في هذه المرحلة.
2. أفكاره ومشاعره (حماس، حيرة، تردد).
3. نقاط التماس (الموقع، خدمة العملاء، التغليف، الرسائل).
4. نقاط الاحتكاك والمصاعب المتوقعة.
5. فرصة الإبهار الاستثنائية (Wow Moment) التي تصنع عميلاً وفياً مدى الحياة.`,
    level: 'intermediaire',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['customer journey', 'ux', 'cx', 'customer experience', 'retention']
  },
  {
    id: 'pml-biz-12',
    slash: '/biz-exit-strategy',
    title_fr: 'Conseiller Stratégie de Cession d’Entreprise (Exit Strategy)',
    title_ar: 'التخطيط لبيع أو الاستحواذ على الشركات Exit Strategy',
    category_id: 'business',
    category_fr: 'Business et entrepreneuriat',
    category_ar: 'الأعمال وريادة المشاريع',
    function_fr: 'Préparer la vente d’une société pour maximiser le multiple de valorisation',
    function_ar: 'تأهيل الشركة ورفع قيمتها التقييمية قبل طرحها للبيع أو الاندماج الاستراتيجي',
    prompt_fr: `Tu es un Banquier d'Affaires M&A (Fusions & Acquisitions).
Nous préparons la cession de notre entreprise dans un horizon de 12 à 24 mois :
- Activité : [ACTIVITE]
- Chiffre d'affaires et EBITDA actuels : [FINANCES]
- Dépendance au fondateur : [DEPENDANCE]

Établis le plan de maximisation de valorisation :
1. Identification des typologies d'acheteurs potentiels (Acquéreurs stratégiques industriels vs Fonds d'investissement Private Equity).
2. Les 4 chantiers prioritaires pour désensibiliser l'entreprise du fondateur (processus documentés, management autonome).
3. Nettoyage du bilan et optimisation de l'EBITDA normatif.
4. Préparation de la Data Room pour la phase d'audit Due Diligence sans accroc.`,
    prompt_ar: `بصفتك مستشاراً في عمليات الاندماج والاستحواذ (M&A):
نستعد لبيع أو التخارج من الشركة خلال عام إلى عامين:
- طبيعة العمل: [العمل]
- المبيعات والأرباح قبل الفوائد والضرائب (EBITDA): [الأرقام]
- مدى اعتماد الشركة على المؤسس: [الاعتماد]

خطة تعظيم القيمة التخارجية:
1. تحديد فئات المشترين المحتملين (مشترون استراتيجيون في نفس الصناعة مقابل صناديق الاستثمار المباشر).
2. أهم 4 إجراءات لفك ارتباط الشركة بالمؤسس وجعلها تدار ذاتياً بالكامل.
3. معالجة وتدقيق القوائم المالية ورفع كفاءة الأرباح التشغيلية.
4. تجهيز غرفة البيانات الافتراضية (Virtual Data Room) لفحص العناية الواجبة (Due Diligence).`,
    level: 'expert',
    ai_compatibility: ['Claude', 'ChatGPT', 'Gemini'],
    tags: ['m&a', 'exit strategy', 'valuation', 'due diligence', 'finance']
  },
  {
    id: 'pml-biz-13',
    slash: '/biz-meeting-facilitate',
    title_fr: 'Facilitateur de Réunion Stratégique à Haute Efficacité',
    title_ar: 'إدارة وتيسير الاجتماعات الاستراتيجية عالية الكفاءة',
    category_id: 'business',
    category_fr: 'Business et entrepreneuriat',
    category_ar: 'الأعمال وريادة المشاريع',
    function_fr: 'Cadrer un ordre du jour percutant et déboucher sur des décisions fermes sans réunionite',
    function_ar: 'تنظيم جدول أعمال صارم يمنع إهدار الوقت ويخرج بقرارات واضحة ومسؤوليات محددة',
    prompt_fr: `Conçois la structure et l'animation d'une réunion stratégique à enjeux :
- Sujet de la réunion : [SUJET]
- Participants et fonctions : [PARTICIPANTS]
- Durée allouée : [DUREE] (ex: 45 min)
- Décision critique à trancher : [DECISION]

Livrables :
1. Ordre du jour minuté selon la règle "Lecture préalable silencieuse (Amazon style) de 10 min + Débat + Vote".
2. Règle du jeu annoncée pour canaliser les participants dominants et donner la parole aux discrets.
3. Modèle de matrice RACI simplifiée (Qui décide, qui exécute, qui est consulté, qui est informé).
4. Template de compte-rendu d'action (Action Item, Responsable unique, Date butoir) envoyé 15 min après la fin.`,
    prompt_ar: `قم بتنظيم وإدارة اجتماع قيادي حاسم:
- موضوع الاجتماع: [الموضوع]
- الحضور والمناصب: [الحضور]
- المدة المتاحة: [المدة]
- القرار المصيري الواجب اتخاذه: [القرار]

المخرجات:
1. جدول زمني دقيق بالدقائق (على طريقة أمازون: قراءة صامتة للتقرير + نقاش مركّز + تصويت).
2. قواعد إدارة الحوار لكبح الاستطراد وضمان مشاركة الجميع.
3. مصفوفة تحديد المسؤوليات RACI (المسؤول، المنفذ، المستشار، المطلع).
4. نموذج محضر القرارات الفوري مع تحديد الشخص المسؤول وتاريخ التسليم بدقة.`,
    level: 'debutant',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['meeting', 'leadership', 'productivity', 'decision making', 'management']
  },
  {
    id: 'pml-biz-14',
    slash: '/biz-supplier-audit',
    title_fr: 'Auditeur et Négociateur Fournisseurs & Achats',
    title_ar: 'تقييم واختيار الموردين وإدارة سلاسل الإمداد',
    category_id: 'business',
    category_fr: 'Business et entrepreneuriat',
    category_ar: 'الأعمال وريادة المشاريع',
    function_fr: 'Sélectionner et mettre en concurrence des fournisseurs industriels ou de services',
    function_ar: 'بناء معايير اختيار الموردين الأكفاء والتفاوض على الجودة وشروط التوريد',
    prompt_fr: `Tu es un Directeur des Achats Groupe.
Nous devons sélectionner ou renégocier avec un fournisseur clé :
- Produit ou prestation sous-traitée : [PRESTATION]
- Volume d'achat annuel estimé : [VOLUME]
- Critères clés : Prix, délai, flexibilité, conformité ISO

Rédige :
1. La grille de notation pondérée d'évaluation des offres (Qualité technique, solidité financière, pénalités de retard).
2. L'appel d'offres (RFP) type comprenant les exigences d'accords de niveau de service (SLA).
3. La stratégie de réduction des coûts (TCO : Total Cost of Ownership) intégrant transport, rebuts et stockage.
4. Les clauses de sortie et de sauvegarde contractuelles en cas de défaillance fournisseur.`,
    prompt_ar: `بصفتك مديراً للمشتريات وسلاسل الإمداد:
نحتاج لتقييم واختيار موردين رئيسيين لـ:
- السلعة أو الخدمة المطلوبة: [الخدمة]
- حجم الشراء السنوي: [الحجم]
- المعايير الأساسية: السعر، الجودة، شروط السداد، وسرعة التوريد

المطلوب:
1. مصفوفة التقييم المرجحة للمقارنة بين عروض الموردين المختلفة.
2. نموذج كراسة الشروط (RFP) متضمنة مستويات اتفاقية الخدمة (SLA).
3. استراتيجية خفض التكلفة الإجمالية للملكية (TCO) متضمنة الشحن والتخزين.
4. البنود الجزائية وشروط إنهاء العقد عند الإخلال بجودة التوريد.`,
    level: 'intermediaire',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['procurement', 'suppliers', 'rfp', 'supply chain', 'purchasing']
  },
  {
    id: 'pml-biz-15',
    slash: '/biz-culture-values',
    title_fr: 'Architecte Culture d’Entreprise & Valeurs Vivantes',
    title_ar: 'بناء ثقافة الشركة المؤسسية والقيم التوجيهية',
    category_id: 'business',
    category_fr: 'Business et entrepreneuriat',
    category_ar: 'الأعمال وريادة المشاريع',
    function_fr: 'Définir des valeurs d’entreprise incarnées dans les comportements quotidiens et les recrutements',
    function_ar: 'تحويل قيم المنشأة من شعارات جدارية إلى سلوكيات ومعايير توظيف حقيقية',
    prompt_fr: `Agis comme un DRH et Spécialiste de la Culture d'Entreprise.
Aide-nous à formaliser la culture et les valeurs de notre société :
- Métier et mission : [MISSION]
- Taille actuelle et ambition : [TAILLE]
- Comportements observés admirés ou bannis : [COMPORTEMENTS]

Livrables :
1. Définition de 4 valeurs d'entreprise rédigées sous forme de verbes d'action concrets (pas de mots creux comme "Excellence" ou "Intégrité").
2. Pour chaque valeur, 3 exemples de comportements quotidiens attendus et 2 comportements inacceptables.
3. Intégration dans le processus de recrutement (questions d'entretien évaluant le Cultural Fit).
4. Rituel de célébration interne récompensant les salariés incarnant ces valeurs.`,
    prompt_ar: `بصفتك استشارياً في الثقافة المؤسسية والموارد البشرية:
ساعدنا في صياغة ثقافة وقيم الشركة:
- رسالة الشركة وطبيعة العمل: [الرسالة]
- الحجم الحالي وطموح التوسع: [الحجم]
- السلوكيات المميزة أو السلبية المرصودة: [السلوكيات]

المخرجات:
1. صياغة 4 قيم عملية في شكل أفعال حركية واضحة (الابتعاد عن الكلمات المكررة مثل "التميز").
2. لكل قيمة، ذكر 3 سلوكيات يومية مطلوبة وسلوكين مرفوضين تماماً.
3. تحويل القيم إلى أسئلة مقابلة عمل لاختيار الموظفين المتوافقين مع هوية الشركة.
4. مبادرات وتقديرات شهرية للموظفين الذين يجسدون هذه الثقافة في عملهم.`,
    level: 'intermediaire',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['culture', 'core values', 'human resources', 'recruitment', 'leadership']
  },

  // ==========================================
  // CATÉGORIE 7 : ANALYSE ET RECHERCHE (15 prompts)
  // ==========================================
  {
    id: 'pml-ana-01',
    slash: '/ana-literature-review',
    title_fr: 'Analyste Revue de Littérature Académique',
    title_ar: 'المراجعة المنهجية للأدبيات العلمية والأكاديمية',
    category_id: 'analysis',
    category_fr: 'Analyse et recherche',
    category_ar: 'التحليل الاستراتيجي والبحث العلمي',
    function_fr: 'Synthétiser l’état de l’art scientifique sur une question de recherche',
    function_ar: 'استخلاص الدراسات السابقة وتحديد الفجوات المعرفية والاتجاهات الحديثة',
    prompt_fr: `Tu es un Enseignant-Chercheur et Méthodologiste Scientifique.
Synthétise l'état actuel de la recherche académique sur le sujet :
- Question de recherche : [QUESTION]
- Domaines disciplinaires concernés : [DISCIPLINES]

Produis une synthèse rigoureuse :
1. Définition des concepts fondamentaux et consensus scientifiques établis.
2. Les débats théoriques actuels et controverses majeures entre chercheurs.
3. Les méthodologies d'étude prédominantes (quantitatives, qualitatives, méta-analyses).
4. Identification des lacunes de recherche (Research Gaps) et pistes de recherche future.`,
    prompt_ar: `أنت باحث أكاديمي وأستاذ متخصص في المنهجيات العلمية.
قم بإعداد مراجعة منهجية للأدبيات العلمية حول:
- إشكالية أو سؤال البحث: [السؤال]
- الحقول والتخصصات المعنية: [التخصصات]

المطلوب:
1. التأطير المفاهيمي والإجماع العلمي المتفق عليه في الدراسات الحديثة.
2. التيارات الفكرية المتباينة ونقاط الجدل بين كبار الباحثين.
3. المناهج البحثية الأكثر استخداماً (كمية، نوعية، دراسات مقارنة).
4. تحديد الفجوات البحثية القائمة (Research Gaps) التي تحتاج إلى مزيد من الاستكشاف.`,
    level: 'expert',
    ai_compatibility: ['Perplexity', 'Claude', 'ChatGPT', 'Gemini'],
    tags: ['research', 'academic', 'literature review', 'science', 'methodology']
  },
  {
    id: 'pml-ana-02',
    slash: '/ana-first-principles',
    title_fr: 'Déconstructeur en Premiers Principes (First Principles Thinking)',
    title_ar: 'التفكير من المبادئ الأولى First Principles Thinking',
    category_id: 'analysis',
    category_fr: 'Analyse et recherche',
    category_ar: 'التحليل الاستراتيجي والبحث العلمي',
    function_fr: 'Démanteler un problème complexe jusqu’à ses vérités fondamentales pour innover',
    function_ar: 'تفكيك المسائل المعقدة إلى حقائقها البديهية وإعادة بنائها دون أفكار مسبقة',
    prompt_fr: `Agis selon la méthode de réflexion par les Premiers Principes (d'Aristote et Elon Musk).
Déconstruis le problème ou l'hypothèse suivante :
- Problème / Croyance établie : [PROBLEME] (ex: "Fabriquer ce composant coûte trop cher", "On a toujours fait comme ça")

Processus d'analyse :
1. Énumère toutes les hypothèses implicites et vérités communément admises sans vérification.
2. Réduis le sujet à ses seules vérités physiques, mathématiques ou fondamentales prouvées (les atomes constitutifs).
3. Reconstruis une solution novatrice à partir de zéro sans tenir compte de la façon dont le reste du marché opère.
4. Calcule le gain théorique maximal par rapport à l'approche traditionnelle.`,
    prompt_ar: `بناءً على منهجية التفكير من المبادئ الأولى (على طريقة أرسطو وإيلون ماسك):
قم بتفكيك المعضلة أو الافتراض الشائع التالي:
- المسألة أو الفكرة السائدة: [المسألة] (مثال: "تكلفة هذا المشروع باهظة حتماً"، "هذه هي الطريقة المتبعة دائماً")

خطوات التفكيك:
1. سرد كافة المسلمات والافتراضات المسبقة التي يتداولها الناس دون تمحيص.
2. تصفية الموضوع حتى الوصول إلى الحقائق الفيزيائية أو الرياضية المجردة المؤكدة.
3. إعادة بناء الحل من نقطة الصفر بابتكار يكسر القوالب القديمة.
4. حساب الفارق الهائل المتوقع في التكلفة والفعالية مقارنة بالطرق المعتادة.`,
    level: 'expert',
    ai_compatibility: ['Claude', 'ChatGPT', 'Gemini'],
    tags: ['first principles', 'elon musk', 'critical thinking', 'problem solving', 'innovation']
  },
  {
    id: 'pml-ana-03',
    slash: '/ana-causal-five-whys',
    title_fr: 'Analyste Causalité Racine & Diagramme d’Ishikawa (5 Pourquoi)',
    title_ar: 'تحليل الأسباب الجذرية بطريقة الـ 5 لماذا ومخطط إيشيكاوا',
    category_id: 'analysis',
    category_fr: 'Analyse et recherche',
    category_ar: 'التحليل الاستراتيجي والبحث العلمي',
    function_fr: 'Remonter jusqu’à la cause fondamentale d’un dysfonctionnement opérationnel',
    function_ar: 'الوصول إلى الخلل الجذري الخفي لمنع تكرار المشاكل التشغيلية نهائياً',
    prompt_fr: `Tu es un Expert en Amélioration Continue et Méthodologie Six Sigma.
Conduis une analyse de cause racine sur l'incident suivant :
- Problème ou anomalie constatée : [INCIDENT]
- Contexte opérationnel : [CONTEXTE]

Étapes de l'investigation :
1. Déroulement des 5 Pourquoi successifs avec validation factuelle de chaque niveau.
2. Classification dans le Diagramme d'Ishikawa (les 6M : Main d'œuvre, Matériel, Matière, Méthode, Milieu, Mesure).
3. Identification de la cause racine systémique (et non la simple erreur humaine de surface).
4. Plan d'actions correctives (immédiat) et préventives (durables) avec indicateur de vérification.`,
    prompt_ar: `بصفتك خبيراً في التحسين المستمر ومنهجية ستة سيغما (Six Sigma):
قم بتحليل السبب الجذري للمشكلة التالية:
- العطل أو الخلل المرصود: [المشكلة]
- السياق التشغيلي: [السياق]

خطوات الفحص:
1. تطبيق تقنية الأسئلة الخمسة المتتالية (5 Whys) لإزالة الأعراض السطحية.
2. توزيع العوامل عبر مخطط هيكل السمكة (Ishikawa 6M: الأفراد، الآلات، المواد، الطرق، البيئة، القياس).
3. عزل السبب الجذري المؤسسي للخلل.
4. وضع خطة تصحيحية عاجلة وخطة وقائية مستدامة مع مؤشرات قياس الفعالية.`,
    level: 'intermediaire',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['root cause', '5 whys', 'ishikawa', 'six sigma', 'troubleshooting']
  },
  {
    id: 'pml-ana-04',
    slash: '/ana-bias-detector',
    title_fr: 'Détecteur de Biais Cognitifs & Pièges de Jugement',
    title_ar: 'اكتشاف الانحيازات المعرفية ومغالطات التفكير المنطقي',
    category_id: 'analysis',
    category_fr: 'Analyse et recherche',
    category_ar: 'التحليل الاستراتيجي والبحث العلمي',
    function_fr: 'Passer un argumentaire ou une décision au crible de la rationalité',
    function_ar: 'فحص الحجج والقرارات واكتشاف الثغرات العقلية والانحيازات التأكيدية',
    prompt_fr: `Agis comme un Épistémologue et Spécialiste de la Psychologie Cognitive.
Passe au crible l'argumentation ou la décision stratégique suivante :
- Thèse / Décision analysée : [DECISION]
- Données présentées à l'appui : [ARGUMENTS]

Analyse critique :
1. Identification des biais cognitifs présents (Biais de confirmation, coûts irrécupérables / sunk costs, effet de halo, excès de confiance).
2. Repérage des sophismes et erreurs de logique (Pente glissante, faux dilemme, homme de paille).
3. Formulation de la version la plus forte de l'argument opposé (Steel-manning).
4. Recommandation pour assainir le processus décisionnel (Protocole de débiaisement).`,
    prompt_ar: `بصفتك باحثاً في المنطق وعلم النفس المعرفي:
قم بالفحص النقدي الصارم للقرار أو الطرح التالي:
- القرار أو الطرح المطروح: [القرار]
- المبررات والحجج المقدمة: [الحجج]

التحليل المنطقي:
1. كشف الانحيازات النفسية (انحياز التأكيد، فخ التكاليف الغارقة، الثقة المفرطة).
2. استخراج المغالطات المنطقية الكامنة (رجل القش، التعميم المتسرع، الإحراج الزائف).
3. بناء أقوى حجة مضادة ممكنة بموضوعية تامة (Steel-manning).
4. إرشادات لإعادة تصويب مسار اتخاذ القرار بتجرد وعقلانية.`,
    level: 'expert',
    ai_compatibility: ['Claude', 'ChatGPT', 'Gemini'],
    tags: ['cognitive bias', 'fallacies', 'critical thinking', 'logic', 'decision making']
  },
  {
    id: 'pml-ana-05',
    slash: '/ana-second-order',
    title_fr: 'Penseur au Second Ordre & Conséquences Indirectes',
    title_ar: 'التفكير من الدرجة الثانية وتوقع التداعيات غير المباشرة',
    category_id: 'analysis',
    category_fr: 'Analyse et recherche',
    category_ar: 'التحليل الاستراتيجي والبحث العلمي',
    function_fr: 'Anticiper les répercussions en cascade d’une décision sur 6 mois, 2 ans et 5 ans',
    function_ar: 'استشراف الآثار المتتالية والمفاجآت غير المتوقعة للقرارات الاستراتيجية',
    prompt_fr: `Applique la méthode de la Pensée au Second Ordre (Second-Order Thinking).
Nous envisageons de prendre la décision suivante :
- Décision envisagée : [DECISION]
- Objectif immédiat (Conséquence de 1er ordre) : [EFFET_DIRECT]

Analyse en cascade :
1. Conséquences de 1er ordre : Effets directs, immédiats et prévisibles.
2. Conséquences de 2e ordre : Comment les acteurs du système (concurrents, clients, employés) vont réagir et adapter leur comportement.
3. Conséquences de 3e ordre : Quels nouveaux équilibres ou effets pervers (Effet Cobra) vont émerger dans 2 à 5 ans.
4. Verdict : La décision reste-t-elle bénéfique une fois les effets indirects intégrés ?`,
    prompt_ar: `طبق منهجية التفكير من الدرجة الثانية (Second-Order Thinking):
ندرس اتخاذ القرار التالي:
- القرار المقترح: [القرار]
- الهدف والنتيجة المباشرة المتوقعة: [النتيجة_المباشرة]

تحليل التداعيات المتتالية:
1. نتائج الدرجة الأولى: الآثار الظاهرة والفورية للقرار.
2. نتائج الدرجة الثانية: كيف ستتغير سلوكيات وردود أفعال الأطراف المعنية (العملاء، المنافسين، الموظفين).
3. نتائج الدرجة الثالثة: الآثار العكسية المحتملة (تأثير الكوبرا Cobra Effect) بعد سنوات.
4. الحكم النهائي: هل القرار صائب فعلاً بعد حساب جميع التداعيات غير المباشرة؟`,
    level: 'expert',
    ai_compatibility: ['Claude', 'ChatGPT', 'Gemini'],
    tags: ['second-order thinking', 'systems thinking', 'strategy', 'unintended consequences']
  },
  {
    id: 'pml-ana-06',
    slash: '/ana-sentiment-corpus',
    title_fr: 'Analyste d’Entretiens Qualitatifs & Verbatims',
    title_ar: 'تحليل المقابلات النوعية والنصوص الميدانية',
    category_id: 'analysis',
    category_fr: 'Analyse et recherche',
    category_ar: 'التحليل الاستراتيجي والبحث العلمي',
    function_fr: 'Coder et extraire les thèmes émergents de verbatims d’utilisateurs',
    function_ar: 'ترميز وتصنيف إجابات المقابلات واستخراج الرؤى السلوكية العميقة',
    prompt_fr: `Tu es un Sociologue et Spécialiste de la Recherche Utilisateur (UX Research).
Voici la transcription ou les verbatims d'entretiens qualitatifs :
[VERBATIMS]

Réalise une analyse thématique inductive :
1. Grille d'encodage thématique (Catégories primaires et sous-thèmes).
2. Fréquence et intensité des émotions associées à chaque thème.
3. 3 citations marquantes (Golden Quotes) illustrant parfaitement le ressenti des utilisateurs.
4. Synthèse des besoins latents non formulés explicitement mais perceptibles entre les lignes.`,
    prompt_ar: `بصفتك باحثاً في العلوم السلوكية وأبحاث تجربة المستخدم (UX Research):
إليك نصوص مقابلات ميدانية وآراء مستخدمين:
[النصوص]

قم بالتحليل النوعي الميداني:
1. ترميز وتصنيف المحاور الرئيسية والموضوعات الفرعية.
2. قياس كثافة وتكرار المشاعر المرتبطة بكل محور.
3. اختيار أهم 3 اقتباسات ذهبية تعبر بدقة عن وجدان وتطلعات المستخدمين.
4. استخراج الاحتياجات الكامنة التي لم يصرح بها المستخدمون مباشرة وفهم ما بين السطور.`,
    level: 'intermediaire',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['ux research', 'qualitative analysis', 'interviews', 'thematic coding']
  },
  {
    id: 'pml-ana-07',
    slash: '/ana-swot-tows-matrix',
    title_fr: 'Convertisseur SWOT vers Matrice TOWS Actionnable',
    title_ar: 'تحويل تحليل SWOT إلى استراتيجيات هجومية ودفاعية TOWS',
    category_id: 'analysis',
    category_fr: 'Analyse et recherche',
    category_ar: 'التحليل الاستراتيجي والبحث العلمي',
    function_fr: 'Transformer les constats SWOT en 4 stratégies concrètes de croisement',
    function_ar: 'ربط نقاط القوة والضعف بالفرص والتهديدات لصياغة خطط استراتيجية عملية',
    prompt_fr: `À partir des éléments SWOT suivants :
- Forces (Strengths) : [FORCES]
- Faiblesses (Weaknesses) : [FAIBLESSES]
- Opportunités (Opportunities) : [OPPORTUNITES]
- Menaces (Threats) : [MENACES]

Construis la Matrice TOWS d'actions croisées :
1. Stratégies SO (Maxi-Maxi) : Comment utiliser nos forces pour capturer au maximum les opportunités.
2. Stratégies WO (Mini-Maxi) : Comment surmonter nos faiblesses en tirant parti des opportunités extérieures.
3. Stratégies ST (Maxi-Mini) : Comment mobiliser nos forces pour parer aux menaces du marché.
4. Stratégies WT (Mini-Mini) : Plan défensif d'urgence pour réduire les faiblesses et éviter les menaces critiques.`,
    prompt_ar: `انطلاقاً من معطيات مصفوفة SWOT التالية:
- نقاط القوة: [نقاط_القوة]
- نقاط الضعف: [نقاط_الضعف]
- الفرص المتاحة: [الفرص]
- التهديدات الخارجية: [التهديدات]

قم بصياغة مصفوفة TOWS للاستراتيجيات المتقاطعة:
1. استراتيجيات القوة والفرص (SO): توظيف القوة لاقتناص الفرص الكبرى.
2. استراتيجيات الضعف والفرص (WO): معالجة الضعف الداخلي عبر استغلال الفرص الخارجية.
3. استراتيجيات القوة والتهديدات (ST): استخدام عناصر القوة لصد التهديدات والمخاطر.
4. استراتيجيات الضعف والتهديدات (WT): خطة دفاعية لتقليل الخسائر وتجنب الانهيار.`,
    level: 'intermediaire',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['tows', 'swot', 'strategic planning', 'matrix', 'decision making']
  },
  {
    id: 'pml-ana-08',
    slash: '/ana-data-anomalies',
    title_fr: 'Détecteur d’Anomalies Statistiques & Outliers',
    title_ar: 'كشف القيم الشاذة والانحرافات الإحصائية في البيانات',
    category_id: 'analysis',
    category_fr: 'Analyse et recherche',
    category_ar: 'التحليل الاستراتيجي والبحث العلمي',
    function_fr: 'Analyser un jeu de données chiffrées pour détecter fraudes, erreurs ou signaux faibles',
    function_ar: 'فحص المؤشرات الرقمية وتحديد القفزات غير الطبيعية أو شبهات التلاعب',
    prompt_fr: `Tu es un Data Analyst et Statisticien Senior.
Voici les données ou la série temporelle à auditer :
[DONNEES_CHIFFREES]

Directives d'analyse :
1. Calcul des statistiques descriptives fondamentales (Moyenne, Médiane, Écart-type, Écart interquartile IQR).
2. Détection des valeurs aberrantes (Outliers) par la méthode Z-Score (|Z| > 3) et la méthode de Tukey (1.5 × IQR).
3. Hypothèses explicatives de ces anomalies (Erreur de saisie, fraude délibérée, rupture de tendance ou événement exceptionnel).
4. Recommandation : Faut-il supprimer, imputer ou investiguer ces observations ?`,
    prompt_ar: `أنت محلل بيانات وخبير إحصائي أول:
إليك سلسلة البيانات الرقمية المراد فحصها:
[البيانات]

خطوات الفحص الإحصائي:
1. حساب المؤشرات الوصفية (المتوسط، الوسيط، الانحراف المعياري، المدى الربيعي IQR).
2. كشف القيم الشاذة (Outliers) باستخدام معيار Z-Score ومقياس Tukey.
3. تقديم التفسيرات المحتملة للانحراف (أخطاء تسجيل، محاولات احتيال، أو تحول جذري في المؤشرات).
4. التوصية بكيفية التعامل مع القيم الشاذة (الاستبعاد، التعويض، أو فتح تحقيق).`,
    level: 'intermediaire',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['statistics', 'outliers', 'data analysis', 'fraud detection', 'math']
  },
  {
    id: 'pml-ana-09',
    slash: '/ana-pre-mortem',
    title_fr: 'Analyste Pre-Mortem & Anticipation d’Échec',
    title_ar: 'تحليل ما قبل الوفاة للمشاريع Pre-Mortem لتفادي الفشل',
    category_id: 'analysis',
    category_fr: 'Analyse et recherche',
    category_ar: 'التحليل الاستراتيجي والبحث العلمي',
    function_fr: 'Imaginer que le projet a lamentablement échoué pour identifier les angles morts aujourd’hui',
    function_ar: 'افتراض فشل المشروع مستقبلاً للرجوع إلى الحاضر وتفكيك أسباب الانهيار المحتملة',
    prompt_fr: `Applique l'exercice psychologique du Pre-Mortem (de Gary Klein).
Voici le projet que nous nous apprêtons à lancer :
- Description du projet : [PROJET]
- Planning et ambitions : [AMBITIONS]

Scénario :
"Nous sommes dans 18 mois. Le projet a été un échec cuisant, le budget a été englouti et les clients sont partis."
1. Rédige l'histoire rétrospective crédible de cet échec en identifiant les 5 causes fatales qui ont mené au désastre.
2. Mets en lumière les signaux faibles précurseurs que nous refusons de voir aujourd'hui par optimisme excessif.
3. Pour chacune des 5 causes, définis dès aujourd'hui la parade préventive qui empêchera ce scénario noir de se réaliser.`,
    prompt_ar: `طبق تمرين التفكير الاستباقي (Pre-Mortem):
إليك المشروع الذي نستعد لإطلاقه:
- وصف المشروع: [المشروع]
- الأهداف والجدول الزمني: [الأهداف]

سيناريو المحاكاة:
"تخيل أننا بعد مرور 18 شهراً من الآن، والمشروع قد فشل فشلاً ذريعاً واستنزف الميزانية وغادر العملاء."
1. اكتب الرواية الواقعية لأسباب هذا الانهيار محدداً أخطر 5 ثغرات أدت للكارثة.
2. سلط الضوء على الإشارات التحذيرية المبكرة التي نتجاهلها حالياً بدافع التفاؤل الساذج.
3. ضع لكل سبب من الأسباب الخمسة إجراء وقائياً حاسماً يجب تطبيقه اليوم لمنع حدوث هذا السيناريو.`,
    level: 'expert',
    ai_compatibility: ['Claude', 'ChatGPT', 'Gemini'],
    tags: ['pre-mortem', 'risk management', 'project planning', 'strategy', 'decision making']
  },
  {
    id: 'pml-ana-10',
    slash: '/ana-patent-landscape',
    title_fr: 'Cartographe de Veille Technologique & Brevets',
    title_ar: 'رسم خريطة المشهد التقني والابتكارات المحمية',
    category_id: 'analysis',
    category_fr: 'Analyse et recherche',
    category_ar: 'التحليل الاستراتيجي والبحث العلمي',
    function_fr: 'Identifier les dépôts de brevets clés et les espaces blancs d’innovation technologique',
    function_ar: 'تحليل اتجاهات براءات الاختراع العالمية واكتشاف المساحات البيضاء غير المحتكرة',
    prompt_fr: `Tu es un Analyste en Propriété Industrielle et Veille Prospective.
Analyse le paysage technologique et concurrentiel pour le domaine :
- Domaine technologique : [DOMAINE] (ex: batteries solides, capture carbone, puces neuromorphiques)

Produis :
1. Identification des acteurs dominants (entreprises, universités, pays en tête des dépôts).
2. Évolution temporelle des dépôts et maturité du cycle technologique (émergence, accélération, saturation).
3. Détection des "Espaces Blancs" (White Spaces) : les sous-domaines encore peu brevetés à fort potentiel d'innovation.
4. Risques de liberté d'exploitation (FTO) pour un nouvel entrant.`,
    prompt_ar: `بصفتك محللاً لاستشراف التكنولوجيا والملكية الصناعية:
قم بتحليل المشهد الابتكاري للمجال التالي:
- المجال التقني: [المجال] (بطاريات الحالة الصلبة، الحوسبة العصبية، احتجاز الكربون)

المطلوب:
1. تحديد أبرز الكيانات الرائدة (الشركات العالمية، مراكز الأبحاث، والدول الأكثر تسجيلاً).
2. منحنى نضج التقنية وتطورها الزمني (مرحلة الظهور، النمو المتسارع، أو التشبع).
3. استكشاف المساحات البيضاء (White Spaces) غير المحتكرة ذات الفرص الاستثمارية الكبرى.
4. قياس مخاطر حرية التشغيل والتصنيع (Freedom to Operate) للمشاريع الجديدة.`,
    level: 'expert',
    ai_compatibility: ['Perplexity', 'Claude', 'ChatGPT', 'Gemini'],
    tags: ['patent landscape', 'r&d', 'technology scouting', 'innovation', 'ip']
  },
  {
    id: 'pml-ana-11',
    slash: '/ana-market-sizing-tam',
    title_fr: 'Calculateur Taille de Marché (TAM / SAM / SOM)',
    title_ar: 'حساب حجم السوق التقديري TAM وSAM وSOM بدقة',
    category_id: 'analysis',
    category_fr: 'Analyse et recherche',
    category_ar: 'التحليل الاستراتيجي والبحث العلمي',
    function_fr: 'Estimer le marché total adressable avec méthodes Top-Down et Bottom-Up croisées',
    function_ar: 'تقدير حجم الفرصة السوقية بالمنهجيات الإحصائية المتطابقة لتقديمها للمستثمرين',
    prompt_fr: `Tu es un Analyste Financier en Private Equity et Cabinet de Conseil en Stratégie.
Calcule la taille du marché pour :
- Produit ou Service : [PRODUIT]
- Région géographique : [REGION]
- Prix moyen unitaire ou abonnement annuel (ARPU) : [PRIX_MOYEN]

Fournis une estimation méthodique rigoureuse :
1. Approche Top-Down (à partir des rapports macroéconomiques sectoriels et pourcentages d'adoption).
2. Approche Bottom-Up (Nombre d'acheteurs potentiels identifiables × Dépense moyenne annuelle).
3. Décomposition finale claire et justifiée :
   - TAM (Total Addressable Market)
   - SAM (Serviceable Addressable Market)
   - SOM (Serviceable Obtainable Market à 3 ans)
4. Facteurs d'accélération ou de contraction de ce marché.`,
    prompt_ar: `بصفتك محللاً استثمارياً في كبرى بيوت الاستشارات الإدارية:
قم بحساب حجم السوق التقديري لـ:
- المنتج أو الخدمة: [المنتج]
- النطاق الجغرافي: [النطاق]
- متوسط السعر السنوي لكل عميل (ARPU): [السعر]

المطلوب حسابات منهجية محكمة:
1. المنهجية التنازلية (Top-Down) بناءً على إحصائيات القطاع ومعدلات الاختراق.
2. المنهجية التصاعدية (Bottom-Up) بعدد العملاء الفعليين مضروباً في قيمة المشتريات.
3. التفصيل النهائي الموثق:
   - TAM: إجمالي السوق المتاح
   - SAM: السوق القابل للخدمة
   - SOM: الحصة الواقعية القابلة للاقتناص خلال 3 سنوات
4. العوامل المحفزة لنمو أو انكماش السوق مستقبلاً.`,
    level: 'intermediaire',
    ai_compatibility: ['Claude', 'ChatGPT', 'Gemini', 'Perplexity'],
    tags: ['market sizing', 'tam sam som', 'financial analysis', 'investors', 'strategy']
  },
  {
    id: 'pml-ana-12',
    slash: '/ana-policy-brief',
    title_fr: 'Rédacteur de Note Stratégique & Note aux Décideurs (Policy Brief)',
    title_ar: 'صياغة مذكرات التقدير الاستراتيجي وصناع القرار Policy Brief',
    category_id: 'analysis',
    category_fr: 'Analyse et recherche',
    category_ar: 'التحليل الاستراتيجي والبحث العلمي',
    function_fr: 'Rédiger une note de synthèse exécutive de 2 pages pour ministre ou directeur général',
    function_ar: 'كتابة تقرير تلخيصي مكثف يسهل على القيادات اتخاذ القرار في أوقات وجيزة',
    prompt_fr: `Tu es Conseiller Spécial de Direction. Rédige une note de cadrage stratégique (Policy Brief) pour :
- Décideur destinataire : [DESTINATAIRE]
- Sujet ou crise : [SUJET]
- Horizon temporel de la décision : [HORIZON]

Format concis d'aide à la décision :
1. Objet et Résumé exécutif en 3 puces clés.
2. Contexte factuel et enjeux stratégiques majeurs (Impacts financiers, réputationnels, juridiques).
3. Comparatif de 3 options d'action possibles (avec Avantages, Inconvénients, Coût et Risques pour chacune).
4. Recommandation formelle et feuille de route des 3 premières étapes de mise en œuvre.`,
    prompt_ar: `بصفتك مستشاراً تنفيذياً رفيع المستوى لصناع القرار:
اكتب مذكرة تقدير موقف استراتيجية (Policy Brief) لـ:
- صاحب القرار الموجه إليه: [المسؤول]
- الموضوع أو القضية: [الموضوع]
- المهلة الزمنية للقرار: [المهلة]

الهيكل التنفيذي الموجز:
1. الموضوع والخلاصة التنفيذية في 3 نقاط محددة.
2. الحقائق الثابتة والتداعيات الاستراتيجية (المالية، القانونية، والسمعة).
3. مقارنة دقيقة بين 3 خيارات متاحة للتعامل مع الموقف (الإيجابيات، السلبيات، التكلفة، والمخاطر لكل خيار).
4. التوصية النهائية المعتمدة وخطة التنفيذ في الأيام الأولى.`,
    level: 'expert',
    ai_compatibility: ['Claude', 'ChatGPT', 'Gemini'],
    tags: ['policy brief', 'executive summary', 'decision making', 'leadership', 'strategy']
  },
  {
    id: 'pml-ana-13',
    slash: '/ana-survey-design',
    title_fr: 'Concepteur d’Enquête Statistique Non-Biaisée',
    title_ar: 'تصميم الاستبيانات الإحصائية واستطلاعات الرأي المحايدة',
    category_id: 'analysis',
    category_fr: 'Analyse et recherche',
    category_ar: 'التحليل الاستراتيجي والبحث العلمي',
    function_fr: 'Rédiger un questionnaire d’étude quantitatif éliminant les questions suggestives',
    function_ar: 'صياغة استبيان بحثي محكم الصياغة يتفادى توجيه إجابات المستطلعة آراؤهم',
    prompt_fr: `Tu es un Spécialiste de la Méthodologie des Enquêtes d'Opinion et d'Études de Marché.
Conçois un questionnaire d'enquête pour :
- Thème de l'étude : [THEME]
- Échantillon cible : [ECHANTILLON]
- Temps de réponse maximal : 5 minutes (environ 12-15 questions)

Directives méthodologiques :
1. Questions filtres démographiques d'ouverture pour qualifier l'échantillon.
2. Formulation neutre interdisant tout biais de formulation (Leading questions).
3. Équilibre entre échelles de Likert (1 à 5 équilibrées), choix multiples et 1 question ouverte finale.
4. Stratégie de diffusion pour maximiser le taux de complétion (Response Rate).`,
    prompt_ar: `أنت خبير معتمد في تصميم استطلاعات الرأي والمسوح الإحصائية:
صمم استبياناً بحثياً متكاملاً لـ:
- موضوع الدراسة: [الموضوع]
- الفئة المستطلعة: [الفئة]
- زمن الإجابة المستهدف: لا يتجاوز 5 دقائق (12-15 سؤالاً)

المعايير المنهجية:
1. أسئلة التصفية والتأهيل الديموغرافي في البداية.
2. صياغة محايدة تماماً تمنع إيحاء أو توجيه المستجيب نحو خيار معين.
3. التنوع المتوازن بين مقاييس ليكرت المتوازنة والاختيارات المتعددة مع سؤال مفتوح واحد في الختام.
4. نصائح عملية لرفع نسبة إكمال الاستبيان وتقليل الانسحاب في منتصفه.`,
    level: 'intermediaire',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['survey design', 'market research', 'statistics', 'questionnaire', 'data collection']
  },
  {
    id: 'pml-ana-14',
    slash: '/ana-benchmarking-matrix',
    title_fr: 'Benchmark Comparatif Pondéré Multicritères',
    title_ar: 'المقارنة المعيارية متعددة المعايير والموازنة Benchmarking',
    category_id: 'analysis',
    category_fr: 'Analyse et recherche',
    category_ar: 'التحليل الاستراتيجي والبحث العلمي',
    function_fr: 'Comparer scientifiquement plusieurs solutions logicielles, prestataires ou produits',
    function_ar: 'المفاضلة العلمية الموضوعية بين الخيارات والحلول البرمجية والموردين بأوزان نسبية',
    prompt_fr: `Tu es un Consultant en Aide à la Décision Multicritère.
Établis une matrice de benchmark pondérée pour départager les solutions suivantes :
- Options en compétition : [OPTIONS] (ex: 3 logiciels CRM, 3 prestataires cloud, 3 architectures)
- Objectifs métier de l'entreprise : [OBJECTIFS]

Livrables :
1. Liste de 6 à 8 critères d'évaluation pertinents (Coût, Facilité d'intégration, Sécurité, Support, Évolutivité).
2. Attribution d'un coefficient de pondération (somme des poids = 100%) justifié par les priorités métier.
3. Tableau de notation complet (Notes de 1 à 10 pour chaque option sur chaque critère et score total pondéré).
4. Analyse de sensibilité : si le critère le plus important change, le gagnant reste-t-il le même ?`,
    prompt_ar: `بصفتك مستشاراً في نظم دعم اتخاذ القرار متعدد المعايير (MCDM):
أنشئ مصفوفة مقارنة معيارية مرجحة للمفاضلة بين الخيارات:
- الخيارات المتنافسة: [الخيارات] (أنظمة برمجية، شركات استضافة، حلول تقنية)
- أهداف المنشأة الحالية: [الأهداف]

المخرجات:
1. تحديد 6 إلى 8 معايير تقييم جوهرية (التكلفة، سهولة الربط، الأمان، الدعم الفني، قابلية التوسع).
2. تحديد الأوزان النسبية لكل معيار (مجموع الأوزان = 100%) مبررة بأولويات العمل.
3. جدول التقييم الإجمالي (درجات من 1 إلى 10 وحساب النتيجة الإجمالية المرجحة).
4. تحليل الحساسية للتحقق من صمود الخيار الفائز عند تغير الأولويات.`,
    level: 'intermediaire',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['benchmarking', 'decision matrix', 'evaluation', 'procurement', 'comparison']
  },
  {
    id: 'pml-ana-15',
    slash: '/ana-fact-checker',
    title_fr: 'Vérificateur de Faits & Audit de Sources (Fact-Checking)',
    title_ar: 'التحقق من صحة الأخبار وتدقيق المصادر Fact-Checking',
    category_id: 'analysis',
    category_fr: 'Analyse et recherche',
    category_ar: 'التحليل الاستراتيجي والبحث العلمي',
    function_fr: 'Vérifier la véracité d’une affirmation virale, identifier la source originelle et le contexte',
    function_ar: 'فحص مصداقية الادعاءات المنتشرة وكشف التضليل وتتبع المصدر الأصلي للمعلومة',
    prompt_fr: `Agis comme un Journaliste d'Investigation et Fact-Checker certifié IFCN.
Vérifie la véracité de l'affirmation suivante :
- Déclaration / Information à vérifier : "[AFFIRMATION]"
- Contexte de diffusion : [CONTEXTE]

Protocole de vérification :
1. Décomposition de l'affirmation en faits vérifiables distincts.
2. Recherche de la source primaire originelle (études scientifiques publiées, données statistiques officielles, vidéos non tronquées).
3. Détection des manipulations courantes (hors-contexte, corrélation confondue avec causalité, chiffres gonflés).
4. Verdict clair et argumenté : Vrai / Faux / Trompeur / Partiellement vrai / Non prouvé.`,
    prompt_ar: `بصفتك مدققاً صحفياً معتمداً في شبكة التحقق الدولية (IFCN):
تحقق من صحة الادعاء أو المعلومة التالية:
- النص المراد فحصه: "[الادعاء]"
- سياق التداول: [السياق]

بروتوكول التدقيق:
1. تفكيك الادعاء إلى أجزاء ومعلومات قابلة للفحص الموضوعي.
2. تتبع المصدر الأولي للمعلومة (إحصائيات رسمية، أوراق علمية محكمة، توثيق رسمي).
3. كشف أساليب التضليل (الاقتطاع من السياق، الخلط بين التزامن والسببية، تضخيم الأرقام).
4. الحكم النهائي الصريح والمعلل: صحيح / غير صحيح / مضلل / صحيح جزئياً / غير مثبت.`,
    level: 'debutant',
    ai_compatibility: ['Perplexity', 'ChatGPT', 'Claude', 'Gemini'],
    tags: ['fact checking', 'journalism', 'verification', 'critical thinking', 'truth']
  },

  // ==========================================
  // CATÉGORIE 8 : IMAGES, VIDÉOS ET DESIGN (15 prompts)
  // ==========================================
  {
    id: 'pml-med-01',
    slash: '/img-midjourney-v6',
    title_fr: 'Ingénieur de Prompts Midjourney v6 & Photoréalisme',
    title_ar: 'هندسة أوامر ميدجورني Midjourney الاحترافية للصور الواقعية',
    category_id: 'media-design',
    category_fr: 'Images, vidéos et design',
    category_ar: 'الصور، الفيديو والتصميم الإبداعي',
    function_fr: 'Générer des photographies ultraréalistes avec maîtrise de la lumière, de l’optique et de la caméra',
    function_ar: 'توليد صور فوتوغرافية فائقة الواقعية بضبط العدسات والإضاءة وزوايا التصوير',
    prompt_fr: `Tu es un Directeur Photographique et Spécialiste Midjourney v6.
Génère le prompt parfait en anglais (avec paramètres optimaux) pour :
- Sujet de l'image : [SUJET]
- Ambiance / Style : [STYLE] (ex: Cinématique 35mm, portrait éditorial haute couture, photographie de rue)
- Éclairage souhaité : [ECLAIRAGE] (ex: Golden hour, néons cyberpunk, lumière tamisée clair-obscur)

Fournis :
1. Le prompt final en anglais enrichi de termes de photographie professionnelle (modèle d'appareil, longueur focale de lentille, ouverture f/1.4, composition de cadre).
2. Les paramètres Midjourney exacts (--ar 16:9 ou 9:16, --style raw, --v 6.1, --s 250, --c).
3. Les mots-clés négatifs (--no) pour éviter les défauts anatomiques ou les rendus 3D plastiques.
4. L'explication en français des choix artistiques retenus.`,
    prompt_ar: `أنت مدير تصوير فوتوغرافي وخبير بأوامر Midjourney:
أنشئ الأمر الإنجليزي الكامل مع المعاملات الفنية لـ:
- موضوع الصورة: [الموضوع]
- النمط والأجواء: [النمط] (سينمائي، بورتريه مجلات، تصوير وثائقي)
- نوع الإضاءة: [الإضاءة] (ساعة ذهبية، إضاءة استوديو درامية)

المطلوب:
1. نص الأمر الكامل بالإنجليزية مدعوماً بالمصطلحات الاحترافية (نوع الكاميرا، أبعاد العدسة، فتحة العدسة f/1.4).
2. معاملات Midjourney الدقيقة (--ar 16:9, --style raw, --v 6.1, --s 250).
3. الكلمات المستبعدة (--no) لمنع الأشكال المشوهة أو المظهر الكارتوني البلاستيكي.
4. شرح الخيارات الفنية وأسباب اختيارها.`,
    level: 'intermediaire',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['midjourney', 'image generation', 'photography', 'prompt engineering', 'art']
  },
  {
    id: 'pml-med-02',
    slash: '/ui-design-system-tokens',
    title_fr: 'Architecte Design System & Tokens UI/UX',
    title_ar: 'هندسة نظم التصميم ورموز الواجهات Design System Tokens',
    category_id: 'media-design',
    category_fr: 'Images, vidéos et design',
    category_ar: 'الصور، الفيديو والتصميم الإبداعي',
    function_fr: 'Créer une palette sémantique complète, typographie et échelles d’espacement',
    function_ar: 'بناء معايير الألوان والخطوط والمسافات المتسقة للواجهات الرقمية',
    prompt_fr: `Tu es un Lead Product Designer UI/UX.
Conçois le Design System fondamental pour l'application :
- Type d'application : [APPLICATION]
- Identité visuelle souhaitée : [IDENTITE] (Moderne épurée, dark mode tech, néo-brutaliste, corporate rassurant)

Détaille la nomenclature des design tokens :
1. Palette de couleurs sémantiques (Primary, Secondary, Accent, Success, Warning, Error, Surface, Background) avec déclinaison clair et sombre.
2. Système typographique (Échelle de tailles modulaire en rem, hauteurs de lignes, graisses de font-weight).
3. Grille d'espacement (Multiples de 4px / 8px).
4. Rayons de courbure (Border Radius) et ombres portées (Elevation / Shadows) pour créer une hiérarchie de profondeur subtile.`,
    prompt_ar: `بصفتك كبير مصممي واجهات وتجربة المستخدم (UI/UX Design Lead):
قم بتأسيس نظام التصميم (Design System) لـ:
- نوع التطبيق: [التطبيق]
- الهوية البصرية المستهدفة: [الهوية] (داكنة تقنية، بيضاء نقية، عصرية أنيقة)

تفاصيل الرموز التصميمية (Design Tokens):
1. مصفوفة الألوان الدلالية المنسقة للوضعين الداكن والفاتح.
2. المقياس الطباعي للخطوط (أحجام النصوص بالـ rem، المسافات بين السطور، وسمك الخط).
3. مقياس المسافات والتباعدات (المبني على مضاعفات 4px و8px).
4. استدارة الحواف (Border Radius) وتدرجات الظلال (Shadows) لخلق عمق بصري راقٍ.`,
    level: 'expert',
    ai_compatibility: ['Claude', 'ChatGPT', 'Cursor', 'Gemini'],
    tags: ['design system', 'ui design', 'tokens', 'tailwind', 'figma']
  },
  {
    id: 'pml-med-03',
    slash: '/video-luma-kling-prompts',
    title_fr: 'Réalisateur IA Vidéo (Runway Gen-3, Luma, Kling, Sora)',
    title_ar: 'إخراج مقاطع الفيديو بالذكاء الاصطناعي Runway وLuma وKling',
    category_id: 'media-design',
    category_fr: 'Images, vidéos et design',
    category_ar: 'الصور، الفيديو والتصميم الإبداعي',
    function_fr: 'Rédiger des prompts de cinématique vidéo avec mouvements de caméra fluides et cohérence temporelle',
    function_ar: 'كتابة أوامر توليد مشاهد الفيديو مع حركة الكاميرا والفيزياء الواقعية',
    prompt_fr: `Tu es un Réalisateur de Cinéma et Expert en Outils Vidéo Génératifs (Runway Gen-3, Kling AI, Luma Dream Machine, Sora).
Écris le prompt vidéo en anglais pour la scène suivante :
- Action dans la scène : [SCENE]
- Mouvement de caméra : [CAMERA] (ex: Travelling avant fluide, panoramique orbital 360°, drone fpv plongeant)
- Vitesse et temporalité : [TEMPO] (ex: Ralenti 60fps, time-lapse accéléré, temps réel)

Livrables :
1. Le prompt principal en anglais structuré : [Sujet + Action principale] + [Mouvement de caméra exact] + [Éclairage & Ambiance atmosphérique] + [Rendu cinématographique].
2. Les conseils pour maintenir la cohérence des personnages entre 2 plans consécutifs.
3. Paramètres de vitesse de mouvement et seed pour un résultat sans distorsion bizarre.`,
    prompt_ar: `أنت مخرج سينمائي وخبير في أدوات توليد الفيديو بالذكاء الاصطناعي (Kling, Runway Gen-3, Luma):
اكتب الأمر الإنجليزي الاحترافي للمشهد التالي:
- تفاصيل المشهد: [المشهد]
- حركة الكاميرا: [الكاميرا] (تقريب سلس، دوران 360 درجة، لقطة درون)
- الإيقاع الزمني: [الإيقاع] (حركة بطيئة Slow Motion، تسارع زمني Time-lapse)

المخرجات:
1. نص الأمر الإنجليزي المنظم: [الموضوع والحدث] + [حركة الكاميرا] + [الإضاءة والأجواء] + [جودة المعالجة السينمائية].
2. إرشادات الحفاظ على ثبات ملامح الشخصيات بين المشاهد المتتالية.
3. إعدادات الحركة ورمز التثبيت (Seed) لتفادي التشوهات البصرية الشائعة.`,
    level: 'intermediaire',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['ai video', 'runway', 'kling', 'luma', 'cinematography', 'video generation']
  },
  {
    id: 'pml-med-04',
    slash: '/logo-vector-brandmark',
    title_fr: 'Designer de Logos & Emblèmes Vectoriels',
    title_ar: 'تصميم الشعارات البسيطة والعلامات البصرية Minimalist Logos',
    category_id: 'media-design',
    category_fr: 'Images, vidéos et design',
    category_ar: 'الصور، الفيديو والتصميم الإبداعي',
    function_fr: 'Concevoir un logo intemporel, géométrique, vectorisable et facilement déclinable',
    function_ar: 'ابتكار شعارات أيقونية بصرية بسيطة تحتفظ بوضوحها في أصغر الأحجام',
    prompt_fr: `Tu es un Designer d'Identité Visuelle mondialement primé.
Conçois le concept de logo pour :
- Nom de la marque : [MARQUE]
- Secteur et valeurs : [VALEURS]
- Style souhaité : [STYLE] (Monogramme minimaliste, symbole géométrique, typographie sur-mesure)

Fournis :
1. La description conceptuelle de 3 pistes créatives distinctes avec signification symbolique.
2. Pour la meilleure piste, le prompt de génération d'image en aplat vectoriel (Flat vector logo, clean white background, simple geometry, no gradients, minimal).
3. La grille de construction géométrique (règle du nombre d'or, alignements).
4. Le guide d'utilisation sur fond sombre et fond clair.`,
    prompt_ar: `أنت مصمم هويات بصرية وعلامات تجارية عالمي:
صمم مفهوم الشعار للعلامة التالية:
- اسم العلامة: [العلامة]
- قطاع العمل والقيم: [القيم]
- الأسلوب المفضل: [الأسلوب] (رمز هندسي بسيط، مونوغرام الحروف، خط مخصص)

المطلوب:
1. شرح تصوري لـ 3 أفكار إبداعية مختلفة مع الدلالات الرمزية لكل منها.
2. أمر التوليد المخصص للفكرة الأفضل بصيغة فيكتور مسطح (Flat Vector) بخلفية بيضاء نظيفة خالية من التعقيد.
3. شبكة البناء الهندسي والتناسب الذهبي.
4. دليل استخدام الشعار على الخلفيات الداكنة والفاتحة.`,
    level: 'debutant',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['logo design', 'branding', 'vector', 'minimalism', 'graphic design']
  },
  {
    id: 'pml-med-05',
    slash: '/yt-thumbnail-click',
    title_fr: 'Concepteur Miniatures YouTube à Fort Taux de Clic (CTR)',
    title_ar: 'تصميم الصور المصغرة لليوتيوب ومضاعفة نسبة النقر CTR',
    category_id: 'media-design',
    category_fr: 'Images, vidéos et design',
    category_ar: 'الصور، الفيديو والتصميم الإبداعي',
    function_fr: 'Créer le concept visuel d’une miniature YouTube générant plus de 12% de CTR',
    function_ar: 'هندسة غلاف فيديو يوتيوب يثير الفضول البصري ويتفوق على منافسيه',
    prompt_fr: `Tu es un Stratège YouTube spécialisé dans la psychologie du clic et la conception de miniatures (Thumbnails).
Pour la vidéo suivante :
- Titre de la vidéo : [TITRE_VIDEO]
- Thématique : [THEMATIQUE]
- Émotion ciblée : [EMOTION] (Stupéfaction, peur de perdre, curiosité irrésistible)

Conçois 2 concepts de miniatures redoutables :
1. Composition visuelle (Règle des tiers, sujet principal à gauche ou droite, fond contrasté).
2. L'expression faciale exacte et le regard du personnage.
3. Le texte incrusté (Maximum 3 à 4 mots percutants qui complètent le titre sans le répéter).
4. Les couleurs contrastées pour se démarquer sur le fond sombre et le fond blanc de l'application YouTube.`,
    prompt_ar: `أنت خبير في علم نفس المشاهد وصناعة الصور المصغرة (Thumbnails) لليوتيوب:
للفيديو التالي:
- عنوان الفيديو: [العنوان]
- موضوع الفيديو: [الموضوع]
- الشعور المستهدف: [الشعور] (دهشة، خوف من الفوات، فضول لا يقاوم)

صمم مفهومين لصور مصغرة تحقق أعلى معدلات النقر:
1. التكوين البصري وتوزيع العناصر (قاعدة الأثلاث، تباين الخلفية).
2. تعبيرات الوجه الدقيقة وزاوية النظر إلى العنصر الأهم.
3. النص المكتوب على الصورة (لا يتجاوز 3-4 كلمات تعزز الفضول دون تكرار العنوان).
4. تباين الألوان الجريء لضمان ظهور الصورة بوضوح على شاشات الهواتف الصغيرة.`,
    level: 'debutant',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['youtube thumbnail', 'ctr', 'youtube growth', 'graphic design', 'visual hook']
  },
  {
    id: 'pml-med-06',
    slash: '/ux-wireframe-flow',
    title_fr: 'Architecte Wireframes & User Flow Écran par Écran',
    title_ar: 'تخطيط النماذج السلكية Wireframes وتدفق الشاشات UX',
    category_id: 'media-design',
    category_fr: 'Images, vidéos et design',
    category_ar: 'الصور، الفيديو والتصميم الإبداعي',
    function_fr: 'Détailler l’architecture d’information et les wireframes basse fidélité d’un parcours clé',
    function_ar: 'تصميم هيكلية المحتوى وتوزيع العناصر لشاشات التطبيقات قبل البدء بالتصميم النهائي',
    prompt_fr: `Tu es un UX Architecte Senior.
Conçois le parcours utilisateur (User Flow) et les wireframes détaillés pour :
- Fonctionnalité : [FONCTIONNALITE] (ex: Processus de réservation en 3 étapes, onboarding nouvel utilisateur)
- Support : [SUPPORT] (Mobile First iOS/Android ou Dashboard Desktop)

Livrables pour chaque écran du flux :
1. Objectif unique de l'écran.
2. Hiérarchie des éléments en wireframe textuel ASCII ou liste structurée (En-tête, corps, actions primaires et secondaires).
3. Gestion des états vides (Empty State) et des erreurs de saisie immédiates.
4. Transitions et micro-interactions lors du passage à l'écran suivant.`,
    prompt_ar: `بصفتك مهندس تجربة مستخدم أول (UX Architect):
قم بتخطيط تدفق المستخدم وتفاصيل النماذج السلكية (Wireframes) لـ:
- الوظيفة: [الوظيفة] (حجز في 3 خطوات، تسجيل مستخدم جديد)
- الشاشة المستهدفة: [النوع] (جوال أو لوحة تحكم حاسوب)

تفاصيل كل شاشة في المسار:
1. الهدف المحوري الأوحد للشاشة.
2. التوزيع الهيكلي للعناصر (الترويسة، المحتوى، الأزرار الأساسية والثانوية).
3. تصميم الشاشات الفارغة (Empty State) والتنبيه الفوري بالأخطاء.
4. الحركات والانتقالات التفاعلية السلسة للشاشة التالية.`,
    level: 'intermediaire',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['wireframes', 'ux design', 'user flow', 'information architecture']
  },
  {
    id: 'pml-med-07',
    slash: '/3d-product-render',
    title_fr: 'Metteur en Scène Rendu Produit 3D Photoréaliste',
    title_ar: 'إخراج وعرض المنتجات ثلاثية الأبعاد 3D Product Rendering',
    category_id: 'media-design',
    category_fr: 'Images, vidéos et design',
    category_ar: 'الصور، الفيديو والتصميم الإبداعي',
    function_fr: 'Rédiger le prompt pour un rendu de produit commercial digne d’Apple ou Nike',
    function_ar: 'توليد صور تجارية مذهلة للمنتجات ثلاثية الأبعاد بأسلوب كبرى العلامات العالمية',
    prompt_fr: `Tu es un Artiste 3D et Directeur Artistique Packaging.
Rédige le prompt en anglais pour un rendu produit commercial d'exception :
- Produit : [PRODUIT] (ex: Flacon de parfum luxueux, montre connectée, sneaker futuriste)
- Matériaux : [MATERIAUX] (ex: Verre dépoli, titane brossé, cuir texturé)
- Environnement du shooting : [ENVIRONNEMENT] (ex: Socle en marbre noir flottant, podium minimaliste entouré d'eau)

Détaille dans le prompt :
1. Rendu Octane / Unreal Engine 5 avec illumination globale et réfraction de la lumière (Ray Tracing).
2. Profondeur de champ subtile mettant en valeur les détails micro-texturés du produit.
3. Éclairage de studio à 3 points (Key light, Fill light, Rim light brillante soulignant les contours).`,
    prompt_ar: `أنت فنان ثلاثي الأبعاد ومدير إخراج فني للإعلانات التجارية:
اكتب الأمر الإنجليزي لتوليد عرض منتج ثلاثي الأبعاد فائق الفخامة لـ:
- المنتج: [المنتج] (عطر فاخر، ساعة ذكية، حذاء تقني)
- الخامات: [الخامات] (زجاج غير لامع، تيتانيوم مصقول، جلد طبيعي)
- بيئة العرض: [البيئة] (منصة رخامية سوداء عائمة، انعكاسات مائية نقية)

تفاصيل الأمر:
1. محاكاة محركات الرندرة العالمية (Octane Render / Unreal Engine 5) مع تتبع الأشعة والظلال (Ray Tracing).
2. عمق ميدان بؤري يركز على التفاصيل الدقيقة والملمس الواقعي للمنتج.
3. إضاءة الاستوديو الاحترافية ثلاثية النقاط مع إضاءة حافة تبرز تفاصيل الشكل.`,
    level: 'intermediaire',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['3d render', 'product design', 'octane render', 'unreal engine', 'commercial']
  },
  {
    id: 'pml-med-08',
    slash: '/storyboard-director',
    title_fr: 'Scénariste Storyboard Publicitaire Plan par Plan',
    title_ar: 'رسم وتخطيط القصة المصورة للإعلانات التجارية Storyboard',
    category_id: 'media-design',
    category_fr: 'Images, vidéos et design',
    category_ar: 'الصور، الفيديو والتصميم الإبداعي',
    function_fr: 'Découper un spot publicitaire de 30 secondes en 6 plans cinématographiques clés',
    function_ar: 'تفكيك الإعلان التلفزيوني إلى مشاهد بصرية وصوتية متناسقة خطوة بخطوة',
    prompt_fr: `Tu es un Réalisateur de Publicités Télévisées.
Élabore le Storyboard complet d'un spot publicitaire de 30 secondes pour :
- Marque / Produit : [PRODUIT]
- Message central : [MESSAGE]
- Ambiance sonore / Voix : [AUDIO]

Découpe la publicité en 6 plans numérotés :
Pour chaque plan :
1. Durée (ex: 0:00 - 0:04).
2. Description visuelle précise du cadrage (Plan large, gros plan, vue subjective).
3. Voix-off ou dialogues exacts.
4. Effets sonores (SFX) et intensité de la musique de fond.
5. Note d'intention pour l'acteur ou l'animation.`,
    prompt_ar: `بصفتك مخرج إعلانات تلفزيونية محترفاً:
صمم القصة المصورة (Storyboard) لإعلان تجاري مدته 30 ثانية لـ:
- المنتج أو الخدمة: [المنتج]
- الرسالة المحورية: [الرسالة]
- الهوية الصوتية والموسيقى: [الصوت]

توزيع الإعلان في 6 مشاهد متتالية:
لكل مشهد:
1. التوقيت الدقيق بالثواني.
2. الوصف البصري لزاوية اللقطة (لقطة مقربة، لقطة عامة، منظور الشخص الأول).
3. الكلام والحوار المنطوق بدقة.
4. المؤثرات الصوتية (SFX) ومستوى تصاعد الموسيقى التعبيرية.
5. توجيهات الأداء التمثيلي أو الحركي داخل الكادر.`,
    level: 'intermediaire',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['storyboard', 'advertising', 'commercial', 'video production', 'scriptwriting']
  },
  {
    id: 'pml-med-09',
    slash: '/app-icon-vector-craft',
    title_fr: 'Designer d’Icône d’Application Mobile (iOS / Android)',
    title_ar: 'تصميم أيقونات التطبيقات للهواتف App Icon Design',
    category_id: 'media-design',
    category_fr: 'Images, vidéos et design',
    category_ar: 'الصور، الفيديو والتصميم الإبداعي',
    function_fr: 'Concevoir une icône d’application mémorable respectant les règles Human Interface et Material',
    function_ar: 'ابتكار أيقونة تطبيق فريدة تبرز بوضوح على شاشات الهواتف بين عشرات التطبيقات',
    prompt_fr: `Conçois le concept visuel et le prompt de génération de l'icône de l'application suivante :
- Nom et fonction de l'app : [APPLICATION]
- Éléments symboliques centraux : [SYMBOLES]
- Style : Moderne iOS squircle épuré avec dégradé subtil

Livrables :
1. Le concept métaphorique fort (1 seul symbole mémorable, aucun texte ou lettres minuscules).
2. Le prompt Midjourney ou DALL-E en anglais pour générer l'icône sur fond neutre.
3. Les consignes d'optimisation pour la zone de sécurité maskable Android (safe zone 80%).
4. Le test de lisibilité en taille réduite 32x32px.`,
    prompt_ar: `صمم الفكرة الفنية وأمر التوليد لأيقونة تطبيق جوال:
- اسم ووظيفة التطبيق: [التطبيق]
- الرموز والعناصر المعبرة: [الرموز]
- النمط: تصميم ناعم وفق معايير آبل وأندرويد بألوان متدرجة أنيقة

المخرجات:
1. الفكرة الرمزية المكثفة (رمز بصري واحد واضح، منع النصوص أو الكلمات).
2. أمر التوليد الدقيق بالإنجليزية للحصول على أيقونة عالية الجودة بخلفية معزولة.
3. التوافق مع منطقة الأمان الدائرية لنظام أندرويد (Safe Zone).
4. اختبار وضوح المعالم عند تصغير الأيقونة لأصغر المقاسات.`,
    level: 'debutant',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['app icon', 'ios icon', 'android icon', 'graphic design', 'ui']
  },
  {
    id: 'pml-med-10',
    slash: '/infographic-visual-flow',
    title_fr: 'Architecte d’Infographie Pédagogique & Dataviz',
    title_ar: 'تصميم الإنفوجرافيك التعليمي والرسوم البيانية التوضيحية',
    category_id: 'media-design',
    category_fr: 'Images, vidéos et design',
    category_ar: 'الصور، الفيديو والتصميم الإبداعي',
    function_fr: 'Transformer des données complexes en un parcours visuel captivant et viral',
    function_ar: 'تحويل الأرقام والإحصائيات الجافة إلى سرد بصري شيق وسهل المشاركة',
    prompt_fr: `Tu es un Spécialiste de la Visualisation de Données (Dataviz) et du Design d'Information.
Conçois la structure d'une infographie verticale pour :
- Sujet : [SUJET]
- Données chiffrées clés : [CHIFFRES]

Structure du poster infographique :
1. Titre accrocheur et statistique choc d'ouverture.
2. Découpage chronologique ou logique en 4 étapes numérotées.
3. Choix des représentations graphiques adaptées (Diagramme Sankey, radar, camembert revisité ou jauge).
4. Code couleur limitatif (3 teintes maximum pour une lisibilité parfaite).
5. Conclusion avec appel à l'action ou citation marquante et sources des données.`,
    prompt_ar: `أنت متخصص في تحويل وتصميم البيانات التفاعلية (Data Visualization):
صمم هيكل إنفوجرافيك طولي (Vertical Infographic) لـ:
- الموضوع: [الموضوع]
- البيانات والإحصائيات المتوفرة: [الإحصائيات]

المطلوب لتصميم الإنفوجرافيك:
1. عنوان جذاب ورقم إحصائي صادم في المقدمة.
2. تقسيم المعلومات منطقياً في 4 مراحل مرقمة وسلسة.
3. اختيار الرسم البياني الأنسب لكل معلومة وتجنب الجداول التقليدية.
4. لوحة ألوان متناسقة لا تتجاوز 3 ألوان لضمان راحة العين.
5. خاتمة تلخص النتيجة مع توثيق مصادر الأرقام.`,
    level: 'intermediaire',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['infographic', 'dataviz', 'data design', 'visual storytelling', 'education']
  },
  {
    id: 'pml-med-11',
    slash: '/color-palette-psychology',
    title_fr: 'Harmoniseur de Couleurs & Psychologie Chromatique',
    title_ar: 'تنسيق لوحات الألوان وعلم النفس اللوني للعلامات التجارية',
    category_id: 'media-design',
    category_fr: 'Images, vidéos et design',
    category_ar: 'الصور، الفيديو والتصميم الإبداعي',
    function_fr: 'Créer une palette de couleurs harmonieuse répondant aux émotions souhaitées',
    function_ar: 'اختيار تدرجات الألوان المتوافقة عاطفياً مع طبيعة النشاط ومعايير التباين',
    prompt_fr: `Tu es un Expert en Colorimétrie et Psychologie des Couleurs.
Crée la palette chromatique idéale pour :
- Secteur / Marque : [MARQUE]
- Émotions à déclencher : [EMOTIONS] (ex: Confiance médicale, énergie dynamique, sérénité éco-responsable, prestige discret)

Fournis :
1. 5 codes hexadécimaux précis avec leur rôle (Couleur dominante 60%, Couleur secondaire 30%, Couleur d'accentuation 10%, Fond et Texte contrasté).
2. L'explication psychologique du choix de chaque teinte et son impact sur la perception inconsciente de l'utilisateur.
3. Vérification des ratios de contraste WCAG pour le texte.
4. Nuances dérivées pour les états interactifs (Hover, Active, Disabled).`,
    prompt_ar: `أنت خبير في علم نفس الألوان وتنسيق الهويات البصرية:
ابتكر لوحة الألوان المثالية لـ:
- العلامة أو النشاط: [النشاط]
- المشاعر المستهدفة: [المشاعر] (ثقة طبية، طاقة وحيوية، هدوء بيئي، فخامة راقية)

المخرجات:
1. 5 رموز ألوان سداسية (Hex Codes) وفق قاعدة التوزيع (اللون الأساسي 60%، الثانوي 30%، لون التمييز والتفاعل 10%، ألوان الخلفية والنصوص).
2. التحليل النفسي لدلالة كل لون وتأثيره على عاطفة وقرارات المستهلك.
3. التأكد من معايير تباين القراءة للمحتوى النصي WCAG.
4. التدرجات الإضافية لحالات التفاعل عند تمرير المؤشر (Hover) والضغط.`,
    level: 'debutant',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['color palette', 'psychology', 'branding', 'hex colors', 'ui design']
  },
  {
    id: 'pml-med-12',
    slash: '/font-pairing-master',
    title_fr: 'Typographe & Association de Polices (Font Pairing)',
    title_ar: 'تنسيق ومطابقة الخطوط الطباعية Font Pairing',
    category_id: 'media-design',
    category_fr: 'Images, vidéos et design',
    category_ar: 'الصور، الفيديو والتصميم الإبداعي',
    function_fr: 'Associer harmonieusement police de titre et police de texte pour un rendu prestigieux',
    function_ar: 'دمج خطوط العناوين والنصوص بتناغم بصري يرفع من رقي ومهنية التصميم',
    prompt_fr: `Tu es un Maître Typographe.
Propose 3 duos de polices de caractères complémentaires pour le projet suivant :
- Nature du projet : [PROJET] (ex: Magazine littéraire, application fintech moderne, e-commerce luxe, blog tech)
- Disponibilité souhaitée : Google Fonts gratuites ou polices open-source

Pour chaque duo :
1. Police de Titres (Display / Heading) et Police de Corps de texte (Body) avec nom exact.
2. Pourquoi cette combinaison fonctionne (Contraste de style Serif/Sans-Serif, proportions géométriques, équilibre des graisses).
3. Recommandations de hiérarchie CSS (font-size, line-height, letter-spacing).
4. Adaptation bilingue : quelle police arabe harmonieuse associer pour un site bilingue ?`,
    prompt_ar: `أنت خبير في فنون الخطوط والطباعة الرقمية (Typography):
اقترح 3 ثنائيات متناسقة لخطوط العناوين والنصوص لـ:
- طبيعة المشروع: [المشروع] (تطبيق مالي حديث، متجر أزياء فاخر، مجلة فكرية)
- المصدر المفضل: خطوط Google Fonts المجانية والمفتوحة

لكل ثنائية:
1. خط العناوين (Display/Heading) وخط المتن (Body) بالأسماء الرسمية.
2. تبرير التناغم البصري بين الخطين (التباين والتوازن في الوزن).
3. إعدادات الأنماط المقترحة (حجم الخط، تباعد الأسطر والأحرف).
4. اقتراح الخط العربي المطابق لهوية الخط اللاتيني للمواقع ثنائية اللغة.`,
    level: 'debutant',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['typography', 'font pairing', 'google fonts', 'graphic design', 'arabic fonts']
  },
  {
    id: 'pml-med-13',
    slash: '/moodboard-art-direction',
    title_fr: 'Directeur Artistique Moodboard & Univers Visuel',
    title_ar: 'توجيه الإخراج الفني وبناء لوحة المزاج البصري Moodboard',
    category_id: 'media-design',
    category_fr: 'Images, vidéos et design',
    category_ar: 'الصور، الفيديو والتصميم الإبداعي',
    function_fr: 'Définir l’univers créatif, les textures, lumières et références pour une nouvelle marque',
    function_ar: 'رسم الملامح الجمالية والملمس والأجواء العامة لإطلاق مشروع إبداعي متكامل',
    prompt_fr: `Tu es Directeur de Création en Agence de Luxe et de Design.
Crée le cahier de direction artistique et la description du Moodboard pour :
- Projet : [PROJET]
- Mots-clés d'intention : [MOTS_CLES] (ex: Organique, brutaliste, minéral, futuriste chaleureux)

Structure du guide d'inspiration :
1. Le Manifeste créatif en 1 paragraphe évocateur.
2. Description des 6 visuels clés composant le Moodboard (Textures réelles, architecture de référence, traitement de la lumière, silhouettes).
3. Traitement photographique recommandé (Grain pellicule argentique, contraste doux, température de couleur).
4. Ce qu'il faut rigoureusement bannir visuellement pour préserver l'élégance de la marque.`,
    prompt_ar: `بصفتك مديراً إبداعياً في كبرى وكالات التصميم العالمية:
قم بإعداد دليل التوجيه الفني ووصف لوحة الإلهام البصري (Moodboard) لـ:
- المشروع: [المشروع]
- الكلمات المفتاحية للهوية: [الكلمات] (عضوي طبيعي، حداثي، دفء مستقبلي)

محتويات الدليل:
1. البيان الإبداعي التأسيسي للمشروع في فقرة ملهمة.
2. وصف تفصيلي لـ 6 صور محورية تشكل لوحة المزاج (خامات ملموسة، مراجع معمارية، ظلال وإضاءة).
3. أسلوب المعالجة الفوتوغرافية للصور (درجة الدفء، الحبيبات السينمائية).
4. المحاذير البصرية التي يجب تجنبها تماماً لحماية أصالة العلامة.`,
    level: 'intermediaire',
    ai_compatibility: ['Claude', 'ChatGPT', 'Gemini'],
    tags: ['art direction', 'moodboard', 'branding', 'creative strategy', 'visual identity']
  },
  {
    id: 'pml-med-14',
    slash: '/motion-ui-microinteractions',
    title_fr: 'Designer de Micro-Interactions & Animations UI',
    title_ar: 'تصميم الحركات التفاعلية الدقيقة Micro-Interactions للواجهات',
    category_id: 'media-design',
    category_fr: 'Images, vidéos et design',
    category_ar: 'الصور، الفيديو والتصميم الإبداعي',
    function_fr: 'Donner vie aux composants d’interface avec des courbes d’accélération naturelles',
    function_ar: 'إضفاء الحيوية والجاذبية على الأزرار والنوافذ بحركات فيزيائية مريحة',
    prompt_fr: `Agis comme un Motion Designer UI.
Conçois les micro-interactions et transitions pour :
- Composant : [COMPOSANT] (ex: Bouton d'ajout au panier, ouverture de modale, checkmark de validation, carte repliable)
- Bibliothèque : CSS / Framer Motion / Tailwind Motion

Spécifie avec précision :
1. Les propriétés animées (scale, opacity, translateY, rotate).
2. La durée (Timing en ms : 150ms à 350ms pour rester réactif et fluide).
3. La courbe d'accélération exacte (Bézier curve : ex: cubic-bezier(0.16, 1, 0.3, 1) pour un effet spring naturel).
4. Code complet prêt à l'emploi avec respect de prefers-reduced-motion pour l'accessibilité.`,
    prompt_ar: `بصفتك مصمم حركات واجهات تفاعلية (Motion UI Designer):
صمم الحركة التفاعلية الدقيقة لـ:
- المكون البرمجي: [المكون] (زر إضافة للسلة، فتح نافذة منبثقة، علامة صح النجاح)
- الأداة: CSS أو Framer Motion

المطلوب بدقة:
1. الخصائص المتحركة (الشفافية، التكبير، الإزاحة).
2. المدة الزمنية بالملي ثانية (من 150 إلى 300 ملي ثانية لضمان السرعة).
3. منحنى التسارع الفيزيائي الدقيق (Cubic-Bézier) لإعطاء ارتداد ناعم ومريح للعين.
4. الكود الجاهز للتنفيذ مع دعم خيار تقليل الحركة لذوي الحساسية البصرية.`,
    level: 'intermediaire',
    ai_compatibility: ['Cursor', 'Claude', 'ChatGPT'],
    tags: ['motion ui', 'micro-interactions', 'framer motion', 'css animation', 'ui']
  },
  {
    id: 'pml-med-15',
    slash: '/packaging-dieline-design',
    title_fr: 'Concepteur Packaging & Habillage Produit',
    title_ar: 'تصميم علب المنتجات وتخطيط خطوط القص Packaging Dieline',
    category_id: 'media-design',
    category_fr: 'Images, vidéos et design',
    category_ar: 'الصور، الفيديو والتصميم الإبداعي',
    function_fr: 'Structurer l’expérience de déballage (Unboxing) et la hiérarchie visuelle d’un packaging physique',
    function_ar: 'تخطيط علبة المنتج والواجهات الخارجية وتجربة فتح الصندوق المميزة',
    prompt_fr: `Tu es un Ingénieur Packaging et Designer Industriel.
Conçois l'habillage et la structure d'emballage pour :
- Produit : [PRODUIT]
- Positionnement et matériaux : [MATERIAUX] (Carton kraft recyclé, boîte rigide à fermeture aimantée, étiquette dorée à chaud)
- Dimensions estimées : [DIMENSIONS]

Livrables de conception :
1. Structure des 6 faces de l'emballage (Face avant percutante, face arrière informative et légale, tranches latérales).
2. Conception de l'expérience d'Unboxing (Message secret à l'ouverture du rabat, maintien du produit sans plastique).
3. Mentions légales obligatoires (Code-barres, logos de recyclage, volume net, composition).
4. Prompt pour générer le mock-up 3D réaliste du packaging fermé et ouvert.`,
    prompt_ar: `أنت مهندس ومصمم علب ومنتجات صناعية (Packaging Designer):
صمم تجربة وشكل علبة المنتج لـ:
- نوع المنتج: [المنتج]
- الخامات المستخدمة: [الخامات] (كرتون فاخر، إغلاق مغناطيسي، طباعة حرارية ذهبية)
- الأبعاد التقريبية: [الأبعاد]

المطلوب:
1. توزيع محتوى الأوجه الستة للعلبة (الواجهة الرئيسية الجذابة، الخلفية القانونية والبيانات).
2. هندسة تجربة فتح الصندوق (Unboxing) وعبارة ترحيبية ملهمة عند فتح الغطاء.
3. الرموز والبيانات الإلزامية (الباركود، علامات التدوير، الوزن الصافي).
4. أمر التوليد للحصول على نموذج ثلاثي الأبعاد (Mockup) للعلبة مغلقة ومفتوحة.`,
    level: 'intermediaire',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['packaging', 'unboxing', 'industrial design', 'print design', 'mockup']
  },

  // ==========================================
  // CATÉGORIE 9 : RÉDACTION PROFESSIONNELLE (15 prompts)
  // ==========================================
  {
    id: 'pml-wri-01',
    slash: '/write-exec-report',
    title_fr: 'Rédacteur de Rapport d’Audit Institutionnel',
    title_ar: 'صياغة التقارير المؤسسية وتقارير التدقيق الإداري',
    category_id: 'writing',
    category_fr: 'Rédaction professionnelle',
    category_ar: 'الكتابة الاحترافية والتحرير',
    function_fr: 'Rédiger un rapport formel d’audit avec constats, risques et recommandations chiffrées',
    function_ar: 'إعداد تقرير تدقيق رسمي رصين يتضمن الملاحظات والمخاطر والتوصيات',
    prompt_fr: `Tu es un Auditeur Général et Rédacteur Institutionnel.
Rédige le rapport d'audit formel pour la mission suivante :
- Entité auditée : [ENTITE]
- Périmetre de l'audit : [PERIMETRE]
- Principaux dysfonctionnements constatés : [CONSTATS]

Structure du rapport officiel :
1. Synthèse exécutive à l'attention du Conseil d'Administration.
2. Méthodologie et périmètre des contrôles effectués.
3. Fiches de constats détaillées (Constat factuel, Risque induit, Cause racine, Niveau de criticité).
4. Matrice de recommandations opérationnelles avec calendrier de mise en œuvre et responsables désignés.`,
    prompt_ar: `بصفتك مدققاً عاماً وخبيراً في الصياغة المؤسسية الرسمية:
اكتب تقرير التدقيق الإداري للجهة التالية:
- الجهة الخاضعة للتدقيق: [الجهة]
- نطاق وموضوع الفحص: [النطاق]
- أهم الملاحظات والخلل المرصود: [الملاحظات]

الهيكل المؤسسي للتقرير:
1. ملخص تنفيذي موجه لمجلس الإدارة.
2. منهجية ونطاق الفحص الميداني.
3. بطاقات الملاحظات التفصيلية (الملاحظة الواقعية، المخاطر المترتبة، السبب، ودرجة الخطورة).
4. مصفوفة التوصيات الإجرائية المحددة بجدول زمني ومسؤوليات التنفيذ.`,
    level: 'expert',
    ai_compatibility: ['Claude', 'ChatGPT', 'Gemini'],
    tags: ['audit report', 'institutional writing', 'governance', 'executive report']
  },
  {
    id: 'pml-wri-02',
    slash: '/write-speechwriter',
    title_fr: 'Plume de Dirigeant & Discours d’Éloquence (Speechwriter)',
    title_ar: 'كتابة الخطابات الرسمية والكلمات الافتتاحية للمسؤولين',
    category_id: 'writing',
    category_fr: 'Rédaction professionnelle',
    category_ar: 'الكتابة الاحترافية والتحرير',
    function_fr: 'Rédiger un discours inspirant captivant un auditoire avec rhétorique et émotion',
    function_ar: 'صياغة خطاب مؤثر وبليغ يحرك مشاعر الحاضرين ويخلد في الذاكرة',
    prompt_fr: `Tu es la Plume officielle (Speechwriter) d'une personnalité publique ou d'un dirigeant de premier plan.
Rédige un discours marquant pour l'occasion suivante :
- Événement : [EVENEMENT] (Inauguration, convention annuelle, hommage solennel, remise de prix)
- Auditoire présent : [AUDITOIRE]
- Idée maîtresse et message d'espoir à transmettre : [MESSAGE]
- Durée de prise de parole : [DUREE] (ex: 7 minutes)

Consignes de rhétorique :
1. Rythme cadencé avec indications scéniques entre crochets [pause], [regard appuyé], [sourire].
2. Utilisation maîtrisée des figures de style (Anaphores, métaphores puissantes, tricolon / règle de trois).
3. Anecdote humaine incarnée au milieu du discours pour créer une connexion émotionnelle sincère.
4. Envolée finale mémorable suscitant une ovation de la salle.`,
    prompt_ar: `بصفتك كاتب الخطابات الرسمي (Speechwriter) لكبار الشخصيات والقيادات:
اكتب خطاباً استثنائياً للمناسبة التالية:
- المناسبة: [المناسبة] (مؤتمر سنوي، حفل تدشين، تكريم رسمي)
- الحضور المستمع: [الحضور]
- الفكرة الجوهرية والرسالة المراد ترسيخها: [الرسالة]
- مدة الإلقاء: [المدة] (مثال: 7 دقائق)

المعايير البلاغية والخطابية:
1. ضبط إيقاع التحدث مع وضع إرشادات مسرحية بين قوسين [وقفة للتأمل]، [نظرة للحضور].
2. توظيف أساليب البلاغة والبيان والمجازات المؤثرة.
3. قصة إنسانية مؤثرة في منتصف الخطاب لبناء جسر وجداني صادق مع الجمهور.
4. خاتمة حماسية ترتفع فيها النبرة وتترك أثراً مدوياً وتصفيقاً حاراً.`,
    level: 'expert',
    ai_compatibility: ['Claude', 'ChatGPT', 'Gemini'],
    tags: ['speechwriting', 'eloquence', 'public speaking', 'leadership', 'rhetoric']
  },
  {
    id: 'pml-wri-03',
    slash: '/write-formal-dispute',
    title_fr: 'Rédacteur Lettre de Mise en Demeure & Recours Amiable',
    title_ar: 'صياغة خطابات الإنذار الرسمي والمطالبات القانونية الودية',
    category_id: 'writing',
    category_fr: 'Rédaction professionnelle',
    category_ar: 'الكتابة الاحترافية والتحرير',
    function_fr: 'Rédiger un courrier juridique ferme et irréprochable avant poursuite contentieuse',
    function_ar: 'كتابة إنذار قانوني شديد اللهجة ومحكم الصياغة لاسترداد الحقوق دون نزاع قضائي',
    prompt_fr: `Agis comme un Juriste Spécialiste du Recouvrement et Pré-Contentieux.
Rédige une lettre recommandée avec accusé de réception (LRAR) valant mise en demeure formelle :
- Destinataire : [DESTINATAIRE]
- Origine du litige : [LITIGE] (Facture impayée, inexécution contractuelle, malfaçon)
- Montant ou obligation réclamée : [MONTANT_OBLIGATION]
- Échanges infructueux précédents : [HISTORIQUE]

Exigences juridiques :
1. Rappel chronologique et neutre des faits et des engagements contractuels bafoués.
2. Visa des articles de loi applicables et mise en demeure expresse assortie d'un délai strict (ex: 8 jours francs).
3. Mention sans ambiguïté des suites judiciaires en cas d'inaction (saisine de la juridiction compétente, intérêts de retard, dépens).
4. Ton posé, ferme et dénué de toute agressivité personnelle mais juridiquement implacable.`,
    prompt_ar: `بصفتك مستشاراً قانونياً متخصصاً في المطالبات وحل النزاعات:
اكتب إشعاراً رسمياً مسجلاً وإنذاراً بالسداد قبل اللجوء للقضاء:
- الطرف الموجه إليه: [الطرف]
- أصل النزاع: [النزاع] (مستحقات متأخرة، إخلال ببنود العقد، عيوب تنفيذ)
- المبلغ أو الالتزام المطالب به: [المبلغ]
- المراسلات السابقة غير المستجابة: [السجل]

الشروط القانونية:
1. السرد التسلسلي للوقائع والبنود العقدية التي تم الإخلال بها بموضوعية تامة.
2. الإشارة للمواد النظامية المنطبقة وتحديد مهلة نهائية صارمة (مثال: 8 أيام عمل).
3. التنبيه باتخاذ الإجراءات القضائية في حال عدم الوفاء (رفع الدعوى، المطالبة بالتعويض وأتعاب المحاماة).
4. لغة رصينة وقوية وخالية من التهديد الشخصي لكنها حاسمة نظامياً.`,
    level: 'intermediaire',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['legal notice', 'dispute', 'formal letter', 'debt recovery', 'law']
  },
  {
    id: 'pml-wri-04',
    slash: '/write-white-paper-b2b',
    title_fr: 'Auteur Livre Blanc B2B & Guide d’Autorité',
    title_ar: 'تأليف الكتب البيضاء B2B وأدلة الريادة المعرفية White Papers',
    category_id: 'writing',
    category_fr: 'Rédaction professionnelle',
    category_ar: 'الكتابة الاحترافية والتحرير',
    function_fr: 'Structurer et rédiger un livre blanc à haute valeur ajoutée générant des leads qualifiés',
    function_ar: 'كتابة تقرير معرفي مرجعي يبرز خبرة الشركة ويجذب كبار العملاء المؤسسيين',
    prompt_fr: `Tu es un Rédacteur B2B expert en Thought Leadership et Livres Blancs.
Rédige le plan détaillé et le premier chapitre complet d'un livre blanc pour :
- Entreprise émettrice : [ENTREPRISE]
- Sujet d'expertise : [SUJET]
- Cible : Dirigeants et décideurs [CIBLE]

Contenu attendu :
1. Titre captivant axé sur les mutations du marché et sous-titre prometteur.
2. Sommaire structuré en 4 grands chapitres d'analyse.
3. Chapitre 1 complet : Chiffres clés du secteur, diagnostic des nouvelles vulnérabilités des entreprises et pourquoi les méthodes du passé ne fonctionnent plus.
4. Encadré "Méthodologie et avis d'expert" apportant une crédibilité incontestable.`,
    prompt_ar: `أنت كاتب محتوى مؤسسي وخبير في إعداد الكتب البيضاء (White Papers):
قم بصياغة الفهرس والفصل الأول الكامل لكتاب أبيض لـ:
- الشركة الناشرة: [الشركة]
- موضوع الخبرة: [الموضوع]
- الجمهور المستهدف: الرؤساء التنفيذيون ومدراء [القطاع]

المطلوب:
1. عنوان رئيسي احترافي يعكس تحولات السوق وعنوان فرعي يبرز الفائدة.
2. فهرس متكامل من 4 فصول استراتيجية.
3. كتابة الفصل الأول كاملاً: بالأرقام والدراسات الحديثة وتشخيص التحديات الحالية ولماذا باتت الحلول التقليدية غير مجدية.
4. إطار مخصص لرأي الخبير والدراسة الميدانية لإضفاء مصداقية مطلقة.`,
    level: 'expert',
    ai_compatibility: ['Claude', 'ChatGPT', 'Gemini'],
    tags: ['white paper', 'b2b content', 'thought leadership', 'lead generation', 'writing']
  },
  {
    id: 'pml-wri-05',
    slash: '/write-press-article-op-ed',
    title_fr: 'Tribune d’Opinion & Tribune Libre (Op-Ed)',
    title_ar: 'كتابة المقالات الافتتاحية ومقالات الرأي للصحف الكبرى Op-Ed',
    category_id: 'writing',
    category_fr: 'Rédaction professionnelle',
    category_ar: 'الكتابة الاحترافية والتحرير',
    function_fr: 'Rédiger une tribune d’opinion percutante prête pour Le Monde, Les Échos ou Forbes',
    function_ar: 'صياغة مقال رأي تحليلي رصين ينشر في كبريات الصحف والمجلات العالمية',
    prompt_fr: `Rédige une tribune d'opinion (Op-Ed) de 800 mots destinée à la presse économique :
- Auteur et fonction : [AUTEUR]
- Sujet d'actualité rebondi : [ACTUALITE]
- Thèse défendue à contre-courant : [THESE]

Exigences de style presse de référence :
1. Accroche d'actualité immédiate reliant le sujet au débat sociétal ou économique en cours.
2. Argumentation progressive en 3 temps (Le constat trompeur, le mécanisme réel dévoilé, la solution collective).
3. Style dense, précis, sans jargon inutile, avec un ton engagé et visionnaire.
4. Conclusion forte appelant à un sursaut ou une décision politique/économique courageuse.`,
    prompt_ar: `اكتب مقال رأي وافتتاحية صحفية رصينة (Op-Ed) في حدود 800 كلمة:
- الكاتب وصفته المهنية: [الكاتب]
- القضية الراهنة محل التعليق: [القضية]
- وجهة النظر الجريئة المطروحة: [الرأي]

معايير الصحافة الكبرى:
1. استهلال صحفي يربط الموضوع مباشرة بحدث أو نقاش اقتصادي ساخن.
2. بناء الحجة في 3 محاور متسلسلة (المظاهر المضللة، حقيقة الواقع، والحل المقترح).
3. أسلوب فصيح، رصين، بليغ وخالٍ من التعقيدات اللفظية.
4. خاتمة ملهمة تدعو إلى تغيير حقيقي واتخاذ قرارات شجاعة للمستقبل.`,
    level: 'intermediaire',
    ai_compatibility: ['Claude', 'ChatGPT', 'Gemini'],
    tags: ['op-ed', 'journalism', 'opinion piece', 'press', 'thought leadership']
  },
  {
    id: 'pml-wri-06',
    slash: '/write-case-study-hero',
    title_fr: 'Rédacteur Étude de Cas Client (Success Story)',
    title_ar: 'كتابة قصص نجاح العملاء ودراسات الحالة Case Studies',
    category_id: 'writing',
    category_fr: 'Rédaction professionnelle',
    category_ar: 'الكتابة الاحترافية والتحرير',
    function_fr: 'Structurer un cas client valorisant le retour sur investissement chiffré',
    function_ar: 'تحويل تجربة العميل إلى قصة نجاح ملهمة تدعم المبيعات وتبرز العائد المالي',
    prompt_fr: `Tu es un Spécialiste du Content Marketing B2B.
Rédige une étude de cas client captivante selon le modèle Situation - Défi - Solution - Résultats :
- Client : [CLIENT] (secteur et taille)
- Problème critique initial : [PROBLEME]
- Notre solution déployée : [SOLUTION]
- Résultats chiffrés obtenus (ROI, temps gagné, CA additionnel) : [RESULTATS]

Détaille :
1. Titre accrocheur mettant en avant la métrique spectaculaire (ex: "Comment X a réduit ses coûts de 42% en 90 jours").
2. Encadré récapitulatif des faits (Client, Défi, Résultat en 3 chiffres clés).
3. Témoignage client mis en valeur (Citation percutante du directeur client).
4. Le déroulement pas-à-pas de l'intégration et la transformation vécue au quotidien.`,
    prompt_ar: `بصفتك خبيراً في إعداد دراسات الحالة وقصص نجاح العملاء (Case Studies):
اكتب دراسة حالة مقنعة وفق هيكل (الوضع السابق - التحدي - الحل - النتائج بالأرقام):
- العميل: [العميل]
- المشكلة الكبرى السابقة: [المشكلة]
- الحل المطبق من قبلنا: [الحل]
- النتائج المحققة بالأرقام (العائد المالي، توفير الوقت): [النتائج]

المحتوى المطلوب:
1. عنوان رئيسي يبرز الإنجاز الرقمي الأكبر في جملة مشوقة.
2. بطاقة بيانات سريعة (العميل، التحدي، النتائج في 3 أرقام).
3. اقتباس قوي على لسان المسؤول التنفيذي للعميل يشيد بالتجربة.
4. خطوات التنفيذ الميداني وكيف غير هذا الحل مسار العمليات لديهم.`,
    level: 'intermediaire',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['case study', 'success story', 'b2b marketing', 'roi', 'social proof']
  },
  {
    id: 'pml-wri-07',
    slash: '/write-internal-memo-change',
    title_fr: 'Rédacteur Note Interne de Conduite du Changement',
    title_ar: 'صياغة المذكرات الداخلية لإدارة التغيير المؤسسي',
    category_id: 'writing',
    category_fr: 'Rédaction professionnelle',
    category_ar: 'الكتابة الاحترافية والتحرير',
    function_fr: 'Annoncer une transformation majeure à ses équipes en désamorçant les inquiétudes',
    function_ar: 'إخطار الموظفين بالتحولات الكبرى في المؤسسة وبث الطمأنينة وتحفيز التعاون',
    prompt_fr: `Agis comme un Directeur Général et Expert en Communication Interne.
Rédige une note interne à l'ensemble du personnel pour annoncer :
- Changement annoncé : [CHANGEMENT] (Réorganisation des équipes, adoption d'un nouvel ERP/IA, fusion, déménagement)
- Raison stratégique impérative : [RAISON]
- Impact direct pour les collaborateurs : [IMPACT]

Exigences de bienveillance et de leadership :
1. Franchise absolue sur les raisons du changement sans langue de bois managériale.
2. Reconnaissance des efforts passés et valorisation des compétences existantes.
3. Calendrier d'accompagnement clair (formations prévues, ateliers d'écoute, référents désignés).
4. FAQ anticipant avec honnêteté les 3 questions les plus anxiogènes des équipes.`,
    prompt_ar: `بصفتك مديراً عاماً وخبيراً في التواصل الداخلي وإدارة التغيير:
اكتب مذكرة إدارية موجهة لجميع الموظفين للإعلان عن:
- التحول المرتقب: [التحول] (إعادة هيكلة، نظام برمجي جديد، انتقال لمقر جديد)
- الأسباب الاستراتيجية الحتمية: [الأسباب]
- الأثر المباشر على بيئة العمل: [الأثر]

المعايير القيادية:
1. الشفافية والمكاشفة الصادقة دون مصطلحات إدارية غامضة.
2. تثمين جهود الفريق السابقة والتأكيد على مكانتهم في المرحلة القادمة.
3. خطة الدعم والتأهيل التدريبي وفتح قنوات الاستماع المباشر.
4. إجابة واضحة وصريحة عن أكثر 3 مخاوف تدور في أذهان الموظفين.`,
    level: 'intermediaire',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['internal memo', 'change management', 'leadership', 'communication', 'hr']
  },
  {
    id: 'pml-wri-08',
    slash: '/write-job-offer-star',
    title_fr: 'Rédacteur Fiche de Poste & Offre d’Emploi Irrésistible',
    title_ar: 'كتابة إعلانات التوظيف الجاذبة للكفاءات النادرة',
    category_id: 'writing',
    category_fr: 'Rédaction professionnelle',
    category_ar: 'الكتابة الاحترافية والتحرير',
    function_fr: 'Rédiger une annonce d’emploi qui attire les meilleurs talents passifs',
    function_ar: 'صياغة توصيف وظيفي ملهم يجذب المتميزين ويعكس ثقافة المؤسسة',
    prompt_fr: `Tu es un Talent Acquisition Leader d'élite.
Rédige une offre d'emploi mémorable pour recruter notre futur :
- Intitulé du poste : [INTITULE]
- Missions majeures des 6 premiers mois : [MISSIONS]
- Salaire, avantages et télétravail : [AVANTAGES]

Structure moderne rompant avec les fiches austères :
1. Accroche sur l'impact réel du poste sur la mission de l'entreprise.
2. "À quoi ressemblera votre semaine type" au lieu de longues listes de tâches rébarbatives.
3. Ce que nous cherchons (Compétences réelles et mindset plutôt qu'une liste de diplômes obsolètes).
4. Notre offre transparente (Fourchette de rémunération, politique remote, matériel fourni, culture d'équipe).
5. Processus de recrutement en 3 étapes claires avec engagement de réponse rapide.`,
    prompt_ar: `أنت مسؤول استقطاب الكفاءات والمواهب المتميزة (Talent Acquisition):
اكتب إعلان توظيف استثنائي لـ:
- المسمى الوظيفي: [المسمى]
- المهام الكبرى خلال الأشهر الستة الأولى: [المهام]
- الراتب والمزايا وبيئة العمل عن بعد: [المزايا]

الهيكل العصري الجاذب:
1. مقدمة ملهمة عن الأثر الحقيقي الذي سيحدثه الموظف في هذا الدور.
2. "كيف سيبدو أسبوعك المعتاد معنا" بدلاً من سرد المسؤوليات الجافة.
3. المواصفات والعقلية المنشودة بالتركيز على المهارات العملية لا الشهادات الورقية.
4. الشفافية التامة في المزايا (نطاق الراتب، الدعم التقني، سياسة العمل المرن).
5. مراحل التوظيف الثلاث المحددة مع التزام بالرد على الجميع.`,
    level: 'debutant',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['job description', 'recruitment', 'hr', 'hiring', 'talent acquisition']
  },
  {
    id: 'pml-wri-09',
    slash: '/write-bio-executive-summary',
    title_fr: 'Rédacteur Biographie Professionnelle & Profil Conférence',
    title_ar: 'كتابة السيرة الذاتية المهنية والموجز التعريفي للمؤتمرات Bio',
    category_id: 'writing',
    category_fr: 'Rédaction professionnelle',
    category_ar: 'الكتابة الاحترافية والتحرير',
    function_fr: 'Rédiger une bio professionnelle percutante en 3 longueurs : 1 ligne, 1 paragraphe, 1 page',
    function_ar: 'صياغة نبذة شخصية احترافية في 3 مقاسات للمؤتمرات والكتب والمواقع',
    prompt_fr: `Rédige une biographie professionnelle prestigieuse pour :
- Personne : [NOM_PRENOM]
- Titre actuel et domaines d'expertise : [EXPERTISE]
- Réalisations majeures et distinctions : [REALISATIONS]

Fournis les 3 versions prêtes à l'emploi :
1. Version Micro (1 phrase percutante de 15 mots pour les réseaux sociaux et bas de page).
2. Version Courte (1 paragraphe de 100 mots pour les programmes de conférences et introductions d'articles).
3. Version Complète (300 mots structurés avec parcours, vision directrice et engagements).`,
    prompt_ar: `اكتب نبذة مهنية وسيرة ذاتية مكثفة (Executive Bio) لـ:
- الاسم: [الاسم]
- المنصب ومجال التميز: [المجال]
- أهم الإنجازات والجوائز: [الإنجازات]

المطلوب في 3 أحجام جاهزة للاستخدام:
1. النسخة فائقة الإيجاز (جملة واحدة مركزة في 15 كلمة لوسائل التواصل).
2. النسخة المتوسطة (فقرة واحدة من 100 كلمة لكتيبات المؤتمرات ومقدمات البرامج).
3. النسخة الشاملة (300 كلمة تتناول المسار المهني، الرؤية القيادية، والإنجازات).`,
    level: 'debutant',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['bio', 'executive profile', 'personal branding', 'conference', 'about me']
  },
  {
    id: 'pml-wri-10',
    slash: '/write-meeting-minutes-pro',
    title_fr: 'Rédacteur Procès-Verbal de Réunion Officiel (PV)',
    title_ar: 'صياغة محاضر الاجتماعات الرسمية وقرارات اللجان PV',
    category_id: 'writing',
    category_fr: 'Rédaction professionnelle',
    category_ar: 'الكتابة الاحترافية والتحرير',
    function_fr: 'Transformer des notes éparses en un procès-verbal juridique et opérationnel irréprochable',
    function_ar: 'تحويل الملاحظات المسجلة إلى محضر اجتماع رسمي يثبت القرارات والتصويت والمهام',
    prompt_fr: `Tu es un Secrétaire de Séance chevronné.
Transforme les notes brutes suivantes en un Procès-Verbal de réunion formel :
[NOTES_REUNION]
Date, lieu et participants : [INFOS_SESSION]

Structure demandée :
1. En-tête statutaire (Ordre du jour, présidence, liste des présents, excusés et quorum atteint).
2. Synthèse objective des débats pour chaque point de l'ordre du jour (sans retranscrire le bavardage, uniquement les arguments de fond).
3. Formulation exacte des résolutions adoptées avec résultats des votes (Pour, Contre, Abstention).
4. Tableau récapitulatif des décisions : [Action] | [Porteur du dossier] | [Date d'échéance].`,
    prompt_ar: `بصفتك أمين سر معتمد للاجتماعات ومجالس الإدارة:
قم بصياغة محضر اجتماع رسمي من الملاحظات التالية:
[الملاحظات]
التاريخ، المكان والحضور: [المعلومات]

الهيكل الرسمي المطلوب:
1. الترويسة النظامية (جدول الأعمال، رئيس الجلسة، الحضور، الغائبون، واكتمال النصاب).
2. ملخص موضوعي للنقاشات لكل بند (التركيز على جوهر الآراء واستبعاد الاستطراد).
3. الصياغة القانونية الدقيقة للقرارات ونتائج التصويت (موافقة، معارضة، امتناع).
4. جدول متابعة التكليفات: [المهمة] | [المسؤول المكلف] | [الموعد النهائي].`,
    level: 'intermediaire',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['meeting minutes', 'governance', 'board meeting', 'documentation', 'action items']
  },
  {
    id: 'pml-wri-11',
    slash: '/write-crisis-press-statement',
    title_fr: 'Rédacteur Déclaration de Presse d’Urgence',
    title_ar: 'كتابة البيانات الصحفية العاجلة وتطويق الأزمات الإعلامية',
    category_id: 'writing',
    category_fr: 'Rédaction professionnelle',
    category_ar: 'الكتابة الاحترافية والتحرير',
    function_fr: 'Formuler une prise de parole publique en situation d’urgence pour protéger la réputation',
    function_ar: 'صياغة بيان رسمي سريع وحذر عند وقوع حوادث أو أزمات طارئة لحماية المكانة',
    prompt_fr: `Tu es le Directeur de la Communication de Crise d'un grand groupe.
Rédige la déclaration de presse officielle (Holding Statement) suite à l'incident survenu :
- Nature de l'incident : [INCIDENT]
- Ce que nous savons avec certitude : [FAITS_CONFIRMES]
- Ce qui fait l'objet d'une enquête en cours : [POINTS_EN_COURS]

Règles de communication de crise :
1. Empathie immédiate envers les personnes impactées en tout premier lieu.
2. Reconnaissance des faits avérés sans spéculation hasardeuse sur les causes.
3. Présentation des mesures concrètes déjà prises pour sécuriser la situation.
4. Engagement ferme de transparence et annonce du prochain point de situation officiel.`,
    prompt_ar: `أنت مدير الاتصال المؤسسي وإدارة الأزمات:
اكتب البيان الصحفي التمهيدي العاجل (Holding Statement) إثر الحادثة التالية:
- طبيعة الحادث أو المشكلة: [الحادث]
- الحقائق المؤكدة رسمياً حتى الآن: [الحقائق]
- الأمور التي ما زالت قيد التحقيق: [التحقيقات]

معايير بيانات الطوارئ:
1. التعبير الصادق عن التعاطف مع المتضررين كأولوية أولى.
2. ذكر الوقائع الثابتة بوضوح مع الامتناع عن التكهن بالأسباب قبل اكتمال التحقيقات.
3. استعراض التدابير الفورية المتخذة للسيطرة على الموقف.
4. التأكيد على التزام المؤسسة بالشفافية الكاملة وتحديد موعد الإحاطة القادمة.`,
    level: 'intermediaire',
    ai_compatibility: ['Claude', 'ChatGPT', 'Gemini'],
    tags: ['crisis communication', 'press statement', 'public relations', 'media']
  },
  {
    id: 'pml-wri-12',
    slash: '/write-non-disclosure-agreement',
    title_fr: 'Rédacteur Accord de Confidentialité (NDA)',
    title_ar: 'صياغة اتفاقيات حماية وسرية المعلومات (NDA)',
    category_id: 'writing',
    category_fr: 'Rédaction professionnelle',
    category_ar: 'الكتابة الاحترافية والتحرير',
    function_fr: 'Rédiger les clauses d’un accord de non-divulgation unilatéral ou bilatéral',
    function_ar: 'إعداد وثيقة قانونية محكمة لحماية الأفكار والأسرار التجارية والمشاريع المشتركة',
    prompt_fr: `Tu es un Juriste d'Affaires International.
Rédige un Accord de Confidentialité (NDA) équilibré pour :
- Parties prenantes : [PARTIES] (Partie divulgatrice et partie réceptrice)
- Objet des discussions confidentielles : [OBJET]
- Durée de l'engagement de secret : [DUREE] (ex: 2 ans après fin des discussions)

Clauses indispensables à rédiger :
1. Définition exhaustive des "Informations Confidentielles" et des exclusions usuelles (informations déjà publiques, développées indépendamment).
2. Obligations de la partie réceptrice (standard de diligence, restriction de communication aux seuls collaborateurs nécessaires).
3. Sort des informations à la fin des discussions (Destruction certifiée ou restitution).
4. Droit applicable et attribution de juridiction en cas de litige.`,
    prompt_ar: `بصفتك مستشاراً في قانون الأعمال والعقود التجارية:
اكتب اتفاقية عدم إفصاح وسرية معلومات (NDA) لـ:
- الأطراف: [الأطراف] (الطرف المفصح والطرف المتلقي)
- موضوع المفاوضات السرية: [الموضوع]
- مدة سريان السرية: [المدة] (مثال: عامان بعد انتهاء النقاشات)

البنود الأساسية:
1. التعريف الدقيق لـ "المعلومات السرية" والاستثناءات الشائعة (ما هو معلن للعامة مسبقاً).
2. التزامات الطرف المتلقي ومعايير الحفاظ على البيانات وحظر إفشائها.
3. مصير الوثائق بعد انتهاء المحادثات (الإتلاف الموثق أو إعادة السجلات).
4. القانون الواجب التطبيق والاختصاص القضائي عند حدوث نزاع.`,
    level: 'intermediaire',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['nda', 'contracts', 'legal', 'confidentiality', 'business law']
  },
  {
    id: 'pml-wri-13',
    slash: '/write-faq-knowledge-base',
    title_fr: 'Rédacteur Base de Connaissances & FAQ Intuitive',
    title_ar: 'كتابة الأسئلة الشائعة وقاعدة المعرفة الذاتية FAQ',
    category_id: 'writing',
    category_fr: 'Rédaction professionnelle',
    category_ar: 'الكتابة الاحترافية والتحرير',
    function_fr: 'Rédiger une FAQ complète et claire résolvant 80% des questions utilisateurs en autonomie',
    function_ar: 'صياغة إجابات مباشرة ومبسطة لأكثر الأسئلة المتكررة لتمكين المستخدم من خدمة نفسه',
    prompt_fr: `Rédige la Foire Aux Questions (FAQ) pour le service suivant :
- Service / Produit : [SERVICE]
- 5 thématiques clés à couvrir : [THEMATIQUES] (Tarifs, Sécurité des données, Installation, Résiliation, Support)

Directives rédactionnelles :
1. Titres des questions formulés à la 1re personne du singulier tels que l'utilisateur se les pose (ex: "Comment puis-je récupérer mes données ?").
2. Réponses concises (moins de 100 mots par question) allant droit au but dès la première phrase.
3. Intégration de puces d'action par étapes et liens utiles.
4. Ton rassurant, transparent et pédagogue.`,
    prompt_ar: `قم بكتابة قسم الأسئلة الشائعة (FAQ) وقاعدة المعرفة لـ:
- الخدمة أو المنتج: [الخدمة]
- 5 محاور أساسية للتغطية: [المحاور] (الأسعار، أمان البيانات، التثبيت، الإلغاء، الدعم الفني)

معايير الصياغة:
1. صياغة الأسئلة بلسان المستخدم نفسه (مثال: "كيف يمكنني استعادة بياناتي؟").
2. إجابات مباشرة وموجزة (أقل من 100 كلمة) تقدم الحل في السطر الأول.
3. خطوات مرقمة واضحة وروابط إرشادية.
4. نبرة مريحة ومبسطة تزيل أي لبس لدى العميل.`,
    level: 'debutant',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['faq', 'knowledge base', 'customer support', 'documentation', 'copywriting']
  },
  {
    id: 'pml-wri-14',
    slash: '/write-manifesto-brand',
    title_fr: 'Rédacteur Manifeste de Marque Émotionnel',
    title_ar: 'كتابة مانيسفتو العلامة التجارية والبيان الإلهامي Manifesto',
    category_id: 'writing',
    category_fr: 'Rédaction professionnelle',
    category_ar: 'الكتابة الاحترافية والتحرير',
    function_fr: 'Écrire un manifeste vibrant fédérant clients et employés autour d’une cause noble',
    function_ar: 'صياغة وثيقة إلهامية تعلن رسالة وقيم الشركة للعالم بأسلوب يحبس الأنفاس',
    prompt_fr: `Tu es un Concepteur-Rédacteur en Agence de Branding de renommée mondiale (style Apple "Think Different" ou Nike "Just Do It").
Rédige le Manifeste de notre marque :
- Nom et combat de la marque : [MARQUE]
- Ce contre quoi nous nous battons : [ENNEMI_COMMUN] (La médiocrité, la bureaucratie, la pollution, la complexité)
- La vision du monde que nous bâtissons : [VISION]

Directives poétiques et percutantes :
1. Texte en vers libres ou prose poétique cadencée de 200 à 250 mots.
2. Choix d'un vocabulaire puissant, sans fioritures superflues, célébrant les pionniers et les audacieux.
3. Rythme montant créant un sentiment d'appartenance irrépressible.
4. Phrase de conclusion foudroyante qui deviendra le cri de ralliement de la marque.`,
    prompt_ar: `أنت كاتب إعلانات أسطوري (على غرار حملة آبل "فكر بشكل مختلف" ونايكي):
اكتب مانيسفتو (Manifesto) العلامة التجارية لـ:
- اسم العلامة ورسالتها: [العلامة]
- التحدي أو المشكلة التي نحاربها: [المشكلة] (الروتين، التعقيد، الهدر)
- العالم الأفضل الذي نصنعه لعملائنا: [الرؤية]

المعايير الأدبية:
1. صياغة حماسية بنثر شعري متدفق في حدود 200 إلى 250 كلمة.
2. مفردات جزلة وقوية تلامس الطموح الإنساني وتلهم الشجعان.
3. تصاعد إيقاعي يشعر القارئ بأنه جزء من حركة تغيير كبرى.
4. جملة ختامية صاعقة تكون الشعار والنداء الأيقوني الدائم للعلامة.`,
    level: 'intermediaire',
    ai_compatibility: ['Claude', 'ChatGPT', 'Gemini'],
    tags: ['manifesto', 'branding', 'storytelling', 'inspiration', 'copywriting']
  },
  {
    id: 'pml-wri-15',
    slash: '/write-newsletter-welcome-flow',
    title_fr: 'Architecte Séquence Email de Bienvenue (Welcome Sequence)',
    title_ar: 'سلسلة رسائل الترحيب التلقائية للمشتركين الجدد Welcome Sequence',
    category_id: 'writing',
    category_fr: 'Rédaction professionnelle',
    category_ar: 'الكتابة الاحترافية والتحرير',
    function_fr: 'Accueillir les nouveaux abonnés, délivrer le lead magnet et créer une relation intime',
    function_ar: 'استقبال المشتركين الجدد في القائمة البريدية وتحويلهم إلى متابعين مخلصين',
    prompt_fr: `Rédige la séquence d'accueil automatisée en 3 emails pour nos nouveaux inscrits :
- Marque ou Créateur : [MARQUE]
- Lead Magnet offert à l'inscription : [LEAD_MAGNET] (Ebook, template, vidéo)
- Thème principal de la newsletter : [THEMATIQUE]

Rédige les 3 emails complets :
1. Email 1 (Immédiat) : Délivrance du cadeau, confirmation de la valeur et consigne d'ajouter l'adresse aux contacts (pour la délivrabilité).
2. Email 2 (J+1) : L'histoire personnelle / Pourquoi cette newsletter existe et la plus grande erreur évitée.
3. Email 3 (J+3) : Le meilleur contenu historique (nos 3 pépites absolues) et question demandant leur plus gros défi actuel.`,
    prompt_ar: `اكتب سلسلة الترحيب البريدية التلقائية (3 رسائل) للمشتركين الجدد:
- اسم العلامة أو صانع المحتوى: [العلامة]
- الهدية المجانية عند التسجيل (Lead Magnet): [الهدية] (كتاب، نموذج، تدريب)
- مجال النشرة البريدية: [المجال]

كتابة الرسائل الثلاث كاملة:
1. الرسالة الأولى (فورية): إرسال رابط الهدية، وتنبيه المشترك لإضافة البريد لجهات الاتصال لضمان وصول الرسائل لصندوق الوارد.
2. الرسالة الثانية (بعد يوم): القصة الشخصية للمؤسس ولماذا أطلق هذه النشرة وأهم درس تعلمه.
3. الرسالة الثالثة (بعد 3 أيام): أفضل 3 منشورات سابقة حازت على ثناء القراء وسؤال للمشترك عن أكبر تحدٍ يواجهه حالياً.`,
    level: 'debutant',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['welcome sequence', 'email marketing', 'onboarding', 'lead magnet', 'nurturing']
  },

  // ==========================================
  // CATÉGORIE 10 : FORMATION ET APPRENTISSAGE (15 prompts)
  // ==========================================
  {
    id: 'pml-edu-01',
    slash: '/edu-feynman-method',
    title_fr: 'Vulgarisateur Méthode Feynman (Explique-moi comme à un enfant)',
    title_ar: 'تبسيط المفاهيم المعقدة بتقنية فاينمان Feynman Technique',
    category_id: 'education',
    category_fr: 'Formation et apprentissage',
    category_ar: 'التعليم والتدريب وتطوير المهارات',
    function_fr: 'Expliquer un concept abstrait avec une analogie visuelle limpide pour un novice complet',
    function_ar: 'شرح أعقد النظريات العلمية والتقنية بأسلوب مبسط وتشبيهات يومية لا تُنسى',
    prompt_fr: `Tu es un Pédagogue de génie appliquant la Méthode de Richard Feynman.
Explique le concept suivant à un profane ou un adolescent de 14 ans sans jargon :
- Concept complexe : [CONCEPT] (ex: Cryptographie asymétrique, informatique quantique, inflation monétaire, CRISPR)

Processus pédagogique en 4 étapes :
1. L'Analogie du quotidien : compare le concept à une situation de la vie de tous les jours (cuisine, circulation, jeux d'enfants).
2. L'Explication pas-à-pas des rouages essentiels en évitant tout terme technique non défini.
3. Pourquoi c'est révolutionnaire ou important dans notre monde moderne.
4. Le test de vérification : une question simple pour vérifier que l'auditeur a véritablement compris le principe.`,
    prompt_ar: `أنت معلم عبقري تطبق تقنية العالم الفيزيائي ريتشارد فاينمان (Feynman Technique):
اشرح المفهوم المعقد التالي لشخص مبتدئ أو فتى في سن الـ 14 دون أي مصطلحات معقدة:
- المفهوم: [المفهوم] (التشفير غير المتماثل، الحوسبة الكمية، التضخم المالي، تعديل الجينات CRISPR)

خطوات الشرح الأربع:
1. التشبيه الواقعي: مقارنة المفهوم بموقف مألوف من الحياة اليومية (المطبخ، إشارات المرور، ألعاب الأطفال).
2. الشرح المتدرج للآلية الأساسية بلغة بيضاء ميسرة.
3. بيان أهمية هذا المفهوم ولماذا يغير العالم اليوم.
4. سؤال فحص الفهم: اختبار سريع وبسيط للتأكد من استيعاب المستمع للفكرة الجوهرية.`,
    level: 'debutant',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['feynman technique', 'education', 'learning', 'pedagogy', 'science']
  },
  {
    id: 'pml-edu-02',
    slash: '/edu-course-syllabus',
    title_fr: 'Concepteur Pédagogique & Syllabus de Formation Complète',
    title_ar: 'تصميم المناهج التدريبية والحقائب التعليمية Syllabus',
    category_id: 'education',
    category_fr: 'Formation et apprentissage',
    category_ar: 'التعليم والتدريب وتطوير المهارات',
    function_fr: 'Créer le programme d’une formation professionnelle de 40 heures structurée en modules progressifs',
    function_ar: 'بناء خطة تدريبية احترافية متدرجة المهارات تجمع بين المعرفة النظرية والتطبيق',
    prompt_fr: `Tu es un Ingénieur Pédagogique Senior.
Conçois le syllabus d'une formation professionnelle intensive :
- Intitulé de la formation : [FORMATION]
- Public cible et prérequis : [CIBLE]
- Durée totale : [DUREE] (ex: 30 heures réparties sur 5 semaines)

Livrables de l'ingénierie :
1. Objectifs pédagogiques opérationnels formulés selon la Taxonomie de Bloom (Connaître, Comprendre, Appliquer, Analyser, Évaluer).
2. Découpage en 5 modules progressifs (avec durée, concepts clés, et ateliers pratiques pour chaque module).
3. Projet fil rouge transversal (Projet final évalué validant la compétence).
4. Grille d'évaluation des acquis et critères de certification.`,
    prompt_ar: `بصفتك مهندس تصميم مناهج تدريبية معتمداً:
قم بإعداد الحقيبة والمنهج التدريبي لدورة احترافية متقدمة:
- اسم الدورة: [الدورة]
- الفئة المستهدفة والمتطلبات السابقة: [الفئة]
- المدة الإجمالية: [المدة] (مثال: 30 ساعة على مدار 5 أسابيع)

المخرجات المنهجية:
1. الأهداف التعليمية الإجرائية وفق هرم بلوم (تذكر، فهم، تطبيق، تحليل، تقييم).
2. تقسيم المنهج إلى 5 وحدات تدريبية (مع الساعات، المفاهيم، وورش العمل التطبيقية).
3. المشروع العملي التراكمي النهائي لاختبار المهارات المكتسبة.
4. مصفوفة تقييم المتدربين ومعايير منح شهادة الاجتياز.`,
    level: 'intermediaire',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['curriculum', 'syllabus', 'course design', 'bloom taxonomy', 'training']
  },
  {
    id: 'pml-edu-03',
    slash: '/edu-interactive-quiz',
    title_fr: 'Générateur de Quiz Interactif & QCM avec Explications',
    title_ar: 'توليد الاختبارات التفاعلية وأسئلة الاختيار من متعدد QCM',
    category_id: 'education',
    category_fr: 'Formation et apprentissage',
    category_ar: 'التعليم والتدريب وتطوير المهارات',
    function_fr: 'Créer un quiz de 10 questions piégeuses avec explications didactiques des mauvaises réponses',
    function_ar: 'بناء اختبارات ذكية تكشف المفاهيم الخاطئة مع شرح تعليمي وافٍ لكل خيار',
    prompt_fr: `Génère un questionnaire à choix multiples (QCM) de 10 questions pour évaluer le niveau sur :
- Sujet d'évaluation : [SUJET]
- Niveau ciblé : [NIVEAU] (Débutant, Intermédiaire, Avancé)

Pour chacune des 10 questions :
1. La question claire posant un cas pratique ou une situation concrète.
2. 4 options de réponse (A, B, C, D) dont 1 seule est correcte et 3 distracteurs plausibles ciblant les erreurs fréquentes.
3. La bonne réponse indiquée.
4. L'explication pédagogique détaillée expliquant POURQUOI la bonne réponse est exacte et POURQUOI chaque distracteur est faux.`,
    prompt_ar: `أنشئ اختباراً تفاعلياً من نوع الاختيار من متعدد (10 أسئلة) لتقييم المهارة في:
- موضوع الاختبار: [الموضوع]
- المستوى: [المستوى] (مبتدئ، متوسط، متقدم)

لكل سؤال من الأسئلة العشرة:
1. نص السؤال المستند إلى حالة واقعية أو مسألة تطبيقية.
2. 4 خيارات (A, B, C, D) منها إجابة صحيحة واحدة و3 مموهات ذكية تستهدف الأخطاء الشائعة.
3. تحديد الإجابة الصحيحة.
4. الشرح التعليمي التفصيلي الذي يوضح سبب صحة الإجابة ولماذا تعد الخيارات الأخرى غير صحيحة.`,
    level: 'debutant',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['quiz', 'qcm', 'assessment', 'mcq', 'learning']
  },
  {
    id: 'pml-edu-04',
    slash: '/edu-anki-flashcards',
    title_fr: 'Créateur de Flashcards pour Répétition Espacée (Anki)',
    title_ar: 'صناعة بطاقات الاستذكار السريع والتكرار المتباعد Anki Flashcards',
    category_id: 'education',
    category_fr: 'Formation et apprentissage',
    category_ar: 'التعليم والتدريب وتطوير المهارات',
    function_fr: 'Générer 15 cartes mémoire recto-verso optimisées pour l’algorithme de mémorisation Anki',
    function_ar: 'إنشاء بطاقات دراسية موجزة تعتمد على التذكر النشط لتحقيق حفظ دائم في الذاكرة',
    prompt_fr: `Tu es un Spécialiste des Neurosciences de l'Apprentissage et de la Répétition Espacée.
À partir du cours ou texte suivant :
[TEXTE_COURS]

Crée 15 flashcards parfaites prêtes à importer dans Anki :
Format demandé : [RECTO] | [VERSO]
Règles strictes :
1. Règle du fait atomique : chaque carte ne pose qu'UNE SEULE question précise (jamais de listes de 5 éléments sur une carte).
2. Utilisation de la technique de masquage de texte (Cloze Deletion : {{c1::mot-clé}}).
3. Questions incitant au rappel actif (Active Recall) plutôt qu'à la simple reconnaissance passive.
4. Ajout d'un indice mnémotechnique au verso pour les notions les plus ardues.`,
    prompt_ar: `بصفتك متخصصاً في علم الأعصاب التعليمي وتقنيات التكرار المتباعد (Spaced Repetition):
من النص أو الدرس التالي:
[نص_الدرس]

أنشئ 15 بطاقة استذكار (Flashcards) جاهزة للاستيراد في برنامج Anki:
التنسيق المطلوب: [الوجه الأول: السؤال] | [الوجه الثاني: الإجابة]
القواعد الصارمة:
1. قاعدة المعلومة الذرية: كل بطاقة تحتوي على معلومة محددة واحدة وتجنب السرد الطويل.
2. استخدام تقنية الفراغات المحجوبة (Cloze Deletion: {{c1::الكلمة}}).
3. صياغة تحفز الاستدعاء النشط للذاكرة (Active Recall).
4. تلميح أو رابط ذهني (Mnemonic) في الإجابة لتسهيل ترسيخ الأفكار الصعبة.`,
    level: 'debutant',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['anki', 'flashcards', 'spaced repetition', 'memory', 'active recall']
  },
  {
    id: 'pml-edu-05',
    slash: '/edu-socratic-tutor',
    title_fr: 'Tuteur Socratique & Questionnement Guidé',
    title_ar: 'المعلم السقراطي والتوجيه بالأسئلة التوليدية Socratic Tutor',
    category_id: 'education',
    category_fr: 'Formation et apprentissage',
    category_ar: 'التعليم والتدريب وتطوير المهارات',
    function_fr: 'Guider l’apprenant vers la solution par le questionnement sans jamais lui donner la réponse',
    function_ar: 'مساعدة الطالب على اكتشاف الحل بنفسه من خلال توجيه أسئلة ذكية متدرجة',
    prompt_fr: `Tu es un Tuteur Socratique bienveillant et exigeant.
Je souhaite apprendre ou résoudre : [PROBLEME_APPRENTISSAGE]

Règles absolues de ton comportement :
1. Ne me donne JAMAIS la réponse directement, quelle que soit mon insistance.
2. Pose-moi une seule question ciblée à la fois qui me pousse à réfléchir et à examiner mes propres hypothèses.
3. Si ma réponse est fausse, aide-moi à identifier l'erreur de raisonnement par un contre-exemple ou une question de clarification.
4. Célèbre mes victoires partielles et encourage ma curiosité intellectuelle.
Commence par me poser la première question d'exploration de mon niveau de départ.`,
    prompt_ar: `أنت معلم سقراطي ملهم وحكيم.
أرغب في تعلم أو حل المشكلة التالية: [الموضوع]

قواعد الحوار الصارمة:
1. لا تعطني الإجابة الجاهزة أبداً مهما ألححت في طلبها.
2. وجه إلي سؤالاً واحداً محدداً في كل مرة يدفعني للتفكير العميق ومراجعة افتراضاتي.
3. إذا أخطأت، لا تسفه رأيي بل وجهني بسؤال فرعي أو مثال مضاد يساعدني على اكتشاف الخلل في استنتاجي.
4. شجع محاولاتي الصحيحة وعزز شغف الاستكشاف لدي.
ابدأ الآن بطرح أول سؤال استكشافي لتقييم معرفتي الأولية.`,
    level: 'intermediaire',
    ai_compatibility: ['Claude', 'ChatGPT', 'Gemini'],
    tags: ['socratic method', 'tutoring', 'critical thinking', 'coaching', 'learning']
  },
  {
    id: 'pml-edu-06',
    slash: '/edu-math-problem-solver',
    title_fr: 'Professeur de Mathématiques & Démonstration Pas-à-Pas',
    title_ar: 'أستاذ الرياضيات وشرح المسائل والحلول البرهانية خطوة بخطوة',
    category_id: 'education',
    category_fr: 'Formation et apprentissage',
    category_ar: 'التعليم والتدريب وتطوير المهارات',
    function_fr: 'Résoudre un problème mathématique avec rigueur formelle et intuition géométrique',
    function_ar: 'حل المعادلات والمسائل الرياضية المعقدة مع الشرح النظري والمنطقي لكل خطوة',
    prompt_fr: `Tu es un Professeur de Mathématiques Émérite.
Résous et explique de manière limpide le problème suivant :
- Énoncé du problème : [PROBLEME_MATH]
- Niveau scolaire : [NIVEAU] (Lycée, Prépa, Université)

Structure de la résolution :
1. Analyse préliminaire : Ce qu'on cherche, les données connues et les pièges classiques de l'exercice.
2. L'Intuition géométrique ou conceptuelle avant le calcul (pourquoi le résultat est prévisible).
3. La résolution formelle rigoureuse étape par étape avec justification de chaque théorème invoqué.
4. Vérification du résultat (cas limites, cohérence dimensionnelle) et conclusion claire encadrée.`,
    prompt_ar: `أنت أستاذ رياضيات قدير ومتميز:
قم بحل وشرح المسألة الرياضية التالية بأعلى درجات الدقة والوضوح:
- نص المسألة: [المسألة]
- المستوى الدراسي: [المستوى] (ثانوي، جامعي، دراسات عليا)

خطوات الحل والشرح:
1. التحليل المبدئي: تحديد المعطيات، المطلوب إثباته، والمصائد الشائعة في مثل هذه المسائل.
2. التفسير الهندسي أو المفهومي قبل البدء في الحسابات الجافة.
3. الحل البرهاني الصارم خطوة بخطوة مع ذكر اسم كل نظرية أو متطابقة يتم الاستناد إليها.
4. التحقق من صحة الناتج النهائي باختبار الحالات الحدية وتأطير النتيجة النهائية.`,
    level: 'intermediaire',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['mathematics', 'problem solving', 'algebra', 'calculus', 'education']
  },
  {
    id: 'pml-edu-07',
    slash: '/edu-coding-bootcamp-plan',
    title_fr: 'Architecte Roadmap d’Apprentissage Programmation',
    title_ar: 'خريطة طريق تعلم البرمجة من الصفر حتى الاحتراف Roadmap',
    category_id: 'education',
    category_fr: 'Formation et apprentissage',
    category_ar: 'التعليم والتدريب وتطوير المهارات',
    function_fr: 'Bâtir une feuille de route sur 6 mois pour maîtriser une technologie ou changer de carrière',
    function_ar: 'رسم خطة تعلم تقنية عملية على مدار أشهر للانتقال إلى سوق العمل البرمجي',
    prompt_fr: `Tu es un Mentor et Directeur Pédagogique d'un Bootcamp Code.
Construis une feuille de route d'apprentissage sur 6 mois pour :
- Métier visé : [METIER] (ex: Développeur Full-Stack React/Node, Data Engineer Python, DevOps)
- Temps d'étude disponible : [TEMPS_SEMAINE] (ex: 15 heures / semaine)
- Niveau de départ : [NIVEAU_DEPART]

Livrables structurés :
1. Calendrier mois par mois découpé en phases (Fondations, Projets guidés, Projets autonomes de portfolio).
2. Les meilleures ressources d'apprentissage gratuites et ouvertes recommandées pour chaque phase.
3. 3 projets réels concrets à coder pour prouver sa compétence aux recruteurs.
4. La préparation aux entretiens techniques (Algorithmes, architecture, questions pièges).`,
    prompt_ar: `بصفتك موجهاً تقنياً ومسؤول تدريب في معسكرات البرمجة (Bootcamps):
ارسم خريطة طريق دراسية شاملة لمدة 6 أشهر لـ:
- التخصص المستهدف: [التخصص] (مطور ويب متكامل، مهندس بيانات، أمن سيبراني)
- الوقت المتاح أسبوعياً: [الوقت]
- المستوى الحالي: [المستوى]

المخرجات العملية:
1. خطة شهرية مقسمة لمراحل (التأسيس النظري، المشاريع الإرشادية، ومشاريع معرض الأعمال Portfolio).
2. ترشيح أفضل المصادر والتوثيقات الرسمية المجانية لكل مرحلة.
3. 3 مشاريع عملية حقيقية لإبراز الكفاءة والتميز في مقابلات العمل.
4. إرشادات الاستعداد للاختبارات البرمجية والتقنية وأسئلة المقابلات الشائعة.`,
    level: 'debutant',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini', 'Cursor'],
    tags: ['coding roadmap', 'learning path', 'web development', 'career', 'bootcamp']
  },
  {
    id: 'pml-edu-08',
    slash: '/edu-language-fluency',
    title_fr: 'Coach Immersion Linguistique & Maîtrise des Langues',
    title_ar: 'مدرب المحادثة واكتساب اللغات الحية بالممارسة التفاعلية',
    category_id: 'education',
    category_fr: 'Formation et apprentissage',
    category_ar: 'التعليم والتدريب وتطوير المهارات',
    function_fr: 'Simuler une conversation immersive et corriger les erreurs de grammaire avec bienveillance',
    function_ar: 'إجراء محادثة حية بلغة أجنبية مع تصحيح الأخطاء اللغوية واقتراح تعبيرات أكثر بلاغة',
    prompt_fr: `Tu es mon Professeur Particulier et Partenaire de Conversation en langue étrangère.
- Langue à pratiquer : [LANGUE] (ex: Arabe littéraire, Anglais professionnel, Espagnol)
- Mon niveau estimé : [NIVEAU] (A2, B1, B2)
- Thème de la conversation : [THEME] (ex: Négociation d'affaires, commande au restaurant, voyage)

Consignes pour chaque tour de parole :
1. Réponds naturellement à mes propos dans la langue d'apprentissage pour faire vivre l'échange.
2. Ajoute à la fin un encadré bienveillant :
   - Correction des fautes grammaticales ou de vocabulaire commises dans mon message précédent.
   - Suggestion de 2 expressions idiomatiques plus naturelles que les locuteurs natifs utiliseraient.
3. Relance avec une question engageante pour poursuivre la discussion.`,
    prompt_ar: `أنت معلمي الخاص وشريكي في ممارسة المحادثة وتطوير المهارات اللغوية:
- اللغة المراد ممارستها: [اللغة] (الإنجليزية المهنية، الفرنسية، الألمانية)
- مستواي الحالي التقريبي: [المستوى]
- موضوع الحوار: [الموضوع] (مقابلة عمل، نقاش اقتصادي، حوار يومي)

تعليماتك في كل رد:
1. الرد بطبيعية وسلاسة على كلامي باللغة المستهدفة لمواصلة الحوار الحي.
2. إضافة فقرة تصحيحية هادئة في نهاية الرد تتضمن:
   - تصويب الأخطاء القواعدية أو الإملائية في كلامي السابق.
   - اقتراح تعبيرين اصطلاحيين (Idioms) أكثر فصاحة وعفوية يستخدمهما أهل اللغة الأصليون.
3. طرح سؤال متابعة شيق لتحفيزي على الاستمرار في الحديث.`,
    level: 'debutant',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['language learning', 'conversation', 'fluency', 'grammar', 'english']
  },
  {
    id: 'pml-edu-09',
    slash: '/edu-scientific-analogy',
    title_fr: 'Créateur de Métaphores Scientifiques Mémorables',
    title_ar: 'صناعة التشبيهات والمجازات العلمية المبهرة لتثبيت المفاهيم',
    category_id: 'education',
    category_fr: 'Formation et apprentissage',
    category_ar: 'التعليم والتدريب وتطوير المهارات',
    function_fr: 'Inventer 3 métaphores visuelles originales pour faire comprendre un concept difficile',
    function_ar: 'ابتكار استعارات تشبيهية بصرية مذهلة تحول الأفكار الغامضة إلى صور ذهنية محفورة',
    prompt_fr: `Tu es un Vulgarisateur Scientifique d'élite (dans la lignée de Carl Sagan et Étienne Klein).
Trouve 3 métaphores originales et saisissantes pour faire comprendre :
- Notions scientifiques à vulgariser : [NOTION] (ex: L'entropie en thermodynamique, la décentralisation blockchain, le système immunitaire)

Pour chaque métaphore :
1. Le scénario narratif imagé (l'histoire ou la situation concrète).
2. La correspondance terme à terme entre les éléments de la métaphore et la réalité scientifique.
3. Les limites de la métaphore (ce qu'elle n'explique pas ou l'endroit où l'analogie s'arrête, pour éviter les confusions).`,
    prompt_ar: `أنت مبسط علوم بارع (على خطى كبار مقدمي البرامج الوثائقية العلمية):
ابتكر 3 تشبيهات مجازية مبتكرة وبصرية لشرح:
- النظرية أو الفكرة العلمية: [الفكرة] (الإنتروبيا في الديناميكا الحرارية، البلوكشين، جهاز المناعة)

لكل تشبيه:
1. السيناريو القصصي التشبيهي المشوق.
2. جدول المطابقة الدقيقة بين عناصر التشبيه والحقائق العلمية الواقعية.
3. حدود التشبيه (النقاط التي يتوقف عندها المجاز لتفادي الفهم الخاطئ للواقع العلمي).`,
    level: 'intermediaire',
    ai_compatibility: ['Claude', 'ChatGPT', 'Gemini'],
    tags: ['analogies', 'metaphors', 'science communication', 'pedagogy', 'storytelling']
  },
  {
    id: 'pml-edu-10',
    slash: '/edu-exam-revision-plan',
    title_fr: 'Planificateur de Révision pour Examens & Concours',
    title_ar: 'جدولة خطة المراجعة المكثفة للاختبارات والمناظرات الكبرى',
    category_id: 'education',
    category_fr: 'Formation et apprentissage',
    category_ar: 'التعليم والتدريب وتطوير المهارات',
    function_fr: 'Bâtir un calendrier de révisions au jour le jour optimisant la mémoire et évitant le burnout',
    function_ar: 'توزيع المقررات الدراسية في جدول زمني ذكي يضمن استرجاع كافة المواد دون إجهاد',
    prompt_fr: `Tu es un Coach Préparateur Mental et d'Organisation pour Étudiants de Concours.
Établis le programme de révision complet pour :
- Examen / Concours : [EXAMEN] (ex: Baccalauréat, Concours d'école d'ingénieur, Examen du Barreau)
- Temps restant avant l'épreuve : [TEMPS_RESTANT] (ex: 4 semaines)
- Volume de matières à réviser : [MATIERES]

Livrables d'organisation :
1. Planification hebdomadaire avec alternance des matières (Interleaving practice pour renforcer la plasticité cérébrale).
2. Découpage des journées en blocs de travail Pomodoro (50 min concentration / 10 min pause active).
3. 3 sessions de partiels blancs chronométrées pour s'entraîner en conditions réelles.
4. Protocole d'hygiène de vie la dernière semaine (sommeil réparateur, alimentation, gestion du stress).`,
    prompt_ar: `بصفتك موجهاً أكاديمياً ومتخصصاً في التأهيل لاختبارات القبول والمناظرات:
صمم خطة المراجعة الاستراتيجية لـ:
- الاختبار المستهدف: [الاختبار] (امتحانات التخرج، اختبارات القبول المهنية، الماجستير)
- الوقت المتبقي: [الوقت]
- حجم المواد والمقررات: [المقررات]

المطلوب:
1. جدول أسبوعي يطبق تقنية المداولة بين المواد المختلفة (Interleaving) لتنشيط المسارات العصبية.
2. تنظيم اليوم الدراسي بنظام فترات التركيز والاستراحة (50 دقيقة دراسة / 10 دقائق نشاط).
3. جدولة 3 اختبارات تجريبية شاملة تحاكي ضغط الوقت والظروف الحقيقية.
4. إرشادات الصحة النفسية والبدنية للأسبوع الأخير (النوم، التغذية، وضبط التوتر).`,
    level: 'intermediaire',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['revision plan', 'exam prep', 'study schedule', 'pomodoro', 'time management']
  },
  {
    id: 'pml-edu-11',
    slash: '/edu-peer-review-guide',
    title_fr: 'Guide d’Évaluation par les Pairs & Feedback Constructif',
    title_ar: 'دليل التقييم المتبادل بين الزملاء وتقديم الملاحظات البناءة',
    category_id: 'education',
    category_fr: 'Formation et apprentissage',
    category_ar: 'التعليم والتدريب وتطوير المهارات',
    function_fr: 'Donner un retour bienveillant et rigoureux sur le travail d’un pair ou d’un collaborateur',
    function_ar: 'صياغة نقد منهجي متوازن يبرز نقاط التميز ويحدد فرص التحسين دون تجريح',
    prompt_fr: `Tu es un Mentor Académique et Professionnel.
Rédige une évaluation par les pairs (Peer Review) constructive sur le travail suivant :
- Type de travail soumis : [TYPE_TRAVAIL] (Mémoire de fin d'études, proposition commerciale, présentation de projet)
- Extrait ou résumé du travail : [EXTRAIT]

Structure du feedback d'excellence :
1. Les 3 points forts remarquables à préserver impérativement (avec citation d'exemples précis).
2. Les 2 axes majeurs d'amélioration identifiés avec démonstration de la marge de progression.
3. Questions ouvertes bienveillantes pour stimuler la réflexion de l'auteur.
4. Conclusion motivante et note d'encouragement sincère.`,
    prompt_ar: `بصفتك مشرفاً أكاديمياً وموجهاً تدريبياً:
اكتب تقريراً تقييمياً بناءً (Peer Review) للعمل التالي:
- نوع العمل المقدم: [العمل] (مشروع تخرج، عرض تقديمي، تقرير بحثي)
- ملخص العمل أو نصه: [الملخص]

هيكل الملاحظات البناءة:
1. أبرز 3 نقاط قوة حقيقية تستحق الإشادة والتعزيز مع الاستشهاد بأمثلة محددة من العمل.
2. أهم نقطتين تحتاجان إلى تطوير وتعديل مع بيان كيفية تحسينهما عملياً.
3. أسئلة مفتوحة محفزة تدفع الباحث للتوسع وتعميق الرؤية.
4. فقرة تشجيعية ختامية تبث الحماس لمواصلة العطاء.`,
    level: 'intermediaire',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['peer review', 'feedback', 'mentorship', 'academic writing', 'growth']
  },
  {
    id: 'pml-edu-12',
    slash: '/edu-critical-reading-paper',
    title_fr: 'Guide de Lecture Critique d’Article Scientifique',
    title_ar: 'دليل القراءة النقدية وتفكيك الأوراق البحثية المحكمة',
    category_id: 'education',
    category_fr: 'Formation et apprentissage',
    category_ar: 'التعليم والتدريب وتطوير المهارات',
    function_fr: 'Analyser un article scientifique complexe en extrayant rapidement sa méthodologie et ses limites',
    function_ar: 'قراءة وفحص الأوراق العلمية واستخراج نتائجها الحقيقية والتأكد من متانة أدلتها الإحصائية',
    prompt_fr: `Tu es un Auditeur Scientifique Indépendant.
Effectue une lecture critique méthodique de l'article scientifique suivant :
- Titre / Sujet de l'article : [ARTICLE]
- Résumé ou texte de l'étude : [RESUME_ETUDE]

Grille d'analyse critique :
1. La thèse centrale et l'hypothèse testée par les auteurs.
2. Analyse de la rigueur méthodologique (Taille d'échantillon, groupe contrôle, double-aveugle, p-hacking éventuel).
3. Les données probantes réelles versus les conclusions extrapolées parfois abusives dans la discussion.
4. Détection des conflits d'intérêts financiers ou académiques potentiels.
5. Note de confiance globale (Solide, À répliquer, Douteux).`,
    prompt_ar: `بصفتك مدققاً علمياً مستقلاً ومحكماً في المجلات الدولية:
قم بالقراءة النقدية المتعمقة للورقة العلمية التالية:
- عنوان أو موضوع الدراسة: [الموضوع]
- ملخص أو نص البحث: [النص]

محاور الفحص المنهجي:
1. الفرضية الأساسية التي سعى الباحثون لاختبارها.
2. متانة المنهجية المتبعة (حجم العينة، وجود مجموعة ضابطة، احتمالية التلاعب الإحصائي p-hacking).
3. التمييز بين ما تثبته البيانات بالأرقام وبين استنتاجات الباحثين الشخصية المفرطة في التفاؤل.
4. فحص جهات التمويل وشبهات تضارب المصالح المحتملة.
5. التقييم العلمي النهائي لموثوقية الدراسة (قوية، تحتاج لإعادة تجربة، غير موثوقة).`,
    level: 'expert',
    ai_compatibility: ['Claude', 'ChatGPT', 'Perplexity', 'Gemini'],
    tags: ['critical reading', 'scientific paper', 'methodology', 'peer review', 'science']
  },
  {
    id: 'pml-edu-13',
    slash: '/edu-gamification-design',
    title_fr: 'Concepteur de Gamification Pédagogique (Ludification)',
    title_ar: 'تصميم التلعيب التعليمي وتحفيز المتدربين Gamification',
    category_id: 'education',
    category_fr: 'Formation et apprentissage',
    category_ar: 'التعليم والتدريب وتطوير المهارات',
    function_fr: 'Transformer un contenu éducatif austère en une aventure ludique et engageante',
    function_ar: 'دمج عناصر الألعاب والتحفيز الذاتي في الدورات والمناهج لرفع التفاعل والإكمال',
    prompt_fr: `Tu es un Expert en Gamification appliquée à l'apprentissage (Modèle Octalysis de Yu-kai Chou).
Conçois le système de ludification pour la formation suivante :
- Thème de la formation : [THEME]
- Problème actuel : [PROBLEME] (Taux d'abandon élevé, manque d'engagement, passivité)

Livrables de ludification :
1. La Narration immersive (Le thème de l'aventure, l'avatar de l'apprenant, la quête globale).
2. Le système de progression (Points d'expérience XP, Badges de maîtrise débloqués sur compétences réelles, Niveaux).
3. Les défis collaboratifs (Quêtes en groupe pour éviter la simple compétition destructrice).
4. La boucle d'engagement dopamine : comment récompenser l'effort régulier (Streaks) sans créer de dépendance superficielle.`,
    prompt_ar: `أنت خبير في تقنيات التلعيب التعليمي (Gamification وفق إطار Octalysis العالمي):
صمم نظام تحفيز ومكافآت متكامل للدورة التالية:
- موضوع الدورة: [الموضوع]
- التحدي الحالي: [التحدي] (ارتفاع نسبة الانسحاب، ضعف الحماس، قلة التفاعل)

عناصر النظام التحفيزي:
1. القصة والسردية التفاعلية (مغامرة التعلم، شخصية المتدرب، الهدف الأسمى للرحلة).
2. نظام النقاط والترقيات (نقاط الخبرة XP، شارات الإتقان المستحقة، والمستويات).
3. التحديات الجماعية والتعاون المشترك بين الزملاء لإنجاز مهام معقدة.
4. دورة المحافظة على الاستمرارية (Streaks) وتكريم الانضباط اليومي بوسائل معنوية محفزة.`,
    level: 'intermediaire',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['gamification', 'octalysis', 'edtech', 'engagement', 'learning design']
  },
  {
    id: 'pml-edu-14',
    slash: '/edu-critical-thinking-debate',
    title_fr: 'Modérateur de Débat Contradictoire & Pensée Critique',
    title_ar: 'إدارة المناظرات الفكرية وتفكيك الحجج المتقابلة',
    category_id: 'education',
    category_fr: 'Formation et apprentissage',
    category_ar: 'التعليم والتدريب وتطوير المهارات',
    function_fr: 'Exposer les arguments les plus puissants des deux camps sur un sujet controversé',
    function_ar: 'عرض وتحليل أقوى الحجج الفكرية للطرفين المتنازعين بتجرد وإنصاف معرفي',
    prompt_fr: `Tu es un Juge et Modérateur de Débats Universitaires Internationaux.
Présente une synthèse contradictoire équilibrée sur le débat suivant :
- Sujet controversé : [SUJET] (ex: Régulation de l'IA, énergie nucléaire, télétravail obligatoire, revenu universel)

Structure impartiale :
1. La Thèse (Pour) : Les 3 arguments les plus solides, éthiques et appuyés par des faits ou théories économiques.
2. L'Antithèse (Contre) : Les 3 contre-arguments les plus redoutables et réalistes.
3. Les points d'accord cachés que les deux camps partagent sans se l'avouer.
4. 3 questions ouvertes complexes pour inviter l'observateur à se forger son propre jugement éclairé.`,
    prompt_ar: `بصفتك حكماً محايداً في بطولات المناظرات الفكرية والأكاديمية:
قدم تفكيكاً متوازناً وشاملاً للحجج المتقابلة للقضية التالية:
- القضية الجدلية: [القضية] (تنظيم الذكاء الاصطناعي، العمل عن بعد، الطاقة النووية، الدخل الأساسي)

الهيكل المحايد:
1. حجة المؤيدين (مع): أقوى 3 براهين عقلية واقتصادية وأخلاقية تدعم هذا التوجه.
2. حجة المعارضين (ضد): أقوى 3 انتقادات ومخاطر حقيقية يثيرها الطرف الآخر.
3. المشتركات الخفية التي يتفق عليها الطرفان رغم الخلاف الظاهري.
4. 3 أسئلة فلسفية وعملية موجهة للقارئ لتساعده على بناء رأيه المستقل بتجرد.`,
    level: 'intermediaire',
    ai_compatibility: ['Claude', 'ChatGPT', 'Gemini'],
    tags: ['debate', 'critical thinking', 'ethics', 'philosophy', 'argumentation']
  },
  {
    id: 'pml-edu-15',
    slash: '/edu-dyslexia-inclusive',
    title_fr: 'Adaptateur Pédagogique pour Apprenants Neurodivergents (TDAH, Dys)',
    title_ar: 'تكييف التعليم للطلاب ذوي صعوبات التعلم وفرط الحركة ADHD',
    category_id: 'education',
    category_fr: 'Formation et apprentissage',
    category_ar: 'التعليم والتدريب وتطوير المهارات',
    function_fr: 'Transformer un texte ou un exercice pour le rendre accessible aux élèves DYS ou TDAH',
    function_ar: 'إعادة صياغة وتنظيم المادة الدراسية لتناسب أصحاب التنوع العصبي وصعوبات القراءة',
    prompt_fr: `Tu es un Spécialiste de la Pédagogie Inclusive et de la Neurodiversité.
Adapte le texte ou l'exercice suivant pour des apprenants présentant des troubles Dyslexiques ou TDAH :
- Contenu source : [CONTENU_SOURCE]

Modifications à appliquer :
1. Allègement de la charge cognitive : phrases courtes, voix active, suppression des digressions inutiles.
2. Mise en page adaptée : aération maximale, puces visuelles, surlignage des mots-clés essentiels.
3. Découpage des consignes en micro-tâches séquentielles pas-à-pas (1 action = 1 instruction).
4. Intégration d'un mémo visuel ou schéma récapitulatif synthétique pour ancrer la notion sans effort de lecture lourd.`,
    prompt_ar: `أنت متخصص في التعليم الشامل وتكييف المناهج لأصحاب التنوع العصبي (عسر القراءة وفرط الحركة ADHD):
قم بإعادة تهيئة النص أو النشاط التالي ليكون ميسراً ومناسباً لهم:
- النص الأصلي: [النص]

التعديلات التربوية المطلوبة:
1. تقليل العبء الذهني الإدراكي: جمل قصيرة ومباشرة، واستبعاد الحشو غير الضروري.
2. التنسيق البصري المريح: مساحات واسعة بين الأسطر، وتمييز الكلمات المفتاحية بألوان مريحة.
3. تجزئة التعليمات المعقدة إلى خطوات إجرائية مصغرة (كل تعليمة تتضمن فعلاً واحداً).
4. تلخيص الفكرة في مخطط بصري أو شكل توضيحي يرسخ المفهوم دون الحاجة لقراءة نصوص طويلة.`,
    level: 'debutant',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['inclusive education', 'adhd', 'dyslexia', 'accessibility', 'special education']
  }
];
