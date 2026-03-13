import { api } from "@/lib/api/api";
import type { IRegister } from "@/lib/api/types";

export const authService = {
  //   login: async (credentials: ILogin) => {
  //     const { data } = await api.post("/login", credentials);
  //     return data;
  //   },

  register: async (credentials: IRegister) => {
    const { data } = await api.post("/users", credentials);
    return data;
  },
};
