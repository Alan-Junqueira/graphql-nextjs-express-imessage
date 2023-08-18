export interface CreateUsernameProps {
  username: string;
  email: string;
  image: string;
  name: string;
  userId: string;
}

export interface SearchUsersProps {
  usernameToSearch: string;
  myUsername: string;
}
