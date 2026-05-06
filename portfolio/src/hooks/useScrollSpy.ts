import { useEffect, useMemo, useState } from 'react'

type ScrollSpyOptions = {
  rootMargin?: string
  /**
   * A small value makes the active section switch closer to the top of the viewport.
   * 0 means "prefer the section whose top is closest to the viewport top".
   */
  preferredTop?: number
}

export function useScrollSpy(sectionIds: string[], options?: ScrollSpyOptions) {
  const { rootMargin = '-35% 0px -55% 0px', preferredTop = 120 } = options ?? {}
  const [activeId, setActiveId] = useState<string>(sectionIds[0] ?? 'home')

  const sectionSet = useMemo(() => new Set(sectionIds), [sectionIds])

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el))

    if (!elements.length) return

    const visible = new Map<string, IntersectionObserverEntry>()

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const id = (entry.target as HTMLElement).id
          if (!sectionSet.has(id)) continue
          visible.set(id, entry)
        }

        const candidates = [...visible.values()].filter((e) => e.isIntersecting)
        if (!candidates.length) return

        candidates.sort((a, b) => {
          const da = Math.abs(a.boundingClientRect.top - preferredTop)
          const db = Math.abs(b.boundingClientRect.top - preferredTop)
          return da - db
        })

        const nextId = (candidates[0]?.target as HTMLElement | undefined)?.id
        if (nextId) setActiveId(nextId)
      },
      { rootMargin, threshold: [0, 0.1, 0.25, 0.5, 0.75, 1] },
    )

    for (const el of elements) observer.observe(el)
    return () => observer.disconnect()
  }, [preferredTop, rootMargin, sectionIds, sectionSet])

  return activeId
}

