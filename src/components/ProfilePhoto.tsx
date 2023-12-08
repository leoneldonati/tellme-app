import { useAuthStore } from "../stores/auth"

export default function ProfilePhoto ({ className }: {className: string}) {

  const userInfo = useAuthStore(state => state.userInfo)

  return (
    <picture>

      <img className={className} src={userInfo?.avatar.secureUrl} alt={`Foto de perfil de ${userInfo?.name}`} />
      
    </picture>
  )
}