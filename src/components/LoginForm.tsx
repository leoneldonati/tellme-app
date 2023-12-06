import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../stores/auth";

export default function LoginForm() {
  const login = useAuthStore((state) => state.login);

  const nav = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;

    const formData = new FormData(form);

    login(formData).then(() => nav("/"));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col p-4 justify-between items-center w-[600px] border border-slate-400 rounded-lg min-h-[500px]"
    >
      <div className="flex flex-col w-full [&>label>input]:w-full [&>label>input]:p-2 [&>label>input]:text-xl [&>label>input]:rounded-md [&>label>input]:text-white gap-4 [&>label]:text-xl text-slate-400">
        <label htmlFor="email">
          Escribe tu email...
          <input
            type="email"
            name="email"
            id="email"
            placeholder="example@example.com"
            autoFocus
            autoComplete=""
            required
          />
        </label>

        <label htmlFor="password">
          Escribe tu contraseña...
          <input
            type="password"
            name="password"
            id="password"
            placeholder="******"
            autoComplete="current-password"
            required
          />
        </label>
      </div>

      <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-xl font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          Login
        </span>
      </button>
    </form>
  );
}
