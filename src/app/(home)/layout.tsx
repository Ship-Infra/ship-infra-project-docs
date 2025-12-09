import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import '../global.css';

export const metadata: Metadata = {
  title: 'Ship Infrastructure',
  description: 'Open Source Project',
  openGraph: {
    images: ['/opengraph-image.png'],
    type: 'website',
    url: 'https://ship-infra-project.viktorvasylkovskyi.com/',
    title: 'Ship Infra Project',
    description: 'Ship Infrastructure Open Source Project',
    siteName: 'Ship Infra Project',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return children;
}
