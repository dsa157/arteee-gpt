export interface ChatMessage {
  id: string
  role: 'user' | 'assistant' | 'system'
  content: string
  createdAt?: Date
}

export interface AIClient {
  chat(messages: ChatMessage[]): Promise<string>
}
