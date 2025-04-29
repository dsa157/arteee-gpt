import { PromptInput } from '@/components/prompt-input';

export default function Home() {
  return (
    <main className="min-h-screen pt-20 pb-16 px-4 sm:px-8">
      <div className="max-w-4xl mx-auto">
        <PromptInput />
      </div>
    </main>
  );
}
