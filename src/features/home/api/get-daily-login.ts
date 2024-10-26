import { queryOptions, useQuery } from "@tanstack/react-query";
import { api } from "@/lib/axios";
import { QueryConfig } from "@/lib/react-query";
import { DailyLoginAPIResponse } from "../utils/types";

export const getDailyLogin = ({
  userId,
}: {
  userId: string | undefined;
}): Promise<DailyLoginAPIResponse> => {
  return api.get(`/user/dailylogin/${userId}`);
};

export const getDailyLoginQueryOptions = (userId: string | undefined) => {
  return queryOptions({
    queryKey: ["user/dailylogin", userId],
    queryFn: () => getDailyLogin({ userId }),
  });
};

type UseGetDailyLoginOptions = {
  userId: string | undefined;
  queryConfig?: QueryConfig<typeof getDailyLoginQueryOptions>;
};

export const useGetDailyLogin = ({
  queryConfig,
  userId,
}: UseGetDailyLoginOptions) => {
  return useQuery({
    ...getDailyLoginQueryOptions(userId),
    ...queryConfig,
  });
};
