'use client';

import { useContext } from 'react';
import type { SettingsContextType } from '@/contexts/settingsContext';
import { SettingsContext } from '@/contexts/settingsContext';

export const useSettings = (): SettingsContextType => {
  const context = useContext(SettingsContext);

  if (context === undefined) {
    throw new Error('useSettings must be used within a SettingsProvider');
  }

  return context;
};
