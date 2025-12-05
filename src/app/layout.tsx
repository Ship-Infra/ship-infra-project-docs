import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { PostHogProvider } from './posthog-provider';
import { SettingsProvider } from '@/contexts/settingsContext';

const inter = Inter({
  subsets: ['latin'],
});

// eslint-disable-next-line no-undef
export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
      <SettingsProvider>
        <html lang='en' className={inter.className} suppressHydrationWarning>
          <body className='flex flex-col min-h-screen'>
            <RootProvider>
              <PostHogProvider>{children}</PostHogProvider>
            </RootProvider>
          </body>
        </html>
      </SettingsProvider>
    </ThemeProvider>
  );
}
