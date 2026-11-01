import React from 'react';
import {
  Sparkles,
  Search,
  Moon,
  Sun,
  Download,
  Languages,
  Menu,
  X,
  Plus,
  Terminal,
  Bookmark,
  BookOpen
} from 'lucide-react';
import { PromptItem, Language, ThemeMode } from '../types/prompt';
import { SearchAutocomplete } from './SearchAutocomplete';

interface HeaderProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  theme: ThemeMode;
  onThemeToggle: () => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onOpenNewPrompt: () => void;
  onOpenExportImport: () => void;
  mobileMenuOpen: boolean;
  onToggleMobileMenu: () => void;
  isInstallable: boolean;
  isInstalled: boolean;
  onInstallClick: () => void;
  favoriteCount: number;
  onSelectFavorites: () => void;
  isReaderMode: boolean;
  onToggleReaderMode: () => void;
  prompts: PromptItem[];
  onSelectPrompt: (prompt: PromptItem) => void;
  onSelectCategory: (categoryId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  language,
  onLanguageChange,
  theme,
  onThemeToggle,
  searchQuery,
  onSearchChange,
  onOpenNewPrompt,
  onOpenExportImport,
  mobileMenuOpen,
  onToggleMobileMenu,
  isInstallable,
  isInstalled,
  onInstallClick,
  favoriteCount,
  onSelectFavorites,
  isReaderMode,
  onToggleReaderMode,
  prompts,
  onSelectPrompt,
  onSelectCategory
}) => {
  const isAr = language === 'ar';

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-white/90 dark:bg-slate-950/90 border-b border-slate-200 dark:border-slate-800/80 text-slate-800 dark:text-slate-100 transition-colors">
      <div className="w-full max-w-7xl mx-auto px-2.5 sm:px-6 h-14 sm:h-16 flex items-center justify-between gap-2 sm:gap-3 min-w-0">
        {/* Left: Mobile Menu & Logo */}
        <div className="flex items-center gap-1.5 sm:gap-3 min-w-0 shrink">
          <button
            onClick={onToggleMobileMenu}
            className="md:hidden p-1.5 sm:p-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/80 rounded-xl transition-colors shrink-0"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          <div className="flex items-center gap-2 sm:gap-2.5 cursor-pointer select-none min-w-0">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-indigo-500/25 ring-1 ring-white/20 shrink-0">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
            <div className="flex flex-col min-w-0">
              <div className="flex items-center gap-1.5 min-w-0">
                <span className="font-bold text-sm sm:text-base tracking-tight bg-gradient-to-r from-slate-900 via-indigo-950 to-indigo-700 dark:from-white dark:via-slate-100 dark:to-indigo-200 bg-clip-text text-transparent truncate">
                  PROMPT MASTER
                </span>
                <span className="hidden sm:inline-flex text-[10px] font-semibold tracking-wider uppercase px-1.5 py-0.5 rounded-md bg-indigo-500/10 text-indigo-700 border border-indigo-500/20 dark:bg-indigo-500/20 dark:text-indigo-300 dark:border-indigo-500/30 shrink-0">
                  300 PRO
                </span>
              </div>
              <span className="text-[10px] sm:text-[11px] text-slate-500 dark:text-slate-400 font-medium truncate hidden md:block">
                {isAr ? 'المكتبة الشاملة لأوامر الذكاء الاصطناعي' : 'Bibliothèque universelle de prompts IA'}
              </span>
            </div>
          </div>
        </div>

        {/* Center: Global Search Bar with Dynamic Autocomplete */}
        <div className="flex-1 max-w-md hidden sm:block">
          <SearchAutocomplete
            searchQuery={searchQuery}
            onSearchChange={onSearchChange}
            prompts={prompts}
            language={language}
            onSelectPrompt={onSelectPrompt}
            onSelectCategory={onSelectCategory}
          />
        </div>

        {/* Right: Actions, Language, Theme, Install */}
        <div className="flex items-center gap-1 sm:gap-2 shrink-0">
          {/* Quick Favorites Button */}
          <button
            onClick={onSelectFavorites}
            className="relative p-1.5 sm:p-2 text-slate-600 dark:text-slate-300 hover:text-amber-500 hover:bg-slate-100 dark:hover:bg-slate-800/80 rounded-xl transition-colors shrink-0"
            title={isAr ? 'المفضلة' : 'Favoris'}
            aria-label="Favoris"
          >
            <Bookmark className="w-4 h-4" />
            {favoriteCount > 0 && (
              <span className="absolute -top-1 -end-1 w-4 h-4 rounded-full bg-amber-500 text-slate-950 text-[10px] font-bold flex items-center justify-center">
                {favoriteCount}
              </span>
            )}
          </button>

          {/* Mode Lecture Button (Desktop only) */}
          <button
            onClick={onToggleReaderMode}
            className={`hidden md:inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold rounded-xl border transition-all ${
              isReaderMode
                ? 'bg-indigo-600 text-white border-indigo-400 shadow-md shadow-indigo-600/30 ring-1 ring-white/20'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-300 dark:bg-slate-800/80 dark:hover:bg-slate-700/80 dark:text-slate-200 dark:border-slate-700/60'
            }`}
            title={
              isReaderMode
                ? isAr
                  ? 'إنهاء وضع القراءة واستعادة الشريط الجانبي'
                  : 'Quitter le mode lecture (afficher la barre latérale)'
                : isAr
                ? 'وضع القراءة: تكبير المحتوى وإخفاء الشريط الجانبي'
                : 'Mode Lecture : masquer la barre latérale pour une concentration maximale'
            }
          >
            <BookOpen className={`w-3.5 h-3.5 ${isReaderMode ? 'text-white' : 'text-indigo-500 dark:text-indigo-400'}`} />
            <span className="hidden sm:inline">
              {isReaderMode
                ? isAr
                  ? 'إنهاء القراءة'
                  : 'Lecture active'
                : isAr
                ? 'وضع القراءة'
                : 'Mode Lecture'}
            </span>
          </button>

          {/* New Prompt Button (Desktop) */}
          <button
            onClick={onOpenNewPrompt}
            className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white shadow-sm shadow-indigo-600/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>{isAr ? 'أمر جديد' : 'Nouveau prompt'}</span>
          </button>

          {/* PWA Install Button (Tablet & Desktop) */}
          {(!isInstalled || isInstallable) && (
            <button
              onClick={onInstallClick}
              className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1.5 text-xs font-medium rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-700 border border-emerald-500/30 dark:bg-emerald-500/15 dark:hover:bg-emerald-500/25 dark:text-emerald-300 transition-all hover:scale-[1.02]"
              title={isAr ? 'تثبيت التطبيق على جهازك' : 'Installer l’application sur votre appareil'}
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden md:inline">
                {isAr ? 'تثبيت PWA' : 'Installer PWA'}
              </span>
            </button>
          )}

          {/* Language Switch */}
          <button
            onClick={() => onLanguageChange(isAr ? 'fr' : 'ar')}
            className="inline-flex items-center gap-1 px-2 py-1.5 sm:px-2.5 sm:py-1.5 text-xs font-semibold rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-300 dark:bg-slate-800/80 dark:hover:bg-slate-700/80 dark:text-slate-200 dark:border-slate-700/60 transition-colors shrink-0"
            title={isAr ? 'Changer en Français' : 'التحويل إلى العربية'}
          >
            <Languages className="w-3.5 h-3.5 text-indigo-500 dark:text-indigo-400 shrink-0" />
            <span className="text-xs">{isAr ? 'FR' : 'العربية'}</span>
          </button>

          {/* Theme Toggle */}
          <button
            onClick={onThemeToggle}
            className="p-1.5 sm:p-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/80 rounded-xl transition-all shrink-0 hover:scale-105 active:scale-95"
            title={theme === 'dark' ? (isAr ? 'تفعيل الوضع الفاتح (نهاري)' : 'Activer le mode clair') : (isAr ? 'تفعيل الوضع الداكن (ليلي)' : 'Activer le mode sombre')}
            aria-label={theme === 'dark' ? 'Activer le mode clair' : 'Activer le mode sombre'}
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400 hover:rotate-45 transition-transform" />
            ) : (
              <Moon className="w-4 h-4 text-indigo-600 hover:-rotate-12 transition-transform" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile search bar with Dynamic Autocomplete */}
      <div className="sm:hidden px-2.5 pb-2.5 w-full max-w-full">
        <SearchAutocomplete
          searchQuery={searchQuery}
          onSearchChange={onSearchChange}
          prompts={prompts}
          language={language}
          onSelectPrompt={onSelectPrompt}
          onSelectCategory={onSelectCategory}
          isMobile={true}
        />
      </div>
    </header>
  );
};
