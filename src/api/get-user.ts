import { queryOptions, useQuery } from "@tanstack/react-query";
import { api } from "@/lib/axios";
import { QueryConfig } from "@/lib/react-query";
import { UserAPIResponse } from "@/types";

export const getUser = ({
  userId,
}: {
  userId: string | undefined;
}): Promise<UserAPIResponse> => {
  return api.get(`/user/${userId}`);
};

export const getUserQueryOptions = (userId: string | undefined) => {
  return queryOptions({
    queryKey: ["user", userId],
    queryFn: () => getUser({ userId }),
  });
};

type UseGetUserOptions = {
  userId: string | undefined;
  queryConfig?: QueryConfig<typeof getUserQueryOptions>;
};

export const useGetUser = ({
  queryConfig,
  userId,
}: UseGetUserOptions) => {
  return useQuery({
    ...getUserQueryOptions(userId),
    ...queryConfig,
  });
};
