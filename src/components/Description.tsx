import { UserHeartIcon, UserUpIcon } from "../icons";
import { useAuthStore } from "../stores/auth";

export default function Description({ className }: { className: string }) {
  const userInfo = useAuthStore((state) => state.userInfo);
  const createdAt = userInfo?.createdAt;
  const updatedAt = userInfo?.updatedAt;

  const joinTimestamp = new Date(createdAt!).toLocaleDateString();
  const updateTimestamp = new Date(updatedAt!).toLocaleDateString();

  const followersNum = userInfo?.followers.length;
  const followingNum = userInfo?.following.length;
  return (
    <article className={className}>
      <div className="flex justify-between mb-4">
        <div>
          <h2 className="text-6xl mb-1">{userInfo?.name}</h2>
          <span className="text-xl text-white/70">@{userInfo?.username}</span>
        </div>

        <div className="flex flex-col justify-around items-end">
          <span className="text-slate-400">You joined: {joinTimestamp}</span>
          <span className="text-slate-400">
            Your last profile update: {updateTimestamp}
          </span>
        </div>
      </div>
      <hr />

      <div className="mt-4">
        <ul className="flex flex-row justify-evenly text-2xl [&>li]:flex [&>li]:flex-col text-center [&>li>button]:mb-2 [&>li>button:hover]:border-orange-400 [&>li>button:hover]:scale-95 [&>li>button:active]:scale-100 [&>li>button]:transition">
          <li>
            <button className="flex gap-2 p-2 border border-slate-400 rounded-md" title="Followers">
              Followers
              <UserHeartIcon className="" />
            </button>
            {followersNum}
          </li>
          <li>
            <button className="flex gap-2 p-2 border border-slate-400 rounded-md" title="Followed">
              Followed
              <UserUpIcon className=""/>
            </button>
            {followingNum}
          </li>
        </ul>
      </div>
    </article>
  );
}
