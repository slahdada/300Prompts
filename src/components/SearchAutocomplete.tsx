import React, { useState, useEffect, useRef, useMemo } from 'react';
import {
  Search,
  Terminal,
  FolderTree,
  Sparkles,
  ArrowRight,
  X,
  Bot,
  CornerDownLeft
} from 'lucide-react';
import { PromptItem, Language } from '../types/prompt';
import { CATEGORIES } from '../data/categories';
import { CategoryIcon } from './CategoryIcon';

interface SearchAutocompleteProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  prompts: PromptItem[];
  language: Language;
  onSelectPrompt: (prompt: PromptItem) => void;
  onSelectCategory: (categoryId: string) => void;
  isMobile?: boolean;
}

interface SuggestionItem {
  id: string;
  type: 'slash' | 'prompt' | 'category';
  title: string;
  subtitle: string;
  categoryName?: string;
  badge?: string;
  level?: string;
  prompt?: PromptItem;
  categoryId?: string;
  iconName?: string;
}

export const SearchAutocomplete: React.FC<SearchAutocompleteProps> = ({
  searchQuery,
  onSearchChange,
  prompts,
  language,
  onSelectPrompt,
  onSelectCategory,
  isMobile = false
}) => {
  const isAr = language === 'ar';
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Compute suggestions based on query
  const suggestions: SuggestionItem[] = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return [];

    const items: SuggestionItem[] = [];

    // 1. Search in Categories (max 2)
    const matchedCategories = CATEGORIES.filter(c =>
      c.title_fr.toLowerCase().includes(q) ||
      c.title_ar.toLowerCase().includes(q) ||
      c.slug.toLowerCase().includes(q) ||
      c.description_fr.toLowerCase().includes(q)
    ).slice(0, 2);

    for (const cat of matchedCategories) {
      items.push({
        id: `cat-${cat.id}`,
        type: 'category',
        title: isAr ? cat.title_ar : cat.title_fr,
        subtitle: isAr ? 'تصنيف رئيسي (15 أمراً)' : 'Catégorie thématique (15 prompts)',
        categoryId: cat.id,
        iconName: cat.icon_name
      });
    }

    // 2. Search in Prompts
    const scoredPrompts: { prompt: PromptItem; score: number }[] = [];

    for (const p of prompts) {
      let score = 0;
      const slash = p.slash.toLowerCase();
      const titleFr = p.title_fr.toLowerCase();
      const titleAr = p.title_ar.toLowerCase();
      const funcFr = p.function_fr.toLowerCase();
      const funcAr = p.function_ar.toLowerCase();

      // Highest priority: exact or prefix slash match
      if (slash.startsWith(q) || slash.includes(q)) {
        score += slash.startsWith(q) ? 100 : 70;
      }
      // High priority: title match
      if (titleFr.startsWith(q) || titleAr.startsWith(q)) {
        score += 80;
      } else if (titleFr.includes(q) || titleAr.includes(q)) {
        score += 50;
      }
      // Medium priority: function or tags
      if (funcFr.includes(q) || funcAr.includes(q)) {
        score += 30;
      }
      if (p.tags.some(t => t.toLowerCase().includes(q))) {
        score += 25;
      }
      if (p.ai_compatibility.some(ai => ai.toLowerCase().includes(q))) {
        score += 20;
      }

      if (score > 0) {
        scoredPrompts.push({ prompt: p, score });
      }
    }

    // Sort by score descending and take top 6
    scoredPrompts.sort((a, b) => b.score - a.score);
    const topPrompts = scoredPrompts.slice(0, 6);

    for (const { prompt } of topPrompts) {
      const isSlashPrimary = prompt.slash.toLowerCase().includes(q);
      items.push({
        id: prompt.id,
        type: isSlashPrimary ? 'slash' : 'prompt',
        title: isAr ? prompt.title_ar : prompt.title_fr,
        subtitle: prompt.slash,
        categoryName: isAr ? prompt.category_ar : prompt.category_fr,
        level: prompt.level,
        prompt
      });
    }

    return items;
  }, [searchQuery, prompts, isAr]);

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen || suggestions.length === 0) {
      if (e.key === 'ArrowDown' && suggestions.length > 0) {
        setIsOpen(true);
        setSelectedIndex(0);
        e.preventDefault();
      }
      return;
    }

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => (prev + 1) % suggestions.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => (prev <= 0 ? suggestions.length - 1 : prev - 1));
    } else if (e.key === 'Enter') {
      if (selectedIndex >= 0 && selectedIndex < suggestions.length) {
        e.preventDefault();
        handleSelectSuggestion(suggestions[selectedIndex]);
      } else {
        setIsOpen(false);
      }
    } else if (e.key === 'Escape') {
      setIsOpen(false);
      inputRef.current?.blur();
    }
  };

  const handleSelectSuggestion = (item: SuggestionItem) => {
    if (item.type === 'category' && item.categoryId) {
      onSelectCategory(item.categoryId);
      onSearchChange('');
    } else if (item.prompt) {
      onSearchChange(item.prompt.slash);
      onSelectPrompt(item.prompt);
    }
    setIsOpen(false);
  };

  const clearSearch = () => {
    onSearchChange('');
    setIsOpen(false);
    inputRef.current?.focus();
  };

  const highlightMatch = (text: string, query: string) => {
    if (!query.trim()) return text;
    const q = query.trim().toLowerCase();
    const idx = text.toLowerCase().indexOf(q);
    if (idx === -1) return text;

    const before = text.substring(0, idx);
    const match = text.substring(idx, idx + q.length);
    const after = text.substring(idx + q.length);

    return (
      <>
        {before}
        <span className="text-indigo-400 font-bold bg-indigo-500/15 px-0.5 rounded">
          {match}
        </span>
        {after}
      </>
    );
  };

  return (
    <div ref={wrapperRef} className="relative w-full">
      {/* Search Input Container */}
      <div className="relative group">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none text-slate-400 group-focus-within:text-indigo-400 transition-colors">
          <Search className={isMobile ? 'w-4 h-4' : 'w-4 h-4'} />
        </div>

        <input
          ref={inputRef}
          type="text"
          value={searchQuery}
          onChange={e => {
            onSearchChange(e.target.value);
            if (!isOpen) setIsOpen(true);
            setSelectedIndex(-1);
          }}
          onFocus={() => {
            if (searchQuery.trim().length > 0) setIsOpen(true);
          }}
          onKeyDown={handleKeyDown}
          placeholder={
            isAr
              ? 'ابحث بالأمر السريع / أو العنوان أو الكلمات المفتاحية...'
              : 'Recherche par commande /dev, mot-clé, titre...'
          }
          className={`w-full ps-10 pe-16 rounded-xl bg-slate-800/60 dark:bg-slate-900/60 border border-slate-700/60 hover:border-slate-600 focus:border-indigo-500/70 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 text-slate-200 placeholder:text-slate-400 transition-all ${
            isMobile ? 'py-2 text-xs' : 'py-2 text-sm'
          }`}
          autoComplete="off"
          spellCheck="false"
        />

        {/* Clear Button or Slash Indicator */}
        <div className="absolute inset-y-0 end-0 flex items-center pe-2.5 gap-1.5">
          {searchQuery ? (
            <button
              onClick={clearSearch}
              className="p-1 rounded-md text-slate-400 hover:text-white hover:bg-slate-700/60 transition-colors"
              title={isAr ? 'مسح البحث' : 'Effacer la recherche'}
            >
              <X className="w-3.5 h-3.5" />
            </button>
          ) : (
            <span className="hidden sm:flex text-[11px] font-mono px-1.5 py-0.5 rounded bg-slate-700/60 text-slate-400 border border-slate-600/50 items-center gap-0.5 pointer-events-none select-none">
              <Terminal className="w-3 h-3" /> /
            </span>
          )}
        </div>
      </div>

      {/* Autocomplete Suggestions Dropdown */}
      {isOpen && searchQuery.trim().length > 0 && (
        <div className="absolute top-full mt-2 inset-x-0 z-50 rounded-2xl bg-slate-900/95 border border-slate-700/80 shadow-2xl backdrop-blur-xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-150 text-slate-100">
          {suggestions.length > 0 ? (
            <div className="py-2">
              <div className="px-3.5 py-1.5 flex items-center justify-between text-[11px] font-semibold text-slate-400 uppercase tracking-wider border-b border-slate-800/80 mb-1">
                <span>
                  {isAr ? 'الاقتراحات المطابقة' : 'Suggestions automatiques'}
                </span>
                <span className="text-[10px] lowercase font-normal">
                  {suggestions.length} {isAr ? 'عنصر' : 'résultats'}
                </span>
              </div>

              <div className="max-h-80 overflow-y-auto custom-scrollbar space-y-1 px-1.5">
                {suggestions.map((item, idx) => {
                  const isSelected = selectedIndex === idx;

                  return (
                    <button
                      key={item.id}
                      onClick={() => handleSelectSuggestion(item)}
                      onMouseEnter={() => setSelectedIndex(idx)}
                      className={`w-full flex items-center justify-between p-2.5 rounded-xl transition-all text-start group ${
                        isSelected
                          ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20'
                          : 'hover:bg-slate-800/60 text-slate-200'
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        {item.type === 'category' ? (
                          <div
                            className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${
                              isSelected
                                ? 'bg-white/20 text-white'
                                : 'bg-indigo-500/15 text-indigo-400 border border-indigo-500/30'
                            }`}
                          >
                            <FolderTree className="w-4 h-4" />
                          </div>
                        ) : item.type === 'slash' ? (
                          <div
                            className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${
                              isSelected
                                ? 'bg-white/20 text-white'
                                : 'bg-cyan-500/15 text-cyan-400 border border-cyan-500/30'
                            }`}
                          >
                            <Terminal className="w-4 h-4" />
                          </div>
                        ) : (
                          <div
                            className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${
                              isSelected
                                ? 'bg-white/20 text-white'
                                : 'bg-slate-800 text-slate-300 border border-slate-700'
                            }`}
                          >
                            <Sparkles className="w-4 h-4 text-amber-400" />
                          </div>
                        )}

                        <div className="min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-xs truncate">
                              {highlightMatch(item.title, searchQuery)}
                            </span>

                            {item.level && (
                              <span
                                className={`text-[9px] font-medium px-1.5 py-0.2 rounded ${
                                  isSelected
                                    ? 'bg-white/20 text-white'
                                    : 'bg-slate-800 text-slate-400 border border-slate-700'
                                }`}
                              >
                                {item.level === 'debutant'
                                  ? isAr
                                    ? 'مبتدئ'
                                    : 'Débutant'
                                  : item.level === 'expert'
                                  ? isAr
                                    ? 'خبير'
                                    : 'Expert'
                                  : isAr
                                  ? 'متوسط'
                                  : 'Interm.'}
                              </span>
                            )}
                          </div>

                          <div className="flex items-center gap-2 text-[11px] opacity-80 truncate">
                            <span className="font-mono text-[10px]">
                              {highlightMatch(item.subtitle, searchQuery)}
                            </span>
                            {item.categoryName && (
                              <>
                                <span>•</span>
                                <span className="truncate">{item.categoryName}</span>
                              </>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-1 ps-2 shrink-0">
                        <CornerDownLeft
                          className={`w-3.5 h-3.5 transition-transform ${
                            isSelected
                              ? 'text-white translate-x-0'
                              : 'text-slate-500 opacity-0 group-hover:opacity-100'
                          } ${isAr ? 'scale-x-[-1]' : ''}`}
                        />
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Footer hint */}
              <div className="px-3 py-2 mt-1 border-t border-slate-800/80 flex items-center justify-between text-[10px] text-slate-400 bg-slate-950/40">
                <span>
                  {isAr
                    ? 'استخدم ↑↓ للتنقل، و Enter للاختيار'
                    : 'Utilisez ↑↓ pour naviguer, Entrée pour valider'}
                </span>
                <span className="font-medium text-indigo-400">
                  {isAr ? 'ESC للإغلاق' : 'Échap pour fermer'}
                </span>
              </div>
            </div>
          ) : (
            <div className="p-4 text-center text-xs text-slate-400">
              <p>
                {isAr
                  ? `لا توجد اقتراحات مطابقة لـ "${searchQuery}"`
                  : `Aucune suggestion pour "${searchQuery}"`}
              </p>
              <p className="text-[11px] text-slate-500 mt-1">
                {isAr
                  ? 'اضغط Enter للبحث في نصوص الأوامر الكاملة'
                  : 'Appuyez sur Entrée pour rechercher dans tous les prompts'}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
