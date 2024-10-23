import { useState } from "react";
import { FirstTimeRefferal } from "./components/first-time";
import { InviteLayer } from "./components/invite-layer";
import { AvailableFriends } from "./components/friends";
import { useGetReferrals } from "./api/get-referrals"
import { fetchLocalUserData } from "@/lib/local-storage";

export const Friends = () => {
  const { user } = fetchLocalUserData() || {}

  const userId = user.id;

  const { data } = useGetReferrals({ userId })  // get user

  const [openInvite, setOpenInvite] = useState(false)

  const Invite = () => {
    setOpenInvite(true)
  };
  return (
    <>
      {/* Check if data and user exist */}
      {data?.data && data.data.length > 0 ? (
        <AvailableFriends openInvite={Invite} data={data?.data} />
      ) : (
        <FirstTimeRefferal openInvite={Invite} />
      )}

      <InviteLayer open={openInvite} setClose={setOpenInvite} />
    </>
  );
};
