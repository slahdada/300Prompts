import React, { useState, useEffect } from 'react';
import { X, Save, Plus, Sparkles, AlertCircle } from 'lucide-react';
import { PromptItem, PromptLevel, AIModelCompatibility, Language } from '../types/prompt';
import { CATEGORIES } from '../data/categories';

interface PromptFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (prompt: PromptItem) => void;
  initialPrompt?: PromptItem | null;
  language: Language;
}

const ALL_AI_MODELS: AIModelCompatibility[] = [
  'ChatGPT',
  'Gemini',
  'Claude',
  'Cursor',
  'Google AI Studio',
  'Antigravity',
  'DeepSeek',
  'Mistral',
  'Perplexity'
];

export const PromptFormModal: React.FC<PromptFormModalProps> = ({
  isOpen,
  onClose,
  onSave,
  initialPrompt,
  language
}) => {
  const isAr = language === 'ar';
  const isEditing = Boolean(initialPrompt);

  const [slash, setSlash] = useState(initialPrompt?.slash || '/');
  const [titleFr, setTitleFr] = useState(initialPrompt?.title_fr || '');
  const [titleAr, setTitleAr] = useState(initialPrompt?.title_ar || '');
  const [categoryId, setCategoryId] = useState(initialPrompt?.category_id || 'dev');
  const [functionFr, setFunctionFr] = useState(initialPrompt?.function_fr || '');
  const [functionAr, setFunctionAr] = useState(initialPrompt?.function_ar || '');
  const [promptFr, setPromptFr] = useState(initialPrompt?.prompt_fr || '');
  const [promptAr, setPromptAr] = useState(initialPrompt?.prompt_ar || '');
  const [level, setLevel] = useState<PromptLevel>(initialPrompt?.level || 'intermediaire');
  const [selectedAi, setSelectedAi] = useState<AIModelCompatibility[]>(
    initialPrompt?.ai_compatibility || ['ChatGPT', 'Gemini', 'Claude']
  );
  const [tagsStr, setTagsStr] = useState(initialPrompt?.tags?.join(', ') || '');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (initialPrompt) {
      setSlash(initialPrompt.slash);
      setTitleFr(initialPrompt.title_fr);
      setTitleAr(initialPrompt.title_ar);
      setCategoryId(initialPrompt.category_id);
      setFunctionFr(initialPrompt.function_fr);
      setFunctionAr(initialPrompt.function_ar);
      setPromptFr(initialPrompt.prompt_fr);
      setPromptAr(initialPrompt.prompt_ar);
      setLevel(initialPrompt.level);
      setSelectedAi(initialPrompt.ai_compatibility);
      setTagsStr(initialPrompt.tags.join(', '));
    } else {
      setSlash('/mon-prompt');
      setTitleFr('');
      setTitleAr('');
      setCategoryId('dev');
      setFunctionFr('');
      setFunctionAr('');
      setPromptFr('');
      setPromptAr('');
      setLevel('intermediaire');
      setSelectedAi(['ChatGPT', 'Gemini', 'Claude', 'Cursor']);
      setTagsStr('');
    }
    setError(null);
  }, [initialPrompt, isOpen]);

  const toggleAi = (model: AIModelCompatibility) => {
    if (selectedAi.includes(model)) {
      if (selectedAi.length > 1) {
        setSelectedAi(selectedAi.filter(m => m !== model));
      }
    } else {
      setSelectedAi([...selectedAi, model]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!slash.trim() || !slash.startsWith('/')) {
      setError(
        isAr
          ? 'يجب أن تبدأ الأوامر السريعة بالرمز / (مثال: /dev-test)'
          : 'La commande slash doit commencer par / (ex: /mon-prompt)'
      );
      return;
    }

    if (!titleFr.trim() && !titleAr.trim()) {
      setError(isAr ? 'يرجى إدخال عنوان للأمر' : 'Veuillez saisir un titre');
      return;
    }

    if (!promptFr.trim() && !promptAr.trim()) {
      setError(
        isAr
          ? 'يرجى إدخال نص الأمر بالفرنسية أو بالعربية'
          : 'Veuillez saisir le contenu du prompt en français ou en arabe'
      );
      return;
    }

    const catObj = CATEGORIES.find(c => c.id === categoryId) || CATEGORIES[0];

    const tags = tagsStr
      .split(/[,;]/)
      .map(t => t.trim().toLowerCase())
      .filter(Boolean);

    const savedPrompt: PromptItem = {
      id: initialPrompt?.id || `pml-custom-${Date.now()}`,
      slash: slash.trim(),
      title_fr: titleFr.trim() || titleAr.trim(),
      title_ar: titleAr.trim() || titleFr.trim(),
      category_id: catObj.id,
      category_fr: catObj.title_fr,
      category_ar: catObj.title_ar,
      function_fr: functionFr.trim() || titleFr.trim(),
      function_ar: functionAr.trim() || titleAr.trim(),
      prompt_fr: promptFr.trim() || promptAr.trim(),
      prompt_ar: promptAr.trim() || promptFr.trim(),
      level,
      ai_compatibility: selectedAi,
      tags: tags.length > 0 ? tags : [titleFr.toLowerCase()],
      custom: true,
      updated_at: new Date().toISOString()
    };

    onSave(savedPrompt);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 dark:bg-black/75 backdrop-blur-md overflow-y-auto animate-in fade-in">
      <div
        className="relative w-full max-w-2xl rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700/80 shadow-2xl overflow-hidden my-auto text-slate-900 dark:text-slate-100"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/60">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
              {isEditing
                ? isAr
                  ? 'تعديل الأمر'
                  : 'Modifier le prompt'
                : isAr
                ? 'إضافة أمر جديد'
                : 'Ajouter un nouveau prompt'}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-4 sm:p-6 space-y-4 max-h-[80vh] overflow-y-auto custom-scrollbar">
          {error && (
            <div className="flex items-center gap-2 p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-600 dark:text-rose-300 text-xs">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {/* Row 1: Slash + Category */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                {isAr ? 'الأمر السريع (Slash Command)' : 'Commande Slash'}
              </label>
              <input
                type="text"
                value={slash}
                onChange={e => setSlash(e.target.value)}
                placeholder="/mon-code"
                className="w-full px-3 py-2 text-xs font-mono rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 focus:border-indigo-500 focus:outline-none text-indigo-600 dark:text-indigo-300"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                {isAr ? 'التصنيف' : 'Catégorie'}
              </label>
              <select
                value={categoryId}
                onChange={e => setCategoryId(e.target.value)}
                className="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 focus:border-indigo-500 focus:outline-none text-slate-900 dark:text-slate-200"
              >
                {CATEGORIES.map(c => (
                  <option key={c.id} value={c.id}>
                    {c.number}. {isAr ? c.title_ar : c.title_fr}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Titles */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Titre (Français)
              </label>
              <input
                type="text"
                value={titleFr}
                onChange={e => setTitleFr(e.target.value)}
                placeholder="Ex: Architecte Clean Architecture"
                className="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 focus:border-indigo-500 focus:outline-none text-slate-900 dark:text-slate-200"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                العنوان (بالعربية)
              </label>
              <input
                type="text"
                dir="rtl"
                value={titleAr}
                onChange={e => setTitleAr(e.target.value)}
                placeholder="مثال: مهندس العمارة النظيفة"
                className="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 focus:border-indigo-500 focus:outline-none text-slate-900 dark:text-slate-200 font-tajawal text-right"
              />
            </div>
          </div>

          {/* Functions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Rôle / Fonction (Français)
              </label>
              <input
                type="text"
                value={functionFr}
                onChange={e => setFunctionFr(e.target.value)}
                placeholder="Brève description de la mission"
                className="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 focus:border-indigo-500 focus:outline-none text-slate-900 dark:text-slate-200"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                الدور / الوظيفة (بالعربية)
              </label>
              <input
                type="text"
                dir="rtl"
                value={functionAr}
                onChange={e => setFunctionAr(e.target.value)}
                placeholder="وصف مختصر لمهمة الأمر"
                className="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 focus:border-indigo-500 focus:outline-none text-slate-900 dark:text-slate-200 font-tajawal text-right"
              />
            </div>
          </div>

          {/* Prompt Texts with Variables instruction */}
          <div className="space-y-1">
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
              Prompt Français complet (Utilisez des crochets pour les variables : [PROJET], [OBJECTIF])
            </label>
            <textarea
              rows={4}
              value={promptFr}
              onChange={e => setPromptFr(e.target.value)}
              placeholder="Tu es un expert en... Conçois [PROJET] avec [TECHNO]..."
              className="w-full p-3 text-xs font-mono rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 focus:border-indigo-500 focus:outline-none text-slate-900 dark:text-slate-200"
            />
          </div>

          <div className="space-y-1">
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
              النص الكامل للأمر بالعربية (استخدم الأقواس للمتغيرات: [المشروع]، [الهدف])
            </label>
            <textarea
              rows={4}
              dir="rtl"
              value={promptAr}
              onChange={e => setPromptAr(e.target.value)}
              placeholder="أنت خبير محترف في... قم ببناء [المشروع] باستخدام [التقنية]..."
              className="w-full p-3 text-xs font-mono rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 focus:border-indigo-500 focus:outline-none text-slate-900 dark:text-slate-200 font-tajawal text-right"
            />
          </div>

          {/* Level & Tags */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                {isAr ? 'المستوى' : 'Niveau'}
              </label>
              <select
                value={level}
                onChange={e => setLevel(e.target.value as PromptLevel)}
                className="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 focus:border-indigo-500 focus:outline-none text-slate-900 dark:text-slate-200"
              >
                <option value="debutant">{isAr ? 'مبتدئ' : 'Débutant'}</option>
                <option value="intermediaire">{isAr ? 'متوسط' : 'Intermédiaire'}</option>
                <option value="expert">{isAr ? 'خبير' : 'Expert'}</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                {isAr ? 'الكلمات المفتاحية (مفصولة بفواصل)' : 'Mots-clés (séparés par virgules)'}
              </label>
              <input
                type="text"
                value={tagsStr}
                onChange={e => setTagsStr(e.target.value)}
                placeholder="architecture, react, ddd"
                className="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 focus:border-indigo-500 focus:outline-none text-slate-900 dark:text-slate-200"
              />
            </div>
          </div>

          {/* AI Compatibility Checkboxes */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
              {isAr ? 'توافق نماذج الذكاء الاصطناعي' : 'Compatibilité Modèles IA'}
            </label>
            <div className="flex flex-wrap gap-2">
              {ALL_AI_MODELS.map(model => {
                const isSelected = selectedAi.includes(model);
                return (
                  <button
                    key={model}
                    type="button"
                    onClick={() => toggleAi(model)}
                    className={`px-2.5 py-1 text-xs rounded-lg border transition-all ${
                      isSelected
                        ? 'bg-indigo-600/15 text-indigo-600 border-indigo-300 dark:bg-indigo-600/30 dark:text-indigo-300 dark:border-indigo-500/50 font-medium'
                        : 'bg-slate-100 text-slate-600 border-slate-200 dark:bg-slate-950 dark:text-slate-400 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                    }`}
                  >
                    {model}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Form Actions */}
          <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-medium text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              {isAr ? 'إلغاء' : 'Annuler'}
            </button>
            <button
              type="submit"
              className="flex items-center gap-1.5 px-5 py-2 rounded-xl text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white shadow-md shadow-indigo-600/30 transition-all hover:scale-105 active:scale-95"
            >
              <Save className="w-4 h-4" />
              <span>{isAr ? 'حفظ الأمر' : 'Enregistrer le prompt'}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
