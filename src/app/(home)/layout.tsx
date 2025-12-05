import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import '../global.css';

export const metadata: Metadata = {
  title: 'Ship Infrastructure',
  description: 'Open Source Project',
  icons: {
    icon: '/logo.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return children;
}
