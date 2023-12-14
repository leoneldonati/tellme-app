import { create } from "zustand";
import { Api } from "../services/api";
import { PostsState } from "../interfaces";

const serverHost: string = import.meta.env.VITE_SERVER_HOST;
const apiInstance = new Api(serverHost)

export const usePostsStore = create<PostsState>((set) => ({
  posts: [],
  userPosts: [],
  errors: null,
  getPosts: async (quantity = 10) => {
    try {
      const data  = await apiInstance.get(`/posts/${quantity}`)

      if (data.status === 403) return data

      set({ posts: data })
    }
    catch(e) {
      console.log(e)
    }
  },
  getUserPosts: async () => {
    try {

      const userPosts = await apiInstance.get('/posts/user')

      set({ userPosts })
      
      return
    }
    catch(e) {
      console.log(e)
    }
  }
}))