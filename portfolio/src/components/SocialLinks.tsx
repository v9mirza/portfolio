import { cn } from '../lib/cn'

export type SocialLink = {
  label: string
  href: string
}

export function SocialLinks({
  links,
  className,
}: {
  links: readonly SocialLink[]
  className?: string
}) {
  return (
    <div className={cn('flex flex-wrap gap-2', className)}>
      {links.map((l) => (
        <a
          key={l.label}
          href={l.href}
          target="_blank"
          rel="noreferrer"
          className="rounded-xl border border-zinc-200/90 bg-white/85 px-3 py-2 text-xs text-zinc-700/95 transition duration-200 hover:-translate-y-0.5 hover:bg-white hover:text-zinc-900 dark:border-zinc-800/70 dark:bg-zinc-900/20 dark:text-zinc-200/90 dark:hover:bg-zinc-800/20 dark:hover:text-zinc-100"
        >
          {l.label}
        </a>
      ))}
    </div>
  )
}

