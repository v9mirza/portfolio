import { useState } from 'react'
import { ThemeToggle } from './ThemeToggle'
import { cn } from '../lib/cn'

export type NavItem = {
  id: string
  label: string
}

export function Navbar({
  activeId,
  items,
  onNavigate,
}: {
  activeId: string
  items: readonly NavItem[]
  onNavigate: (id: string) => void
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/70 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/55 dark:border-zinc-800/60 dark:bg-zinc-950/65 dark:supports-[backdrop-filter]:bg-zinc-950/45">
      <div className="mx-auto flex h-14 w-full max-w-[1120px] items-center justify-between px-4 sm:h-16 sm:px-6">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => onNavigate('home')}
            className="rounded-xl px-2 py-1 text-sm font-medium text-zinc-900 hover:bg-zinc-200/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60 dark:text-zinc-100 dark:hover:bg-zinc-800/20"
          >
            Hassan Mirza
          </button>
          <span className="hidden text-xs text-zinc-500 dark:text-zinc-400 sm:inline">
            Full-Stack Developer
          </span>
        </div>

        <nav className="hidden items-center gap-1 md:flex">
          {items.map((it) => {
            const active = it.id === activeId
            return (
              <button
                key={it.id}
                type="button"
                onClick={() => onNavigate(it.id)}
                className={cn(
                  'rounded-xl px-3 py-2 text-sm transition',
                  active
                    ? 'text-zinc-900 bg-zinc-200/35 dark:text-zinc-100 dark:bg-zinc-800/35'
                    : 'text-zinc-500/95 hover:text-zinc-900 hover:bg-zinc-200/20 dark:text-zinc-400/95 dark:hover:text-zinc-100 dark:hover:bg-zinc-800/20',
                )}
                aria-current={active ? 'page' : undefined}
              >
                {it.label}
              </button>
            )
          })}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-200/70 bg-white/60 text-zinc-700 transition hover:bg-zinc-200/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60 md:hidden dark:border-zinc-800/70 dark:bg-zinc-900/20 dark:text-zinc-200 dark:hover:bg-zinc-800/20"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-menu"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <svg viewBox="0 0 24 24" className="h-4 w-4">
                <path
                  fill="currentColor"
                  d="m18.3 5.71-1.41-1.41L12 9.17 7.11 4.3 5.7 5.71 10.59 10.6 5.7 15.49l1.41 1.41L12 12.01l4.89 4.89 1.41-1.41-4.89-4.89 4.89-4.89Z"
                />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" className="h-4 w-4">
                <path
                  fill="currentColor"
                  d="M4 7h16v2H4V7Zm0 4h16v2H4v-2Zm0 4h16v2H4v-2Z"
                />
              </svg>
            )}
          </button>

          <div className="hidden sm:flex items-center gap-2 rounded-xl border border-zinc-200/70 bg-white/60 px-3 py-1.5 text-xs text-zinc-500/90 dark:border-zinc-800/70 dark:bg-zinc-900/20 dark:text-zinc-400/90">
            <span>Cmd/Ctrl</span>
            <span className="rounded border border-zinc-200/70 bg-white/50 px-2 py-0.5 text-zinc-900 dark:border-zinc-800/70 dark:bg-zinc-950/50 dark:text-zinc-200">
              K
            </span>
          </div>
          <ThemeToggle />
        </div>
      </div>

      <div
        id="mobile-nav-menu"
        className={cn(
          'overflow-hidden border-t border-zinc-200/70 transition-[max-height,opacity] duration-300 md:hidden dark:border-zinc-800/60',
          mobileMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0',
        )}
      >
        <nav className="mx-auto grid w-full max-w-[1120px] grid-cols-2 gap-2 px-3 pb-3 pt-2 sm:grid-cols-3">
          {items.map((it) => {
            const active = it.id === activeId
            return (
              <button
                key={it.id}
                type="button"
                onClick={() => {
                  onNavigate(it.id)
                  setMobileMenuOpen(false)
                }}
                className={cn(
                  'rounded-xl px-3 py-2 text-xs transition',
                  active
                    ? 'text-zinc-900 bg-zinc-200/35 dark:text-zinc-100 dark:bg-zinc-800/35'
                    : 'text-zinc-500/95 hover:text-zinc-900 hover:bg-zinc-200/20 dark:text-zinc-400/95 dark:hover:text-zinc-100 dark:hover:bg-zinc-800/20',
                )}
                aria-current={active ? 'page' : undefined}
              >
                {it.label}
              </button>
            )
          })}
        </nav>
      </div>
    </header>
  )
}

