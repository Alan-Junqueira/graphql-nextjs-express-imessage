import "next-auth";

declare module "next-auth" {
  export interface Session {
    user: User;
  }

  interface User {
    id: string;
    username: string;
  }
}
