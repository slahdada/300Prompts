/**
 * Utility to extract and replace variables in square brackets, e.g. [PROJET], [OBJECTIF], [المشروع]
 */

// Regex matching [VARIABLE_NAME] in uppercase/alphanumeric/spaces/Arabic characters
const VARIABLE_REGEX = /\[([A-Z0-9_\u0600-\u06FF\s\-/:.]+)\]/g;

export interface ExtractedVariable {
  key: string; // The raw key inside brackets, e.g. "PROJET"
  display: string; // Clean label for the input
  isArabic: boolean;
}

export function extractVariables(promptText: string): ExtractedVariable[] {
  if (!promptText) return [];

  const found = new Set<string>();
  const results: ExtractedVariable[] = [];
  const matches = promptText.matchAll(/\[([A-Z0-9_\u0600-\u06FF\s\-/:.]+)\]/g);

  for (const match of matches) {
    const raw = match[1].trim();
    if (!raw || found.has(raw)) continue;
    
    // Ignore internal bracket notations if any (like markdown links)
    if (raw.length > 50) continue;

    found.add(raw);
    const isArabic = /[\u0600-\u06FF]/.test(raw);

    results.push({
      key: raw,
      display: formatVariableLabel(raw),
      isArabic
    });
  }

  return results;
}

export function replaceVariables(
  template: string,
  values: Record<string, string>,
  keepBracketsIfEmpty: boolean = true
): string {
  if (!template) return '';

  return template.replace(/\[([A-Z0-9_\u0600-\u06FF\s\-/:.]+)\]/g, (match, key) => {
    const trimmedKey = key.trim();
    const val = values[trimmedKey];
    if (val !== undefined && val.trim() !== '') {
      return val.trim();
    }
    return keepBracketsIfEmpty ? match : '';
  });
}

function formatVariableLabel(key: string): string {
  return key
    .replace(/_/g, ' ')
    .toLowerCase()
    .replace(/(?:^|\s)\S/g, a => a.toUpperCase());
}
