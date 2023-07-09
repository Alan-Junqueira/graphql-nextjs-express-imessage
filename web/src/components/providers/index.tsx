'use client'

import { ReactNode } from "react"
import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from "@/chakra/theme"
import { ApolloProvider } from "@apollo/client"
import { client } from "@/graphql/apolo-client"

interface IProviders {
  children: ReactNode
}

export const Providers = ({
  children
}: IProviders) => {
  return (
    <ApolloProvider client={client}>
      <CacheProvider>
        <ChakraProvider theme={theme}>
          {children}
        </ChakraProvider>
      </CacheProvider>
    </ApolloProvider>
  )
}
