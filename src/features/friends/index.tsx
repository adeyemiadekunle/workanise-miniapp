import { useState } from "react";
import { FirstTimeRefferal } from "./components/first-time";
import { InviteLayer } from "./components/invite-layer";
import { Friend } from "./components/friend";

export const Friends = () => {

  const [openInvite, setOpenInvite] = useState(false)
  const [friend] = useState(true)

  const Invite = () => {
    setOpenInvite(true)
  };
  return (
    <>
      {
        friend ? (
          <Friend
           openInvite={Invite}
           />
        ) : (
          <FirstTimeRefferal
            openInvite={Invite}
          />
        )
      }

      <InviteLayer
        open={openInvite}
        setClose={setOpenInvite}
      />
    </>
  );
};
