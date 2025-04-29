'use client'
import { useChat } from '@/hooks/useChat'
import type { ChatMessage } from '@/lib/ai/types'

export default function TestPage() {
  const { messages, sendMessage, isLoading } = useChat()
  
  return (
    <div className="p-4">
      <div className="mb-4 space-y-2">
        {messages.map((msg: ChatMessage, i: number) => (
          <div key={i} className={`p-2 rounded ${msg.role === 'user' ? 'bg-blue-100' : 'bg-gray-100'}`}>
            <strong>{msg.role}:</strong> {msg.content}
          </div>
        ))}
      </div>
      <button 
        onClick={() => sendMessage('Test message')}
        disabled={isLoading}
        className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
      >
        {isLoading ? 'Sending...' : 'Send Test Message'}
      </button>
    </div>
  )
}
