import { useCallback, useState } from 'react';

export type Theme = 'light' | 'dark';

const THEME_COLOR: Record<Theme, string> = { light: '#fafaf7', dark: '#141413' };

// The initial theme is applied by the inline script in index.html before
// first paint; this hook reads it back and keeps DOM + storage in sync.
export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() =>
    document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light',
  );

  const toggle = useCallback(() => {
    setTheme((prev) => {
      const next: Theme = prev === 'dark' ? 'light' : 'dark';
      const root = document.documentElement;
      if (next === 'dark') root.dataset.theme = 'dark';
      else delete root.dataset.theme;
      document.querySelector('meta[name="theme-color"]')?.setAttribute('content', THEME_COLOR[next]);
      try {
        localStorage.setItem('theme', next);
      } catch {
        // Storage can be unavailable (private mode); the toggle still works for this visit.
      }
      return next;
    });
  }, []);

  return { theme, toggle };
}
