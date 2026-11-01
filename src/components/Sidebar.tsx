import React from 'react';
import {
  LayoutDashboard,
  Layers,
  Bookmark,
  History,
  PlusCircle,
  FileSpreadsheet,
  RotateCcw,
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { CATEGORIES } from '../data/categories';
import { CategoryIcon } from './CategoryIcon';
import { Language, CategoryInfo } from '../types/prompt';

export type MainNavSection = 'dashboard' | 'prompts' | 'favorites' | 'recent';

interface SidebarProps {
  currentSection: MainNavSection;
  onSelectSection: (section: MainNavSection) => void;
  selectedCategory: string | null; // category_id or null for all
  onSelectCategory: (categoryId: string | null) => void;
  language: Language;
  totalPromptsCount: number;
  favoritesCount: number;
  recentCount: number;
  categoryPromptCounts: Record<string, number>;
  onOpenNewPrompt: () => void;
  onOpenExportImport: () => void;
  isOpenMobile: boolean;
  onCloseMobile: () => void;
  isReaderMode?: boolean;
}

export const Sidebar: React.FC<SidebarProps> = ({
  currentSection,
  onSelectSection,
  selectedCategory,
  onSelectCategory,
  language,
  totalPromptsCount,
  favoritesCount,
  recentCount,
  categoryPromptCounts,
  onOpenNewPrompt,
  onOpenExportImport,
  isOpenMobile,
  onCloseMobile,
  isReaderMode = false
}) => {
  const isAr = language === 'ar';

  const handleNavClick = (section: MainNavSection, catId: string | null = null) => {
    onSelectSection(section);
    onSelectCategory(catId);
    onCloseMobile();
  };

  const navItems = [
    {
      id: 'dashboard' as MainNavSection,
      label_fr: 'Tableau de bord',
      label_ar: 'لوحة القيادة',
      icon: LayoutDashboard,
      count: null
    },
    {
      id: 'prompts' as MainNavSection,
      label_fr: 'Tous les prompts',
      label_ar: 'جميع الأوامر',
      icon: Layers,
      count: totalPromptsCount
    },
    {
      id: 'favorites' as MainNavSection,
      label_fr: 'Favoris',
      label_ar: 'الأوامر المفضلة',
      icon: Bookmark,
      count: favoritesCount
    },
    {
      id: 'recent' as MainNavSection,
      label_fr: 'Récemment utilisés',
      label_ar: 'المستخدمة حديثاً',
      icon: History,
      count: recentCount
    }
  ];

  return (
    <>
      {/* Mobile backdrop */}
      {isOpenMobile && (
        <div
          onClick={onCloseMobile}
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden animate-in fade-in"
        />
      )}

      {/* Sidebar container */}
      <aside
        className={`fixed md:sticky top-0 md:top-16 z-50 md:z-30 w-72 h-[100dvh] md:h-[calc(100dvh-4rem)] bg-white/95 dark:bg-slate-950/95 border-r border-slate-200 dark:border-slate-800/80 flex flex-col transition-all duration-300 ease-in-out shrink-0 overflow-hidden ${
          isAr ? 'right-0 border-l border-r-0' : 'left-0'
        } ${
          isReaderMode ? 'md:hidden' : ''
        } ${
          isOpenMobile
            ? 'translate-x-0'
            : isAr
            ? 'translate-x-full md:translate-x-0'
            : '-translate-x-full md:translate-x-0'
        }`}
      >
        {/* Mobile Header */}
        <div className="md:hidden flex items-center justify-between p-4 border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-indigo-500 dark:text-indigo-400" />
            <span className="font-bold text-slate-900 dark:text-slate-100">
              {isAr ? 'مكتبة الأوامر' : 'Prompt Master'}
            </span>
          </div>
          <button
            onClick={onCloseMobile}
            className="text-slate-400 hover:text-slate-700 dark:hover:text-white p-1 rounded-lg"
          >
            ✕
          </button>
        </div>

        {/* Quick Action Button */}
        <div className="p-3">
          <button
            onClick={() => {
              onOpenNewPrompt();
              onCloseMobile();
            }}
            className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white font-semibold text-xs shadow-md shadow-indigo-600/20 transition-all hover:scale-[1.01] active:scale-[0.98]"
          >
            <PlusCircle className="w-4 h-4" />
            <span>{isAr ? 'إضافة أمر مخصص' : 'Créer un nouveau prompt'}</span>
          </button>
        </div>

        {/* Navigation list */}
        <div className="px-3 py-1 space-y-1">
          {navItems.map(item => {
            const Icon = item.icon;
            const isActive = currentSection === item.id && selectedCategory === null;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id, null)}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium transition-all ${
                  isActive
                    ? 'bg-indigo-50 text-indigo-700 border border-indigo-200 dark:bg-indigo-600/15 dark:text-indigo-400 dark:border-indigo-500/30 font-semibold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-400 dark:hover:text-slate-200 dark:hover:bg-slate-800/50'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Icon className={`w-4 h-4 ${isActive ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-400 dark:text-slate-500'}`} />
                  <span>{isAr ? item.label_ar : item.label_fr}</span>
                </div>
                {item.count !== null && item.count !== undefined && (
                  <span
                    className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                      isActive
                        ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-500/20 dark:text-indigo-300'
                        : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400'
                    }`}
                  >
                    {item.count}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Category Heading */}
        <div className="px-4 pt-4 pb-2 flex items-center justify-between">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            {isAr ? 'التصنيفات (٢٠ تصنيف)' : 'Catégories (20)'}
          </span>
          {selectedCategory && (
            <button
              onClick={() => onSelectCategory(null)}
              className="text-[10px] text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300 font-medium"
            >
              {isAr ? 'عرض الكل' : 'Tout afficher'}
            </button>
          )}
        </div>

        {/* Categories scrollable list */}
        <div className="flex-1 overflow-y-auto px-3 space-y-0.5 custom-scrollbar pb-4">
          {CATEGORIES.map(cat => {
            const isCatActive =
              currentSection === 'prompts' && selectedCategory === cat.id;
            const count = categoryPromptCounts[cat.id] || 0;

            return (
              <button
                key={cat.id}
                onClick={() => handleNavClick('prompts', cat.id)}
                className={`w-full group flex items-center justify-between px-2.5 py-1.5 rounded-xl text-xs transition-all text-start ${
                  isCatActive
                    ? 'bg-indigo-50 text-indigo-700 font-semibold border border-indigo-200 shadow-sm dark:bg-indigo-600/20 dark:text-white dark:border-indigo-500/40'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-400 dark:hover:text-slate-200 dark:hover:bg-slate-800/40'
                }`}
              >
                <div className="flex items-center gap-2 min-w-0">
                  <span
                    className={`p-1 rounded-lg ${
                      isCatActive
                        ? 'bg-indigo-200/60 text-indigo-700 dark:bg-indigo-500/30 dark:text-indigo-300'
                        : 'bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-300'
                    }`}
                  >
                    <CategoryIcon name={cat.icon_name} className="w-3.5 h-3.5" />
                  </span>
                  <span className="truncate text-[11px]">
                    {isAr ? cat.title_ar : cat.title_fr}
                  </span>
                </div>
                <span className="text-[10px] text-slate-400 dark:text-slate-500 shrink-0 ps-1 font-mono">
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Bottom utility links: Export/Import & Reset */}
        <div className="p-3 border-t border-slate-200 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-950/40 space-y-1">
          <button
            onClick={() => {
              onOpenExportImport();
              onCloseMobile();
            }}
            className="w-full flex items-center justify-center gap-2 px-3 py-2 text-xs font-medium rounded-xl text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/60 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700/60 transition-colors"
          >
            <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>{isAr ? 'استيراد وتصدير CSV / JSON' : 'Export & Import CSV / JSON'}</span>
          </button>
        </div>
      </aside>
    </>
  );
};
