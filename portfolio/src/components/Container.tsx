import { type PropsWithChildren } from 'react'

export function Container({ children }: PropsWithChildren) {
  return <div className="mx-auto w-full max-w-[1120px] px-4 sm:px-6">{children}</div>
}

