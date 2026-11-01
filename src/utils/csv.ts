import { PromptItem, PromptLevel, AIModelCompatibility } from '../types/prompt';

/**
 * Escapes a cell value for CSV (RFC 4180).
 */
function escapeCsvValue(val: string | number | undefined | null): string {
  if (val === undefined || val === null) return '""';
  const str = String(val);
  const escaped = str.replace(/"/g, '""');
  return `"${escaped}"`;
}

/**
 * Exports prompts as a UTF-8 CSV string with BOM (\uFEFF)
 * for instant Excel / Windows 11 compatibility.
 */
export function exportToCsv(prompts: PromptItem[]): string {
  const headers = [
    'ID',
    'Slash_Command',
    'Titre_FR',
    'Titre_AR',
    'Categorie_ID',
    'Categorie_FR',
    'Categorie_AR',
    'Fonction_FR',
    'Fonction_AR',
    'Prompt_FR',
    'Prompt_AR',
    'Niveau',
    'Compatibilite_IA',
    'Tags'
  ];

  const rows = prompts.map(p => [
    escapeCsvValue(p.id),
    escapeCsvValue(p.slash),
    escapeCsvValue(p.title_fr),
    escapeCsvValue(p.title_ar),
    escapeCsvValue(p.category_id),
    escapeCsvValue(p.category_fr),
    escapeCsvValue(p.category_ar),
    escapeCsvValue(p.function_fr),
    escapeCsvValue(p.function_ar),
    escapeCsvValue(p.prompt_fr),
    escapeCsvValue(p.prompt_ar),
    escapeCsvValue(p.level),
    escapeCsvValue(p.ai_compatibility.join(';')),
    escapeCsvValue(p.tags.join(';'))
  ].join(','));

  // Prepend UTF-8 BOM \uFEFF
  return '\uFEFF' + [headers.join(','), ...rows].join('\r\n');
}

/**
 * Downloads a text file (CSV or JSON) to the user's browser.
 */
export function downloadFile(content: string, filename: string, mimeType: string): void {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

/**
 * Robust CSV parser handling multiline quoted fields and escaped quotes.
 */
export function parseCsv(csvText: string): PromptItem[] {
  // Strip BOM if present
  let cleanText = csvText.startsWith('\uFEFF') ? csvText.slice(1) : csvText;
  
  const rows: string[][] = [];
  let currentRow: string[] = [];
  let currentVal = '';
  let insideQuotes = false;

  for (let i = 0; i < cleanText.length; i++) {
    const char = cleanText[i];
    const nextChar = cleanText[i + 1];

    if (insideQuotes) {
      if (char === '"' && nextChar === '"') {
        currentVal += '"';
        i++; // skip escaped quote
      } else if (char === '"') {
        insideQuotes = false;
      } else {
        currentVal += char;
      }
    } else {
      if (char === '"') {
        insideQuotes = true;
      } else if (char === ',') {
        currentRow.push(currentVal.trim());
        currentVal = '';
      } else if (char === '\r') {
        if (nextChar === '\n') i++;
        currentRow.push(currentVal.trim());
        if (currentRow.some(col => col.length > 0)) {
          rows.push(currentRow);
        }
        currentRow = [];
        currentVal = '';
      } else if (char === '\n') {
        currentRow.push(currentVal.trim());
        if (currentRow.some(col => col.length > 0)) {
          rows.push(currentRow);
        }
        currentRow = [];
        currentVal = '';
      } else {
        currentVal += char;
      }
    }
  }

  if (currentVal.length > 0 || currentRow.length > 0) {
    currentRow.push(currentVal.trim());
    if (currentRow.some(col => col.length > 0)) {
      rows.push(currentRow);
    }
  }

  if (rows.length < 2) return [];

  // Parse header and map indices
  const headerRow = rows[0].map(h => h.toLowerCase().replace(/[^a-z0-9_]/g, ''));
  const getIdx = (colName: string) => headerRow.findIndex(h => h.includes(colName));

  const idIdx = getIdx('id');
  const slashIdx = getIdx('slash');
  const titleFrIdx = getIdx('titre_fr') >= 0 ? getIdx('titre_fr') : getIdx('title_fr');
  const titleArIdx = getIdx('titre_ar') >= 0 ? getIdx('titre_ar') : getIdx('title_ar');
  const catIdIdx = getIdx('categorie_id') >= 0 ? getIdx('categorie_id') : getIdx('category_id');
  const catFrIdx = getIdx('categorie_fr') >= 0 ? getIdx('categorie_fr') : getIdx('category_fr');
  const catArIdx = getIdx('categorie_ar') >= 0 ? getIdx('categorie_ar') : getIdx('category_ar');
  const funcFrIdx = getIdx('fonction_fr') >= 0 ? getIdx('fonction_fr') : getIdx('function_fr');
  const funcArIdx = getIdx('fonction_ar') >= 0 ? getIdx('fonction_ar') : getIdx('function_ar');
  const promptFrIdx = getIdx('prompt_fr');
  const promptArIdx = getIdx('prompt_ar');
  const levelIdx = getIdx('niveau') >= 0 ? getIdx('niveau') : getIdx('level');
  const aiIdx = getIdx('compatibilite') >= 0 ? getIdx('compatibilite') : getIdx('ai');
  const tagsIdx = getIdx('tag');

  const parsedItems: PromptItem[] = [];

  for (let r = 1; r < rows.length; r++) {
    const row = rows[r];
    if (row.length < 5) continue;

    const id = (idIdx >= 0 && row[idIdx]) ? row[idIdx] : `pml-custom-${Date.now()}-${r}`;
    const slash = (slashIdx >= 0 && row[slashIdx]) ? row[slashIdx] : `/custom-${r}`;
    const title_fr = (titleFrIdx >= 0 && row[titleFrIdx]) ? row[titleFrIdx] : 'Prompt Importé';
    const title_ar = (titleArIdx >= 0 && row[titleArIdx]) ? row[titleArIdx] : title_fr;
    const category_id = (catIdIdx >= 0 && row[catIdIdx]) ? row[catIdIdx] : 'dev';
    const category_fr = (catFrIdx >= 0 && row[catFrIdx]) ? row[catFrIdx] : 'Développement informatique';
    const category_ar = (catArIdx >= 0 && row[catArIdx]) ? row[catArIdx] : 'تطوير البرمجيات والأنظمة';
    const function_fr = (funcFrIdx >= 0 && row[funcFrIdx]) ? row[funcFrIdx] : '';
    const function_ar = (funcArIdx >= 0 && row[funcArIdx]) ? row[funcArIdx] : function_fr;
    const prompt_fr = (promptFrIdx >= 0 && row[promptFrIdx]) ? row[promptFrIdx] : '';
    const prompt_ar = (promptArIdx >= 0 && row[promptArIdx]) ? row[promptArIdx] : prompt_fr;

    const rawLevel = (levelIdx >= 0 && row[levelIdx]) ? row[levelIdx].toLowerCase() : 'intermediaire';
    let level: PromptLevel = 'intermediaire';
    if (rawLevel.includes('deb') || rawLevel.includes('beg') || rawLevel.includes('مبتد')) level = 'debutant';
    else if (rawLevel.includes('exp') || rawLevel.includes('خبير')) level = 'expert';

    const rawAi = (aiIdx >= 0 && row[aiIdx]) ? row[aiIdx] : 'ChatGPT;Gemini;Claude';
    const ai_compatibility = rawAi.split(/[;,]/).map(s => s.trim() as AIModelCompatibility).filter(Boolean);

    const rawTags = (tagsIdx >= 0 && row[tagsIdx]) ? row[tagsIdx] : '';
    const tags = rawTags.split(/[;,]/).map(s => s.trim()).filter(Boolean);

    if (prompt_fr || prompt_ar) {
      parsedItems.push({
        id,
        slash: slash.startsWith('/') ? slash : `/${slash}`,
        title_fr,
        title_ar,
        category_id,
        category_fr,
        category_ar,
        function_fr,
        function_ar,
        prompt_fr,
        prompt_ar,
        level,
        ai_compatibility: ai_compatibility.length > 0 ? ai_compatibility : ['ChatGPT', 'Gemini', 'Claude'],
        tags: tags.length > 0 ? tags : [title_fr.toLowerCase()],
        custom: true
      });
    }
  }

  return parsedItems;
}

/**
 * Exports full backup as JSON
 */
export function exportToJson(prompts: PromptItem[]): string {
  const payload = {
    app: 'Prompt Master Library',
    version: '1.0.0',
    export_date: new Date().toISOString(),
    count: prompts.length,
    prompts
  };
  return JSON.stringify(payload, null, 2);
}

/**
 * Validates and parses JSON backup
 */
export function parseJsonBackup(jsonText: string): PromptItem[] {
  try {
    const data = JSON.parse(jsonText);
    const list = Array.isArray(data) ? data : data.prompts;
    if (!Array.isArray(list)) return [];
    return list.filter((p: any) => p && typeof p === 'object' && p.id && (p.prompt_fr || p.prompt_ar));
  } catch (err) {
    console.error('JSON parse error:', err);
    return [];
  }
}
