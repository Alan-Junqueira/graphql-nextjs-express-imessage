export interface ICreateUsernameData {
  createUsername: {
    success: boolean
    error: string
  }
}

export interface ICreateUsernameVariables {
  username: string
  email: string
  image: string
  name: string
  userId: string
}