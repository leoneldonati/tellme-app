export interface AuthState {
  isAuth: boolean;
  userInfo: UserInfo | null;
  authErrors: object | null;
  login: (userData: FormData) => Promise<void>
  setAuth: ({ isAuth, userInfo }: {isAuth: boolean, userInfo: UserInfo | null}) => void
}

export interface PostsState {
  posts: [],
  errors: null | object
  getPosts: (quantity: number) => Promise<void | any>
}

export interface UserInfo {
  _id: string;
  name: string;
  username: string;
  passwordHashed: string;
  email: string;
  avatar: object;
  followers: [];
  following: [];
  createdAt: Date;
  updatedAt: Date;
}