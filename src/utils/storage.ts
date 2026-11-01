import { PromptItem, Language, ThemeMode } from '../types/prompt';
import { INITIAL_PROMPTS } from '../data/prompts';

const STORAGE_KEYS = {
  PROMPTS: 'pml_prompts_v1',
  LANGUAGE: 'pml_lang_v1',
  THEME: 'pml_theme_v1',
  RECENT_IDS: 'pml_recent_ids_v1',
  FAVORITE_IDS: 'pml_fav_ids_v1',
  COPIED_COUNT: 'pml_copied_count_v1'
};

export function loadPrompts(): PromptItem[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.PROMPTS);
    if (!raw) {
      // First load: seed with 300 initial prompts
      savePrompts(INITIAL_PROMPTS);
      return INITIAL_PROMPTS;
    }
    const parsed: PromptItem[] = JSON.parse(raw);
    if (!Array.isArray(parsed) || parsed.length === 0) {
      savePrompts(INITIAL_PROMPTS);
      return INITIAL_PROMPTS;
    }

    // Merge favorite status from favorites list if kept separately
    const favIds = loadFavoriteIds();
    return parsed.map(p => ({
      ...p,
      is_favorite: favIds.has(p.id) || !!p.is_favorite
    }));
  } catch (err) {
    console.error('Failed to load prompts from localStorage:', err);
    return INITIAL_PROMPTS;
  }
}

export function savePrompts(prompts: PromptItem[]): void {
  try {
    localStorage.setItem(STORAGE_KEYS.PROMPTS, JSON.stringify(prompts));
  } catch (err) {
    console.error('Failed to save prompts to localStorage:', err);
  }
}

export function resetToDefaults(): PromptItem[] {
  const fresh = JSON.parse(JSON.stringify(INITIAL_PROMPTS));
  savePrompts(fresh);
  localStorage.removeItem(STORAGE_KEYS.RECENT_IDS);
  localStorage.removeItem(STORAGE_KEYS.FAVORITE_IDS);
  return fresh;
}

export function loadLanguage(): Language {
  try {
    const lang = localStorage.getItem(STORAGE_KEYS.LANGUAGE) as Language;
    return lang === 'ar' ? 'ar' : 'fr';
  } catch {
    return 'fr';
  }
}

export function saveLanguage(lang: Language): void {
  try {
    localStorage.setItem(STORAGE_KEYS.LANGUAGE, lang);
  } catch {
    // ignore
  }
}

export function loadTheme(): ThemeMode {
  try {
    const theme = localStorage.getItem(STORAGE_KEYS.THEME) as ThemeMode;
    if (theme === 'light' || theme === 'dark') return theme;
    // Default to dark for high-tech premium feel
    return 'dark';
  } catch {
    return 'dark';
  }
}

export function saveTheme(theme: ThemeMode): void {
  try {
    localStorage.setItem(STORAGE_KEYS.THEME, theme);
  } catch {
    // ignore
  }
}

export function loadFavoriteIds(): Set<string> {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.FAVORITE_IDS);
    return raw ? new Set(JSON.parse(raw)) : new Set();
  } catch {
    return new Set();
  }
}

export function saveFavoriteIds(ids: Set<string>): void {
  try {
    localStorage.setItem(STORAGE_KEYS.FAVORITE_IDS, JSON.stringify(Array.from(ids)));
  } catch {
    // ignore
  }
}

export function loadRecentIds(): string[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.RECENT_IDS);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveRecentIds(ids: string[]): void {
  try {
    localStorage.setItem(STORAGE_KEYS.RECENT_IDS, JSON.stringify(ids.slice(0, 30)));
  } catch {
    // ignore
  }
}

export function getCopiedCount(): number {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.COPIED_COUNT);
    return raw ? parseInt(raw, 10) || 0 : 0;
  } catch {
    return 0;
  }
}

export function incrementCopiedCount(): number {
  try {
    const current = getCopiedCount() + 1;
    localStorage.setItem(STORAGE_KEYS.COPIED_COUNT, current.toString());
    return current;
  } catch {
    return 0;
  }
}
