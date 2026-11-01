import { PromptItem } from '../../types/prompt';

export const BATCH_3_PROMPTS: PromptItem[] = [
  // ==========================================
  // CATÉGORIE 11 : PRODUCTIVITÉ (15 prompts)
  // ==========================================
  {
    id: 'pml-pro-01',
    slash: '/pro-time-blocking',
    title_fr: 'Planificateur Time-Blocking & Deep Work',
    title_ar: 'تخطيط الوقت بالكتل الزمنية والتركيز العميق Time-Blocking',
    category_id: 'productivity',
    category_fr: 'Productivité',
    category_ar: 'الإنتاجية وإدارة الوقت',
    function_fr: 'Organiser une semaine de travail idéale en sanctuarisant les plages de haute concentration',
    function_ar: 'جدولة أسبوع العمل بفترات التركيز الذهني غير المنقطع وإنجاز المهام الاستراتيجية',
    prompt_fr: `Tu es un Expert en Productivité et Méthode Deep Work (de Cal Newport).
Organise ma semaine de travail selon la méthode du Time-Blocking :
- Mes 3 priorités stratégiques de la semaine : [PRIORITES]
- Mes réunions et contraintes fixes inamovibles : [REUNIONS]
- Heures de travail quotidiennes souhaitées : [HORAIRES]

Livrables d'organisation :
1. Calendrier hebdomadaire heure par heure découpant chaque journée en blocs dédiés (Deep Work le matin, Shallow Work l'après-midi, Buffer blocks d'imprévus).
2. Protocole strict de déconnexion pour les blocs Deep Work (règles emails, Slack, notifications).
3. Rituel de clôture de journée (Shutdown Ritual) en 10 minutes pour vider l'esprit du travail le soir.`,
    prompt_ar: `بصفتك خبيراً في الإنتاجية والتركيز العميق (وفق كتاب Deep Work لكال نيوبورت):
قم بتنظيم جدول أسبوعي متكامل بنظام الكتل الزمنية (Time-Blocking):
- أهم 3 أولويات استراتيجية لهذا الأسبوع: [الأولويات]
- المواعيد والاجتماعات الثابتة الإلزامية: [المواعيد]
- ساعات العمل اليومية المستهدفة: [الساعات]

المخرجات:
1. جدول أسبوعي مفصل بالساعات يقسم اليوم إلى: فترات التركيز العميق صباحاً، والمهام الروتينية بعد الظهر، وفترات احتياطية للطوارئ.
2. قواعد إغلاق المشتتات والبريد والتطبيقات أثناء فترات التركيز.
3. طقس إنهاء اليوم العملي (Shutdown Ritual) في 10 دقائق لتصفية الذهن وضمان الراحة التامة في المساء.`,
    level: 'debutant',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['time blocking', 'deep work', 'productivity', 'calendar', 'focus']
  },
  {
    id: 'pml-pro-02',
    slash: '/pro-eisenhower-matrix',
    title_fr: 'Trieur Matriciel Eisenhower (Urgent vs Important)',
    title_ar: 'مصفوفة أيزنهاور لفرز الأولويات (العاجل والهام)',
    category_id: 'productivity',
    category_fr: 'Productivité',
    category_ar: 'الإنتاجية وإدارة الوقت',
    function_fr: 'Classer une to-do list surchargée en 4 quadrants pour éliminer la fausse urgence',
    function_ar: 'تصنيف المهام المتراكمة إلى 4 أقسام للتخلص من التوتر والتركيز على ما يصنع فارقاً حقيقياً',
    prompt_fr: `Voici ma liste de tâches en désordre :
[LISTE_TACHES]

Trie impitoyablement ces tâches dans les 4 quadrants d'Eisenhower :
1. Quadrant 1 : Urgent & Important (À faire immédiatement soi-même, crises et échéances critiques).
2. Quadrant 2 : Non Urgent mais Important (À planifier fermement dans l'agenda, stratégie, santé, apprentissage).
3. Quadrant 3 : Urgent mais Non Important (À déléguer, automatiser ou négocier).
4. Quadrant 4 : Ni Urgent ni Important (À éliminer sans remords).
Précise l'action concrète immédiate pour les 3 tâches prioritaires du Quadrant 2.`,
    prompt_ar: `إليك قائمة المهام المتراكمة لدي:
[قائمة_المهام]

قم بفرز هذه المهام بدقة وحزم وفق مصفوفة أيزنهاور:
1. المربع الأول: عاجل ومهم (ينفذ فوراً وبنفسك: طوارئ ومواعيد نهائية وشيكة).
2. المربع الثاني: غير عاجل لكنه مهم (يُجدول بدقة في التقويم: التخطيط، التعلم، الصحة، وتطوير الذات).
3. المربع الثالث: عاجل وغير مهم (يُفوض للآخرين أو يُؤتمت).
4. المربع الرابع: غير عاجل وغير مهم (يُلغى فوراً لتوفير الوقت والطاقة).
مع تحديد الخطوة الأولى لثلاث مهام جوهرية من المربع الثاني.`,
    level: 'debutant',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['eisenhower matrix', 'prioritization', 'todo list', 'time management', 'delegation']
  },
  {
    id: 'pml-pro-03',
    slash: '/pro-gtd-weekly-review',
    title_fr: 'Facilitateur Revue Hebdomadaire GTD (Getting Things Done)',
    title_ar: 'جلسة المراجعة الأسبوعية وفق منهجية إنجاز المهام GTD',
    category_id: 'productivity',
    category_fr: 'Productivité',
    category_ar: 'الإنتاجية وإدارة الوقت',
    function_fr: 'Guider une revue hebdomadaire complète pour reprendre le contrôle total de ses engagements',
    function_ar: 'تنفيذ المراجعة الأسبوعية لتفريغ الذهن وتحديث المشاريع وضبط الأولويات الشاملة',
    prompt_fr: `Tu es un Coach certifié GTD (Getting Things Done de David Allen).
Guide-moi à travers ma Revue Hebdomadaire (Weekly Review) en 3 phases rigoureuses :
- Mes boîtes de réception actuelles : [INBOXES] (emails, notes physiques, captures d'écran, messages)
- Mes projets en cours : [PROJETS]

Déroule le protocole pas-à-pas :
1. Phase 1 : Faire le vide (Get Clear) : Vider chaque boîte de réception à zéro (Inbox Zero), traiter les notes flottantes.
2. Phase 2 : Être à jour (Get Current) : Passer en revue la liste de projets, vérifier que chaque projet a une "Prochaine Action Physique" (Next Action) définie.
3. Phase 3 : Devenir créatif (Get Creative) : Examiner la liste "Un jour / Peut-être", décider des idées à activer ou archiver.
Pose-moi les questions une par une pour vérifier l'avancement.`,
    prompt_ar: `أنت موجه معتمد لمنهجية إنجاز المهام (GTD لديفيد ألين):
قدني خلال جلسة المراجعة الأسبوعية (Weekly Review) في 3 مراحل دقيقة:
- صناديق الوارد الحالية لدي: [صناديق_الوارد] (البريد، الملاحظات العشوائية، الرسائل)
- المشاريع المفتوحة الحالية: [المشاريع]

خطوات المراجعة:
1. المرحلة الأولى: تصفية الصناديق (Get Clear): الوصول إلى الصفر في صندوق الوارد وتنظيم الملاحظات الشاردة.
2. المرحلة الثانية: تحديث الواقع (Get Current): مراجعة قائمة المشاريع والتأكد من تحديد "الخطوة الفيزيائية التالية" لكل مشروع.
3. المرحلة الثالثة: الإبداع واستشراف الفرص (Get Creative): مراجعة قائمة "يوماً ما / ربما" وتفعيل الأفكار الواعدة.
اطرح علي الأسئلة خطوة بخطوة للتحقق من إتمام كل مرحلة.`,
    level: 'intermediaire',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['gtd', 'getting things done', 'weekly review', 'productivity', 'organization']
  },
  {
    id: 'pml-pro-04',
    slash: '/pro-notion-dashboard-spec',
    title_fr: 'Architecte Système Notion PARA & Second Cerveau',
    title_ar: 'بناء نظام نوشن Notion والعقل الثاني بنظام PARA',
    category_id: 'productivity',
    category_fr: 'Productivité',
    category_ar: 'الإنتاجية وإدارة الوقت',
    function_fr: 'Concevoir l’architecture de bases de données relationnelles Notion pour gérer sa vie pro et perso',
    function_ar: 'تصميم هيكل قواعد بيانات Notion المترابطة لإدارة المشاريع والمراجع والمهام',
    prompt_fr: `Tu es un Consultant Certifié Notion et Architecte de Second Cerveau (Building a Second Brain).
Conçois l'architecture de mon espace de travail Notion selon la méthode P.A.R.A. (de Tiago Forte) :
- Activité principale : [ACTIVITE]
- Besoins spécifiques : [BESOINS] (suivi de clients, bibliothèque de lecture, veille tech, finances)

Détaille la structure technique :
1. Définition des 4 piliers : Projets (échéances précises), Domaines (responsabilités continues), Ressources (thématiques d'intérêt), Archives.
2. Schéma des bases de données maîtresses et relations croisées (Relations & Rollups indispensables).
3. Propriétés essentielles de la base "Tâches & Projets" (Status, Priorité, Date, Énergie requise, Relation Projet).
4. Vues de dashboard filtrées pour la page d'accueil quotidienne "Aujourd'hui".`,
    prompt_ar: `أنت مستشار معتمد في نوشن (Notion) وهندسة العقل الثاني (Second Brain لـ Tiago Forte):
صمم المعمارية الكاملة لمساحة عمل Notion وفق نظام P.A.R.A.:
- طبيعة عملي واهتماماتي: [النشاط]
- الاحتياجات الخاصة: [الاحتياجات] (إدارة عملاء، قراءات، مشاريع، مصاريف)

المطلوب:
1. تنظيم الأركان الأربعة: المشاريع (بمواعيد محددة)، مجالات المسؤولية، الموارد المعرفية، والأرشيف.
2. مخطط قواعد البيانات الرئيسية والروابط التبادلية بينها (Relations & Rollups).
3. الخصائص الإلزامية لجدول المهام والمشاريع (الحالة، الأولوية، الطاقة الذهنية المطلوبة، التاريخ).
4. طرق العرض اليومية المصفاة لواجهة لوحة التحكم الرئيسية "Today".`,
    level: 'intermediaire',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['notion', 'para method', 'second brain', 'productivity', 'database']
  },
  {
    id: 'pml-pro-05',
    slash: '/pro-sop-process-builder',
    title_fr: 'Rédacteur de Procédure Opérationnelle Standard (SOP)',
    title_ar: 'كتابة إجراءات التشغيل القياسية ونماذج تفويض المهام SOP',
    category_id: 'productivity',
    category_fr: 'Productivité',
    category_ar: 'الإنتاجية وإدارة الوقت',
    function_fr: 'Documenter un processus d’entreprise récurrent pour qu’un stagiaire ou une IA puisse l’exécuter sans erreur',
    function_ar: 'توثيق خطوات العمل الروتينية بدقة تمكن أي موظف جديد من تنفيذها بأعلى جودة دون سؤال',
    prompt_fr: `Rédige une Procédure Opérationnelle Standard (SOP) professionnelle pour :
- Nom du processus : [PROCESSUS] (ex: Publication d'un épisode de podcast, onboarding d'un nouveau client, clôture comptable mensuelle)
- Outils utilisés : [OUTILS]
- Responsable du rôle : [ROLE]

Structure rigoureuse de la SOP :
1. Objectif du processus et définition de la fin de mission (Definition of Done).
2. Prérequis, accès nécessaires et données requises avant de démarrer.
3. Procédure étape par étape avec captures d'écran suggérées, liens exacts et actions en puces numérotées.
4. Contrôle qualité final (Checklist de vérification avant validation).
5. Arbre de résolution des pannes courantes (Troubleshooting).`,
    prompt_ar: `اكتب دليل إجراءات تشغيل قياسي (SOP) احترافي وشامل لـ:
- اسم العملية أو المهمة: [المهمة] (نشر حلقة بودكاست، تسجيل عميل جديد، الإقفال المالي الشهري)
- البرامج والأدوات: [الأدوات]
- المسمى الوظيفي للمنفذ: [المسمى]

الهيكل النموذجي للإجراء:
1. الهدف من العملية ومعيار اكتمال المهمة بنجاح (Definition of Done).
2. المتطلبات والصلاحيات والبيانات اللازمة قبل البدء.
3. الخطوات التنفيذية المتسلسلة بوضوح ودقة (كل خطوة تبدأ بفعل أمر محدد).
4. قائمة التحقق النهائية وضمان الجودة قبل الاعتماد.
5. دليل معالجة المشكلات الشائعة أثناء التنفيذ.`,
    level: 'intermediaire',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['sop', 'process documentation', 'delegation', 'operations', 'standard operating procedure']
  },
  {
    id: 'pml-pro-06',
    slash: '/pro-atomic-habits-routine',
    title_fr: 'Concepteur d’Habitudes Durables (Méthode Atomic Habits)',
    title_ar: 'بناء العادات اليومية المستدامة وفق كتاب العادات الذرية Atomic Habits',
    category_id: 'productivity',
    category_fr: 'Productivité',
    category_ar: 'الإنتاجية وإدارة الوقت',
    function_fr: 'Créer une routine quotidienne irrésistible en appliquant les 4 lois du changement comportemental',
    function_ar: 'تصميم عادات إيجابية تدوم طويلاً عبر تطبيق القوانين الأربعة لتعديل السلوك',
    prompt_fr: `Tu es un Expert en Psychologie des Habitudes inspiré de James Clear (Atomic Habits).
Aide-moi à instaurer la nouvelle habitude suivante :
- Habitude visée : [HABITUDE] (ex: Faire 30 min de sport chaque matin, lire 20 pages par jour, pratiquer le code)
- Obstacles récurrents actuels : [OBSTACLES] (manque de temps, procrastination, fatigue)

Construis le système complet basé sur les 4 lois :
1. Rendre l'habitude Évidente (Empilement d'habitudes : "Après avoir [habitude actuelle], je vais [nouvelle habitude]", aménagement de l'environnement).
2. Rendre l'habitude Attractive (Regroupement des tentations).
3. Rendre l'habitude Facile (Règle des 2 minutes pour démarrer sans friction).
4. Rendre l'habitude Satisfaisante (Suivi visuel des habitudes et récompense immédiate).`,
    prompt_ar: `أنت خبير في علم نفس تكوين العادات مستنداً إلى منهجية جيمس كلير (العادات الذرية Atomic Habits):
ساعدني في غرس العادة الإيجابية التالية:
- العادة المستهدفة: [العادة] (ممارسة الرياضة صباحاً، القراءة اليومية، البرمجة اليومية)
- العوائق المتكررة الحالية: [العوائق] (التسويف، التعب، ضيق الوقت)

المطلوب تطبيق القوانين الأربعة:
1. اجعلها واضحة: تقنية تراكم العادات ("بعد أن [العادة الحالية]، سأقوم بـ [العادة الجديدة]")، وتهيئة بيئة المكان.
2. اجعلها جذابة: ربط العادة بنشاط مرغوب ومحبب للنفس.
3. اجعلها سهلة: تطبيق قاعدة الدقيقتين للبدء دون تردد أو مقاومة ذهنية.
4. اجعلها مرضية: تعقب العادات بالتوثيق اليومي والمكافأة الفورية المعنوية.`,
    level: 'debutant',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['atomic habits', 'habits', 'james clear', 'psychology', 'routine']
  },
  {
    id: 'pml-pro-07',
    slash: '/pro-email-inbox-zero',
    title_fr: 'Stratège Zéro Email (Inbox Zero Framework)',
    title_ar: 'إدارة وتصفية البريد الإلكتروني بالكامل بنظام Inbox Zero',
    category_id: 'productivity',
    category_fr: 'Productivité',
    category_ar: 'الإنتاجية وإدارة الوقت',
    function_fr: 'Éradiquer les milliers d’emails en attente et maintenir sa boîte de réception à zéro en 15 min/jour',
    function_ar: 'التخلص من تراكم آلاف الرسائل غير المقروءة والحفاظ على صندوق بريد فارغ يومياً',
    prompt_fr: `Tu es un Spécialiste de la Gestion des Flux d'Information.
Aide-moi à vider ma boîte mail et à instaurer le système Inbox Zero :
- Nombre d'emails accumulés : [NOMBRE_EMAILS]
- Type d'emails reçus quotidiennement : [TYPES_EMAILS] (newsletters, notifications système, demandes clients urgentes, messages internes)

Mets en place la méthode des 4D pour chaque email entrant :
1. Delete (Supprimer ou désinscrire en masse via filtres automatiques).
2. Delegate (Transférer au bon interlocuteur avec consigne claire).
3. Do (Exécuter immédiatement si cela prend moins de 2 minutes).
4. Defer (Reporter dans un dossier @Action ou @En-Attente avec date de traitement planifiée).
Fournis les 3 filtres et règles automatiques indispensables à configurer sur Gmail ou Outlook.`,
    prompt_ar: `أنت خبير في إدارة تدفق المعلومات والبريد الإلكتروني:
ساعدني في تصفية صندوق البريد وتطبيق نظام Inbox Zero:
- عدد الرسائل المتراكمة: [العدد]
- أنواع الرسائل اليومية: [الأنواع] (نشرات، إشعارات تلقائية، طلبات عملاء، رسائل إدارية)

تطبيق قاعدة الإجراءات الأربعة (4D Framework):
1. الحذف (Delete): الإلغاء الشامل للاشتراكات غير المفيدة واستخدام الفلاتر التلقائية.
2. التفويض (Delegate): توجيه الرسالة للمسؤول المختص بتكليف واضح.
3. الإنجاز الفوري (Do): الرد الفوري إذا كانت المعالجة تستغرق أقل من دقيقتين.
4. التأجيل المنظم (Defer): نقل الرسالة لمجلد @إجراءات أو @بانتظار_الرد مع وقت محدد.
مع اقتراح أهم 3 قواعد تصفية تلقائية لإعدادها في Gmail أو Outlook.`,
    level: 'debutant',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['inbox zero', 'email management', 'gmail', 'productivity', 'organization']
  },
  {
    id: 'pml-pro-08',
    slash: '/pro-meeting-cost-calc',
    title_fr: 'Calculateur du Coût Réel des Réunions & Alternative Asynchrone',
    title_ar: 'حساب التكلفة المالية للاجتماعات والبدائل غير المتزامنة Async',
    category_id: 'productivity',
    category_fr: 'Productivité',
    category_ar: 'الإنتاجية وإدارة الوقت',
    function_fr: 'Calculer le coût financier d’une réunion et proposer un mémo asynchrone pour l’annuler',
    function_ar: 'حساب هدر ميزانية الرواتب في الاجتماعات الطويلة واستبدالها بنصوص وتقارير ذكية',
    prompt_fr: `Voici une réunion récurrente que nous soupçonnons d'être inutile :
- Nombre et salaires moyens des participants : [PARTICIPANTS]
- Fréquence et durée : [DUREE_FREQ] (ex: 8 personnes, 1h par semaine)
- Ordre du jour habituel : [ORDRE_JOUR]

Livrables d'assainissement :
1. Calcul du coût financier annuel direct de cette réunion (Temps × Taux horaire chargé moyen).
2. Démonstration du coût d'opportunité caché (ce que ces collaborateurs auraient pu produire à la place).
3. Le modèle de mémo asynchrone (sur Slack, Notion ou Loom vidéo de 3 min) qui remplace avantageusement cette réunion.
4. La règle d'or pour décider formellement si une future réunion est justifiée ou doit être refusée.`,
    prompt_ar: `إليك اجتماعاً دورياً متكرراً في العمل نشك في جدواه:
- عدد الحضور ومتوسط أجورهم: [الحضور]
- المدة والتكرار: [المدة] (مثال: 8 مدراء، ساعة أسبوعياً)
- جدول الأعمال المعتاد: [جدول_الأعمال]

المطلوب لترشيد الوقت والمال:
1. حساب التكلفة المالية المباشرة سنوياً لهذا الاجتماع بناءً على ساعات العمل.
2. حساب تكلفة الفرصة البديلة الضائعة التي كان يمكن للموظفين إنجازها.
3. نموذج التقرير غير المتزامن (عبر Slack أو Notion أو فيديو Loom في 3 دقائق) كبديل متفوق للاجتماع.
4. القاعدة الذهبية لحسم قرار قبول الاجتماعات أو الاعتذار عنها مستقبلاً.`,
    level: 'intermediaire',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['asynchronous work', 'meetings', 'productivity', 'cost calculation', 'remote work']
  },
  {
    id: 'pml-pro-09',
    slash: '/pro-energy-chronotype',
    title_fr: 'Optimiseur d’Énergie selon les Chronotypes Biologiques',
    title_ar: 'توزيع المهام وفق الإيقاع البيولوجي ومستويات الطاقة Chronotype',
    category_id: 'productivity',
    category_fr: 'Productivité',
    category_ar: 'الإنتاجية وإدارة الوقت',
    function_fr: 'Aligner ses tâches les plus exigeantes avec ses pics naturels d’énergie biologique',
    function_ar: 'مزامنة المهام العقلية والجسدية مع الساعة البيولوجية لتحقيق أقصى إنجاز بأقل مجهود',
    prompt_fr: `Tu es un Spécialiste de la Chronobiologie et de la Gestion de l'Énergie Humaine.
Adapte ma journée de travail selon mon profil biologique :
- Mon chronotype : [CHRONOTYPE] (Lion/Matin matinal, Ours/Intermédiaire classique, Loup/Soir tardif)
- Mes obligations professionnelles : [OBLIGATIONS]

Conçois le planning énergétique parfait :
1. Pic de concentration cognitive maximale : à quel moment caler le travail stratégique et créatif.
2. Creux circadien post-prandial : comment l'occuper sans culpabiliser (marche, tâches administratives légères, micro-sieste de 15 min).
3. Rebond d'énergie de fin d'après-midi : opportunité d'entraînement physique ou d'échanges d'équipe.
4. Protocole d'exposition à la lumière et de temporisation de la caféine (attendre 90 min après le réveil pour éviter le crash de 14h).`,
    prompt_ar: `بصفتك باحثاً في البيولوجيا الزمنية وإدارة طاقة الإنسان:
قم بتهيئة يوم العمل وفق ساعتي البيولوجية:
- نمطي اليومي (Chronotype): [النمط] (صباحي باكر، متوسط، أو مسائي)
- المهام المطلوبة مني: [المهام]

الجدول الزمني لإدارة الطاقة:
1. فترات الذروة الذهنية القصوى: التوقيت البيولوجي الأنسب للتفكير الاستراتيجي والإنتاج الإبداعي.
2. فترات هبوط الطاقة الطبيعية بعد الظهيرة: كيفية استغلالها بذكاء (مهام روتينية، مشي، غفوة سريعة 15 دقيقة).
3. فترة انتعاش الطاقة المسائية: توظيفها في الرياضة أو المهام التعاونية.
4. بروتوكول التعرض لضوء الشمس وتوقيت شرب القهوة (تأخيرها 90 دقيقة بعد الاستيقاظ لمنع هبوط الطاقة).`,
    level: 'debutant',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['chronotype', 'energy management', 'circadian rhythm', 'productivity', 'biohacking']
  },
  {
    id: 'pml-pro-10',
    slash: '/pro-delegate-matrix',
    title_fr: 'Matrice de Délégation & Niveaux d’Autonomie',
    title_ar: 'مصفوفة التفويض الفعال ومستويات الاستقلالية Delegation Matrix',
    category_id: 'productivity',
    category_fr: 'Productivité',
    category_ar: 'الإنتاجية وإدارة الوقت',
    function_fr: 'Transférer une responsabilité à un collaborateur avec le bon niveau de contrôle',
    function_ar: 'تفويض المهام للموظفين بدرجات استقلالية متدرجة تضمن الجودة وتبني الثقة',
    prompt_fr: `Agis comme un Coach de Dirigeants et Leader Émancipateur.
Je souhaite déléguer la mission suivante à un membre de mon équipe :
- Mission à déléguer : [MISSION]
- Collaborateur pressenti et son niveau de séniorité : [COLLABORATEUR]

Définis le cadre de délégation selon les 5 Niveaux de Délégation :
1. Choix du niveau approprié (Niv 1 : Fais ce que je te dis ; Niv 2 : Enquête et propose ; Niv 3 : Propose et attends mon feu vert ; Niv 4 : Agis et informe-moi ; Niv 5 : Autonomie totale).
2. La feuille de cadrage écrite : Objectif chiffré, budget alloué, ressources disponibles et limites de pouvoir.
3. Les jalons de contrôle programmés (sans faire de micro-management étouffant).
4. Le droit à l'erreur et l'analyse post-mission en cas d'imprévu.`,
    prompt_ar: `بصفتك مدرباً للقيادات التنفيذية:
أرغب في تفويض المهمة التالية لأحد أفراد فريقي:
- المهمة المراد تفويضها: [المهمة]
- الموظف المرشح وخبرته: [الموظف]

تحديد إطار التفويض وفق المستويات الخمسة:
1. اختيار المستوى الأنسب (المستوى 1: نفذ ما أطلبه تماماً؛ 2: ابحث واقترح؛ 3: اقترح وانتظر موافقتي؛ 4: تصرف وأبلغني؛ 5: استقلالية تامة).
2. وثيقة التفويض الواضحة: الهدف بالأرقام، الميزانية، حدود الصلاحيات، ومصادر الدعم.
3. نقاط التفتيش والمتابعة المجدولة (لتفادي الإدارة التفصيلية الخانقة Micromanagement).
4. التعامل الإيجابي مع الأخطاء غير المقصودة كفرصة للتعلم والتطوير.`,
    level: 'intermediaire',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['delegation', 'leadership', 'management', 'team empowerment', 'autonomy']
  },
  {
    id: 'pml-pro-11',
    slash: '/pro-procrastination-breaker',
    title_fr: 'Désamorceur de Procrastination & Friction Zéro',
    title_ar: 'تفكيك التسويف والمماطلة وتقليل مقاومة البدء Frictionless Start',
    category_id: 'productivity',
    category_fr: 'Productivité',
    category_ar: 'الإنتاجية وإدارة الوقت',
    function_fr: 'Surmonter le blocage psychologique devant une tâche intimidante et passer à l’action en 5 minutes',
    function_ar: 'كسر حاجز الخوف والتردد أمام المهام الصعبة وبدء التنفيذ الفعلي في دقائق',
    prompt_fr: `Je procrastine depuis des jours sur la tâche suivante :
- Tâche redoutée ou repoussée : [TACHE]
- Ce qui me bloque inconsciemment : [BLOCAGE] (Peur d'échouer, perfectionnisme excessif, tâche floue ou gigantesque)

Applique le protocole psychologique de déblocage immédiat :
1. Découpage en "Micro-Action Ridiculement Petite" ne demandant aucun effort de volonté (moins de 2 minutes pour démarrer).
2. Neutralisation du perfectionnisme : autorisation explicite de rédiger un premier jet médiocre ("Shitty First Draft").
3. La règle des 5 secondes (de Mel Robbins) : compte à rebours 5-4-3-2-1 et passage à l'action physique.
4. La promesse de pouvoir s'arrêter après 10 minutes d'effort (effet Zeigarnik qui incitera naturellement à continuer).`,
    prompt_ar: `أعاني من التسويف والمماطلة منذ أيام في إنجاز المهمة التالية:
- المهمة المؤجلة: [المهمة]
- العائق النفسي الباطن: [العائق] (الخوف من عدم الكمال، ضخامة المهمة، غموض البداية)

بروتوكول فك الحصار النفسي والانطلاق الفوري:
1. تجزئة المهمة إلى "خطوة أولى متناهية الصغر" لا تتطلب أي مجهود إرادي (أقل من دقيقتين للبدء).
2. التخلص من فخ المثالية: منح النفس إذناً كاملاً بكتابة مسودة أولية متواضعة قابلة للتعديل لاحقاً.
3. قاعدة الثواني الخمس (لميل روبنز): العد التنازلي 5-4-3-2-1 والتحرك الفيزيائي الفوري للبدء.
4. إعطاء النفس خيار التوقف بعد 10 دقائق فقط (توظيف تأثير زايغارنيك النفسي الذي يدفع للاستمرار).`,
    level: 'debutant',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['procrastination', 'motivation', 'mindset', 'action taking', 'psychology']
  },
  {
    id: 'pml-pro-12',
    slash: '/pro-travel-packing-checklist',
    title_fr: 'Organisateur de Voyage d’Affaires & Valise Zéro-Oubli',
    title_ar: 'تخطيط رحلات العمل وحقائب السفر الذكية Zéro Oubli',
    category_id: 'productivity',
    category_fr: 'Productivité',
    category_ar: 'الإنتاجية وإدارة الوقت',
    function_fr: 'Préparer un déplacement professionnel sans stress avec checklist catégorisée',
    function_ar: 'تنظيم رحلات العمل والمؤتمرات بقائمة تجهيزات شاملة تمنع نسيان أي غرض مهم',
    prompt_fr: `Conçois l'organisation complète de mon prochain déplacement professionnel :
- Destination et durée : [DESTINATION]
- Raison du voyage : [MOTIF] (Conférence, réunions clients, salons)
- Climat et contraintes bagage : [CONTRAINTES] (Bagage cabine uniquement, climat froid/chaud)

Livrables d'organisation :
1. Checklist bagage compartimentée (Documents & Finances, Électronique & Adaptateurs universels, Vêtements pro polyvalents infroissables, Trousse de toilette conforme sécurité aéroport).
2. Feuille de route chronologique J-1 (Check-in vol, téléchargement cartes hors-ligne, copies cloud des passeports).
3. Organisation des correspondances et déplacements sur place (VTC, transports locaux, contacts d'urgence).`,
    prompt_ar: `قم بالتنظيم اللوجستي المتكامل لرحلة العمل القادمة:
- الوجهة ومدة الإقامة: [الوجهة]
- الغرض من السفر: [الغرض] (مؤتمر، مفاوضات مع عملاء، معرض دولي)
- حالة الطقس وحجم الأمتعة المسموح: [الطقس_الأمتعة] (حقيبة يد فقط، طقس متقلب)

قائمة التجهيز المنظمة:
1. قائمة الأمتعة المصنفة (الوثائق الرسمية والبطاقات، الأجهزة والشواحن والمحولات الدولية، ملابس العمل المقاومة للتجعد، مستلزمات العناية المسموحة بالطيران).
2. خطة اليوم السابق للسفر (إتمام تسجيل الصعود للطائرة، تنزيل الخرائط دون إنترنت، حفظ نسخ الجوازات سحابياً).
3. جدول التنقلات والمواصلات في بلد الوصول وأرقام الطوارئ وسفارة بلدك.`,
    level: 'debutant',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['travel', 'business trip', 'packing checklist', 'organization', 'logistics']
  },
  {
    id: 'pml-pro-13',
    slash: '/pro-digital-declutter',
    title_fr: 'Nettoyeur de Vie Numérique (Digital Declutter)',
    title_ar: 'التنظيف الرقمي والتخلص من فوضى الملفات والإشعارات',
    category_id: 'productivity',
    category_fr: 'Productivité',
    category_ar: 'الإنتاجية وإدارة الوقت',
    function_fr: 'Désencombrer son smartphone, son ordinateur et son cloud pour retrouver la sérénité mentale',
    function_ar: 'إعادة ترتيب الملفات والهواتف وحذف الفوضى الإلكترونية لاستعادة الهدوء والتركيز',
    prompt_fr: `Tu es un Consultant en Minimalisme Numérique (dans l'esprit de Marie Kondo appliqué au digital).
Établis mon plan d'assainissement numérique sur 1 week-end pour :
- Appareils concernés : [APPAREILS] (iPhone/Android, PC/Mac, Google Drive/Dropbox)
- Symptômes : Bureau d'ordinateur saturé d'icônes, 50 000 photos en vrac, notifications incessantes

Protocole de désencombrement en 4 étapes :
1. Smartphone : Règle de l'écran d'accueil zen (uniquement les 8 outils du quotidien, suppression des réseaux sociaux ou relégation dans un dossier sans notifications).
2. Ordinateur : Nettoyage du dossier Téléchargements et adoption d'une arborescence à 3 niveaux maximum.
3. Cloud : Suppression des doublons volumineux et archivage des anciens projets.
4. Hygiène numérique continue : Règles hebdomadaires pour maintenir cet état de clarté durablement.`,
    prompt_ar: `بصفتك مستشاراً في التبسيط الرقمي (Digital Minimalism):
صمم خطة شاملة في عطلة نهاية الأسبوع للتخلص من الفوضى الرقمية:
- الأجهزة المستهدفة: [الأجهزة] (الهاتف الذكي، الحاسوب، التخزين السحابي)
- المظاهر الحالية: امتلاء سطح المكتب بالملفات العشوائية، آلاف الصور غير المنظمة، إشعارات لا تتوقف

مراحل التنظيف الرقمي:
1. الهاتف الذكي: شاشة رئيسية هادئة تضم فقط 8 تطبيقات أساسية يومية، وإلغاء إشعارات تطبيقات التواصل أو حذفها.
2. الحاسوب: تفريغ مجلد التنزيلات نهائياً وتطبيق شجرة مجلدات مبسطة لا تزيد عن 3 مستويات.
3. التخزين السحابي: حذف الملفات المكررة والفيديوهات الثقيلة وأرشفة المشاريع القديمة.
4. العادات الوقائية المستمرة: روتين أسبوعي لمدة 10 دقائق للحفاظ على النظام الرقمي دائماً.`,
    level: 'debutant',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['digital declutter', 'minimalism', 'organization', 'focus', 'mental clarity']
  },
  {
    id: 'pml-pro-14',
    slash: '/pro-smart-goals-builder',
    title_fr: 'Formulateur d’Objectifs SMART & Plan de Victoire',
    title_ar: 'صياغة الأهداف الذكية SMART وخطة التنفيذ الميدانية',
    category_id: 'productivity',
    category_fr: 'Productivité',
    category_ar: 'الإنتاجية وإدارة الوقت',
    function_fr: 'Transformer un vœu vague en un objectif SMART ultra-précis avec indicateurs de suivi',
    function_ar: 'تحويل الأماني العامة إلى أهداف محددة وقابلة للقياس والتحقيق بجدول زمني صارم',
    prompt_fr: `Voici un objectif que je souhaite atteindre mais qui est encore trop flou :
- Objectif brut : "[OBJECTIF_BRUT]" (ex: "Je veux faire plus de chiffre d'affaires", "Je veux me remettre au sport")
- Échéance souhaitée : [ECHEANCE]

Transforme cet objectif selon le filtre rigoureux SMART :
1. Spécifique : Qui, quoi, où, pourquoi précisément.
2. Mesurable : Quelle métrique numérique incontestable définira la réussite ?
3. Atteignable : Les ressources et compétences nécessaires pour le rendre réaliste.
4. Réaliste / Pertinent : En quoi cet objectif sert ma vision de vie ou d'entreprise à long terme.
5. Temporellement défini : Date butoir exacte et 3 jalons intermédiaires (Milestones).
Fournis la première action à réaliser dans les 24 prochaines heures pour lancer la dynamique.`,
    prompt_ar: `إليك هدفاً أرغب في تحقيقه لكنه ما زال عاماً وغامضاً:
- صياغة الهدف المبدئية: "[الهدف]" (مثال: "أريد زيادة دخلي المالي"، "أريد تحسين صحتي")
- المهلة الزمنية التقريبية: [المهلة]

قم بإعادة صياغة الهدف وفق معايير SMART الصارمة:
1. محدد (Specific): ماذا، من، وأين بالتفصيل الدقيق دون عموميات.
2. قابل للقياس (Measurable): الرقم أو المؤشر الرقمي الذي يثبت تحقيق الهدف دون شك.
3. قابل للتحقيق (Achievable): المهارات والموارد الواقعية المتاحة لتنفيذه.
4. ذو صلة (Relevant): كيف يخدم هذا الهدف رؤيتك الكبرى للحياة أو العمل.
5. محدد زمنياً (Time-bound): اليوم والساعة المحددة للإنجاز مع 3 محطات تقييم وسيطة.
مع تحديد أول خطوة تنفيذية فورية يجب إنجازها خلال الـ 24 ساعة القادمة.`,
    level: 'debutant',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['smart goals', 'goal setting', 'planning', 'success', 'motivation']
  },
  {
    id: 'pml-pro-15',
    slash: '/pro-daily-standup-prep',
    title_fr: 'Préparateur de Daily Standup Agile (Mêlée Quotidienne)',
    title_ar: 'إعداد تقرير الاجتماع الصباحي الرشيق Daily Standup Scrum',
    category_id: 'productivity',
    category_fr: 'Productivité',
    category_ar: 'الإنتاجية وإدارة الوقت',
    function_fr: 'Formuler son point quotidien Agile en 60 secondes chrono pour aligner son équipe',
    function_ar: 'صياغة المداخلة الصباحية اليومية في دقيقة واحدة بإبراز الإنجاز والعوائق بوضوح',
    prompt_fr: `Tu es un Scrum Master Senior.
Prépare ma prise de parole pour le Daily Standup de mon équipe :
- Ce que j'ai fait hier : [HIER]
- Ce que je prévois de faire aujourd'hui : [AUJOURDHUI]
- Les blocages ou dépendances que je rencontre : [BLOCAGES]

Formule mon intervention selon les standards de l'art Agile :
1. Prise de parole concise de moins de 60 secondes (orientée résultats et valeur, pas simple inventaire de micro-tâches).
2. Clarification du point de blocage (Impediment) pour demander l'aide exacte du bon coéquipier sans monopoliser la parole.
3. Alignement avec l'Objectif de Sprint (Sprint Goal).`,
    prompt_ar: `بصفتك سكروم ماستر أول (Scrum Master):
قم بإعداد مداخلتي للاجتماع الصباحي اليومي السريع (Daily Standup):
- ما أنجزته بالأمس: [الأمس]
- ما أخطط لإنجازه اليوم: [اليوم]
- العوائق أو التبعيات التي تعطلني: [العوائق]

صياغة المداخلة وفق معايير الأجايل (Agile):
1. إيجاز بليغ لا يتجاوز 60 ثانية (التركيز على القيمة المحققة وليس سرد التفاصيل الصغيرة).
2. تحديد العائق (Blocker) بدقة لطلب الدعم من الزميل المختص عقب الاجتماع مباشرة.
3. ربط المهام المنجزة بالهدف الأكبر لسباق العمل الحالي (Sprint Goal).`,
    level: 'debutant',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['agile', 'scrum', 'daily standup', 'team communication', 'sprint']
  },

  // ==========================================
  // CATÉGORIE 12 : FINANCE ET COMPTABILITÉ (15 prompts)
  // ==========================================
  {
    id: 'pml-fin-01',
    slash: '/fin-dcf-valuation',
    title_fr: 'Modélisateur Valorisation DCF (Discounted Cash Flow)',
    title_ar: 'تقييم الشركات بالتدفقات النقدية المخصومة DCF Model',
    category_id: 'finance',
    category_fr: 'Finance et comptabilité',
    category_ar: 'المالية والمحاسبة الاستثمارية',
    function_fr: 'Calculer la valeur intrinsèque d’une entreprise sur la base de ses flux futurs actualisés',
    function_ar: 'حساب القيمة العادلة للشركة وأسهمها بناءً على توقعات التدفقات النقدية المستقبلية',
    prompt_fr: `Tu es un Analyste M&A et Banquier d'Investissement.
Construis le modèle de valorisation par actualisation des flux de trésorerie (DCF) pour :
- Entreprise et secteur : [ENTREPRISE]
- Prévisions de Free Cash Flow (FCF) sur 5 ans : [FLUX_TRESORERIE]
- Coût Moyen Pondéré du Capital (WACC) : [WACC]
- Taux de croissance perpétuelle (g) : [TAUX_CROISSANCE]

Livrables d'analyse financière :
1. Calcul de la Valeur Actuelle des flux prévisionnels sur 5 ans.
2. Calcul de la Valeur Terminale (Formule de Gordon Shapiro : TV = FCF5 × (1 + g) / (WACC - g)).
3. Calcul de la Valeur d'Entreprise (Enterprise Value) et passage à la Valeur des Fonds Propres (Equity Value).
4. Table de sensibilité croisant WACC (+/- 1%) et taux de croissance terminale (+/- 0.5%).`,
    prompt_ar: `أنت محلل مالي ومصرفي استثماري خبير:
قم ببناء نموذج تقييم الشركة بأسلوب التدفقات النقدية المخصومة (DCF):
- الشركة والقطاع: [الشركة]
- التدفقات النقدية الحرة المتوقعة لـ 5 سنوات: [التدفقات]
- المتوسط المرجح لتكلفة رأس المال (WACC): [WACC]
- معدل النمو الدائم المستمر (g): [النمو]

المخرجات المالية:
1. حساب القيمة الحالية للتدفقات النقدية الحرة للسنوات الخمس.
2. حساب القيمة الدائمة النهائية (Terminal Value عبر معادلة Gordon-Shapiro).
3. استخراج قيمة المنشأة الإجمالية (Enterprise Value) وقيمة حقوق الملكية الصافية (Equity Value).
4. جدول تحليل الحساسية بتغيير معدل الخصم WACC ونسبة النمو الدائم.`,
    level: 'expert',
    ai_compatibility: ['Claude', 'ChatGPT', 'Gemini'],
    tags: ['dcf', 'valuation', 'financial modeling', 'wacc', 'investment banking']
  },
  {
    id: 'pml-fin-02',
    slash: '/fin-financial-ratios-audit',
    title_fr: 'Auditeur de Ratios Financiers & Santé du Bilan',
    title_ar: 'تحليل النسب المالية وتشخيص السلامة الائتمانية للمنشأة',
    category_id: 'finance',
    category_fr: 'Finance et comptabilité',
    category_ar: 'المالية والمحاسبة الاستثمارية',
    function_fr: 'Évaluer la solvabilité, liquidité, rentabilité et structure financière d’une société',
    function_ar: 'قراءة الميزانية وقائمة الدخل واستخراج نسب السيولة والربحية والرافعة المالية',
    prompt_fr: `Tu es un Directeur Financier (CFO) et Analyste Crédit Bancaire.
Analyse la santé financière de l'entreprise suivante à partir de ses comptes :
[DONNEES_BILAN_ET_COMPTE_RESULTAT]

Calcule et interprète méthodiquement :
1. Ratios de liquidité : Liquidité générale (Current Ratio) et liquidité réduite (Quick Ratio).
2. Ratios de solvabilité et d'endettement : Gearing (Dette nette / Capitaux propres) et Couverture des intérêts (EBITDA / Charges financières).
3. Ratios de rentabilité : Marge brute, Marge d'EBITDA, ROE (Return on Equity) et ROCE.
4. Synthèse globale et diagnostic des signaux d'alerte ou forces d'emprunt face aux banques.`,
    prompt_ar: `بصفتك مديراً مالياً (CFO) وخبير ائتمان مصرفي:
حلل الموقف المالي للمنشأة انطلاقاً من قوائمها المالية:
[بيانات_الميزانية_والدخل]

حساب وتفسير المؤشرات الأساسية:
1. نسب السيولة: نسبة التداول العامة (Current Ratio) ونسبة السيولة السريعة (Quick Ratio).
2. نسب الملاءة والرافعة المالية: نسبة المديونية لحقوق الملكية، ومعدل تغطية الفوائد المصرفية.
3. مؤشرات الربحية: هامش الربح الإجمالي، هامش الأرباح التشغيلية EBITDA، والعائد على حقوق المساهمين (ROE).
4. التشخيص الائتماني الشامل ومدى قدرة الشركة على الاقتراض ومواجهة الأزمات.`,
    level: 'intermediaire',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['financial ratios', 'liquidity', 'roe', 'ebitda', 'balance sheet']
  },
  {
    id: 'pml-fin-03',
    slash: '/fin-bfr-working-capital',
    title_fr: 'Optimiseur du BFR (Besoin en Fonds de Roulement)',
    title_ar: 'تحسين رأس المال العامل وإدارة دورة النقدية BFR',
    category_id: 'finance',
    category_fr: 'Finance et comptabilité',
    category_ar: 'المالية والمحاسبة الاستثمارية',
    function_fr: 'Libérer du cash bloqué en réduisant les délais de paiement clients et le stock',
    function_ar: 'تحرير السيولة المحتجزة وتقليص فترة تحصيل الديون ودوران المخزون',
    prompt_fr: `Notre trésorerie est sous tension malgré une activité rentable.
Voici nos métriques d'exploitation actuelles :
- Chiffre d'affaires annuel : [CA]
- Délais moyens clients (DSO - Days Sales Outstanding) : [DSO] jours
- Délais moyens fournisseurs (DPO - Days Payable Outstanding) : [DPO] jours
- Rotation moyenne des stocks (DIO - Days Inventory Outstanding) : [DIO] jours

Fournis le plan d'action d'optimisation du cash :
1. Calcul du Cycle de Conversion du Cash (CCC = DIO + DSO - DPO) en jours et impact en trésorerie (€).
2. 3 actions concrètes pour réduire le DSO de 15 jours sans fâcher les clients.
3. Stratégie de renégociation fournisseur pour optimiser le DPO.
4. Politique de déstockage des stocks dormants pour injecter des liquidités immédiates.`,
    prompt_ar: `تعاني الشركة من شح في السيولة النقدية رغم تحقيق مبيعات جيدة:
إليك مؤشرات دورة التشغيل الحالية:
- المبيعات السنوية: [المبيعات]
- متوسط فترة تحصيل مستحقات العملاء (DSO): [DSO] يوماً
- متوسط فترة سداد الموردين (DPO): [DPO] يوماً
- متوسط دوران المخزون في المستودعات (DIO): [DIO] يوماً

المطلوب لخطة إنعاش السيولة:
1. حساب دورة تحويل النقد (Cash Conversion Cycle = DIO + DSO - DPO) وحجم النقد المحتجز.
2. 3 إجراءات عملية لتقليص فترة التحصيل 15 يوماً دون خسارة العملاء.
3. خطة التفاوض مع الموردين لمد فترات السداد بما يحفظ حقوق الجميع.
4. تصفية المخزون الراكد لتحويله إلى سيولة نقدية عاجلة في الحساب البنكي.`,
    level: 'intermediaire',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['working capital', 'bfr', 'cash flow', 'dso', 'treasury']
  },
  {
    id: 'pml-fin-04',
    slash: '/fin-startup-cap-table',
    title_fr: 'Modélisateur de Table de Capitalisation (Cap Table Dilution)',
    title_ar: 'هندسة جدول توزيع الحصص والتخفيف للمؤسسين Cap Table Dilution',
    category_id: 'finance',
    category_fr: 'Finance et comptabilité',
    category_ar: 'المالية والمحاسبة الاستثمارية',
    function_fr: 'Simuler la dilution des fondateurs et la création d’un pool d’actions BSPCE/ESOP lors d’un tour de table',
    function_ar: 'حساب نسب ملكية المؤسسين وتأثير دخول المستثمرين وتخصيص أسهم الموظفين',
    prompt_fr: `Tu es un Avocat d'Affaires Spécialiste du Capital-Risque.
Modélise l'impact d'une levée de fonds sur notre table de capitalisation (Cap Table) :
- Répartition actuelle des actions entre fondateurs : [REPARTITION_ACTUELLE]
- Montant levé (Cash in) : [MONTANT_LEVE]
- Valorisation pré-money : [PRE_MONEY]
- Création demandée par les investisseurs d'un pool d'options salariés (ESOP / BSPCE) : [POOL_ESOP] % post-money

Calcule précisément :
1. La valorisation post-money et le pourcentage de détention des nouveaux investisseurs.
2. La dilution exacte des fondateurs avec création du pool avant ou après l'entrée des investisseurs.
3. Le tableau récapitulatif complet : Actionnaire | Actions détenues | % de capital | Valeur théorique des parts.
4. Les clauses de protection indispensables (Droit de préemption, Tag-Along, Drag-Along).`,
    prompt_ar: `بصفتك مستشاراً قانونياً ومالياً للشركات الناشئة والاستثمار الجريء:
قم بنمذجة أثر الجولة الاستثمارية على جدول الحصص (Cap Table):
- توزيع الحصص الحالي بين المؤسسين: [التوزيع_الحالي]
- مبلغ الاستثمار الجديد: [المبلغ]
- التقييم المالي قبل الاستثمار (Pre-money Valuation): [التقييم]
- نسبة خيارات أسهم الموظفين المشترطة (ESOP Pool): [نسبة_ESOP] %

المطلوب حسابه بدقة:
1. التقييم المالي بعد الاستثمار (Post-money) وحصة المستثمرين الجدد.
2. نسبة التخفيف (Dilution) التي ستطال المؤسسين بعد إنشاء صندوق أسهم الموظفين.
3. جدول الملكية النهائي الكامل: [المساهم] | [عدد الأسهم] | [نسبة الملكية %] | [القيمة السوقية للحصة].
4. أهم بنود اتفاقية المساهمين لحماية المؤسسين (حق الشفعة، وسحب الشركاء).`,
    level: 'expert',
    ai_compatibility: ['Claude', 'ChatGPT', 'Gemini'],
    tags: ['cap table', 'dilution', 'fundraising', 'esop', 'venture capital']
  },
  {
    id: 'pml-fin-05',
    slash: '/fin-capex-roi-payback',
    title_fr: 'Calculateur ROI, VAN et TRI pour Investissement (Capex)',
    title_ar: 'دراسة الجدوى المالية للاستثمارات الرأسمالية (NPV وIRR وROI)',
    category_id: 'finance',
    category_fr: 'Finance et comptabilité',
    category_ar: 'المالية والمحاسبة الاستثمارية',
    function_fr: 'Arbitrer la rentabilité d’un achat de machine ou projet informatique majeur',
    function_ar: 'تقييم الجدوى الاقتصادية لشراء أصول أو معدات جديدة وصنع قرار الاستثمار',
    prompt_fr: `Tu es un Contrôleur de Gestion des Investissements.
Évalue la viabilité financière du projet d'investissement suivant :
- Coût initial de l'investissement (Capex à l'année 0) : [COUT_INITIAL]
- Économies annuelles ou gains nets générés sur 5 ans : [GAINS_ANNUELS]
- Valeur résiduelle estimée en fin de projet : [VALEUR_RESIDUELLE]
- Taux d'actualisation exigé par l'entreprise : [TAUX_ACTUALISATION]

Calcule et fournis l'arbitrage :
1. Le Délai de Récupération du Capital (Payback Period simple et actualisé).
2. La Valeur Actuelle Nette (VAN / NPV).
3. Le Taux de Rentabilité Interne (TRI / IRR).
4. Recommandation argumentée : Le projet crée-t-il de la valeur pour les actionnaires ?`,
    prompt_ar: `بصفتك مسؤول دراسات الجدوى والرقابة المالية على الاستثمارات:
قم بتقييم الجدوى الاقتصادية لمشروع الاستثمار الرأسمالي التالي:
- التكلفة الاستثمارية الأولية (Capex في السنة صفر): [التكلفة]
- العوائد الصافية السنوية المتوقعة لمدة 5 سنوات: [العوائد]
- القيمة المتبقية التخريدية للأصل في نهاية المدة: [القيمة_التخريدية]
- معدل الخصم والعائد المطلوب للمنشأة: [معدل_الخصم]

المخرجات المالية:
1. فترة استرداد رأس المال (Payback Period) العادية والمخصومة.
2. صافي القيمة الحالية للمشروع (NPV).
3. معدل العائد الداخلي على الاستثمار (IRR).
4. التوصية الاستثمارية النهائية المبررة: هل يضيف المشروع قيمة مالية حقيقية للشركة؟`,
    level: 'expert',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['roi', 'npv', 'irr', 'capex', 'capital budgeting', 'investment']
  },
  {
    id: 'pml-fin-06',
    slash: '/fin-budget-variance-analysis',
    title_fr: 'Analyste des Écarts Budgétaires (Budget vs Actual)',
    title_ar: 'تحليل الانحرافات والفروقات بين الميزانية المقدرة والواقع الفعلي',
    category_id: 'finance',
    category_fr: 'Finance et comptabilité',
    category_ar: 'المالية والمحاسبة الاستثمارية',
    function_fr: 'Décomposer les écarts de chiffre d’affaires en effet volume et effet prix',
    function_ar: 'تفكيك أسباب تباين الإيرادات والمصروفات بين المخطط والمنفذ لمعالجة العجز',
    prompt_fr: `Voici les données budgétaires et réelles de clôture trimestrielle :
- Chiffre d'affaires budgété vs réalisé : [CA_BUDGET_REEL]
- Volumes vendus prévus vs réels : [VOLUMES]
- Charges d'exploitation prévues vs réelles : [CHARGES]

Réalise l'analyse des écarts financière :
1. Calcul de l'écart global sur chiffre d'affaires et décomposition en :
   - Effet Prix (Prix réel - Prix budgété) × Volume réel.
   - Effet Volume (Volume réel - Volume budgété) × Prix budgété.
2. Identification des 2 postes de charges ayant le plus lourdement dérapé.
3. Diagnostic des causes sous-jacentes (Inflation fournisseurs, baisse de productivité, remises commerciales excessives).
4. Plan de redressement budgétaire pour le trimestre suivant.`,
    prompt_ar: `إليك أرقام الموازنة التقديرية مقارنة بالأرقام الفعلية للربع المنتهي:
- المبيعات المخططة مقابل المبيعات الفعلية: [المبيعات]
- حجم الوحدات المباعة المقدرة مقابل الفعلية: [الكميات]
- المصروفات التشغيلية المقدرة مقابل الفعلية: [المصروفات]

المطلوب في تحليل الانحرافات:
1. حساب الانحراف الإجمالي للمبيعات وتفكيكه رياضياً إلى:
   - أثر تغير السعر (السعر الفعلي - السعر المقدر) × الكمية الفعلية.
   - أثر تغير الحجم والكمية (الكمية الفعلية - الكمية المقدرة) × السعر المقدر.
2. تحديد أكبر بندين من بنود المصروفات شهدا تجاوزاً للميزانية.
3. تشخيص الأسباب الجوهرية (تضخم تكلفة المواد، خصومات بيعية عشوائية، هدر تشغيلي).
4. خطة تصويب وتعديل المسار المالي للربع القادم.`,
    level: 'intermediaire',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['variance analysis', 'budget', 'controlling', 'volume effect', 'financial analysis']
  },
  {
    id: 'pml-fin-07',
    slash: '/fin-saas-metrics-unit-econ',
    title_fr: 'Analyste Métriques SaaS & Unité Économique (CAC / LTV)',
    title_ar: 'تحليل مؤشرات واقتصاديات شركات الاشتراكات البرمجية SaaS Metrics',
    category_id: 'finance',
    category_fr: 'Finance et comptabilité',
    category_ar: 'المالية والمحاسبة الاستثمارية',
    function_fr: 'Calculer la LTV, le CAC, le Magic Number et la règle des 40% pour un logiciel SaaS',
    function_ar: 'حساب تكلفة اكتساب العميل وقيمته الدائمة ومعدلات النمو والاستبقاء للبرمجيات',
    prompt_fr: `Tu es un CFO Spécialiste des Métriques SaaS B2B.
Analyse les performances économiques de notre logiciel :
- Revenu Récurrent Mensuel (MRR) et croissance mensuelle : [MRR]
- Coût total des ventes & marketing (S&M) mensuel : [COUT_SM]
- Nouveaux clients signés par mois : [NOUVEAUX_CLIENTS]
- Taux de désabonnement mensuel (Churn rate) : [CHURN] %
- Marge brute (Gross Margin) : [MARGE_BRUTE] %

Calcule et commente les ratios clés :
1. Coût d'Acquisition Client (CAC) et Valeur Vie Client (LTV = ARPU × Marge Brute / Churn).
2. Ratio LTV / CAC (Est-il supérieur au standard d'excellence de 3:1 ?).
3. Période de remboursement du CAC (CAC Payback period en mois).
4. Règle des 40% (Taux de croissance annuel % + Marge de profit libre %).`,
    prompt_ar: `بصفتك مديراً مالياً متخصصاً في شركات البرمجيات كخدمة (SaaS):
قم بتحليل اقتصاديات الوحدة لبرنامجنا السحابي:
- الإيراد الشهري المتكرر (MRR) ومعدل نموه: [MRR]
- تكاليف التسويق والمبيعات الشهرية: [التكاليف]
- عدد العملاء الجدد شهرياً: [العملاء]
- نسبة الإلغاء الشهري للاشتراكات (Churn Rate): [نسبة_الإلغاء] %
- هامش الربح الإجمالي: [الهامش] %

المطلوب حسابه بدقة:
1. تكلفة اكتساب العميل (CAC) والقيمة الدائمة للعميل (LTV).
2. النسبة بين القيمة الدائمة وتكلفة الاكتساب (LTV/CAC وهل تفوق معيار 3:1).
3. فترة استرداد تكلفة الاكتساب بالشهور (CAC Payback Period).
4. قاعدة الـ 40% (Rule of 40: نسبة النمو السنوي + هامش الربح).`,
    level: 'expert',
    ai_compatibility: ['Claude', 'ChatGPT', 'Gemini'],
    tags: ['saas metrics', 'ltv', 'cac', 'unit economics', 'mrr', 'churn']
  },
  {
    id: 'pml-fin-08',
    slash: '/fin-break-even-point',
    title_fr: 'Calculateur du Seuil de Rentabilité (Point Mort)',
    title_ar: 'حساب نقطة التعادل المالي وتغطية التكاليف Break-Even Point',
    category_id: 'finance',
    category_fr: 'Finance et comptabilité',
    category_ar: 'المالية والمحاسبة الاستثمارية',
    function_fr: 'Déterminer le chiffre d’affaires et le volume exact à vendre pour commencer à faire des bénéfices',
    function_ar: 'تحديد حجم المبيعات المطلوب بالوحدات والقيمة النقدية للبدء في تحقيق الأرباح',
    prompt_fr: `Calcule le seuil de rentabilité et le point mort pour le projet suivant :
- Charges fixes annuelles (Loyers, salaires, assurances, abonnements) : [CHARGES_FIXES]
- Prix de vente unitaire HT : [PRIX_VENTE]
- Coût variable unitaire de production / achat : [COUT_VARIABLE]

Fournis l'analyse détaillée :
1. Marge sur Coût Variable unitaire (MCV) et Taux de Marge sur Coût Variable (TMCV %).
2. Seuil de Rentabilité en chiffre d'affaires (€) = Charges Fixes / TMCV.
3. Seuil de Rentabilité en volume (Nombre exact d'unités à vendre pour couvrir les frais).
4. Point Mort en jours (Date calendaire précise dans l'année où l'entreprise commence à gagner de l'argent).
5. Marge de sécurité et Indice de sécurité en cas de baisse imprévue des ventes.`,
    prompt_ar: `قم بحساب نقطة التعادل المالي بدقة للمشروع التالي:
- التكاليف الثابتة السنوية (إيجارات، رواتب، تراخيص): [التكاليف_الثابتة]
- سعر بيع الوحدة: [السعر]
- التكلفة المتغيرة للوحدة (تكلفة الشراء أو الإنتاج): [التكلفة_المتغيرة]

التحليل المالي المطلوب:
1. هامش المساهمة للوحدة ونسبة هامش المساهمة (Contribution Margin Ratio).
2. نقطة التعادل بالقيمة النقدية الإجمالية للمبيعات.
3. نقطة التعادل بعدد الوحدات الواجب بيعها لتغطية كافة المصاريف.
4. تاريخ بلوغ نقطة التعادل على مدار أشهر السنة (تحديد اليوم الذي تبدأ بعده الأرباح الصافية).
5. هامش الأمان (Margin of Safety) لبيان نسبة التراجع في المبيعات التي يمكن للمشروع تحملها دون خسارة.`,
    level: 'debutant',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['break even', 'point mort', 'fixed costs', 'profitability', 'accounting']
  },
  {
    id: 'pml-fin-09',
    slash: '/fin-vat-compliance-tax',
    title_fr: 'Consultant TVA & Déductibilité Fiscale',
    title_ar: 'إدارة ضريبة القيمة المضافة VAT والامتثال الضريبي',
    category_id: 'finance',
    category_fr: 'Finance et comptabilité',
    category_ar: 'المالية والمحاسبة الاستثمارية',
    function_fr: 'Vérifier la conformité de facturation et l’éligibilité à la déduction de la TVA',
    function_ar: 'مراجعة شروط الفواتير الضريبية وتحديد المصروفات القابلة لاسترداد الضريبة',
    prompt_fr: `Tu es un Expert-Comptable et Fiscaliste.
Vérifie le traitement fiscal et de TVA pour l'opération suivante :
- Nature de la transaction : [TRANSACTION] (Prestation de services intracommunautaire, vente export, achat de matériel)
- Pays du vendeur et de l'acheteur : [PAYS]
- Statut B2B ou B2C : [STATUT]

Détaille les règles fiscales :
1. Régime de TVA applicable (Autoliquidation, franchise en base, taux réduit ou standard).
2. Mentions légales obligatoires à faire figurer sur la facture pour éviter tout rejet fiscal.
3. Conditions de déductibilité de la TVA collectée / déductible sur cette dépense.
4. Déclarations annexes obligatoires (ex: Déclaration Européenne de Services DES ou douane).`,
    prompt_ar: `بصفتك مستشاراً ومحاسباً قانونياً متخصصاً في الضرائب:
قم بتدقيق المعاملة الضريبية وضريبة القيمة المضافة (VAT) لـ:
- طبيعة المعاملة: [المعاملة] (خدمات رقمية دولية، تصدير سلع، شراء أصول)
- دولة البائع والمشتري: [الدول]
- صفة الطرفين: بين شركات (B2B) أو مع أفراد (B2C)

المطلوب:
1. النظام الضريبي المنطبق (آلية الاحتساب العكسي Reverse Charge، أو الإعفاء، أو النسبة الأساسية).
2. البيانات الإلزامية التي يجب تضمينها في الفاتورة الضريبية لضمان قبولها لدى مصلحة الضرائب.
3. شروط خصم واسترداد ضريبة المدخلات لهذه العملية.
4. الإقرارات الضريبية الدورية الواجب رفعها لإثبات المعاملة.`,
    level: 'intermediaire',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['vat', 'tax compliance', 'invoicing', 'accounting', 'fiscal']
  },
  {
    id: 'pml-fin-10',
    slash: '/fin-credit-score-repair',
    title_fr: 'Conseiller Reconstitution de Capacité d’Emprunt',
    title_ar: 'إعادة بناء الجدارة الائتمانية والقدرة على الاقتراض المالي',
    category_id: 'finance',
    category_fr: 'Finance et comptabilité',
    category_ar: 'المالية والمحاسبة الاستثمارية',
    function_fr: 'Assainir son dossier bancaire pour obtenir un crédit immobilier ou professionnel',
    function_ar: 'تنظيم الحسابات المصرفية والتخلص من التعثرات لنيل ثقة البنوك والتمويل',
    prompt_fr: `Nous préparons une demande de financement bancaire importante :
- Montant sollicité et objet : [FINANCEMENT] (Prêt immobilier, crédit d'investissement entreprise)
- Situation bancaire actuelle : [SITUATION] (Incidents de paiement passés, découvert régulier, taux d'endettement limite)

Établis le plan de redressement de profil emprunteur sur 3 à 6 mois :
1. Les 3 règles strictes de tenue de compte pour présenter des relevés impeccables aux analystes risques.
2. Stratégie de restructuration ou remboursement anticipé des crédits à la consommation pour faire chuter le taux d'endettement sous 33%.
3. Constitution de l'épargne résiduelle de précaution (Rest-à-vivre et apport personnel).
4. Le dossier argumentaire pour expliquer les incidents passés et prouver la solidité retrouvée.`,
    prompt_ar: `نستعد لتقديم طلب تمويل وقرض مصرفي كبير:
- قيمة التمويل والغرض منه: [التمويل] (تمويل عقاري، قرض توسع تجاري)
- الحالة المصرفية الحالية: [الحالة] (التزامات سابقة، استخدام مفرط للبطاقات، نسبة استقطاع مرتفعة)

خطة تحسين الملف الائتماني خلال 3 إلى 6 أشهر:
1. القواعد الثلاث لضبط كشوفات الحسابات البنكية لتقديم ملف نظيف للجان الائتمان والمخاطر.
2. استراتيجية جدولة أو سداد القروض الاستهلاكية المرتفعة الفائدة لتقليص نسبة الاستقطاع من الدخل.
3. توفير الدفعة الأولى ومبلغ السيولة المتبقي للطوارئ لإثبات الملاءة.
4. صياغة الخطاب التوضيحي البنكي لتبرير أي تعثرات سابقة وإثبات انتظام التدفقات الحالية.`,
    level: 'debutant',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['credit score', 'loan', 'banking', 'debt management', 'personal finance']
  },
  {
    id: 'pml-fin-11',
    slash: '/fin-portfolio-asset-alloc',
    title_fr: 'Stratège Allocation d’Actifs & Gestion de Patrimoine',
    title_ar: 'توزيع الأصول الاستثمارية وإدارة المحافظ المالية Asset Allocation',
    category_id: 'finance',
    category_fr: 'Finance et comptabilité',
    category_ar: 'المالية والمحاسبة الاستثمارية',
    function_fr: 'Bâtir un portefeuille d’investissement diversifié et résilient aux chocs macroéconomiques',
    function_ar: 'بناء محفظة أصول متوازنة تقاوم التضخم وتقلبات الأسواق العالمية',
    prompt_fr: `Tu es un Conseiller en Gestion de Patrimoine Certifié et Gérant de Portefeuille.
Conçois une allocation d'actifs stratégique pour :
- Profil d'investisseur : [PROFIL] (Prudent, Équilibré, Dynamique / Agressif)
- Horizon de placement : [HORIZON] (ex: 15 ans)
- Objectif : [OBJECTIF] (Rente, valorisation du capital, protection contre l'inflation)

Livrables d'allocation :
1. Répartition en pourcentage entre grandes classes d'actifs (Actions mondiales ETF, Obligations souveraines/entreprises, Immobilier SCPI/REIT, Matières premières/Or, Liquidités).
2. Justification théorique (Théorie Moderne du Portefeuille de Markowitz et modèle All-Weather).
3. Méthode de rééquilibrage périodique (Rebalancing annuel ou par seuil de dérive de 5%).
4. Optimisation de l'enveloppe fiscale (PEA, Assurance-vie, Compte Titres Ordinaire).`,
    prompt_ar: `أنت مدير محافظ استثمارية ومستشار معتمد في إدارة الثروات:
قم بتصميم محفظة استثمارية متوازنة لـ:
- ملف المستثمر وتحمل المخاطر: [الملف] (متحفظ، متوازن، أو جريء)
- الأفق الزمني للاستثمار: [المدة] (مثال: 15 عاماً)
- الهدف الأساسي: [الهدف] (توليد دخل دوري، نمو رأس المال، الحماية من التضخم)

المخرجات الاستثمارية:
1. النسب المئوية الدقيقة لتوزيع الأصول (صناديق المؤشرات العالمية ETF، الصكوك والسندات، العقار، المعادن والذهب، والسيولة النقدية).
2. التبرير العلمي بالاستناد إلى نظرية المحفظة الحديثة ونموذج كل الفصول (All-Weather Portfolio).
3. آلية إعادة التوازن الدوري (Rebalancing) عند انحراف النسب عن المستهدف.
4. استراتيجية تقليل الأثر الضريبي على الأرباح والتوزيعات.`,
    level: 'intermediaire',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['asset allocation', 'investing', 'portfolio management', 'etf', 'wealth']
  },
  {
    id: 'pml-fin-12',
    slash: '/fin-cost-accounting-activity',
    title_fr: 'Contrôleur de Gestion & Comptabilité Analytique ABC',
    title_ar: 'المحاسبة التحليلية والتكلفة على أساس الأنشطة ABC Costing',
    category_id: 'finance',
    category_fr: 'Finance et comptabilité',
    category_ar: 'المالية والمحاسبة الاستثمارية',
    function_fr: 'Calculer le coût de revient réel d’un produit en affectant les charges indirectes',
    function_ar: 'تحديد تكلفة الإنتاج الحقيقية وتوزيع المصاريف غير المباشرة بدقة لمعرفة المنتجات الخاسرة',
    prompt_fr: `Tu es un Spécialiste de la Comptabilité Analytique de Gestion.
Mets en place la méthode des coûts par activité (Activity-Based Costing - ABC) pour :
- Entreprise et produits fabriqués : [ENTREPRISE_PRODUITS]
- Charges directes identifiées : [CHARGES_DIRECTES]
- Charges indirectes globales à répartir : [CHARGES_INDIRECTES] (ex: Support IT, loyer d'usine, R&D, service achats)

Structure de la méthode ABC :
1. Identification des grands processus et activités de l'entreprise.
2. Définition des inducteurs de coûts (Cost Drivers : ex: nombre de commandes, heures machine, nombre de livraisons).
3. Calcul du coût unitaire de chaque inducteur.
4. Réaffectation aux différents produits et révélation des subventionnements croisés (produits qui semblaient rentables et qui détruisent en réalité de la valeur).`,
    prompt_ar: `بصفتك خبيراً في المحاسبة التحليلية وإدارة التكاليف:
طبق منهجية التكلفة على أساس الأنشطة (Activity-Based Costing - ABC) لـ:
- المنتجات أو الخدمات المنتجة: [المنتجات]
- التكاليف المباشرة المعروفة: [التكاليف_المباشرة]
- المصاريف العامة غير المباشرة: [المصاريف_غير_المباشرة] (تقنية المعلومات، إيجار المصانع، إدارة المشتريات)

خطوات نموذج ABC:
1. حصر وتحديد الأنشطة والعمليات الوسيطة في المنشأة.
2. تحديد موجهات التكلفة المناسبة لكل نشاط (Cost Drivers: ساعات التشغيل، عدد أوامر الشراء، عدد الشحنات).
3. حساب معدل تحميل تكلفة كل موجه.
4. توزيع التكاليف على المنتجات وكشف المنتجات التي كانت تبدو رابحة ظاهرياً بينما تبتلع الموارد الحقيقية.`,
    level: 'expert',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['abc costing', 'management accounting', 'cost allocation', 'profitability', 'controlling']
  },
  {
    id: 'pml-fin-13',
    slash: '/fin-audit-payroll-social',
    title_fr: 'Auditeur de Paie & Charges Sociales',
    title_ar: 'تدقيق مسيرات الرواتب والالتزامات التأمينية والعمالية Payroll Audit',
    category_id: 'finance',
    category_fr: 'Finance et comptabilité',
    category_ar: 'المالية والمحاسبة الاستثمارية',
    function_fr: 'Vérifier la conformité des bulletins de salaire et optimiser les exonérations sociales légales',
    function_ar: 'فحص مسيرات الأجور والاشتراكات التأمينية لتفادي الغرامات واقتناص الإعفاءات النظامية',
    prompt_fr: `Tu es un Expert en Droit Social et Audit de la Paie.
Audite la structure de paie pour l'entreprise suivante :
- Effectif et secteur : [EFFECTIF_SECTEUR]
- Composantes de rémunération : [REMUNERATIONS] (Fixe, primes d'objectifs, avantages en nature, heures supplémentaires)

Points de contrôle rigoureux :
1. Vérification de l'assiette des cotisations sociales et plafonds légaux.
2. Évaluation des dispositifs d'exonération applicables (ex: réductions générales de cotisations, heures supplémentaires exonérées, primes de partage de la valeur).
3. Traitement fiscal et social des avantages en nature (Véhicule de fonction, repas, matériel informatique).
4. Identification des risques de redressement lors d'un contrôle de l'administration sociale (URSSAF / Sécurité Sociale).`,
    prompt_ar: `بصفتك مدققاً متخصصاً في تشريعات العمل والأجور والتأمينات الاجتماعية:
قم بتدقيق هيكل الرواتب للمنشأة التالية:
- عدد الموظفين والقطاع: [البيانات]
- بنود الأجور الممنوحة: [البنود] (الراتب الأساسي، البدلات، المكافآت، العمل الإضافي، المنافع العينية)

محاور الفحص والتدقيق:
1. سلامة احتساب وعاء الاشتراكات التأمينية والحدود النظامية للأجور.
2. استغلال الإعفاءات والحوافز الحكومية المعتمدة لدعم التوظيف وتخفيض الأعباء.
3. المعالجة القانونية والضريبية للسيارات والمزايا العينية المقدمة للموظفين.
4. كشف المخالفات التي قد تترتب عليها غرامات وتأخيرات في الفحص التفتيشي العمالي.`,
    level: 'intermediaire',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['payroll', 'social security', 'hr audit', 'compliance', 'labor law']
  },
  {
    id: 'pml-fin-14',
    slash: '/fin-foreign-exchange-hedging',
    title_fr: 'Stratège Couverture du Risque de Change (Forex Hedging)',
    title_ar: 'إدارة مخاطر أسعار الصرف وتقلبات العملات الأجنبية Forex Hedging',
    category_id: 'finance',
    category_fr: 'Finance et comptabilité',
    category_ar: 'المالية والمحاسبة الاستثمارية',
    function_fr: 'Protéger les marges d’une entreprise importatrice ou exportatrice contre la volatilité des devises',
    function_ar: 'حماية أرباح صفقات الاستيراد والتصدير من الخسائر الناتجة عن هبوط وصعود العملات',
    prompt_fr: `Tu es Trésorier de Groupe International et Spécialiste du Marché des Changes.
Nous devons sécuriser une transaction internationale sensible aux fluctuations de devises :
- Montant et devise de la transaction : [TRANSACTION] (ex: Achat de 500 000 USD payable dans 6 mois par une entreprise en zone Euro)
- Cours spot actuel et taux forward : [COURS]

Élabore la stratégie de couverture de change :
1. Analyse du risque de change de transaction (perte financière en cas d'appréciation de la devise d'achat).
2. Comparatif des instruments de couverture :
   - Contrat à terme ferme (Forward).
   - Option d'achat de devises (Call Option) avec paiement d'une prime pour garder l'opportunité d'un gain.
3. Recommandation chiffrée de la solution optimale selon l'aversion au risque de l'entreprise.
4. Traitement comptable de la couverture (Comptabilité de couverture IFRS 9 / US GAAP).`,
    prompt_ar: `بصفتك مدير إدارة الخزينة الدولية وخبير أسواق الصرف الأجنبي:
نحتاج لتحصين صفقة تجارية كبرى ضد تقلبات أسعار الصرف:
- قيمة وعملة الصفقة: [الصفقة] (استيراد بـ 500 ألف دولار تستحق السداد بعد 6 أشهر)
- السعر الفوري الحالي وسعر العقود الآجلة: [الأسعار]

خطة التحوط المالي (Hedging Strategy):
1. قياس حجم الخسارة المحتملة في حال تحرك سعر الصرف ضد مصلحة المنشأة.
2. المفاضلة بين أدوات التحوط المالي:
   - العقود الآجلة الملزمة (Forward Contracts) لتثبيت السعر النهائي.
   - خيارات العملات (Currency Options) مع دفع علاوة للاستفادة من أي تحسن في السعر.
3. التوصية بالأداة المثالية المتوافقة مع سياسة إدارة المخاطر المعتمدة.
4. المعالجة المحاسبية للتحوط وفق المعايير الدولية IFRS 9.`,
    level: 'expert',
    ai_compatibility: ['Claude', 'ChatGPT', 'Gemini'],
    tags: ['forex', 'hedging', 'treasury', 'derivatives', 'international finance']
  },
  {
    id: 'pml-fin-15',
    slash: '/fin-personal-budget-zero-based',
    title_fr: 'Coach Budget Personnel à Base Zéro (Zero-Based Budgeting)',
    title_ar: 'إدارة الميزانية الشخصية الصفرية وقاعدة 50/30/20 Zero-Based Budget',
    category_id: 'finance',
    category_fr: 'Finance et comptabilité',
    category_ar: 'المالية والمحاسبة الاستثمارية',
    function_fr: 'Assigner chaque euro gagné à un rôle précis pour épargner sans se priver',
    function_ar: 'تخصيص كل قرش من الدخل لوظيفة محددة لتحقيق الادخار والتخلص التام من الديون',
    prompt_fr: `Tu es un Conseiller Financier Personnel d'élite (dans l'esprit de YNAB et Dave Ramsey).
Construis mon budget mensuel à base zéro à partir de mes finances :
- Revenu net mensuel disponible : [REVENU_NET]
- Dépenses incompressibles (Loyer, factures, crédits) : [DEPENSES_FIXES]
- Objectif d'épargne ou dette à rembourser en priorité : [OBJECTIF]

Structure du budget à base zéro :
1. Application de la règle 50/30/20 adaptée (50% Besoins vitaux, 30% Plaisirs conscients, 20% Épargne/Dette).
2. Chaque euro a une mission : Équilibre strict (Revenu - Toutes les allocations = 0).
3. Méthode de la "Boule de neige" (Debt Snowball) pour liquider les dettes si applicable.
4. Création du fonds de secours d'urgence (3 à 6 mois de dépenses courantes sur livret garanti).`,
    prompt_ar: `أنت مستشار مالي شخصي ومدرب ميزانية أسرية محترف:
قم ببناء ميزانيتي الشهرية وفق أسلوب الميزانية الصفرية (Zero-Based Budget):
- صافي الدخل الشهري المتاح: [الدخل]
- المصاريف الثابتة الحتمية (السكن، الفواتير، الأقساط): [المصاريف]
- أهداف الادخار أو سداد الديون ذات الأولوية: [الهدف]

خطة الميزانية الصفرية:
1. تطبيق قاعدة التوزيع المتوازن (50% للاحتياجات الأساسية، 30% للرغبات الحياتية، 20% للادخار وسداد الديون).
2. قاعدة كل قرش له وظيفة محددة (الدخل - مجموع المخصصات = صفر تماماً).
3. استراتيجية "كرة الثلج" لتصفية الديون بالترتيب النفسي المحفز.
4. تأسيس صندوق الطوارئ الآمن (تغطية مصاريف 3 إلى 6 أشهر في حساب منفصل).`,
    level: 'debutant',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['personal finance', 'zero based budget', 'budgeting', 'saving', 'debt free']
  },

  // ==========================================
  // CATÉGORIE 13 : AUTOMOBILE ET MÉCANIQUE (15 prompts)
  // ==========================================
  {
    id: 'pml-aut-01',
    slash: '/auto-obd2-diagnostic',
    title_fr: 'Diagnostiqueur Codes Défauts Moteur (OBD-II / DTC)',
    title_ar: 'تشخيص أعطال محركات السيارات وقراءة أكواد OBD-II',
    category_id: 'automotive',
    category_fr: 'Automobile et mécanique',
    category_ar: 'السيارات والميكانيكا والتشخيص',
    function_fr: 'Interpréter un code défaut OBD-II (ex: P0300, P0420) et guider la recherche de panne',
    function_ar: 'تفسير كود فحص الكمبيوتر وأعراضه وتحديد القطعة التالفة قبل الذهاب للورشة',
    prompt_fr: `Tu es un Maître Technicien Diagnostic Automobile certifié.
Voici le code défaut relevé à la valise de diagnostic :
- Code OBD-II : [CODE_OBD2] (ex: P0171 Mélange trop pauvre, P0301 Raté d'allumage cylindre 1)
- Marque, modèle, année et motorisation du véhicule : [VEHICULE]
- Symptômes ressentis au volant : [SYMPTOMES] (broutement, perte de puissance, fumée)

Fournis la méthode de diagnostic professionnel :
1. Explication claire de ce que signifie techniquement le code et les conditions d'activation par l'ECU.
2. Les 3 causes les plus fréquentes par ordre de probabilité (de la plus simple/moins chère à la plus grave).
3. Les tests au multimètre ou paramètres en direct (Live Data) à observer pour confirmer sans changer des pièces au hasard.
4. Les risques pour le moteur ou le filtre à particules / catalyseur en cas de négligence.`,
    prompt_ar: `أنت فني وخبير تشخيص سيارات معتمد دولياً (Master Automotive Technician):
إليك كود العطل المستخرج من جهاز الفحص (OBD-II):
- كود العطل: [كود_العطل] (مثال: P0300، P0420، P0171)
- نوع السيارة والموديل وسنة الصنع والمحرك: [السيارة]
- الأعراض الملحوظة أثناء القيادة: [الأعراض] (تفتفة، ضعف عزم، دخان عادم)

خطوات الفحص الهندسي الدقيق:
1. شرح دلالة الكود وشروط تسجيله في كمبيوتر السيارة (ECU).
2. أهم 3 أسباب محتملة مرتبة بالأولوية (من الأبسط والأقل تكلفة إلى الأكثر تعقيداً).
3. الفحوصات اليدوية واختبارات الحساسات الحية (Live Data) للتأكد قبل تغيير أي قطعة عشوائياً.
4. العواقب الميكانيكية على المحرك أو دبة التلوث والكتالايزر في حال إهمال الإصلاح.`,
    level: 'intermediaire',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['obd2', 'dtc', 'mechanic', 'car diagnostics', 'engine failure']
  },
  {
    id: 'pml-aut-02',
    slash: '/auto-ev-battery-health',
    title_fr: 'Expert Véhicules Électriques & Santé Batterie (SoH)',
    title_ar: 'صيانة السيارات الكهربائية وفحص صحة البطارية SoH',
    category_id: 'automotive',
    category_fr: 'Automobile et mécanique',
    category_ar: 'السيارات والميكانيكا والتشخيص',
    function_fr: 'Analyser l’état de dégradation d’une batterie lithium-ion et optimiser son autonomie',
    function_ar: 'قياس كفاءة بطاريات السيارات الكهربائية وإطالة عمرها الافتراضي',
    prompt_fr: `Tu es un Ingénieur Spécialiste des Véhicules Électriques et Systèmes Haute Tension (BMS).
Analyse l'état de la batterie et de la motorisation électrique suivante :
- Modèle de VE et kilométrage : [VEHICULE]
- Capacité nominale et autonomie actuelle constatée : [AUTONOMIE]
- Habitudes de charge : [CHARGE] (Superchargeur DC quotidien, borne domestique 7kW, 100% systématique)

Livrables d'expertise :
1. Évaluation de l'État de Santé (SoH - State of Health) estimé et comparaison avec la dégradation normale du modèle.
2. Protocole de recalibrage du BMS (Battery Management System) pour fiabiliser la jauge de pourcentage.
3. Recommandations de gestion thermique et de plage de charge idéale (ex: règle des 20-80% pour minimiser le stress dendritique).
4. Diagnostic des éléments auxiliaires (Pompe à chaleur, préconditionnement batterie, liquide de refroidissement diélectrique).`,
    prompt_ar: `بصفتك مهندس أنظمة السيارات الكهربائية وإدارة البطاريات (BMS):
حلل كفاءة وصحة المنظومة الكهربائية التالية:
- طراز السيارة الكهربائية والمسافة المقطوعة: [السيارة]
- سعة البطارية والمدى الفعلي الحالي: [المدى]
- نمط الشحن المعتاد: [الشحن] (شحن فائق السرعة DC، شاحن منزلي، الشحن دائماً لـ 100%)

المطلوب:
1. تقدير نسبة صحة البطارية (State of Health - SoH) ومقارنتها بمعدل التآكل الطبيعي للموديل.
2. خطوات إعادة معايرة نظام إدارة البطارية (BMS Calibration) لدقة قراءة العداد.
3. التوصيات المثالية للشحن (قاعدة 20-80% لتفادي الإجهاد الحراري للخلايا).
4. فحص دورة التبريد الحراري ومضخة التدفئة وكفاءة استهلاك الطاقة في الشتاء.`,
    level: 'expert',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['electric vehicles', 'battery health', 'ev', 'bms', 'lithium-ion']
  },
  {
    id: 'pml-aut-03',
    slash: '/auto-maintenance-schedule',
    title_fr: 'Élaborateur de Carnet d’Entretien Préventif Véhicule',
    title_ar: 'جدولة الصيانة الوقائية الدورية للمركبات بحسب الكيلومترات',
    category_id: 'automotive',
    category_fr: 'Automobile et mécanique',
    category_ar: 'السيارات والميكانيكا والتشخيص',
    function_fr: 'Construire le plan de révision complet pour emmener un véhicule au-delà de 300 000 km',
    function_ar: 'إعداد جدول صيانة وقائي يحافظ على المحرك وناقل الحركة حتى مئات آلاف الكيلومترات',
    prompt_fr: `Établis le carnet d'entretien préventif sur-mesure pour :
- Véhicule : [VEHICULE] (Marque, modèle, année, motorisation Essence / Diesel / Hybride)
- Kilométrage actuel : [KILOMETRAGE]
- Usage prédominant : [USAGE] (Urbain petits trajets, autoroute longue distance, conditions sévères poussière/chaleur)

Structure du plan d'entretien périodique :
1. Échéances tous les 10 000 / 15 000 km (Vidange huile moteur avec viscosité et normes constructeur exactes, filtres huile/air/habitacle).
2. Échéances tous les 60 000 km (Bougies, liquide de frein hygroscopique, vidange boîte de vitesses mécanique ou automatique ATF).
3. Grandes opérations à anticiper (Kit courroie de distribution + pompe à eau ou chaîne, amortisseurs, disques de freins).
4. Points de contrôle visuel mensuels que le propriétaire peut faire lui-même en 5 minutes.`,
    prompt_ar: `صمم جدول الصيانة الوقائية المتكامل للسيارة:
- نوع السيارة وسنة الصنع ونوع الوقود: [السيارة]
- قراءة العداد الحالية: [العداد]
- طبيعة الاستخدام: [الاستخدام] (مشاوير قصيرة داخل المدينة، خطوط سريعة، أجواء حارة وشاقة)

جدول الصيانة المتدرج:
1. صيانة كل 10 إلى 15 ألف كم (تغيير زيت المحرك باللزوجة المعتمدة ومعايير الصانع، فلاتر الزيت والهواء والمكيف).
2. صيانة الـ 60 ألف كم (البواجي، سائل الفرامل، تغيير زيت ناقل الحركة الأوتوماتيكي ATF مع الفلتر).
3. الصيانات الكبرى المرتقبة (سير التايمن ومضخة الماء، المساعدات، وأقمشة وهوبات الفرامل).
4. الفحوصات الذاتية الشهرية السريعة التي يجريها السائق بنفسه في 5 دقائق لسلامة المحرك.`,
    level: 'debutant',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['car maintenance', 'preventive maintenance', 'oil change', 'mechanic', 'auto']
  },
  {
    id: 'pml-aut-04',
    slash: '/auto-gearbox-troubleshoot',
    title_fr: 'Diagnostiqueur Boîtes de Vitesses (Automatique & Manuelle)',
    title_ar: 'تشخيص أعطال ناقل الحركة (القير الأوتوماتيكي والعادي)',
    category_id: 'automotive',
    category_fr: 'Automobile et mécanique',
    category_ar: 'السيارات والميكانيكا والتشخيص',
    function_fr: 'Identifier l’origine d’un à-coup, patinage ou refus de passage de rapport',
    function_ar: 'اكتشاف أسباب تأخر تعشيق القير أو النتعة والاهتزاز أثناء التبديل',
    prompt_fr: `Tu es un Spécialiste des Transmissions Automobiles (Boîtes manuelles, BVA à convertisseur, double embrayage DSG/DCT, CVT).
Diagnostique le problème de transmission suivant :
- Type de boîte : [TYPE_BOITE]
- Véhicule : [VEHICULE]
- Symptôme précis : [SYMPTOME] (ex: À-coups violents entre la 2e et la 3e, patinage en côte, marche arrière qui refuse d'enclencher, bruit de sifflement)

Livrables d'expertise :
1. Différenciation entre problème hydraulique (corps de vannes encrassé, solénoïdes défectueux, niveau d'huile ATF bas), mécanique (disques d'embrayage usés, pignon, synchro) et électronique (capteur de vitesse, mécatronique).
2. Procédure de vérification du niveau et de l'état de l'huile (couleur rouge claire vs marron brûlé avec limaille).
3. Test de réinitialisation logicielle et réapprentissage des points de léchage d'embrayage.
4. Estimation de la complexité et urgence de réparation pour éviter la casse totale de la boîte.`,
    prompt_ar: `أنت خبير هندسي متخصص في نواقل الحركة الأوتوماتيكية والعادية (CVT, DSG/DCT, Torque Converter):
قم بتشخيص عطل القير التالي:
- نوع ناقل الحركة: [نوع_القير]
- نوع السيارة وموديلها: [السيارة]
- العرض بالتفصيل: [العرض] (نتعة قوية بين الترس الثاني والثالث، تأخر التعشيق، انزلاق العزم في المرتفعات)

المطلوب:
1. التمييز بين الأسباب الهيدروليكية (انسداد مخ القير Valve Body، تلف البلوف الكهربائية Solenoids، نقص الزيت)، والأسباب الميكانيكية، أو الإلكترونية.
2. خطوات فحص مستوى ولون ورائحة زيت القير والتأكد من عدم وجود رايش حديدي.
3. طريقة عمل برمجة وإعادة ضبط المصنع لحساسات ناقل الحركة ونقاط التلامس.
4. تقييم خطورة المشكلة ومدى الاستعجال لتفادي توقف القير بالكامل وتلف التروس.`,
    level: 'expert',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['transmission', 'gearbox', 'automatic transmission', 'dsg', 'cvt', 'mechanic']
  },
  {
    id: 'pml-aut-05',
    slash: '/auto-used-car-inspection',
    title_fr: 'Guide d’Inspection Achat Voiture d’Occasion',
    title_ar: 'دليل فحص السيارات المستعملة قبل الشراء وكشف التلاعب',
    category_id: 'automotive',
    category_fr: 'Automobile et mécanique',
    category_ar: 'السيارات والميكانيكا والتشخيص',
    function_fr: 'Détecter les compteurs trafiqués, les accidents camouflés et les vices cachés avant d’acheter',
    function_ar: 'فحص الهيكل والمحرك وكشف تلاعب عداد المسافات وحوادث الشاسيه المخفية',
    prompt_fr: `Tu es un Expert Automobile Indépendant.
Je m'apprête à inspecter et essayer un véhicule d'occasion :
- Modèle convoité : [VEHICULE]
- Kilométrage annoncé et prix : [ANNONCE]

Fournis la checklist d'inspection impitoyable en 4 étapes :
1. Inspection carrosserie et châssis : Comment détecter un choc structurel réparé (alignement des panneaux, soudures d'origine sous les joints de portes, épaisseur de peinture au magnétomètre).
2. Sous le capot à froid : Traces de fuite d'huile, présence de "mayonnaise" sur le bouchon d'huile (joint de culasse), état des courroies et durites.
3. Essai routier dynamique (15 minutes) : Bruits de roulement, tenue de cap au freinage sans les mains, embrayage, test du turbo et climatisation.
4. Contrôle administratif : Vérification du carnet, cohérence du kilométrage sur l'historique des contrôles techniques (HistoVec / Carfax).`,
    prompt_ar: `بصفتك فاحصاً وخبيراً معتمداً في معاينة وتقييم السيارات المستعملة:
أستعد لفحص وتجربة سيارة مستعملة معروضة للبيع:
- نوع السيارة وموديلها: [السيارة]
- المسافة المعلنة والسعر: [البيانات]

قائمة الفحص الميداني الصارم:
1. فحص الشاسيه والبودي: كشف الحوادث القديمة والقص والتعديل (مطابقة فواصل الأبواب، لحامات المصنع خلف الربلات، وقياس سماكة الطلاء بجهاز الفحص).
2. فحص المحرك على البارد قبل التشغيل: كشف تسريبات الزيوت، خلط الماء بالزيت أسفل غطاء المحرك، وحالة السيور والوصلات.
3. التجربة الميدانية على الطريق: ثبات الدركسون عند كبح الفرامل فجأة، استجابة التيربو، وفحص التكييف والعكوس.
4. فحص الأوراق والتوثيق: مطابقة تواريخ الفحص الدوري مع قراءة العداد لكشف أي تلاعب في المسافة المقطوعة.`,
    level: 'debutant',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['used car inspection', 'car buying', 'carfax', 'chassis', 'automotive']
  },
  {
    id: 'pml-aut-06',
    slash: '/auto-aircon-ac-hvac',
    title_fr: 'Diagnostiqueur Climatisation Automobile & Fluides Frigo',
    title_ar: 'تشخيص أعطال مكيف السيارة وشحن غاز الفريون HVAC',
    category_id: 'automotive',
    category_fr: 'Automobile et mécanique',
    category_ar: 'السيارات والميكانيكا والتشخيص',
    function_fr: 'Identifier la cause d’un manque de froid (fuite R134a/R1234yf, compresseur, volets)',
    function_ar: 'اكتشاف أسباب ضعف تبريد المكيف وتسريب الفريون وتعطل كمبروسر التكييف',
    prompt_fr: `Tu es un Spécialiste Frigoriste et Climatisation Automobile.
Diagnostique le dysfonctionnement de climatisation suivant :
- Véhicule : [VEHICULE]
- Type de gaz réfrigérant : [TYPE_GAZ] (R134a ou R1234yf)
- Problème constaté : [PROBLEME] (L'air souffle tiède, froid uniquement à haute vitesse, odeur d'humidité, compresseur qui claque en continu)

Démarche diagnostique :
1. Interprétation des pressions basse pression (BP) et haute pression (HP) relevées aux manomètres.
2. Méthodes de détection de fuite (Traceur UV fluorescent, détecteur électronique d'azote hydrogéné).
3. Diagnostic des pannes électriques courantes (Embrayage électromagnétique du compresseur, relais, pressostat, volet de mixage bloqué).
4. Précautions indispensables lors du tirage au vide et de la réinjection de l'huile PAG spécifique.`,
    prompt_ar: `أنت فني متخصص في منظومات تبريد وتكييف السيارات (Automotive HVAC):
قم بتشخيص عطل مكيف السيارة التالي:
- نوع السيارة: [السيارة]
- نوع غاز التبريد: [الغاز] (R134a أو R1234yf)
- المشكلة: [المشكلة] (تبريد ضعيف، يبرد في الخطوط فقط، هواء دافئ، صوت طقطقة عند تشغيل المكيف)

خطوات الفحص:
1. قراءة وتفسير ضغط الغاز المرتفع والمنخفض بواسطة ساعات الضغط (Manifold Gauges).
2. طرق كشف التسريب الدقيق (الصبغة الفوسفورية فوق البنفسجية UV، أو اختبار غاز النيتروجين).
3. فحص الأعطال الكهربائية (كلتش الكمبروسر، الفيوزات، حساس الضغط، أو تعطل بوابات توزيع الهواء داخل الطبلون).
4. المعايير الصحيحة لتفريغ الهواء (سحب الفاكيوم) وضبط كمية زيت الكمبروسر (PAG Oil) المناسبة.`,
    level: 'intermediaire',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['air conditioning', 'car ac', 'r134a', 'hvac', 'refrigerant', 'mechanic']
  },
  {
    id: 'pml-aut-07',
    slash: '/auto-brake-system-safety',
    title_fr: 'Expert Système de Freinage (ABS / ESP / Hydraulique)',
    title_ar: 'فحص منظومة الفرامل والأمان ABS وهيدروليك المكابح',
    category_id: 'automotive',
    category_fr: 'Automobile et mécanique',
    category_ar: 'السيارات والميكانيكا والتشخيص',
    function_fr: 'Diagnostiquer pédale molle, grincements, vibrations au freinage ou voyant ABS allumé',
    function_ar: 'تشخيص أسباب هبوط دواسة الفرامل ورجة المكابح وصوت الصفير وحساسات ABS',
    prompt_fr: `Tu es un Ingénieur Sécurité et Freinage Automobile.
Analyse l'anomalie de freinage sur le véhicule suivant :
- Véhicule : [VEHICULE]
- Symptôme rencontré : [SYMPTOME] (ex: Pédale spongieuse s'enfonçant au plancher, vibrations violentes dans le volant au freinage, grincement métallique continu, voyant ABS allumé)

Livrables d'expertise technique :
1. Identification du composant défaillant (Plaquettes au témoin d'usure, disques voilés, maître-cylindre fuyard, présence d'air dans le circuit hydraulique, capteur de roue ABS encrassé).
2. Procédure de purge complète du liquide de frein (DOT 4 / DOT 5.1) avec ordre de purge des étriers et activation des électrovannes du bloc ABS.
3. Mesure au comparateur à cadran du voile maximal admissible des disques.
4. Consignes impératives de rodage des plaquettes neuves pour garantir le coefficient de friction optimal.`,
    prompt_ar: `بصفتك مهندس أنظمة أمان ومكابح سيارات:
قم بتشخيص خلل منظومة الفرامل في المركبة التالية:
- نوع السيارة: [السيارة]
- العرض المشاهد: [العرض] (دواسة الفرامل تهبط للأسفل، اهتزاز ورجة في المقود عند التوقف، صفير احتكاك، إضاءة لمبة ABS)

المخرجات الفنية:
1. تحديد القطعة المعطوبة (تآكل الفحمات، اعوجاج الهوبات، تهريب علبة الفرامل الرئيسية، هواء في الزيت، أو اتساخ حساس ABS).
2. خطوات تنسيم وتغيير زيت الفرامل بالكامل (DOT 4 أو DOT 5.1) بالترتيب الهندسي الصحيح للعجلات.
3. طريقة قياس اعوجاج الهوبات بالميكروميتر لتحديد إمكانية الخرط أو ضرورة الاستبدال.
4. إرشادات ترويض وتطبيع الفحمات الجديدة (Brake Bedding-in) لضمان أعلى قوة توقف وثبات.`,
    level: 'intermediaire',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['brakes', 'abs', 'safety', 'brake pads', 'hydraulic', 'mechanic']
  },
  {
    id: 'pml-aut-08',
    slash: '/auto-turbo-boost-diag',
    title_fr: 'Spécialiste Turbocompresseur & Suralimentation',
    title_ar: 'تشخيص أعطال التيربو ومنظومة ضغط الهواء Turbocharger',
    category_id: 'automotive',
    category_fr: 'Automobile et mécanique',
    category_ar: 'السيارات والميكانيكا والتشخيص',
    function_fr: 'Diagnostiquer perte de pression de suralimentation, sifflement anormal ou fumée d’huile',
    function_ar: 'كشف أسباب ضعف عزم التيربو وصوت الصفير العالي وتسريب زيت الشاحن التوربيني',
    prompt_fr: `Tu es un Ingénieur Motoriste Spécialiste de la Suralimentation.
Analyse le problème de turbocompresseur suivant :
- Motorisation et véhicule : [VEHICULE]
- Symptômes : [SYMPTOMES] (Sifflement aigu type sirène de police, manque de puissance en côte, fumée bleue à l'échappement, code défaut sous-pression de turbo P0299)

Protocole de diagnostic :
1. Contrôle du jeu axial et radial de l'axe de la turbine (dépose de la durite d'admission pour vérification au doigt).
2. Vérification de l'étanchéité du circuit d'air comprimé (Intercooler percé, durites fissurées, fuite au joint de collecteur).
3. Diagnostic de la commande de géométrie variable (Actuateur pneumatique / wastegate grippée, électrovanne N75, ou actionneur électronique).
4. Causes racines fréquentes à éliminer pour ne pas flinguer un turbo neuf en 500 km (Conduit de lubrification bouché, pression d'huile insuffisante).`,
    prompt_ar: `أنت مهندس محركات متخصص في أنظمة الشواحن التوربينية (Turbochargers):
قم بفحص مشكلة التيربو التالية:
- نوع المحرك والسيارة: [السيارة]
- الأعراض: [الأعراض] (صوت صفير يشبه صفارة الإنذار، عزم ميت، دخان أزرق، كود نقص ضغط التيربو P0299)

خطوات الفحص الهندسي:
1. قياس خلوص عمود التوربين المحوري والشعاعي بعد فك خرطوش الهواء والتأكد من عدم احتكاك الشفرات بالجرم.
2. فحص تسريب دورة الهواء المضغوط ومبرد الهواء (الانتركولر) وتشققات الخراطيم.
3. فحص بوابة تصريف الضغط الزائد (Wastegate) وبلوف التحكم الإلكترونية بالريش المتغيرة.
4. الأسباب الجذرية الواجب معالجتها لمنع تلف التيربو الجديد (انسداد ماصورة تزييت التيربو، أو ضعف طرمبة الزيت).`,
    level: 'expert',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['turbocharger', 'boost leak', 'intercooler', 'mechanic', 'engine tuning']
  },
  {
    id: 'pml-aut-09',
    slash: '/auto-hybrid-powertrain',
    title_fr: 'Expert Motorisations Hybrides (Toyota HSD, E-Tech, PHEV)',
    title_ar: 'تشخيص وصيانة السيارات الهجينة الهايبرد Hybrid Powertrain',
    category_id: 'automotive',
    category_fr: 'Automobile et mécanique',
    category_ar: 'السيارات والميكانيكا والتشخيص',
    function_fr: 'Diagnostiquer batterie hybride NiMH/Li-Ion, inverseur (Inverter) et boîte à train épicycloïdal',
    function_ar: 'فحص خلايا بطارية الهايبرد ومحول الطاقة وعكس المحركات الكهربائية',
    prompt_fr: `Tu es un Spécialiste des Motorisations Hybrides certifié (Systèmes Toyota/Lexus THS, Renault E-Tech, Hyundai/Kia).
Diagnostique la panne suivante :
- Véhicule hybride : [VEHICULE]
- Kilométrage : [KILOMETRAGE]
- Alerte affichée : [ALERTE] (ex: "Vérifier le système hybride", ventilateur de batterie tournant à fond dans l'habitacle, code P0A80 remplacement de pack batterie)

Livrables d'expertise :
1. Analyse des blocs de cellules de la batterie de traction (différence de voltage Delta SOC entre blocs sous charge).
2. Protocole de nettoyage du ventilateur et du conduit d'aération de la batterie (cause #1 de surchauffe et de mort prématurée des cellules).
3. Contrôle du circuit de refroidissement de l'inverseur (Inverter coolant pump) pour éviter le claquage des transistors IGBT.
4. Options de réparation économique : Remplacement des seuls modules défectueux vs reconditionnement complet.`,
    prompt_ar: `أنت فني معتمد في منظومات السيارات الهجينة (Hybrid Systems):
قم بتشخيص عطل الهايبرد التالي:
- نوع السيارة الهجينة: [السيارة]
- قراءة العداد: [العداد]
- التنبيه الظاهر: [التنبيه] (رسالة "افحص نظام الهايبرد"، صوت مروحة البطارية مرتفع جداً، كود P0A80)

المطلوب:
1. قياس فرق الجهد الكهربائي بين خلايا البطارية (Delta Voltage) تحت الضغط لتحديد الخلايا التالفة.
2. خطوات تنظيف فلتر ومروحة تبريد البطارية الخلفية (السبب الأول لارتفاع الحرارة وتلف الخلايا).
3. فحص مضخة تبريد محول الجهد (Inverter Water Pump) لحماية الترانزستورات من الاحتراق.
4. المفاضلة بين استبدال الخلايا التالفة فقط أو تغيير وتجديد كامل حزمة البطارية.`,
    level: 'expert',
    ai_compatibility: ['Claude', 'ChatGPT', 'Gemini'],
    tags: ['hybrid car', 'toyota prius', 'phev', 'inverter', 'battery pack', 'mechanic']
  },
  {
    id: 'pml-aut-10',
    slash: '/auto-steering-suspension-align',
    title_fr: 'Spécialiste Train Roulant, Suspension & Géométrie (Parallélisme)',
    title_ar: 'وزن أذرعة ومقصات ومساعدات نظام التعليق والاتزان Wheel Alignment',
    category_id: 'automotive',
    category_fr: 'Automobile et mécanique',
    category_ar: 'السيارات والميكانيكا والتشخيص',
    function_fr: 'Corriger un véhicule qui tire à droite, use anormalement ses pneus ou claque sur les bosses',
    function_ar: 'ضبط زوايا العجلات والميلان وحل مشكلة انحراف السيارة وتآكل الإطارات غير المتساوي',
    prompt_fr: `Tu es un Expert en Géométrie des Trains Roulants et Liaisons au Sol.
Le véhicule présente le comportement suivant :
- Véhicule : [VEHICULE]
- Problème : [PROBLEME] (Tire d'un côté sur route plane, volant décentré, usure prononcée à l'intérieur des pneus avant, bruit de claquement sec sur chaussée dégradée)

Guide de résolution mécanique :
1. Identification des jeux dans les pièces d'usure avant tout réglage (Rotules de direction, silentblocs de triangles de suspension, biellettes de barre stabilisatrice, coupelles d'amortisseurs).
2. Analyse des 3 angles de géométrie :
   - Parallélisme (Pincement / Ouverture).
   - Carrossage (Camber négatif ou positif).
   - Chasse (Caster) et son influence sur la stabilité à haute vitesse et le rappel de direction.
3. Diagnostic de l'usure de pneu (Usure en facettes, usure sur une seule épaule).`,
    prompt_ar: `بصفتك مهندس ميزان وضبط نظام التعليق وتوجيه المركبات:
تعاني السيارة من المشاكل التالية:
- نوع السيارة: [السيارة]
- الشكوى: [الشكوى] (السيارة تنحرف إلى جانب واحد، الدركسون غير مستقيم، مسح وتآكل أطراف الإطارات، طقطقة في المطبات)

خطوات الإصلاح:
1. فحص بوش ومساعدات ومقصات السيارة قبل عمل الميزان (أذرعة الدركسون، جلود المقصات، مسامير عمود التوازن، كراسي المساعدات).
2. ضبط الزوايا الهندسية الثلاث:
   - زاوية التباعد والتقارب (Toe in / Toe out).
   - زاوية الميلان الرأسي (Camber).
   - زاوية كاستر (Caster) وتأثيرها على ثبات السيارة في السرعات العالية ورجوع المقود بعد المنعطفات.
3. قراءة نوع تآكل الإطارات وتشخيص سببه الميكانيكي.`,
    level: 'intermediaire',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['wheel alignment', 'suspension', 'camber', 'steering', 'mechanic', 'tires']
  },
  {
    id: 'pml-aut-11',
    slash: '/auto-ecu-chiptuning-remap',
    title_fr: 'Conseiller Reprogrammation Moteur (Stage 1 / Flexfuel E85)',
    title_ar: 'تعديل وبرمجة كمبيوتر المحرك Stage 1 وبرمجة الوقود ECU Remap',
    category_id: 'automotive',
    category_fr: 'Automobile et mécanique',
    category_ar: 'السيارات والميكانيكا والتشخيص',
    function_fr: 'Comprendre les gains réels, les tolérances mécaniques et les risques d’une reprogrammation',
    function_ar: 'معرفة حدود الزيادة الآمنة في القدرة الحصانية والعزم وتأثيرها على المحرك',
    prompt_fr: `Tu es un Ingénieur Calibrateur Moteur Automobile.
J'envisage une reprogrammation logicielle de gestion moteur (ECU) :
- Véhicule et motorisation d'origine : [VEHICULE] (Puissance et couple de série)
- Objectif visé : [OBJECTIF] (Stage 1 soft, conversion Flexfuel éthanol E85, désactivation logicielle de vanne EGR)

Analyse technique rigoureuse :
1. Quels paramètres de cartographie sont modifiés (Pression de suralimentation turbo, avance à l'allumage, temps d'injection de carburant, limiteurs de couple).
2. Les pièces mécaniques soumises à contrainte accrue (Embrayage d'origine qui peut patiner, température d'échappement EGT, injecteurs en saturation).
3. Les précautions impératives pour l'éthanol E85 (Capacité des injecteurs et pompe haute pression, démarrage à froid en hiver).
4. Aspects légaux, assurance et homologation.`,
    prompt_ar: `أنت مهندس معايرة وبرمجة محركات (ECU Calibration Engineer):
أدرس إمكانية إعادة برمجة كمبيوتر المحرك (Remapping / Stage 1):
- المحرك والسيارة: [السيارة] (القوة الحصانية والعزم القياسي)
- الهدف: [الهدف] (زيادة القوة والعزم Stage 1، تحسين استهلاك الوقود)

التحليل الفني الدقيق:
1. الجداول الرقمية المعدلة داخل الكمبيوتر (ضغط التيربو، توقيت شرارة الإشعال، زمن حقن الوقود، ومحددات العزم).
2. القطع الميكانيكية المعرضة للضغط الإضافي (تحمل صحن الكلتش، حرارة غازات العادم EGT، قدرة مضخة الوقود).
3. الفحوصات اللازمة على جهاز الداينو (Dyno) ومراقبة نسبة خليط الهواء والوقود (AFR) لمنع ظاهرة الصفع (Knocking).
4. الجوانب المتعلقة بضمان الوكالة والتوافق البيئي.`,
    level: 'expert',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['ecu tuning', 'remap', 'stage 1', 'horsepower', 'engine calibration']
  },
  {
    id: 'pml-aut-12',
    slash: '/auto-cooling-overheating',
    title_fr: 'Urgence Surchauffe Moteur & Circuit de Refroidissement',
    title_ar: 'طوارئ ارتفاع حرارة المحرك ودورة التبريد Engine Overheating',
    category_id: 'automotive',
    category_fr: 'Automobile et mécanique',
    category_ar: 'السيارات والميكانيكا والتشخيص',
    function_fr: 'Diagnostiquer aiguille de température dans le rouge, fuite de liquide ou ventilateur inactif',
    function_ar: 'التعامل مع الغليان المفاجئ للمحرك وفحص الرديتر وطرمبة الماء والبلف',
    prompt_fr: `Mon moteur surchauffe dangereusement :
- Véhicule : [VEHICULE]
- Circonstance de la surchauffe : [CIRCONSTANCES] (Dans les bouchons à l'arrêt, sur autoroute à 130 km/h, immédiatement au démarrage)
- Niveau du bocal de liquide de refroidissement : [NIVEAU]

Procédure d'urgence et diagnostic :
1. Que faire immédiatement au volant pour sauver le moteur avant d'endommager la culasse (Mettre le chauffage à fond, s'arrêter en sécurité, interdiction formelle d'ouvrir le bouchon chaud).
2. Diagnostic de la panne selon le scénario :
   - Surchauffe à l'arrêt uniquement : Motoventilateur HS, résistance de vitesse lente, relais.
   - Surchauffe à haute vitesse : Radiateur entartré/bouché, pompe à eau désertie.
   - Durites dures comme du bois et bulles dans le vase d'expansion : Joint de culasse claqué par passage de compression.
3. Test du thermostat (Calorstat bloqué fermé : durite supérieure bouillante et durite inférieure froide).`,
    prompt_ar: `ترتفع حرارة محرك سيارتي بشكل خطير ومفاجئ:
- نوع السيارة: [السيارة]
- توقيت الارتفاع: [التوقيت] (أثناء التوقف والزحام، على الطرق السريعة، بمجرد التشغيل)
- مستوى ماء الرديتر في القربة: [المستوى]

إجراءات الطوارئ والتشخيص:
1. التصرف الفوري أثناء القيادة لحماية رأس المكينة (تشغيل دفاية السيارة لسحب الحرارة، التوقف الآمن، والتحذير الشديد من فتح غطاء الرديتر وهو ساخن).
2. تحديد مكمن العطل حسب الحالة:
   - الحرارة ترتفع في الزحام فقط: تعطل مراوح التبريد، أو الكتاوت، أو سرعة المروحة البطيئة.
   - الحرارة ترتفع في السرعات العالية فقط: انسداد الرديتر بالأملاح، أو تلف مروحة طرمبة الماء.
   - انتفاخ خراطيش الماء بقوة وظهور فقاعات هواء: تلف وجه رأس المكينة (كازكيت الرأس).
3. فحص بلف الحرارة (الثرموستات) عند تعليقه في وضع الإغلاق (خرطوش علوي حار وسفلي بارد).`,
    level: 'intermediaire',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['overheating', 'coolant', 'radiator', 'thermostat', 'head gasket', 'emergency']
  },
  {
    id: 'pml-aut-13',
    slash: '/auto-alternator-starter-battery',
    title_fr: 'Diagnostiqueur Circuit de Démarrage (Alternateur, Batterie, Démarreur)',
    title_ar: 'فحص منظومة التشغيل والشحن (الدينامو، السلف، والبطارية)',
    category_id: 'automotive',
    category_fr: 'Automobile et mécanique',
    category_ar: 'السيارات والميكانيكا والتشخيص',
    function_fr: 'Trouver pourquoi la voiture refuse de démarrer (clic sec, voyant batterie, fuite parasite)',
    function_ar: 'تحديد سبب عدم دوران المحرك عند تشغيل السلف وكشف تهريب الكهرباء في السيارة',
    prompt_fr: `La voiture ne démarre pas ce matin :
- Véhicule : [VEHICULE]
- Ce qui se produit en tournant la clé ou appuyant sur Start : [SYMPTOME] (Silence complet, simple "clac" sec, moteur qui tourne lentement sans démarrer, sapin de noël au tableau de bord)

Fournis la méthode de test au multimètre en 4 étapes :
1. Test de la tension de batterie au repos (12.6V = 100%, 12.2V = 50%, < 11.9V = déchargée/HS).
2. Test de la tension sous action du démarreur (Si chute sous 9.6V : batterie sulfatée ou démarreur en court-circuit).
3. Test de l'alternateur moteur tournant (Doit réguler entre 13.8V et 14.4V ; au-delà de 15V = régulateur cramé).
4. Protocole de recherche de fuite de courant parasite à l'ampèremètre en enlevant les fusibles un par un.`,
    prompt_ar: `السيارة ترفض التشغيل والدوران هذا الصباح:
- نوع السيارة: [السيارة]
- الصوت الصادر عند تدوير المفتاح أو الضغط على زر التشغيل: [الصوت] (صمت تام، طقة واحدة فقط، دوران المحرك بثقل شديد، وميض أضواء الطبلون)

خطوات الفحص السريع بالملتيميتر:
1. قياس فولتية البطارية والسيارة طافية (12.6V مشحونة بالكامل، أقل من 11.9V بطارية تالفة أو فارغة).
2. قياس هبوط الفولتية لحظة تشغيل السلف (إذا هبطت عن 9.6V فالبطارية ضعيفة أو السلف فيه التماس داخلي).
3. قياس شحن الدينامو والمحرك شغال (يجب أن يعطي بين 13.8V إلى 14.4V؛ وإذا تجاوز 15V فمنظم الشحن تالف).
4. طريقة كشف تهريب كهرباء السيارة (Parasitic Drain) عبر سحب الفيوزات واحداً تلو الآخر حتى يختفي السحب الزائد.`,
    level: 'debutant',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['battery', 'alternator', 'starter', 'electrical', 'mechanic', 'jump start']
  },
  {
    id: 'pml-aut-14',
    slash: '/auto-exhaust-emissions-dpf',
    title_fr: 'Expert Dépollution Échappement (FAP, AdBlue, Vanne EGR, Catalyseur)',
    title_ar: 'صيانة منظومة البيئة والعادم وفلتر الديزل DPF وAdBlue والـ EGR',
    category_id: 'automotive',
    category_fr: 'Automobile et mécanique',
    category_ar: 'السيارات والميكانيكا والتشخيص',
    function_fr: 'Résoudre les colmatages de filtre à particules, pannes AdBlue et encrassements EGR',
    function_ar: 'معالجة انسداد دبة البيئة وفلتر الكربون ومشاكل نظام حقن اليوريا AdBlue',
    prompt_fr: `Tu es un Spécialiste des Systèmes Anti-Pollution Moteur Diesel et Essence.
Diagnostique le problème d'émissions suivant :
- Véhicule : [VEHICULE]
- Message d'erreur : [MESSAGE] (ex: "Colmatage FAP", "Défaut AdBlue : démarrage impossible dans 800 km", voyant moteur vanne EGR P0401)

Livrables de résolution :
1. Comment déclencher ou forcer une régénération active du FAP (Conditions de température gaz échappement > 600°C et régime autoroute 3000 tr/min).
2. Causes du colmatage prématuré (Trajets urbains trop courts, injecteur qui fuit, capteur de pression différentielle défaillant).
3. Résolution des pannes AdBlue (Cristallisation de l'urée sur l'injecteur, panne de résistance chauffante du réservoir).
4. Nettoyage de la vanne EGR calaminée sans casse.`,
    prompt_ar: `أنت خبير في أنظمة تقليل الانبعاثات وفلاتر العادم للسيارات (DPF, EGR, SCR AdBlue):
قم بتشخيص المشكلة البيئية التالية:
- نوع السيارة والمحرك: [السيارة]
- رسالة التنبيه في الشاشة: [الرسالة] (انسداد فلتر الديزل DPF، تعطل نظام AdBlue ومنع التشغيل بعد مسافة معينة، كود صمام EGR)

المطلوب:
1. كيفية إجراء عملية التجديد الذاتي لفلتر الجسيمات DPF برفع حرارة العادم على الطريق السريع.
2. أسباب الانسداد المبكر (كثرة المشاوير القصيرة في المدينة، أو تلف حساس الضغط التفاضلي).
3. حلول مشاكل نظام AdBlue (تبلور سائل اليوريا وانسداد البخاخ، أو تلف سخان التانكي).
4. طريقة فك وتنظيف كربون صمام تدوير غازات العادم (EGR Valve) وإعادته للعمل بسلاسة.`,
    level: 'intermediaire',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['dpf', 'adblue', 'egr', 'emissions', 'exhaust', 'diesel']
  },
  {
    id: 'pml-aut-15',
    slash: '/auto-trackday-race-setup',
    title_fr: 'Préparateur Châssis & Réglages Piste (Trackday Setup)',
    title_ar: 'تجهيز وضبط سيارات الحلبات والسباقات Trackday Setup',
    category_id: 'automotive',
    category_fr: 'Automobile et mécanique',
    category_ar: 'السيارات والميكانيكا والتشخيص',
    function_fr: 'Optimiser pressions de pneus chaudes, réglages de combinés filetés et liquide de frein haute température',
    function_ar: 'إعداد وضبط نظام التعليق وضغط الإطارات الحار وزيت الفرامل ليوم القيادة في الحلبة',
    prompt_fr: `Tu es un Ingénieur de Piste en Sport Automobile.
Prépare le setup d'une voiture pour une journée circuit (Trackday) :
- Véhicule : [VEHICULE]
- Circuit visé : [CIRCUIT] (Tracé rapide et fluide vs tracé technique sinueux)
- Pneus utilisés : [PNEUS] (Semi-slicks type Toyo R888R, Michelin Cup 2)

Éléments de réglage :
1. Gestion des pressions de pneus (Pression à froid vs cible de pression optimale à chaud après 4 tours rapides).
2. Réglage des amortisseurs combinés filetés (Compression et détente hydraulique pour éliminer le sous-virage ou le sur-virage).
3. Préparation indispensable des freins (Plaquettes de compétition type Pagid/Ferodo, liquide haute température Motul RBF 660, durites aviation tressées).
4. Précautions de sécurité indispensables : Tour de chauffe progressif et tour de refroidissement impératif sans serrer le frein à main dans les stands.`,
    prompt_ar: `أنت مهندس سباقات سيارات متخصص في إعداد المركبات للحلبات (Trackday Setup):
قم بتهيئة وإعداد السيارة ليوم قيادة رياضي على الحلبة:
- نوع السيارة: [السيارة]
- الحلبة المستهدفة: [الحلبة] (حلبة سرعة عالية، أو حلبة منعطفات تقنية ضيقة)
- نوع الإطارات: [الإطارات] (إطارات حلبات مخصصة Semi-Slicks)

تفاصيل الضبط الاحترافي:
1. ضبط ضغط الإطارات (حساب ضغط الإطارات على البارد للوصول للضغط الحار المثالي بعد لفات السرعة).
2. ضبط قساوة وارتداد المساعدات الرياضية (Coilovers) لموازنة انزلاق المقدمة أو المؤخرة (Understeer / Oversteer).
3. تجهيز الفرامل الرياضية (فحمات سباق تتحمل الحرارة العالية، زيت فرامل مقاوم للغليان، أهواز فرامل مسلحة).
4. تعليمات الأمان الحتمية: لفة تسخين الإطارات والزيوت، ولفة تبريد المحرك والفرامل، وعدم سحب الجلنط في المواقف لتفادي التصاق الفحمات بالهوبات الساخنة.`,
    level: 'expert',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['trackday', 'motorsport', 'race setup', 'coilovers', 'semi slicks', 'tires']
  },

  // ==========================================
  // CATÉGORIE 14 : EXCEL, GOOGLE SHEETS ET DATA (15 prompts)
  // ==========================================
  {
    id: 'pml-dat-01',
    slash: '/excel-xlookup-advanced',
    title_fr: 'Maître des Formules XLOOKUP / RECHERCHEX Avancées',
    title_ar: 'احتراف دالة البحث المتقدمة XLOOKUP في إكسل',
    category_id: 'data-sheets',
    category_fr: 'Excel, Google Sheets et Data',
    category_ar: 'إكسل، جداول بيانات وتحليل البيانات',
    function_fr: 'Construire des recherches multicritères et dynamiques remplaçant RECHERCHEV et INDEX/EQUIV',
    function_ar: 'تنفيذ عمليات البحث ثنائي الاتجاه ومتعدد الشروط بدقة فائقة',
    prompt_fr: `Tu es un Expert Formateur Microsoft Excel (MVP).
Écris la formule RECHERCHEX (XLOOKUP) optimale pour le besoin suivant :
- Donnée recherchée : [DONNEE_RECHERCHEE]
- Table source et colonnes : [TABLE_SOURCE]
- Critères multiples : [CRITERES] (ex: Trouver le prix unitaire selon le Produit ET la Région ET la Date)

Fournis :
1. La formule complète en syntaxe française (RECHERCHEX) et syntaxe anglaise (XLOOKUP).
2. L'explication pas-à-pas de l'imbrication des matrices booléennes ((Plage1=Critère1)*(Plage2=Critère2)).
3. La gestion propre du cas d'absence de résultat (if_not_found) évitant l'erreur #N/A.
4. Les avantages de performance par rapport aux anciennes formules RECHERCHEV.`,
    prompt_ar: `أنت خبير ومدرب معتمد في برنامج مايكروسوفت إكسل (Excel MVP):
اكتب صيغة دالة XLOOKUP المتقدمة للحالة التالية:
- القيمة المراد جلبها: [القيمة]
- جدول ومصفوفة البيانات: [الجدول]
- الشروط المتعددة: [الشروط] (مثال: جلب السعر حسب اسم المنتج والمنطقة معاً)

المطلوب:
1. كتابة الصيغة الكاملة باللغة الإنجليزية وتوضيح مقابلها في الإصدارات المعربة.
2. شرح المنطق الرياضي لدمج الشروط المتعددة عبر مصفوفة الضرب المنطقي ((نطاق1=شرط1)*(نطاق2=شرط2)).
3. تخصيص رسالة واضحة في حال عدم العثور على القيمة لمنع ظهور خطأ #N/A.
4. بيان الفارق الأدائي وتفوقها على دالتي VLOOKUP و INDEX/MATCH القديمتين.`,
    level: 'intermediaire',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['excel', 'xlookup', 'formulas', 'spreadsheets', 'data lookup']
  },
  {
    id: 'pml-dat-02',
    slash: '/sheets-query-master',
    title_fr: 'Expert Fonction QUERY sur Google Sheets',
    title_ar: 'احتراف دالة الاستعلامات القوية QUERY في جداول قوقل',
    category_id: 'data-sheets',
    category_fr: 'Excel, Google Sheets et Data',
    category_ar: 'إكسل، جداول بيانات وتحليل البيانات',
    function_fr: 'Filtrer, agréger, trier et pivoter des données avec le pseudo-langage SQL de Google Sheets',
    function_ar: 'فرز وتجميع وتحليل الجداول المعقدة بأوامر شبيهة بلغة SQL داخل Google Sheets',
    prompt_fr: `Tu es un Spécialiste Google Sheets et Automatisation.
Rédige la formule =QUERY() complète pour filtrer et agréger la table de données :
- Plage de données : [PLAGE] (ex: 'Ventes'!A1:H1000)
- Conditions de filtrage : [CONDITIONS] (ex: Année 2024, statut "Validé", montant > 500)
- Agrégation demandée : [AGREGATION] (ex: Total des ventes par commercial et par trimestre)

Fournis :
1. La formule complète intégrant SELECT, WHERE, GROUP BY, PIVOT, ORDER BY et LABEL pour renommer les en-têtes.
2. La gestion propre des variables de cellules externes intégrées dans la chaîne SQL ("&A1&").
3. La parade pour contourner le bogue classique des colonnes mixtes texte/nombres dans l'interpréteur QUERY.`,
    prompt_ar: `أنت متخصص ومحترف في جداول بيانات قوقل (Google Sheets):
اكتب صيغة الدالة السحرية =QUERY() لفرز وتلخيص البيانات:
- نطاق البيانات: [النطاق] (مثال: A1:H5000)
- شروط التصفية: [الشروط] (المبيعات لسنة محددة، والحالة مكتملة، والمبلغ أكبر من 500)
- التلخيص المطلوب: [التلخيص] (مجموع المبيعات لكل مندوب ولكل شهر)

المطلوب:
1. كتابة الصيغة الكاملة متضمنة أوامر (SELECT, WHERE, GROUP BY, ORDER BY, LABEL).
2. ربط الشروط بالخلايا الخارجية بدمج النصوص البرمجية بشكل صحيح ("&A1&").
3. الحل الهندسي لتفادي مشكلة الأعمدة التي تجمع بين النصوص والأرقام.`,
    level: 'intermediaire',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['google sheets', 'query function', 'sql', 'reporting', 'data analysis']
  },
  {
    id: 'pml-dat-03',
    slash: '/excel-vba-macro-auto',
    title_fr: 'Développeur Macro VBA Excel & Automatisation',
    title_ar: 'برمجة ماكرو إكسل المتقدم وأتمتة المهام بلغة VBA',
    category_id: 'data-sheets',
    category_fr: 'Excel, Google Sheets et Data',
    category_ar: 'إكسل، جداول بيانات وتحليل البيانات',
    function_fr: 'Automatiser une tâche répétitive de nettoyage, fusion de fichiers ou génération de PDF',
    function_ar: 'برمجة سكربت VBA ينفذ مهام التنسيق وتجميع الملفات وتصدير تقارير PDF بنقرة زر',
    prompt_fr: `Tu es un Développeur VBA Senior.
Écris une macro Excel complète et sécurisée pour la tâche suivante :
- Tâche à automatiser : [TACHE] (ex: Fusionner tous les fichiers Excel d'un dossier dans un onglet unique, nettoyer les lignes vides et exporter en PDF)
- Déclencheur : Clic sur un bouton de commande

Exigences de qualité logicielle :
1. Désactivation temporaire du rafraîchissement d'écran et des calculs automatiques pour une vitesse maximale (Application.ScreenUpdating = False).
2. Gestion rigoureuse des erreurs avec bloc On Error GoTo et rétablissement des paramètres système.
3. Code commenté avec typage explicite de toutes les variables (Option Explicit).
4. Boîte de dialogue finale affichant le nombre de lignes traitées et le temps d'exécution.`,
    prompt_ar: `أنت مبرمج ماكرو إكسل أول (Excel VBA Developer):
اكتب كود VBA احترافياً وسريعاً لتنفيذ المهمة التالية:
- المهمة المراد أتمتتها: [المهمة] (دمج ملفات إكسل متعددة في شيت واحد، حذف التكرارات، وتصدير النتيجة لملف PDF)
- وسيلة التشغيل: زر تفاعلي في ورقة العمل

معايير الجودة البرمجية:
1. إيقاف تحديث الشاشة والحسابات مؤقتاً لتسريع التنفيذ إلى أقصى حد (ScreenUpdating = False).
2. معالجة الاستثناءات والأخطاء (On Error GoTo) وإعادة ضبط إعدادات النظام بأمان.
3. كتابة كود منظم مع توثيق المتغيرات (Option Explicit).
4. نافذة منبثقة ختامية تعرض عدد السجلات المدمجة وزمن التنفيذ بالثواني.`,
    level: 'intermediaire',
    ai_compatibility: ['Cursor', 'ChatGPT', 'Claude'],
    tags: ['vba', 'macro', 'excel automation', 'vbscript', 'data processing']
  },
  {
    id: 'pml-dat-04',
    slash: '/sheets-apps-script-api',
    title_fr: 'Développeur Google Apps Script & Connexion API Web',
    title_ar: 'برمجة Google Apps Script وربط جداول البيانات بـ APIs الخارجية',
    category_id: 'data-sheets',
    category_fr: 'Excel, Google Sheets et Data',
    category_ar: 'إكسل، جداول بيانات وتحليل البيانات',
    function_fr: 'Connecter Google Sheets à une API externe en direct et créer des déclencheurs automatiques',
    function_ar: 'جلب البيانات الحية من واجهات برمجة التطبيقات وجدولة التحديثات الآلية في قوقل شيتس',
    prompt_fr: `Tu es un Développeur Google Workspace & Apps Script.
Écris le script Apps Script (JavaScript) pour :
- API externe à interroger : [API_EXTERNE] (ex: API météo, API cours des devises, API Stripe, CRM webhook)
- Fréquence de mise à jour : [FREQUENCE] (ex: Toutes les nuits à 2h du matin via Time-Driven Trigger ou sur modification de cellule)
- Feuille et colonnes cibles : [CIBLE]

Fournis :
1. La fonction d'appel API via UrlFetchApp.fetch() avec gestion des en-têtes d'authentification Bearer Token.
2. L'écriture en masse des données avec .setValues() (éviter absolument les boucles lentes avec .setValue()).
3. La fonction de configuration automatique du déclencheur horaire (ScriptApp.newTrigger).
4. Menu personnalisé ajouté à la barre d'outils Google Sheets (onOpen) pour déclencher l'action manuellement.`,
    prompt_ar: `أنت مطور متخصص في Google Apps Script وبيئة Google Workspace:
اكتب سكربت Apps Script لجلب وتحديث البيانات:
- الواجهة البرمجية (API): [الـ_API] (بيانات أسعار العملات، بوابة دفع، أو CRM)
- توقيت التحديث: [التوقيت] (تحديث تلقائي يومي أو عند إدخال بيانات جديدة)
- الورقة المستهدفة: [الورقة]

المطلوب:
1. كود استدعاء الـ API باستخدام UrlFetchApp مع التمرير الآمن لمفاتيح المصادقة.
2. كتابة البيانات دفعة واحدة بنظام المصفوفات .setValues() لتفادي البطء الشديد.
3. دالة إنشاء المشغل الزمني التلقائي (Trigger) دون تدخل يدوي.
4. إضافة قائمة مخصصة في شريط أدوات Google Sheets لتشغيل التحديث بنقرة واحدة.`,
    level: 'expert',
    ai_compatibility: ['Cursor', 'Claude', 'ChatGPT'],
    tags: ['google apps script', 'api', 'google sheets', 'javascript', 'automation']
  },
  {
    id: 'pml-dat-05',
    slash: '/excel-power-query-m',
    title_fr: 'Expert Power Query & Langage M (ETL Excel)',
    title_ar: 'هندسة تحويل وتنظيف البيانات Power Query ولغة M',
    category_id: 'data-sheets',
    category_fr: 'Excel, Google Sheets et Data',
    category_ar: 'إكسل، جداول بيانات وتحليل البيانات',
    function_fr: 'Nettoyer, dépivoter et transformer un fichier brut sale en table prête pour l’analyse',
    function_ar: 'تنظيف وتنسيق ملفات البيانات الضخمة وأتمتة خطوات المعالجة بلغة M الكودية',
    prompt_fr: `Tu es un Ingénieur Business Intelligence et Power Query.
Nous recevons un fichier de données brut très mal structuré :
- Problèmes du fichier : [PROBLEMES] (ex: Titres fusionnés sur plusieurs lignes, dates au format texte incohérent, données tabulaires en colonnes croisées à dépivoter, espaces insécables)
- Résultat attendu : Table plate normalisée (Colonnes : Date, Client, Produit, Montant)

Rédige :
1. Les étapes conceptuelles de transformation dans l'éditeur Power Query.
2. Le code source en langage M (let ... in) complet et optimisé.
3. La technique pour que la requête s'actualise sans erreur même si de nouvelles colonnes apparaissent le mois prochain.`,
    prompt_ar: `أنت مهندس ذكاء أعمال وخبير في أداة Power Query ولغة M:
نستلم ملف بيانات خام غير منظم ويحتوي على تشوهات:
- المشاكل الموجودة: [المشاكل] (خلايا مدمجة، تواريخ بصيغ نصية مختلفة، بيانات أفقية تحتاج لإلغاء المحاذاة Unpivot)
- النتيجة المطلوبة: جدول قياسي منظم جاهز لتقارير لوحات المعلومات

المطلوب:
1. خطوات التحويل والمعالجة في محرر Power Query.
2. كود لغة M البرمجي الكامل والمحسن (let ... in).
3. إعداد الاستعلام ليتكيف تلقائياً مع ظهور أعمدة جديدة في التحديثات الشهرية القادمة.`,
    level: 'expert',
    ai_compatibility: ['ChatGPT', 'Claude', 'Cursor'],
    tags: ['power query', 'm language', 'etl', 'excel', 'data cleaning']
  },
  {
    id: 'pml-dat-06',
    slash: '/excel-dax-powerbi',
    title_fr: 'Formulateur DAX Power BI & Modélisation en Étoile',
    title_ar: 'صياغة معادلات DAX المتقدمة لتقارير Power BI',
    category_id: 'data-sheets',
    category_fr: 'Excel, Google Sheets et Data',
    category_ar: 'إكسل، جداول بيانات وتحليل البيانات',
    function_fr: 'Créer des mesures DAX complexes (Year-to-Date, Time Intelligence, Cumulative)',
    function_ar: 'كتابة مقاييس DAX التراكمية ومقارنات الفترات الزمنية للوحات القيادة',
    prompt_fr: `Tu es un Architecte Power BI et Spécialiste DAX (Data Analysis Expressions).
Écris les mesures DAX pour le modèle de données suivant :
- Schéma du modèle : Schéma en étoile avec table de faits Ventes et tables de dimensions (Dates, Clients, Produits)
- Métriques à créer : [METRIQUES] (ex: Chiffre d'affaires cumulé annuel YTD, Ventes de la même période l'an dernier SPLY, Taux de croissance N vs N-1 %)

Livrables DAX :
1. Code DAX propre et formaté avec utilisation de variables (VAR ... RETURN) pour la performance.
2. Explication de la transition de contexte (Context Transition) et utilisation de CALCULATE, FILTER et ALL.
3. Mesure dynamique s'adaptant aux filtres du rapport (Slicers).
4. Recommandation pour éviter le piège des colonnes calculées volumineuses au profit des mesures implicites.`,
    prompt_ar: `بصفتك مهندس نمذجة بيانات وخبير لغة DAX في Power BI:
اكتب المقاييس التحليلية للنموذج النجمي (Star Schema):
- هيكل البيانات: جدول الحقائق للمبيعات وجداول الأبعاد (التاريخ، المنتجات، العملاء)
- المقاييس المطلوبة: [المقاييس] (المبيعات التراكمية السنوية YTD، مبيعات نفس الفترة من العام الماضي، نسبة النمو)

المطلوب:
1. كود DAX منسق باستخدام المتغيرات (VAR ... RETURN) لأعلى كفاءة وسرعة استجابة.
2. شرح منطق تحويل السياق (Context Transition) وتوظيف دوال CALCULATE و FILTER.
3. مقياس تفاعلي يتجاوب بمرونة مع أشرطة التصفية (Slicers) في التقرير.
4. إرشادات تجنب الأعمدة المحسوبة المرهقة للذاكرة لصالح المقاييس السريعة.`,
    level: 'expert',
    ai_compatibility: ['ChatGPT', 'Claude', 'Cursor'],
    tags: ['dax', 'power bi', 'business intelligence', 'time intelligence', 'data modeling']
  },
  {
    id: 'pml-dat-07',
    slash: '/sheets-regex-extract-clean',
    title_fr: 'Nettoyeur de Données avec REGEXEXTRACT & REGEXREPLACE',
    title_ar: 'تنظيف واستخراج النصوص المعقدة في الشيتس بدوال REGEX',
    category_id: 'data-sheets',
    category_fr: 'Excel, Google Sheets et Data',
    category_ar: 'إكسل، جداول بيانات وتحليل البيانات',
    function_fr: 'Extraire numéros de téléphone, emails, codes postaux d’une colonne de texte désordonnée',
    function_ar: 'استخلاص البيانات المحددة من النصوص العشوائية وتوحيد التنسيقات غير المتطابقة',
    prompt_fr: `Voici une colonne de texte non structuré :
[EXEMPLES_TEXTES] (contenant en vrac des adresses, des numéros de téléphone variés, des adresses emails, des montants)

Écris les formules Google Sheets ou Excel modernes pour :
1. Extraire uniquement l'adresse email valide avec REGEXEXTRACT.
2. Extraire et normaliser le numéro de téléphone au format international avec REGEXREPLACE.
3. Isoler le montant monétaire numérique en nettoyant les devises et espaces parasites.
4. Formule matricielle (ARRAYFORMULA / LET) pour appliquer le traitement à toute la colonne en une seule cellule.`,
    prompt_ar: `إليك عموداً يحتوي على نصوص غير منظمة ومختلطة:
[أمثلة_النصوص] (عناوين، أرقام هواتف، بريد إلكتروني، مبالغ مالية متفرقة)

اكتب الصيغ البرمجية لدوال REGEX في إكسل أو جداول قوقل لـ:
1. استخراج البريد الإلكتروني الصحيح فقط عبر دالة REGEXEXTRACT.
2. استخراج رقم الهاتف وتوحيد تنسيقه بالصيغة الدولية عبر دالة REGEXREPLACE.
3. عزل القيمة النقدية الصافية كأرقام فقط وإزالة الرموز والعملات.
4. تطبيق الصيغة على العمود بالكامل بدالة مصفوفية واحدة (ARRAYFORMULA).`,
    level: 'intermediaire',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['regex', 'google sheets', 'regexextract', 'data cleaning', 'string manipulation']
  },
  {
    id: 'pml-dat-08',
    slash: '/excel-dynamic-array-lambda',
    title_fr: 'Créateur de Fonctions Personnalisées avec LAMBDA & LET',
    title_ar: 'برمجة دوال إكسل المخصصة الحديثة عبر LAMBDA وLET',
    category_id: 'data-sheets',
    category_fr: 'Excel, Google Sheets et Data',
    category_ar: 'إكسل، جداول بيانات وتحليل البيانات',
    function_fr: 'Créer sa propre fonction métier réutilisable sans une seule ligne de code VBA',
    function_ar: 'ابتكار دوال حسابية ذكية خاصة بشركتك دون الحاجة لبرمجة ماكرو أو VBA',
    prompt_fr: `Tu es un Ingénieur Formules Excel Modernes.
Crée une fonction personnalisée avec la fonction LAMBDA pour le calcul métier suivant :
- Règle de calcul : [REGLE_METIER] (ex: Calcul d'un barème de commission par paliers progressifs selon le CA réalisé)
- Paramètres d'entrée : [PARAMETRES]

Livrables :
1. La formule complète testée avec la fonction LET pour nommer les variables intermédiaires et optimiser le temps de calcul.
2. La syntaxe exacte de la fonction LAMBDA prête à être enregistrée dans le Gestionnaire de Noms (Name Manager).
3. Exemple d'utilisation finale épurée dans la feuille de calcul (ex: =CALCUL_COMMISSION(B2; C2)).
4. Combinaison avec MAP / BYROW pour étendre automatiquement le calcul sur un tableau entier.`,
    prompt_ar: `أنت خبير الدوال المصفوفية والدوال المتقدمة في إكسل:
صمم دالة مخصصة جديدة باستخدام دالة LAMBDA لتنفيذ العملية التالية:
- العملية الحسابية المطلوبة: [العملية] (مثال: احتساب عمولات المبيعات وفق شرائح تصاعدية مركبة)
- مدخلات الدالة: [المدخلات]

المطلوب:
1. صياغة الدالة باستخدام دالة LET لتسمية المتغيرات الحسابية وتسريع المعالجة.
2. الصيغة الكاملة لتسجيل الدالة في مدير الأسماء (Name Manager) كدالة رسمية في إكسل.
3. نموذج استدعاء الدالة المبسط في خلايا الجدول (مثال: =CALCULATE_COMMISSION(A2)).
4. دمج الدالة مع دالتي MAP أو BYROW لتطبيقها على مصفوفة كاملة تلقائياً.`,
    level: 'expert',
    ai_compatibility: ['ChatGPT', 'Claude', 'Cursor'],
    tags: ['excel', 'lambda', 'let function', 'custom functions', 'dynamic arrays']
  },
  {
    id: 'pml-dat-09',
    slash: '/excel-pivot-table-dashboard',
    title_fr: 'Architecte Tableau Croisé Dynamique & Dashboard Exécutif',
    title_ar: 'تصميم الجداول المحورية ولوحات المؤشرات التفاعلية Pivot Tables',
    category_id: 'data-sheets',
    category_fr: 'Excel, Google Sheets et Data',
    category_ar: 'إكسل، جداول بيانات وتحليل البيانات',
    function_fr: 'Construire un tableau de bord de direction interactif avec segments (Slicers) et chronologies',
    function_ar: 'بناء لوحة تحكم تفاعلية للمدراء بشرائح تصفية وتحديث فوري للمؤشرات',
    prompt_fr: `Conçois l'architecture d'un Dashboard de pilotage basé sur les Tableaux Croisés Dynamiques (TCD) :
- Données disponibles : [TABLE_DONNEES] (ex: Historique des ventes de 10 000 lignes)
- Décideurs cibles : Direction Générale et Responsables Régionaux
- Indicateurs clés (KPIs) souhaités : [KPIS]

Plan d'aménagement du dashboard :
1. Les 4 TCD piliers à créer (Ventes par région, Top 10 produits, Évolution mensuelle, Performance par commercial).
2. Configuration des segments (Slicers) connectés à l'ensemble des TCD pour un filtrage global synchronisé en 1 clic.
3. Choix des graphiques adaptés évitant la surcharge visuelle (Graphiques combinés barres/courbes, jauges épurées).
4. Création de champs calculés dans le TCD pour mesurer les marges réelles sans modifier la base de données source.`,
    prompt_ar: `قم بتصميم لوحة مؤشرات تنفيذية (Executive Dashboard) باستخدام الجداول المحورية (Pivot Tables):
- قاعدة البيانات المتوفرة: [البيانات] (سجل مبيعات ضخم)
- الفئة المستفيدة: الإدارة العليا ومدراء المناطق
- مؤشرات الأداء المستهدفة (KPIs): [المؤشرات]

مخطط بناء اللوحة:
1. الجداول المحورية الأربعة الأساسية (المبيعات حسب المناطق، أفضل 10 منتجات، التطور الشهري، كفاءة المناديب).
2. ربط أشرطة التصفية السريعة (Slicers) والجدول الزمني بكافة الجداول لمزامنة التصفية بنقرة واحدة.
3. اختيار الرسوم البيانية الأوضح وتفادي التشتيت البصري (رسوم بيانية مدمجة، وتنسيق شرطي ذكي).
4. إضافة حقول محسوبة داخل الجداول المحورية لاحتساب هوامش الربح دون تعديل البيانات الأصلية.`,
    level: 'intermediaire',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['pivot tables', 'excel dashboard', 'slicers', 'reporting', 'kpi']
  },
  {
    id: 'pml-dat-10',
    slash: '/sheets-importxml-scraper',
    title_fr: 'Extracteur de Données Web avec IMPORTXML sur Google Sheets',
    title_ar: 'استخراج البيانات الحية من المواقع الإلكترونية بدالة IMPORTXML',
    category_id: 'data-sheets',
    category_fr: 'Excel, Google Sheets et Data',
    category_ar: 'إكسل، جداول بيانات وتحليل البيانات',
    function_fr: 'Scraper automatiquement des prix ou informations publiques d’une page web avec XPath',
    function_ar: 'جلب أسعار المنتجات أو المعلومات العامة من صفحات الويب تلقائياً باستخدام XPath',
    prompt_fr: `Tu es un Expert en Web Scraping Léger dans Google Sheets.
Écris la formule =IMPORTXML() pour extraire des données d'un site web public :
- URL de la page : [URL]
- Élément à extraire : [ELEMENT] (ex: Prix d'un produit, titre d'article, tableau de cotations boursières)

Fournis :
1. L'expression XPath exacte pour cibler l'élément sans capturer de balises parasites.
2. La formule Google Sheets complète avec gestion d'erreurs IFERROR.
3. L'astuce pour forcer l'actualisation périodique des données sans attendre le cache de 2 heures de Google.
4. Les limites techniques de la fonction (sites dynamiques sous JavaScript React/Vue non supportés).`,
    prompt_ar: `أنت خبير في جمع واستخراج البيانات من الويب عبر جداول قوقل:
اكتب صيغة دالة =IMPORTXML() لاستخراج بيانات حية من صفحة إنترنت:
- رابط الصفحة: [الرابط]
- العنصر المستهدف: [العنصر] (سعر منتج، عناوين أخبار، جدول مؤشرات مالية)

المطلوب:
1. مسار XPath الدقيق والمباشر لاقتناص العنصر دون تشويش.
2. الصيغة الكاملة في Google Sheets مدمجة مع دالة تفادي الأخطاء IFERROR.
3. حيلة تجديد وتحديث البيانات دورياً دون انتظار انتهاء فترة التخزين المؤقت لقوقل.
4. التنبيه بالحدود التقنية للدالة (المواقع التي تعتمد على تحميل المحتوى بالجافاسكربت).`,
    level: 'intermediaire',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['importxml', 'xpath', 'web scraping', 'google sheets', 'data extraction']
  },
  {
    id: 'pml-dat-11',
    slash: '/excel-solver-optimization',
    title_fr: 'Modélisateur d’Optimisation Sous Contraintes (Excel Solver)',
    title_ar: 'حل مسائل التحسين والبرمجة الخطية بأداة Excel Solver',
    category_id: 'data-sheets',
    category_fr: 'Excel, Google Sheets et Data',
    category_ar: 'إكسل، جداول بيانات وتحليل البيانات',
    function_fr: 'Résoudre un problème de programmation linéaire pour maximiser le profit ou minimiser les coûts',
    function_ar: 'إيجاد المزيج الإنتاجي الأمثل لتحقيق أعلى ربح ممكن تحت قيود الموارد والميزانية',
    prompt_fr: `Tu es un Ingénieur en Recherche Opérationnelle.
Configure le problème d'optimisation suivant dans le Solveur Excel (Excel Solver) :
- Objectif : [OBJECTIF] (Maximiser le profit net global ou minimiser les coûts logistiques)
- Variables de décision (Cellules variables) : [VARIABLES] (Quantités de produits A, B et C à fabriquer)
- Contraintes opérationnelles : [CONTRAINTES] (Heures machines disponibles, stock de matières premières limité, demande minimale du marché)

Détaille la configuration du Solveur :
1. Définition de la cellule cible et de la formule de la fonction économique.
2. Liste mathématique formelle des contraintes (signes <=, >=, contraintes d'intégrité de nombres entiers).
3. Sélection du moteur de résolution adéquat (Simplex LP pour linéaire, GRG Non-linéaire, ou Évolutionnaire pour problèmes discontinus).
4. Interprétation du rapport de sensibilité (Prix fictifs / Shadow Prices des contraintes saturées).`,
    prompt_ar: `بصفتك مهندس بحوث عمليات ونمذجة رياضية:
قم بتهيئة مسألة البرمجة الخطية في أداة الحل التلقائي (Excel Solver):
- الهدف الأساسي: [الهدف] (تعظيم الأرباح الصافية أو تقليل تكاليف الشحن)
- المتغيرات الحرة (خلايا التغيير): [المتغيرات] (كميات إنتاج المنتجات المختلفة)
- القيود التشغيلية: [القيود] (ساعات عمل الآلات المتاحة، المواد الخام، الطلب في السوق)

خطوات الضبط:
1. صياغة دالة الهدف ومعادلتها الرياضية في الخلية المستهدفة.
2. حصر القيود الحسابية بدقة (شروط الأعداد الصحيحة وعدم السالبية).
3. اختيار خوارزمية الحل الأنسب (Simplex LP للخطية، أو GRG Nonlinear للمعادلات غير الخطية).
4. تفسير تقرير الحساسية (Shadow Price) لمعرفة القيمة المضافة لزيادة سعة أي قيد تشغيلي.`,
    level: 'expert',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['excel solver', 'linear programming', 'optimization', 'operations research', 'simplex']
  },
  {
    id: 'pml-dat-12',
    slash: '/excel-monte-carlo-sim',
    title_fr: 'Simulateur de Risques Monte-Carlo sur Tableur',
    title_ar: 'محاكاة مونت كارلو لتحليل المخاطر المالية على إكسل Monte Carlo',
    category_id: 'data-sheets',
    category_fr: 'Excel, Google Sheets et Data',
    category_ar: 'إكسل، جداول بيانات وتحليل البيانات',
    function_fr: 'Modéliser l’incertitude d’un budget par 1 000 tirages aléatoires probabilistes',
    function_ar: 'بناء نموذج احتمالي يتنبأ بنسب نجاح المشروع عبر آلاف السيناريوهات العشوائية',
    prompt_fr: `Tu es un Ingénieur Financier Spécialiste de la Gestion des Risques.
Construis une simulation de Monte-Carlo sous Excel pour évaluer la rentabilité d'un projet incertain :
- Paramètres incertains : [VARIABLES_ALEATOIRES] (ex: Prix de vente distribué selon une loi normale, volume de ventes triangulaire, coût des matières premières)
- Nombre de simulations visé : 1 000 scénarios

Structure du modèle sous Excel :
1. Formules de génération des distributions probabilistes (NORM.INV(RAND(); Moyenne; Écart-type), loi uniforme, loi triangulaire).
2. Mise en place de la Table de Données Excel à 1 variable pour itérer automatiquement les 1 000 tirages sans macro VBA.
3. Calcul des statistiques de sortie (Probabilité que le projet soit en perte, Valeur à Risque VaR 95%, Scénario pire cas et meilleur cas).
4. Histogramme de répartition des résultats pour présentation visuelle au comité de direction.`,
    prompt_ar: `أنت خبير في الهندسة المالية وإدارة المخاطر الاحتمالية:
صمم نموذج محاكاة مونت كارلو (Monte Carlo Simulation) في إكسل لتقييم مشروع استثماري:
- المتغيرات غير المؤكدة: [المتغيرات] (حجم المبيعات بتوزيع احتمالي، تكلفة المواد، سعر الصرف)
- عدد السيناريوهات المستهدفة: 1000 محاكاة

خطوات بناء النموذج:
1. معادلات توليد التوزيعات الاحتمالية العشوائية (توزيع طبيعي NORM.INV، وتوزيع مثلثي).
2. استخدام جدول بيانات إكسل (Data Table) لتكرار الـ 1000 سيناريو بسرعة فائقة دون أكواد برمجة.
3. استخراج المؤشرات الاحتمالية الحاسمة (نسبة احتمالية وقوع الخسارة، القيمة المعرضة للمخاطر VaR 95%).
4. الرسم البياني التكراري (Histogram) لتوضيح منحنى النتائج لمجلس الإدارة.`,
    level: 'expert',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['monte carlo', 'simulation', 'risk analysis', 'probability', 'excel modeling']
  },
  {
    id: 'pml-dat-13',
    slash: '/excel-waterfall-bridge',
    title_fr: 'Créateur de Graphique Cascade (Waterfall / Bridge Chart)',
    title_ar: 'تصميم الرسم البياني التراكمي الشلالي Waterfall Chart',
    category_id: 'data-sheets',
    category_fr: 'Excel, Google Sheets et Data',
    category_ar: 'إكسل، جداول بيانات وتحليل البيانات',
    function_fr: 'Expliquer visuellement le passage d’un EBITDA initial à un EBITDA final par facteurs explicatifs',
    function_ar: 'توضيح العوامل الإيجابية والسلبية التي أدت لتغير الأرباح بين عامين برسم شلالي جذاب',
    prompt_fr: `Tu es un Contrôleur Financier de Groupe.
Construis le graphique de réconciliation financière en cascade (Waterfall / Bridge Chart) :
- Valeur de départ : [VALEUR_DEPART] (ex: EBITDA 2023 = 1 000 000 €)
- Variations positives et négatives : [VARIATIONS] (ex: Effet hausse des prix +120k€, Effet hausse des salaires -80k€, Volume additionnel +150k€, Hausse énergie -90k€)
- Valeur d'arrivée : [VALEUR_ARRIVEE] (ex: EBITDA 2024)

Livrables de présentation :
1. Organisation tabulaire des données adaptée aux graphiques Waterfall natifs d'Excel.
2. Code couleur normatif financier (Vert pour les contributions positives, Rouge pour les impacts négatifs, Gris/Bleu pour les totaux de départ et d'arrivée).
3. Commentaire exécutif de 4 lignes résumant l'histoire racontée par le graphique pour le comité exécutif.`,
    prompt_ar: `بصفتك مسؤول التقارير والرقابة المالية للمجموعة:
صمم الرسم البياني الشلالي التوضيحي (Waterfall Bridge Chart):
- القيمة الابتدائية: [القيمة_الأولى] (مثال: أرباح العام الماضي)
- التغيرات الموجبة والسالبة: [التغيرات] (أثر زيادة الأسعار +100 ألف، ارتفاع الرواتب -60 ألف، تكاليف الطاقة -40 ألف)
- القيمة النهائية المحققة: [القيمة_النهائية]

المطلوب:
1. تنظيم وتنسيق جدول البيانات ليتوافق مع الرسم البياني الشلالي في إكسل.
2. معايير الألوان المالية المعتمدة (الأخضر للمساهمات الإيجابية، الأحمر للسلبيات، واللون المحايد لبداية ونهاية الفترة).
3. تعليق تنفيذي موجز من 4 أسطر يشرح القصة وراء الأرقام لاجتماع الإدارة.`,
    level: 'debutant',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['waterfall chart', 'bridge chart', 'financial reporting', 'dataviz', 'excel']
  },
  {
    id: 'pml-dat-14',
    slash: '/sheets-conditional-formatting-kpi',
    title_fr: 'Styliste Formatage Conditionnel & Échelles de Couleurs',
    title_ar: 'التنسيق الشرطي الذكي وإبراز مؤشرات الأداء بالألوان في الجداول',
    category_id: 'data-sheets',
    category_fr: 'Excel, Google Sheets et Data',
    category_ar: 'إكسل، جداول بيانات وتحليل البيانات',
    function_fr: 'Mettre en valeur automatiquement les alertes, retards et réussites sans surcharger la vue',
    function_ar: 'إبراز المواعيد المتأخرة والمهام المكتملة تلقائياً بألوان هادئة ومريحة للمستخدم',
    prompt_fr: `Tu es un Designer d'Interfaces et Spécialiste Tableur.
Crée les règles de formatage conditionnel pour la feuille de suivi :
- Nature du tableau : [TABLEAU] (ex: Suivi de projets avec dates d'échéances et statuts, tableau de suivi des paiements clients)
- Conditions à mettre en évidence : [CONDITIONS] (ex: Date dépassée en rouge doux, échéance dans moins de 3 jours en orange, terminé en vert clair barré)

Fournis :
1. Les formules personnalisées exactes de formatage conditionnel (ex: =ET($C2<AUJOURDHUI(); $D2<>"Terminé")).
2. Le choix de teintes pastel douces (Codes hexadécimaux recommandés pour éviter le syndrome "sapin de noël" agressif).
3. La règle pour appliquer le surlignage à la ligne entière ($ devant la lettre de colonne).
4. Ordre de priorité des règles pour éviter les conflits d'écrasement.`,
    prompt_ar: `أنت مصمم واجهات وخبير في تنسيق وتجميل جداول البيانات:
صمم قواعد التنسيق الشرطي التلقائي (Conditional Formatting) لجدول:
- طبيعة الجدول: [الجدول] (متابعة تسليم المشاريع، أو فواتير التحصيل)
- الحالات المراد إبرازها: [الحالات] (المتأخر بالأحمر الهادئ، الذي يحل موعده خلال 3 أيام بالبرتقالي، والمنجز بالأخضر مع شطب النص)

المطلوب:
1. الصيغ المنطقية الدقيقة لكل قاعدة (مثال: استخدام دالة TODAY وحالة المهمة).
2. اختيار درجات الألوان الباستيل الناعمة والراقية لمنع إجهاد العين.
3. التثبيت الصحيح لعلامة الدولار ($) لتلوين السطر بأكمله وليس خلية واحدة فقط.
4. ترتيب أسبقية القواعد لمنع تعارض الألوان في الخلية الواحدة.`,
    level: 'debutant',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['conditional formatting', 'excel design', 'google sheets', 'kpi', 'ui']
  },
  {
    id: 'pml-dat-15',
    slash: '/excel-csv-utf8-bom-repair',
    title_fr: 'Réparateur Encodage CSV & Caractères Arabes/Accents (UTF-8 BOM)',
    title_ar: 'معالجة مشاكل ترميز ملفات CSV والنصوص العربية والأحرف الخاصة UTF-8',
    category_id: 'data-sheets',
    category_fr: 'Excel, Google Sheets et Data',
    category_ar: 'إكسل، جداول بيانات وتحليل البيانات',
    function_fr: 'Résoudre les problèmes de caractères arabes ou accents illisibles (mojibake) à l’ouverture d’un CSV dans Excel',
    function_ar: 'حل تشوه الحروف واللغة العربية عند فتح وتصدير ملفات CSV في إكسل ويندوز',
    prompt_fr: `Tu es un Ingénieur Systèmes et Spécialiste de l'Interopérabilité des Données.
Nous rencontrons un problème majeur d'encodage lors de l'export / import CSV :
- Symptôme : [SYMPTOME] (Les caractères arabes ou les accents français apparaissent sous forme de symboles illisibles type "Ø§Ù„Ø¹Ø±Ø¨ÙŠØ©" ou "Ã©" dans Excel sur Windows)
- Outil qui génère le CSV : [GENERATEUR] (Script Python, Node.js, export d'application web)

Donne les solutions définitives :
1. Explication de la cause technique : Pourquoi Excel sur Windows requiert la signature BOM (Byte Order Mark : \uFEFF) au début d'un fichier UTF-8 pour le reconnaître correctement.
2. Snippet de code en [LANGAGE] pour injecter le préfixe UTF-8 BOM lors de la génération du CSV.
3. La procédure sans code pour un utilisateur lambda ouvrant un fichier corrompu (Données > À partir d'un fichier texte/CSV > Sélection UTF-8).
4. Recommandation sur le délimiteur standard (virgule vs point-virgule selon les paramètres régionaux européens).`,
    prompt_ar: `أنت مهندس أنظمة وخبير في تكامل البيانات وتوافق اللغات:
نواجه مشكلة تشوه النصوص واللغة العربية أو الأحرف الفرنسية عند فتح ملف CSV في إكسل:
- المظهر: تظهر الكلمات العربية كرموز غريبة ومشوهة ("Ø§Ù„Ø¹Ø±Ø¨ÙŠØ©") في إكسل بنظام ويندوز.
- أداة توليد الملف: [الأداة] (تطبيق ويب، بايثون، أو نظام سحابي)

الحلول الجذرية والنهائية:
1. التفسير التقني للمشكلة: لماذا يشترط إكسل ويندوز وجود توقيع (Byte Order Mark - UTF-8 BOM: \uFEFF) في أول الملف ليتعرف على الحروف العربية تلقائياً.
2. كود برمجي بلغة [اللغة] لإضافة كود الـ BOM تلقائياً عند حفظ وتصدير الملف.
3. طريقة فتح الملف المشوه في إكسل يدوياً دون أكواد (من تبويب: بيانات -> استيراد من ملف نصي/CSV -> واختيار ترميز 65001: Unicode UTF-8).
4. ضبط الفواصل المعيارية (الفاصلة المنقوطة أو العادية) لفتح الجدول في أعمدة منظمة فوراً.`,
    level: 'debutant',
    ai_compatibility: ['ChatGPT', 'Claude', 'Cursor', 'Gemini'],
    tags: ['utf-8', 'bom', 'csv', 'encoding', 'excel', 'arabic characters']
  },

  // ==========================================
  // CATÉGORIE 15 : RÉSEAUX SOCIAUX (15 prompts)
  // ==========================================
  {
    id: 'pml-soc-01',
    slash: '/soc-content-calendar-30d',
    title_fr: 'Architecte Calendrier Éditorial Réseaux Sociaux (30 Jours)',
    title_ar: 'بناء الخطة والمحتوى التحريري لشبكات التواصل الاجتماعي لمدة 30 يوماً',
    category_id: 'social-media',
    category_fr: 'Réseaux sociaux',
    category_ar: 'شبكات التواصل وصناعة المحتوى',
    function_fr: 'Créer un calendrier équilibré sur 1 mois alternant éducation, divertissement, autorité et vente',
    function_ar: 'جدولة محتوى شهري متكامل يوازن بين الإفادة، التفاعل، وبناء الثقة والمبيعات',
    prompt_fr: `Tu es un Social Media Strategist de renom.
Construis le calendrier éditorial complet de 30 jours pour :
- Marque ou Créateur : [MARQUE]
- Plateformes prioritaires : [PLATEFORMES] (LinkedIn, Instagram, TikTok, X)
- Objectif majeur du mois : [OBJECTIF] (Croissance d'audience, lancement d'une offre, engagement communautaire)

Applique la matrice des 4 piliers de contenu (4 E : Éduquer, Émouvoir/Inspirer, Engager, Échanger/Vendre) :
1. Grille hebdomadaire avec répartition des thématiques par jour.
2. Pour chacun des 30 jours : Le format recommandé (Carrousel, Reel court, Thread, Post texte), l'idée d'accroche (Hook) et le CTA associé.
3. Les 4 temps forts promotionnels du mois subtilement distillés.`,
    prompt_ar: `أنت خبير استراتيجي في إدارة وتنمية حسابات التواصل الاجتماعي:
صمم خطة وجدول المحتوى لشهر كامل (30 يوماً) لـ:
- العلامة أو صانع المحتوى: [العلامة]
- المنصات الأساسية: [المنصات] (إنستغرام، لينكدإن، إكس، تيك توك)
- الهدف الأساسي للشهر: [الهدف] (زيادة المتابعين، بناء مجتمع متفاعل، مبيعات منتج)

تطبيق مصفوفة أركان المحتوى الأربعة (التعليم، الإلهام، التفاعل، والترويج):
1. التقسيم الأسبوعي وتوزيع وتناغم المحتوى على مدار أيام الأسبوع.
2. تفصيل كل يوم من الـ 30 يوماً: نوع المنشور (فيديو، كاروسيل، تغريدة)، فكرة الجملة الافتتاحية (Hook)، والدعوة للتفاعل (CTA).
3. التوزيع الذكي لأيام الترويج البيعي لضمان عدم نفور المتابعين.`,
    level: 'intermediaire',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['content calendar', 'social media', 'instagram', 'linkedin', 'planning']
  },
  {
    id: 'pml-soc-02',
    slash: '/soc-x-thread-viral',
    title_fr: 'Rédacteur Thread Twitter / X Viral & Éducatif',
    title_ar: 'كتابة سلاسل التغريدات التعليمية واسعة الانتشار Threads على منصة X',
    category_id: 'social-media',
    category_fr: 'Réseaux sociaux',
    category_ar: 'شبكات التواصل وصناعة المحتوى',
    function_fr: 'Rédiger une suite de 8 à 10 tweets percutants qui génère des milliers de retweets et signets',
    function_ar: 'صياغة ثريد احترافي يوقف التمرير ويحصد آلاف الإعادات والحفظ في المفضلة',
    prompt_fr: `Tu es un Créateur X / Twitter ayant généré des millions d'impressions.
Rédige un Thread de 8 à 10 tweets captivant sur le sujet :
- Sujet du thread : [SUJET]
- Cible : [CIBLE]
- Ressource ou offre promue dans le tweet final : [PROMO]

Directives de viralité :
1. Tweet 1 (Le Hook absolu) : Promesse forte, curiosité ou chiffre impressionnant + icône déroulante incitant à lire la suite.
2. Tweets 2 à 8 : Chaque tweet est une pépite autonome condensée (1 idée maîtresse par tweet, aération maximale, pas de jargon).
3. Tweet 9 : Synthèse mémorable ou TL;DR des enseignements.
4. Tweet 10 : Appel à l'action clair (Retweeter le tweet 1 pour partager, et suivre le compte ou s'inscrire à la newsletter).`,
    prompt_ar: `أنت صانع محتوى متميز على منصة X حقق ملايين المشاهدات:
اكتب سلسلة تغريدات (Thread) من 8 إلى 10 تغريدات حول:
- موضوع السلسلة: [الموضوع]
- الجمهور المستهدف: [الجمهور]
- الرابط أو الحساب المروج له في الختام: [الرابط]

معايير الانتشار الفيروسي:
1. التغريدة الأولى (الخطاف الأقوى): وعد صريح بقيمة ملموسة أو معلومة غير مألوفة تدفع لفتح الثريد.
2. التغريدات من 2 إلى 8: كل تغريدة تقدم معلومة مركزة قائمة بذاتها ومنسقة بشكل مريح للقراءة.
3. التغريدة التاسعة: خلاصة مكثفة لأهم الدروس والنقاط.
4. التغريدة الأخيرة: دعوة لمشاركة التغريدة الأولى والمتابعة.`,
    level: 'debutant',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['twitter thread', 'x thread', 'viral content', 'copywriting', 'audience growth']
  },
  {
    id: 'pml-soc-03',
    slash: '/soc-instagram-carousel-slides',
    title_fr: 'Scénariste Carrousel Instagram à Forte Sauvegarde',
    title_ar: 'تصميم محتوى الكاروسيل التعليمي على إنستغرام لزيادة الحفظ والمشاركة',
    category_id: 'social-media',
    category_fr: 'Réseaux sociaux',
    category_ar: 'شبكات التواصل وصناعة المحتوى',
    function_fr: 'Rédiger le contenu diapositive par diapositive d’un carrousel de 8 slides maximisant les signets',
    function_ar: 'تأليف شرائح الكاروسيل الثمانية لإجبار المتابعين على حفظ المنشور والرجوع إليه',
    prompt_fr: `Rédige le contenu textuel complet d'un Carrousel Instagram de 8 diapositives pour :
- Thème du carrousel : [THEME]
- Compte / Marque : [MARQUE]

Contenu diapositive par diapositive :
1. Slide 1 (Couverture) : Titre choc et sous-titre prometteur donnant envie de balayer vers la gauche (Swipe).
2. Slide 2 : Le problème classique ou le mythe que tout le monde croit à tort.
3. Slides 3 à 6 : La solution en 4 étapes pratiques et immédiatement applicables.
4. Slide 7 : Récapitulatif visuel sous forme de mémo à garder.
5. Slide 8 (Clôture) : "Sauvegarde ce post pour plus tard" + question d'engagement pour les commentaires.
Inclus la légende (Caption) du post et 15 hashtags nichés.`,
    prompt_ar: `اكتب المحتوى الكامل لمنشور كاروسيل إنستغرام (8 شرائح) لـ:
- موضوع الكاروسيل: [الموضوع]
- اسم الحساب أو المجال: [المجال]

محتوى الشرائح الثمانية:
1. الشريحة 1 (الغلاف): عنوان رئيسي جذاب ووعد تعليمي يحفز السحب لليسار (Swipe).
2. الشريحة 2: نقد الفكرة الشائعة الخاطئة وتوضيح خطورتها.
3. الشرائح 3 إلى 6: خطوات الحل العملي في 4 مراحل تطبيقية واضحة ومباشرة.
4. الشريحة 7: ملخص بصري سريع للمعلومات ليكون مرجعاً للمتابع.
5. الشريحة 8 (الختام): تذكير صريح بـ "احفظ المنشور للرجوع إليه لاحقاً" وسؤال لزيادة التعليقات.
مع كتابة نص وصف المنشور (Caption) والوسوم الـ 15 الأكثر فاعلية.`,
    level: 'debutant',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['instagram carousel', 'content creation', 'instagram growth', 'social media', 'saves']
  },
  {
    id: 'pml-soc-04',
    slash: '/soc-community-crisis-reply',
    title_fr: 'Gestionnaire de Crise Bad Buzz & Modération Communauté',
    title_ar: 'إدارة أزمات السمعة الرقمية والرد على الهجوم الجماعي Bad Buzz',
    category_id: 'social-media',
    category_fr: 'Réseaux sociaux',
    category_ar: 'شبكات التواصل وصناعة المحتوى',
    function_fr: 'Désamorcer une vague de commentaires négatifs sur les réseaux sans attiser l’incendie',
    function_ar: 'السيطرة على موجات الغضب والانتقادات الحادة بحكمة ودبلوماسية لإطفاء الأزمة',
    prompt_fr: `Tu es un Directeur de la Réputation en Ligne et Community Manager Senior.
Notre marque fait face à un début de bad buzz sur les réseaux sociaux :
- Objet de la controverse : [CONTROVERSE]
- Plateformes où le feu prend : [PLATEFORMES]
- Ton des commentaires : Agressif, moqueur ou outré

Stratégie de désamorçage immédiate :
1. Règle absolue des premières heures : ce qu'il ne faut JAMAIS faire (Supprimer les commentaires légitimes, bloquer agressivement, répondre sur la défensive).
2. Le message public officiel court et apaisant à épingler en tête des publications.
3. 3 modèles de réponses personnalisées aux internautes en public pour montrer notre écoute et inviter à un échange constructif en messagerie privée (DM).
4. Détection des trolls malveillants purs et protocole de modération chirurgicale.`,
    prompt_ar: `بصفتك مديراً محترفاً لإدارة السمعة الرقمية والمجتمعات الافتراضية:
تواجه علامتنا التجارية حملة انتقادات وهجوماً على منصات التواصل (Bad Buzz):
- موضوع الانتقاد أو الخطأ: [الموضوع]
- المنصات المشتعلة: [المنصات]
- طبيعة التعليقات: غاضبة، ساخرة، ومستاءة

خطة التهدئة والاحتواء:
1. محاذير الساعات الأولى: ما يمنع فعله تماماً (حذف التعليقات المشروعة، الحظر الجماعي، أو الردود الانفعالية).
2. البيان الرسمي القصير والمهدئ لتثبيته في أعلى الحسابات.
3. 3 نماذج ردود لبقة للرد على المعلقين علناً لبيان الاحترام ودعوتهم للتواصل في الخاص لحل مشكلاتهم.
4. طريقة فرز الحسابات الوهمية والمسيئة والتعامل معها بحزم وفق سياسة النشر.`,
    level: 'intermediaire',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['community management', 'bad buzz', 'crisis moderation', 'reputation', 'public relations']
  },
  {
    id: 'pml-soc-05',
    slash: '/soc-viral-hook-generator',
    title_fr: 'Générateur de 20 Crochets Viraux (Hooks) Tout Réseau',
    title_ar: 'توليد 20 خطافاً افتتاحياً ساحراً لجذب الانتباه في الثواني الأولى Hooks',
    category_id: 'social-media',
    category_fr: 'Réseaux sociaux',
    category_ar: 'شبكات التواصل وصناعة المحتوى',
    function_fr: 'Créer 20 premières lignes irrésistibles multipliant par 5 le temps de lecture',
    function_ar: 'ابتكار 20 جملة افتتاحية توقف التمرير وتضاعف نسب المشاهدة والتفاعل',
    prompt_fr: `Génère 20 formules d'accroche (Hooks) virales pour le sujet suivant :
- Sujet du contenu : [SUJET]
- Cible : [CIBLE]

Répartis les 20 hooks en 5 catégories psychologiques :
1. Catégorie Contre-intuitif / Choc (ex: "Arrêtez de faire X si vous voulez Y").
2. Catégorie Curiosité irrésistible (ex: "La méthode secrète que 99% des gens ignorent sur...").
3. Catégorie Storytelling émotionnel (ex: "Il y a 3 ans, j'étais ruiné. Hier, j'ai...").
4. Catégorie Chiffres et Preuves (ex: "J'ai testé 100 outils pendant 30 jours. Voici les 3 seuls qui...").
5. Catégorie Peur de l'erreur / Avertissement (ex: "Si vous faites encore cette erreur en 2024...").`,
    prompt_ar: `قم بإنشاء 20 خطافاً افتتاحياً جذاباً (Hooks) للمحتوى التالي:
- موضوع المحتوى: [الموضوع]
- الجمهور المستهدف: [الجمهور]

توزيع الخطافات العشرين في 5 أساليب نفسية:
1. أسلوب الصدمة ومخالفة السائد (مثال: "توقف فوراً عن فعل X إذا كنت تريد تحقيق Y").
2. أسلوب الفضول الإنساني (مثال: "السر البسيط الذي لا يتحدث عنه 99% من الخبراء في...").
3. أسلوب القصة الملهمة (مثال: "قبل عامين كنت أعاني من... واليوم تغير كل شيء").
4. أسلوب الأرقام والتجارب الواقعية (مثال: "قمت باختبار 50 طريقة طوال شهرين، وإليك أهم 3 نتائج").
5. أسلوب التحذير من الخطأ (مثال: "أكبر خطأ يقع فيه المبتدئون ويكلفهم الكثير").`,
    level: 'debutant',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['hooks', 'viral copywriting', 'headlines', 'social media', 'attention']
  },
  {
    id: 'pml-soc-06',
    slash: '/soc-ugc-creator-script',
    title_fr: 'Scénariste Vidéos UGC Authentiques pour Marques',
    title_ar: 'كتابة إعلانات المحتوى العفوي المصور UGC لصالح المتاجر',
    category_id: 'social-media',
    category_fr: 'Réseaux sociaux',
    category_ar: 'شبكات التواصل وصناعة المحتوى',
    function_fr: 'Rédiger le script d’une vidéo tournée au smartphone qui ne ressemble pas à une pub',
    function_ar: 'صياغة سيناريو إعلان مصور بكاميرا الجوال يبدو كتوصية حقيقية غير مدفوعة',
    prompt_fr: `Tu es un Créateur UGC professionnel et Média Buyer.
Rédige le script d'une vidéo de 40 secondes pour :
- Produit : [PRODUIT]
- Problème résolu : [PROBLEME]
- Ambiance : Tourné au smartphone chez soi, style FaceTime ultra-naturel

Script détaillé en 5 temps forts :
1. 0-3 sec (Hook) : Démonstration visuelle immédiate du problème ("Ne me dites pas que vous faites encore ça...").
2. 4-12 sec : L'échec des anciennes solutions que tout le monde utilise.
3. 13-25 sec : La découverte du produit, unboxing rapide et démonstration de son utilisation facile.
4. 26-34 sec : Les résultats stupéfiants visibles immédiatement.
5. 35-40 sec (Call to Action) : "Profitez de l'offre avant rupture de stock en cliquant sur le lien ci-dessous".`,
    prompt_ar: `أنت صانع محتوى إعلاني عفوي (UGC Creator) محترف:
اكتب سيناريو إعلان فيديو لمدة 40 ثانية لـ:
- المنتج: [المنتج]
- المشكلة التي يحلها: [المشكلة]
- الطابع: تصوير شخصي بالجوال في المنزل بأسلوب عفوي ومقنع

توزيع المشاهد بالثواني:
1. الثواني 0 إلى 3 (الخطاف): مشهد يظهر المشكلة المزعجة بوضوح وتعبير وجه عفوي.
2. الثواني 4 إلى 12: استعراض كيف فشلت المنتجات المعتادة في حل المشكلة.
3. الثواني 13 إلى 25: تجربة المنتج واستعراض سهولة وسرعة استخدامه.
4. الثواني 26 إلى 34: إظهار النتيجة المبهرة والفارق الملموس أمام الكاميرا.
5. الثواني 35 إلى 40 (الدعوة للطلب): حث المتابع على الاستفادة من العرض قبل نفاد الكمية عبر الرابط.`,
    level: 'debutant',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['ugc', 'tiktok ads', 'user generated content', 'reels', 'ecommerce']
  },
  {
    id: 'pml-soc-07',
    slash: '/soc-community-poll-quiz',
    title_fr: 'Concepteur Sondages & Quiz d’Engagement Stories',
    title_ar: 'تصميم استطلاعات الرأي والمسابقات التفاعلية في الستوري Stories',
    category_id: 'social-media',
    category_fr: 'Réseaux sociaux',
    category_ar: 'شبكات التواصل وصناعة المحتوى',
    function_fr: 'Créer une séquence de 4 stories interactives générant un taux de réponse record',
    function_ar: 'بناء سلسلة قصص تفاعلية تضاعف التفاعل وتفتح محادثات مباشرة مع المتابعين',
    prompt_fr: `Conçois une séquence de 4 Stories interactives pour :
- Thème : [THEME]
- Objectif : Qualifier l'intérêt de la communauté et déclencher des conversations en messages privés (DM)

Structure de la séquence de Stories :
1. Story 1 : Sticker de sondage binaire tranché (Choix A vs Choix B) créant un débat passionné.
2. Story 2 : Sticker curseur émotionnel ou quiz avec révélation de la vérité contre-intuitive.
3. Story 3 : Sticker boîte à questions ouverte pour récolter les avis de l'audience.
4. Story 4 : Révélation d'une solution exclusive et consigne : "Envoie-moi le mot [MOT_CLE] en message privé pour recevoir le lien direct".`,
    prompt_ar: `صمم سلسلة من 4 قصص (Stories) تفاعلية مشوقة لـ:
- موضوع المحتوى: [الموضوع]
- الهدف: قياس اهتمام المتابعين وتحفيزهم على إرسال رسائل خاصة (DMs)

هيكل القصص الأربع:
1. القصة 1: ملصق تصويت حاسم (خيار أ مقابل خيار ب) يثير نقاشاً ساخناً.
2. القصة 2: ملصق اختبار (Quiz) يكشف معلومة صادمة غير متوقعة.
3. القصة 3: ملصق صندوق الأسئلة المفتوح لجمع تجارب وآراء الجمهور.
4. القصة 4: تقديم الحل الحصري وتوجيه المتابع: "أرسل كلمة [كلمة_سرية] في الخاص لإرسال الدليل المجاني".`,
    level: 'debutant',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['instagram stories', 'polls', 'engagement', 'interactive content', 'dms']
  },
  {
    id: 'pml-soc-08',
    slash: '/soc-youtube-community-tab',
    title_fr: 'Rédacteur Posts Onglet Communauté YouTube',
    title_ar: 'صناعة منشورات تبويب المنتدى التفاعلية على يوتيوب Community Posts',
    category_id: 'social-media',
    category_fr: 'Réseaux sociaux',
    category_ar: 'شبكات التواصل وصناعة المحتوى',
    function_fr: 'Maintenir l’algorithme YouTube actif entre deux publications vidéo majeures',
    function_ar: 'تنشيط خوارزميات القناة وزيادة وصول التفاعل بين فترات نشر الفيديوهات الكبرى',
    prompt_fr: `Tu es un Expert Croissance de Chaîne YouTube.
Rédige 3 types de publications percutantes pour l'onglet Communauté de la chaîne :
- Thématique de la chaîne : [THEMATIQUE]
- Prochaine vidéo en préparation : [PROCHAINE_VIDEO]

Rédige les 3 posts :
1. Post Sondage à 4 choix pour faire voter la communauté sur un détail ou un sujet de future vidéo.
2. Post "Les Coulisses" (Behind the scenes) avec image teasée et anecdote de tournage engageante.
3. Post Débat / Déclaration piquante suscitant plus de 50 commentaires sous la publication.`,
    prompt_ar: `بصفتك مستشاراً في نمو قنوات اليوتيوب وخوارزميات التوصية:
اكتب 3 منشورات تفاعلية لتبويب المنتدى (Community Tab) لـ:
- تخصص القناة: [المجال]
- الفيديو القادم قيد المونتاج: [الفيديو]

المنشورات الثلاثة:
1. منشور استطلاع رأي بأربعة خيارات لإشراك المشاهدين في اختيار عنوان أو موضوع قادم.
2. منشور كواليس (Behind the scenes) يشارك صورة عفوية مع قصة قصيرة مشوقة.
3. منشور نقاش مفتوح يطرح قضية جدلية تثير تفاعل المشتركين وتدفعهم لكتابة التعليقات.`,
    level: 'debutant',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['youtube community', 'youtube growth', 'polls', 'subscriber engagement']
  },
  {
    id: 'pml-soc-09',
    slash: '/soc-hashtag-strategy-niche',
    title_fr: 'Stratège Hashtags Nichés & Indexation Algorithmique',
    title_ar: 'استراتيجية الهاشتاقات المتخصصة وأرشفة المحتوى في محركات البحث الاجتماعية',
    category_id: 'social-media',
    category_fr: 'Réseaux sociaux',
    category_ar: 'شبكات التواصل وصناعة المحتوى',
    function_fr: 'Bâtir une sélection de 20 hashtags équilibrés pour être référencé dans les tops posts',
    function_ar: 'انتقاء وسوم ذكية متدرجة التنافسية تضمن ظهور منشوراتك في الصفحة الاستكشافية',
    prompt_fr: `Tu es un Spécialiste SEO Réseaux Sociaux et Découvrabilité.
Construis la sélection de 20 hashtags optimisée pour :
- Niche et sujet de la publication : [SUJET]
- Taille actuelle du compte : [TAILLE_COMPTE]

Applique la méthode de l'Échelle de Compétition :
1. 5 Hashtags de Grande Taille (> 500k publications) pour le signal de thématique générale.
2. 8 Hashtags de Taille Moyenne (50k à 500k publications) où le compte a de vraies chances de se positionner.
3. 5 Hashtags de Niche ultra-ciblés (< 50k publications) générant une communauté ultra-qualifiée.
4. 2 Hashtags de Marque ou de Campagne uniques.
Explique comment intégrer les mots-clés sémantiques dans la légende pour satisfaire les nouveaux moteurs de recherche TikTok et Instagram.`,
    prompt_ar: `أنت خبير في محركات البحث لمنصات التواصل الاجتماعي (Social SEO):
صمم استراتيجية الهاشتاقات لـ 20 وسماً مخصصاً لـ:
- موضوع وتخصص المنشور: [الموضوع]
- حجم الحساب الحالي: [الحجم]

تطبيق قاعدة تدرج المنافسة:
1. 5 وسوم عامة كبرى (أكثر من 500 ألف منشور) لتحديد التصنيف العريض للمحتوى.
2. 8 وسوم متوسطة الحجم (من 50 إلى 500 ألف منشور) تناسب حجم الحساب وتمنحه فرصة التصدر.
3. 5 وسوم متخصصة مركزة (أقل من 50 ألف منشور) تجذب جمهوراً مهتماً بالشراء بدقة.
4. وسمان مخصصان للعلامة التجارية والحملة.
مع شرح كيفية دمج الكلمات المفتاحية في نص المنشور لتعزيز ظهوره في محرك بحث تيك توك وإنستغرام.`,
    level: 'debutant',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['hashtags', 'instagram seo', 'social media', 'reach', 'discoverability']
  },
  {
    id: 'pml-soc-10',
    slash: '/soc-repurpose-omnichannel',
    title_fr: 'Recycleur de Contenu Omnicanal (1 Idée = 7 Formats)',
    title_ar: 'إعادة تدوير المحتوى وتحويل فكرة واحدة إلى 7 منصات Repurposing',
    category_id: 'social-media',
    category_fr: 'Réseaux sociaux',
    category_ar: 'شبكات التواصل وصناعة المحتوى',
    function_fr: 'Décliner une idée forte en vidéo courte, carrousel, thread, post LinkedIn et newsletter',
    function_ar: 'تحويل مقال أو فكرة مميزة إلى حزمة محتوى متكاملة تغطي كافة شبكات التواصل بكفاءة',
    prompt_fr: `Tu es un Directeur de Production de Contenu Omnicanal.
Prends l'idée ou le contenu source suivant :
[CONTENU_SOURCE]

Décline-le en 6 formats natifs adaptés à chaque plateforme :
1. Version Vidéo Courte (Script TikTok/Reels de 45 sec avec Hook et visuel).
2. Version Carrousel LinkedIn/Instagram (Plan de 6 slides concises).
3. Version Thread X / Twitter (6 tweets enchaînés percutants).
4. Version Post LinkedIn textuel orienté retour d'expérience professionnel.
5. Version Citation Image inspirante pour story.
6. Version Newsletter courte (1 anecdote + 3 leçons).`,
    prompt_ar: `بصفتك مديراً لإنتاج وتدوير المحتوى الرقمي المتعدد (Content Repurposing):
انطلاقاً من الفكرة أو النص الأساسي التالي:
[النص_الأصلي]

قم بتحويله وصياغته في 6 أشكال مخصصة للمنصات:
1. سيناريو فيديو قصير (TikTok/Reels في 45 ثانية مع الخطاف البصري).
2. محتوى كاروسيل لإنستغرام ولينكدإن (6 شرائح مركزة).
3. سلسلة تغريدات على منصة X (6 تغريدات قوية).
4. منشور لينكدإن رصين بأسلوب استخلاص الدروس المهنية.
5. اقتباس ملهم مصمم لقصص الستوري.
6. عدد نشرة بريدية موجز (قصة واقعية و3 نصائح عملية).`,
    level: 'intermediaire',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['content repurposing', 'omnichannel', 'efficiency', 'cross-platform', 'scale']
  },
  {
    id: 'pml-soc-11',
    slash: '/soc-collaborative-giveaway',
    title_fr: 'Concepteur Jeu-Concours Légal & Partenariat Viral',
    title_ar: 'تنظيم المسابقات التفاعلية المشتركة وزيادة المتابعين قانونياً Giveaway',
    category_id: 'social-media',
    category_fr: 'Réseaux sociaux',
    category_ar: 'شبكات التواصل وصناعة المحتوى',
    function_fr: 'Orchestrer un concours attirant de vrais clients potentiels plutôt que des chasseurs de cadeaux',
    function_ar: 'إدارة مسابقة تجارية جذابة تجلب عملاء حقيقيين مهتمين بالمنتج وتضمن الالتزام بالقوانين',
    prompt_fr: `Tu es un Spécialiste des Opérations de Croissance et Jeux-Concours.
Conçois l'opération de jeu-concours pour :
- Marque organisatrice et partenaire : [MARQUE]
- Lot mis en jeu : [LOT] (Doit attirer spécifiquement notre cible d'acheteurs)
- Plateforme : [PLATEFORME] (Instagram, TikTok)

Livrables de l'opération :
1. Les 3 règles simples de participation maximisant la viralité (ex: Suivre les 2 comptes, taguer 1 ami par commentaire, bonus de partage en story).
2. Texte complet du post officiel avec mentions légales obligatoires (Non affilié à Meta/TikTok, dates de début et fin, modalités de tirage au sort transparentes).
3. Stratégie pour convertir les participants non-gagnants à la fin du concours (Offre de consolation exclusive avec code promo valable 48h).`,
    prompt_ar: `أنت متخصص في حملات النمو والمسابقات الترويجية (Giveaways):
صمم مسابقة تفاعلية ناجحة لـ:
- العلامة التجارية والشريك: [العلامة]
- الجائزة المقدمة: [الجائزة] (يجب أن تكون مرتبطة بمنتجاتك لتجذب المهتمين الفعليين)
- المنصة المستهدفة: [المنصة]

محتويات الحملة:
1. شروط الاشتراك الثلاثة الذكية لنشر الحساب بسرعة (متابعة، الإشارة لصديق في التعليقات، ومشاركة القصة).
2. النص الكامل للمنشور متضمناً الإخلاء القانوني (توضيح عدم رعاية إنستغرام للمسابقة، تاريخ السحب، وطريقة الاختيار النزيهة).
3. استراتيجية كسب المشتركين الذين لم يفوزوا بعد انتهاء السحب (إرسال كود خصم خاص للمشاركين خلال 48 ساعة لتحويلهم لمشترين).`,
    level: 'debutant',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['giveaway', 'contest', 'viral growth', 'instagram contest', 'marketing']
  },
  {
    id: 'pml-soc-12',
    slash: '/soc-livestream-host-script',
    title_fr: 'Animateur Live Shopping & Émission en Direct',
    title_ar: 'إدارة وتقديم البث المباشر التفاعلي والبيع الحي Live Shopping',
    category_id: 'social-media',
    category_fr: 'Réseaux sociaux',
    category_ar: 'شبكات التواصل وصناعة المحتوى',
    function_fr: 'Guider une session live de 45 minutes maintenant l’audience captive et déclenchant des ventes',
    function_ar: 'توجيه وبناء سيناريو البث المباشر التفاعلي لبيع المنتجات والإجابة عن الأسئلة الحية',
    prompt_fr: `Tu es un Présentateur et Animateur d'Émissions en Direct et Live Shopping.
Rédige la trame chronologique d'un Live de 45 minutes pour :
- Marque et produits présentés : [PRODUITS]
- Offre exclusive réservée au direct : [OFFRE_LIVE]

Déroulé de la session :
1. Min 0 à 5 : Accueil chaleureux des premiers arrivants, salutation nominative, annonce du gros cadeau tiré au sort en fin d'émission pour retenir l'audience.
2. Min 6 à 20 : Démonstration sans filtre du produit phare et réponse aux premières questions du chat.
3. Min 21 à 35 : Déblocage de l'offre éclair limitée (Flash Sale) avec compte à rebours visuel.
4. Min 36 à 45 : Clôture énergique, tirage au sort du gagnant parmi les spectateurs actifs et remerciements chaleureux.`,
    prompt_ar: `أنت مقدم ومذيع برامج بث مباشر وبيع تفاعلي (Live Shopping Host):
اكتب مسار وتوجيهات جلسة بث مباشر مدتها 45 دقيقة لـ:
- المنتجات المعروضة: [المنتجات]
- العرض الحصري المتاح أثناء البث فقط: [العرض]

جدول سير البث بالدقائق:
1. الدقائق 0 إلى 5: الترحيب بالداخلين بالاسم، والتنويه بسحب على جائزة كبرى في الدقائق الأخيرة لإبقاء المشاهدين حتى النهاية.
2. الدقائق 6 إلى 20: استعراض المنتج عملياً وتجربته أمام الكاميرا والإجابة عن استفسارات التعليقات الحية.
3. الدقائق 21 إلى 35: إطلاق الخصم السريع الحصري مع إظهار نفاد الكمية لتحفيز الشراء الفوري.
4. الدقائق 36 إلى 45: ختام البث الحماسي وإجراء السحب للمتفاعلين وتقديم الشكر للجمهور.`,
    level: 'intermediaire',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['live shopping', 'livestream', 'tiktok live', 'sales', 'hosting']
  },
  {
    id: 'pml-soc-13',
    slash: '/soc-influencer-rate-card',
    title_fr: 'Négociateur Tarifs Sponsoring & Kit Média Influenceur',
    title_ar: 'إعداد الملف الإعلامي للمؤثرين وحساب أسعار الرعايات Media Kit',
    category_id: 'social-media',
    category_fr: 'Réseaux sociaux',
    category_ar: 'شبكات التواصل وصناعة المحتوى',
    function_fr: 'Fixer ses tarifs de collaboration de manière juste et professionnelle selon ses métriques',
    function_ar: 'تحديد أسعار الإعلانات والرعايات التجارية باحترافية بناءً على الأرقام الحقيقية للحساب',
    prompt_fr: `Tu es un Agent de Créateurs de Contenu et Négociateur Commercial.
Construis la grille tarifaire (Rate Card) et le Kit Média pour un créateur de contenu :
- Niche : [NICHE]
- Statistiques du compte : [METRIQUES] (Abonnés, vues moyennes par vidéo, taux d'engagement %)
- Plateforme principale : [PLATEFORME]

Livrables d'expertise commerciale :
1. Calcul des tarifs recommandés selon le marché (CPM moyen, coût par intégration dédiée vs mention courte).
2. Structure du Media Kit professionnel d'une page (Qui je suis, démographie de mon audience, marques partenaires passées, formats proposés).
3. 3 offres de packages avantageux (ex: Pack Découverte 1 Reel + 2 Stories vs Pack Domination 3 Vidéos + Droits de publicité 30 jours).
4. Template de réponse par email aux marques qui demandent des collaborations gratuites en échange de produits.`,
    prompt_ar: `بصفتك وكيلاً لصناع المحتوى ومفاوضاً تجارياً محترفاً:
قم بإعداد بطاقة الأسعار (Rate Card) والملف الإعلامي (Media Kit) لـ:
- مجال التخصص: [المجال]
- أرقام الحساب: [الأرقام] (عدد المتابعين، متوسط المشاهدات، نسبة التفاعل الحقيقية)
- المنصة الأساسية: [المنصة]

المطلوب:
1. تسعير الباقات الإعلانية وفق المعدلات السوقية المعتمدة (حساب تكلفة الألف مشاهدة CPM).
2. هيكل الملف التعريفي (Media Kit) في صفحة واحدة جذابة (الجمهور، أعمارهم، والاهتمامات).
3. تصميم 3 باقات رعاية متنوعة (باقة تجربة، وباقة حملة متكاملة تشمل حقوق الإعلان).
4. نموذج رد بريدي احترافي للاعتذار بلباقة عن العروض المجانية وتقديم عروض الأسعار الرسمية.`,
    level: 'intermediaire',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['media kit', 'rate card', 'influencer rates', 'sponsorship', 'creator economy']
  },
  {
    id: 'pml-soc-14',
    slash: '/soc-community-advocacy-army',
    title_fr: 'Bâtisseur de Communauté Fanatique (Superfans & Ambassadeurs)',
    title_ar: 'بناء مجتمع المناصرين والعملاء الأوفياء Superfans',
    category_id: 'social-media',
    category_fr: 'Réseaux sociaux',
    category_ar: 'شبكات التواصل وصناعة المحتوى',
    function_fr: 'Transformer des abonnés passifs en une communauté engagée qui défend votre marque',
    function_ar: 'تحويل المتابعين العاديين إلى مجتمع متماسك ومتحمس يدافع عن العلامة ويروج لها',
    prompt_fr: `Tu es un Expert en Psychologie des Communautés et Tribalisme de Marque.
Aide-nous à bâtir un noyau dur de Superfans pour :
- Marque / Projet : [PROJET]
- Espace communautaire : [ESPACE] (Discord, groupe WhatsApp VIP, canal Telegram, groupe privé Facebook)

Mets en place les 4 piliers d'appartenance :
1. Le Sentiment d'Exclusivité : Rituel d'initiation et accueil personnalisé de chaque nouveau membre.
2. Le Vocabulaire & Symboles partagés : Créer un nom affectueux pour la communauté et des private jokes / mèmes internes.
3. Les Privilèges Réservés : Accès anticipé aux produits, consultations privées pour co-créer les futures fonctionnalités.
4. Système de reconnaissance : Rôles hiérarchiques honorifiques récompensant les membres les plus aidants.`,
    prompt_ar: `أنت باحث في سيكولوجيا المجتمعات وبناء الولاء الجماعي للعلامات التجارية:
ساعدنا في بناء قاعدة جماهيرية مخلصة (Superfans) لـ:
- اسم المشروع أو العلامة: [المشروع]
- منصة التجمع المجتمعي: [المنصة] (مجموعة واتساب VIP، مجتمع ديسكورد، قناة تيليجرام)

أركان تعميق الانتماء الأربعة:
1. طابع الخصوصية والتميز: طقس ترحيبي مميز بكل عضو جديد يشعره بالتقدير.
2. الهوية اللغوية المشتركة: إطلاق اسم محبب على أعضاء المجتمع ورموز تعبيرية خاصة بهم.
3. الامتيازات الحصرية: تجربة المنتجات قبل طرحها بالأسواق والمشاركة في إبداء الرأي في القرارات.
4. التقدير المعنوي: منح شارات ورتب شرفية للأعضاء الأكثر مساعدة ومبادرة داخل المجموعة.`,
    level: 'intermediaire',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['community building', 'superfans', 'discord', 'brand loyalty', 'advocacy']
  },
  {
    id: 'pml-soc-15',
    slash: '/soc-analytics-audit-growth',
    title_fr: 'Auditeur Métriques Réseaux Sociaux & Diagnostic d’Algorithme',
    title_ar: 'تدقيق أرقام وتحليلات الحسابات واكتشاف أسباب الحظر الخفي Shadowban',
    category_id: 'social-media',
    category_fr: 'Réseaux sociaux',
    category_ar: 'شبكات التواصل وصناعة المحتوى',
    function_fr: 'Analyser la chute de portée d’un compte et rétablir la visibilité algorithmique',
    function_ar: 'تشخيص أسباب تراجع المشاهدات وإعادة تنشيط الحسابات المتراجعة',
    prompt_fr: `Mon compte sur les réseaux sociaux subit une chute brutale de portée (Reach) :
- Plateforme : [PLATEFORME] (Instagram, TikTok, X, LinkedIn)
- Statistiques avant vs après la chute : [STATISTIQUES]
- Pratiques récentes : [PRATIQUES] (Changement de fréquence, utilisation de musique commerciale, hashtags répétés, suppression de posts)

Fournis le diagnostic complet et le protocole de relance :
1. Diagnostic de la cause réelle : Faux Shadowban (simple baisse de pertinence du contenu) vs Vrai Shadowban (pénalité de modération algorithmique pour non-respect des règles).
2. Audit des signaux de santé : Vérification du statut du compte dans les paramètres de recommandation de la plateforme.
3. Protocole de réinitialisation sur 7 jours pour regagner la confiance de l'algorithme.
4. Les 3 formats de contenus à privilégier immédiatement pour relancer l'engagement des abonnés existants.`,
    prompt_ar: `يعاني حسابي على منصات التواصل من هبوط حاد ومفاجئ في الوصول والمشاهدات:
- المنصة: [المنصة] (إنستغرام، تيك توك، إكس، لينكدإن)
- الأرقام قبل وبعد التراجع: [الأرقام]
- التغييرات التي طرأت مؤخراً: [التغييرات] (تغيير نوع المحتوى، تكرار نفس الهاشتاقات، حذف منشورات)

التشخيص الشامل وخطة استعادة الحساب:
1. تشخيص السبب الفعلي: التمييز بين ضعف جاذبية المحتوى وبين الحظر الخفي الحقيقي (Shadowban) بسبب مخالفة السياسات.
2. فحص حالة الحساب الرسمية وأهليته للتوصية في إعدادات المنصة.
3. بروتوكول التعافي لمدة أسبوع لاستعادة ثقة خوارزميات المنصة بالكامل.
4. أهم 3 أنواع محتوى تفاعلي يجب نشرها لإعادة إحياء تفاعل المتابعين القدامى فوراً.`,
    level: 'intermediaire',
    ai_compatibility: ['ChatGPT', 'Claude', 'Gemini'],
    tags: ['social media audit', 'shadowban', 'algorithm', 'analytics', 'reach']
  }
];
