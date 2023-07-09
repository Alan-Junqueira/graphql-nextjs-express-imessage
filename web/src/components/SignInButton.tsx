'use client'

import { signIn } from 'next-auth/react'
import { Button, ButtonProps } from "@/chakra/chakra-components"
import { ReactNode } from 'react'

interface ISignInButtonProps extends ButtonProps {
  children: ReactNode
}

export const SignInButton = ({
  children,
  ...props
}: ISignInButtonProps) => {
  return (
    <Button
      onClick={() => signIn('google')}
      {...props}
    >
      {children}
    </Button>
  )
}
