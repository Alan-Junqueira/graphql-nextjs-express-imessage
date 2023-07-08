'use client'

import { ReactNode } from "react"
import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from "@/chakra/theme"

interface IProviders {
  children: ReactNode
}

export const Providers = ({
  children
}: IProviders) => {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>
        {children}
      </ChakraProvider>
    </CacheProvider>
  )
}
