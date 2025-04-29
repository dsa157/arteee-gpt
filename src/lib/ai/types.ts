export interface ChatMessage {
  role: 'user' | 'assistant' | 'system'
  content: string
  name?: string
}

export interface AIClient {
  chat(messages: ChatMessage[]): Promise<string>
}
