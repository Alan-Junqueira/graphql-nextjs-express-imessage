'use client'

import { signIn } from 'next-auth/react'
import { Button } from "@/chakra/chakra-components"

export const SignInButton = () => {
  return (
    <Button onClick={() => signIn('google')}>
      Sign In
    </Button>
  )
}
