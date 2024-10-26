import { useMutation } from "@tanstack/react-query";
import { loginApi } from "@/lib/axios";
import { MutationConfig } from "@/lib/react-query";
import { LoginResponseType } from "../utils/types";

type LoginInputType = {
  referralCode?: string;
};

export const loginFn = async (
  data: LoginInputType
): Promise<LoginResponseType> => {
  return loginApi.post("/auth/login", data);
};

type UseLoginOptions = {
  mutationConfig?: MutationConfig<typeof loginFn>;
};

export function useLogin({ mutationConfig }: UseLoginOptions = {}) {
  const { onSuccess, ...restConfig } = mutationConfig || {};

  return useMutation({
    onSuccess: (...args) => {
      onSuccess?.(...args);
    },
    ...restConfig,
    mutationFn: loginFn,
  });
}
