import { useMutation } from "@tanstack/react-query";
import { api } from "@/lib/api/api";
import type { ILogin } from "@/lib/api/types";
import { useNavigate } from "@tanstack/react-router";

export function useLogin() {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: async (credentials: ILogin) => {
      const { data } = await api.post("/login", credentials);
      console.log(data);
      return data;

      // console.log(credentials);
      // return "ok";
    },
    onSuccess: () => {
      navigate({ to: "/" });
    },

    onError: (error) => {
      //Não deixar isso em produção
      console.log("Error on login", error.message);
    },
  });
}
