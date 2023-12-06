import { useAuthStore } from "../stores/auth";

export default function Greetings () {
  const user = useAuthStore(state => state.userInfo)
  
  return (
    <h1 className="text-2xl">Bienvenido, {user?.name}!</h1>
  )
}