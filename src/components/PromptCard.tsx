import React, { useState } from 'react';
import {
  Copy,
  Check,
  Bookmark,
  Sparkles,
  Sliders,
  ExternalLink,
  Bot
} from 'lucide-react';
import { PromptItem, Language } from '../types/prompt';
import { extractVariables } from '../utils/variableExtractor';

interface PromptCardProps {
  prompt: PromptItem;
  language: Language;
  onSelectPrompt: (prompt: PromptItem) => void;
  onCopyFr: (prompt: PromptItem, e: React.MouseEvent) => void;
  onCopyAr: (prompt: PromptItem, e: React.MouseEvent) => void;
  onToggleFavorite: (promptId: string, e: React.MouseEvent) => void;
  isFavorite: boolean;
}

export const PromptCard: React.FC<PromptCardProps> = ({
  prompt,
  language,
  onSelectPrompt,
  onCopyFr,
  onCopyAr,
  onToggleFavorite,
  isFavorite
}) => {
  const isAr = language === 'ar';
  const [copiedFr, setCopiedFr] = useState(false);
  const [copiedAr, setCopiedAr] = useState(false);

  // Extract variables count
  const variables = extractVariables(prompt.prompt_fr);
  const variableCount = variables.length;

  const handleCopyFrClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onCopyFr(prompt, e);
    setCopiedFr(true);
    setTimeout(() => setCopiedFr(false), 2000);
  };

  const handleCopyArClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onCopyAr(prompt, e);
    setCopiedAr(true);
    setTimeout(() => setCopiedAr(false), 2000);
  };

  const getLevelBadge = (level: string) => {
    switch (level) {
      case 'debutant':
        return {
          label_fr: 'Débutant',
          label_ar: 'مبتدئ',
          classes: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30'
        };
      case 'expert':
        return {
          label_fr: 'Expert',
          label_ar: 'خبير',
          classes: 'bg-purple-500/15 text-purple-400 border-purple-500/30'
        };
      default:
        return {
          label_fr: 'Intermédiaire',
          label_ar: 'متوسط',
          classes: 'bg-amber-500/15 text-amber-400 border-amber-500/30'
        };
    }
  };

  const levelInfo = getLevelBadge(prompt.level);

  return (
    <div
      onClick={() => onSelectPrompt(prompt)}
      className="group relative flex flex-col justify-between p-3.5 sm:p-5 rounded-2xl bg-white hover:bg-slate-50/90 dark:bg-slate-900/60 dark:hover:bg-slate-800/80 border border-slate-200 dark:border-slate-800 hover:border-indigo-400 dark:hover:border-indigo-500/50 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer text-start w-full min-w-0 max-w-full overflow-hidden"
    >
      <div>
        {/* Top Header: Slash Command + Level Badge + Favorite */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-1.5 flex-wrap min-w-0">
            <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded-lg bg-indigo-50 text-indigo-700 border border-indigo-200 dark:bg-indigo-500/15 dark:text-indigo-400 dark:border-indigo-500/30 group-hover:bg-indigo-100 dark:group-hover:bg-indigo-500/25 transition-colors break-all">
              {prompt.slash}
            </span>

            <span
              className={`text-[10px] font-medium px-2 py-0.5 rounded-md border ${levelInfo.classes}`}
            >
              {isAr ? levelInfo.label_ar : levelInfo.label_fr}
            </span>
          </div>

          <button
            onClick={e => onToggleFavorite(prompt.id, e)}
            className={`p-1.5 rounded-lg transition-all ${
              isFavorite
                ? 'text-amber-500 bg-amber-500/15'
                : 'text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
            title={isFavorite ? 'Retirer des favoris' : 'Ajouter aux favoris'}
          >
            <Bookmark className={`w-4 h-4 ${isFavorite ? 'fill-current' : ''}`} />
          </button>
        </div>

        {/* Title */}
        <h3 className="font-semibold text-slate-900 dark:text-slate-100 text-sm sm:text-base leading-snug line-clamp-2 mb-1.5 group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors">
          {isAr ? prompt.title_ar : prompt.title_fr}
        </h3>

        {/* Function / Subtitle */}
        <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed mb-3">
          {isAr ? prompt.function_ar : prompt.function_fr}
        </p>

        {/* Prompt snippet preview */}
        <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/60 font-mono text-[11px] text-slate-600 dark:text-slate-400 line-clamp-2 mb-3 select-none">
          {isAr ? prompt.prompt_ar.slice(0, 140) : prompt.prompt_fr.slice(0, 140)}...
        </div>
      </div>

      {/* Bottom Footer: Meta & Copy Buttons */}
      <div>
        {/* Compatibility and Variable badges */}
        <div className="flex items-center justify-between gap-1 mb-3 pt-2 border-t border-slate-200 dark:border-slate-800/70 text-[11px] text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-1.5 overflow-hidden">
            <Bot className="w-3.5 h-3.5 text-indigo-500 dark:text-indigo-400 shrink-0" />
            <span className="truncate max-w-[140px]">
              {prompt.ai_compatibility.slice(0, 2).join(', ')}
              {prompt.ai_compatibility.length > 2 ? ` +${prompt.ai_compatibility.length - 2}` : ''}
            </span>
          </div>

          {variableCount > 0 && (
            <span className="flex items-center gap-1 text-[10px] text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/80 px-2 py-0.5 rounded-md shrink-0">
              <Sliders className="w-3 h-3 text-cyan-600 dark:text-cyan-400" />
              <span>{variableCount} var</span>
            </span>
          )}
        </div>

        {/* Dual Quick Copy Buttons */}
        <div className="grid grid-cols-2 gap-2" onClick={e => e.stopPropagation()}>
          <button
            onClick={handleCopyFrClick}
            className={`flex items-center justify-center gap-1.5 py-1.5 px-2.5 rounded-xl text-xs font-semibold transition-all ${
              copiedFr
                ? 'bg-emerald-600 text-white'
                : 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-indigo-600/80 text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-700/60'
            }`}
            title="Copier le prompt en Français"
          >
            {copiedFr ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copiedFr ? (isAr ? 'تم النسخ' : 'Copié !') : 'Copier FR'}</span>
          </button>

          <button
            onClick={handleCopyArClick}
            className={`flex items-center justify-center gap-1.5 py-1.5 px-2.5 rounded-xl text-xs font-semibold transition-all ${
              copiedAr
                ? 'bg-emerald-600 text-white'
                : 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-indigo-600/80 text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-700/60'
            }`}
            title="نسخ الأمر بالعربية"
          >
            {copiedAr ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copiedAr ? (isAr ? 'تم النسخ' : 'Copié !') : 'نسخ AR'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
