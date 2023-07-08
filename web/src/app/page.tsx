import { authOptions } from '@/libs/next-auth';
import { getServerSession } from 'next-auth';

export default async function Home() {
  const session = await getServerSession(authOptions)
  console.log(session?.user)
  return (
    <div>
      
      <pre>home</pre>
    </div>
  )
}
