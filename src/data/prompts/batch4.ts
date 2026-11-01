import { PromptItem } from '../../types/prompt';

export const BATCH_4_PROMPTS: PromptItem[] = [
  // ==========================================
  // CATÉGORIE 16 : ARCHITECTURE ET INGÉNIERIE (15 prompts)
  // ==========================================
  {
    id: 'pml-arc-01',
    slash: '/arc-cahier-des-charges-bim',
    title_fr: 'Rédacteur Cahier des Charges BIM (Bâtiment Intelligent)',
    title_ar: 'إعداد كراسة شروط نمذجة معلومات البناء BIM',
    category_id: 'architecture',
    category_fr: 'Architecture et ingénierie',
    category_ar: 'الهندسة المعمارية والإنشائية',
    function_fr: 'Définir les protocoles d’échange BIM et les niveaux de détail (LOD) d’un projet de construction',
    function_ar: 'صياغة مواصفات ومعايير تبادل نماذج BIM ومستويات التفاصيل الهندسية LOD',
    prompt_fr: `Tu es un BIM Manager et Ingénieur Bâtiment Senior.
Rédige la convention de gestion BIM (Building Information Modeling) pour :
- Type d'ouvrage : [OUVRAGE] (ex: Hôpital de 300 lits, tour de bureaux HQE, complexe résidentiel)
- Logiciels prévus pour la maîtrise d'œuvre : [LOGICIELS] (Revit, ArchiCAD, Navisworks)
- Niveau de détail exigé : LOD 300 à la conception, LOD 400 à l'exécution

Livrables contractuels :
1. Définition des rôles et matrice des responsabilités de modélisation (Architecte, BET Structure, BET Fluides MEP).
2. Format d'échange interopérable (norme openBIM IFC 4 et fichiers BCF pour les annotations).
3. Protocole de détection des conflits géométriques (Clash Detection) et tolérances admissibles.
4. Système de coordonnées partagées et nommage normalisé des maquettes numériques.`,
    prompt_ar: `أنت مدير نمذجة معلومات البناء (BIM Manager) ومهندس إنشاءات أول:
اكتب وثيقة بروتوكول واتفاقية الـ BIM لمشروع:
- نوع المنشأة: [المنشأة] (مستشفى، برج مكتبي ذكي، مجمع سكني)
- البرامج الهندسية المعتمدة: [البرامج] (Revit, ArchiCAD, Navisworks)
- مستوى التفاصيل المطلوب: LOD 300 للتصميم و LOD 400 للتنفيذ

المخرجات التعاقدية:
1. مصفوفة مسؤوليات النمذجة بين الأطراف (المعماري، الإنشائي، والكهرو-ميكانيكي MEP).
2. معايير تبادل الملفات المفتوحة (OpenBIM بصيغة IFC وملفات ملاحظات BCF).
3. بروتوكول كشف التعارضات الهندسية (Clash Detection) ونسب التفاوت المسموحة.
4. نظام الإحداثيات الجغرافية الموحد وقواعد تسمية الملفات والمجلدات.`,
    level: 'expert',
    ai_compatibility: ['Claude', 'ChatGPT', 'Gemini'],
    tags: ['bim', 'architecture', 'revit', 'construction', 'engineering', 'openbim']
  },
  {
    id: 'pml-arc-02',
    slash: '/arc-bioclimatic-passive-house',
    title_fr: 'Concepteur Architecture Bioclimatique & Maison Passive',
    title_ar: 'تصميم العمارة البيومناخية والمباني منخفضة الطاقة Passivhaus',
    category_id: 'architecture',
    category_fr: 'Architecture et ingénierie',
    category_ar: 'الهندسة المعمارية والإنشائية',
    function_fr: 'Optimiser orientation solaire, inertie thermique et ventilation naturelle pour un confort 4 saisons',
    function_ar: 'استغلال حركة الشمس والرياح الطبيعية لتكييف وتدفئة المبنى ذاتياً بأقل استهلاك طاقة',
    prompt_fr: `Tu es un Architecte Spécialiste de la Conception Bioclimatique et du Standard Passif (Passivhaus / RE2020).
Conçois la stratégie bioclimatique pour le projet suivant :
- Emplacement et climat : [CLIMAT] (ex: Climat méditerranéen chaud et sec, climat tempéré froid l'hiver)
- Surface et programme : [PROGRAMME] (Maison individuelle ou équipement public)

Principes d'ingénierie bioclimatique :
1. Orientation et compacité : Répartition des ouvertures selon la course solaire (Grandes baies au Sud avec brise-soleil calculés, pièces tampons au Nord).
2. Stratégie d'isolation thermique par l'extérieur (ITE) et rupture impérative des ponts thermiques.
3. Inertie des matériaux de construction intérieurs pour stocker la fraîcheur ou la chaleur.
4. Système de ventilation mécanique contrôlée (VMC Double Flux à haut rendement) combiné à un puits canadien / provençal.`,
    prompt_ar: `بصفتك معمارياً متخصصاً في التصميم البيئي والمباني الصفرية (Passive House):
صمم الاستراتيجية البيومناخية للمشروع التالي:
- الموقع والمناخ السائد: [المناخ] (حار جاف، معتدل، أو بارد شتاءً)
- مساحة وطبيعة المبنى: [المشروع]

المعايير الهندسية:
1. التوجيه الشمسي وتوزيع الواجهات (كواسر الشمس المدروسة للواجهات الجنوبية والغربية، وتضييق فتحات الواجهة الباردة).
2. العزل الحراري الخارجي المستمر ومعالجة الجسور الحرارية لتقليل التسريب.
3. توظيف الكتلة الحرارية للمواد الداخلية لامتصاص وتخزين البرودة أو الدفء طبيعياً.
4. منظومة التهوية الميكانيكية المزدوجة مع استرداد الحرارة واستغلال الآبار الهوائية الأرضية.`,
    level: 'expert',
    ai_compatibility: ['Claude', 'ChatGPT', 'Gemini'],
    tags: ['bioclimatic', 'passive house', 'green building', 'architecture', 'sustainability']
  },
  {
    id: 'pml-arc-03',
    slash: '/arc-structural-calculation-eurocode',
    title_fr: 'Ingénieur Calcul de Structure (Béton Armé & Acier)',
    title_ar: 'الحسابات الإنشائية والتسليح للخرسانة المسلحة والصلب Eurocodes',
    category_id: 'architecture',
    category_fr: 'Architecture et ingénierie',
    category_ar: 'الهندسة المعمارية والإنشائية',
    function_fr: 'Dimensionner poutres, poteaux et fondations selon les Eurocodes 2 et 3',
    function_ar: 'حساب قطاعات الأعمدة والكمرات والقواعد الخرسانية وتحمل الأحمال الإنشائية',
    prompt_fr: `Tu es un Ingénieur Calculateur en Bureau d'Études Structures (BET).
Dimensionne l'élément porteur suivant selon les Eurocodes :
- Élément : [ELEMENT] (ex: Poutre continue en béton armé de 6m de portée, poteau métallique HEB 200)
- Charges appliquées : Charges permanentes G = [G] kN/m, Charges d'exploitation Q = [Q] kN/m
- Résistance des matériaux : Béton C25/30, Acier B500B

Fournis le calcul justificatif complet :
1. Combinaison d'actions à l'État Limite Ultime (ELU : 1.35 G + 1.5 Q) et à l'État Limite de Service (ELS : G + Q).
2. Calcul du moment fléchissant maximal (M_Ed) et de l'effort tranchant (V_Ed).
3. Détermination de la section d'aciers longitudinaux tendus et des armatures transversales d'effort tranchant.
4. Vérification de la flèche admissible à l'ELS (L/500).`,
    prompt_ar: `أنت مهندس تصميم إنشائي خبير بالأكواد العالمية (Eurocodes / ACI):
قم بحساب وتصميم العنصر الإنشائي التالي:
- العنصر: [العنصر] (كمرة خرسانية بطول 6 أمتار، أو عمود فولاذي)
- الأحمال: الأحمال الميتة الدائمة G = [G]، والأحمال الحية التشغيلية Q = [Q]
- مواصفات الخرسانة وحديد التسليح: [المواصفات]

المطلوب تفصيله:
1. تراكيب الأحمال لحالة أقصى تشغيل (Ultimate Limit State ELU: 1.35 G + 1.5 Q) وحالة الخدمة العادية (ELS).
2. حساب أقصى عزم انحناء (Bending Moment) وقوى القص القصوى (Shear Force).
3. حساب مساحة حديد التسليح الطولي السفلي ومقاس ومسافات الكانات الحديدية لمقاومة القص.
4. التحقق من مقدار الهبوط والانحناء المسموح (Deflection Check).`,
    level: 'expert',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['structural engineering', 'concrete', 'eurocode', 'civil engineering', 'reinforcement']
  },
  {
    id: 'pml-arc-04',
    slash: '/arc-urban-permits-zoning',
    title_fr: 'Consultant Permis de Construire & Droit de l’Urbanisme',
    title_ar: 'تراخيص البناء وأنظمة التخطيط العمراني وكودات البناء',
    category_id: 'architecture',
    category_fr: 'Architecture et ingénierie',
    category_ar: 'الهندسة المعمارية والإنشائية',
    function_fr: 'Vérifier la faisabilité réglementaire d’un projet immobilier (PLU, emprise au sol, hauteur)',
    function_ar: 'مراجعة المخططات المعمارية ومطابقتها للاشتراطات البلدية وكود البناء المعتمد',
    prompt_fr: `Tu es un Urbaniste et Architecte Conseil.
Analyse la faisabilité réglementaire du projet de construction suivant :
- Parcelle et zonage : [ZONAGE] (ex: Zone UB d'un Plan Local d'Urbanisme PLU)
- Projet envisagé : [PROJET] (ex: R+3 avec commerce en rez-de-chaussée et 10 logements)
- Surface de la parcelle cadastrale : [SURFACE_TERRAIN]

Vérifie méthodiquement les règles d'urbanisme :
1. Emprise au sol maximale admissible et coefficient de pleine terre (espaces verts perméables).
2. Hauteur maximale au faîtage et à l'égout du toit, et règles de gabarit / prospect par rapport à la rue.
3. Distances d'implantation par rapport aux limites séparatives (Règle R = H/2 avec minimum légal).
4. Obligations de stationnement (nombre de places de parking par logement et locaux vélos).`,
    prompt_ar: `بصفتك استشارياً في التخطيط العمراني وتراخيص البناء:
راجع التوافق النظامي لمشروع البناء التالي:
- تصنيف المنطقة ونظام البناء: [التصنيف] (سكني، تجاري، متعدد الأدوار)
- طبيعة المشروع: [المشروع] (عمارة سكنية مع معارض تجارية)
- مساحة الأرض وحدودها: [المساحة]

الفحص التنظيمي:
1. النسبة المئوية القصوى للبناء على الأرض (نسبة التغطية) والارتدادات الإلزامية.
2. أقصى ارتفاع مسموح للأدوار والسترة وشروط خط السماء.
3. مسافات الارتداد عن الجيران والشارع الأمامي والخلفي.
4. معايير مواقف السيارات الإلزامية لكل وحدة ومخارج الطوارئ ومواصفات ذوي الإعاقة.`,
    level: 'intermediaire',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['urban planning', 'building permit', 'zoning', 'architecture', 'regulations']
  },
  {
    id: 'pml-arc-05',
    slash: '/arc-acoustic-isolation-hvac',
    title_fr: 'Ingénieur Acoustique Bâtiment & Isolation Phonique',
    title_ar: 'الهندسة الصوتية والعزل الصوتي للمباني والقاعات Acoustic Engineering',
    category_id: 'architecture',
    category_fr: 'Architecture et ingénierie',
    category_ar: 'الهندسة المعمارية والإنشائية',
    function_fr: 'Concevoir l’isolation contre les bruits aériens, bruits d’impact et vibrations de ventilation',
    function_ar: 'حساب العزل الصوتي لمنع انتقال الضوضاء وضبط صدى الصوت الداخلي RT60',
    prompt_fr: `Tu es un Ingénieur Acoustique du Bâtiment.
Conçois le traitement acoustique pour :
- Espace concerné : [ESPACE] (Studio d'enregistrement, salle de conférence, restaurant bruyant, logements mitoyens)
- Source des nuisances sonores : [NUISANCES] (Bruits extérieurs de circulation routière, bruits de pas d'impact, soufflerie de climatisation VMC)

Livrables d'ingénierie acoustique :
1. Principe Masse-Ressort-Masse pour les cloisons séparatives (plaques de plâtre phoniques sur ossatures désolidarisées avec laine minérale).
2. Traitement des bruits d'impact au sol (Chape flottante sur sous-couche résiliente acoustique).
3. Calcul du temps de réverbération cible (RT60 en secondes) et disposition des panneaux absorbants au plafond/murs.
4. Pièges à son (Silencieux à baffles) sur les gaines de ventilation aéraulique.`,
    prompt_ar: `أنت مهندس متخصص في الصوتيات المعمارية والعزل الصوتي:
صمم منظومة العزل والامتصاص الصوتي لـ:
- نوع المنشأة: [المنشأة] (استوديو تسجيل، قاعة مؤتمرات، مطعم، وحدات سكنية متلاصقة)
- مصادر الإزعاج: [الإزعاج] (أصوات الشارع، وقع الأقدام على الأرضيات، ضجيج مجاري التكييف)

الحلول الهندسية:
1. تطبيق نظرية (كتلة - نابض - كتلة) للجدران الفاصلة باستخدام ألواح عازلة للصوت وفواصل مطاطية لامتصاص الاهتزازات.
2. عزل أرضيات الطوابق بنظام الأرضية العائمة (Floating Floor) لمنع انتقال صوت الخطوات.
3. حساب زمن الصدى والتردد المستهدف (RT60) وتوزيع اللوحات الجدارية الماصة للصوت بدقة.
4. مصائد وكواتم الصوت (Sound Attenuators) داخل دكتات ومجاري الهواء للتكييف.`,
    level: 'expert',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['acoustic engineering', 'soundproofing', 'noise control', 'hvac', 'architecture']
  },
  {
    id: 'pml-arc-06',
    slash: '/arc-plumbing-mep-dimensioning',
    title_fr: 'Dimensionneur Réseaux Plomberie & Fluides MEP',
    title_ar: 'تصميم شبكات التغذية والصرف الصحي والميكانيكا MEP Plumbing',
    category_id: 'architecture',
    category_fr: 'Architecture et ingénierie',
    category_ar: 'الهندسة المعمارية والإنشائية',
    function_fr: 'Calculer les diamètres de canalisations d’alimentation eau chaude/froide et évacuations gravitaires',
    function_ar: 'حساب أقطار مواسير مياه الشرب والصرف الصحي وضغوط المضخات وميول الجريان',
    prompt_fr: `Tu es un Ingénieur Fluides MEP (Génie Climatique et Sanitaire).
Dimensionne le réseau de plomberie sanitaire pour :
- Bâtiment : [BATIMENT] (ex: Immeuble de 20 logements collectifs ou hôtel de 4 étages)
- Nombre d'appareils sanitaires desservis : [APPAREILS] (Lavabos, douches, WC, éviers)

Fournis les notes de calcul :
1. Calcul du débit probable cumulé en appliquant le coefficient de simultanéité selon la formule normalisée.
2. Dimensionnement des diamètres de tuyauterie d'alimentation (Vitesse comprise entre 1.0 et 1.5 m/s pour éviter les coups de bélier et l'érosion).
3. Calcul de la pression résiduelle minimale au point le plus haut et sélection du surpresseur d'eau si nécessaire.
4. Dimensionnement des colonnes de chute et collecteurs d'évacuation gravitaire des eaux usées avec pentes minimales (1% à 2%).`,
    prompt_ar: `بصفتك مهندس أنظمة صحية وتغذية مياه (Plumbing & MEP Engineer):
قم بحساب وتصميم شبكة التغذية والصرف للمبنى:
- طبيعة المبنى: [المبنى] (عمارة 20 شقة سكنية، أو فندق 4 أدوار)
- عدد الأجهزة الصحية: [الأجهزة] (مغاسل، شاورات، دورات مياه، مطابخ)

الحسابات الهندسية:
1. حساب إجمالي التدفق المتوقع بتطبيق معامل التزامن للاستخدام المتزامن.
2. حساب أقطار مواسير التغذية (بسرعة تدفق من 1.0 إلى 1.5 م/ث لتفادي ظاهرة الطرق المائي وتآكل الأنابيب).
3. قياس فاقد الضغط بالاحتكاك وتحديد قوة مضخات رفع وضغط المياه للخزانات العلوية.
4. حساب أقطار مواسير الصرف الرأسية والأفقية والميول الانحدارية المطلوبة (1% إلى 2%) لضمان التصريف السلس.`,
    level: 'intermediaire',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['plumbing', 'mep', 'water supply', 'drainage', 'sanitary engineering']
  },
  {
    id: 'pml-arc-07',
    slash: '/arc-lighting-lux-dialux',
    title_fr: 'Concepteur Éclairage Architectural (Norme Lux & Dialux)',
    title_ar: 'تصميم الإنارة المعمارية وتوزيع الإضاءة بمقاييس Lux وDialux',
    category_id: 'architecture',
    category_fr: 'Architecture et ingénierie',
    category_ar: 'الهندسة المعمارية والإنشائية',
    function_fr: 'Calculer les niveaux d’éclairement réglementaires (Lux) et l’indice d’éblouissement (UGR)',
    function_ar: 'تحديد مستويات الإضاءة المطلوبة ونوع اللمبات ودرجة حرارة اللون لتوفير الراحة البصرية',
    prompt_fr: `Tu es un Concepteur Lumière (Lighting Designer) et Ingénieur Éclairagiste.
Conçois le plan d'éclairage intérieur selon la norme EN 12464-1 pour :
- Type de local : [LOCAL] (Bureaux en open space, salle de chirurgie, boutique de prêt-à-porter luxe, salle de classe)
- Dimensions du local : [DIMENSIONS] (Longueur, Largeur, Hauteur sous plafond)

Fournis les spécifications d'éclairage :
1. Niveau d'éclairement moyen requis sur le plan de travail (en Lux) et uniformité minimale (U0).
2. Indice d'éblouissement d'inconfort maximal admissible (UGR < 19 pour le travail sur écran).
3. Température de couleur (Kelvin : 3000K chaleureux, 4000K lumière du jour active) et indice de rendu des couleurs (CRI / Ra > 90).
4. Calcul du nombre d'appareils LED nécessaires par la méthode des flux lumineux (Formule des Lumens totaux intégrant facteur d'utilisation et maintenance).`,
    prompt_ar: `أنت مهندس ومصمم إنارة معمارية متخصص (Lighting Designer):
صمم مخطط توزيع الإنارة الداخلية وفق المعايير الدولية لـ:
- نوع الفراغ: [الفراغ] (مكاتب مفتوحة، قاعة عمليات طبية، متجر فاخر، فصول دراسية)
- أبعاد المكان: [الأبعاد] (الطول، العرض، وارتفاع السقف)

المواصفات الفنية:
1. شدة الإضاءة المطلوبة على مستوى أسطح العمل (بوحدة Lux) ومعامل التوزيع المتساوي.
2. معامل الراحة ومنع التوهج البصري المزعج (UGR < 19 للعمل المكتبي على الشاشات).
3. درجة حرارة اللون المناسبة (بالكلفن Kelvin: 3000K دافئ، 4000K ضوء نهاري حيوي) ومؤشر تجسيم الألوان (CRI > 90).
4. حساب عدد وحدات الإنارة LED المطلوبة بالمعادلة الضوئية وحساب اللومن مع معاملات الصيانة وانعكاس الجدران.`,
    level: 'intermediaire',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['lighting design', 'dialux', 'lux', 'architecture', 'electrical engineering']
  },
  {
    id: 'pml-arc-08',
    slash: '/arc-geotechnical-foundations',
    title_fr: 'Ingénieur Géotechnicien & Fondations de Sol (Rapport G2)',
    title_ar: 'تقارير فحص التربة وتصميم الأساسات العميقة والسطحية Geotechnical',
    category_id: 'architecture',
    category_fr: 'Architecture et ingénierie',
    category_ar: 'الهندسة المعمارية والإنشائية',
    function_fr: 'Interpréter un sondage de sol géotechnique et choisir entre semelles isolées, radier ou pieux',
    function_ar: 'تحليل نتائج جسات التربة وتحديد قوة التحمل ونوع القواعد والأساسات الأنسب',
    prompt_fr: `Tu es un Ingénieur Géotechnicien certifié.
Voici les résultats de la campagne de sondages géotechniques (Mission G2 PRO) :
- Nature des couches de sol traversées : [NATURE_SOL] (ex: 0-2m remblais hétérogènes, 2-6m argiles molles plastiques à fort retrait-gonflement, 6-12m calcaire compact)
- Présence d'eau / nappe phréatique : [EAU]
- Charges du bâtiment à transmettre au sol : [CHARGES]

Livrables d'expertise de sol :
1. Calcul de la contrainte admissible du sol (q_els et q_elu en bars ou kPa) à différentes profondeurs.
2. Arbitrage technique et économique du type de fondations :
   - Fondations superficielles (semelles filantes / isolées) impossibles ou nécessitant un décapage.
   - Radier général nervuré.
   - Fondations profondes (Pieux forés ou micropieux ancrés dans la roche calcaire).
3. Risques géotechniques majeurs et parades (Retrait-gonflement des argiles RGA, tassements différentiels, cuvelage étanche contre l'eau).`,
    prompt_ar: `بصفتك مهندس جيوتقني وخبير في ميكانيكا التربة وتصميم الأساسات:
إليك نتائج تقرير جسات وفحص التربة:
- طبقات التربة المكتشفة: [طبقات_التربة] (طبقة طينية انتفاخية، طبقة رملية، وصولاً للصخور الصلبة)
- منسوب المياه الجوفية: [المياه]
- إجمالي أحمال المبنى المنقولة للأرض: [الأحمال]

المخرجات الهندسية:
1. حساب جهد التربة المسموح به (Bearing Capacity بوحدة كجم/سم² أو kPa) على أعماق مختلفة.
2. المفاضلة الهندسية والاقتصادية لنوع القواعد والأساسات:
   - قواعد منفصلة وشريطية (مع فحص إمكانية الهبوط غير المتساوي).
   - لبشة خرسانية مسلحة عامة (Raft Foundation).
   - أساسات عميقة وخوازيق (Piles) مثبتة في الطبقة الصخرية الصلبة.
3. معالجة مخاطر التربة (انتفاخ الطين، العزل المائي للبدور من المياه الجوفية).`,
    level: 'expert',
    ai_compatibility: ['Claude', 'ChatGPT', 'Gemini'],
    tags: ['geotechnical', 'soil mechanics', 'foundations', 'piles', 'civil engineering']
  },
  {
    id: 'pml-arc-09',
    slash: '/arc-fire-safety-erp',
    title_fr: 'Expert Sécurité Incendie & Évacuation (Réglementation ERP)',
    title_ar: 'أنظمة السلامة ومكافحة الحريق ومخارج الطوارئ للمباني العامة ERP',
    category_id: 'architecture',
    category_fr: 'Architecture et ingénierie',
    category_ar: 'الهندسة المعمارية والإنشائية',
    function_fr: 'Définir les dégagements d’évacuation, unités de passage, désenfumage et compartimentage',
    function_ar: 'تصميم مسارات الإخلاء وسعة الأبواب وشبكات الرش الآلي ومقاومة انتشار النيران',
    prompt_fr: `Tu es un Préventionniste Sécurité Incendie et Ingénieur Bâtiment.
Conçois la notice de sécurité incendie pour l'Établissement Recevant du Public (ERP) :
- Catégorie et type d'ERP : [TYPE_ERP] (ex: Type M Magasin, Type L Salle de spectacle, 3e catégorie, effectif 500 personnes)
- Configuration des locaux : [CONFIGURATION] (Rez-de-chaussée + 1 étage)

Éléments obligatoires de sécurité incendie :
1. Calcul du nombre de dégagements réglementaires et d'Unités de Passage (UP) pour l'évacuation rapide des occupants.
2. Règles de compartimentage coupe-feu (Murs et portes coupe-feu EI 60 ou EI 120).
3. Système de désenfumage naturel ou mécanique (Surface utile d'évacuation de fumée en toiture selon le ratio de la surface du local).
4. Équipements de première intervention (Emplacement des extincteurs, Robinets d'Incendie Armés RIA, système de détection incendie SSI).`,
    prompt_ar: `أنت مهندس معتمد في أنظمة السلامة ومكافحة الحريق في المنشآت العامة:
قم بإعداد المخطط الوقائي ومتطلبات الدفاع المدني لـ:
- تصنيف المنشأة وطبيعة الاستخدام: [المنشأة] (مركز تسوق، صالة احتفالات، مبنى إداري، سعة 500 شخص)
- عدد الأدوار والمساحة: [المساحة]

متطلبات السلامة الإلزامية:
1. حساب عدد مخارج الطوارئ وعرض الأبواب بوحدات المرور القياسية (Exit Units) لإخلاء سريع في دقائق.
2. فواصل الحريق وجدران العزل المقاومة للهب والدخان لمدة ساعة أو ساعتين.
3. منظومة سحب وطرد الدخان (Smoke Management) والمساحات الواجب فتحها في الأسقف.
4. شبكة إطفاء الحريق الأولية (صناديق الحريق، مرشات المياه التلقائية Sprinklers، وحساسات الإنذار المبكر).`,
    level: 'expert',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['fire safety', 'life safety', 'fire protection', 'evacuation', 'architecture']
  },
  {
    id: 'pml-arc-10',
    slash: '/arc-facade-curtain-wall-thermal',
    title_fr: 'Ingénieur Façade & Mur-Rideau (Double Peau & Vitrage)',
    title_ar: 'تصميم الواجهات الزجاجية والجدران الستارية Curtain Walls',
    category_id: 'architecture',
    category_fr: 'Architecture et ingénierie',
    category_ar: 'الهندسة المعمارية والإنشائية',
    function_fr: 'Dimensionner une façade vitrée structurelle résistant à la pression du vent et aux chocs thermiques',
    function_ar: 'حساب مقاومة الواجهات الزجاجية لضغط الرياح الشديد ومعامل العزل الحراري U-value',
    prompt_fr: `Tu es un Ingénieur Façadier Senior.
Dimensionne la façade mur-rideau pour une tour contemporaine :
- Hauteur du bâtiment et zone de vent : [BATIMENT] (ex: Hauteur 45m, front de mer zone 3 selon Eurocode 1)
- Type de façade : Façade rideau à montants et traverses ou éléments préfabriqués en blocs (Unitized)
- Performances énergétiques ciblées : Facteur solaire g < 0.25, Ug < 1.0 W/m²K

Détaille les spécifications de façade :
1. Calcul de la pression du vent maximale en crête (pression et dépression d'arrachement aux angles du bâtiment).
2. Composition du vitrage isolant (Double ou triple vitrage feuilleté de sécurité avec intercalaire Warm Edge et couche de contrôle solaire sélective).
3. Gestion des mouvements différentiels de la structure porteuse béton (Joints de dilatation et éclisses de montants télescopiques).
4. Étanchéité à l'air, à l'eau et résistance au vent (Classement AEV maximal).`,
    prompt_ar: `بصفتك مهندس واجهات زجاجية وجدران ستارية متخصصاً (Façade Engineer):
صمم الواجهة الزجاجية للبرج التالي:
- ارتفاع المبنى وموقع الرياح: [المبنى] (برج بارتفاع 45 متراً على واجهة بحرية)
- نظام الواجهة: واجهات زجاجية مسبقة الصنع مجزأة (Unitized Curtain Wall)
- المعايير الحرارية المطلوبة: معامل العزل U-value ومعامل نفاذ حرارة الشمس Solar Heat Gain

المواصفات الهندسية:
1. حساب قوة ضغط وسحب الرياح القصوى على الزوايا الخارجية للمبنى وفق الكود الإنشائي.
2. مواصفات الزجاج المزدوج المقسى والمصفح (Double Glazing مع غاز الأرجون وطبقات الحماية من الأشعة).
3. فواصل التمدد وحوامل التثبيت الفولاذية القابلة لامتصاص حركات واهتزازات الهيكل الخرساني.
4. اختبارات مقاومة تسريب الهواء والماء المحكم (Air & Water Tightness).`,
    level: 'expert',
    ai_compatibility: ['Claude', 'ChatGPT', 'Gemini'],
    tags: ['facade engineering', 'curtain wall', 'glass design', 'wind load', 'architecture']
  },
  {
    id: 'pml-arc-11',
    slash: '/arc-solar-photovoltaic-rooftop',
    title_fr: 'Dimensionneur Centrale Solaire Photovoltaïque en Toiture',
    title_ar: 'تصميم وحساب محطات الطاقة الشمسية الكهروضوئية للأسطح Solar PV',
    category_id: 'architecture',
    category_fr: 'Architecture et ingénierie',
    category_ar: 'الهندسة المعمارية والإنشائية',
    function_fr: 'Calculer la puissance crête (kWc), le productible annuel et l’autoconsommation d’un bâtiment',
    function_ar: 'حساب عدد الألواح الشمسية ومحولات الطاقة وإنتاج الكهرباء النظيفة سنوياً',
    prompt_fr: `Tu es un Ingénieur en Énergies Renouvelables et Systèmes Solaires.
Dimensionne l'installation solaire photovoltaïque en toiture pour :
- Surface de toit disponible : [SURFACE] m² (Toiture terrasse béton ou bac acier orientée Sud)
- Localisation géographique : [VILLE] (Données d'irradiation solaire annuelle kWh/m²)
- Consommation électrique annuelle du site : [CONSOMMATION] kWh

Livrables d'ingénierie solaire :
1. Puissance crête installable (kWc) et choix des modules (Monocristallins à haute efficacité N-Type TOPCon ou HJT).
2. Dimensionnement des onduleurs ou micro-onduleurs (Rapport de puissance DC/AC = 1.15 à 1.25).
3. Calcul de la production annuelle estimée (kWh/an) intégrant les pertes de température, poussière et câblage.
4. Schéma de raccordement électrique (Autoconsommation totale, avec revente de surplus ou stockage sur batterie stationnaire).`,
    prompt_ar: `أنت مهندس طاقة متجددة وأنظمة شمسية كهروضوئية:
قم بحساب وتصميم منظومة الطاقة الشمسية لسطح المبنى:
- مساحة السطح المتاحة: [المساحة] م²
- الموقع الجغرافي: [المدينة] (معدل الإشعاع الشمسي اليومي والسنوي)
- الاستهلاك السنوي للكهرباء: [الاستهلاك] كيلوواط/ساعة

المخرجات الهندسية:
1. إجمالي القدرة القصوى للمحطة (kWp) ونوع الألواح الأحادية البلورة عالية الكفاءة (N-Type TOPCon).
2. حساب سعة محولات التيار (Inverters) وتوزيع سلاسل الألواح وموازنة جهد التيار المستمر DC.
3. التقدير السنوي للطاقة المنتجة (كيلوواط/ساعة سنوياً) مع خصم فواقد الحرارة والغبار وتوصيلات الكابلات.
4. مخطط الربط الشبكي (استهلاك ذاتي بالكامل، أو مع تخزين الفائض في بطاريات الليثيوم).`,
    level: 'intermediaire',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['solar energy', 'photovoltaic', 'solar panels', 'renewable energy', 'engineering']
  },
  {
    id: 'pml-arc-12',
    slash: '/arc-renovation-heritage-historic',
    title_fr: 'Architecte Rénovation du Bâti Ancien & Monuments Historiques',
    title_ar: 'ترميم وتأهيل المباني التراثية والتاريخية Heritage Architecture',
    category_id: 'architecture',
    category_fr: 'Architecture et ingénierie',
    category_ar: 'الهندسة المعمارية والإنشائية',
    function_fr: 'Restaurer de la pierre de taille, pans de bois ou chaux sans dénaturer le patrimoine',
    function_ar: 'تشخيص ومعالجة الرطوبة والشروخ في المباني القديمة باستخدام المواد التقليدية المتوافقة',
    prompt_fr: `Tu es un Architecte du Patrimoine et Spécialiste de la Restauration des Monuments Anciens.
Élabore le protocole de diagnostic et de restauration pour le bâtiment ancien suivant :
- Type de bâti : [BATI] (Maison à pans de bois du XVIe siècle, immeuble haussmannien en pierre de taille, ou forteresse en pisé)
- Pathologies observées : [PATHOLOGIES] (Remontées capillaires d'humidité, effritement de la pierre calcaire, poutres en chêne attaquées par des insectes xylophages)

Protocole d'intervention patrimoniale :
1. Diagnostic des matériaux originaux et interdiction absolue des matériaux modernes incompatibles (Ciment étouffant les murs, peintures plastiques).
2. Traitement des remontées capillaires (Drainage périphérique respirant, mortiers à la chaux hydraulique naturelle NHL).
3. Protocole de consolidation des maçonneries (Remaillage, rejointoiement à la chaux et sable local).
4. Restauration structurelle des bois de charpente (Greffe de bois à mi-bois et traitement curatif biologique).`,
    prompt_ar: `بصفتك معمارياً متخصصاً في ترميم المباني التراثية وحفظ الآثار التاريخية:
ضع خطة الفحص والترميم للمبنى التراثي التالي:
- نوع البناء وخاماته: [المبنى] (حجر جيري طبيعي، مبانٍ طينية، أسقف خشبية أثرية)
- مظاهر التدهور: [المظاهر] (رطوبة صاعدة في الجدران، تفتت الحجر، تصدع الأعمدة، حشرات تآكل الأخشاب)

خطة التدخل التراثي:
1. الفحص المعملي للمواد الأصلية ومنع استخدام المواد الحديثة الضارة تماماً (كالأسمنت الأسود الذي يحبس الرطوبة داخل الحجر).
2. معالجة الرطوبة الأرضية بالتهوية الطبيعية وقنوات التصريف ومونة الجير الطبيعي القابل للتنفس.
3. معالجة الشروخ واستبدال الأجزاء الحجرية التالفة بنفس نوع الحجر التاريخي ومونة الجير التقليدية.
4. التدعيم الهيكلي للعناصر الخشبية الأثرية دون المساس بقيمتها الفنية الأصلية.`,
    level: 'expert',
    ai_compatibility: ['Claude', 'ChatGPT', 'Gemini'],
    tags: ['heritage restoration', 'historic preservation', 'architecture', 'masonry', 'lime mortar']
  },
  {
    id: 'pml-arc-13',
    slash: '/arc-landscape-urban-park',
    title_fr: 'Paysagiste Concepteur & Aménagement d’Espaces Publics',
    title_ar: 'تنسيق الحدائق العامة والمدن المستدامة Landscape Architecture',
    category_id: 'architecture',
    category_fr: 'Architecture et ingénierie',
    category_ar: 'الهندسة المعمارية والإنشائية',
    function_fr: 'Concevoir un parc urbain favorisant la biodiversité, les îlots de fraîcheur et la gestion des eaux pluviales',
    function_ar: 'تخطيط المساحات الخضراء والحدائق الحضرية المقاومة للجفاف وخفض حرارة المدن',
    prompt_fr: `Tu es un Architecte Paysagiste DPLG.
Conçois le projet d'aménagement d'un parc urbain public :
- Surface et situation : [PARC] (ex: Parc de 2 hectares au cœur d'un quartier dense minéral)
- Objectifs majeurs : Créer un îlot de fraîcheur urbain, zéro arrosage à terme, accueillir la biodiversité

Livrables de paysage :
1. Plan de zonage fonctionnel (Zones de repos ombragées, clairières récréatives, verger partagé, aires de jeux naturelles en bois).
2. Palette végétale adaptée au changement climatique (Arbres de haute tige à fort ombrage, essences indigènes mellifères sobres en eau).
3. Gestion alternative des eaux de pluie (Noue paysagère drainante, jardins de pluie filtrants évitant tout rejet au réseau d'égout).
4. Mobilier urbain biosourcé et éclairage nocturne préservant la trame noire (chauves-souris et insectes).`,
    prompt_ar: `أنت مهندس تصميم وتنسيق حدائق ومدن مستدامة (Landscape Architect):
صمم حديقة عامة ومساحة حضرية لـ:
- المساحة والموقع: [المساحة] (حديقة عامة بمساحة هكتارين وسط حي سكني مكتظ)
- الأهداف الأساسية: خفض حرارة المدينة، ترشيد استهلاك المياه، وزيادة التنوع الحيوي

المخطط الشامل للحديقة:
1. تقسيم المناطق الوظيفية (مناطق جلوس مظللة، ممرات مشاة نفاذة، ألعاب أطفال طبيعية، مساحات رياضية).
2. قائمة الأشجار والنباتات المحلية المقاومة للجفاف والتي توفر ظلالاً وارفة وتخفض درجات الحرارة.
3. الإدارة البيئية لمياه الأمطار (حدائق المطر المنخفضة التي تمتص وتفلتر مياه الأمطار بدلاً من تصريفها في المجاري).
4. الأثاث الحضري الذكي والمستدام والإضاءة الليلية التي تحافظ على التوازن البيئي للطيور والكائنات الحية.`,
    level: 'intermediaire',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['landscape architecture', 'urban park', 'biodiversity', 'rain garden', 'green cities']
  },
  {
    id: 'pml-arc-14',
    slash: '/arc-quantity-surveyor-cost-estimate',
    title_fr: 'Économiste de la Construction (Métré & Devis Descriptif CCTP)',
    title_ar: 'حساب الكميات والتسعير الهندسي والمواصفات الفنية CCTP',
    category_id: 'architecture',
    category_fr: 'Architecture et ingénierie',
    category_ar: 'الهندسة المعمارية والإنشائية',
    function_fr: 'Rédiger le bordereau des prix unitaires (BPU) et chiffrer les lots gros œuvre et second œuvre',
    function_ar: 'إعداد جداول الكميات التقديرية بدقة وحساب تكاليف المواد والعمالة والمقاولات',
    prompt_fr: `Tu es un Économiste de la Construction et Métreur Senior.
Rédige le bordereau de métré et le descriptif technique pour le lot suivant :
- Lot concerné : [LOT] (ex: Gros Œuvre / Maçonnerie, Cloisons / Doublages, ou Menuiseries extérieures)
- Projet : [PROJET]

Fournis la structure professionnelle :
1. Descriptif technique précis des prestations et matériaux conformes aux normes (DTU applicables).
2. Décomposition du métré par unité de mesure officielle (m³, m², mètre linéaire ml, forfait).
3. Estimation du prix unitaire moyen fourniture et pose et ratio de coût par m² de surface de plancher.
4. Clauses de révision des prix pour se protéger des hausses des cours des matières premières.`,
    prompt_ar: `بصفتك مهندس حساب كميات ومكتب تسعير وتكاليف إنشائية (Quantity Surveyor):
قم بإعداد جدول الكميات (BOQ) والمواصفات الفنية لبند:
- بند الأعمال: [البند] (أعمال الخرسانات المسلحة، أعمال التشطيبات واللياسة، أو أعمال الألمنيوم والواجهات)
- طبيعة المشروع: [المشروع]

المطلوب إعداده:
1. التوصيف الفني الدقيق للمواد وطريقة التنفيذ طبقاً للمواصفات القياسية وكود البناء.
2. وحدات القياس المعتمدة لحساب الكميات (متر مكعب، متر مربع، متر طولي، مقطوعية).
3. تقدير سعر الوحدة (شاملاً توريد المواد والعمالة والأرباح ومصاريف الموقع).
4. شروط تعديل الأسعار لحماية العقد من تقلبات وتضخم أسعار مواد البناء الخام في السوق.`,
    level: 'intermediaire',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['quantity surveying', 'cost estimation', 'boq', 'construction costs', 'tendering']
  },
  {
    id: 'pml-arc-15',
    slash: '/arc-bridge-tunnel-infrastructure',
    title_fr: 'Ingénieur Ouvrages d’Art (Ponts, Viaducs & Tunnels)',
    title_ar: 'هندسة الجسور والأنفاق والمنشآت الكبرى Infrastructure Engineering',
    category_id: 'architecture',
    category_fr: 'Architecture et ingénierie',
    category_ar: 'الهندسة المعمارية والإنشائية',
    function_fr: 'Concevoir la typologie et les méthodes constructives d’un pont ou tunnel autoroutier',
    function_ar: 'اختيار وتصميم أنظمة الجسور (معلقة، كابلات، خرسانة مسبقة الإجهاد) وطرق حفر الأنفاق',
    prompt_fr: `Tu es un Ingénieur Spécialiste des Grands Ouvrages d'Art et Infrastructures de Transport.
Conçois la solution de franchissement pour le défi suivant :
- Obstacle à franchir : [OBSTACLE] (ex: Fleuve de 400m de large avec navigation de péniches, vallée encaissée de 120m de profondeur, ou percement urbain sous bâti dense)
- Trafic prévu : [TRAFIC] (Ligne ferroviaire à grande vitesse ou autoroute 2x3 voies)

Livrables d'ingénierie :
1. Choix comparatif de la typologie d'ouvrage (Pont à poutres précontraintes, pont à haubans, arc métallique, ou tunnelier TBM à pression de terre).
2. Analyse de la méthode de construction (Encorbellements successifs, lançage de tablier, poussage).
3. Gestion des sollicitations dynamiques majeures (Effets aéroélastiques du vent, séismes, fatigue des matériaux due aux convois lourds).
4. Système de monitoring de santé structurelle (Capteurs de déformation par fibre optique, accéléromètres pour surveillance continue).`,
    prompt_ar: `أنت مهندس متخصص في تصميم الكباري والجسور والأنفاق الكبرى (Bridge & Tunnel Engineer):
قم بتصميم حل العبور الهندسي للمشروع التالي:
- العائق الجغرافي: [العائق] (مجرى مائي ملاحي عريض، وادٍ عميق، أو نفق تحت منطقة سكنية مكتظة)
- حمولة وحركة المرور: [المرور] (طريق سريع، قطار فائق السرعة)

المخرجات الهندسية:
1. المفاضلة بين خيارات الجسور (جسور خرسانية مسبقة الإجهاد، كباري معلقة بالكابلات Cable-stayed، أو حفر نفق بآلة الحفر العملاقة TBM).
2. طريقة التشييد والتركيب في الموقع (طريقة الكابولي المتوازن Cantilever، أو دفع جسم الكوبري بالرافعات الهيدروليكية).
3. حساب الأحمال الديناميكية الكبرى (مقاومة الزلازل، رياح الأعاصير، واهتزازات القطارات الثقيلة).
4. شبكة المراقبة الإلكترونية لسلامة الجسر (حساسات الألياف الضوئية لمراقبة الإجهادات والانحناء لحظياً).`,
    level: 'expert',
    ai_compatibility: ['Claude', 'ChatGPT', 'Gemini'],
    tags: ['bridge engineering', 'tunneling', 'civil infrastructure', 'structural dynamics', 'prestress']
  },

  // ==========================================
  // CATÉGORIE 17 : TRADUCTION ET LANGUES (15 prompts)
  // ==========================================
  {
    id: 'pml-tra-01',
    slash: '/tra-french-arabic-literary',
    title_fr: 'Traducteur Littéraire & Stylistique Français - Arabe',
    title_ar: 'الترجمة الأدبية والبلاغية الرفيعة بين الفرنسية والعربية',
    category_id: 'translation',
    category_fr: 'Traduction et langues',
    category_ar: 'الترجمة واللغويات والتعريب',
    function_fr: 'Traduire un texte littéraire ou philosophique en préservant le souffle, les métaphores et la musicalité',
    function_ar: 'ترجمة النصوص الإبداعية والفلسفية بروح أدبية فصيحة تحفظ بلاغة التعبير وجمال المعنى',
    prompt_fr: `Tu es un Traducteur Littéraire chevronné, membre d'associations de traducteurs émérites.
Traduis le passage suivant avec la plus haute exigence stylistique :
- Texte source :
[TEXTE_SOURCE]
- Sens de traduction : [SENS] (Français vers Arabe littéraire châtié / Arabe vers Français élégant)

Consignes de maître traducteur :
1. Ne fais jamais de traduction mot-à-mot servile ; retranscris fidèlement la voix d'auteur, les images poétiques et le sous-texte.
2. Utilise une langue riche, fluide, grammaticalement irréprochable et naturelle pour le lecteur cultivé.
3. Ajoute des notes du traducteur (NdT) en bas de page pour expliquer les jeux de mots ou références culturelles intraduisibles.`,
    prompt_ar: `أنت مترجم أدبي قدير وعضو في مجامع الترجمة واللغة العربية:
ترجم النص التالي بأعلى درجات البلاغة والأناقة الأدبية:
- النص الأصلي:
[النص_الأصلي]
- اتجاه الترجمة: [الاتجاه] (من الفرنسية إلى العربية الفصحى الرصينة، أو العكس)

معايير الترجمة الراقية:
1. الابتعاد التام عن الترجمة الحرفية الجافة، واستيعاب روح النص ونبرة الكاتب وجمالياته الفنية.
2. صياغة فصيحة، ثرية، عذبة الإيقاع تحاكي أسلوب كبار الأدباء.
3. إرفاق هوامش توضيحية خفيفة إذا اقتضت الضرورة شرح بعد ثقافي أو تلميح لغوي خاص.`,
    level: 'expert',
    ai_compatibility: ['Claude', 'ChatGPT', 'Gemini'],
    tags: ['literary translation', 'arabic translation', 'french translation', 'style', 'literature']
  },
  {
    id: 'pml-tra-02',
    slash: '/tra-legal-certified-contract',
    title_fr: 'Traducteur Juridique Assermenté (Contrats & Statuts)',
    title_ar: 'الترجمة القانونية المعتمدة للعقود والاتفاقيات الرسمية',
    category_id: 'translation',
    category_fr: 'Traduction et langues',
    category_ar: 'الترجمة واللغويات والتعريب',
    function_fr: 'Traduire des contrats commerciaux et jugements avec terminologie juridique exacte',
    function_ar: 'ترجمة الوثائق النظامية والقضائية بدقة مصطلحية تامة تمنع أي التباس قانوني',
    prompt_fr: `Tu es un Traducteur Juridique Assermenté auprès des tribunaux.
Traduis le document contractuel suivant :
- Texte juridique :
[TEXTE_JURIDIQUE]
- Sens de traduction : [SENS] (Français vers Arabe juridique / Arabe vers Français)

Exigences de rigueur légale :
1. Respect strict des termes juridiques consacrés (ex: "Attendu que" -> "حيث أن", "Nonobstant" -> "بصرف النظر عن", "Dommages-intérêts" -> "التعويض عن الأضرار").
2. Conservation scrupuleuse de la structure des clauses, renvois d'articles et conditions suspensives.
3. Aucune ambiguïté sémantique qui pourrait fragiliser la portée juridique du contrat devant un juge.`,
    prompt_ar: `بصفتك مترجماً قانونياً معتمداً ومحلفاً لدى المحاكم الدولية:
ترجم الوثيقة التعاقدية التالية:
- النص القانوني:
[النص]
- اتجاه الترجمة: [الاتجاه] (بين العربية والفرنسية)

المعايير القانونية الصارمة:
1. الالتزام بالمصطلحات الفقهية والنظامية المعتمدة في صياغة العقود.
2. المحافظة التامة على ترقيم البنود، الإحالات، والشروط الجزائية بدقة متطابقة.
3. تفادي أي غموض لغوي قد يغير المعنى المقصود أو يخل بالالتزامات التعاقدية أمام القضاء.`,
    level: 'expert',
    ai_compatibility: ['Claude', 'ChatGPT', 'Gemini'],
    tags: ['legal translation', 'contracts', 'certified translation', 'law', 'sworn translator']
  },
  {
    id: 'pml-tra-03',
    slash: '/tra-software-localization-i18n',
    title_fr: 'Localisateur de Logiciels & Applications (i18n / l10n)',
    title_ar: 'تعريب وتوطين البرمجيات والتطبيقات الرقمية Localization',
    category_id: 'translation',
    category_fr: 'Traduction et langues',
    category_ar: 'الترجمة واللغويات والتعريب',
    function_fr: 'Localiser des fichiers de langue JSON/Gettext avec variables et règles de pluriel complexes',
    function_ar: 'تعريب واجهات البرامج وملفات JSON مع حماية المتغيرات وضبط صيغ الجموع في العربية',
    prompt_fr: `Tu es un Expert en Localisation de Logiciels (i18n/l10n).
Traduis et adapte le fichier de clés de langue suivant :
- Format : [FORMAT] (JSON, Gettext .po, strings iOS, XML Android)
- Contenu du fichier source :
[FICHIER_SOURCE]
- Langue cible : [LANGUE_CIBLE] (ex: Arabe avec prise en compte du format RTL et des 6 formes de pluriel)

Directives de localisation :
1. Ne JAMAIS modifier ou traduire les clés de code, noms de variables ({userName}, %d, $count) ni les balises HTML.
2. Adapter les règles de pluriel de la langue cible (en arabe : zéro, un, deux, peu, beaucoup, autres).
3. Veiller à la brièveté des textes pour qu'ils s'intègrent sans déborder des boutons d'interface utilisateur.`,
    prompt_ar: `أنت خبير في تعريب وهندسة توطين البرمجيات (Software Localization):
قم بتعريب وتوطين ملف النصوص والترجمة التالي:
- صيغة الملف: [الصيغة] (JSON أو Android XML أو iOS Strings)
- محتوى الملف:
[الملف]
- اللغة المستهدفة: [اللغة] (العربية مع مراعاة الواجهات من اليمين لليسار RTL)

قواعد التعريب البرمجي:
1. منع ترجمة أو المساس بأسماء المتغيرات البرمجية داخل الأقواس ({count}, %s) أو وسوم HTML.
2. تطبيق قواعد الجموع العربية الست بدقة (مفرد، مثنى، جمع قلة، جمع كثرة، صفر).
3. مراعاة إيجاز النصوص لتتناسب تماماً مع مساحات الأزرار والشاشات دون اقتصاص.`,
    level: 'intermediaire',
    ai_compatibility: ['Cursor', 'Claude', 'ChatGPT'],
    tags: ['localization', 'i18n', 'l10n', 'software translation', 'json', 'rtl']
  },
  {
    id: 'pml-tra-04',
    slash: '/tra-transcreation-advertising',
    title_fr: 'Transcréateur Publicitaire & Adaptation de Slogans',
    title_ar: 'الترجمة الإبداعية للحملات الإعلانية والشعارات Transcreation',
    category_id: 'translation',
    category_fr: 'Traduction et langues',
    category_ar: 'الترجمة واللغويات والتعريب',
    function_fr: 'Recréer le pouvoir évocateur d’une punchline ou d’un slogan sans traduire littéralement',
    function_ar: 'إعادة ابتكار الشعار الإعلاني ليثير نفس المشاعر القوية في الثقافة المستهدفة',
    prompt_fr: `Tu es un Concepteur-Rédacteur Bilingue Spécialiste de la Transcréation (Traduction créative publicitaire).
Adapte la campagne publicitaire suivante :
- Slogan ou accroche d'origine : "[SLOGAN]"
- Marque et produit : [MARQUE]
- Marché cible et culture : [MARCHE_CIBLE] (ex: Monde arabe, pays du Golfe vs France)

Fournis 3 propositions de transcréation distinctes :
Pour chaque proposition :
1. Le texte adapté dans la langue cible.
2. La rétro-traduction littérale vers la langue source pour expliquer le sens exact.
3. Pourquoi cette formulation résonne profondément avec les valeurs et références culturelles du public cible.`,
    prompt_ar: `بصفتك كاتب إعلانات ومبدعاً في الترجمة الابتكارية (Transcreation):
قم بإعادة ابتكار الشعار أو الحملة الإعلانية التالية:
- الشعار أو العبارة الأصلية: "[الشعار]"
- العلامة والمنتج: [العلامة]
- السوق والثقافة المستهدفة: [السوق]

قدم 3 خيارات إبداعية مختلفة:
لكل خيار:
1. النص المبتكر في لغة وثقافة الجمهور المستهدف.
2. الترجمة العكسية الحرفية لتوضيح المعنى الدقيق لفريق التسويق.
3. التبرير النفسي والثقافي لسبب ملامسة هذا التعبير لوجدان ومشاعر المستهلك المحلي.`,
    level: 'intermediaire',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['transcreation', 'copywriting', 'advertising', 'slogans', 'marketing translation']
  },
  {
    id: 'pml-tra-05',
    slash: '/tra-medical-clinical-pharma',
    title_fr: 'Traducteur Médical & Essais Cliniques',
    title_ar: 'الترجمة الطبية والدوائية الدقيقة للأبحاث والتقارير السريرية',
    category_id: 'translation',
    category_fr: 'Traduction et langues',
    category_ar: 'الترجمة واللغويات والتعريب',
    function_fr: 'Traduire des protocoles médicaux, notices pharmaceutiques et comptes-rendus opératoires',
    function_ar: 'ترجمة النشرات الدوائية والتشخيص الطبي وفق المعاجم الطبية المعتمدة بدقة متناهية',
    prompt_fr: `Tu es un Médecin et Traducteur Médical Spécialisé.
Traduis l'extrait médical suivant :
- Texte médical :
[TEXTE_MEDICAL]
- Sens de traduction : [SENS]

Directives de sécurité médicale :
1. Utilisation exclusive de la nomenclature médicale internationale officielle (Terminologie MeSH et MedDRA).
2. Vérification rigoureuse des unités de dosage, posologies et voies d'administration (zéro tolérance pour l'erreur).
3. Clarté absolue pour éviter tout risque de contre-sens thérapeutique.`,
    prompt_ar: `بصفتك طبيباً ومترجماً طبياً متخصصاً في الدراسات السريرية:
ترجم النص الطبي التالي:
- النص الطبي:
[النص]
- اتجاه الترجمة: [الاتجاه]

معايير السلامة والدقة الطبية:
1. الاستناد حصراً للمصطلحات الطبية المعيارية المعتمدة في المعاجم الطبية الموحدة (MeSH / MedDRA).
2. التدقيق البالغ في وحدات القياس، الجرعات الدوائية، وموانع الاستعمال دون أي خطأ.
3. وضوح قاطع يمنع أي التباس في التشخيص أو الخطة العلاجية.`,
    level: 'expert',
    ai_compatibility: ['Claude', 'ChatGPT', 'Gemini'],
    tags: ['medical translation', 'clinical trials', 'pharmaceutical', 'health', 'medicine']
  },
  {
    id: 'pml-tra-06',
    slash: '/tra-audiovisual-subtitling',
    title_fr: 'Adaptateur Audiovisuel & Sous-Titrage (Subtitling)',
    title_ar: 'ترجمة الأفلام وضبط الشارة والترجمة المرئية Subtitling',
    category_id: 'translation',
    category_fr: 'Traduction et langues',
    category_ar: 'الترجمة واللغويات والتعريب',
    function_fr: 'Traduire et condenser les dialogues selon les contraintes de lecture (37 caractères par ligne, vitesse CPS)',
    function_ar: 'ترجمة حوارات الفيديو واختصارها لتناسب سرعة قراءة المشاهد على الشاشة',
    prompt_fr: `Tu es un Sous-Titreur Audiovisuel Professionnel.
Adapte les répliques suivantes en sous-titres conformes aux normes professionnelles (Netflix / Broadcast) :
- Dialogues originaux avec timecodes :
[DIALOGUES]
- Langue cible : [LANGUE]

Règles de sous-titrage strictes :
1. Limite de longueur : Maximum 37 à 42 caractères par ligne (espaces compris) et 2 lignes maximum par sous-titre.
2. Vitesse de lecture : Ne pas dépasser 15 à 17 caractères par seconde (CPS) pour laisser le temps de lire.
3. Condensation intelligente : Éliminer les répétitions et hésitations orales tout en préservant le sens et l'émotion.
4. Respect de la ponctuation spécifique au sous-titrage.`,
    prompt_ar: `أنت مترجم شاشات ووسائط مرئية معتمد (Subtitler):
قم بترجمة وتنسيق الحوارات التالية لتناسب معايير البث العالمية:
- نص الحوارات مع التوقيت الزمني:
[الحوارات]
- اللغة المستهدفة: [اللغة]

قواعد الترجمة المرئية:
1. حد الأحرف: لا يتجاوز السطر 37 إلى 40 حرفاً، وبحد أقصى سطرين في الشاشة الواحدة.
2. سرعة القراءة (CPS): لا تزيد عن 15 إلى 17 حرفاً في الثانية لضمان راحة المشاهد.
3. الاختصار الذكي: التخلص من التردد والحشو اللفظي مع الحفاظ على روح الحوار وشخصية المتحدث.
4. التنسيق الزمني الصارم ومراعاة فواصل الجمل.`,
    level: 'intermediaire',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['subtitling', 'audiovisual translation', 'netflix standards', 'video captioning']
  },
  {
    id: 'pml-tra-07',
    slash: '/tra-financial-annual-report',
    title_fr: 'Traducteur Financier & Rapports Annuels IFRS',
    title_ar: 'الترجمة المالية للتقارير السنوية وقوائم الشركات IFRS',
    category_id: 'translation',
    category_fr: 'Traduction et langues',
    category_ar: 'الترجمة واللغويات والتعريب',
    function_fr: 'Traduire états financiers, bilans et notes annexes selon le référentiel comptable international',
    function_ar: 'ترجمة القوائم المالية والتقارير المحاسبية بمطابقة مصطلحات المعايير الدولية IFRS',
    prompt_fr: `Tu es un Traducteur Financier Senior spécialisé dans les publications des sociétés cotées.
Traduis l'extrait de rapport financier suivant :
- Contenu financier :
[TEXTE_FINANCIER]
- Sens de traduction : [SENS]

Exigences professionnelles :
1. Respect rigoureux de la terminologie des normes comptables internationales IFRS / GAAP.
2. Exactitude absolue des chiffres, libellés de postes de bilan et notes annexes.
3. Style formel, sobre et institutionnel convenant aux analystes financiers et actionnaires.`,
    prompt_ar: `بصفتك مترجماً مالياً متخصصاً في إفصاحات الشركات المدرجة في البورصة:
ترجم التقرير المالي التالي:
- النص المالي:
[النص]
- اتجاه الترجمة: [الاتجاه]

المعايير المعتمدة:
1. الالتزام الدقيق بمصطلحات معايير المحاسبة الدولية (IFRS / GAAP).
2. مطابقة بنود الميزانية العمومية وقائمة التدفقات النقدية والأرقام دون أدنى خطأ.
3. صياغة رصينة ومحايدة تناسب المستثمرين والمحللين الماليين.`,
    level: 'expert',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['financial translation', 'ifrs', 'annual report', 'accounting', 'finance']
  },
  {
    id: 'pml-tra-08',
    slash: '/tra-etymology-idiom-explorer',
    title_fr: 'Linguiste & Décrypteur d’Expressions Idiomatiques et Proverbes',
    title_ar: 'دراسة الأصول اللغوية والتعبيرات الاصطلاحية والأمثال الشعبية',
    category_id: 'translation',
    category_fr: 'Traduction et langues',
    category_ar: 'الترجمة واللغويات والتعريب',
    function_fr: 'Trouver l’équivalent culturel exact d’une expression idiomatique plutôt qu’une traduction plate',
    function_ar: 'إيجاد المقابل الثقافي الأصيل للأمثال والتعبيرات الشعبية وشرح جذورها التاريخية',
    prompt_fr: `Tu es un Linguiste Comparatiste et Lexicologue.
Pour l'expression idiomatique ou le proverbe suivant :
- Expression : "[EXPRESSION]"
- Langue de départ : [LANGUE_DEPART]

Produis l'analyse culturelle et l'équivalence :
1. Signification exacte et registre de langue (Familier, courant, littéraire).
2. Origine historique ou étymologique fascinante de l'expression.
3. L'équivalent exact idiomatique dans la langue cible (ex: en arabe ou en français) qui véhicule la même métaphore populaire.
4. Les faux-amis et pièges de traduction à éviter absolument.`,
    prompt_ar: `أنت باحث لغوي وخبير في فقه اللغة المقارن (Comparative Linguistics):
للتعبير الاصطلاحي أو المثل التالي:
- التعبير أو المثل: "[التعبير]"
- لغة الأصل: [اللغة]

المطلوب في التحليل اللغوي المقارن:
1. المعنى الحقيقي وسياق الاستخدام الدقيق (شعبي، عام، أو فصيح).
2. القصة التاريخية أو الجذر اللغوي الذي نشأ منه هذا المثل.
3. المثل المقابل الأصيل في الثقافة الأخرى الذي يحمل نفس الحكمة والدلالة الشعبية تماماً.
4. التحذير من الترجمة الحرفية والمصائد الشائعة في نقله.`,
    level: 'debutant',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['idioms', 'proverbs', 'etymology', 'linguistics', 'culture']
  },
  {
    id: 'pml-tra-09',
    slash: '/tra-arabic-diacritization-tashkeel',
    title_fr: 'Grammairien Arabe & Vocalisation Intégrale (Tashkeel)',
    title_ar: 'الضبط النحوي والتشكيل الكامل للنصوص العربية بالحركات Tashkeel',
    category_id: 'translation',
    category_fr: 'Traduction et langues',
    category_ar: 'الترجمة واللغويات والتعريب',
    function_fr: 'Vocaliser intégralement un texte arabe selon les règles strictes de la grammaire (Nahw et Sarf)',
    function_ar: 'تشكيل النصوص العربية تشكيلاً تاماً وفق أصول النحو والصرف وتفادي أخطاء الإعراب',
    prompt_fr: `Tu es un Éminent Grammairien de la Langue Arabe (Spécialiste de la grammaire Nahw et morphologie Sarf).
Vocalise intégralement avec les signes diacritiques (Tashkeel complet) le texte arabe suivant :
[TEXTE_ARABE]

Règles de rigueur grammaticale :
1. Application rigoureuse de la vocalisation des désinences finales selon la fonction grammaticale dans la phrase (I'rab : Damma, Fatha, Kasra, Sukun, Tanween).
2. Placement précis des Shaddas sur les lettres solaires et consonnes géminées.
3. Respect des Hamzas de liaison (Hamzat al-Wasl) et de coupure (Hamzat al-Qat').
4. Ajout d'une brève note grammaticale justifiant le cas des 3 mots les plus délicats du texte.`,
    prompt_ar: `أنت عالم لغوي ونحوي متبحر في قواعد النحو والصرف:
قم بالتشكيل الكامل والدقيق لكلمات النص العربي التالي بالحركات الإعرابية:
[النص_العربي]

القواعد الصارمة:
1. ضبط أواخر الكلمات وفق موقعها الإعرابي الدقيق (رفع، نصب، جر، جزم).
2. إثبات الشدات بدقة على الحروف المشددة واللام الشمسية.
3. مراعاة همزتي الوصل والقطع وضبط التنوين في مواضعه الصحيحة.
4. إرفاق تعليل إعرابي موجز لضبط أصعب 3 كلمات في النص لبيان وجه الإعراب المعتمد.`,
    level: 'expert',
    ai_compatibility: ['Claude', 'ChatGPT', 'Gemini'],
    tags: ['tashkeel', 'arabic grammar', 'nahw', 'sarf', 'diacritics', 'arabic language']
  },
  {
    id: 'pml-tra-10',
    slash: '/tra-french-proofreading-ortho',
    title_fr: 'Correcteur & Relecteur de Style Français (Revue Typographique)',
    title_ar: 'التدقيق اللغوي والإملائي الفرنسي وضبط القواعد والأسلوب',
    category_id: 'translation',
    category_fr: 'Traduction et langues',
    category_ar: 'الترجمة واللغويات والتعريب',
    function_fr: 'Chasser les fautes de grammaire, accords complexes et respecter le Code Typographique',
    function_ar: 'تصحيح الأخطاء اللغوية الفرنسية والالتزام بقواعد الطباعة وعلامات الترقيم',
    prompt_fr: `Tu es Correcteur Professionnel d'Édition et Réviseur de Style (dans la tradition de l'Imprimerie Nationale).
Passe au crible le texte français suivant :
[TEXTE_FRANCAIS]

Interventions à réaliser :
1. Correction intraitable de l'orthographe, de la grammaire (accords des participes passés avec COD, concordance des temps).
2. Respect rigoureux du Code Typographique français (Espaces insécables avant les signes doubles : ; ! ?, guillemets français « », majuscules accentuées É, À, Ç).
3. Amélioration stylistique subtile : suppression des répétitions, pléonasmes et tournures passives lourdes.
4. Tableau récapitulatif des corrections effectuées avec explications de la règle de grammaire.`,
    prompt_ar: `بصفتك مدققاً لغوياً ومراجعاً محترفاً للنصوص الفرنسية في دور النشر الكبرى:
قم بمراجعة وتدقيق النص الفرنسي التالي:
[النص]

خطوات المراجعة:
1. تصويب الأخطاء النحوية والإملائية بدقة (مطابقة أسماء المفعول، وتناسق الأزمنة).
2. تطبيق قواعد الطباعة الفرنسية الرسمية (المسافات غير المنكسرة قبل علامات الترقيم المزدوجة، وعلامات التنصيص الفرنسية « »، ورسم الحركات على الحروف الكبيرة).
3. تحسين الأسلوب: التخلص من التكرار اللفظي والصيغ الركيكة.
4. جدول يوضح التعديلات التي تمت مع ذكر القاعدة النحوية لكل تصويب.`,
    level: 'intermediaire',
    ai_compatibility: ['Claude', 'ChatGPT', 'Gemini'],
    tags: ['french proofreading', 'grammar', 'orthography', 'typography', 'editing']
  },
  {
    id: 'pml-tra-11',
    slash: '/tra-diplomatic-speech-protocol',
    title_fr: 'Traducteur Diplomatique & Relations Internationales',
    title_ar: 'الترجمة الدبلوماسية والمراسلات الرسمية بين الدول',
    category_id: 'translation',
    category_fr: 'Traduction et langues',
    category_ar: 'الترجمة واللغويات والتعريب',
    function_fr: 'Traduire notes verbales, traités et allocutions bilatérales avec étiquette protocolaire',
    function_ar: 'صياغة المذكرات الدبلوماسية والخطابات البروتوكولية بأعلى درجات اللباقة والكياسة',
    prompt_fr: `Tu es Conseiller Diplomatique et Traducteur auprès d'une Ambassade ou d'un Ministère des Affaires Étrangères.
Traduis la communication officielle suivante :
- Texte diplomatique :
[TEXTE_DIPLOMATIQUE]
- Sens de traduction : [SENS]

Consignes protocolaires :
1. Respect absolu des formules d'usage diplomatiques (Titres d'excellence, formules de politesse protocolaires consacrées).
2. Nuance et pondération extrême du vocabulaire pour préserver le sens géopolitique sans commettre d'incident diplomatique.
3. Rigueur de ton : solennité, courtoisie institutionnelle et clarté souveraine.`,
    prompt_ar: `بصفتك مستشاراً ومترجماً دبلوماسياً في وزارة الخارجية والسفارات الدولية:
ترجم المراسلة الرسمية التالية:
- النص الدبلوماسي:
[النص]
- اتجاه الترجمة: [الاتجاه]

المعايير البروتوكولية:
1. الالتزام الدقيق بالألقاب والمسميات الرسمية المعتمدة في الأعراف الدبلوماسية الدولية.
2. الدقة المتناهية في اختيار المفردات السياسية الحساسة لتفادي أي سوء فهم بين الدول.
3. لغة رصينة تجمع بين الكياسة والوضوح السيادي والوقار المؤسسي.`,
    level: 'expert',
    ai_compatibility: ['Claude', 'ChatGPT', 'Gemini'],
    tags: ['diplomatic translation', 'international relations', 'protocol', 'geopolitics']
  },
  {
    id: 'pml-tra-12',
    slash: '/tra-technical-patent-industrial',
    title_fr: 'Traducteur Brevets & Manuels d’Ingénierie Industrielle',
    title_ar: 'الترجمة التقنية لبراءات الاختراع والكتالوجات الصناعية',
    category_id: 'translation',
    category_fr: 'Traduction et langues',
    category_ar: 'الترجمة واللغويات والتعريب',
    function_fr: 'Traduire des spécifications techniques de machines, schémas et revendications de brevets',
    function_ar: 'نقل المصطلحات الهندسية الدقيقة للأجهزة والمعدات مع الحفاظ على التناسق المصطلحي',
    prompt_fr: `Tu es un Traducteur Technique et Ingénieur Bilingue.
Traduis la documentation technique suivante :
- Domaine : [DOMAINE] (ex: Aéronautique, injection plastique, robotique industrielle)
- Texte technique :
[TEXTE_TECHNIQUE]
- Sens de traduction : [SENS]

Livrables de traduction industrielle :
1. Cohérence absolue de la terminologie métier tout au long du document (un terme = une seule traduction identique).
2. Précision chirurgicale pour les composants mécaniques, électriques et consignes de sécurité (DANGER, AVERTISSEMENT).
3. Glossaire bilingue récapitulatif des 10 termes techniques clés en fin de traduction.`,
    prompt_ar: `أنت مهندس ومترجم تقني متخصص في التوثيق الصناعي وبراءات الاختراع:
ترجم النص التقني التالي:
- المجال الهندسي: [المجال] (طيران، أنظمة تحكم صناعي، روبوتات)
- النص التقني:
[النص]
- اتجاه الترجمة: [الاتجاه]

المعايير الصناعية:
1. الثبات المصطلحي التام (نفس المصطلح التقني يترجم دائماً بنفس الكلمة دون تغيير عشوائي).
2. الدقة الهندسية في أسماء القطع، المحركات، وتنبيهات الأمان والسلامة المهنية.
3. جدول مسرد مصطلحات (Glossary) ثنائي اللغة في نهاية الترجمة لأهم 10 مصطلحات فنية.`,
    level: 'intermediaire',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['technical translation', 'engineering', 'patents', 'industrial manuals', 'glossary']
  },
  {
    id: 'pml-tra-13',
    slash: '/tra-video-game-lore-dialogue',
    title_fr: 'Localisateur de Jeux Vidéo (Jeux de Rôle & Lore)',
    title_ar: 'تعريب وترجمة ألعاب الفيديو والروايات التفاعلية Game Localization',
    category_id: 'translation',
    category_fr: 'Traduction et langues',
    category_ar: 'الترجمة واللغويات والتعريب',
    function_fr: 'Traduire l’univers fantastique, les dialogues de PNJ et les descriptions d’objets magiques',
    function_ar: 'تعريب عوالم الألعاب الخيالية وأسماء الأسلحة والمهمات بأسلوب ملحمي مشوق',
    prompt_fr: `Tu es un Game Localizer passionné de jeux de rôle (RPG) et d'univers Fantasy / Sci-Fi.
Traduis et adapte le texte du jeu vidéo suivant :
- Type de contenu : [CONTENU] (Dialogues de quête, description d'artéfact légendaire, sorts magiques)
- Texte source en anglais ou français :
[TEXTE_SOURCE]
- Langue cible : [LANGUE_CIBLE]

Consignes d'immersion ludique :
1. Donner un souffle épique ou mystérieux adapté à l'univers du jeu (vocabulaire noble, archaïsmes choisis).
2. Créer des noms de sorts et d'équipements percutants et mémorables.
3. Conserver la cohérence du Lore et des noms propres de factions.`,
    prompt_ar: `أنت متخصص في تعريب ألعاب الفيديو والألعاب الخيالية الملحمية (Game Localization):
عرب ونقل المحتوى التالي من اللعبة:
- نوع المحتوى: [المحتوى] (حوارات مهمة ملحمية، وصف سلاح أسطوري، تعاويذ سحرية)
- النص الأصلي:
[النص]
- اللغة المستهدفة: العربية الفصحى

معايير الانغماس السردي:
1. إضفاء طابع ملحمي غامض ومشوق يتوافق مع أجواء اللعبة والفانتازيا.
2. ابتكار مسميات عربية أصيلة وفخمة للأسلحة والقدرات القتالية تظل عالقة في ذهن اللاعب.
3. التناسق الكامل مع أسماء الفصائل والعوالم التاريخية للعبة.`,
    level: 'intermediaire',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['game localization', 'gaming', 'rpg', 'creative writing', 'translation']
  },
  {
    id: 'pml-tra-14',
    slash: '/tra-arabic-calligraphy-script',
    title_fr: 'Conseiller Styles Calligraphiques Arabes & Typographie',
    title_ar: 'استشارات واختيار خطوط الخط العربي الأصيل وتطبيقاتها المعاصرة',
    category_id: 'translation',
    category_fr: 'Traduction et langues',
    category_ar: 'الترجمة واللغويات والتعريب',
    function_fr: 'Sélectionner le style calligraphique arabe idéal (Thuluth, Diwani, Kufi, Naskh, Ruq’ah) pour un projet',
    function_ar: 'المفاضلة الفنية بين أنواع الخطوط العربية العريقة بحسب طبيعة التصميم والاستخدام',
    prompt_fr: `Tu es un Maître Calligraphe Arabe et Historien des Arts de l'Islam.
Conseille la typographie et le style calligraphique approprié pour :
- Projet : [PROJET] (ex: Titre d'un livre d'histoire, logo d'une marque de luxe, signalétique d'un musée, diplôme officiel)
- Texte ou mot à valoriser : "[TEXTE]"

Guide d'expertise calligraphique :
1. Recommandation argumentée du style historique le plus pertinent (Thuluth pour la majesté, Kufi géométrique pour la modernité architecturale, Diwani pour la grâce ornementale, Naskh pour la lisibilité).
2. Règles de composition calligraphique (Équilibre des ligatures, imbrications, gestion des vides).
3. Recommandation des polices numériques modernes inspirées de ce style disponibles pour le web et le print.`,
    prompt_ar: `أنت خطاط وفنان معتمد في فنون الخط العربي وتاريخ الزخرفة الإسلامية:
قدم المشورة الفنية لاختيار الخط العربي الأنسب لمشروع:
- طبيعة المشروع: [المشروع] (شعار علامة فاخرة، غلاف كتاب فكري، لوحات متحف، شهادة شكر)
- النص المراد كتابته: "[النص]"

دليل التوجيه الفني:
1. الترشيح الفني لنوع الخط التاريخي الأنسب (الثلث للهيبة والجلال، الكوفي الهندسي للمعاصرة المعمارية، الديواني للأناقة والرشاقة، والنسخ للوضوح والقراءة).
2. قواعد التكوين الفني وتوزيع الكلمات والتناغم البصري بين الحروف.
3. اقتراح الخطوط الرقمية الحديثة المتوفرة التي تحاكي هذا النمط للاستخدام في المواقع والتصميم.`,
    level: 'debutant',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['arabic calligraphy', 'typography', 'art', 'thuluth', 'kufi', 'diwani']
  },
  {
    id: 'pml-tra-15',
    slash: '/tra-multilingual-glossary-maker',
    title_fr: 'Terminologue & Créateur de Glossaire Bilingue d’Entreprise',
    title_ar: 'صناعة القواميس والمسارد المصطلحية الموحدة للمؤسسات Glossary',
    category_id: 'translation',
    category_fr: 'Traduction et langues',
    category_ar: 'الترجمة واللغويات والتعريب',
    function_fr: 'Harmoniser le jargon interne d’une multinationale dans un glossaire bilingue strict',
    function_ar: 'توحيد المصطلحات التقنية والإدارية للمؤسسة في مسرد رسمي يلتزم به الجميع',
    prompt_fr: `Tu es un Terminologue en Entreprise Multinationale.
Construis le glossaire bilingue institutionnel pour le secteur suivant :
- Domaine d'activité : [DOMAINE] (ex: Fintech, Énergie décarbonée, SaaS d'ingénierie)
- Langues : Français - Arabe (avec équivalents anglais de référence)

Génère une table terminologique de 15 termes critiques comprenant pour chaque terme :
1. Terme français officiel.
2. Équivalent arabe normé recommandé par les académies de langue.
3. Équivalent anglais de référence.
4. Définition concise du concept (moins de 25 mots).
5. Termes erronés ou anglicismes proscrits à bannir des communications de l'entreprise.`,
    prompt_ar: `بصفتك خبيراً في علم المصطلحات (Terminology) في الشركات الدولية:
قم ببناء مسرد مصطلحات موحد (Glossary) للقطاع التالي:
- مجال العمل: [المجال] (التقنية المالية Fintech، الطاقة المتجددة، الحلول السحابية)
- اللغات: الفرنسية - العربية (مع المعادل الإنجليزي القياسي)

المطلوب إعداد جدول يضم 15 مصطلحاً محورياً يشمل لكل مصطلح:
1. المصطلح بالفرنسية.
2. المقابل العربي المعتمد والمطابق لمجامع اللغة العربية.
3. المصطلح الإنجليزي المعياري.
4. تعريف موجز للمفهوم في حدود 20 كلمة.
5. المصطلحات والترجمات الخاطئة الشائعة التي يحظر استخدامها في وثائق الشركة.`,
    level: 'intermediaire',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['glossary', 'terminology', 'bilingual', 'corporate language', 'translation']
  },

  // ==========================================
  // CATÉGORIE 18 : INNOVATION ET R&D (15 prompts)
  // ==========================================
  {
    id: 'pml-inn-01',
    slash: '/inn-scamper-ideation',
    title_fr: 'Facilitateur d’Idéation par la Méthode SCAMPER',
    title_ar: 'توليد الأفكار الابتكارية بتقنية سكامبر SCAMPER الإبداعية',
    category_id: 'innovation',
    category_fr: 'Innovation et R&D',
    category_ar: 'الابتكار والبحث والتطوير',
    function_fr: 'Réinventer un produit existant en le soumettant aux 7 questions de transformation SCAMPER',
    function_ar: 'إعادة ابتكار المنتجات القائمة عبر عدسات التحويل السبع لابتكار نسخ ثورية',
    prompt_fr: `Tu es un Facilitateur en Créativité Industrielle et Design Thinking.
Applique la méthode SCAMPER pour réinventer totalement le produit ou service suivant :
- Produit actuel : [PRODUIT]

Développe 1 à 2 idées innovantes concrètes pour chacun des 7 leviers :
1. S - Substituer (Quels matériaux, composants ou étapes remplacer ?).
2. C - Combiner (Avec quel autre service ou technologie l'associer ?).
3. A - Adapter (Quelle solution venant d'un secteur totalement différent transposer ?).
4. M - Modifier / Magnifier (Que grossir, miniaturiser ou intensifier ?).
5. P - Proposer d'autres usages (Comment le détourner pour une toute nouvelle cible ?).
6. E - Éliminer (Que supprimer pour le rendre 10 fois plus simple ?).
7. R - Réorganiser / Renverser (Quel ordre inverser ou faire à l'envers ?).
Sélectionne la proposition la plus disruptive en conclusion.`,
    prompt_ar: `أنت خبير في مهارات التفكير الإبداعي الصناعي وتصميم الابتكار:
طبق منهجية SCAMPER لإعادة ابتكار وتطوير المنتج أو الخدمة التالية:
- المنتج الحالي: [المنتج]

ابتكر فكرة أو فكرتين ملموستين لكل محور من المحاور السبعة:
1. S - استبدال (Substitute): ما هي المواد أو الخطوات التي يمكن استبدالها؟
2. C - دمج (Combine): مع أي خدمة أو تقنية أخرى يمكن دمج هذا المنتج؟
3. A - تكييف (Adapt): كيف نستعير فكرة ناجحة من مجال مختلف تماماً وتطبيقها هنا؟
4. M - تعديل وتكبير (Modify): ما الذي يمكن تكبيره أو تصغيره أو مضاعفته؟
5. P - استخدامات أخرى (Put to other uses): كيف يمكن توجيهه لفئة مستهلكين جديدة تماماً؟
6. E - حذف وتبسيط (Eliminate): ما هي المزايا المعقدة التي يمكن حذفها لجعله فائق البساطة؟
7. R - إعادة ترتيب وعكس (Reverse): ما الذي يمكن قلبه أو تنفيذه بترتيب معاكس؟
مع ترشيح الفكرة الأكثر إبهاراً وقابلية للتنفيذ في الختام.`,
    level: 'debutant',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['scamper', 'ideation', 'brainstorming', 'innovation', 'design thinking']
  },
  {
    id: 'pml-inn-02',
    slash: '/inn-blue-ocean-strategy',
    title_fr: 'Architecte Stratégie Océan Bleu & Canevas Stratégique',
    title_ar: 'استراتيجية المحيط الأزرق والهروب من المنافسة الدموية Blue Ocean Strategy',
    category_id: 'innovation',
    category_fr: 'Innovation et R&D',
    category_ar: 'الابتكار والبحث والتطوير',
    function_fr: 'Créer un nouvel espace de marché incontesté en rompant le compromis valeur-coût',
    function_ar: 'ابتكار مساحة سوقية جديدة خالية من المنافسين وتقديم قيمة استثنائية بتكلفة منخفضة',
    prompt_fr: `Tu es un Consultant en Stratégie Océan Bleu (de W. Chan Kim et Renée Mauborgne).
Développe une stratégie d'Océan Bleu pour créer un espace de marché vierge dans l'industrie :
- Secteur d'activité saturé (Océan Rouge) : [SECTEUR]
- Notre entreprise : [ENTREPRISE]

Applique la Grille des 4 Actions (ERRC) :
1. Exclure : Quels facteurs tenus pour acquis par l'industrie doivent être purement et simplement supprimés ?
2. Réduire : Quels facteurs doivent être réduits bien en-dessous des standards du secteur ?
3. Renforcer : Quels facteurs doivent être rehaussés bien au-dessus des standards ?
4. Créer : Quels facteurs inédits jamais proposés par l'industrie doivent être créés de toutes pièces ?
Décris la nouvelle courbe de valeur résultante et le slogan percutant qui rend les concurrents hors-jeu.`,
    prompt_ar: `بصفتك مستشاراً استراتيجياً معتمداً في منهجية المحيط الأزرق (Blue Ocean Strategy):
صمم استراتيجية للخروج من حلبة المنافسة المحتدمة في قطاع:
- القطاع المشبع بالمنافسين (المحيط الأحمر): [القطاع]
- شركتنا ومشروعنا: [الشركة]

تطبيق مصفوفة الإجراءات الأربعة (ERRC Framework):
1. الاستبعاد (Eliminate): ما هي المعايير التي تتسابق عليها الشركات ويجب إلغاؤها تماماً؟
2. التقليص (Reduce): ما هي العناصر المرهقة التي يمكن تقليصها إلى ما دون معايير السوق؟
3. الزيادة (Raise): ما هي العناصر الجوهرية التي يجب رفعها وتطويرها بشكل غير مسبوق؟
4. الابتكار (Create): ما هي الميزة الفريدة التي لم يسبق لأي منافس تقديمها في هذا السوق؟
مع صياغة منحنى القيمة الجديد والشعار التسويقي الذي يبرز التفرد التام.`,
    level: 'expert',
    ai_compatibility: ['Claude', 'ChatGPT', 'Gemini'],
    tags: ['blue ocean', 'strategy', 'value innovation', 'errc grid', 'business strategy']
  },
  {
    id: 'pml-inn-03',
    slash: '/inn-triz-contradiction-matrix',
    title_fr: 'Résolveur de Contradictions Techniques TRIZ',
    title_ar: 'حل التناقضات الهندسية بنظرية تريز الابتكارية TRIZ Matrix',
    category_id: 'innovation',
    category_fr: 'Innovation et R&D',
    category_ar: 'الابتكار والبحث والتطوير',
    function_fr: 'Résoudre un dilemme technique sans compromis en utilisant les 40 principes d’Altschuller',
    function_ar: 'حل المشكلات الهندسية المستعصية دون التضحية بخاصية على حساب أخرى وفق مصفوفة تريز',
    prompt_fr: `Tu es un Maître de la Théorie de Résolution des Problèmes Inventifs (TRIZ).
Résous la contradiction technique suivante :
- Paramètre qu'on veut améliorer : [PARAMETRE_AMELIORE] (ex: Résistance, vitesse, puissance, précision)
- Paramètre qui se dégrade en conséquence : [PARAMETRE_DEGRADE] (ex: Poids, consommation d'énergie, coût, complexité)
- Description du système : [SYSTEME]

Méthode de résolution inventive :
1. Formulation de la contradiction technique dans le langage standardisé des 39 paramètres de TRIZ.
2. Consultation de la Matrice des Contradictions d'Altshuller et identification des 3 à 4 principes inventifs suggérés.
3. Application créative de chaque principe au problème concret (ex: Segmentation, Asymétrie, Dynamisme, Action inverse).
4. Description de la solution finale idéale (IFR - Ideal Final Result) sans aucun compromis dégradant.`,
    prompt_ar: `أنت أستاذ في نظرية الحل الابتكاري للمشكلات الهندسية (TRIZ):
قم بحل التناقض الهندسي التالي دون تقديم تنازلات:
- الخاصية المراد تحسينها: [الخاصية_المستهدفة] (المتانة، السرعة، القوة، الدقة)
- الخاصية التي تسوء وتتدهور نتيجة لذلك: [الخاصية_المتدهورة] (الوزن، استهلاك الطاقة، التكلفة، الحجم)
- وصف النظام الهندسي: [النظام]

خطوات الحل وفق TRIZ:
1. صياغة التناقض بلغة معاملات تريز الـ 39 المعيارية.
2. استخراج المبادئ الابتكارية الأربعة المقترحة من مصفوفة ألتشولر.
3. التطبيق العملي لكل مبدأ على المشكلة الواقعية (التجزئة، عدم التماثل، المرونة والحركية).
4. صياغة النتيجة النهائية المثالية (Ideal Final Result - IFR) التي تحقق الميزتين معاً دون أي عيب.`,
    level: 'expert',
    ai_compatibility: ['Claude', 'ChatGPT', 'Gemini'],
    tags: ['triz', 'inventive problem solving', 'engineering', 'r&d', 'altshuller']
  },
  {
    id: 'pml-inn-04',
    slash: '/inn-horizon-foresight-trend',
    title_fr: 'Prospectiviste & Veille Tendances Futures (Horizons 2035)',
    title_ar: 'استشراف المستقبل والدراسات المستقبلية والاتجاهات الكبرى Foresight',
    category_id: 'innovation',
    category_fr: 'Innovation et R&D',
    category_ar: 'الابتكار والبحث والتطوير',
    function_fr: 'Explorer les méga-tendances et scénarios prospectifs à 10 ans pour anticiper les ruptures',
    function_ar: 'تحليل التحولات الكبرى والتنبؤ بالسيناريوهات المستقبلية للاستعداد للمتغيرات',
    prompt_fr: `Tu es un Prospectiviste et Directeur de l'Innovation Stratégique.
Conduis un exercice de prospective à horizon 10 ans sur le secteur :
- Secteur étudié : [SECTEUR]

Livrables d'exploration future :
1. Identification des 4 Mégatendances lourdes et inéluctables (Démographie, climat, IA/quantique, géopolitique).
2. Détection de 3 Signaux Faibles émergents aujourd'hui mais porteurs de ruptures massives.
3. Élaboration de 3 scénarios prospectifs contrastés à horizon 2035 :
   - Scénario 1 : Le statu quo optimiste / Progrès technologique fluide.
   - Scénario 2 : La fragmentation / Crise et régionalisation.
   - Scénario 3 : La bifurcation radicale / Nouveau paradigme sociétal.
4. Les 3 paris stratégiques à prendre dès aujourd'hui pour être résilient quel que soit le scénario.`,
    prompt_ar: `بصفتك باحثاً في الدراسات المستقبلية والاستشراف الاستراتيجي (Strategic Foresight):
قم بإعداد دراسة استشرافية لـ 10 سنوات قادمة لقطاع:
- القطاع المستهدف: [القطاع]

محاور الاستشراف:
1. رصد الاتجاهات الكبرى الحتمية (Megatrends) في التكنولوجيا، والمناخ، والتركيبة السكانية.
2. استكشاف 3 إشارات تحذيرية أو مبشرة مبكرة (Weak Signals) قد تحدث تحولاً جذرياً في الصناعة.
3. رسم 3 سيناريوهات مستقبلية متباينة لما بعد عام 2035:
   - سيناريو التطور التقني المتسارع.
   - سيناريو الأزمات والتكتلات الإقليمية وتحديات سلاسل الإمداد.
   - سيناريو التحول الجذري وظهور نماذج استهلاك جديدة كلياً.
4. المبادرات والاستثمارات الاستراتيجية التي يجب تبنيها اليوم للصمود والريادة في جميع السيناريوهات.`,
    level: 'expert',
    ai_compatibility: ['Claude', 'ChatGPT', 'Gemini'],
    tags: ['foresight', 'futurism', 'megatrends', 'scenarios', 'strategic innovation']
  },
  {
    id: 'pml-inn-05',
    slash: '/inn-design-thinking-sprint',
    title_fr: 'Facilitateur Design Sprint (Méthode Google Ventures en 5 Jours)',
    title_ar: 'إدارة وتيسير ورش الابتكار السريع في 5 أيام Design Sprint',
    category_id: 'innovation',
    category_fr: 'Innovation et R&D',
    category_ar: 'الابتكار والبحث والتطوير',
    function_fr: 'Organiser un sprint d’innovation pour concevoir et tester un prototype auprès de vrais utilisateurs en 1 semaine',
    function_ar: 'قيادة فرق العمل لابتكار نموذج أولي واختباره مع مستخدمين حقيقيين في أسبوع واحد',
    prompt_fr: `Tu es un Sprint Master certifié Google Ventures Design Sprint.
Organise le déroulement de notre Design Sprint de 5 jours pour résoudre le défi suivant :
- Problème critique à résoudre : [PROBLEME]
- Équipe multidisciplinaire mobilisée (7 personnes max) : [EQUIPE]

Feuille de route jour par jour :
1. Lundi (Comprendre) : Cartographie du problème, interviews d'experts et choix de la cible clé (How Might We).
2. Mardi (Esquisser) : Démos éclair et méthode "Crazy 8's" pour dessiner des solutions divergentes.
3. Mercredi (Décider) : Vote silencieux par gommettes, storyboarding de la solution retenue sans débats interminables.
4. Jeudi (Prototyper) : Création d'une illusion réaliste (Façade prototype) en 7 heures chrono.
5. Vendredi (Tester) : Entretiens individuels avec 5 vrais utilisateurs et extraction des apprentissages clés.`,
    prompt_ar: `أنت ميسر معتمد لمنهجية الابتكار السريع (Google Ventures Design Sprint):
قم بتنظيم وإدارة سبرنت الابتكار لمدة 5 أيام لمعالجة التحدي التالي:
- التحدي المطلوب حله: [التحدي]
- فريق العمل المشارك (فريق متعدد التخصصات): [الفريق]

جدول عمل الأيام الخمسة:
1. الاثنين (الفهم ورسم الخريطة): تحليل المشكلة ومقابلات الخبراء وصياغة أسئلة "كيف يمكننا" (How Might We).
2. الثلاثاء (ابتكار الأفكار): استعراض الحلول الملهمة وتطبيق تمرين Crazy 8's لتوليد 8 أفكار سريعة في 8 دقائق.
3. الأربعاء (اتخاذ القرار): التصويت الصامت بالملصقات وبناء القصة المصورة للمسار المعتمد.
4. الخميس (بناء النموذج الأولي Prototype): تنفيذ نموذج يحاكي الواقع تماماً في يوم عمل واحد.
5. الجمعة (الاختبار الميداني): إجراء 5 مقابلات حية مع مستخدمين حقيقيين لاكتشاف نقاط القوة والضعف.`,
    level: 'intermediaire',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['design sprint', 'google ventures', 'design thinking', 'prototyping', 'innovation']
  },
  {
    id: 'pml-inn-06',
    slash: '/inn-biomimicry-nature-inspire',
    title_fr: 'Ingénieur en Biomimétisme (S’inspirer de la Nature)',
    title_ar: 'الابتكار المستوحى من الطبيعة والكائنات الحية Biomimicry',
    category_id: 'innovation',
    category_fr: 'Innovation et R&D',
    category_ar: 'الابتكار والبحث والتطوير',
    function_fr: 'Résoudre un défi technique en s’inspirant des 3,8 milliards d’années d’évolution biologique',
    function_ar: 'استلهام حلول هندسية عبقرية من تكيف الكائنات الحية والأنظمة الطبيعية',
    prompt_fr: `Tu es un Ingénieur et Biologiste Spécialiste du Biomimétisme (dans l'esprit de Janine Benyus).
Résous le défi d'ingénierie suivant en interrogeant la nature :
- Défi technique : [DEFI] (ex: Adhésion sans colle chimique, refroidissement sans énergie, filtration d'eau sans membrane qui se bouche, aérodynamisme silencieux)

Démarche biomimétique en 4 étapes :
1. Traduction du problème humain en fonctions biologiques universelles ("Comment la nature s'attache-t-elle sous l'eau ?", "Comment la nature dissipe-t-elle la chaleur ?").
2. Identification de 3 organismes vivants champions de cette fonction (ex: Peau de requin, feuilles de lotus, termitières, pattes de gecko).
3. Décodage du mécanisme physique ou biochimique sous-jacent.
4. Transposition en concept d'ingénierie moderne prêt pour le prototypage en laboratoire.`,
    prompt_ar: `بصفتك عالماً ومهندساً متخصصاً في المحاكاة الحيوية (Biomimicry):
ساعدنا في حل التحدي الهندسي التالي مستلهماً من الطبيعة:
- التحدي التقني: [التحدي] (التصاق قوي دون مواد كيميائية، تبريد دون طاقة، حركة صامتة في الهواء)

خطوات المحاكاة الطبيعية:
1. صياغة التحدي البشري في صورة سؤال بيولوجي طبيعي ("كيف تصنع الطبيعة أسطحاً تطرد الأوساخ دون غسيل؟").
2. استعراض 3 كائنات حية أو نباتات أتقنت هذه الوظيفة عبر ملايين السنين (أوراق اللوتس، جلد القرش، بيوت النمل الأبيض).
3. التحليل العلمي للآلية الفيزيائية أو البيوكيميائية التي يعتمد عليها الكائن.
4. ترجمة الآلية الحيوية إلى فكرة هندسية صناعية قابلة للتصنيع في المعامل الحديثة.`,
    level: 'expert',
    ai_compatibility: ['Claude', 'ChatGPT', 'Gemini'],
    tags: ['biomimicry', 'nature inspired', 'sustainable design', 'materials science', 'bionics']
  },
  {
    id: 'pml-inn-07',
    slash: '/inn-reverse-engineering-teardown',
    title_fr: 'Démanteleur Produit & Ingénierie Inverse (Product Teardown)',
    title_ar: 'الهندسة العكسية وتشريح المنتجات المنافسة Product Teardown',
    category_id: 'innovation',
    category_fr: 'Innovation et R&D',
    category_ar: 'الابتكار والبحث والتطوير',
    function_fr: 'Disséquer un produit concurrent pour comprendre ses choix de fabrication, composants et coûts BOM',
    function_ar: 'تفكيك المنتجات الناجحة وفحص طرق تجميعها وخاماتها وتقدير تكلفة تصنيعها BOM',
    prompt_fr: `Tu es un Ingénieur Mécanique et Électronique Spécialiste du Teardown Industriel.
Conduis l'analyse d'ingénierie inverse sur le produit :
- Produit analysé : [PRODUIT]

Structure du rapport de démontage technique :
1. Architecture globale et choix des procédés de fabrication (Injection plastique, usinage CNC, tôlerie emboutie, assemblage par clips sans vis).
2. Analyse de la nomenclature estimée (BOM - Bill of Materials) : identification des composants électroniques clés (SoC, capteurs, batterie) et estimation des coûts unitaires.
3. Choix d'ingénierie remarquables et astuces ingénieuses d'assemblage rapide (Design for Manufacturing & Assembly - DFMA).
4. Vulnérabilités détectées et opportunités d'amélioration pour concevoir un produit concurrent supérieur et moins cher.`,
    prompt_ar: `أنت مهندس ميكانيكا وإلكترونيات متخصص في الهندسة العكسية وفحص المنتجات:
قم بإجراء تشريح هندسي تحليلي للمنتج التالي:
- المنتج المستهدف: [المنتج]

محاور تقرير التشريح الهندسي:
1. البنية الهيكلية وطرق التصنيع المستخدمة (حقن البلاستيك، تشغيل المعادن CNC، التجميع بالكبس).
2. قائمة المكونات المقدرة (Bill of Materials - BOM): حصر الرقائق الإلكترونية والحساسات وتقدير تكلفتها الصناعية.
3. الحيل الذكية المبتكرة في التصميم لتسريع التجميع وخفض تكلفة خطوط الإنتاج (DFMA).
4. نقاط الضعف ونقاط الفشل المحتملة وكيفية تصميم منتج منافس يتفوق عليه في الأداء والسعر.`,
    level: 'expert',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['reverse engineering', 'product teardown', 'bom', 'manufacturing', 'hardware']
  },
  {
    id: 'pml-inn-08',
    slash: '/inn-open-innovation-challenge',
    title_fr: 'Concepteur Défi d’Open Innovation & Hackathon',
    title_ar: 'تصميم تحديات الابتكار المفتوح ومسابقات الهاكاثون Hackathons',
    category_id: 'innovation',
    category_fr: 'Innovation et R&D',
    category_ar: 'الابتكار والبحث والتطوير',
    function_fr: 'Lancer un appel à solutions auprès d’un écosystème externe de startups, chercheurs et étudiants',
    function_ar: 'صياغة تحديات مفتوحة تجذب المبتكرين والشركات الناشئة لتقديم حلول لقضايا معقدة',
    prompt_fr: `Tu es un Directeur de Programmes d'Open Innovation.
Conçois le cadre complet d'un appel à projets ou Hackathon :
- Thématique du défi : [THEMATIQUE]
- Entreprise commanditaire : [ENTREPRISE]
- Public visé : Startups, développeurs, chercheurs indépendants

Livrables de l'événement :
1. Le Problème Statement formulé de façon percutante et ouverte (donner le cap sans imposer la solution).
2. Les critères d'évaluation du jury (Innovation technologique, viabilité économique, faisabilité en 6 mois, impact).
3. Le programme sur 48 heures ou 1 mois (ateliers de mentorat, jalons de validation, sessions de pitch).
4. La politique de propriété intellectuelle (IP) équitable garantissant la protection des créateurs et l'intérêt du sponsor.`,
    prompt_ar: `بصفتك مديراً لبرامج الابتكار المفتوح ومسابقات التقنية (Hackathons):
صمم إطار تحدي الابتكار المفتوح لـ:
- موضوع التحدي: [الموضوع]
- الجهة المنظمة: [الجهة]
- الفئة المستهدفة: الشركات الناشئة، المبرمجون، والباحثون

المخرجات:
1. صياغة بيان التحدي (Problem Statement) بأسلوب ملهم يحفز على التفكير الحر.
2. معايير تحكيم المشروعات (الأصالة والابتكار، دراسة الجدوى، الأثر الملموس، وإمكانية التطبيق خلال 6 أشهر).
3. الجدول الزمني لمراحل التحدي والإرشاد ومواعيد عروض التحكيم (Pitch Day).
4. وثيقة حقوق الملكية الفكرية (IP Policy) العادلة التي تحمي حقوق المبتكرين وتضمن رعاية المشروع.`,
    level: 'intermediaire',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['open innovation', 'hackathon', 'startups', 'challenge', 'co-creation']
  },
  {
    id: 'pml-inn-09',
    slash: '/inn-cross-industry-transfer',
    title_fr: 'Transféreur Technologique Inter-Industries',
    title_ar: 'نقل التقنيات والتطبيقات المتبادلة بين الصناعات المختلفة',
    category_id: 'innovation',
    category_fr: 'Innovation et R&D',
    category_ar: 'الابتكار والبحث والتطوير',
    function_fr: 'Transposer une technologie mature d’un domaine (ex: aérospatial) vers un autre (ex: santé, sport)',
    function_ar: 'استثمار الابتكارات الناضجة في قطاع معين لتطوير حلول جديدة كلياً في قطاعات أخرى',
    prompt_fr: `Tu es un Expert en Transfert de Technologie et Valorisation de la R&D.
Explore les applications croisées pour :
- Technologie source : [TECHNOLOGIE_SOURCE] (ex: Alliages à mémoire de forme de la NASA, vision par ordinateur de l'automobile autonome, algorithmes de trading haute fréquence)
- Secteur industriel cible : [SECTEUR_CIBLE] (ex: Matériel médical chirurgical, emballage alimentaire, agriculture de précision)

Processus de fertilisation croisée :
1. Les propriétés physiques ou algorithmiques intrinsèques de la technologie source détachées de son contexte d'origine.
2. 3 cas d'usage novateurs résolvant des goulets d'étranglement historiques dans le secteur cible.
3. Les barrières d'adaptation (Réglementations différentes, coûts, acceptation des utilisateurs) et comment les lever.
4. Proposition d'un projet pilote de faisabilité (PoC) en 90 jours.`,
    prompt_ar: `أنت خبير في نقل التكنولوجيا وتطوير تطبيقات الأبحاث العلمية (Technology Transfer):
ابحث في فرص نقل التقنية التالية وتطبيقها في قطاع جديد:
- التقنية الأصلية: [التقنية] (سبائك الفضاء، رؤية حاسوبية للسيارات، خوارزميات التداول المالي)
- القطاع الصناعي المستهدف: [القطاع] (جراحة طبية، تغليف أغذية، زراعة ذكية)

خطوات النقل والابتكار:
1. تجريد الخصائص المادية أو البرمجية الجوهرية للتقنية وفصلها عن سياقها الأصلي.
2. اقتراح 3 حالات استخدام ثورية تعالج مشكلات مزمنة في القطاع المستهدف.
3. التحديات المتوقعة في بيئة الاستخدام الجديدة (المعايير الصحية، التكاليف) وكيفية تذليلها.
4. تصميم مشروع تجريبي لإثبات المفهوم (Proof of Concept - PoC) ينفذ في غضون 90 يوماً.`,
    level: 'expert',
    ai_compatibility: ['Claude', 'ChatGPT', 'Gemini'],
    tags: ['technology transfer', 'cross industry', 'r&d', 'spinoff', 'innovation']
  },
  {
    id: 'pml-inn-10',
    slash: '/inn-circular-economy-c2c',
    title_fr: 'Concepteur Économie Circulaire & Berceau au Berceau (Cradle-to-Cradle)',
    title_ar: 'تصميم الاقتصاد الدائري وإعادة التدوير الكامل Cradle to Cradle',
    category_id: 'innovation',
    category_fr: 'Innovation et R&D',
    category_ar: 'الابتكار والبحث والتطوير',
    function_fr: 'Éliminer la notion de déchet en concevant des produits 100% démontables, réparables et réutilisables',
    function_ar: 'تحويل دورة حياة المنتج من الاستهلاك الخطي إلى حلقة دائرية تامة دون أي نفايات',
    prompt_fr: `Tu es un Ingénieur en Écoconception et Économie Circulaire certifié Cradle-to-Cradle (C2C).
Repense le cycle de vie du produit suivant :
- Produit : [PRODUIT]

Piliers de l'économie circulaire :
1. Conception pour le désassemblage (Design for Disassembly) : Assemblage sans colles toxiques, visserie standard démontable en moins de 3 minutes.
2. Séparation stricte des deux cycles de nutriments :
   - Cycle biologique (composants biodégradables retournant à la terre sans toxicité).
   - Cycle technique (métaux et polymères purs recyclables à l'infini sans perte de qualité / Downcycling).
3. Nouveau modèle d'affaires d'usage : Passage de la vente de produit à l'Économie de la Fonctionnalité (Location longue durée, reprise obligatoire en fin de vie, maintenance prédictive).`,
    prompt_ar: `بصفتك مهندس تصميم بيئي واقتصاد دائري معتمد (Cradle to Cradle - C2C):
أعد هندسة دورة حياة المنتج التالي بالكامل:
- نوع المنتج: [المنتج]

أركان الاقتصاد الدائري:
1. التصميم القابل للتفكيك السريع (Design for Disassembly): التخلي عن المواد اللاصقة والتجميع بالمسامير الموحدة لتسهيل الصيانة في دقائق.
2. الفصل التام بين المسارين الحيوي والتقني:
   - المسار الحيوي (المواد العضوية القابلة للتحلل الطبيعي الآمن دون تلويث التربة).
   - المسار التقني (المعادن والبوليمرات النقية القابلة لإعادة التدوير اللانهائي دون تدهور الجودة).
3. التحول إلى نموذج اقتصاد الوظيفة (بيع الخدمة والاشتراك بدلاً من بيع السلعة مع التزام الشركة باسترجاع المنتج القديم).`,
    level: 'expert',
    ai_compatibility: ['Claude', 'ChatGPT', 'Gemini'],
    tags: ['circular economy', 'cradle to cradle', 'ecodesign', 'sustainability', 'waste free']
  },
  {
    id: 'pml-inn-11',
    slash: '/inn-disruptive-ip-audit',
    title_fr: 'Auditeur Vulnérabilité Face aux Ruptures Technologiques',
    title_ar: 'تدقيق مناعة ومخاطر الشركة أمام الابتكارات التقنية المزعزعة',
    category_id: 'innovation',
    category_fr: 'Innovation et R&D',
    category_ar: 'الابتكار والبحث والتطوير',
    function_fr: 'Identifier comment une startup avec 10x moins de moyens pourrait anéantir notre modèle d’affaires',
    function_ar: 'اكتشاف الثغرات في نموذج عمل شركتك التي قد تستغلها الشركات الناشئة لإزاحتك من السوق',
    prompt_fr: `Agis comme un Investisseur Activiste et Chasseur d'Inefficacités.
Audite la vulnérabilité de notre entreprise face aux ruptures (dilemme de l'innovateur de Clayton Christensen) :
- Notre activité et modèle actuel : [ENTREPRISE]
- Ce qui fait notre rentabilité historique : [RENTABILITE]

Analyse impitoyable de disruption :
1. Si une équipe de 5 hackers ultra-talentueux avec l'IA décidait d'anéantir notre modèle d'affaires, quel angle d'attaque choisirait-elle ?
2. Quels segments de nos clients les moins rentables délaissons-nous aujourd'hui et constituent la porte d'entrée idéale pour un nouvel entrant low-cost ?
3. Quelles technologies émergentes considérons-nous avec condescendance ou scepticisme qui vont mûrir plus vite que prévu ?
4. Le plan de self-disruption : Comment lancer nous-mêmes la filiale ou le produit qui cannibalisera notre activité historique avant qu'un autre ne le fasse.`,
    prompt_ar: `بصفتك مستثمراً جريئاً وخبيراً في معضلة المبتكر (The Innovator's Dilemma لكريستنسن):
قم بفحص مناعة نموذج عمل شركتنا أمام الابتكارات المزعزعة (Disruption):
- نشاط الشركة ونموذج عملها الحالي: [الشركة]
- مصدر أرباحنا التاريخي الأساسي: [الأرباح]

التحليل الصريح والمكاشفة:
1. إذا قرر فريق من 5 مبرمجين عباقرة تدمير نموذج عملنا بالذكاء الاصطناعي، من أي زاوية سيبدأون الهجوم؟
2. ما هي شرائح العملاء الصغيرة المهملة لدينا حالياً والتي تشكل مدخلاً سهلاً لمنافس اقتصادي جديد؟
3. ما هي التقنيات الناشئة التي ننظر إليها باستخفاف وتشكيك اليوم لكنها ستنضج أسرع مما نتخيل؟
4. خطة التدمير الذاتي البناء: كيف نطلق بأنفسنا المشروع الجديد الذي ينافس منتجنا القديم قبل أن يسبقنا الآخرون.`,
    level: 'expert',
    ai_compatibility: ['Claude', 'ChatGPT', 'Gemini'],
    tags: ['disruption', 'innovators dilemma', 'strategic audit', 'startups', 'competition']
  },
  {
    id: 'pml-inn-12',
    slash: '/inn-customer-co-creation-lab',
    title_fr: 'Concepteur d’Atelier de Co-Création Clients (Co-Design)',
    title_ar: 'تنظيم ورش الابتكار المشترك وتصميم المنتجات مع العملاء Co-Design',
    category_id: 'innovation',
    category_fr: 'Innovation et R&D',
    category_ar: 'الابتكار والبحث والتطوير',
    function_fr: 'Faire travailler ensemble utilisateurs finaux, ingénieurs et designers pour inventer la prochaine version d’un produit',
    function_ar: 'إشراك العملاء والمستخدمين الحقيقيين في جلسات عصف ذهني تفاعلية لتصميم المنتج القادم',
    prompt_fr: `Tu es un Facilitateur en Co-Conception et Recherche Action.
Conçois l'animation d'un atelier de co-création de 3 heures réunissant 8 clients et l'équipe produit :
- Produit à réinventer : [PRODUIT]
- Objectif de la session : Définir ensemble les 3 fonctionnalités majeures de la future version

Déroulé méthodique des 3 heures :
1. Première heure (Immersion & Décharge émotionnelle) : Brise-glace et partage des plus grandes frustrations vécues sans filtre (Mur des Lamentations).
2. Deuxième heure (Idéation décomplexée) : Exercice "Le Produit Magique" (Si tout était possible sans contrainte technique ou financière, que ferait le produit ?).
3. Troisième heure (Priorisation participative) : Tri des idées avec la méthode "Acheter des fonctionnalités" avec un budget fictif de 100 jetons.
4. Synthèse immédiate des enseignements et remerciement des participants.`,
    prompt_ar: `أنت خبير في إدارة ورش الابتكار التشاركي وتصميم الحلول مع العملاء (Co-Design):
صمم ورشة عمل لمدة 3 ساعات تجمع 8 عملاء حقيقيين مع فريق تطوير المنتجات:
- المنتج المراد تطويره: [المنتج]
- الهدف: التوافق على أهم 3 مزايا رئيسية للجيل القادم من المنتج

جدول الجلسة التفاعلية:
1. الساعة الأولى (تفريغ التجارب): جلسة كسر الجليد ومشاركة الإحباطات والمشاكل التي واجهها العملاء دون مجاملة.
2. الساعة الثانية (العصف الذهني الخيالي): تمرين "المنتج الساحر" (لو كان كل شيء ممكناً دون قيود مادية أو برمجية، ماذا تريد من المنتج أن يفعل؟).
3. الساعة الثالثة (تحديد الأولويات): تمرين "شراء المزايا" حيث يمتلك كل عميل 100 نقطة يوزعها على المزايا الأهم بالنسبة له.
4. استخلاص الرؤى الذهبية وتكريم العملاء المشاركين.`,
    level: 'intermediaire',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['co-creation', 'design thinking', 'user feedback', 'customer research', 'workshops']
  },
  {
    id: 'pml-inn-13',
    slash: '/inn-fail-fast-lean-experiment',
    title_fr: 'Concepteur d’Expérimentations Lean (Test & Learn)',
    title_ar: 'تصميم التجارب السريعة واختبار الفرضيات بأقل تكلفة Lean Experiment',
    category_id: 'innovation',
    category_fr: 'Innovation et R&D',
    category_ar: 'الابتكار والبحث والتطوير',
    function_fr: 'Tester l’intérêt réel pour une offre en 48 heures sans rien construire (Smoke test / Fake door)',
    function_ar: 'التحقق من وجود طلب حقيقي على الخدمة في 48 ساعة دون برمجة أو تصنيع حقيقي',
    prompt_fr: `Tu es un Ingénieur en Expérimentation Lean et Growth Testing.
Conçois une expérience de validation rapide (Smoke Test / Fake Door Test) pour :
- Nouvelle idée d'offre : [NOUVELLE_OFFRE]
- Budget alloué au test : Moins de 200 €
- Durée du test : 5 jours maximum

Plan d'expérimentation scientifique :
1. Formulation de l'hypothèse falsifiable précise ("Nous croyons que [X% de la cible] effectuera [action précise] face à notre offre").
2. Le dispositif expérimental minimaliste (ex: Landing page simple d'une page avec bouton de commande menant à un message "Bientôt disponible, inscrivez-vous pour être prévenu").
3. Canal d'acquisition ultra-ciblé (50€ de publicité ciblée pour envoyer 300 visiteurs qualifiés).
4. Le seuil de rentabilité décisionnel (Gate) : À partir de quel taux de conversion valide-t-on le passage au développement réel ?`,
    prompt_ar: `أنت خبير في اختبارات النمو والتحقق السريع (Lean Validation / Smoke Testing):
صمم تجربة تحقق ميدانية سريعة لفكرة منتج جديد:
- الفكرة الجديدة: [الفكرة]
- الميزانية المخصصة للاختبار: أقل من 200 دولار
- المدة القصوى: 5 أيام عمل

خطة التجربة العملية:
1. صياغة الفرضية القابلة للإثبات أو النفي بدقة ("نعتقد أن نسبة X% من الزوار سيضغطون على زر الشراء عند عرض هذا الحل").
2. بناء الأداة التجريبية البسيطة (صفحة هبوط سريعة بمنتج افتراضي وزر طلب يقود لرسالة "سننطلق قريباً، سجل بريدك لتكون أول من يجربه").
3. قناة الجذب السريعة (إعلان ممول بميزانية محدودة لإرسال 300 زائر مهتم).
4. المعيار الرقمي الحاسم للقرار: النسبة المئوية للتحويل التي إذا تحققت نبدأ فوراً في البرمجة والتصنيع الفعلي.`,
    level: 'debutant',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['smoke test', 'fake door', 'lean experiment', 'validation', 'growth testing']
  },
  {
    id: 'pml-inn-14',
    slash: '/inn-smart-city-iot-spec',
    title_fr: 'Architecte Ville Intelligente & Capteurs IoT (Smart City)',
    title_ar: 'هندسة المدن الذكية وحلول إنترنت الأشياء Smart City & IoT',
    category_id: 'innovation',
    category_fr: 'Innovation et R&D',
    category_ar: 'الابتكار والبحث والتطوير',
    function_fr: 'Concevoir un réseau de capteurs connectés pour optimiser l’éclairage, les déchets ou le trafic urbain',
    function_ar: 'بناء شبكة مستشعرات ذكية لإدارة النفايات وإشارات المرور وترشيد الطاقة الحضرية',
    prompt_fr: `Tu es un Ingénieur Systèmes Urbains Intelligents et IoT.
Conçois l'architecture technique d'une solution Smart City pour :
- Cas d'usage urbain : [CAS_USAGE] (ex: Éclairage public adaptatif selon présence, gestion connectée du ramassage des poubelles avec capteurs ultrasons, ou stationnement intelligent)
- Échelle du déploiement : [ECHELLE] (Quartier pilote de 10 000 habitants)

Livrables d'architecture IoT :
1. Choix du réseau de télécommunication basse consommation (LoRaWAN, NB-IoT ou 5G) justifié par l'autonomie et la portée.
2. Spécification des capteurs physiques (Batterie longue durée 10 ans, résistance aux intempéries IP68, résistance au vandalisme IK10).
3. Plateforme logicielle centrale de supervision (Ingestion des données, cartographie SIG en temps réel, tableaux de bord prédictifs).
4. Mesures strictes de cybersécurité et d'anonymisation des données pour préserver la vie privée des citoyens.`,
    prompt_ar: `بصفتك مهندس أنظمة مدن ذكية وإنترنت الأشياء (IoT & Smart Cities):
قم بتصميم البنية التحتية لحل حضري ذكي لـ:
- مجال التطبيق: [المجال] (إنارة الشوارع التفاعلية، الحاويات الذكية المزودة بحساسات امتلاء، أو المواقف الذكية)
- نطاق المشروع: [النطاق] (حي سكني نموذجي)

المعايير الهندسية للمنظومة:
1. اختيار شبكة الاتصال اللاسلكية منخفضة الطاقة (LoRaWAN أو NB-IoT) لضمان تغطية واسعة واستهلاك بطارية ضئيل.
2. مواصفات المستشعرات الميدانية (بطارية تدوم 10 سنوات، مقاومة الطقس والماء IP68، ومقاومة الكسر).
3. منصة التحكم المركزية (استقبال البيانات اللحظية، الربط مع الخرائط الجغرافية GIS، ولوحات المؤشرات التنبؤية).
4. تحصين الأمان السيبراني وحماية خصوصية بيانات السكان وتشفير قنوات الاتصال.`,
    level: 'expert',
    ai_compatibility: ['Claude', 'ChatGPT', 'Gemini'],
    tags: ['smart city', 'iot', 'lorawan', 'sensors', 'urban planning', 'sustainability']
  },
  {
    id: 'pml-inn-15',
    slash: '/inn-rd-tax-credit-cir',
    title_fr: 'Rédacteur Dossier Justificatif Crédit Impôt Recherche (CIR / CII)',
    title_ar: 'إعداد ملفات تمويل وحوافز البحث العلمي والتطوير R&D Grants',
    category_id: 'innovation',
    category_fr: 'Innovation et R&D',
    category_ar: 'الابتكار والبحث والتطوير',
    function_fr: 'Documenter l’état de l’art, les verrous technologiques et les travaux de R&D pour audit fiscal',
    function_ar: 'توثيق الأبحاث والابتكارات الهندسية للحصول على الدعم والإعفاءات الضريبية الحكومية',
    prompt_fr: `Tu es un Expert Conseil en Financement Public de la R&D et Crédit d'Impôt Recherche (CIR).
Rédige la trame du mémoire technique justificatif d'éligibilité pour le projet :
- Nom du projet R&D : [PROJET]
- Secteur : [SECTEUR]
- Dépenses engagées : Salaires des ingénieurs/docteurs, sous-traitance, brevets

Structure d'éligibilité stricte (selon le Manuel de Frascati) :
1. Présentation de l'État de l'Art initial : Ce que les technologies et publications existantes permettaient ou ne permettaient pas de faire.
2. Identification formelle des "Verrous Technologiques et Scientifiques" : Pourquoi les compétences courantes d'un ingénieur du métier étaient insuffisantes pour résoudre le problème.
3. Démarche expérimentale itérative menée (Hypothèses, protocoles de test, échecs documentés, résultats obtenus).
4. Contribution scientifique et avancée de la connaissance générée.`,
    prompt_ar: `بصفتك مستشاراً معتمداً في تمويل أبحاث التطوير وحوافز الابتكار الحكومية:
اكتب مسودة الملف الفني لإثبات الأهلية للحوافز والمنح البحثية لمشروع:
- اسم المشروع البحثي: [المشروع]
- القطاع العلمي: [القطاع]
- التكاليف المنفقة: رواتب الباحثين، المعامل، والاختبارات

المعايير المنهجية المعتمدة (وفق دليل فراسكاتي الدولي Frascati Manual):
1. استعراض الوضع العلمي والتقني السابق (State of the Art) وما كانت تعجز عنه الأبحاث الحالية.
2. التحديد الدقيق لـ "العوائق العلمية والتقنية" التي لم يكن بالإمكان حلها بالمعارف الهندسية التقليدية.
3. تفصيل المنهج التجريبي والتطبيقي (الفرضيات، التجارب المعملية، الإخفاقات الموثقة، والنتائج المستخلصة).
4. القيمة المضافة والإضافة المعرفية التي قدمها هذا البحث للعلم والصناعة.`,
    level: 'expert',
    ai_compatibility: ['Claude', 'ChatGPT', 'Gemini'],
    tags: ['r&d tax credit', 'frascati manual', 'grants', 'research funding', 'innovation audit']
  },

  // ==========================================
  // CATÉGORIE 19 : ADMINISTRATION ET DOCUMENTATION (15 prompts)
  // ==========================================
  {
    id: 'pml-adm-01',
    slash: '/adm-rgpd-privacy-policy',
    title_fr: 'Rédacteur Politique de Confidentialité Conforme RGPD',
    title_ar: 'صياغة سياسة الخصوصية وحماية البيانات الشخصية وفق لائحة GDPR',
    category_id: 'admin-docs',
    category_fr: 'Administration et documentation',
    category_ar: 'الإدارة والتوثيق والسياسات',
    function_fr: 'Rédiger une politique de confidentialité transparente, claire et juridiquement inattaquable',
    function_ar: 'كتابة بنود حماية بيانات المستخدمين وحقوق الخصوصية بصياغة قانونية متوافقة مع التشريعات الدولية',
    prompt_fr: `Tu es un Délégué à la Protection des Données (DPO) et Juriste en Droit Numérique.
Rédige la Politique de Confidentialité pour :
- Entreprise / Application web : [ENTREPRISE]
- Données collectées : [DONNEES] (Noms, emails, coordonnées bancaires, cookies, géolocalisation)
- Finalités du traitement : [FINALITES] (Exécution des commandes, personnalisation publicitaire, analytics)

Structure légale stricte (Art. 13 et 14 RGPD) :
1. Identité et coordonnées du responsable de traitement et du DPO.
2. Base légale de chaque traitement (Consentement explicite, exécution du contrat, intérêt légitime).
3. Durée de conservation exacte de chaque catégorie de données.
4. Droits des utilisateurs (Droit d'accès, rectification, effacement/oubli, portabilité, retrait du consentement) et modalité d'exercice en 1 clic.
5. Transferts hors Union Européenne et garanties appropriées (Clauses Contractuelles Types CCT).`,
    prompt_ar: `بصفتك مسؤول حماية البيانات (DPO) ومستشاراً في القانون الرقمي:
اكتب وثيقة سياسة الخصوصية (Privacy Policy) لـ:
- اسم الموقع أو التطبيق: [التطبيق]
- البيانات التي يتم جمعها: [البيانات] (الاسم، البريد، الموقع، ملفات تعريف الارتباط Cookies)
- أسباب ومعالجة البيانات: [الأسباب] (إتمام الطلبات، تحسين الخدمة، الدعم الفني)

البنود القانونية الإلزامية:
1. هوية وبيانات التواصل مع مسؤول معالجة البيانات وإدارة الخصوصية.
2. السند النظامي للمعالجة (الموافقة الصريحة، تنفيذ العقد، أو الالتزام القانوني).
3. المدة الزمنية المحددة لحفظ كل فئة من فئات البيانات والتخلص الآمن منها.
4. حقوق المستخدمين الكاملة (الاطلاع، التصحيح، الحذف النهائي للبيانات، نقل البيانات) وطريقة ممارسة هذه الحقوق بسهولة.
5. سياسة نقل البيانات عبر الحدود وإجراءات التشفير والحماية المتبعة.`,
    level: 'intermediaire',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['gdpr', 'privacy policy', 'rgpd', 'data protection', 'dpo', 'legal']
  },
  {
    id: 'pml-adm-02',
    slash: '/adm-freelance-contract-scope',
    title_fr: 'Rédacteur Contrat de Prestation de Service Freelance',
    title_ar: 'صياغة عقود تقديم الخدمات والاستشارات المستقلة Freelance Contract',
    category_id: 'admin-docs',
    category_fr: 'Administration et documentation',
    category_ar: 'الإدارة والتوثيق والسياسات',
    function_fr: 'Protéger un prestataire indépendant : propriété intellectuelle, délais de paiement et périmètre',
    function_ar: 'حماية حقوق مقدم الخدمة والمستشار المستقل وتحديد نطاق العمل والدفعات المالية بدقة',
    prompt_fr: `Tu es un Juriste Spécialiste des Contrats Commerciaux et du Travail Indépendant.
Rédige un Contrat de Prestation de Services protecteur pour un freelance :
- Mission confiée : [MISSION] (ex: Développement d'une application, refonte de marque, conseil stratégique)
- Modalités financières : [FINANCES] (Tarif forfaitaire ou journalier TJM, acompte de 30% à la commande, solde à la livraison)
- Calendrier : [CALENDRIER]

Clauses indispensables de protection :
1. Définition stricte du périmètre (Scope) et facturation supplémentaire automatique pour tout travail hors périmètre (Scope Creep).
2. Clause de Réserve de Propriété Intellectuelle (Les droits d'auteur ne sont transférés au client QU'APRÈS paiement intégral de la facture).
3. Pénalités de retard de paiement légales et indemnité forfaitaire pour frais de recouvrement.
4. Procédure de validation et recette (Acceptation tacite sous 10 jours ouvrés en l'absence de retour motivé du client).`,
    prompt_ar: `بصفتك مستشاراً قانونياً متخصصاً في عقود الخدمات والأعمال الحرة:
اكتب عقد تقديم خدمات احترافي يحمي حقوق الطرفين لمشروع:
- طبيعة المهمة والخدمة: [الخدمة] (برمجة، تصميم هوية، استشارات إدارية)
- الشروط المالية: [المالية] (دفعة مقدمة 30%، ودفعات مرتبطة بمراحل الإنجاز)
- الإطار الزمني: [الجدول]

البنود الجوهرية لحماية الحقوق:
1. التحديد الدقيق لنطاق العمل (Scope of Work) واشتراط مقابل مالي مستقل لأي تعديلات إضافية خارج النطاق.
2. شرط احتفاظ الملكية الفكرية (لا تنتقل حقوق الملكية والتصاميم للعميل إلا بعد سداد كامل المستحقات المالية).
3. غرامات التأخير في السداد وشروط إيقاف الخدمة عند التخلف عن الدفع.
4. آلية تسليم واعتماد المخرجات (تعتبر الأعمال مقبولة تلقائياً بعد مرور 10 أيام عمل دون اعتراض خطي مبرر).`,
    level: 'intermediaire',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['freelance contract', 'service agreement', 'legal', 'intellectual property', 'consulting']
  },
  {
    id: 'pml-adm-03',
    slash: '/adm-sla-service-level',
    title_fr: 'Rédacteur Accord de Niveau de Service (SLA)',
    title_ar: 'صياغة اتفاقية مستوى الخدمة وجودة الأداء SLA',
    category_id: 'admin-docs',
    category_fr: 'Administration et documentation',
    category_ar: 'الإدارة والتوثيق والسياسات',
    function_fr: 'Définir engagements de disponibilité (99.9%), temps de rétablissement (GTR) et pénalités',
    function_ar: 'تحديد نسب جاهزية النظام وسرعة الاستجابة للأعطال والتعويضات المالية الملزمة',
    prompt_fr: `Tu es un Directeur des Opérations Informatiques et Contrats Cloud.
Rédige l'Annexe Accord de Niveau de Service (SLA - Service Level Agreement) pour :
- Service fourni : [SERVICE] (ex: Plateforme SaaS d'entreprise, hébergement managé)
- Taux de disponibilité garanti : 99.9% (hors maintenance programmée)

Clauses opérationnelles :
1. Définition de la formule de calcul de la disponibilité mensuelle.
2. Grille de criticité des incidents :
   - Bloquant (P1) : Prise en charge en < 15 min, Garantie de Rétablissement (GTR) en < 4h.
   - Majeur (P2) : Prise en charge en < 1h, résolution en < 8h.
   - Mineur (P3) : Prise en charge sous 24h.
3. Système de pénalités sous forme d'avoirs sur facturation (Service Credits) en cas de non-respect du SLA.
4. Exclusions légitimes (Attaques DDoS massives, cas de force majeure, mauvaise utilisation client).`,
    prompt_ar: `أنت مدير التشغيل التقني وخبير اتفاقيات الخدمة السحابية (SLA):
اكتب وثيقة اتفاقية مستوى الخدمة (Service Level Agreement - SLA) لـ:
- الخدمة المقدمة: [الخدمة] (نظام سحابي مؤسسي، خدمات استضافة سحابية)
- نسبة الجاهزية المضمونة: 99.9% (باستثناء الصيانة المجدولة)

البنود التشغيلية الملزمة:
1. معادلة احتساب نسبة التوفر والتشغيل الشهرية الدقيقة.
2. مستويات خطورة الأعطال وسرعة الاستجابة:
   - عطل حرج P1: الاستجابة خلال 15 دقيقة، وإعادة التشغيل خلال 4 ساعات كحد أقصى.
   - عطل رئيسي P2: الاستجابة خلال ساعة واحدة والحل خلال 8 ساعات.
   - عطل طفيف P3: المعالجة خلال 24 ساعة.
3. نظام التعويضات والخصومات المالية من الفاتورة التالية في حال الإخلال بمستوى الجاهزية.
4. الاستثناءات المشروعة (هجمات حجب الخدمة، القوة القاهرة، وأخطاء مستخدم العميل).`,
    level: 'expert',
    ai_compatibility: ['Claude', 'ChatGPT', 'Gemini'],
    tags: ['sla', 'service level agreement', 'uptime', 'itil', 'cloud contracts']
  },
  {
    id: 'pml-adm-04',
    slash: '/adm-commercial-lease-terms',
    title_fr: 'Négociateur & Réviseur de Bail Commercial',
    title_ar: 'مراجعة وتدقيق بنود عقود الإيجار التجاري للمقرات والمحلات',
    category_id: 'admin-docs',
    category_fr: 'Administration et documentation',
    category_ar: 'الإدارة والتوثيق والسياسات',
    function_fr: 'Auditer les clauses d’un bail commercial pour éviter les pièges de charges et de résiliation',
    function_ar: 'كشف الشروط المجحفة في عقود إيجار المكاتب والمحلات التجارية وحماية المستأجر',
    prompt_fr: `Tu es un Avocat en Droit Immobilier Commercial.
Audite et sécurise les clauses du projet de bail commercial suivant :
- Local et destination : [LOCAL] (Boutique de vente au détail, bureaux d'entreprise, entrepôt)
- Loyer annuel et modalités : [LOYER]
- Durée du bail : [DUREE] (ex: Bail 3-6-9)

Points de vigilance critiques à verrouiller :
1. Répartition des charges et travaux : Exclusion formelle des gros travaux de l'article 606 (gros murs, toiture) à la charge exclusive du bailleur.
2. Clause de destination des lieux : Définition large des activités autorisées pour permettre l'évolution de l'entreprise sans refus du propriétaire.
3. Conditions de résiliation triennale et préavis de départ.
4. Indice de révision du loyer (choix entre ILC pour les commerces et ILAT pour le tertiaire) et plafonnement des hausses.`,
    prompt_ar: `بصفتك محامياً متخصصاً في عقود الإيجارات التجارية والعقارية:
قم بتدقيق ومراجعة بنود مسودة عقد الإيجار التجاري لـ:
- نوع العقار واستخدامه: [العقار] (محل تجاري، مقر مكاتب، مستودع)
- قيمة الإيجار وشروط السداد: [الإيجار]
- مدة العقد وشروط التجديد: [المدة]

البنود الجوهرية الواجب تحصينها للمستأجر:
1. توزيع تكاليف الصيانة: حصر أعمال الصيانة الإنشائية الكبرى (الأسطح والأساسات) على عاتق المؤجر حصراً.
2. بند النشاط المصرح به: صياغة واسعة ومرنة لطبيعة النشاط التجاري تسمح بتوسع الشركة دون اشتراط موافقة المالك.
3. شروط إنهاء العقد المبكر وفترات الإخطار المسبق لتفادي غرامات الإخلاء.
4. ضبط معادلة الزيادة السنوية في الإيجار وربطها بالمؤشرات الرسمية وتحديد سقف أعلى للزيادة.`,
    level: 'expert',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['commercial lease', 'real estate', 'property law', 'tenancy', 'contracts']
  },
  {
    id: 'pml-adm-05',
    slash: '/adm-partnership-mou-protocol',
    title_fr: 'Rédacteur Protocole d’Accord & Lettre d’Intention (MoU / LOI)',
    title_ar: 'صياغة مذكرات التفاهم وخطابات النوايا للشراكات الاستراتيجية MoU',
    category_id: 'admin-docs',
    category_fr: 'Administration et documentation',
    category_ar: 'الإدارة والتوثيق والسياسات',
    function_fr: 'Formaliser les bases d’une future coopération sans engagement juridique prématuré',
    function_ar: 'توثيق المبادئ المشتركة للتعاون بين شركتين وتحديد إطار المفاوضات القادمة بوضوح',
    prompt_fr: `Tu es un Juriste Négociateur d'Affaires Internationales.
Rédige un Protocole d'Accord (Memorandum of Understanding - MoU) pour :
- Parties engagées : [PARTIES]
- Objet de la coopération : [OBJET] (ex: Co-développement technologique, distribution exclusive, joint-venture)

Structure du protocole :
1. Préambule rappelant la vision partagée et les complémentarités stratégiques des parties.
2. Délimitation des contributions de chaque partie (Ressources, expertises, budgets prévisionnels).
3. Calendrier des négociations et jalons de validation du contrat final définitif.
4. Distinction claire entre clauses non-contraignantes (objectifs commerciaux) et clauses strictement contraignantes (Confidentialité, Non-débauchage, Exclusivité temporaire de négociation).`,
    prompt_ar: `بصفتك مستشاراً في صياغة الاتفاقيات والشراكات الدولية:
اكتب مذكرة تفاهم رسمية (Memorandum of Understanding - MoU) لـ:
- أطراف الاتفاقية: [الأطراف]
- موضوع الشراكة: [الموضوع] (تطوير تقني مشترك، توزيع تجاري، إنشاء شركة مشتركة)

الهيكل النموذجي للمذكرة:
1. الديباجة التمهيدية التي توضح الرؤية المشتركة والتكامل الاستراتيجي بين الطرفين.
2. التزامات ومساهمات كل طرف (الموارد، الكوادر الفنية، والتمويل المبدئي).
3. الجدول الزمني لمراحل المفاوضات وتوقيع العقد النهائي الملزم.
4. الفصل القانوني الصريح بين البنود التوجيهية غير الملزمة وبين البنود الملزمة قانونياً فوراً (السرية، حظر استقطاب الموظفين، وحصرية التفاوض لفترة محددة).`,
    level: 'intermediaire',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['mou', 'letter of intent', 'partnership', 'contracts', 'business development']
  },
  {
    id: 'pml-adm-06',
    slash: '/adm-employee-handbook-rules',
    title_fr: 'Rédacteur Règlement Intérieur & Livret d’Accueil Salarié',
    title_ar: 'صياغة اللائحة الداخلية للعمل ودليل الموظف الجديد Employee Handbook',
    category_id: 'admin-docs',
    category_fr: 'Administration et documentation',
    category_ar: 'الإدارة والتوثيق والسياسات',
    function_fr: 'Définir les règles de vie en entreprise : télétravail, sécurité, usage des outils informatiques',
    function_ar: 'تنظيم بيئة العمل وتحديد سياسات الدوام، العمل عن بعد، واستخدام أجهزة الشركة',
    prompt_fr: `Tu es un DRH et Juriste en Droit du Travail.
Rédige les sections clés du Règlement Intérieur et de la Charte Informatique pour :
- Entreprise et effectif : [ENTREPRISE]
- Politique de travail : [POLITIQUE] (Télétravail hybride 2 jours/semaine, horaires flexibles)

Rédige les articles indispensables :
1. Politique d'organisation du télétravail (Éligibilité, plages de disponibilité obligatoire, prise en charge des frais, droit à la déconnexion).
2. Charte d'usage des systèmes d'information et de l'IA (Utilisation des ordinateurs professionnels, interdiction de coller du code ou données confidentielles dans des IA publiques sans accord).
3. Règles d'hygiène, sécurité et prévention du harcèlement moral et sexuel.
4. Échelle des sanctions disciplinaires graduelle et respect de la procédure contradictoire légale.`,
    prompt_ar: `بصفتك مديراً للموارد البشرية ومستشاراً في لوائح ونظم العمل:
اكتب الفصول الأساسية للائحة العمل الداخلية ودليل الموظف لـ:
- اسم وطبيعة المنشأة: [المنشأة]
- نمط العمل: [النمط] (عمل مرن، دوام هجين عن بعد)

الفصول النظامية الأساسية:
1. ضوابط العمل عن بعد (ساعات التواجد الإلزامية، أمن البيانات، وحق الموظف في فصل الاتصال خارج الدوام).
2. لائحة استخدام تقنية المعلومات والذكاء الاصطناعي (حظر رفع أسرار الشركة وبيانات العملاء في نماذج الذكاء الاصطناعي العامة غير المحمية).
3. معايير السلامة المهنية ومكافحة التحرش والتنمر الوظيفي وخلق بيئة عمل محترمة للجميع.
4. لائحة الجزاءات والتدابير التأديبية المتدرجة بما يضمن العدالة وحق الموظف في إبداء دفاعه.`,
    level: 'intermediaire',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['employee handbook', 'workplace policies', 'remote work', 'labor law', 'hr']
  },
  {
    id: 'pml-adm-07',
    slash: '/adm-subcontractor-agreement',
    title_fr: 'Rédacteur Contrat de Sous-Traitance Industrielle / BTP',
    title_ar: 'صياغة عقود مقاولات الباطن والتشغيل Subcontractor Agreement',
    category_id: 'admin-docs',
    category_fr: 'Administration et documentation',
    category_ar: 'الإدارة والتوثيق والسياسات',
    function_fr: 'Encadrer l’intervention d’un sous-traitant avec agrément du maître d’ouvrage et garanties',
    function_ar: 'تنظيم العلاقة مع مقاولي الباطن وضمان تسليم الأعمال في المواعيد المحددة وبأعلى جودة',
    prompt_fr: `Tu es un Juriste Spécialiste des Marchés Publics et Privés de Construction.
Rédige un Contrat de Sous-Traitance équilibré et protecteur pour l'entreprise principale :
- Marché principal : [MARCHE]
- Prestation sous-traitée : [PRESTATION]
- Montant et calendrier des travaux : [CONDITIONS]

Clauses impératives :
1. Agrément préalable du sous-traitant et acceptation de ses conditions de paiement par le Maître d'Ouvrage.
2. Obligation de résultat stricte et alignement sur les pénalités de retard du marché principal (effet miroir).
3. Attestations d'assurances décennale et responsabilité civile professionnelle obligatoires avant tout début de chantier.
4. Clause de substitution immédiate aux frais du sous-traitant en cas d'abandon de chantier ou de malfaçon grave.`,
    prompt_ar: `بصفتك مستشاراً في عقود الإنشاءات والمقاولات:
اكتب عقد مقاولة من الباطن لحماية المقاول الرئيسي في مشروع:
- المشروع الرئيسي: [المشروع]
- الأعمال المسندة لمقاول الباطن: [الأعمال]
- القيمة المالية والجدول الزمني للتسليم: [الشروط]

البنود القانونية الصارمة:
1. اعتماد مقاول الباطن رسمياً من المالك والاستشاري المشرف قبل بدء العمل في الموقع.
2. التزام مقاول الباطن التام بنفس المواصفات الفنية وغرامات التأخير المنصوص عليها في العقد الرئيسي.
3. تقديم وثائق التأمين الشامل والضمانات البنكية سارية المفعول قبل بدء الأعمال.
4. حق المقاول الرئيسي في سحب الأعمال والتنفيذ على حساب مقاول الباطن عند التباطؤ أو التوقف غير المبرر.`,
    level: 'expert',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['subcontractor', 'construction contract', 'procurement', 'engineering contracts']
  },
  {
    id: 'pml-adm-08',
    slash: '/adm-powers-of-attorney-proxy',
    title_fr: 'Rédacteur Procuration Spéciale & Délégation de Pouvoir',
    title_ar: 'صياغة التوكيلات الرسمية والتفويضات الإدارية والقانونية Power of Attorney',
    category_id: 'admin-docs',
    category_fr: 'Administration et documentation',
    category_ar: 'الإدارة والتوثيق والسياسات',
    function_fr: 'Déléguer un pouvoir précis à un mandataire sans risque d’abus ou d’engagement excessif',
    function_ar: 'تفويض شخص أو مسؤول للقيام بإجراءات رسمية محددة بدقة دون منحه صلاحيات مطلقة',
    prompt_fr: `Tu es un Notaire et Conseiller Juridique.
Rédige un acte de Procuration Spéciale (Délégation de pouvoir) :
- Mandant (Celui qui donne pouvoir) : [MANDANT]
- Mandataire (Celui qui reçoit le pouvoir) : [MANDATAIRE]
- Acte précis autorisé : [ACTE] (ex: Signature de l'acte d'achat d'un bien immobilier, représentation à l'Assemblée Générale, démarches auprès de l'administration fiscale)

Exigences de délimitation juridique :
1. Description chirurgicale des actes que le mandataire a le pouvoir d'accomplir (mandat spécial et non général).
2. Fixation d'une durée de validité stricte ou extinction automatique après l'accomplissement de l'acte.
3. Interdiction expresse de substitution (le mandataire ne peut pas déléguer son pouvoir à un tiers sans accord).
4. Décharge de responsabilité du mandant pour tout acte excédant les limites fixées dans la procuration.`,
    prompt_ar: `بصفتك مستشاراً في التوثيق القانوني والوكالات الشرعية والنظامية:
اكتب صيغة توكيل خاص وتفويض إداري محدد لـ:
- الموكِّل (مانح الصلاحية): [الموكل]
- الوكيل (المفوض): [الوكيل]
- الإجراء المصرح به تحديداً: [الإجراء] (تمثيل أمام جهة حكومية معينة، توقيع عقد محدد، استلام مستندات)

الشروط والضوابط القانونية:
1. التوصيف الحصري الدقيق للمهمة الموكلة ومنع التوكيل العام المفتوح.
2. تحديد تاريخ انتهاء صلاحية التوكيل تلقائياً بمجرد إتمام الإجراء المطلوب.
3. النص الصريح على عدم جواز توكيل الغير (حظر الوكالة من الباطن دون إذن خطي).
4. إخلاء مسؤولية الموكل عن أي تصرف أو التزام يتجاوز حدود الصلاحيات الممنوحة نصاً.`,
    level: 'debutant',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['power of attorney', 'proxy', 'delegation', 'legal authority', 'notary']
  },
  {
    id: 'pml-adm-09',
    slash: '/adm-settlement-release-agreement',
    title_fr: 'Rédacteur Protocole Transactionnel (Règlement Définitif de Litige)',
    title_ar: 'صياغة اتفاقيات الصلح والتسوية الودية لإنهاء النزاعات Settlement Agreement',
    category_id: 'admin-docs',
    category_fr: 'Administration et documentation',
    category_ar: 'الإدارة والتوثيق والسياسات',
    function_fr: 'Éteindre définitivement un conflit commercial ou prud’homal avec autorité de la chose jugée',
    function_ar: 'إنهاء الخلافات المالية أو العمالية ودياً باتفاق نهائي يمنع أي دعاوى قضائية مستقبلية',
    prompt_fr: `Tu es un Avocat Négociateur et Médiateur Professionnel.
Rédige un Protocole d'Accord Transactionnel (selon les articles 2044 et suivants du Code Civil) :
- Parties au litige : [PARTIES]
- Origine du différend : [LITIGE] (Rupture de contrat, contestation d'honoraires, litige de fin de collaboration)
- Concessions réciproques convenues : [CONCESSIONS] (ex: Paiement d'une indemnité forfaitaire en échange de l'abandon total des poursuites)

Clauses transactionnelles impératives :
1. Rappel des thèses divergentes des parties sans reconnaissance de responsabilité de part et d'autre.
2. Équilibre et réalité des concessions réciproques consenties par chacune des parties (condition de validité légale de la transaction).
3. Clause expresse de renonciation définitive à toute action en justice présente ou future ayant le même objet.
4. Confidentialité absolue de l'accord et des montants convenus sous astreinte financière.`,
    prompt_ar: `بصفتك وسيطاً قانونياً ومحامياً متخصصاً في التسويات الرضائية:
اكتب اتفاقية صلح وتسوية نهائية لفض النزاع بين:
- أطراف النزاع: [الأطراف]
- أصل الخلاف: [الخلاف] (نزاع مالي، فسخ عقد، تسوية مستحقات نهاية خدمة)
- التنازلات المتبادلة المتفق عليها: [التنازلات] (سداد مبلغ مقطوع مقابل التنازل الكامل عن أي مطالبات)

البنود القانونية الحتمية:
1. سرد موجز لوجهات النظر المتباينة مع التأكيد على أن الصلح تم دون إقرار بالخطأ من أي طرف.
2. توازن التنازلات المتبادلة بين الطرفين لضمان صحة الاتفاقية ونفاذها نظامياً.
3. بند الإبراء النهائي الشامل وإسقاط الحق في رفع أي دعاوى قضائية مستقبلية تتعلق بهذا الموضوع.
4. سرية بنود الصلح والمبالغ المدفوعة وفرض غرامة اتفاقية عند إفشاء تفاصيل الاتفاق.`,
    level: 'expert',
    ai_compatibility: ['Claude', 'ChatGPT', 'Gemini'],
    tags: ['settlement agreement', 'dispute resolution', 'legal release', 'mediation', 'contracts']
  },
  {
    id: 'pml-adm-10',
    slash: '/adm-equipment-loan-agreement',
    title_fr: 'Rédacteur Convention de Mise à Disposition de Matériel',
    title_ar: 'صياغة نموذج تسليم واستلام العهد والأجهزة للموظفين Equipment Agreement',
    category_id: 'admin-docs',
    category_fr: 'Administration et documentation',
    category_ar: 'الإدارة والتوثيق والسياسات',
    function_fr: 'Encadrer le prêt de matériel professionnel (ordinateur portable, véhicule, outillage) à un collaborateur',
    function_ar: 'توثيق تسليم العهد الفنية والأجهزة الذكية للموظف وضمان صيانتها واستردادها',
    prompt_fr: `Rédige une Convention de Mise à Disposition de Matériel Professionnel :
- Entreprise prêteuse : [ENTREPRISE]
- Collaborateur bénéficiaire : [COLLABORATEUR]
- Liste du matériel confié : [MATERIEL] (ex: Ordinateur MacBook Pro M3, smartphone, véhicule utilitaire de service)

Clauses contractuelles :
1. Description de l'état du matériel au moment de la remise et signature d'un bon de réception contradictoire.
2. Obligations d'entretien, de garde et usage strictement professionnel (interdiction du prêt à un tiers de la famille).
3. Consignes impératives de sécurité (sauvegardes, verrouillage par mot de passe, déclaration de vol sous 24h avec dépôt de plainte).
4. Restitution obligatoire sans délai lors du départ de l'entreprise ou sur simple demande de la direction.`,
    prompt_ar: `اكتب نموذج اتفاقية تسليم عهدة وأجهزة عمل رسمية لموظف:
- جهة العمل: [المنشأة]
- الموظف المستلم: [الموظف]
- الأجهزة والعهد المسلمة: [الأجهزة] (حاسوب محمول، هاتف ذكي، سيارة عمل، أدوات ميدانية)

الشروط والالتزامات:
1. إثبات حالة الأجهزة وقت التسليم وإقرار الموظف باستلامها سليمة وجاهزة للاستخدام.
2. التزام الموظف بالحفاظ على العهدة وقصر استخدامها على مهام العمل فقط ومنع استخدامها من قبل أطراف خارجية.
3. إجراءات الأمان وحماية البيانات (كلمات المرور، التبليغ الفوري خلال 24 ساعة في حال الفقد أو السرقة).
4. التعهد بإعادة كافة الأجهزة بحالتها الأصلية فور انتهاء خدمات الموظف أو بطلب من الإدارة.`,
    level: 'debutant',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['equipment agreement', 'assets', 'company property', 'hr forms', 'custody']
  },
  {
    id: 'pml-adm-11',
    slash: '/adm-shareholders-agreement-pacte',
    title_fr: 'Rédacteur Pacte d’Actionnaires & Clauses Protectrices',
    title_ar: 'صياغة اتفاقية الشركاء والمساهمين وبنود حماية الملكية Shareholders Agreement',
    category_id: 'admin-docs',
    category_fr: 'Administration et documentation',
    category_ar: 'الإدارة والتوثيق والسياسات',
    function_fr: 'Verrouiller la gouvernance, le transfert de parts et la sortie des associés d’une entreprise',
    function_ar: 'تنظيم العلاقة بين الشركاء في الشركة وتحديد آليات التصويت وفك النزاعات والتخارج',
    prompt_fr: `Tu es un Avocat d'Affaires Spécialiste du Droit des Sociétés.
Rédige les clauses stratégiques d'un Pacte d'Actionnaires pour :
- Entreprise et fondateurs : [ENTREPRISE_ASSOCIES]
- Répartition des parts et profils : [REPARTITION] (Fondateurs opérationnels vs investisseurs passifs)

Rédige les clauses fondamentales :
1. Clause de Vesting / Good Leaver & Bad Leaver : Acquisition progressive des actions sur 4 ans et rachat décoté en cas de démission prématurée ou faute grave.
2. Droit de Préemption : Priorité absolue des associés existants en cas de projet de vente d'actions à un tiers.
3. Clause d'Entraînement (Drag-Along) et Droit de Sortie Conjointe (Tag-Along).
4. Clause anti-blocage (Russian Roulette ou rachat forcé) en cas d'impasse totale dans les décisions de gouvernance (Deadlock).`,
    prompt_ar: `بصفتك محامياً متخصصاً في قانون الشركات وحوكمة المؤسسين:
اكتب البنود الاستراتيجية لاتفاقية الشركاء (Shareholders Agreement) لـ:
- اسم الشركة والمؤسسين: [الشركة]
- توزيع الحصص وأدوار الشركاء: [الأدوار] (شركاء تنفيذيون مقابل مستثمرين صامتين)

البنود الجوهرية:
1. بند الاستحقاق التدريجي للحصص (Vesting) والتخارج العادل أو العقابي (Good Leaver / Bad Leaver) في حال ترك العمل مبكراً.
2. حق الشفعة (Right of First Refusal): أولوية الشركاء الحاليين في شراء أي حصة يرغب شريك في بيعها للغير.
3. بند الإلزام بالبيع المشترك (Drag-Along) وحق البيع التبعي (Tag-Along) لحماية الأقلية.
4. آلية حل الانسداد الإداري (Deadlock Resolution) لفض الخلافات الفاصلة بين الشركاء دون تدمير الشركة.`,
    level: 'expert',
    ai_compatibility: ['Claude', 'ChatGPT', 'Gemini'],
    tags: ['shareholders agreement', 'vesting', 'drag along', 'tag along', 'corporate governance']
  },
  {
    id: 'pml-adm-12',
    slash: '/adm-commercial-invoice-dispute-reply',
    title_fr: 'Rédacteur Réponse à Contestation de Facture Injustifiée',
    title_ar: 'الرد القانوني على رفض أو اعتراض العميل على سداد الفواتير Invoice Dispute',
    category_id: 'admin-docs',
    category_fr: 'Administration et documentation',
    category_ar: 'الإدارة والتوثيق والسياسات',
    function_fr: 'Réfuter poliment mais fermement la contestation tardive d’un client refusant de payer',
    function_ar: 'صياغة رد مهني وحاسم يثبت تسليم الخدمة ويفند مبررات العميل المماطل في السداد',
    prompt_fr: `Tu es un Juriste Contentieux et Responsable Recouvrement.
Un client conteste de mauvaise foi une facture arrivée à échéance :
- Prestation réalisée : [PRESTATION]
- Montant impayé : [MONTANT]
- Prétexte invoqué par le client : [PRETEXTE] (ex: "Je ne suis pas satisfait du rendu", "C'est plus cher que prévu", "Je n'ai pas signé le bon de livraison")

Rédige la réponse formelle de réfutation :
1. Rappel chronologique des devis signés, validations intermédiaires écrites et livrables réceptionnés.
2. Démonstration juridique du caractère tardif et irrecevable de la contestation formulée après l'échéance.
3. Réfutation point par point des allégations du client avec preuves contractuelles.
4. Sommation de payer sous 5 jours ouvrés avant transfert immédiat du dossier à notre cabinet de recouvrement et huissier de justice.`,
    prompt_ar: `بصفتك مسؤول التحصيل والمطالبات القانونية:
اعترض أحد العملاء بغير وجه حق على سداد فاتورة مستحقة:
- الخدمة المنفذة: [الخدمة]
- المبلغ المستحق: [المبلغ]
- المبرر الذي تحجج به العميل: [المبرر] (الادعاء بعدم الرضا عن العمل، أو ادعاء المماطلة بعد التسليم)

صياغة الرد الرسمي الحاسم:
1. التوثيق الزمني لأمر الشراء المعتمد والمراسلات التي أشاد فيها العميل بالعمل وقت التسليم.
2. التفنيد القانوني لبطلان الاعتراض المتأخر بعد فوات المواعيد المقررة للاعتراض.
3. الرد بالأدلة والبراهين العقدية على كل ادعاء ذكره العميل.
4. إمهال العميل 5 أيام عمل للسداد قبل إحالة الملف للإدارة القانونية للمطالبة القضائية والتعويض.`,
    level: 'intermediaire',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['invoice dispute', 'debt collection', 'client dispute', 'billing', 'legal notice']
  },
  {
    id: 'pml-adm-13',
    slash: '/adm-job-offer-acceptance-negotiation',
    title_fr: 'Négociateur de Proposition d’Embauche (Job Offer Counter-Proposal)',
    title_ar: 'التفاوض على عروض العمل وزيادة الراتب والمزايا Job Offer Negotiation',
    category_id: 'admin-docs',
    category_fr: 'Administration et documentation',
    category_ar: 'الإدارة والتوثيق والسياسات',
    function_fr: 'Rédiger une contre-proposition élégante pour négocier un salaire 15% supérieur sans braquer le recruteur',
    function_ar: 'صياغة رسالة تفاوض احترافية وراقية لطلب رفع الراتب والمزايا بعد تلقي عرض العمل',
    prompt_fr: `Tu es un Coach de Carrière et Négociateur pour Cadres Supérieurs.
J'ai reçu une offre d'embauche que je souhaite négocier à la hausse avec classe :
- Poste offert : [POSTE]
- Salaire proposé : [SALAIRE_OFFERT]
- Mes prétentions argumentées : [PRETENTIONS] (+15%, prime de signature, jours de télétravail supplémentaires, budget formation)
- Ma valeur ajoutée distinctive : [VALEUR_AJOUTEE]

Rédige l'email de contre-proposition parfait :
1. Enthousiasme sincère et remerciement pour la confiance témoignée par l'entreprise.
2. Rappel de mon alignement total avec les défis stratégiques du poste.
3. Formulation élégante de la demande d'ajustement salarial basée sur les benchmarks du marché et l'impact immédiat que je vais apporter.
4. Proposition d'un échange téléphonique rapide pour finaliser l'accord dans un esprit gagnant-gagnant.`,
    prompt_ar: `أنت مدرب مهني ومفاوض متخصص في ترقية عروض العمل للقياديين والتنفيذيين:
تلقيت عرض عمل ممتاز وأرغب في التفاوض لرفع الراتب والمزايا بلباقة واحترافية:
- المسمى الوظيفي المعروض: [المسمى]
- الراتب المعروض: [الراتب]
- ما أطمح للتفاوض عليه: [المطالب] (زيادة 15% في الراتب الأساسي، بدل سكن، يوم عمل عن بعد إضافي)
- نقاط تميزي وخبرتي التي تبرر الطلب: [الخبرات]

صياغة الرسالة البريدية التفاوضية:
1. التعبير عن الحماس الصادق والشكر على الثقة واختياري لهذا الدور.
2. تأكيد الاستعداد التام لمواجهة تحديات المنصب وتحقيق الأهداف المرسومة للشركة.
3. صياغة طلب التعديل المالي بأسلوب راقٍ يستند لمعايير السوق والقيمة الإضافية التي سأقدمها للفريق.
4. اقتراح مكالمة هاتفية قصيرة لحسم التفاصيل بروح الشراكة الإيجابية.`,
    level: 'debutant',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['salary negotiation', 'job offer', 'career advice', 'counter proposal', 'hr']
  },
  {
    id: 'pml-adm-14',
    slash: '/adm-whistleblower-internal-policy',
    title_fr: 'Rédacteur Dispositif d’Alerte Professionnelle (Loi Lanceur d’Alerte)',
    title_ar: 'إعداد سياسة الإبلاغ عن المخالفات وحماية المبلغين Whistleblowing Policy',
    category_id: 'admin-docs',
    category_fr: 'Administration et documentation',
    category_ar: 'الإدارة والتوثيق والسياسات',
    function_fr: 'Créer la procédure interne sécurisée de signalement de fraudes, corruption et manquements éthiques',
    function_ar: 'تأسيس قنوات آمنة للإبلاغ عن التجاوزات المالية والفساد مع ضمان السرية التامة للمبلغين',
    prompt_fr: `Tu es un Expert en Conformité et Éthique des Affaires (Compliance Officer).
Rédige la Politique Interne de Recueil des Alertes Professionnelles (Whistleblowing) :
- Entreprise et secteur : [ENTREPRISE]
- Champ des signalements autorisés : Fraude financière, harcèlement, corruption, atteinte à l'environnement, manquements légaux

Livrables de conformité éthique :
1. Définition claire des personnes habilitées à lancer une alerte et conditions de bonne foi.
2. Canaux de transmission sécurisés et anonymisés (Boîte mail chiffrée dédiée, référent déontologique externe).
3. Procédure d'instruction confidentielle de l'alerte avec accusé de réception sous 7 jours et retour d'information sous 3 mois.
4. Garantie formelle de non-représailles (interdiction absolue de licenciement, rétrogradation ou discrimination contre le lanceur d'alerte).`,
    prompt_ar: `بصفتك مسؤول الالتزام المؤسسي ومكافحة الفساد (Compliance & Ethics Officer):
قم بإعداد وثيقة سياسة الإبلاغ عن المخالفات (Whistleblower Policy) لـ:
- اسم المنشأة والقطاع: [المنشأة]
- نطاق البلاغات المشمولة: التجاوزات المالية، الفساد، التحرش، انتهاكات السلامة والبيئة

البنود الإلزامية للسياسة:
1. تحديد الفئات المصرح لها بتقديم البلاغات واشتراط حسن النية وسلامة القصد.
2. قنوات الإبلاغ المشفرة والآمنة التي تضمن سرية هوية المبلغ تماماً.
3. مراحل فحص والتحقيق في البلاغ مع إشعار المبلغ بالاستلام خلال 7 أيام وتحديثه بالنتائج.
4. الحماية الصارمة من أي إجراءات انتقامية (حظر فصل الموظف أو تهميشه أو حرمانه من الترقية بسبب بلاغه).`,
    level: 'expert',
    ai_compatibility: ['Claude', 'ChatGPT', 'Gemini'],
    tags: ['whistleblowing', 'compliance', 'ethics', 'internal audit', 'anti-corruption']
  },
  {
    id: 'pml-adm-15',
    slash: '/adm-termination-mutual-consent',
    title_fr: 'Rédacteur Convention de Rupture Conventionnelle du Contrat de Travail',
    title_ar: 'صياغة اتفاقيات إنهاء عقد العمل بالتراضي بين الموظف والشركة',
    category_id: 'admin-docs',
    category_fr: 'Administration et documentation',
    category_ar: 'الإدارة والتوثيق والسياسات',
    function_fr: 'Sécuriser la fin de contrat amiable entre employeur et salarié en évitant les vices de consentement',
    function_ar: 'توثيق المخالصة النهائية وإنهاء العلاقة العمالية ودياً مع حفظ كافة الحقوق النظامية',
    prompt_fr: `Tu es un Avocat Spécialiste du Droit du Travail.
Rédige la convention de Rupture Conventionnelle individuelle pour :
- Entreprise et salarié : [SALARIE_ENTREPRISE]
- Ancienneté et salaire de référence : [ANCIENNETE_SALAIRE]
- Date envisagée de fin de contrat : [DATE_FIN]

Clauses indispensables de validité :
1. Rappel des entretiens préalables légaux avec mention de la possibilité pour le salarié d'être assisté.
2. Calcul précis de l'indemnité spécifique de rupture conventionnelle (au moins égale à l'indemnité légale de licenciement).
3. Décompte du délai de rétractation obligatoire de 15 jours calendaires pour les deux parties.
4. Clause de dispense de préavis et formalités de remise des documents de fin de contrat (Certificat de travail, reçu pour solde de tout compte, attestation France Travail / chômage).`,
    prompt_ar: `بصفتك مستشاراً في قوانين ونظم العمل والتأمينات:
اكتب وثيقة إنهاء العلاقة العمالية بالتراضي والمخالصة النهائية لـ:
- اسم المنشأة والموظف: [الأطراف]
- مدة الخدمة ومتوسط الراتب الأساسي: [البيانات]
- تاريخ سريان إنهاء العقد: [التاريخ]

البنود النظامية الواجب توثيقها:
1. إثبات عقد جلسة التسوية الودية وموافقة الطرفين التامة دون أي إكراه أو ضغط.
2. الحساب الدقيق لمكافأة نهاية الخدمة النظامية وبدل الإجازات غير المستخدمة وأي مستحقات معلقة.
3. إقرار المخالصة الشاملة وإبراء الذمة المتبادل بعد استلام كامل المبالغ المالية.
4. التزام صاحب العمل بتسليم شهادة الخبرة وكافة الوثائق الرسمية للموظف دون تأخير.`,
    level: 'intermediaire',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['contract termination', 'labor law', 'severance', 'mutual consent', 'human resources']
  },

  // ==========================================
  // CATÉGORIE 20 : VIE QUOTIDIENNE ET USAGES UNIVERSELS (15 prompts)
  // ==========================================
  {
    id: 'pml-lif-01',
    slash: '/life-custom-travel-itinerary',
    title_fr: 'Planificateur d’Itinéraire de Voyage Sur-Mesure',
    title_ar: 'تخطيط برامج الرحلات السياحية المخصصة يوماً بيوم Travel Itinerary',
    category_id: 'lifestyle',
    category_fr: 'Vie quotidienne et usages universels',
    category_ar: 'الحياة اليومية والاستخدامات الشاملة',
    function_fr: 'Concevoir un carnet de voyage jour par jour optimisant trajets, hébergements et pépites locales',
    function_ar: 'تصميم برنامج سياحي متكامل يجمع بين المعالم الشهيرة والمطاعم الأصيلة دون إرهاق',
    prompt_fr: `Tu es un Guide de Voyage d'Élite et Concepteur de Séjours Sur-Mesure.
Construis l'itinéraire de voyage complet jour par jour pour :
- Destination : [DESTINATION]
- Durée du séjour : [DUREE] (ex: 7 jours)
- Voyageurs et style : [STYLE] (ex: Couple avec 1 enfant, amateurs de bonne cuisine, culture et marche à pied, budget modéré)

Structure détaillée jour par jour :
1. Matin : Visite majeure avec conseil de créneau horaire pour éviter la foule et réservation nécessaire.
2. Midi : Recommandation d'un restaurant typique non-touristique avec plat emblématique à goûter.
3. Après-midi : Découverte immersive ou quartier pittoresque à explorer à pied (avec temps de trajet logique entre les étapes).
4. Soirée : Coucher de soleil mémorable et ambiance locale authentique.
5. 3 conseils pratiques essentiels : Cartes SIM locales, transports recommandés, et arnaques touristiques courantes à esquiver.`,
    prompt_ar: `أنت خبير سياحي ومرشد رحلات محترف حول العالم:
قم بتصميم برنامج رحلة سياحية متكامل يوماً بيوم لـ:
- الوجهة والدولة: [الوجهة]
- مدة الرحلة: [المدة] (مثال: 7 أيام)
- طبيعة المسافرين: [المسافرون] (عائلة مع أطفال، عشاق الطبيعة والتاريخ، ميزانية متوسطة)

تفاصيل البرنامج اليومي:
1. الصباح: زيارة المعلم الأبرز مع التوقيت الذهبي لتجنب الزحام وحجز التذاكر مسبقاً.
2. الظهيرة: ترشيح مطعم محلي أصيل بعيد عن فخاخ السياح وتحديد الطبق التقليدي الأشهى.
3. بعد الظهر: جولة مشي في حي تاريخي عريق أو طبيعة ساحرة مع مراعاة قرب المسافات.
4. المساء: مكان ساحر لمشاهدة الغروب وعشاء في أجواء هادئة.
5. أهم 3 نصائح عملية: شريحة الاتصال والإنترنت، أفضل وسائل التنقل، والخدع الشائعة لتفاديها.`,
    level: 'debutant',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['travel itinerary', 'vacation planning', 'travel guide', 'lifestyle', 'tourism']
  },
  {
    id: 'pml-lif-02',
    slash: '/life-meal-prep-macro-nutrition',
    title_fr: 'Nutritionniste & Planificateur de Repas Semaine (Meal Prep)',
    title_ar: 'تخطيط الوجبات الأسبوعية والطهي المسبق المتوازن Meal Prep',
    category_id: 'lifestyle',
    category_fr: 'Vie quotidienne et usages universels',
    category_ar: 'الحياة اليومية والاستخدامات الشاملة',
    function_fr: 'Bâtir un menu de la semaine sain, équilibré en macronutriments, cuisiné en 2 heures le dimanche',
    function_ar: 'إعداد جدول وجبات صحي متكامل محسوب السعرات مع قائمة تسوق سريعة للمطبخ',
    prompt_fr: `Tu es un Diététicien-Nutritionniste du Sport et Chef Cuisinier.
Conçois mon plan de repas de la semaine (Meal Prep) avec les spécifications :
- Objectif : [OBJECTIF] (Perte de masse grasse, prise de muscle, énergie saine et stable)
- Contraintes alimentaires : [REGIME] (ex: Sans gluten, végétarien, riche en protéines, pas de porc)
- Cible calorique approximative : [CALORIES] (ex: 2000 kcal / jour avec 140g protéines)

Livrables d'organisation nutritionnelle :
1. Menu complet du Lundi au Vendredi (Déjeuner et Dîner variés réutilisant astucieusement des bases communes).
2. La liste de courses optimisée classée par rayon de supermarché pour ne rien gaspiller.
3. Le guide de préparation en 2 heures le dimanche (Batch Cooking : ordre des cuissons simultanées au four, découpes et conservation hermétique au frais).`,
    prompt_ar: `بصفتك أخصائي تغذية رياضية وشيفاً محترفاً:
صمم خطة الوجبات الأسبوعية والطهي المسبق (Meal Prep):
- الهدف الصحي: [الهدف] (خسارة دهون، بناء عضلات، تغذية متوازنة)
- التفضيلات والقيود الغذائية: [القيود] (بدون غلوتين، غني بالبروتين، نباتي)
- السعرات والماكروز المستهدفة: [السعرات] (مثال: 2000 سعرة، 130 جم بروتين)

البرنامج الغذائي الأسبوعي:
1. جدول الوجبات من الأحد للخميس (الغداء والعشاء بقيم غذائية متوازنة وتنوع في المكونات).
2. قائمة مشتريات البقالة المنظمة والمقسمة حسب أقسام السوبرماركت لتوفير الوقت والمال.
3. دليل الطهي السريع في ساعتين بعطلة الأسبوع (الترتيب الذكي لتشغيل الفرن وسلق الحبوب وحفظ الوجبات طازجة).`,
    level: 'debutant',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['meal prep', 'nutrition', 'healthy eating', 'batch cooking', 'macros', 'fitness']
  },
  {
    id: 'pml-lif-03',
    slash: '/life-conflict-resolution-family',
    title_fr: 'Médiateur de Communication Non-Violente (CNV) & Conflits',
    title_ar: 'حل الخلافات الأسرية والتواصل اللاعنيف CNV المدرب الحكيم',
    category_id: 'lifestyle',
    category_fr: 'Vie quotidienne et usages universels',
    category_ar: 'الحياة اليومية والاستخدامات الشاملة',
    function_fr: 'Désamorcer une querelle intime ou familiale en exprimant ses sentiments sans attaquer',
    function_ar: 'معالجة التوتر وسوء الفهم العائلي بأسلوب الحوار الهادئ الذي يعيد المودة والاحترام',
    prompt_fr: `Tu es un Praticien certifié en Communication Non-Violente (CNV de Marshall Rosenberg).
Aide-moi à exprimer ce qui ne va pas sans déclencher de dispute destructrice :
- Situation de conflit : [SITUATION] (ex: Rapprochement sur la répartition des corvées domestiques, tension sur l'éducation des enfants, désaccord financier avec son conjoint)
- Ce que j'ai envie de lui crier impulsivement : [PENSEE_BRUTE]

Formule mon message selon les 4 étapes de la CNV (OSBD) :
1. Observation neutre des faits objectifs (sans jugement de valeur, sans mots exagérés comme "toujours" ou "jamais").
2. Sentiment authentique éprouvé (parler de soi : tristesse, épuisement, inquiétude).
3. Besoin universel non comblé (besoin de repos, de reconnaissance, de sécurité, de clarté).
4. Demande concrète, réalisable, formulée positivement au présent et négociable.
Fournis également les réponses pour accueillir la réaction défensive initiale de mon interlocuteur avec empathie.`,
    prompt_ar: `أنت مستشار علاقات أسرية ومدرب معتمد في التواصل اللاعنيف (Nonviolent Communication لمارشال روزنبرغ):
ساعدني في التعبير عما يزعجني دون إشعال خلاف حاد مع الطرف الآخر:
- الموقف محل الخلاف: [الموقف] (تقاسم المسؤوليات، شؤون الأبناء، ضغوط المعيشة)
- ما أشعر بالرغبة في قوله بانفعال: [الكلام_الانفعالي]

صياغة الرسالة وفق خطوات التواصل الأربع (OSBD):
1. الملاحظة الموضوعية المجردة للواقعة دون إصدار أحكام أو استخدام كلمات تعميم مثل "أنت دائماً" أو "أنت لا تهتم".
2. التعبير عن المشاعر الذاتية الصادقة (الحزن، القلق، الإرهاق) بدلاً من توجيه أصابع الاتهام.
3. توضيح الاحتياج الإنساني غير الملبي (الحاجة للتقدير، المشاركة، الأمان والراحة).
4. الطلب الإيجابي المحدد والعملي القابل للنقاش والتنفيذ في الحاضر.
مع نصائح لاحتواء أي رد فعل دفاعي من الطرف الآخر بهدوء ومحبة.`,
    level: 'debutant',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['nonviolent communication', 'relationships', 'family', 'empathy', 'conflict resolution']
  },
  {
    id: 'pml-lif-04',
    slash: '/life-sleep-optimization-huberman',
    title_fr: 'Optimiseur de Sommeil Profond & Rythmes Circadiens',
    title_ar: 'تحسين جودة النوم العميق وضبط الساعة البيولوجية Sleep Science',
    category_id: 'lifestyle',
    category_fr: 'Vie quotidienne et usages universels',
    category_ar: 'الحياة اليومية والاستخدامات الشاملة',
    function_fr: 'Bâtir un protocole scientifique pour s’endormir en moins de 15 min et se réveiller frais',
    function_ar: 'تطبيق بروتوكولات علم الأعصاب للنوم السريع وزيادة مرحلة النوم العميق والاستيقاظ بنشاط',
    prompt_fr: `Tu es un Neurobiologiste Spécialiste du Sommeil (dans l'esprit des protocoles d'Andrew Huberman et Matthew Walker).
Construis mon protocole quotidien pour réparer mon sommeil :
- Mes difficultés actuelles : [DIFFICULTES] (Insomnie d'endormissement, réveils nocturnes à 3h du matin, fatigue au réveil)
- Heure de lever souhaitée : [HEURE_LEVER]

Protocole chrono-biologique sur 24h :
1. Routine du matin : Exposition à la lumière naturelle du soleil dans les 30 min après le réveil et hydratation.
2. Gestion de la journée : Règle de temporisation de la caféine (attente matinale et arrêt 10h avant le coucher).
3. Routine du soir (Dernières 2 heures) : Baisse de l'éclairage ambiant, élimination de la lumière bleue, température de la chambre (18°C-19°C optimale pour la chute thermique corporelle).
4. Technique de respiration d'urgence en cas de réveil nocturne (Soupir physiologique : double inspiration nasale + longue expiration buccale).`,
    prompt_ar: `بصفتك باحثاً في طب النوم وعلم الأعصاب (وفق بروتوكولات د. أندرو هوبرمان وماثيو ووكر):
صمم بروتوكولي اليومي لاستعادة النوم العميق والمتواصل:
- مشكلتي الحالية مع النوم: [المشكلة] (صعوبة الاستغراق في النوم، الاستيقاظ في منتصف الليل، الإرهاق الصباحي)
- وقت الاستيقاظ المرغوب: [الوقت]

البروتوكول العلمي على مدار اليوم:
1. الصباح الباكر: التعرض لأشعة الشمس الطبيعية المباشرة خلال أول نصف ساعة من الاستيقاظ لضبط هرمون الميلاتونين.
2. خلال النهار: إيقاف المشروبات المنبهة والكافيين قبل موعد النوم بـ 9 إلى 10 ساعات على الأقل.
3. الساعتان قبل النوم: إطفاء الأضواء البيضاء الساطعة، تبريد غرفة النوم لدرجة 19 مئوية لتحفيز هبوط حرارة الجسم الطبيعي للنوم.
4. تمرين التنفس الفسيولوجي المهدئ في حال الاستيقاظ ليلاً (الزفير المزدوج السريع يليها زفير فمي طويل وبطيء).`,
    level: 'debutant',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['sleep', 'circadian rhythm', 'huberman', 'health', 'wellness', 'insomnia']
  },
  {
    id: 'pml-lif-05',
    slash: '/life-first-home-buyer-guide',
    title_fr: 'Conseiller Premier Achat Immobilier & Négociation',
    title_ar: 'دليل شراء المنزل الأول والتفاوض العقاري الذكي Home Buying Guide',
    category_id: 'lifestyle',
    category_fr: 'Vie quotidienne et usages universels',
    category_ar: 'الحياة اليومية والاستخدامات الشاملة',
    function_fr: 'Guider un primo-accédant dans les visites, l’offre d’achat au juste prix et les pièges de copropriété',
    function_ar: 'إرشاد المشتري لأول مرة في فحص العقار وقراءة محاضر الملاك والتفاوض على أفضل سعر',
    prompt_fr: `Tu es un Chasseur Immobilier Indépendant et Négociateur Chevronné.
J'envisage d'acheter mon premier bien immobilier :
- Type de bien : [BIEN] (Maison avec jardin ou appartement en copropriété)
- Prix affiché et budget : [PRIX]
- Ville ou quartier ciblé : [VILLE]

Feuille de route complète d'achat :
1. Checklist des 10 points non négociables lors de la visite (État de la toiture/façade, humidité, tableau électrique, isolation phonique avec les voisins, luminosité à différentes heures).
2. Les 3 documents de copropriété obligatoires à éplucher (Les 3 derniers procès-verbaux d'assemblée générale pour repérer les gros travaux votés, carnet d'entretien, montant des charges).
3. Stratégie de formulation d'une offre d'achat agressive mais justifiée (arguments techniques pour baisser le prix de 5% à 10%).
4. Les conditions suspensives indispensables à inscrire au compromis de vente (obtention de prêt, absence de servitude).`,
    prompt_ar: `بصفتك مستشاراً عقارياً مستقلاً وخبيراً في معاينة وتقييم المنازل:
أستعد لشراء منزلي الأول:
- نوع العقار: [العقار] (شقة سكنية، فيلا)
- السعر المعروض والميزانية المتاحة: [السعر]
- المدينة والحي المستهدف: [المدينة]

خطة الفحص والتفاوض المتكاملة:
1. قائمة الفحص أثناء المعاينة (سلامة السباكة والعزل المائي، التشققات الإنشائية، جودة العزل الصوتي مع الجيران، ومستوى دخول الشمس).
2. فحص وثائق العقار والالتزامات السابقة (فواتير الخدمات، رسوم الصيانة المشتركة، وعمر المنشأة الفعلي).
3. تكتيك تقديم عرض الشراء التفاوضي الذكي وتقديم مبررات فنية لخصم نسبة معقولة من السعر المعلن.
4. الشروط الاحترازية الإلزامية في عقد المبايعة المبدئي (شرط الحصول على التمويل البنكي، والتأكد من خلو العقار من أي رهونات أو مخالفات بلدية).`,
    level: 'debutant',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['real estate', 'home buying', 'property negotiation', 'first home', 'mortgage']
  },
  {
    id: 'pml-lif-06',
    slash: '/life-gardening-permaculture-urban',
    title_fr: 'Conseiller Potager & Permaculture Urbaine (Balcon / Jardin)',
    title_ar: 'الزراعة المنزلية العضوية وتأسيس حديقة مستدامة Permaculture',
    category_id: 'lifestyle',
    category_fr: 'Vie quotidienne et usages universels',
    category_ar: 'الحياة اليومية والاستخدامات الشاملة',
    function_fr: 'Créer un potager nourricier abondant sans pesticides sur un balcon ou un petit terrain',
    function_ar: 'زراعة الخضروات والأعشاب المنزلية الطازجة عضوياً في الشرفات والحدائق الصغيرة',
    prompt_fr: `Tu es un Expert en Permaculture et Jardinage Biologique.
Conçois mon potager nourricier adapté à mon espace :
- Espace disponible : [ESPACE] (ex: Balcon de 6m² orienté Sud-Est ou carré de jardin de 30m²)
- Temps d'entretien disponible par semaine : [TEMPS] (ex: 2 heures)
- Niveau de départ : Débutant complet

Livrables de permaculture :
1. Sélection des 6 légumes et aromates faciles et productifs adaptés à l'exposition (Tomates cerises, basilic, radis, courgettes, fraises, salades à couper).
2. Compagnonnage des plantes bénéfique (Les mariages heureux : ex: Tomate + Basilic qui repousse les parasites et rehausse le goût).
3. Préparation du sol vivant (Mélange terreau de qualité + compost + paillage organique pour garder l'humidité et diviser les arrosages par trois).
4. Calendrier des semis et récoltes mois par mois.`,
    prompt_ar: `أنت خبير في الزراعة المنزلية العضوية والزراعة المستدامة (Permaculture):
صمم حديقتي المنزلية المنتجة وفق المساحة المتاحة:
- المساحة المتوفرة: [المساحة] (شرفة شقة مشمسة، أو فناء حديقة صغير)
- الوقت المتاح للعناية أسبوعياً: [الوقت] (ساعة إلى ساعتين)
- مستوى الخبرة: مبتدئ

خطة الزراعة العضوية:
1. اختيار أنسب 6 خضروات ونباتات عطرية سريعة الإنتاج وسهلة الرعاية (طماطم كرزية، ريحان، نعناع، فراولة، فجل، جرجير).
2. تقنية الزراعة الرفيقة (دمج النباتات الصديقة مثل الطماطم والريحان لطرد الآفات طبيعياً وتحسين النكهة).
3. تجهيز التربة الخصبة (خليط البتموس والبيرلايت والسماد العضوي مع تغطية سطح التربة بالقش للاحتفاظ بالرطوبة وتقليل الري).
4. جدول مواسم البذر والغرس والحصاد على مدار شهور السنة.`,
    level: 'debutant',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['gardening', 'permaculture', 'urban garden', 'organic food', 'home growing']
  },
  {
    id: 'pml-lif-07',
    slash: '/life-emergency-first-aid-guide',
    title_fr: 'Formateur Gestes de Premiers Secours d’Urgence',
    title_ar: 'دليل الإسعافات الأولية والتصرف في حالات الطوارئ First Aid',
    category_id: 'lifestyle',
    category_fr: 'Vie quotidienne et usages universels',
    category_ar: 'الحياة اليومية والاستخدامات الشاملة',
    function_fr: 'Connaître les gestes qui sauvent face à un étouffement, arrêt cardiaque ou brûlure grave',
    function_ar: 'التعامل الإسعافي السريع مع حالات الاختناق، توقف القلب، الحروق، والنزيف الحاد',
    prompt_fr: `Tu es un Formateur de Premiers Secours certifié (SST / Croix-Rouge).
Rappelle avec une clarté vitale les gestes d'urgence pour la situation suivante :
- Situation d'urgence : [URGENCE] (ex: Étouffement d'adulte ou d'enfant par aliment, personne inconsciente qui ne respire plus, brûlure thermique étendue, hémorragie externe)

Protocole d'intervention PAS (Protéger, Alerter, Secourir) :
1. Protéger : Sécuriser la zone pour éviter un suraccident immédiat.
2. Alerter : Numéros d'urgence officiels (15 SAMU, 18 Pompiers, 112 Européen) et les 4 informations exactes à énoncer au régulateur.
3. Secourir : Description gestuelle précise étape par étape (ex: Méthode de Heimlich, massage cardiaque 30 compressions pour 2 insufflations à 100-120 bpm avec utilisation du DAE).
4. Les gestes dangereux à NE JAMAIS FAIRE (ce qui aggrave la situation).`,
    prompt_ar: `بصفتك مدرباً معتمداً للإسعافات الأولية والإنقاذ (الهلال الأحمر / الصليب الأحمر):
اشرح بوضوح ودقة الخطوات الإسعافية لإنقاذ مصاب في الحالة التالية:
- الحالة الطارئة: [الحالة] (غصة واختناق بجسم غريب، توقف التنفس والنبض، حروق شديدة، نزيف حاد)

بروتوكول التصرف السريع:
1. تأمين الموقع: حماية المصاب والمسعف من أي خطر إضافي محيط.
2. الاتصال بالطوارئ: رقم الإسعاف المحلي والمعلومات الأربع الأساسية الواجب إبلاغها لغرفة العمليات.
3. خطوات الإسعاف المنقذة للحياة بالترتيب (مثال: ضربات الظهر ومناورة هيمليك للغصة، أو الإنعاش القلبي الرئوي CPR بمعدل 100-120 ضغطة في الدقيقة مع استخدام جهاز الصدمات الآلي).
4. الأخطاء القاتلة الشائعة التي يحظر ارتكابها حتى لا تتفاقم حالة المصاب.`,
    level: 'debutant',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['first aid', 'emergency', 'cpr', 'safety', 'health', 'lifesaving']
  },
  {
    id: 'pml-lif-08',
    slash: '/life-wardrobe-capsule-style',
    title_fr: 'Styliste Garde-Robe Capsule Minimaliste (33 Pièces)',
    title_ar: 'بناء خزانة الملابس الكبسولية الأنيقة Capsule Wardrobe',
    category_id: 'lifestyle',
    category_fr: 'Vie quotidienne et usages universels',
    category_ar: 'الحياة اليومية والاستخدامات الشاملة',
    function_fr: 'Composer un dressing polyvalent et intemporel où tous les vêtements se marient parfaitement',
    function_ar: 'تنسيق ملابس أنيقة متعددة الاستخدامات تختصر الحيرة اليومية وتوفر المال والمساحة',
    prompt_fr: `Tu es un Styliste Personnel et Conseiller en Image Minimaliste.
Conçois ma Garde-Robe Capsule saisonnière selon le principe des 30 à 35 pièces interchangeables :
- Style recherché : [STYLE] (ex: Élégant décontracté / Smart Casual, business chic, minimaliste scandinave)
- Climat et saison : [SAISON]
- Activités principales de ma semaine : [ACTIVITES] (Bureau, réunions, sorties décontractées le week-end)

Livrables de garde-robe capsule :
1. La palette de couleurs maîtresse (3 couleurs neutres de base, 2 couleurs secondaires, 1 couleur d'accentuation).
2. Liste exacte des pièces sélectionnées (Hauts, bas, vestes, chaussures et accessoires intemporels de belle coupe).
3. 5 exemples de tenues complètes créées à partir de ces pièces (du look professionnel de réunion au look week-end détendu).
4. Critères de choix des matières naturelles nobles et durables (Coton lourd, laine mérinos, lin).`,
    prompt_ar: `أنت خبير مظهر ومصمم أزياء شخصي متخصص في الخزانة الكبسولية (Capsule Wardrobe):
صمم خزانة ملابس عملية ومترابطة تتكون من 30 إلى 33 قطعة متعددة التنسيق:
- الطابع المفضل: [الأسلوب] (أنيق غير رسمي Smart Casual، رسمي عملي، كلاسيكي راقٍ)
- الموسم والطقس: [الموسم]
- نمط الحياة الأسبوعي: [الأنشطة] (عمل مكتبي، لقاءات، مناسبات عائلية)

مكونات الخزانة الذكية:
1. لوحة الألوان المتناسقة (3 ألوان محايدة أساسية، لونان متوافقان، ولون تمييز).
2. القائمة الدقيقة للقطع المختارة (قمصان، بناطيل، سترات، أحذية مريحة وأنيقة).
3. 5 إطلالات منسقة بالكامل من نفس هذه القطع تغطي من اجتماعات العمل حتى نزهة نهاية الأسبوع.
4. معايير جودة الأقمشة والخامات الطبيعية المعمرة (الصوف، القطن، والكتان الأصلي).`,
    level: 'debutant',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['capsule wardrobe', 'style', 'fashion', 'minimalism', 'personal branding']
  },
  {
    id: 'pml-lif-09',
    slash: '/life-pet-training-behavior',
    title_fr: 'Comportementaliste Animalier & Éducation Canine / Féline',
    title_ar: 'تدريب الحيوانات الأليفة وفهم السلوكيات التربوية الإيجابية Pet Training',
    category_id: 'lifestyle',
    category_fr: 'Vie quotidienne et usages universels',
    category_ar: 'الحياة اليومية والاستخدامات الشاملة',
    function_fr: 'Résoudre les problèmes de comportement (aboiements, malpropreté, anxiété de séparation) par renforcement positif',
    function_ar: 'تعديل سلوكيات الكلاب والقطط بالتعزيز الإيجابي وعلاج قلق الانفصال والنباح',
    prompt_fr: `Tu es un Éducateur Canin / Félin et Comportementaliste Animalier certifié bienveillant.
Aide-moi à résoudre le problème de comportement suivant :
- Animal et race/âge : [ANIMAL]
- Comportement indésirable : [COMPORTEMENT] (ex: Aboiements excessifs quand la sonnette retentit, malpropreté dans la maison, destruction d'objets lors des départs)

Protocole d'éducation par renforcement positif :
1. Compréhension de la cause émotionnelle sous-jacente (Peur, ennui, stress, territoire, recherche d'attention).
2. Ce qu'il faut absolument cesser de faire (Punitions physiques, cris qui aggravent le stress et brisent le lien de confiance).
3. Exercice pratique de désensibilisation et contre-conditionnement étape par étape (associer le déclencheur à une friandise de haute valeur et un comportement alternatif calme).
4. Aménagements de l'environnement pour enrichir le quotidien de l'animal (Jeux de flair, dépense mentale).`,
    prompt_ar: `بصفتك أخصائياً في سلوكيات وترويض الحيوانات الأليفة (Pet Behaviorist):
ساعدني في تعديل السلوك المزعج التالي لحيواني الأليف:
- نوع الحيوان وعمره: [الحيوان]
- المشكلة السلوكية: [المشكلة] (النباح المفرط، العبث بالأثاث عند الخروج، التبول في غير مكانه)

خطة التدريب بالتعزيز الإيجابي:
1. فهم الدافع النفسي وراء السلوك (الخوف، الفراغ والملل، قلق الانفصال، أو طلب الاهتمام).
2. المحاذير التربوية التي يجب التوقف عنها فوراً (العقاب البدني أو الصراخ الذي يضاعف الخوف ويدمر الثقة).
3. خطوات تمرين إعادة التوجيه السلوكي خطوة بخطوة وربط السلوك الهادئ بالمكافآت التشجيعية.
4. إثراء بيئة المنزل بألعاب التحفيز الذهني والأنشطة الحركية لتفريغ طاقة الحيوان بشكل إيجابي.`,
    level: 'debutant',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['pet training', 'dog training', 'cat behavior', 'positive reinforcement', 'lifestyle']
  },
  {
    id: 'pml-lif-10',
    slash: '/life-smart-home-home-assistant',
    title_fr: 'Architecte Domotique & Maison Connectée (Home Assistant)',
    title_ar: 'هندسة المنازل الذكية وأتمتة البيت Home Automation',
    category_id: 'lifestyle',
    category_fr: 'Vie quotidienne et usages universels',
    category_ar: 'الحياة اليومية والاستخدامات الشاملة',
    function_fr: 'Concevoir un écosystème domotique local, privé et fiable sans dépendre du cloud (Zigbee, Matter)',
    function_ar: 'تصميم شبكة أتمتة منزلية محلية مستقلة للتحكم في الإضاءة والتكييف والأمان',
    prompt_fr: `Tu es un Ingénieur en Domotique et Spécialiste Home Assistant.
Conçois l'automatisation intelligente de mon logement :
- Pièces et équipements visés : [EQUIPEMENTS] (Éclairage, volets roulants, chauffage/climatisation, détection de présence, alarme)
- Protocole favorisé : Zigbee 3.0 / Matter pour un fonctionnement 100% local indépendant d'internet

Livrables d'architecture domotique :
1. Choix du contrôleur local (Box Home Assistant Green ou mini-PC avec dongle Zigbee SkyConnect).
2. Les 3 automatisations phares du quotidien avec conditions précises :
   - Routine "Réveil en douceur" (Ouverture progressive des volets, montée en température, désactivation alarme).
   - Routine "Départ du domicile" (Extinction générale de toutes les lumières, passage chauffage en mode éco, armement surveillance).
   - Éclairage nocturne automatique tamisé à 10% dans le couloir en cas de lever la nuit.
3. YAML ou flux Node-RED prêt à copier pour l'une des automatisations.`,
    prompt_ar: `أنت مهندس أنظمة المنازل الذكية وخبير برمجة منصة Home Assistant المفتوحة:
صمم منظومة أتمتة منزلي الذكي:
- الأجهزة المستهدفة: [الأجهزة] (الإنارة، الستائر، التكييف، حساسات الحركة، أجهزة الأمان)
- بروتوكول الاتصال المفضل: Zigbee أو Matter للعمل محلياً داخل المنزل دون الحاجة للإنترنت

مخطط المنظومة:
1. خادم التحكم المحلي (جهاز Home Assistant مع لاقط Zigbee المعتمد).
2. أهم 3 سيناريوهات أتمتة يومية ذكية:
   - سيناريو الاستيقاظ الصباحي (فتح الستائر تدريجياً، ضبط التكييف، وإلغاء الإنذار).
   - سيناريو مغادرة المنزل (إطفاء كافة الأجهزة والإنارة تلقائياً، وتفعيل كاميرات وحساسات الأمان).
   - إضاءة المسار الليلي الخافتة بنسبة 10% تلقائياً عند استشعار الحركة في الممر ليلاً.
3. كود الإعداد البرمجي YAML المباشر لإحدى هذه الأتمتات.`,
    level: 'intermediaire',
    ai_compatibility: ['Cursor', 'Claude', 'ChatGPT'],
    tags: ['home assistant', 'smart home', 'zigbee', 'iot', 'automation', 'matter']
  },
  {
    id: 'pml-lif-11',
    slash: '/life-stoic-mindset-resilience',
    title_fr: 'Conseiller Stoïcien de Vie (Sénèque, Marc Aurèle, Épictète)',
    title_ar: 'التفكير الفلسفي الرواقي وبناء الصلابة النفسية Stoicism',
    category_id: 'lifestyle',
    category_fr: 'Vie quotidienne et usages universels',
    category_ar: 'الحياة اليومية والاستخدامات الشاملة',
    function_fr: 'Appliquer la dichotomie du contrôle stoïcienne pour retrouver la paix intérieure face à une épreuve',
    function_ar: 'تطبيق حكمة الرواقية والتمييز بين ما تملكه وما لا تملكه لاستعادة راحة البال والهدوء',
    prompt_fr: `Tu es un Philosophe Stoïcien dans la lignée directe de Marc Aurèle, Épictète et Sénèque.
Je traverse l'épreuve suivante et ressens de l'anxiété ou de la colère :
- Situation troublante : [SITUATION]

Applique la sagesse stoïcienne à mon cas :
1. La Dichotomie du Contrôle : Sépare rigoureusement ce qui dépend de moi (mes jugements, mes actions, mon intégrité) et ce qui ne dépend pas de moi (les actes des autres, les événements extérieurs, le résultat final).
2. Exercice de Praemeditatio Malorum : Examiner la pire issue possible pour constater qu'elle n'entame pas ma dignité intérieure.
3. Recadrage de perception (Amor Fati) : Comment transformer cet obstacle précis en opportunité de vertu et de force de caractère ("L'obstacle est le chemin").
4. Une citation de maître stoïcien réconfortante et puissante adaptée à ma situation.`,
    prompt_ar: `أنت حكيم وفيلسوف رواقي متبحر في تعاليم ماركوس أوريليوس وإبكتيتوس وسينيكا:
أمر بالتحدي الصعب التالي الذي يسبب لي القلق أو الغضب:
- الموقف المقلق: [الموقف]

تطبيق الحكمة الرواقية لاستعادة السكينة:
1. مصفوفة التحكم (Dichotomy of Control): الفصل الصارم بين ما يقع تحت إرادتي وسيطرتي (أفكاري، ردود أفعالي، ونزاهتي) وبين ما هو خارج عن إرادتي (أفعال الآخرين والنتائج الخارجية).
2. تمرين تقبل الأسوأ (Praemeditatio Malorum): مواجهة أسوأ الاحتمالات بشجاعة لإدراك أنها لن تسلبك كرامتك وهدوءك الداخلي.
3. حب القدر وتحويل العثرات (Amor Fati): كيف تحول هذا التحدي بالذات إلى فرصة لبناء الحكمة والصبر والصلابة النفسية ("العائق هو الطريق").
4. حكمة خالدة من أقوال فلاسفة الرواقية تلهمك التماسك والثبات.`,
    level: 'debutant',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['stoicism', 'philosophy', 'resilience', 'mental health', 'wisdom', 'peace']
  },
  {
    id: 'pml-lif-12',
    slash: '/life-strength-training-hypertrophy',
    title_fr: 'Coach Musculation & Programmation d’Entraînement Scientifique',
    title_ar: 'تصميم برامج كمال الأجسام والتمارين الرياضية العلمية Hypertrophy',
    category_id: 'lifestyle',
    category_fr: 'Vie quotidienne et usages universels',
    category_ar: 'الحياة اليومية والاستخدامات الشاملة',
    function_fr: 'Concevoir un programme Push-Pull-Legs ou Upper-Lower optimisant la surcharge progressive',
    function_ar: 'بناء جدول تمارين أسبوعي يطبق الحمل التدريبي المتصاعد لبناء القوة والعضلات بأمان',
    prompt_fr: `Tu es un Préparateur Physique et Coach Sportif certifié en Sciences de l'Entraînement.
Conçois mon programme d'entraînement en musculation personnalisé :
- Objectif : [OBJECTIF] (Hypertrophie musculaire, gain de force, remise en forme athlétique)
- Fréquence possible : [JOURS_PAR_SEMAINE] (ex: 4 séances par semaine)
- Matériel disponible : [MATERIEL] (Salle de sport complète ou haltères à la maison)

Structure du programme scientifique :
1. Répartition optimale (ex: Upper / Lower sur 4 jours ou Push-Pull-Legs sur 3-6 jours).
2. Pour chaque séance : Liste de 5 à 6 exercices optimaux avec ordre logique (gros mouvements polyarticulaires d'abord, isolation ensuite).
3. Nombre de séries effectives, fourchettes de répétitions (Rep Ranges) et proximité de l'échec (RPE 7-9 ou RIR 1-2).
4. Protocole d'application de la Surcharge Progressive d'une semaine sur l'autre (poids, répétitions, temps sous tension).`,
    prompt_ar: `بصفتك مدرباً رياضياً ومعداً بدنياً معتمداً في علوم التدريب الرياضي:
صمم برنامج التمارين الرياضية وبناء الأجسام لـ:
- الهدف التدريبي: [الهدف] (زيادة الكتلة العضلية، زيادة القوة، اللياقة العامة)
- عدد الأيام المتاحة أسبوعياً: [الأيام] (مثال: 4 أيام في الأسبوع)
- الأجهزة المتاحة: [الأجهزة] (نادي رياضي متكامل، أو أوزان حرة منزلية)

البرنامج التدريبي العلمي:
1. التقسيم الأسبوعي الأنسب (نظام الجزء العلوي والسفلي Upper/Lower، أو نظام دفع/سحب/أرجل PPL).
2. تفاصيل كل حصة: 5 إلى 6 تمارين مدروسة تبدأ بالتمارين المركبة الكبرى تليها تمارين العزل.
3. عدد الجولات الفعالة، نطاق التكرارات، ومعدل الجهد RPE (الوصول لقرب الفشل العضلي مع بقاء عدة أو عدتين في الاحتياط).
4. تطبيق مبدأ الزيادة الدورية التدريجية في الأحمال (Progressive Overload) أسبوعياً لضمان استمرار التطور.`,
    level: 'debutant',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['fitness', 'workout plan', 'strength training', 'hypertrophy', 'progressive overload']
  },
  {
    id: 'pml-lif-13',
    slash: '/life-book-reading-retention',
    title_fr: 'Guide de Lecture Active & Synthèse de Livres',
    title_ar: 'القراءة النشطة واستيعاب وتلخيص الكتب الفكرية الكبرى Active Reading',
    category_id: 'lifestyle',
    category_fr: 'Vie quotidienne et usages universels',
    category_ar: 'الحياة اليومية والاستخدامات الشاملة',
    function_fr: 'Extraire les leçons fondamentales d’un livre dense et les intégrer dans ses décisions',
    function_ar: 'تفكيك الأفكار المحورية للكتب العميقة وتحويل قراءتها إلى خطط عمل تطبيقية دائمة',
    prompt_fr: `Tu es un Mentor Intellectuel et Bibliothécaire de Savoirs Universels.
Synthétise et extrait la quintessence du livre suivant :
- Titre et auteur du livre : [TITRE_LIVRE]

Structure de lecture active à haute rétention :
1. La Grande Thèse de l'auteur résumée en 1 paragraphe magistral.
2. Les 3 concepts les plus contre-intuitifs ou novateurs développés dans l'ouvrage.
3. Les 5 citations les plus marquantes et leur signification profonde.
4. "Comment ce livre change ma façon de vivre dès demain" : 3 actions concrètes directement inspirées de l'ouvrage.`,
    prompt_ar: `أنت موجه فكري وقارئ نهم لخلاصة أمهات الكتب العالمية:
قم بالتحليل العميق واستخلاص جوهر الكتاب التالي:
- عنوان الكتاب ومؤلفه: [الكتاب]

خلاصة القراءة النشطة عالية الفائدة:
1. الأطروحة الكبرى والرسالة المركزية للمؤلف في فقرة مكثفة وشاملة.
2. أهم 3 مفاهيم ذكية وغير مألوفة يقدمها الكتاب لتغيير زاوية رؤيتك للأمور.
3. أهم 5 اقتباسات ذهبية من الكتاب ودلالتها الفكرية العميقة.
4. "كيف يغير هذا الكتاب قراراتي وسلوكي بدءاً من الغد": 3 تطبيقات حياتية عملية مستوحاة من فصول الكتاب.`,
    level: 'debutant',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['book summary', 'reading', 'learning', 'self improvement', 'active reading']
  },
  {
    id: 'pml-lif-14',
    slash: '/life-declutter-home-minimalism',
    title_fr: 'Désencombreur d’Intérieur & Tri Méthode KonMari',
    title_ar: 'ترتيب وتنظيم المنزل والتخلص من الفوضى بطريقة كونماري KonMari',
    category_id: 'lifestyle',
    category_fr: 'Vie quotidienne et usages universels',
    category_ar: 'الحياة اليومية والاستخدامات الشاملة',
    function_fr: 'Trier radicalement son logement par catégories pour ne garder que ce qui procure de la joie',
    function_ar: 'تنظيم البيت والتخلص من الأشياء الزائدة بروح الامتنان وتحقيق مساحات معيشية هادئة',
    prompt_fr: `Tu es un Consultant en Organisation d'Intérieur Certifié (Méthode KonMari de Marie Kondo).
Guide-moi pour désencombrer mon logement :
- Pièce ou catégorie à trier : [CATEGORIE] (Vêtements, livres, papiers administratifs, objets divers Komono, objets sentimentaux)

Processus d'organisation pas-à-pas :
1. Le rassemblement total au centre de la pièce (prendre conscience du volume réel accumulé).
2. Le critère unique de décision : "Cet objet me met-il en joie ? (Does it spark joy ?)" et la formule de remerciement pour les objets dont on se sépare.
3. Méthode de rangement vertical qui permet de voir 100% de ses affaires d'un coup d'œil sans rien empiler.
4. Les règles pour ne plus jamais réencombrer sa maison à l'avenir (règle 1 objet qui rentre = 1 objet qui sort).`,
    prompt_ar: `بصفتك مستشاراً معتمداً في تنظيم وترتيب المنازل (وفق طريقة كونماري لماري كوندو):
أرشدني للتخلص من الفوضى وإعادة تنظيم وترتيب:
- الفئة المراد فرزها: [الفئة] (الملابس، الكتب، الأوراق والملفات، الأغراض المتنوعة، أو الذكريات)

خطوات الترتيب:
1. جمع كافة الأغراض من هذه الفئة في كومة واحدة وسط الغرفة لإدراك الحجم الحقيقي للتراكم.
2. معيار الاختيار الحاسم: "هل يبعث هذا الغرض البهجة في قلبي؟" مع الامتنان والتخلص من الزائد بالتبرع أو التدوير.
3. طريقة الطي والترتيب الرأسي التي تتيح رؤية جميع المقتنيات في الأدراج بنظرة واحدة دون تكديس.
4. القواعد الذهبية لمنع عودة الفوضى للبيت مستقبلاً (قاعدة: غرض جديد يدخل = غرض قديم يخرج).`,
    level: 'debutant',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['home organization', 'konmari', 'minimalism', 'decluttering', 'lifestyle']
  },
  {
    id: 'pml-lif-15',
    slash: '/life-conversation-icebreaker-social',
    title_fr: 'Maître des Conversations Sociales & Brise-Glace Mémorable',
    title_ar: 'إدارة الحوارات الاجتماعية وفن كسر الجليد مع الغرباء Small Talk Master',
    category_id: 'lifestyle',
    category_fr: 'Vie quotidienne et usages universels',
    category_ar: 'الحياة اليومية والاستخدامات الشاملة',
    function_fr: 'Engager une conversation passionnante lors d’une soirée ou cocktail sans poser les questions banales',
    function_ar: 'بدء محادثات شيقة وعميقة في المناسبات واللقاءات وتجاوز الأسئلة الروتينية المملة',
    prompt_fr: `Tu es un Expert en Intelligence Relationnelle et Communication Interpersonnelle.
Aide-moi à briser la glace avec aisance et charme lors de l'événement suivant :
- Contexte de la rencontre : [CONTEXTE] (Soirée networking, cocktail d'amis, dîner d'affaires, mariage où je ne connais personne)

Boîte à outils relationnelle :
1. Les 3 questions brise-glace ouvertes alternatives aux questions barbantes ("Tu fais quoi dans la vie ?").
2. La technique du miroir et de la reformulation bienveillante pour amener son interlocuteur à se passionner pour l'échange.
3. Comment rebondir avec humour et autodérision sur un blanc ou un silence gênant.
4. L'art de clore une conversation avec grâce et politesse pour aller parler à quelqu'un d'autre sans blesser son interlocuteur.`,
    prompt_ar: `أنت خبير في الذكاء الاجتماعي وفنون التواصل البشري وبناء العلاقات:
ساعدني في بدء حوارات دافئة وجذابة خلال المناسبة التالية:
- سياق اللقاء: [المناسبة] (حفل تعارف، عشاء عمل، لقاء عائلي، أو مؤتمر)

أدوات التواصل الذكي:
1. 3 أسئلة كسر جليد ذكية وبديلة عن الأسئلة المكررة المملة (مثل "ما هو عملك؟").
2. مهارة الاستماع النشط والتقاط الكلمات المفتاحية لجعل الطرف الآخر يتحدث بشغف وتلقائية.
3. التصرف بلباقة وابتسامة عند حدوث لحظات الصمت العفوي دون ارتباك.
4. فن إنهاء المحادثة بلطف وود للانتقال للتعرف على آخرين مع ترك أثر طيب وانطباع لا يُنسى.`,
    level: 'debutant',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['social skills', 'conversation', 'icebreaker', 'networking', 'charisma']
  }
];
