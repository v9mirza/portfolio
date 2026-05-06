import { useEffect, useMemo, useRef, useState } from 'react'
import { cn } from '../lib/cn'

export type PaletteItem = {
  key: string
  label: string
  description?: string
  sectionId?: string
}

export function CommandPalette({
  items,
  onPick,
}: {
  items: PaletteItem[]
  onPick: (item: PaletteItem) => void
}) {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [activeIndex, setActiveIndex] = useState(0)
  const inputRef = useRef<HTMLInputElement | null>(null)

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return items
    return items.filter((it) => {
      return (
        it.label.toLowerCase().includes(q) ||
        (it.description ?? '').toLowerCase().includes(q) ||
        it.key.toLowerCase().includes(q)
      )
    })
  }, [items, query])

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      const isK = e.key.toLowerCase() === 'k'
      const isMod = e.metaKey || e.ctrlKey
      if (isMod && isK) {
        e.preventDefault()
        setOpen(true)
        setQuery('')
        setActiveIndex(0)
      }
      if (!open) return

      if (e.key === 'Escape') {
        e.preventDefault()
        setOpen(false)
        return
      }

      if (e.key === 'ArrowDown') {
        e.preventDefault()
        setActiveIndex((i) => Math.min(i + 1, Math.max(filtered.length - 1, 0)))
      }

      if (e.key === 'ArrowUp') {
        e.preventDefault()
        setActiveIndex((i) => Math.max(i - 1, 0))
      }

      if (e.key === 'Enter') {
        e.preventDefault()
        const item = filtered[activeIndex]
        if (item) {
          onPick(item)
          setOpen(false)
        }
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [activeIndex, filtered, onPick, open])

  useEffect(() => {
    if (!open) return
    const t = window.setTimeout(() => inputRef.current?.focus(), 50)
    return () => window.clearTimeout(t)
  }, [open])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[60]">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onMouseDown={() => setOpen(false)}
        aria-hidden="true"
      />

      <div className="relative mx-auto mt-20 w-full max-w-xl px-6">
        <div className="rounded-2xl border border-zinc-200/80 bg-white/85 shadow-soft backdrop-blur p-3 dark:border-zinc-800/70 dark:bg-zinc-950/70">
          <div className="flex items-center gap-3 rounded-xl border border-zinc-200/80 bg-white/70 px-3 dark:border-zinc-800/70 dark:bg-zinc-900/20">
            <div className="text-zinc-500/90 dark:text-zinc-400/90">
              <svg viewBox="0 0 24 24" className="h-4 w-4">
                <path
                  fill="currentColor"
                  d="M10 4a6 6 0 1 1 3.83 10.64l4.77 4.77-1.41 1.41-4.77-4.77A6 6 0 0 1 10 4Zm0 2a4 4 0 1 0 0 8a4 4 0 0 0 0-8Z"
                />
              </svg>
            </div>
            <input
              ref={inputRef}
              value={query}
              onChange={(e) => {
                setQuery(e.target.value)
                setActiveIndex(0)
              }}
              placeholder="Search sections…"
              className="h-11 flex-1 bg-transparent text-sm text-zinc-900 placeholder:text-zinc-500 outline-none dark:text-zinc-100 dark:placeholder:text-zinc-500"
              aria-label="Command palette search"
            />
            <div className="hidden sm:flex items-center gap-1 text-xs text-zinc-500/80 dark:text-zinc-400/80">
              <span className="rounded border border-zinc-200/70 bg-white/50 px-2 py-1 dark:border-zinc-800/70 dark:bg-zinc-900/20">
                ⌘
              </span>
              <span className="rounded border border-zinc-200/70 bg-white/50 px-2 py-1 dark:border-zinc-800/70 dark:bg-zinc-900/20">
                K
              </span>
            </div>
          </div>

          <div className="mt-2 max-h-[320px] overflow-auto rounded-xl border border-zinc-200/80 bg-white/80 dark:border-zinc-800/70 dark:bg-zinc-950/40">
            {filtered.length ? (
              <ul className="p-1">
                {filtered.map((item, idx) => {
                  const active = idx === activeIndex
                  return (
                    <li key={item.key}>
                      <button
                        type="button"
                        onMouseEnter={() => setActiveIndex(idx)}
                        onClick={() => {
                          onPick(item)
                          setOpen(false)
                        }}
                        className={cn(
                          'flex w-full items-start gap-3 rounded-lg px-3 py-2 text-left transition',
                          active
                            ? 'bg-zinc-200/90 text-zinc-900 dark:bg-zinc-800/50 dark:text-zinc-100'
                            : 'bg-transparent text-zinc-600/95 hover:bg-zinc-200/30 dark:text-zinc-200/90 dark:hover:bg-zinc-800/30',
                        )}
                      >
                        <div className="mt-0.5 text-xs text-sky-500/90 dark:text-sky-300/90">
                          {item.sectionId ? '↳' : ''}
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-medium leading-5">
                            {item.label}
                          </div>
                          {item.description ? (
                            <div className="text-xs leading-4 text-zinc-500/90 dark:text-zinc-400/90">
                              {item.description}
                            </div>
                          ) : null}
                        </div>
                        <div className="mt-0.5 text-xs text-zinc-500 dark:text-zinc-500">
                          {item.sectionId ? 'Enter' : ''}
                        </div>
                      </button>
                    </li>
                  )
                })}
              </ul>
            ) : (
              <div className="px-4 py-6 text-sm text-zinc-500/90 dark:text-zinc-400/90">
                No matches.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

