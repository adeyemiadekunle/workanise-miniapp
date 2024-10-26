import { useState } from "react";
import { FirstTimeRefferal } from "./components/first-time";
import { InviteLayer } from "./components/invite-layer";
import { AvailableFriends } from "./components/friends";
import { useGetReferrals } from "./api/get-referrals";
import { usePostClaimReferralReward } from "./api/claim-referral-reward";
import { fetchLocalUserData } from "@/lib/local-storage";
import { useGetUser } from "@/api/get-user";
import { QueryWrapper } from "@/components/layout";
import { useToast } from "@/hooks/use-toast";

export const Friends = () => {
  const { showToast } = useToast();
  const [openInvite, setOpenInvite] = useState(false);
  const { user } = fetchLocalUserData() || {};
  const userId = user.id;

  const getReferrals = useGetReferrals({ userId }); // get referrals
  const { data } = getReferrals || [{}];
  const { data: userData } = useGetUser({ userId });

  const { mutate: claim, error, isPending } = usePostClaimReferralReward({
    mutationConfig: {
      onSuccess: () => {
        showToast(`claim successfully`, "success");
      },
      onError: () => {
        showToast(`${error?.message}`, "error");
      },
    },
    userId,
  });

  const handleClaim = () => {
    try {
      claim?.({ userId });
    } catch (error) {
      console.error("Error starting session:", error);
    }
  };

  const Invite = () => {
    setOpenInvite(true);
  };

  return (
    <QueryWrapper currentQuery={getReferrals}>
      {/* Check if data and user exist */}
      {data?.data && data?.data?.referrals.length > 0 ? (
        <>
          <AvailableFriends
            openInvite={Invite}
            data={data}
            handleClaim={handleClaim}
            userData={userData}
            isPending={isPending}
          />
        </>
      ) : (
        <FirstTimeRefferal openInvite={Invite} userData={userData}/>
      )}

      <InviteLayer open={openInvite} setClose={setOpenInvite} />
    </QueryWrapper>
  );
};
