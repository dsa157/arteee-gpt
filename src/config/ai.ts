export const AI_CONFIG = {
  provider: 'groq' as const,
  model: 'llama3-70b-8192',
  baseUrl: 'https://api.groq.com',
  apiKey: process.env.NEXT_PUBLIC_GROQ_API_KEY || '',
  temperature: 0.7,
  maxTokens: 1024,
  fallbackToLocal: false
};

export type AIConfig = typeof AI_CONFIG;

export function getConfig(): AIConfig {
  return {
    ...AI_CONFIG,
    model: process.env.NEXT_PUBLIC_GROQ_MODEL || AI_CONFIG.model,
    baseUrl: process.env.NEXT_PUBLIC_GROQ_BASE_URL || AI_CONFIG.baseUrl
  };
}
