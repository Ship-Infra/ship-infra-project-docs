'use client';

import type { ReactNode } from 'react';

import { RootProvider } from 'fumadocs-ui/provider/next';
import { PostHogProvider } from './posthog-provider';

export function Providers({ children }: { children: ReactNode }) {
  return (
    <RootProvider>
      <PostHogProvider>{children}</PostHogProvider>
    </RootProvider>
  );
}
