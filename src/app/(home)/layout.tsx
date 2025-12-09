import type { ReactNode } from 'react';
import '../global.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return children;
}
