import { api } from "@/lib/axios";
import { SessionAPIResponse } from "../utils/types";
import { MutationConfig } from "@/lib/react-query";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getSessionQueryOptions } from "./get-session";

export const postStartSessionFn = async ({
  userId,
}: {
  userId: string;
}): Promise<SessionAPIResponse> => {
  return api.post(`/session/start`, userId);
};

type UsePostStartSessionOptions = {
  mutationConfig?: MutationConfig<typeof postStartSessionFn>;
  userId?: string;
};

export function usePostStartSession({
  mutationConfig,
  userId,
}: UsePostStartSessionOptions = {}) {
  const queryClient = useQueryClient();
  const { onSuccess, ...restConfig } = mutationConfig || {};

  return useMutation({
    onSuccess: (...args) => {
      queryClient.invalidateQueries({
        queryKey: getSessionQueryOptions(userId)?.queryKey,
      });
      onSuccess?.(...args);
    },
    ...restConfig,
    mutationFn: postStartSessionFn,
  });
}
