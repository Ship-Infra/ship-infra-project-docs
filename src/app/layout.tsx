import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import { ThemeProvider } from '@/components/theme-provider';
import { PostHogProvider } from './posthog-provider';
import { SettingsProvider } from '@/contexts/settingsContext';
import localFont from 'next/font/local';
import type { Metadata } from 'next/dist/lib/metadata/types/metadata-interface';

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
  title: 'Terraform AWS Tutorial — Ship Infra Project',
  description: 'A Complete Hands-On Terraform AWS Tutorial Series for Engineers',
  openGraph: {
    images: ['/opengraph-image.png'],
    type: 'website',
    url: 'https://ship-infra-project.viktorvasylkovskyi.com/',
    title: 'Terraform AWS Tutorial — Ship Infra',
    description:
      'Beginner-friendly Terraform AWS guide. Step-by-step tutorials to set up AWS infrastructure from scratch.',
    siteName: 'Ship Infra Project',
  },
};

// eslint-disable-next-line no-undef
export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <RootProvider>
      <ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
        <SettingsProvider>
          <html lang='en' className={montserratFont.className} suppressHydrationWarning>
            <body className='flex flex-col min-h-screen'>
              <RootProvider>
                <PostHogProvider>{children}</PostHogProvider>
              </RootProvider>
            </body>
          </html>
        </SettingsProvider>
      </ThemeProvider>
    </RootProvider>
  );
}
