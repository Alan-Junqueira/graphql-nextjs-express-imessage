"use client";

import { ReactNode } from "react";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "@/chakra/theme";
import { ApolloProvider } from "@apollo/client";
import { client } from "@/graphql/apolo-client";
import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";
import { Toaster } from "react-hot-toast";
import { IconContext } from "react-icons";

interface IProviders {
  session: Session | null;
  children: ReactNode;
}

export const Providers = ({ session, children }: IProviders) => {
  return (
    <ApolloProvider client={client}>
      <SessionProvider session={session}>
        <CacheProvider>
          <ChakraProvider theme={theme}>
            <IconContext.Provider
              value={{ style: { verticalAlign: "middle" } }}
            >
              {children}
            </IconContext.Provider>
            <Toaster />
          </ChakraProvider>
        </CacheProvider>
      </SessionProvider>
    </ApolloProvider>
  );
};
