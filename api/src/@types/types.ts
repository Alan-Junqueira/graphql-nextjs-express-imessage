import { PrismaClient } from "@prisma/client";
import { ISODateString } from "next-auth";
/** 
*  * Users
*/

export interface IUser {
  id: string
  username: string
  image: string
}

export interface ISession {
  user: IUser
  expires: ISODateString
}

export interface ICreateUsernameResponse {
  success?: boolean
  error?: string
}


export interface GraphQlContext {
  session: ISession | null
  prisma: PrismaClient
  // pubsub
}