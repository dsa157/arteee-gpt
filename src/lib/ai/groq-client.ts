import { Groq } from 'groq-sdk';
import { AI_CONFIG } from '@/config/ai';
import type { AIClient, ChatMessage } from './types';

export class GroqClient implements AIClient {
  private groq: Groq;

  constructor() {
    if (!AI_CONFIG.apiKey) {
      throw new Error(
        'GROQ_API_KEY is not configured.\n' +
        'Please add NEXT_PUBLIC_GROQ_API_KEY to your .env.local file\n' +
        'and restart the development server.'
      );
    }
    
    this.groq = new Groq({
      apiKey: AI_CONFIG.apiKey,
      baseURL: AI_CONFIG.baseUrl,
      dangerouslyAllowBrowser: true
    });
  }

  async chat(messages: ChatMessage[]): Promise<string> {
    const completion = await this.groq.chat.completions.create({
      messages,
      model: AI_CONFIG.model,
      temperature: AI_CONFIG.temperature,
      max_tokens: AI_CONFIG.maxTokens
    });
    return completion.choices[0]?.message?.content || '';
  }
}
