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
      const userMessage: ChatMessage = { role: 'user', content };
      const newMessages = [...messages, userMessage];
      
      const assistantMessage = await client.chat(newMessages);
      setMessages([...newMessages, { 
        role: 'assistant', 
        content: assistantMessage 
      }]);
    } finally {
      setIsLoading(false);
    }
  }, [messages]);

  return { messages, sendMessage, isLoading };
}
