import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from '@/components/theme-provider';
import { Navigation } from '@/components/navigation';

export const metadata: Metadata = {
  title: "arteee-gpt",
  description: "AI-powered art generation",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
// Removed unused variables: geistSans, geistMono
