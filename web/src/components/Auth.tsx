'use client'

import { SignInButton } from './SignInButton'
import { Session } from 'next-auth'
import {
  Center,
  Stack,
  Text,
  Image,
  Input,
  Button,
  FormControl
} from "@/chakra/chakra-components"
import { updateUser } from '@/app/actions/update-user'

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
          <>
            <Text
              fontSize="3xl"
            >
              Create a Username
            </Text>
            <FormControl
              as="form"
              action={updateUser}
              display="flex"
              flexDirection="column"
              alignItems="center"
              gap={8}
            >
              <Input
                placeholder='Enter a username'
                name='username'
              />
              <Button
                type='submit'
                width="100%"
              >
                Save
              </Button>
            </FormControl>
          </>
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
