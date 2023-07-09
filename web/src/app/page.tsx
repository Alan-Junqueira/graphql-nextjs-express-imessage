import { authOptions } from '@/libs/next-auth';
import { getServerSession } from 'next-auth';

import { Box } from "@/chakra/chakra-components"

export default async function Home() {
  const session = await getServerSession(authOptions)
  return (
    <Box>
      {session?.user ? (
        <>
          {/* <Chat /> */}
        </>
      ) : (
        <>
          {/* <Auth /> */}
        </>
      )}
    </Box>
  )
}
