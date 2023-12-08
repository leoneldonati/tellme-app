import { useAuthStore } from "../stores/auth";

export default function Avatar () {
  const user = useAuthStore(state => state.userInfo)
  
  return (
    <picture className=" shadow-md shadow-yellow-900">
      <img className="rounded-[100%] aspect-square object-cover w-[60px]" src={user?.avatar.secureUrl} alt={user?.name} loading="lazy"/>
      
    </picture>
  )
}