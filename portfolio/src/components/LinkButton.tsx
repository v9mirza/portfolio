import { cn } from '../lib/cn'

export function LinkButton({
  href,
  children,
  variant = 'secondary',
  size = 'md',
  className,
}: {
  href: string
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md'
  className?: string
}) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-xl border px-4 py-2 text-sm font-medium transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60'

  const variants: Record<string, string> = {
    primary:
      'border-transparent bg-zinc-900 text-white shadow-[0_14px_45px_rgba(2,6,23,0.22)] hover:-translate-y-0.5 hover:bg-zinc-950 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white',
    secondary:
      'border-zinc-200/90 bg-white/85 text-zinc-900 hover:-translate-y-0.5 hover:bg-white dark:border-zinc-800/70 dark:bg-zinc-900/35 dark:text-zinc-100 dark:hover:bg-zinc-800/45',
    ghost:
      'border-transparent bg-transparent text-zinc-900/90 hover:bg-zinc-200/30 dark:text-zinc-100/90 dark:hover:bg-zinc-800/30',
  }

  const sizes: Record<string, string> = {
    sm: 'h-9 px-3 py-2 text-xs',
    md: 'h-10',
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={cn(base, variants[variant], sizes[size], className)}
    >
      {children}
    </a>
  )
}

