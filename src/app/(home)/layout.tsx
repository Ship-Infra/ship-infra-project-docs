import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import '../global.css';

export const metadata: Metadata = {
  title: 'Ship Infrastructure Project',
  description: 'Learn Infrastructure by Doing',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return children;
}
