import { useAuthStore } from "../stores/auth";

export default function Description() {
  const userInfo = useAuthStore((state) => state.userInfo);
  const createdAt = userInfo?.createdAt;
  const updatedAt = userInfo?.updatedAt;

  const joinTimestamp = new Date(createdAt!).toLocaleDateString();
  const updateTimestamp = new Date(updatedAt!).toLocaleDateString();
  return (
    <article>
      <div className="flex justify-between items-center mb-2">
        <div>
          <h2 className="text-6xl mb-1">{userInfo?.name}</h2>
          <span>@{userInfo?.username}</span>
        </div>

        <div className="flex flex-col justify-between items-end">
          <span className="text-slate-400">You joined {joinTimestamp}</span>
          <span className="text-slate-400">
            Your last profile update {updateTimestamp}
          </span>
        </div>
      </div>
      <hr />


      
    </article>
  );
}
