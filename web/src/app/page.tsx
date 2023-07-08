'use client'

import { signIn } from 'next-auth/react'
import { useState } from 'react';

export default function Home() {

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleLoginWithGoogle = async () => {
    setIsLoading(true)
    try {
      await signIn('google')
    } catch (error) {
      // display error message to user
      console.log(error)
      // toast.error('Something went wrong with your login.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div>
      <button onClick={handleLoginWithGoogle}>Logar</button>
    </div>
  )
}
