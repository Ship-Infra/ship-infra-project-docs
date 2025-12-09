'use client';
import React, { useCallback, useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { useSettings } from '@/hooks/useSettings';
import type { Mode } from '@/contexts/settingsContext';
import {
  ThemeToggleButton,
  useThemeTransition,
} from '@/components/ui/shadcn-io/theme-toggle-button';

export const ThemeToggleGif = () => {
  const { setTheme, theme } = useTheme();
  const { settings, updateSettings } = useSettings();
  const { startTransition } = useThemeTransition();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  const handleThemeToggle = useCallback(() => {
    const newMode: Mode = theme === 'dark' ? 'light' : 'dark';

    startTransition(() => {
      const updatedSettings = {
        ...settings,
        mode: newMode,
        theme: {
          ...settings.theme,
          styles: {
            light: settings.theme.styles?.light || {},
            dark: settings.theme.styles?.dark || {},
          },
        },
      };
      updateSettings(updatedSettings);
      setTheme(newMode);
    });
  }, [theme, startTransition, settings, updateSettings, setTheme]);
  const currentTheme = settings.mode === 'system' ? 'light' : (settings.mode as 'light' | 'dark');
  if (!mounted) {
    return null;
  }
  return (
    <div className='flex flex-col items-center gap-3'>
      {/* <ThemeToggleButton
        theme={currentTheme}
        onClick={handleThemeToggle}
        variant='circle-blur'
        start='top-left'
      /> */}
      <ThemeToggleButton
        theme={currentTheme}
        onClick={handleThemeToggle}
        variant='gif'
        url='https://media.giphy.com/media/5PncuvcXbBuIZcSiQo/giphy.gif?cid=ecf05e47j7vdjtytp3fu84rslaivdun4zvfhej6wlvl6qqsz&ep=v1_stickers_search&rid=giphy.gif&ct=s'
      />
    </div>
  );
};
