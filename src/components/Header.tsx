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
    <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-slate-900/85 dark:bg-slate-950/85 border-b border-slate-800/80 text-slate-100 transition-colors">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 h-16 flex items-center justify-between gap-3">
        {/* Left: Mobile Menu & Logo */}
        <div className="flex items-center gap-3">
          <button
            onClick={onToggleMobileMenu}
            className="md:hidden p-2 text-slate-300 hover:text-white hover:bg-slate-800/80 rounded-xl transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          <div className="flex items-center gap-2.5 cursor-pointer select-none">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-indigo-500/25 ring-1 ring-white/20">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-base sm:text-lg tracking-tight bg-gradient-to-r from-white via-slate-100 to-indigo-200 bg-clip-text text-transparent">
                  PROMPT MASTER
                </span>
                <span className="hidden sm:inline-flex text-[10px] font-semibold tracking-wider uppercase px-1.5 py-0.5 rounded-md bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                  300 PRO
                </span>
              </div>
              <span className="text-[11px] text-slate-400 font-medium truncate max-w-[170px] sm:max-w-none">
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
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Quick Favorites Button */}
          <button
            onClick={onSelectFavorites}
            className="relative p-2 text-slate-300 hover:text-amber-400 hover:bg-slate-800/80 rounded-xl transition-colors"
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

          {/* Mode Lecture Button */}
          <button
            onClick={onToggleReaderMode}
            className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold rounded-xl border transition-all ${
              isReaderMode
                ? 'bg-indigo-600 text-white border-indigo-400 shadow-md shadow-indigo-600/30 ring-1 ring-white/20'
                : 'bg-slate-800/80 hover:bg-slate-700/80 text-slate-200 border-slate-700/60'
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
            <BookOpen className={`w-3.5 h-3.5 ${isReaderMode ? 'text-white' : 'text-indigo-400'}`} />
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

          {/* PWA Install Button */}
          {(!isInstalled || isInstallable) && (
            <button
              onClick={onInstallClick}
              className="inline-flex items-center gap-1 px-2.5 py-1.5 text-xs font-medium rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-300 border border-emerald-500/30 transition-all hover:scale-[1.02]"
              title={isAr ? 'تثبيت التطبيق على جهازك' : 'Installer l’application sur votre appareil'}
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">
                {isAr ? 'تثبيت PWA' : 'Installer PWA'}
              </span>
            </button>
          )}

          {/* Language Switch */}
          <button
            onClick={() => onLanguageChange(isAr ? 'fr' : 'ar')}
            className="inline-flex items-center gap-1 px-2.5 py-1.5 text-xs font-semibold rounded-xl bg-slate-800/80 hover:bg-slate-700/80 text-slate-200 border border-slate-700/60 transition-colors"
            title={isAr ? 'Changer en Français' : 'التحويل إلى العربية'}
          >
            <Languages className="w-3.5 h-3.5 text-indigo-400" />
            <span>{isAr ? 'FR' : 'العربية'}</span>
          </button>

          {/* Theme Toggle */}
          <button
            onClick={onThemeToggle}
            className="p-2 text-slate-300 hover:text-white hover:bg-slate-800/80 rounded-xl transition-colors"
            title={isAr ? 'تبديل المظهر' : 'Basculer le thème'}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-indigo-300" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile search bar with Dynamic Autocomplete */}
      <div className="sm:hidden px-3 pb-3">
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
