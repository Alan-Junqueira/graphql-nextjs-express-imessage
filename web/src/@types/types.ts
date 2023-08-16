export interface ICreateUsernameData {
  createUsername: {
    success: boolean;
    error: string;
  };
}

export interface ICreateUsernameVariables {
  username: string;
  email: string;
  image: string;
  name: string;
  userId: string;
}

export interface ISearchUsersInput {
  username: string;
}

export interface ISearchUsersData {
  searchUsers: Array<ISearchedUser>;
}

export interface ISearchedUser {
  id: string;
  username: string;
}
