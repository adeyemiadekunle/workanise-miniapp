import { useState } from "react";
import { FirstTimeRefferal } from "./components/first-time";
import { InviteLayer } from "./components/invite-layer";
import { AvailableFriends } from "./components/friends";
import { useGetReferrals } from "./api/get-referrals";
import { usePostClaimReferralReward } from "./api/claim-referral-reward";
import { fetchLocalUserData } from "@/lib/local-storage";
import { useGetUser } from "@/api/get-user";

export const Friends = () => {
  const [openInvite, setOpenInvite] = useState(false);

  const { user } = fetchLocalUserData() || {};

  const userId = user.id;

  const { data} = useGetReferrals({ userId }); // get referrals

  const { data: userData } = useGetUser({ userId });

  const { mutate: claim } = usePostClaimReferralReward({
    mutationConfig: {
      onSuccess: () => {},
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

  console.log(data?.data?.referrals)

  return (
    <>
      {/* Check if data and user exist */}
      {data?.data && data?.data?.referrals.length > 0 ? (
        <AvailableFriends
          openInvite={Invite}
          data={data}
          handleClaim={handleClaim}
          userData={userData}
        />
      ) : (
        <FirstTimeRefferal openInvite={Invite} />
      )}

      <InviteLayer open={openInvite} setClose={setOpenInvite} />
    </>
  );
};
