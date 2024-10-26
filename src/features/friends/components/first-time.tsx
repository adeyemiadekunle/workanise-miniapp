import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { FaUser } from "react-icons/fa6";
import AvatarPlaceHolder from "@/assets/icons/avatar-image.svg";

interface FirstTimeRefferalProps {
  openInvite: () => void;
}

export const FirstTimeRefferal = ({ openInvite }: FirstTimeRefferalProps) => {
  return (
    <>
      <div className="pt-10 px-3 h-full  flex flex-col justify-between ">
        <div>
          <div className="flex flex-col items-center justify-center mb-[20px]">
            <Avatar className=" w-24 h-24 text-black">
              <AvatarImage src={AvatarPlaceHolder} />
              <AvatarFallback className="text-2xl">CN</AvatarFallback>
            </Avatar>
            <h1 className="text-3xl font-bold text-center my-5 w-3/4">
              Invite Friends, Earn Work Points
            </h1>
          </div>

          <div className="mb-3">
            <h2 className="text-lg font-semibold mb-2">How it Works</h2>
            <ol className="space-y-10 relative">
              <div className="absolute left-[6px] top-4 w-[2px] h-[calc(100%-3rem)] bg-white"></div>
              <li className="flex items-start">
                <div className="w-4 h-4 rounded-full bg-white mt-1 mr-4 z-10"></div>
                <div>
                  <p className="font-semibold text-[16px]">Share your invitation link</p>
                  <p className="text-base text-gray-400">
                    Get a Work pass for each friend
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-4 h-4 rounded-full bg-white mt-1 mr-4 z-10"></div>
                <div>
                  <p className="font-semibold text-[16px]">Your friends Join Workanise</p>
                  <p className="text-base text-gray-400">
                    And start farming points
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-4 h-4 rounded-full bg-white mt-1 mr-4 z-10"></div>
                <div>
                  <p className="font-semibold text-[16px]">Score 10% from friends</p>
                  <p className="text-base text-gray-400">
                    Plus an extra 2.5% from their Referrals
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </div>

        <div className="pb-[40px]">
          <Button onClick={() => openInvite()} variant="secondary" size="lg">
            <FaUser size={16} className="mr-2" />
            Invite
          </Button>
        </div>
      </div>
    </>
  );
};
