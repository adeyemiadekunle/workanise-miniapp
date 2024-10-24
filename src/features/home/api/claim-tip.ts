import { api } from "@/lib/axios";
import { ClaimTipAPIResponse } from "../utils/types";
import { MutationConfig } from "@/lib/react-query";
import { useMutation } from "@tanstack/react-query";


export const postClaimTipFn = async ({
  userId,
}: {
  userId: string;
}): Promise<ClaimTipAPIResponse> => {
  return api.post(`/user/tip`, userId);
};

type UsePostClaimTipOptions = {
  mutationConfig?: MutationConfig<typeof postClaimTipFn>;
};

export function usePostClaimTip({
  mutationConfig,
}: UsePostClaimTipOptions = {}) {
  const { onSuccess, ...restConfig } = mutationConfig || {};

  return useMutation({
    onSuccess: (...args) => {
      onSuccess?.(...args);
    },
    ...restConfig,
    mutationFn: postClaimTipFn,
  });
}
