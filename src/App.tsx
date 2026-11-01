import React, { useState, useEffect, useMemo, useCallback } from 'react';
import {
  Search,
  Filter,
  Layers,
  Bookmark,
  History,
  Sparkles,
  SlidersHorizontal,
  ChevronDown,
  LayoutGrid,
  ListFilter,
  RotateCcw,
  Plus,
  Terminal,
  Bot,
  BookOpen
} from 'lucide-react';
import {
  PromptItem,
  Language,
  ThemeMode,
  PromptLevel,
  AIModelCompatibility,
  AppStats
} from './types/prompt';
import { CATEGORIES } from './data/categories';
import {
  loadPrompts,
  savePrompts,
  loadLanguage,
  saveLanguage,
  loadTheme,
  saveTheme,
  loadFavoriteIds,
  saveFavoriteIds,
  loadRecentIds,
  saveRecentIds,
  getCopiedCount,
  incrementCopiedCount,
  resetToDefaults
} from './utils/storage';
import { usePWAInstall } from './hooks/usePWAInstall';
import { Header } from './components/Header';
import { Sidebar, MainNavSection } from './components/Sidebar';
import { PromptCard } from './components/PromptCard';
import { PromptDetailModal } from './components/PromptDetailModal';
import { PromptFormModal } from './components/PromptFormModal';
import { DeleteConfirmModal } from './components/DeleteConfirmModal';
import { ExportImportModal } from './components/ExportImportModal';
import { PWAInstallModal } from './components/PWAInstallModal';
import { PWAInstallBanner } from './components/PWAInstallBanner';
import { DashboardView } from './components/DashboardView';
import { ToastContainer, ToastMessage } from './components/Toast';
import { OfflineIndicator } from './components/OfflineIndicator';

export default function App() {
  // ----------------------------------------------------
  // Core State
  // ----------------------------------------------------
  const [prompts, setPrompts] = useState<PromptItem[]>(() => loadPrompts());
  const [language, setLanguage] = useState<Language>(() => loadLanguage());
  const [theme, setTheme] = useState<ThemeMode>(() => loadTheme());
  const [favoriteIds, setFavoriteIds] = useState<Set<string>>(() => loadFavoriteIds());
  const [recentIds, setRecentIds] = useState<string[]>(() => loadRecentIds());
  const [copiedCount, setCopiedCount] = useState<number>(() => getCopiedCount());

  // Navigation & Filtering
  const [currentSection, setCurrentSection] = useState<MainNavSection>('dashboard');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedLevel, setSelectedLevel] = useState<PromptLevel | 'all'>('all');
  const [selectedAiModel, setSelectedAiModel] = useState<string | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Modals & UI States
  const [selectedDetailPrompt, setSelectedDetailPrompt] = useState<PromptItem | null>(null);
  const [formModalOpen, setFormModalOpen] = useState(false);
  const [editingPrompt, setEditingPrompt] = useState<PromptItem | null>(null);
  const [deleteModalPrompt, setDeleteModalPrompt] = useState<PromptItem | null>(null);
  const [exportImportModalOpen, setExportImportModalOpen] = useState(false);
  const [pwaModalOpen, setPwaModalOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isReaderMode, setIsReaderMode] = useState<boolean>(() => {
    try {
      return localStorage.getItem('pml_reader_mode') === 'true';
    } catch {
      return false;
    }
  });
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  // PWA integration hook
  const { isInstallable, isInstalled, isIOS, isOnline, installApp } = usePWAInstall();

  // Save reader mode preference & keyboard shortcut
  useEffect(() => {
    try {
      localStorage.setItem('pml_reader_mode', isReaderMode.toString());
    } catch {
      // ignore
    }
  }, [isReaderMode]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Alt+R to toggle reader mode
      if (e.altKey && (e.key === 'r' || e.key === 'R')) {
        e.preventDefault();
        setIsReaderMode(prev => !prev);
      }
      // Esc to exit reader mode when no modal is open
      if (
        e.key === 'Escape' &&
        isReaderMode &&
        !selectedDetailPrompt &&
        !formModalOpen &&
        !deleteModalPrompt &&
        !exportImportModalOpen &&
        !pwaModalOpen
      ) {
        setIsReaderMode(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [
    isReaderMode,
    selectedDetailPrompt,
    formModalOpen,
    deleteModalPrompt,
    exportImportModalOpen,
    pwaModalOpen
  ]);

  // ----------------------------------------------------
  // Sync Language & RTL
  // ----------------------------------------------------
  useEffect(() => {
    saveLanguage(language);
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  // Sync Theme (dark / light)
  useEffect(() => {
    saveTheme(theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.body.classList.add('dark');
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('dark');
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }, [theme]);

  // Persist Prompts
  const handleUpdatePrompts = useCallback((updated: PromptItem[]) => {
    setPrompts(updated);
    savePrompts(updated);
  }, []);

  // ----------------------------------------------------
  // Toast notifications helper
  // ----------------------------------------------------
  const addToast = useCallback(
    (type: 'success' | 'error' | 'info', message_fr: string, message_ar: string) => {
      const id = `${Date.now()}-${Math.random()}`;
      setToasts(prev => [...prev, { id, type, message_fr, message_ar }]);
      setTimeout(() => {
        setToasts(prev => prev.filter(t => t.id !== id));
      }, 3500);
    },
    []
  );

  const dismissToast = (id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  // ----------------------------------------------------
  // Usage tracking & copy actions
  // ----------------------------------------------------
  const trackPromptUsage = useCallback((promptId: string) => {
    const updatedCount = incrementCopiedCount();
    setCopiedCount(updatedCount);

    setRecentIds(prev => {
      const filtered = prev.filter(id => id !== promptId);
      const next = [promptId, ...filtered].slice(0, 30);
      saveRecentIds(next);
      return next;
    });

    setPrompts(prev => {
      const next = prev.map(p =>
        p.id === promptId
          ? {
              ...p,
              usage_count: (p.usage_count || 0) + 1,
              last_used_at: new Date().toISOString()
            }
          : p
      );
      savePrompts(next);
      return next;
    });
  }, []);

  const handleCopyFr = useCallback(
    (itemOrText: PromptItem | string, e?: React.MouseEvent) => {
      if (e) e.stopPropagation();
      const textToCopy = typeof itemOrText === 'string' ? itemOrText : itemOrText.prompt_fr;
      const promptId = typeof itemOrText === 'string' ? selectedDetailPrompt?.id : itemOrText.id;

      navigator.clipboard.writeText(textToCopy);
      if (promptId) trackPromptUsage(promptId);
      addToast('success', 'Prompt français copié dans le presse-papier !', 'تم نسخ الأمر بالفرنسية بنجاح !');
    },
    [selectedDetailPrompt, trackPromptUsage, addToast]
  );

  const handleCopyAr = useCallback(
    (itemOrText: PromptItem | string, e?: React.MouseEvent) => {
      if (e) e.stopPropagation();
      const textToCopy = typeof itemOrText === 'string' ? itemOrText : itemOrText.prompt_ar;
      const promptId = typeof itemOrText === 'string' ? selectedDetailPrompt?.id : itemOrText.id;

      navigator.clipboard.writeText(textToCopy);
      if (promptId) trackPromptUsage(promptId);
      addToast('success', 'Prompt arabe copié dans le presse-papier !', 'تم نسخ الأمر بالعربية في الحافظة !');
    },
    [selectedDetailPrompt, trackPromptUsage, addToast]
  );

  const handleCopyBoth = useCallback(
    (frText: string, arText: string) => {
      const combined = `=== VERSION FRANÇAISE ===\n\n${frText}\n\n=== النسخة العربية ===\n\n${arText}`;
      navigator.clipboard.writeText(combined);
      if (selectedDetailPrompt) trackPromptUsage(selectedDetailPrompt.id);
      addToast(
        'success',
        'Les deux versions (FR & AR) ont été copiées !',
        'تم نسخ كلا النسختين (العربية والفرنسية) معاً !'
      );
    },
    [selectedDetailPrompt, trackPromptUsage, addToast]
  );

  // ----------------------------------------------------
  // Favorite toggle
  // ----------------------------------------------------
  const handleToggleFavorite = useCallback(
    (promptId: string, e?: React.MouseEvent) => {
      if (e) e.stopPropagation();
      setFavoriteIds(prev => {
        const next = new Set(prev);
        const wasFav = next.has(promptId);
        if (wasFav) {
          next.delete(promptId);
          addToast('info', 'Retiré des favoris', 'تمت الإزالة من المفضلة');
        } else {
          next.add(promptId);
          addToast('success', 'Ajouté aux favoris', 'تمت الإضافة إلى المفضلة');
        }
        saveFavoriteIds(next);
        return next;
      });
    },
    [addToast]
  );

  // ----------------------------------------------------
  // Add / Edit / Delete prompts
  // ----------------------------------------------------
  const handleSavePrompt = useCallback(
    (savedPrompt: PromptItem) => {
      setPrompts(prev => {
        const exists = prev.some(p => p.id === savedPrompt.id);
        let next: PromptItem[];
        if (exists) {
          next = prev.map(p => (p.id === savedPrompt.id ? savedPrompt : p));
          addToast('success', 'Prompt mis à jour avec succès', 'تم تحديث الأمر بنجاح');
        } else {
          next = [savedPrompt, ...prev];
          addToast('success', 'Nouveau prompt ajouté à la bibliothèque', 'تمت إضافة الأمر الجديد بنجاح');
        }
        savePrompts(next);
        return next;
      });
      // If editing detail prompt, refresh it
      if (selectedDetailPrompt && selectedDetailPrompt.id === savedPrompt.id) {
        setSelectedDetailPrompt(savedPrompt);
      }
    },
    [selectedDetailPrompt, addToast]
  );

  const handleDeletePrompt = useCallback(() => {
    if (!deleteModalPrompt) return;
    const targetId = deleteModalPrompt.id;

    setPrompts(prev => {
      const next = prev.filter(p => p.id !== targetId);
      savePrompts(next);
      return next;
    });

    setFavoriteIds(prev => {
      const next = new Set(prev);
      next.delete(targetId);
      saveFavoriteIds(next);
      return next;
    });

    if (selectedDetailPrompt?.id === targetId) {
      setSelectedDetailPrompt(null);
    }

    addToast('info', 'Prompt supprimé', 'تم حذف الأمر');
    setDeleteModalPrompt(null);
  }, [deleteModalPrompt, selectedDetailPrompt, addToast]);

  const handleImportPrompts = useCallback(
    (imported: PromptItem[]) => {
      setPrompts(prev => {
        // Merge without duplicate IDs
        const existingMap = new Map(prev.map(p => [p.id, p]));
        for (const item of imported) {
          existingMap.set(item.id, item);
        }
        const combined = Array.from(existingMap.values());
        savePrompts(combined);
        return combined;
      });
      addToast(
        'success',
        `${imported.length} prompts importés dans la bibliothèque`,
        `تم استيراد ${imported.length} أمراً إلى المكتبة`
      );
    },
    [addToast]
  );

  const handleResetDefaults = useCallback(() => {
    const fresh = resetToDefaults();
    setPrompts(fresh);
    setFavoriteIds(new Set());
    setRecentIds([]);
    addToast('success', 'Bibliothèque réinitialisée aux 300 prompts initiaux', 'تمت استعادة 300 أمر الافتراضية');
  }, [addToast]);

  // ----------------------------------------------------
  // Statistics computation
  // ----------------------------------------------------
  const stats: AppStats = useMemo(() => {
    const levelCounts = { debutant: 0, intermediaire: 0, expert: 0 };
    const aiModelCounts: Record<string, number> = {};
    let customCount = 0;

    for (const p of prompts) {
      if (p.level in levelCounts) {
        levelCounts[p.level]++;
      }
      if (p.custom) customCount++;
      for (const ai of p.ai_compatibility) {
        aiModelCounts[ai] = (aiModelCounts[ai] || 0) + 1;
      }
    }

    return {
      totalPrompts: prompts.length,
      totalCategories: CATEGORIES.length,
      favoriteCount: favoriteIds.size,
      recentCount: recentIds.length,
      customCount,
      copiedCount,
      levelCounts,
      aiModelCounts
    };
  }, [prompts, favoriteIds, recentIds, copiedCount]);

  const categoryPromptCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const p of prompts) {
      counts[p.category_id] = (counts[p.category_id] || 0) + 1;
    }
    return counts;
  }, [prompts]);

  const recentPrompts = useMemo(() => {
    const map = new Map(prompts.map(p => [p.id, p]));
    return recentIds.map(id => map.get(id)).filter((p): p is PromptItem => Boolean(p));
  }, [prompts, recentIds]);

  const favoritePrompts = useMemo(() => {
    return prompts.filter(p => favoriteIds.has(p.id));
  }, [prompts, favoriteIds]);

  // ----------------------------------------------------
  // Filtering & Search engine
  // ----------------------------------------------------
  const filteredPrompts = useMemo(() => {
    let list = prompts;

    // View section filter
    if (currentSection === 'favorites') {
      list = list.filter(p => favoriteIds.has(p.id));
    } else if (currentSection === 'recent') {
      const recentSet = new Set(recentIds);
      list = list.filter(p => recentSet.has(p.id));
      // Sort in order of recentIds
      const indexMap = new Map(recentIds.map((id, idx) => [id, idx]));
      list = [...list].sort(
        (a, b) => (indexMap.get(a.id) ?? 999) - (indexMap.get(b.id) ?? 999)
      );
    }

    // Category filter
    if (selectedCategory) {
      list = list.filter(p => p.category_id === selectedCategory);
    }

    // Level filter
    if (selectedLevel !== 'all') {
      list = list.filter(p => p.level === selectedLevel);
    }

    // AI model filter
    if (selectedAiModel !== 'all') {
      list = list.filter(p => p.ai_compatibility.includes(selectedAiModel as any));
    }

    // Search query filter (instant search)
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter(p => {
        return (
          p.slash.toLowerCase().includes(q) ||
          p.title_fr.toLowerCase().includes(q) ||
          p.title_ar.toLowerCase().includes(q) ||
          p.function_fr.toLowerCase().includes(q) ||
          p.function_ar.toLowerCase().includes(q) ||
          p.category_fr.toLowerCase().includes(q) ||
          p.category_ar.toLowerCase().includes(q) ||
          p.tags.some(t => t.toLowerCase().includes(q)) ||
          p.ai_compatibility.some(ai => ai.toLowerCase().includes(q)) ||
          p.prompt_fr.toLowerCase().includes(q) ||
          p.prompt_ar.toLowerCase().includes(q)
        );
      });
    }

    return list;
  }, [
    prompts,
    currentSection,
    selectedCategory,
    selectedLevel,
    selectedAiModel,
    searchQuery,
    favoriteIds,
    recentIds
  ]);

  const isAr = language === 'ar';

  return (
    <div className="min-h-screen w-full max-w-full overflow-x-hidden bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 flex flex-col font-sans selection:bg-indigo-500 selection:text-white transition-colors duration-200">
      {/* Top Header */}
      <Header
        language={language}
        onLanguageChange={setLanguage}
        theme={theme}
        onThemeToggle={() => setTheme(t => (t === 'dark' ? 'light' : 'dark'))}
        searchQuery={searchQuery}
        onSearchChange={query => {
          setSearchQuery(query);
          if (query.trim() && currentSection === 'dashboard') {
            setCurrentSection('prompts');
          }
        }}
        onOpenNewPrompt={() => {
          setEditingPrompt(null);
          setFormModalOpen(true);
        }}
        onOpenExportImport={() => setExportImportModalOpen(true)}
        mobileMenuOpen={mobileMenuOpen}
        onToggleMobileMenu={() => setMobileMenuOpen(prev => !prev)}
        isInstallable={isInstallable}
        isInstalled={isInstalled}
        onInstallClick={() => setPwaModalOpen(true)}
        favoriteCount={favoriteIds.size}
        onSelectFavorites={() => {
          setCurrentSection('favorites');
          setSelectedCategory(null);
        }}
        isReaderMode={isReaderMode}
        onToggleReaderMode={() => setIsReaderMode(prev => !prev)}
        prompts={prompts}
        onSelectPrompt={p => {
          setSelectedDetailPrompt(p);
          setCurrentSection('prompts');
        }}
        onSelectCategory={catId => {
          setSelectedCategory(catId);
          setCurrentSection('prompts');
        }}
      />

      {/* Main Layout Area */}
      <div
        className={`flex-1 w-full max-w-full mx-auto flex transition-all duration-300 min-w-0 ${
          isReaderMode ? 'max-w-[102rem] px-2 sm:px-6' : 'max-w-7xl'
        }`}
      >
        {/* Sidebar Navigation */}
        <Sidebar
          currentSection={currentSection}
          onSelectSection={sec => setCurrentSection(sec)}
          selectedCategory={selectedCategory}
          onSelectCategory={catId => {
            setSelectedCategory(catId);
            setCurrentSection('prompts');
          }}
          language={language}
          totalPromptsCount={prompts.length}
          favoritesCount={favoriteIds.size}
          recentCount={recentIds.length}
          categoryPromptCounts={categoryPromptCounts}
          onOpenNewPrompt={() => {
            setEditingPrompt(null);
            setFormModalOpen(true);
          }}
          onOpenExportImport={() => setExportImportModalOpen(true)}
          isOpenMobile={mobileMenuOpen}
          onCloseMobile={() => setMobileMenuOpen(false)}
          isReaderMode={isReaderMode}
        />

        {/* Content View Container */}
        <main className="flex-1 min-w-0 w-full max-w-full p-2.5 sm:p-6 overflow-y-auto overflow-x-hidden">
          {/* Reader Mode Active Notification Banner */}
          {isReaderMode && (
            <div className="flex items-center justify-between gap-3 p-3 px-4 mb-4 rounded-2xl bg-gradient-to-r from-indigo-50/95 via-purple-50/90 to-indigo-50/95 dark:from-indigo-950/90 dark:via-slate-900/90 dark:to-purple-950/90 border border-indigo-200 dark:border-indigo-500/40 text-indigo-900 dark:text-indigo-100 text-xs shadow-md dark:shadow-lg backdrop-blur-md animate-in slide-in-from-top-2">
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded-lg bg-indigo-100 text-indigo-700 dark:bg-indigo-500/20 dark:text-indigo-400">
                  <BookOpen className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-semibold text-indigo-950 dark:text-white">
                    {isAr ? 'وضع القراءة نشط' : 'Mode Lecture actif'} :
                  </span>{' '}
                  <span className="text-slate-600 dark:text-slate-300">
                    {isAr
                      ? 'تم تكبير مساحة العرض وإخفاء الشريط الجانبي لقراءة مريحة بدون تشتيت (اضغط Alt+R أو Esc للإلغاء).'
                      : 'Zone de contenu élargie et barre latérale masquée pour une concentration maximale (raccourci Alt+R ou Esc).'}
                  </span>
                </div>
              </div>
              <button
                onClick={() => setIsReaderMode(false)}
                className="px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-xs shadow-sm transition-all hover:scale-105 shrink-0"
              >
                {isAr ? 'استعادة الشريط الجانبي' : 'Quitter le mode lecture'}
              </button>
            </div>
          )}

          {currentSection === 'dashboard' ? (
            <DashboardView
              stats={stats}
              recentPrompts={recentPrompts}
              favoritePrompts={favoritePrompts}
              language={language}
              onSelectCategory={catId => {
                setSelectedCategory(catId);
                setCurrentSection('prompts');
              }}
              onSelectPrompt={p => setSelectedDetailPrompt(p)}
              onExploreAll={() => {
                setCurrentSection('prompts');
                setSelectedCategory(null);
              }}
            />
          ) : (
            <div className="space-y-5 pb-12">
              {/* Filter and Control Bar */}
              <div className="p-3.5 sm:p-4 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 space-y-3 w-full min-w-0 max-w-full overflow-hidden shadow-sm">
                <div className="flex items-center justify-between gap-2.5 sm:gap-3 flex-wrap">
                  <div className="min-w-0">
                    <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2 flex-wrap">
                      <span className="truncate">
                        {currentSection === 'favorites'
                          ? isAr
                            ? 'الأوامر المفضلة'
                            : 'Prompts Favoris'
                          : currentSection === 'recent'
                          ? isAr
                            ? 'المستخدمة حديثاً'
                            : 'Récemment Utilisés'
                          : selectedCategory
                          ? isAr
                            ? CATEGORIES.find(c => c.id === selectedCategory)?.title_ar
                            : CATEGORIES.find(c => c.id === selectedCategory)?.title_fr
                          : isAr
                          ? 'جميع الأوامر البرمجية والمهنية'
                          : 'Tous les prompts professionnels'}
                      </span>
                      <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200 dark:bg-indigo-500/20 dark:text-indigo-300 dark:border-indigo-500/30 shrink-0">
                        {filteredPrompts.length}
                      </span>
                    </h2>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 truncate">
                      {isAr
                        ? 'انقر على أي أمر لمعاينة المتغيرات ونسخه بضغطة زر'
                        : 'Cliquez sur un prompt pour personnaliser ses variables et le copier'}
                    </p>
                  </div>

                  {/* Reset Filters */}
                  {(selectedCategory ||
                    selectedLevel !== 'all' ||
                    selectedAiModel !== 'all' ||
                    searchQuery) && (
                    <button
                      onClick={() => {
                        setSelectedCategory(null);
                        setSelectedLevel('all');
                        setSelectedAiModel('all');
                        setSearchQuery('');
                      }}
                      className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-xs font-medium text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 dark:text-slate-300 dark:hover:text-white dark:bg-slate-800 dark:hover:bg-slate-700 transition-colors shrink-0"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>{isAr ? 'إعادة ضبط الفلاتر' : 'Réinitialiser filtres'}</span>
                    </button>
                  )}
                </div>

                {/* Filter Pills: Levels & AI Models */}
                <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap pt-2 border-t border-slate-200 dark:border-slate-800/80 text-xs w-full min-w-0">
                  {/* Level selector */}
                  <span className="text-slate-500 dark:text-slate-400 text-[11px] font-semibold uppercase tracking-wider">
                    {isAr ? 'المستوى:' : 'Niveau :'}
                  </span>
                  {(['all', 'debutant', 'intermediaire', 'expert'] as const).map(lvl => (
                    <button
                      key={lvl}
                      onClick={() => setSelectedLevel(lvl)}
                      className={`px-2.5 py-1 rounded-lg transition-all ${
                        selectedLevel === lvl
                          ? 'bg-indigo-600 text-white font-medium shadow-sm'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700'
                      }`}
                    >
                      {lvl === 'all'
                        ? isAr
                          ? 'الكل'
                          : 'Tous'
                        : lvl === 'debutant'
                        ? isAr
                          ? 'مبتدئ'
                          : 'Débutant'
                        : lvl === 'expert'
                        ? isAr
                          ? 'خبير'
                          : 'Expert'
                        : isAr
                        ? 'متوسط'
                        : 'Intermédiaire'}
                    </button>
                  ))}

                  <div className="w-px h-4 bg-slate-200 dark:bg-slate-800 mx-1 hidden sm:block" />

                  {/* AI selector */}
                  <span className="text-slate-500 dark:text-slate-400 text-[11px] font-semibold uppercase tracking-wider">
                    {isAr ? 'النموذج:' : 'Modèle :'}
                  </span>
                  {(['all', 'ChatGPT', 'Claude', 'Gemini', 'Cursor'] as const).map(model => (
                    <button
                      key={model}
                      onClick={() => setSelectedAiModel(model)}
                      className={`px-2.5 py-1 rounded-lg transition-all ${
                        selectedAiModel === model
                          ? 'bg-indigo-600 text-white font-medium shadow-sm'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700'
                      }`}
                    >
                      {model === 'all' ? (isAr ? 'كافة النماذج' : 'Tous') : model}
                    </button>
                  ))}
                </div>
              </div>

              {/* Prompts Cards Grid */}
              {filteredPrompts.length > 0 ? (
                <div
                  className={`grid gap-3.5 sm:gap-4 transition-all duration-300 ${
                    isReaderMode
                      ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4'
                      : 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3'
                  }`}
                >
                  {filteredPrompts.map(prompt => (
                    <PromptCard
                      key={prompt.id}
                      prompt={prompt}
                      language={language}
                      onSelectPrompt={p => setSelectedDetailPrompt(p)}
                      onCopyFr={p => handleCopyFr(p)}
                      onCopyAr={p => handleCopyAr(p)}
                      onToggleFavorite={id => handleToggleFavorite(id)}
                      isFavorite={favoriteIds.has(prompt.id)}
                    />
                  ))}
                </div>
              ) : (
                /* Empty state */
                <div className="p-12 rounded-3xl bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/80 text-center space-y-3 shadow-sm">
                  <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-slate-800/80 flex items-center justify-center text-slate-500 dark:text-slate-400 mx-auto">
                    <Search className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-base text-slate-900 dark:text-slate-200">
                    {isAr ? 'لم يتم العثور على أي نتائج' : 'Aucun résultat trouvé'}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm mx-auto">
                    {isAr
                      ? 'جرب البحث بكلمات أخرى أو قم بإلغاء الفلاتر المحددة.'
                      : 'Essayez d’ajuster votre recherche ou de réinitialiser les filtres actifs.'}
                  </p>
                  <button
                    onClick={() => {
                      setSelectedCategory(null);
                      setSelectedLevel('all');
                      setSelectedAiModel('all');
                      setSearchQuery('');
                      setCurrentSection('prompts');
                    }}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-md transition-all"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>{isAr ? 'عرض كافة الأوامر' : 'Afficher tous les prompts'}</span>
                  </button>
                </div>
              )}
            </div>
          )}
        </main>
      </div>

      {/* Modals */}
      {selectedDetailPrompt && (
        <PromptDetailModal
          prompt={selectedDetailPrompt}
          isOpen={Boolean(selectedDetailPrompt)}
          onClose={() => setSelectedDetailPrompt(null)}
          language={language}
          onCopyFr={text => handleCopyFr(text)}
          onCopyAr={text => handleCopyAr(text)}
          onCopyBoth={(frText, arText) => handleCopyBoth(frText, arText)}
          onToggleFavorite={id => handleToggleFavorite(id)}
          isFavorite={favoriteIds.has(selectedDetailPrompt.id)}
          onEditPrompt={p => {
            setEditingPrompt(p);
            setFormModalOpen(true);
          }}
          onDeletePrompt={p => {
            setDeleteModalPrompt(p);
          }}
        />
      )}

      {formModalOpen && (
        <PromptFormModal
          isOpen={formModalOpen}
          onClose={() => {
            setFormModalOpen(false);
            setEditingPrompt(null);
          }}
          onSave={handleSavePrompt}
          initialPrompt={editingPrompt}
          language={language}
        />
      )}

      {deleteModalPrompt && (
        <DeleteConfirmModal
          isOpen={Boolean(deleteModalPrompt)}
          onClose={() => setDeleteModalPrompt(null)}
          onConfirm={handleDeletePrompt}
          prompt={deleteModalPrompt}
          language={language}
        />
      )}

      {exportImportModalOpen && (
        <ExportImportModal
          isOpen={exportImportModalOpen}
          onClose={() => setExportImportModalOpen(false)}
          prompts={prompts}
          onImportPrompts={handleImportPrompts}
          onResetDefaults={handleResetDefaults}
          language={language}
        />
      )}

      {pwaModalOpen && (
        <PWAInstallModal
          isOpen={pwaModalOpen}
          onClose={() => setPwaModalOpen(false)}
          isInstallable={isInstallable}
          isInstalled={isInstalled}
          isIOS={isIOS}
          onInstall={installApp}
          language={language}
        />
      )}

      {/* Floating Mobile PWA Install Banner */}
      <PWAInstallBanner
        isInstallable={isInstallable}
        isInstalled={isInstalled}
        isIOS={isIOS}
        onInstall={installApp}
        onOpenModal={() => setPwaModalOpen(true)}
        language={language}
      />

      {/* Floating Offline Badge */}
      <OfflineIndicator isOnline={isOnline} language={language} />

      {/* Toasts */}
      <ToastContainer toasts={toasts} onDismiss={dismissToast} lang={language} />
    </div>
  );
}
