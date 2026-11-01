import { PromptItem } from '../../types/prompt';
import { BATCH_1_PROMPTS } from './batch1';
import { BATCH_2_PROMPTS } from './batch2';
import { BATCH_3_PROMPTS } from './batch3';
import { BATCH_4_PROMPTS } from './batch4';

export const INITIAL_PROMPTS: PromptItem[] = [
  ...BATCH_1_PROMPTS,
  ...BATCH_2_PROMPTS,
  ...BATCH_3_PROMPTS,
  ...BATCH_4_PROMPTS
];

// Verify initial prompts count (exactly 300)
export const PROMPT_COUNT = INITIAL_PROMPTS.length;

export function getInitialPrompts(): PromptItem[] {
  return JSON.parse(JSON.stringify(INITIAL_PROMPTS));
}
