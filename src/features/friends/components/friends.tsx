import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import AvatarPlaceHolder from "@/assets/icons/avatar-image.svg";
import { Button } from "@/components/ui/button";
import { FriendItems } from "./friend-item";
import { FaUser } from "react-icons/fa6";
import { ReferralAPIResponse } from "../utils/types";
import { UserAPIResponse } from "@/types";

interface FriendProps {
  openInvite: () => void;
  data?: ReferralAPIResponse; // Expecting data to be an array of Referrals
  handleClaim: () => void;
  userData: UserAPIResponse | undefined;
  isPending: boolean;
}

export const AvailableFriends = ({
  openInvite,
  data,
  handleClaim,
  userData,
  isPending
}: FriendProps) => {
  const friends = data?.data?.referrals.length;

  return (
    <>
      <div className="flex flex-col justify-between h-full">
        <div className="mt-5 px-3">
          <div className="pt-3 flex items-center flex-col justify-center space-y-6">
            <Avatar className="w-28 h-28 text-black">
              <AvatarImage src={AvatarPlaceHolder} />
              <AvatarFallback className="text-2xl">CN</AvatarFallback>
            </Avatar>
            <h1 className="text-4xl font-bold text-center my-5 w-3/4">
              WP {userData?.data?.user?.referralRewardPoint}
            </h1>

            <Button
              onClick={handleClaim}
              variant="default"
              size="lg"
              className="rounded-full w-[60%] text-xl font-bold"
              disabled={userData?.data?.user?.referralRewardPoint == 0}
            >
              Claim
            </Button>
          </div>

          <div className="mt-[30px] mb-[20px]">
            <p className="font-bold text-xl">{friends || 0} Friends</p>
          </div>

          <div className="space-y-4 overflow-y-auto h-[180px]">
            {data?.data?.referrals.map((referral) => (
              <FriendItems
                key={referral.id} // Ensure to use a unique key
                username={referral.username}
                firstName={referral.firstName}
                lastName={referral.lastName}
                points={300} // Assuming balance represents referral points
              />
            ))}
          </div>
        </div>

        <div className="pb-[40px] flex items-center justify-center p-2">
          <Button onClick={() => openInvite()} variant="secondary" size="lg" disabled={isPending}>
            <FaUser size={18} className="mr-2" />
            Invite
          </Button>
        </div>
      </div>
    </>
  );
};
