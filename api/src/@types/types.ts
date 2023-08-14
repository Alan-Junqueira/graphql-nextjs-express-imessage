import { PrismaClient } from "@prisma/client";
import { ISODateString, Session } from "next-auth";
/**
 *  * Users
 */

export interface IUser {
  id: string;
  username: string;
  image: string;
  email: string;
  name: string;
}

export interface ISession {
  user: IUser;
  expires: ISODateString;
}

export interface ICreateUsernameResponse {
  success?: boolean;
  error?: string;
}

export interface GraphQlContext {
  session: Session | null;
  prisma: PrismaClient;
  // pubsub
}
