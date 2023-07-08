'use client'

import { signIn, useSession } from 'next-auth/react'

export default function Home() {
  const {data} = useSession()

  console.log(data)
  return (
    <div>
      <button onClick={() => signIn('google')}>Logar</button>
    </div>
  )
}
