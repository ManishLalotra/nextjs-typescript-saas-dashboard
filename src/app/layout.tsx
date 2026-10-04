import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CloudOps SaaS Dashboard | Manish Lalotra',
  description: 'Enterprise multi-tenant subscription analytics and cloud infrastructure control plane.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen bg-slate-950 text-slate-100">{children}</body>
    </html>
  );
}
