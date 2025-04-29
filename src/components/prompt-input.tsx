'use client';

import { useState } from 'react';

export function PromptInput() {
  const [prompt, setPrompt] = useState('');

  return (
    <div className="space-y-4">
      <label htmlFor="prompt" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
        Describe your artwork
      </label>
      <div className="flex gap-2">
        <input
          id="prompt"
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="flex-1 rounded-md border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-4 py-2 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="A futuristic cityscape at sunset..."
        />
        <button 
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={() => console.log('Generating:', prompt)}
        >
          Generate
        </button>
      </div>
    </div>
  );
}
