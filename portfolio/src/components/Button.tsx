import { type PropsWithChildren, type ButtonHTMLAttributes } from 'react'
import { cn } from '../lib/cn'

type ButtonProps = PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: 'primary' | 'secondary' | 'ghost'
    size?: 'sm' | 'md'
  }
>

export function Button({
  variant = 'secondary',
  size = 'md',
  className,
  ...props
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-xl border px-4 py-2 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60'

  const variants: Record<string, string> = {
    primary:
      'border-transparent bg-zinc-100 text-zinc-950 shadow-[0_8px_30px_rgba(0,0,0,0.18)] hover:bg-white dark:bg-zinc-100/90',
    secondary:
      'border-zinc-200/90 bg-white/85 text-zinc-900 hover:bg-white dark:border-zinc-800/70 dark:bg-zinc-950/0 dark:text-zinc-100 dark:hover:bg-zinc-800/30',
    ghost: 'border-transparent bg-transparent text-zinc-900/90 hover:bg-zinc-200/30 dark:text-zinc-100/90 dark:hover:bg-zinc-800/30',
  }

  const sizes: Record<string, string> = {
    sm: 'h-9 px-3 py-2 text-xs',
    md: 'h-10',
  }

  return (
    <button
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    />
  )
}

