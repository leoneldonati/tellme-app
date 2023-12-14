import { useEffect } from "react"
import { usePostsStore } from "../stores/posts"

export default function UserPosts () {
  const getUserPosts = usePostsStore(state => state.getUserPosts)
  const userPosts = usePostsStore(state => state.userPosts)
  useEffect(() => {
    getUserPosts()
  }, [])

  return (
    <section>

    {
      userPosts.length > 0 
      ?
      <article>
        
      </article>
      :
      <div>
        No tienes publicaciones!
      </div>
    }

    </section>
  )
}