import './global.css';
import { ThemeProvider } from '@/components/theme-provider';
import { SettingsProvider } from '@/contexts/settingsContext';
import type { Metadata, Viewport } from 'next';
import './global.css';
import { Providers } from './providers';

import localFont from 'next/font/local';

const montserratFont = localFont({
  src: [
    {
      path: './fonts/Montserrat-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Montserrat-Black.woff2',
      weight: '600',
      style: 'normal',
    },
  ],
});

export const metadata: Metadata = {
  title: 'Ship Infra - AWS Deployment Tutorials for Developers',
  description:
    'Learn to deploy apps on AWS with comprehensive tutorials. Open source infrastructure guides for modern developers.',
  generator: 'Next.js',
  keywords: ['AWS', 'deployment', 'infrastructure', 'tutorials', 'DevOps', 'open source'],
  authors: [{ name: 'Viktor Vasylkovskyi' }],
  openGraph: {
    images: ['/opengraph-image.png'],
    type: 'website',
    url: 'https://ship-infra.com/',
    title: 'Ship Infra - AWS Deployment Tutorials',
    description:
      'Learn to deploy apps on AWS with comprehensive tutorials. Open source infrastructure guides for modern developers.',
    siteName: 'Ship Infra',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ship Infra - AWS Deployment Tutorials',
    description: 'Learn to deploy apps on AWS with comprehensive tutorials.',
  },
  icons: {
    icon: [
      {
        url: '/logo.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/logo-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/logo.svg',
        type: 'image',
      },
    ],
    apple: '/logo.png',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

// eslint-disable-next-line no-undef
export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
      <SettingsProvider>
        <html lang='en' className={montserratFont.className} suppressHydrationWarning>
          <body className='flex flex-col min-h-screen'>
            <Providers>{children}</Providers>
          </body>
        </html>
      </SettingsProvider>
    </ThemeProvider>
  );
}
