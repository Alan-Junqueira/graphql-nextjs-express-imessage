'use client'

import { SignInButton } from './SignInButton'
import { Session } from 'next-auth'
import {
  Center,
  Stack,
  Text,
  Image
} from "@/chakra/chakra-components"
import { WithAuth } from './AuthComponents/WithAuth'


interface IAuthProps {
  session: Session | null
  reloadSession: () => void
}

export const Auth = ({
  session,
  reloadSession
}: IAuthProps) => {
  return (
    <Center
      height="100vh"
    >
      <Stack
        align="center"
        spacing={8}
      >
        {session ? (
          <WithAuth session={session}/>
        ) : (
          <>
            <Text
              fontSize="3xl"
            >
              MessengerQL
            </Text>
            <SignInButton
              leftIcon={<Image height="20px" src='/assets/images/google-logo.svg' alt='Google logo' />}
            >
              Continue with google
            </SignInButton>
          </>
        )}
      </Stack>
    </Center>

  )
}
