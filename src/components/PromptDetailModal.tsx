import React, { useState, useMemo, useEffect } from 'react';
import {
  X,
  Copy,
  Check,
  Bookmark,
  Sparkles,
  Sliders,
  Edit,
  Trash2,
  Share2,
  Terminal,
  Bot,
  RotateCcw,
  CheckCheck,
  Maximize2,
  Minimize2,
  Palette
} from 'lucide-react';
import { PromptItem, Language } from '../types/prompt';
import { extractVariables, replaceVariables } from '../utils/variableExtractor';
import { IllustrationModal } from './IllustrationModal';

interface PromptDetailModalProps {
  prompt: PromptItem | null;
  isOpen: boolean;
  onClose: () => void;
  language: Language;
  onCopyFr: (text: string) => void;
  onCopyAr: (text: string) => void;
  onCopyBoth: (frText: string, arText: string) => void;
  onToggleFavorite: (id: string) => void;
  isFavorite: boolean;
  onEditPrompt: (prompt: PromptItem) => void;
  onDeletePrompt: (prompt: PromptItem) => void;
}

export const PromptDetailModal: React.FC<PromptDetailModalProps> = ({
  prompt,
  isOpen,
  onClose,
  language,
  onCopyFr,
  onCopyAr,
  onCopyBoth,
  onToggleFavorite,
  isFavorite,
  onEditPrompt,
  onDeletePrompt
}) => {
  const isAr = language === 'ar';
  const [activeTab, setActiveTab] = useState<'fr' | 'ar' | 'both'>('fr');
  const [variableValues, setVariableValues] = useState<Record<string, string>>({});
  const [copiedType, setCopiedType] = useState<string | null>(null);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [fontSize, setFontSize] = useState<'sm' | 'base' | 'lg'>('sm');
  const [illustrationModalOpen, setIllustrationModalOpen] = useState(false);
  const [illustrationImage, setIllustrationImage] = useState<string | null>(null);
  const [isIllustrating, setIsIllustrating] = useState(false);
  const [illustrationError, setIllustrationError] = useState<string | null>(null);

  const promptFr = prompt?.prompt_fr || '';
  const promptAr = prompt?.prompt_ar || '';

  // Extract variables from French and Arabic prompts
  const variablesFr = useMemo(() => extractVariables(promptFr), [promptFr]);
  const variablesAr = useMemo(() => extractVariables(promptAr), [promptAr]);

  // Combined unique variables for the interactive editor
  const allVariables = useMemo(() => {
    const list = [...variablesFr];
    for (const v of variablesAr) {
      if (!list.some(existing => existing.key === v.key)) {
        list.push(v);
      }
    }
    return list;
  }, [variablesFr, variablesAr]);

  // Current prompt texts with variables dynamically replaced
  const replacedFr = useMemo(
    () => replaceVariables(promptFr, variableValues),
    [promptFr, variableValues]
  );
  const replacedAr = useMemo(
    () => replaceVariables(promptAr, variableValues),
    [promptAr, variableValues]
  );

  const promptId = prompt?.id;
  useEffect(() => {
    setIllustrationImage(null);
    setIllustrationError(null);
    setIsIllustrating(false);
    setVariableValues({});
    setCopiedType(null);
  }, [promptId]);

  const handleVariableChange = (key: string, val: string) => {
    setVariableValues(prev => ({ ...prev, [key]: val }));
  };

  const handleResetVariables = () => {
    setVariableValues({});
  };

  const handleCopyAction = (type: 'fr' | 'ar' | 'both' | 'slash') => {
    if (!prompt) return;
    if (type === 'fr') {
      onCopyFr(replacedFr);
    } else if (type === 'ar') {
      onCopyAr(replacedAr);
    } else if (type === 'both') {
      onCopyBoth(replacedFr, replacedAr);
    } else if (type === 'slash') {
      navigator.clipboard.writeText(prompt.slash);
    }

    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  const fetchIllustration = async () => {
    if (!prompt) return;
    setIsIllustrating(true);
    setIllustrationError(null);

    try {
      const res = await fetch('/api/generate-illustration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title: prompt.title_fr,
          promptText: replacedFr || prompt.prompt_fr,
          category: prompt.category_fr,
          slash: prompt.slash
        })
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Erreur lors de la génération de l’illustration.');
      }

      setIllustrationImage(data.imageUrl);
    } catch (err: any) {
      console.error('Illustration generation error:', err);
      setIllustrationError(err.message || 'Une erreur est survenue lors de la génération.');
    } finally {
      setIsIllustrating(false);
    }
  };

  const handleIllustratePrompt = () => {
    setIllustrationModalOpen(true);
    if (!illustrationImage || illustrationError) {
      fetchIllustration();
    }
  };

  const getLevelLabel = (level: string) => {
    switch (level) {
      case 'debutant':
        return isAr ? 'مبتدئ' : 'Débutant';
      case 'expert':
        return isAr ? 'خبير' : 'Expert';
      default:
        return isAr ? 'متوسط' : 'Intermédiaire';
    }
  };

  if (!isOpen || !prompt) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div
        className={`relative w-full flex flex-col rounded-3xl bg-slate-900 border border-slate-700/80 shadow-2xl overflow-hidden my-auto text-slate-100 transition-all duration-300 ${
          isExpanded ? 'max-w-6xl max-h-[96vh] h-[94vh]' : 'max-w-4xl max-h-[92vh]'
        }`}
        onClick={e => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-slate-800 bg-slate-950/60">
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleCopyAction('slash')}
              className="group flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-indigo-500/15 hover:bg-indigo-500/25 text-indigo-400 border border-indigo-500/30 font-mono text-sm font-bold transition-all"
              title="Copier la commande Slash"
            >
              <Terminal className="w-4 h-4" />
              <span>{prompt.slash}</span>
              {copiedType === 'slash' ? (
                <Check className="w-3.5 h-3.5 text-emerald-400" />
              ) : (
                <Copy className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100" />
              )}
            </button>

            <span className="hidden sm:inline-block px-2.5 py-1 rounded-lg bg-slate-800 text-slate-300 text-xs font-medium border border-slate-700">
              {isAr ? prompt.category_ar : prompt.category_fr}
            </span>

            <span className="text-xs px-2.5 py-1 rounded-lg bg-indigo-950 text-indigo-300 border border-indigo-800 font-medium">
              {getLevelLabel(prompt.level)}
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={handleIllustratePrompt}
              className="p-2 text-purple-400 hover:text-purple-300 hover:bg-purple-500/15 rounded-xl transition-colors"
              title={isAr ? 'توليد صورة توضيحية بالذكاء الاصطناعي' : 'Illustrer ce prompt avec l’IA'}
            >
              <Palette className="w-5 h-5" />
            </button>

            <button
              onClick={() => setIsExpanded(prev => !prev)}
              className={`p-2 rounded-xl transition-all ${
                isExpanded
                  ? 'text-indigo-400 bg-indigo-500/15 border border-indigo-500/30'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
              title={
                isExpanded
                  ? isAr
                    ? 'تصغير الحجم'
                    : 'Réduire la vue'
                  : isAr
                  ? 'وضع القراءة الموسع (شاشة عريضة)'
                  : 'Mode Lecture élargi (Grand écran)'
              }
            >
              {isExpanded ? <Minimize2 className="w-5 h-5" /> : <Maximize2 className="w-5 h-5" />}
            </button>

            <button
              onClick={() => onToggleFavorite(prompt.id)}
              className={`p-2 rounded-xl transition-all ${
                isFavorite
                  ? 'text-amber-400 bg-amber-400/15'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
              title={isFavorite ? 'Retirer des favoris' : 'Ajouter aux favoris'}
            >
              <Bookmark className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`} />
            </button>

            <button
              onClick={() => onEditPrompt(prompt)}
              className="p-2 text-slate-400 hover:text-indigo-400 hover:bg-slate-800 rounded-xl transition-colors"
              title={isAr ? 'تعديل الأمر' : 'Modifier le prompt'}
            >
              <Edit className="w-5 h-5" />
            </button>

            <button
              onClick={() => onDeletePrompt(prompt)}
              className="p-2 text-slate-400 hover:text-rose-400 hover:bg-slate-800 rounded-xl transition-colors"
              title={isAr ? 'حذف الأمر' : 'Supprimer le prompt'}
            >
              <Trash2 className="w-5 h-5" />
            </button>

            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-colors ms-1"
              aria-label="Fermer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-5 custom-scrollbar">
          {/* Title and Function */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-2 leading-tight">
              {isAr ? prompt.title_ar : prompt.title_fr}
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              {isAr ? prompt.function_ar : prompt.function_fr}
            </p>
          </div>

          {/* AI Compatibility tags */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs text-slate-400 flex items-center gap-1 font-medium">
              <Bot className="w-4 h-4 text-indigo-400" />
              {isAr ? 'متوافق مع:' : 'Compatible avec :'}
            </span>
            {prompt.ai_compatibility.map(ai => (
              <span
                key={ai}
                className="text-xs px-2.5 py-0.5 rounded-md bg-slate-800 text-slate-300 border border-slate-700/80 font-medium"
              >
                {ai}
              </span>
            ))}
          </div>

          {/* Interactive Variable Filler Section */}
          {allVariables.length > 0 && (
            <div className="p-4 rounded-2xl bg-indigo-950/30 border border-indigo-500/20 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Sliders className="w-4 h-4 text-indigo-400" />
                  <span className="text-xs font-bold uppercase tracking-wider text-indigo-300">
                    {isAr
                      ? `تخصيص المتغيرات (${allVariables.length})`
                      : `Remplacer les variables (${allVariables.length})`}
                  </span>
                </div>
                {Object.values(variableValues).some(v => v.trim() !== '') && (
                  <button
                    onClick={handleResetVariables}
                    className="flex items-center gap-1 text-[11px] text-slate-400 hover:text-indigo-300 transition-colors"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>{isAr ? 'إعادة ضبط' : 'Réinitialiser'}</span>
                  </button>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {allVariables.map(v => (
                  <div key={v.key} className="space-y-1">
                    <label className="text-[11px] font-medium text-slate-300 flex items-center justify-between">
                      <span className="font-mono text-indigo-300">[{v.key}]</span>
                      <span className="text-slate-400 text-[10px]">{v.display}</span>
                    </label>
                    <input
                      type="text"
                      value={variableValues[v.key] || ''}
                      onChange={e => handleVariableChange(v.key, e.target.value)}
                      placeholder={isAr ? `أدخل قيمة [${v.key}]...` : `Valeur pour [${v.key}]...`}
                      className="w-full px-3 py-1.5 text-xs rounded-xl bg-slate-900/90 border border-slate-700 focus:border-indigo-500 focus:outline-none text-slate-100 placeholder:text-slate-400"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tabs: FR / AR / Bilingue */}
          <div className="space-y-3">
            <div className="flex items-center justify-between gap-2 border-b border-slate-800 pb-2">
              <div className="flex items-center gap-1 p-1 bg-slate-950/70 rounded-xl border border-slate-800">
                <button
                  onClick={() => setActiveTab('fr')}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                    activeTab === 'fr'
                      ? 'bg-indigo-600 text-white shadow'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Français
                </button>
                <button
                  onClick={() => setActiveTab('ar')}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                    activeTab === 'ar'
                      ? 'bg-indigo-600 text-white shadow'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  العربية
                </button>
                <button
                  onClick={() => setActiveTab('both')}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                    activeTab === 'both'
                      ? 'bg-indigo-600 text-white shadow'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {isAr ? 'كلا النسختين' : 'Bilingue'}
                </button>
              </div>

              <div className="flex items-center gap-3">
                {/* Font Size Adjuster for comfortable reading */}
                <div className="flex items-center gap-1 bg-slate-950/80 p-0.5 rounded-lg border border-slate-800 text-[11px] font-mono">
                  <button
                    onClick={() => setFontSize('sm')}
                    className={`px-1.5 py-0.5 rounded transition-colors ${
                      fontSize === 'sm' ? 'bg-indigo-600 text-white font-bold' : 'text-slate-400 hover:text-slate-200'
                    }`}
                    title="Police normale"
                  >
                    A
                  </button>
                  <button
                    onClick={() => setFontSize('base')}
                    className={`px-1.5 py-0.5 rounded transition-colors ${
                      fontSize === 'base' ? 'bg-indigo-600 text-white font-bold' : 'text-slate-400 hover:text-slate-200'
                    }`}
                    title="Police moyenne"
                  >
                    A+
                  </button>
                  <button
                    onClick={() => setFontSize('lg')}
                    className={`px-1.5 py-0.5 rounded transition-colors ${
                      fontSize === 'lg' ? 'bg-indigo-600 text-white font-bold' : 'text-slate-400 hover:text-slate-200'
                    }`}
                    title="Police large pour lecture confortable"
                  >
                    A++
                  </button>
                </div>

                <span className="text-[11px] text-slate-400 font-mono hidden sm:inline">
                  {activeTab === 'fr'
                    ? `${replacedFr.length} car.`
                    : activeTab === 'ar'
                    ? `${replacedAr.length} حرف`
                    : `${replacedFr.length + replacedAr.length} car.`}
                </span>
              </div>
            </div>

            {/* Prompt Content Preview Area */}
            {activeTab === 'fr' && (
              <div className="relative group">
                <pre
                  className={`p-4 rounded-2xl bg-slate-950 border border-slate-800 font-mono text-slate-200 whitespace-pre-wrap select-text overflow-x-auto custom-scrollbar transition-all ${
                    isExpanded ? 'max-h-[60vh]' : 'max-h-96'
                  } ${
                    fontSize === 'lg'
                      ? 'text-sm sm:text-base leading-relaxed'
                      : fontSize === 'base'
                      ? 'text-xs sm:text-sm leading-relaxed'
                      : 'text-xs leading-relaxed'
                  }`}
                >
                  {replacedFr}
                </pre>
              </div>
            )}

            {activeTab === 'ar' && (
              <div className="relative group">
                <pre
                  dir="rtl"
                  className={`p-4 rounded-2xl bg-slate-950 border border-slate-800 font-mono text-slate-200 whitespace-pre-wrap select-text overflow-x-auto custom-scrollbar font-tajawal text-right transition-all ${
                    isExpanded ? 'max-h-[60vh]' : 'max-h-96'
                  } ${
                    fontSize === 'lg'
                      ? 'text-sm sm:text-base leading-relaxed'
                      : fontSize === 'base'
                      ? 'text-xs sm:text-sm leading-relaxed'
                      : 'text-xs leading-relaxed'
                  }`}
                >
                  {replacedAr}
                </pre>
              </div>
            )}

            {activeTab === 'both' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <span className="text-[11px] font-semibold text-indigo-400 px-1">
                    Version Française
                  </span>
                  <pre
                    className={`p-3.5 rounded-2xl bg-slate-950 border border-slate-800 font-mono text-slate-200 whitespace-pre-wrap select-text overflow-x-auto custom-scrollbar transition-all ${
                      isExpanded ? 'max-h-[60vh]' : 'max-h-96'
                    } ${
                      fontSize === 'lg'
                        ? 'text-sm sm:text-base leading-relaxed'
                        : fontSize === 'base'
                        ? 'text-xs sm:text-sm leading-relaxed'
                        : 'text-xs leading-relaxed'
                    }`}
                  >
                    {replacedFr}
                  </pre>
                </div>
                <div className="space-y-1">
                  <span className="text-[11px] font-semibold text-emerald-400 px-1">
                    النسخة العربية
                  </span>
                  <pre
                    dir="rtl"
                    className={`p-3.5 rounded-2xl bg-slate-950 border border-slate-800 font-mono text-slate-200 whitespace-pre-wrap select-text overflow-x-auto custom-scrollbar font-tajawal text-right transition-all ${
                      isExpanded ? 'max-h-[60vh]' : 'max-h-96'
                    } ${
                      fontSize === 'lg'
                        ? 'text-sm sm:text-base leading-relaxed'
                        : fontSize === 'base'
                        ? 'text-xs sm:text-sm leading-relaxed'
                        : 'text-xs leading-relaxed'
                    }`}
                  >
                    {replacedAr}
                  </pre>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Modal Footer: Copy Action Buttons */}
        <div className="p-4 sm:p-5 border-t border-slate-800 bg-slate-950/90 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={() => handleCopyAction('fr')}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold shadow-md transition-all ${
                copiedType === 'fr'
                  ? 'bg-emerald-600 text-white'
                  : 'bg-indigo-600 hover:bg-indigo-500 text-white'
              }`}
            >
              {copiedType === 'fr' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              <span>{copiedType === 'fr' ? 'Prompt FR copié !' : 'Copier le prompt FR'}</span>
            </button>

            <button
              onClick={() => handleCopyAction('ar')}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold shadow-md transition-all ${
                copiedType === 'ar'
                  ? 'bg-emerald-600 text-white'
                  : 'bg-emerald-600 hover:bg-emerald-500 text-white'
              }`}
            >
              {copiedType === 'ar' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              <span>{copiedType === 'ar' ? 'تم نسخ الأمر بالعربية !' : 'نسخ الأمر بالعربية'}</span>
            </button>

            <button
              onClick={() => handleCopyAction('both')}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-medium border border-slate-700 bg-slate-800 hover:bg-slate-700 text-slate-200 transition-all ${
                copiedType === 'both' ? 'border-emerald-500 text-emerald-300' : ''
              }`}
            >
              <CheckCheck className="w-4 h-4" />
              <span>{isAr ? 'نسخ النسختين معاً' : 'Copier les deux versions'}</span>
            </button>

            {/* Illustrate Button */}
            <button
              onClick={handleIllustratePrompt}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-purple-600 via-indigo-600 to-indigo-500 hover:from-purple-500 hover:to-indigo-400 text-white shadow-md shadow-purple-600/25 transition-all hover:scale-[1.02] active:scale-95"
              title={isAr ? 'توليد صورة توضيحية ذكية لهذا الأمر' : 'Générer une image représentative avec l’IA'}
            >
              <Palette className="w-4 h-4 text-purple-200" />
              <span>{isAr ? 'تجسيد بالذكاء الاصطناعي' : 'Illustrer ce prompt'}</span>
            </button>
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-medium text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            {isAr ? 'إغلاق' : 'Fermer'}
          </button>
        </div>
      </div>

      {/* Illustration Preview Modal */}
      <IllustrationModal
        isOpen={illustrationModalOpen}
        onClose={() => setIllustrationModalOpen(false)}
        prompt={prompt}
        imageUrl={illustrationImage}
        isLoading={isIllustrating}
        error={illustrationError}
        onRegenerate={fetchIllustration}
        language={language}
      />
    </div>
  );
};
