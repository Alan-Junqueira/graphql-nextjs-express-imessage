'use client'

import { SessionProvider } from "next-auth/react"
import { ReactNode } from "react"

interface IProviders {
  session: any
  children: ReactNode
}

export const Providers = ({
  session,
  children
}: IProviders) => {
  return (
    <SessionProvider session={session}>
      {children}
    </SessionProvider>
  )
}
