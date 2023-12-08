import { useEffect, useState } from "react";
import { useAuthStore } from "../stores/auth";

export default function Greetings () {
  const user = useAuthStore(state => state.userInfo)
  const [timeOut, setTimeOut] = useState(false)

  useEffect(() => {
    setTimeout(() => setTimeOut(true), 3500)
  }, [])
  return (
    timeOut ? 
    <h1 className="text-2xl inline-block">Tellme!</h1>
    :
    <h1 className="text-2xl inline-block capitalize">Wellcome, {user?.name}!</h1>

  )
}