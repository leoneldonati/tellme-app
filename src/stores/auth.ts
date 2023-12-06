import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { AuthState } from "../interfaces";
import { Api } from "../services/api";

const serverHost: string = import.meta.env.VITE_SERVER_HOST;
const apiInstance = new Api(serverHost);

export const useAuthStore = create(
  persist<AuthState>(
    (set) => ({
      isAuth: false,
      userInfo: null,
      authErrors: null,
      setAuth: ({ isAuth, userInfo }) => set({ isAuth, userInfo }),
      login: async (userData) => {
        try {
          const data = await apiInstance.post("/users/login", userData);

          if (data.error) {
            set({ authErrors: data.error });

            setTimeout(() => set({ authErrors: null }), 3000);

            return;
          }

          set({ isAuth: true, userInfo: data });
        } catch (e) {
          console.error(e);
        }
      },
    }),
    {
      name: "auth",
    }
  )
);
