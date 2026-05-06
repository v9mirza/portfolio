import { type PropsWithChildren } from 'react'

export function Section({
  id,
  eyebrow,
  title,
  children,
}: PropsWithChildren<{
  id: string
  eyebrow?: string
  title: string
}>) {
  return (
    <section id={id} className="scroll-mt-24 py-16 sm:py-24 lg:py-28">
      <div className="mx-auto w-full max-w-[1120px] px-4 sm:px-6">
        <div className="mb-8 border-b border-zinc-200/70 pb-5 sm:mb-10 sm:pb-6 dark:border-zinc-800/70">
          {eyebrow ? (
            <p className="text-xs tracking-widest text-zinc-500/90 dark:text-zinc-400/90">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="mt-3 text-xl font-semibold tracking-tight text-zinc-900 sm:text-2xl lg:text-3xl dark:text-zinc-100">
            {title}
          </h2>
        </div>
        {children}
      </div>
    </section>
  )
}

