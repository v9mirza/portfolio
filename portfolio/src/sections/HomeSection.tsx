import { Badge } from '../components/Badge'
import { Button } from '../components/Button'
import { Reveal } from '../components/Reveal'
import { Container } from '../components/Container'
import { navItems, profile } from '../content'

export function HomeSection({ onNavigate }: { onNavigate: (id: string) => void }) {
  const highlights = [
    { label: 'Experience', value: '1+ years' },
    { label: 'Projects shipped', value: '12+' },
    { label: 'Preferred stack', value: 'MERN + TS' },
  ]

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
        <div className="grid min-h-[92svh] items-center gap-8 pb-10 pt-6 sm:gap-10 sm:pb-12 sm:pt-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="mb-7 flex flex-wrap gap-2">
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
              <h1 className="text-3xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                {profile.name}
              </h1>
            </Reveal>

            <Reveal className="reveal" delayMs={120}>
              <p className="mt-3 text-base text-zinc-600/90 sm:mt-4 sm:text-lg dark:text-zinc-300/90">
                {profile.title}
              </p>
            </Reveal>

            <Reveal className="reveal" delayMs={180}>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-zinc-600/85 sm:mt-6 sm:text-base dark:text-zinc-300/85">
                {profile.tagline}
              </p>
            </Reveal>

            <div className="mt-8 flex flex-wrap gap-2.5 sm:mt-10 sm:gap-3">
              <Reveal className="reveal" delayMs={240}>
                <Button
                  type="button"
                  variant="primary"
                  onClick={() => onNavigate('projects')}
                >
                  View Projects
                </Button>
              </Reveal>
              <Reveal className="reveal" delayMs={300}>
                <Button
                  type="button"
                  variant="secondary"
                  onClick={() => onNavigate('contact')}
                  className="border-zinc-200/70 bg-white/60 dark:border-zinc-800/70 dark:bg-zinc-900/30"
                >
                  Contact Me
                </Button>
              </Reveal>
            </div>

            <div className="mt-8 grid gap-3 min-[480px]:grid-cols-2 sm:mt-10 sm:grid-cols-3">
              {highlights.map((item, idx) => (
                <Reveal key={item.label} className="reveal" delayMs={320 + idx * 70}>
                  <div className="rounded-2xl border border-zinc-200/85 bg-white/80 p-4 dark:border-zinc-800/70 dark:bg-zinc-900/20">
                    <div className="text-xs uppercase tracking-wide text-zinc-500/90 dark:text-zinc-400/90">
                      {item.label}
                    </div>
                    <div className="mt-2 text-sm font-medium text-zinc-900 dark:text-zinc-100">
                      {item.value}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap gap-2.5 text-xs text-zinc-600 sm:mt-8 sm:gap-3 dark:text-zinc-500">
              {navItems.map((it) => (
                <button
                  key={it.id}
                  type="button"
                  onClick={() => onNavigate(it.id)}
                  className="rounded-full border border-zinc-200/85 bg-white/75 px-3 py-1.5 text-zinc-800 transition hover:border-zinc-300/90 hover:text-zinc-700 dark:border-zinc-800/60 dark:bg-zinc-900/10 dark:text-zinc-100 dark:hover:border-zinc-700/80 dark:hover:text-zinc-300"
                >
                  {it.label}
                </button>
              ))}
            </div>
          </div>

          <div className="order-first lg:order-none lg:col-span-5">
            <Reveal className="reveal" delayMs={220}>
              <div className="relative mx-auto w-full max-w-[18rem] overflow-hidden rounded-3xl border border-zinc-200/80 bg-white/80 p-2.5 shadow-[0_20px_80px_rgba(0,0,0,0.12)] sm:max-w-sm sm:p-3 dark:border-zinc-800/70 dark:bg-zinc-900/30 dark:shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
                <img
                  src="/bnw.jpeg"
                  alt={`${profile.name} portrait`}
                  className="h-[320px] w-full rounded-2xl object-cover sm:h-[420px]"
                  loading="eager"
                />
                <div className="pointer-events-none absolute inset-x-5 bottom-5 rounded-xl border border-white/30 bg-black/25 p-2.5 backdrop-blur-sm sm:inset-x-7 sm:bottom-7 sm:p-3 dark:border-zinc-700/60 dark:bg-zinc-950/45">
                  <p className="text-xs tracking-wider text-zinc-200">AVAILABLE FOR WORK</p>
                  <p className="mt-1 text-sm font-medium text-white">{profile.location}</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  )
}

