import React from 'react';
import {
  Layers,
  Bookmark,
  History,
  Copy,
  FolderTree,
  Terminal,
  Zap,
  Bot,
  Sliders,
  ChevronRight,
  TrendingUp,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { PromptItem, CategoryInfo, Language, AppStats } from '../types/prompt';
import { CATEGORIES } from '../data/categories';
import { CategoryIcon } from './CategoryIcon';

interface DashboardViewProps {
  stats: AppStats;
  recentPrompts: PromptItem[];
  favoritePrompts: PromptItem[];
  language: Language;
  onSelectCategory: (categoryId: string) => void;
  onSelectPrompt: (prompt: PromptItem) => void;
  onExploreAll: () => void;
}

export const DashboardView: React.FC<DashboardViewProps> = ({
  stats,
  recentPrompts,
  favoritePrompts,
  language,
  onSelectCategory,
  onSelectPrompt,
  onExploreAll
}) => {
  const isAr = language === 'ar';

  return (
    <div className="space-y-4 sm:space-y-6 pb-12 w-full max-w-full overflow-hidden animate-in fade-in duration-200">
      {/* Hero Welcome Banner */}
      <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-r from-indigo-900/60 via-slate-900/80 to-purple-900/60 border border-indigo-500/30 p-4 sm:p-6 md:p-8 backdrop-blur-xl shadow-xl w-full max-w-full">
        <div className="absolute -right-10 -top-10 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-2xl space-y-2.5 sm:space-y-3">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 text-[11px] sm:text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 shrink-0" />
            <span className="truncate">
              {isAr
                ? '300 أمر احترافي متكامل ثنائي اللغة'
                : '300 prompts professionnels bilingues (FR / AR)'}
            </span>
          </div>

          <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight leading-tight">
            {isAr
              ? 'مكتبة الأوامر الاحترافية لنماذج الذكاء الاصطناعي'
              : 'La Bibliothèque Universelle de Prompts IA'}
          </h1>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {isAr
              ? 'أوامر عالية الدقة مع متغيرات قابلة للتخصيص الفوري متوافقة مع ChatGPT وGemini وClaude وCursor وAntigravity وGoogle AI Studio.'
              : 'Structurez, automatisez et accélérez vos projets grâce à des templates avec variables dynamiques conçus pour ChatGPT, Gemini, Claude, Cursor et Google AI Studio.'}
          </p>

          <div className="pt-2 flex items-center gap-2.5 sm:gap-3 flex-wrap">
            <button
              onClick={onExploreAll}
              className="flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs shadow-lg shadow-indigo-600/30 transition-all hover:scale-[1.02] active:scale-[0.98] shrink-0"
            >
              <span>{isAr ? 'استكشاف كافة الأوامر (300)' : 'Explorer les 300 prompts'}</span>
              <ArrowRight className={`w-4 h-4 shrink-0 ${isAr ? 'rotate-180' : ''}`} />
            </button>

            <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono truncate max-w-full">
              <Terminal className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
              <span className="truncate">/dev-arch-clean, /apps-pwa-offline...</span>
            </div>
          </div>
        </div>
      </div>

      {/* KPI Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 w-full">
        <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-lg">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium text-slate-400">
              {isAr ? 'إجمالي الأوامر' : 'Total Prompts'}
            </span>
            <div className="p-2 rounded-xl bg-indigo-500/15 text-indigo-400">
              <Layers className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl sm:text-3xl font-bold text-white font-mono">
            {stats.totalPrompts}
          </div>
          <div className="text-[11px] text-indigo-400 mt-1 flex items-center gap-1">
            <span>{isAr ? '20 تصنيف × 15 أمر' : '20 catégories × 15 prompts'}</span>
          </div>
        </div>

        <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-lg">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium text-slate-400">
              {isAr ? 'التصنيفات' : 'Catégories'}
            </span>
            <div className="p-2 rounded-xl bg-cyan-500/15 text-cyan-400">
              <FolderTree className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl sm:text-3xl font-bold text-white font-mono">
            {stats.totalCategories}
          </div>
          <div className="text-[11px] text-cyan-400 mt-1">
            {isAr ? 'تغطية شاملة لكافة المجالات' : 'Couverture multi-domaines'}
          </div>
        </div>

        <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-lg">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium text-slate-400">
              {isAr ? 'الأوامر المفضلة' : 'Favoris'}
            </span>
            <div className="p-2 rounded-xl bg-amber-500/15 text-amber-400">
              <Bookmark className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl sm:text-3xl font-bold text-white font-mono">
            {stats.favoriteCount}
          </div>
          <div className="text-[11px] text-amber-400 mt-1">
            {isAr ? 'أوامرك المحفوظة للوصول السريع' : 'Accès instantané'}
          </div>
        </div>

        <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-lg">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium text-slate-400">
              {isAr ? 'النسخ المنفذة' : 'Prompts copiés'}
            </span>
            <div className="p-2 rounded-xl bg-emerald-500/15 text-emerald-400">
              <Copy className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl sm:text-3xl font-bold text-white font-mono">
            {stats.copiedCount}
          </div>
          <div className="text-[11px] text-emerald-400 mt-1">
            {isAr ? 'جاهزة للاستعمال الفوري' : 'Prêts pour l’action'}
          </div>
        </div>
      </div>

      {/* Categories Grid (20 categories) */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-base sm:text-lg font-bold text-white">
              {isAr ? 'استعراض التصنيفات العشرين' : 'Les 20 Catégories Thématiques'}
            </h2>
            <p className="text-xs text-slate-400">
              {isAr
                ? 'كل تصنيف يحتوي على 15 أمراً متخصصاً مع متغيرات قابلة للتعديل'
                : 'Chaque catégorie contient 15 prompts d’élite avec variables interactives'}
            </p>
          </div>
          <button
            onClick={onExploreAll}
            className="text-xs text-indigo-400 hover:text-indigo-300 font-medium"
          >
            {isAr ? 'عرض الكل ←' : 'Tout afficher →'}
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3 w-full">
          {CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className="group p-3.5 sm:p-4 rounded-2xl bg-slate-900/70 hover:bg-slate-900 border border-slate-800 hover:border-indigo-500/50 shadow-md hover:shadow-indigo-500/10 transition-all text-start flex flex-col justify-between w-full min-w-0 max-w-full overflow-hidden"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center bg-gradient-to-tr ${cat.color_gradient} text-white shadow-sm group-hover:scale-105 transition-transform`}
                  >
                    <CategoryIcon name={cat.icon_name} className="w-4 h-4" />
                  </div>
                  <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded-lg bg-slate-800 text-slate-300">
                    15
                  </span>
                </div>

                <h3 className="font-semibold text-xs sm:text-sm text-slate-100 group-hover:text-indigo-300 transition-colors line-clamp-1 mb-1">
                  {cat.number}. {isAr ? cat.title_ar : cat.title_fr}
                </h3>

                <p className="text-[11px] text-slate-400 line-clamp-2 leading-relaxed">
                  {isAr ? cat.description_ar : cat.description_fr}
                </p>
              </div>

              <div className="pt-3 mt-2 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-indigo-400 group-hover:text-indigo-300">
                <span>{isAr ? 'عرض الأوامر' : 'Voir les prompts'}</span>
                <ChevronRight className={`w-3.5 h-3.5 group-hover:translate-x-1 transition-transform ${isAr ? 'rotate-180' : ''}`} />
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Recents and Favorites Feed */}
      {(recentPrompts.length > 0 || favoritePrompts.length > 0) && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Recently Used */}
          {recentPrompts.length > 0 && (
            <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
              <div className="flex items-center gap-2">
                <History className="w-4 h-4 text-indigo-400" />
                <h3 className="font-bold text-sm text-white">
                  {isAr ? 'المستخدمة مؤخراً' : 'Récemment utilisés'}
                </h3>
              </div>

              <div className="space-y-2">
                {recentPrompts.slice(0, 4).map(p => (
                  <div
                    key={p.id}
                    onClick={() => onSelectPrompt(p)}
                    className="p-3 rounded-xl bg-slate-950/60 hover:bg-slate-800/60 border border-slate-800/80 cursor-pointer flex items-center justify-between transition-colors"
                  >
                    <div className="min-w-0">
                      <span className="font-mono text-xs text-indigo-400 font-medium">
                        {p.slash}
                      </span>
                      <p className="text-xs text-slate-200 truncate">
                        {isAr ? p.title_ar : p.title_fr}
                      </p>
                    </div>
                    <ChevronRight className={`w-4 h-4 text-slate-500 shrink-0 ${isAr ? 'rotate-180' : ''}`} />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Favorites preview */}
          {favoritePrompts.length > 0 && (
            <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
              <div className="flex items-center gap-2">
                <Bookmark className="w-4 h-4 text-amber-400" />
                <h3 className="font-bold text-sm text-white">
                  {isAr ? 'المفضلة' : 'Prompts favoris'}
                </h3>
              </div>

              <div className="space-y-2">
                {favoritePrompts.slice(0, 4).map(p => (
                  <div
                    key={p.id}
                    onClick={() => onSelectPrompt(p)}
                    className="p-3 rounded-xl bg-slate-950/60 hover:bg-slate-800/60 border border-slate-800/80 cursor-pointer flex items-center justify-between transition-colors"
                  >
                    <div className="min-w-0">
                      <span className="font-mono text-xs text-amber-400 font-medium">
                        {p.slash}
                      </span>
                      <p className="text-xs text-slate-200 truncate">
                        {isAr ? p.title_ar : p.title_fr}
                      </p>
                    </div>
                    <ChevronRight className={`w-4 h-4 text-slate-500 shrink-0 ${isAr ? 'rotate-180' : ''}`} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
