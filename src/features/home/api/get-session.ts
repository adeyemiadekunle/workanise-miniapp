import { queryOptions, useQuery } from "@tanstack/react-query";
import { api } from "@/lib/axios";
import { QueryConfig } from "@/lib/react-query";
import { SessionAPIResponse } from "../utils/types";

export const getSession = ({
  userId,
}: {
  userId: string | undefined;
}): Promise<SessionAPIResponse> => {
  return api.get(`/session/${userId}`);
};

export const getSessionQueryOptions = (userId: string | undefined) => {
  return queryOptions({
    queryKey: ["session", userId],
    queryFn: () => getSession({ userId }),
  });
};

type UseGetSessionOptions = {
  userId: string | undefined;
  queryConfig?: QueryConfig<typeof getSessionQueryOptions>;
  refetchInterval?: number;  // auto-refetching interval
};

export const useGetSession = ({
  queryConfig,
  userId,
  refetchInterval
}: UseGetSessionOptions) => {
  return useQuery({
    ...getSessionQueryOptions(userId),
    ...queryConfig,
    refetchInterval

  });
};
