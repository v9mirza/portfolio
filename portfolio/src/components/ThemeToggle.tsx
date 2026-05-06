import { useLayoutEffect, useState } from 'react'
import { Button } from './Button'

type ThemeMode = 'dark' | 'light'

function getInitialTheme(): ThemeMode {
  try {
    const saved = localStorage.getItem('theme')
    if (saved === 'light' || saved === 'dark') return saved
  } catch {
    // ignore
  }
  // Default to dark (per requirement)
  return 'dark'
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<ThemeMode>(getInitialTheme)

  useLayoutEffect(() => {
    const root = document.documentElement
    root.classList.toggle('dark', theme === 'dark')
    try {
      localStorage.setItem('theme', theme)
    } catch {
      // ignore
    }
  }, [theme])

  return (
    <Button
      variant="ghost"
      size="sm"
      type="button"
      onClick={() => {
        const next: ThemeMode = theme === 'dark' ? 'light' : 'dark'
        setTheme(next)
        // Apply immediately so the UI updates even if React batching delays state.
        try {
          document.documentElement.classList.toggle('dark', next === 'dark')
        } catch {
          // ignore
        }
      }}
      aria-label="Toggle theme"
      className="border-zinc-200/70 bg-white/60 text-zinc-900 backdrop-blur dark:border-zinc-800/70 dark:bg-zinc-950/30 dark:text-zinc-200/90"
    >
      <span className="text-zinc-900 dark:text-zinc-200/90">
        {theme === 'dark' ? 'Dark' : 'Light'}
      </span>
      <span
        aria-hidden="true"
        className="inline-flex h-5 w-5 items-center justify-center rounded-md border border-zinc-200/70 bg-white/70 dark:border-zinc-800/70 dark:bg-zinc-900/20"
      >
        {theme === 'dark' ? (
          <svg viewBox="0 0 24 24" className="h-4 w-4 text-sky-300">
            <path
              fill="currentColor"
              d="M12 18a6 6 0 0 1 0-12c.2 0 .4 0 .6.03A8 8 0 1 0 17.97 12.6c.03.2.03.4.03.6A6 6 0 0 1 12 18Z"
            />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" className="h-4 w-4 text-sky-700">
            <path
              fill="currentColor"
              d="M12 18a6 6 0 0 1-6-6 6 6 0 0 1 12 0 6 6 0 0 1-6 6Zm0 3a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1ZM4.22 19.78a1 1 0 0 1 0-1.41l.7-.7a1 1 0 1 1 1.41 1.42l-.7.69a1 1 0 0 1-1.41 0ZM19.78 19.78a1 1 0 0 1-1.41 0l-.7-.69a1 1 0 1 1 1.41-1.42l.7.7a1 1 0 0 1 0 1.41ZM3 12a1 1 0 0 1-1-1 1 1 0 0 1 1-1h1a1 1 0 1 1 0 2H3Zm18 0a1 1 0 1 1 0-2h1a1 1 0 1 1 0 2h-1ZM4.93 4.93a1 1 0 0 1 1.41 0l.7.69A1 1 0 0 1 5.63 7.04l-.7-.7a1 1 0 0 1 0-1.41ZM18.36 4.93a1 1 0 0 1 0 1.41l-.7.7a1 1 0 0 1-1.41-1.42l.7-.69a1 1 0 0 1 1.41 0ZM12 2a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1Z"
            />
          </svg>
        )}
      </span>
    </Button>
  )
}

