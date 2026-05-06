import { cn } from '../lib/cn'

export function Badge({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border border-zinc-200/90 bg-white/85 px-2.5 py-1 text-xs text-zinc-700/95 dark:border-zinc-800/70 dark:bg-zinc-900/20 dark:text-zinc-200/90',
        className,
      )}
    >
      {children}
    </span>
  )
}

