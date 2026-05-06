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
    <section id={id} className="scroll-mt-24 py-24">
      <div className="mx-auto w-full max-w-[1120px] px-6">
        <div className="mb-10">
          {eyebrow ? (
            <p className="text-xs tracking-widest text-zinc-500/90 dark:text-zinc-400/90">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
            {title}
          </h2>
        </div>
        {children}
      </div>
    </section>
  )
}

