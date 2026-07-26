import type { Metadata } from 'next';
import './globals.css';
import { ClientAppShell } from '@/components/ClientAppShell';

export const metadata: Metadata = {
  title: 'AI Recipe Generator | Instant Chef Recipes from Pantry Items',
  description: 'Transform whatever ingredients you have in your kitchen into delicious, easy-to-follow, step-by-step recipes in seconds with Google Gemini AI.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased min-h-screen">
        <ClientAppShell>{children}</ClientAppShell>
      </body>
    </html>
  );
}
