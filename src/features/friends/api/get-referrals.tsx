import { queryOptions, useQuery } from "@tanstack/react-query";
import { api } from "@/lib/axios";
import { QueryConfig } from "@/lib/react-query";
import { ReferralAPIResponse } from "../utils/types";

export const getReferrals = ({
  userId,
}: {
  userId: string | undefined;
}): Promise<ReferralAPIResponse> => {
  return api.get(`/user/referrals/${userId}`);
};

export const getReferralsQueryOptions = (userId: string | undefined) => {
  return queryOptions({
    queryKey: ["referrals", userId],
    queryFn: () => getReferrals({ userId }),
  });
};

type UseGetReferralsOptions = {
  userId: string | undefined;
  queryConfig?: QueryConfig<typeof getReferralsQueryOptions>;
};

export const useGetReferrals = ({
  queryConfig,
  userId,
}: UseGetReferralsOptions) => {
  return useQuery({
    ...getReferralsQueryOptions(userId),
    ...queryConfig,
  });
};
