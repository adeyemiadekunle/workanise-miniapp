import { api } from "@/lib/axios";
import { UserAPIResponse } from "@/types";
import { MutationConfig } from "@/lib/react-query";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getUserQueryOptions } from "@/api/get-user";

export const postClaimReferralRewardFn = async ({
  userId,
}: {
  userId: string;
}): Promise<UserAPIResponse> => {
  return api.post(`/user/referrals/claim`, {userId});
};

type UsePostClaimReferralRewardOptions = {
  mutationConfig?: MutationConfig<typeof postClaimReferralRewardFn>;
  userId?: string;
};

export function usePostClaimReferralReward({
  mutationConfig,
  userId,
}: UsePostClaimReferralRewardOptions = {}) {
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
    mutationFn: postClaimReferralRewardFn,
  });
}
