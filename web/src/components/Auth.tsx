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
import { useMutation } from '@apollo/client'
import { userOperations } from '@/graphql/operations/user'
import { FormEvent, useState } from 'react'
import { ICreateUsernameData, ICreateUsernameVariables } from '@/@types/types'

interface IAuthProps {
  session: Session | null
  reloadSession: () => void
}

export const Auth = ({
  session,
  reloadSession
}: IAuthProps) => {
  const [username, setUsername] = useState('')
  const [
    createUsername,
    { data, loading, error }
  ] = useMutation<ICreateUsernameData, ICreateUsernameVariables>(userOperations.Mutations.createUsername)

  console.log('HERE IS THE DATA', data, loading, error)

  const handleUpdateUser = async (e: FormEvent) => {
    e.preventDefault()
    try {
      if (!username) return
      await createUsername({
        variables: { username }
      })

      console.log(username)
    } catch (error) {
      console.log('updateUser error', error)
    }
  }

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
              display="flex"
              flexDirection="column"
              alignItems="center"
              gap={8}
              onSubmit={e => handleUpdateUser(e)}
            >
              <Input
                placeholder='Enter a username'
                value={username}
                onChange={e => setUsername(e.target.value)}
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
