'use client'

import { signOut } from 'next-auth/react'
import { Button } from "@/chakra/chakra-components"

export const LogoutButton = () => {
  return (
    <Button onClick={() => signOut()}>
      Logout
    </Button>
  )
}
