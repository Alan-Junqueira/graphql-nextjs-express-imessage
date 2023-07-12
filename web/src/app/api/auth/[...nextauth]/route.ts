import NextAuth from "next-auth"
import type { NextApiRequest, NextApiResponse } from "next"

import { authOptions } from "@/libs/next-auth"

async function handler(req: NextApiRequest, res: NextApiResponse) {
  // console.log(req)
  return await NextAuth(req, res, authOptions)
}
// const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
