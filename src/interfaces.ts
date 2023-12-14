export interface AuthState {
  isAuth: boolean;
  userInfo: UserInfo | null;
  authErrors: object | null;
  login: (userData: FormData) => Promise<void>
  setAuth: ({ isAuth, userInfo }: {isAuth: boolean, userInfo: UserInfo | null}) => void
}

export interface PostsState {
  posts: []
  userPosts: []
  errors: null | object
  getPosts: (quantity: number) => Promise<void | unknown>
  getUserPosts: () => Promise<void>
  addPost: (payload: FormData) => Promise<void>
}

export interface UserInfo {
  _id: string;
  name: string;
  username: string;
  passwordHashed: string;
  email: string;
  avatar: {
    secureUrl: string
  };
  followers: [];
  following: [];
  createdAt: Date;
  updatedAt: Date;
}