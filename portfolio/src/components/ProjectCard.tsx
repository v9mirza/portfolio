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
    <article className="group relative overflow-hidden rounded-2xl border border-zinc-200/90 bg-white/85 p-5 shadow-[0_0_0_rgba(0,0,0,0)] transition hover:-translate-y-0.5 hover:bg-white/95 hover:shadow-soft dark:border-zinc-800/70 dark:bg-zinc-950/20 dark:hover:bg-zinc-950/35">
      <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100">
        <div className="absolute -top-20 -left-20 h-44 w-44 rounded-full bg-sky-500/10 blur-2xl" />
        <div className="absolute -bottom-20 -right-20 h-44 w-44 rounded-full bg-sky-500/10 blur-2xl" />
      </div>

      <div className="relative">
        <h3 className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-6 text-zinc-600/85 dark:text-zinc-300/85">
          {description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {stack.map((s) => (
            <Badge key={s}>{s}</Badge>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
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

