import { useState, useCallback } from 'react';
import { GroqClient } from '@/lib/ai/groq-client';
import type { ChatMessage } from '@/lib/ai/types';

export function useChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const client = new GroqClient();

  const sendMessage = useCallback(async (content: string) => {
    setIsLoading(true);
    try {
      const userMessage = { 
        role: 'user' as const, 
        content 
      };
      
      const assistantContent = await client.chat([
        ...messages.map(m => ({ role: m.role, content: m.content })),
        userMessage
      ]);
      
      setMessages([
        ...messages,
        userMessage,
        { 
          role: 'assistant' as const,
          content: assistantContent
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  }, [messages]);

  return { messages, sendMessage, isLoading };
}
