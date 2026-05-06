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
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/70 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/55 dark:border-zinc-800/60 dark:bg-zinc-950/65 dark:supports-[backdrop-filter]:bg-zinc-950/45">
      <div className="mx-auto flex h-16 w-full max-w-[1120px] items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => onNavigate('home')}
            className="rounded-xl px-2 py-1 text-sm font-medium text-zinc-900 hover:bg-zinc-200/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 dark:text-zinc-100 dark:hover:bg-zinc-800/20"
          >
            Hassan Mirza
          </button>
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
          <div className="hidden sm:flex items-center gap-2 rounded-xl border border-zinc-200/70 bg-white/60 px-3 py-1.5 text-xs text-zinc-500/90 dark:border-zinc-800/70 dark:bg-zinc-900/20 dark:text-zinc-400/90">
            <span>Cmd/Ctrl</span>
            <span className="rounded border border-zinc-200/70 bg-white/50 px-2 py-0.5 text-zinc-900 dark:border-zinc-800/70 dark:bg-zinc-950/50 dark:text-zinc-200">
              K
            </span>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}

