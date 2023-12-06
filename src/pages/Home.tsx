import { useEffect } from "react";
import { usePostsStore } from "../stores/posts";
import { useAuthStore } from "../stores/auth";
import Header from "../components/Header";

export default function Home() {
  const posts = usePostsStore((state) => state.posts);
  const getPosts = usePostsStore((state) => state.getPosts);
  const setAuth = useAuthStore(state => state.setAuth)

  useEffect(() => {
    // si la promesa devuelve es porque hay un error de autenticación, cierra la sesión
    getPosts(10).then((data) => data?.status === 403 && setAuth({ isAuth: false, userInfo: null }))
  }, []);
  return (
    <section className="w-full max-w-7xl mx-auto h-screen">
    <Header />



    </section>
  );
}
