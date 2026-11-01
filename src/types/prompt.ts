export type PromptLevel = 'debutant' | 'intermediaire' | 'expert';

export type AIModelCompatibility =
  | 'ChatGPT'
  | 'Gemini'
  | 'Claude'
  | 'Cursor'
  | 'Google AI Studio'
  | 'Antigravity'
  | 'DeepSeek'
  | 'Mistral'
  | 'Perplexity';

export interface PromptItem {
  id: string; // Unique ID, e.g. "pml-dev-01"
  slash: string; // Slash command, e.g. "/dev-react-arch"
  title_fr: string;
  title_ar: string;
  category_id: string;
  category_fr: string;
  category_ar: string;
  function_fr: string; // Brief function / role
  function_ar: string;
  prompt_fr: string; // Full French prompt with [VARIABLES]
  prompt_ar: string; // Full Arabic prompt with [المتغيرات] or [VARIABLES]
  level: PromptLevel;
  ai_compatibility: AIModelCompatibility[];
  tags: string[]; // Keywords for search
  is_favorite?: boolean;
  usage_count?: number;
  last_used_at?: string; // ISO date
  custom?: boolean; // User created/modified
  created_at?: string;
  updated_at?: string;
}

export interface CategoryInfo {
  id: string;
  number: number;
  slug: string;
  title_fr: string;
  title_ar: string;
  description_fr: string;
  description_ar: string;
  icon_name: string;
  color_gradient: string;
  badge_color: string;
}

export interface AppStats {
  totalPrompts: number;
  totalCategories: number;
  favoriteCount: number;
  recentCount: number;
  customCount: number;
  copiedCount: number;
  levelCounts: {
    debutant: number;
    intermediaire: number;
    expert: number;
  };
  aiModelCounts: Record<string, number>;
}

export type Language = 'fr' | 'ar';
export type ThemeMode = 'dark' | 'light';
export type ViewMode = 'grid' | 'table';
