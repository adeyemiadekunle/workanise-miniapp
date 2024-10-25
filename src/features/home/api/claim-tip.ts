import { api } from "@/lib/axios";
import { ClaimTipAPIResponse } from "../utils/types";
import { MutationConfig } from "@/lib/react-query";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getUserQueryOptions } from "@/api/get-user";


export const postClaimTipFn = async ({
  userId,
}: {
  userId: string;
}): Promise<ClaimTipAPIResponse> => {
  return api.post(`/user/tip/${userId}`);
};

type UsePostClaimTipOptions = {
  mutationConfig?: MutationConfig<typeof postClaimTipFn>;
  userId?:string
};

export function usePostClaimTip({
  mutationConfig,
  userId
}: UsePostClaimTipOptions = {}) {
  const queryClient = useQueryClient();
  const { onSuccess, ...restConfig } = mutationConfig || {};

  return useMutation({
    onSuccess: (...args) => {
      queryClient.invalidateQueries({
        queryKey: getUserQueryOptions(userId)?.queryKey,
      });
      onSuccess?.(...args);
    },
    ...restConfig,
    mutationFn: postClaimTipFn,
  });
}
