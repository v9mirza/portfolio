import { Badge } from './Badge'
import { LinkButton } from './LinkButton'

export function ProjectCard({
  title,
  description,
  stack,
  links,
}: {
  title: string
  description: string
  stack: string[]
  links: {
    github?: string
    live?: string
  }
}) {
  return (
    <article className="group relative overflow-hidden rounded-3xl border border-zinc-200/90 bg-white/85 p-5 sm:p-6 shadow-[0_12px_40px_rgba(0,0,0,0.07)] transition duration-300 hover:-translate-y-1 hover:border-zinc-300/90 hover:bg-white/95 dark:border-zinc-800/70 dark:bg-zinc-950/30 dark:shadow-[0_16px_50px_rgba(0,0,0,0.26)] dark:hover:border-zinc-700/80 dark:hover:bg-zinc-950/45">
      <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
        <div className="absolute -top-20 -left-20 h-44 w-44 rounded-full bg-sky-500/15 blur-2xl" />
        <div className="absolute -bottom-20 -right-20 h-44 w-44 rounded-full bg-indigo-500/15 blur-2xl" />
      </div>
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-500/35 to-transparent" />

      <div className="relative">
        <div className="flex flex-wrap items-center justify-between gap-2 sm:gap-4">
          <h3 className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
            {title}
          </h3>
          <span className="rounded-full border border-zinc-200/80 bg-white/70 px-2 py-1 text-[10px] uppercase tracking-widest text-zinc-500 dark:border-zinc-800/80 dark:bg-zinc-900/40 dark:text-zinc-400">
            Case Study
          </span>
        </div>
        <p className="mt-3 text-sm leading-6 text-zinc-600/85 dark:text-zinc-300/85">
          {description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {stack.map((s) => (
            <Badge key={s}>{s}</Badge>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {links.github ? (
            <LinkButton href={links.github} variant="secondary" size="sm">
              GitHub
            </LinkButton>
          ) : null}
          {links.live ? (
            <LinkButton href={links.live} variant="secondary" size="sm">
              Live
            </LinkButton>
          ) : null}
        </div>
      </div>
    </article>
  )
}

