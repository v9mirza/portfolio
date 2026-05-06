import { Badge } from '../components/Badge'
import { Button } from '../components/Button'
import { Reveal } from '../components/Reveal'
import { Container } from '../components/Container'
import { navItems, profile } from '../content'

export function HomeSection({ onNavigate }: { onNavigate: (id: string) => void }) {
  return (
    <section
      id="home"
      className="relative min-h-[92svh] scroll-mt-24 overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(96,165,250,0.18),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(14,165,233,0.10),transparent_55%)]" />
      </div>
      <div className="noise absolute inset-0 -z-10" aria-hidden="true" />

      <Container>
        <div className="flex min-h-[92svh] flex-col justify-center pb-10">
          <div className="flex flex-wrap gap-2 mb-7">
            <Reveal className="reveal">
              <Badge>Full-Stack</Badge>
            </Reveal>
            <Reveal className="reveal" delayMs={90}>
              <Badge>MERN</Badge>
            </Reveal>
            <Reveal className="reveal" delayMs={180}>
              <Badge>Systems-first</Badge>
            </Reveal>
          </div>

          <Reveal className="reveal" delayMs={40}>
            <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl">
              {profile.name}
            </h1>
          </Reveal>

          <Reveal className="reveal" delayMs={120}>
            <p className="mt-4 text-lg text-zinc-600/90 dark:text-zinc-300/90">
              {profile.title}
            </p>
          </Reveal>

          <Reveal className="reveal" delayMs={180}>
            <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-600/85 dark:text-zinc-300/85">
              {profile.tagline}
            </p>
          </Reveal>

          <div className="mt-10 flex flex-wrap gap-3">
            <Reveal className="reveal" delayMs={240}>
              <Button
                type="button"
                variant="secondary"
                onClick={() => onNavigate('projects')}
              >
                View Work
              </Button>
            </Reveal>
            <Reveal className="reveal" delayMs={300}>
              <Button
                type="button"
                variant="secondary"
                onClick={() => onNavigate('contact')}
                className="border-zinc-200/70 bg-white/60 dark:border-zinc-800/70 dark:bg-zinc-900/30"
              >
                Contact
              </Button>
            </Reveal>
          </div>

              <div className="mt-10 flex flex-wrap gap-3 text-xs text-zinc-600 dark:text-zinc-500">
            {navItems.map((it) => (
              <button
                key={it.id}
                type="button"
                onClick={() => onNavigate(it.id)}
                className="rounded-full border border-zinc-200/85 bg-white/75 px-3 py-1.5 text-zinc-800 hover:border-zinc-300/90 hover:text-zinc-700 transition dark:border-zinc-800/60 dark:bg-zinc-900/10 dark:text-zinc-100 dark:hover:border-zinc-700/80 dark:hover:text-zinc-300"
              >
                {it.label}
              </button>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

