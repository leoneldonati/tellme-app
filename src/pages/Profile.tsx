import Description from "../components/Description";
import ProfilePhoto from "../components/ProfilePhoto";
import UserPosts from "../components/UserPosts";

export default function Profile () {

  return (
    <section className="w-full h-screen grid grid-cols-2 grid-rows-3 p-4">

        <ProfilePhoto className="rounded-[20%] w-[400px] col-span-1 row-span-2 shadow-md shadow-slate-300" />

        <Description className=""/>

        <UserPosts />
    </section>
  )
}