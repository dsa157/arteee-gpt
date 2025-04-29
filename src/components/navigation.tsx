'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 w-full border-b border-zinc-800 bg-zinc-950/50 backdrop-blur-md z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-white">
          arteee-gpt
        </Link>
        
        <div className="flex items-center space-x-6">
          <Link 
            href="/" 
            className={`text-sm ${pathname === '/' ? 'text-white' : 'text-zinc-400 hover:text-white'}`}
          >
            Generate
          </Link>
          <Link 
            href="/gallery" 
            className={`text-sm ${pathname === '/gallery' ? 'text-white' : 'text-zinc-400 hover:text-white'}`}
          >
            Gallery
          </Link>
        </div>
      </div>
    </nav>
  );
}
