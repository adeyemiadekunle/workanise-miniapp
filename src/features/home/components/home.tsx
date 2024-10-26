import Avatars from "@/assets/icons/avatar.svg";
import LogoWhite from "@/assets/icons/logo2-white.svg";
import Logo2 from "@/assets/icons/logo2.svg";
import { usePostStartSession } from "../api/post-start-session";
import { fetchLocalUserData } from "@/lib/local-storage";
import { formatTime, formatNumber } from "@/utils/helper-funcs";
import { SessionAPIResponse } from "../utils/types";
import { UserAPIResponse } from "@/types/index";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface HomeProps {
  username?: string;
  sessionData: SessionAPIResponse | undefined;
  userData: UserAPIResponse | undefined;
}

export const HomeComponent = ({
  username,
  sessionData,
  userData,
}: HomeProps) => {
  const { user } = fetchLocalUserData() || {};

  const userId = user.id;

  const { active, remainingTimeSeconds, earnedPoints } =
    sessionData?.data?.session || {};

  const { mutate } = usePostStartSession({
    mutationConfig: {
      onSuccess: () => {},
    },
    userId,
  });

  const startSession = () => {
    try {
      mutate?.({ userId });
    } catch (error) {
      console.error("Error starting session:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-between h-full ">
      <div>
        <div className=" flex justify-center items-center w-full mt-[70px]">
          <p
            className={`text-center py-1 px-2 border border-slate-800 rounded-md bg-slate-800  ${
              active == true ? "text-secondary" : "text-white"
            }`}
          >
            Click icon to take order
          </p>
        </div>
        <div className="flex flex-col justify-center items-center mt-[30px]">
          <Avatar
            onClick={startSession}
            className={`border h-52 w-52 p-3 rounded-full ${
              active == true
                ? "bg-primary border-primary"
                : "bg-secondary border-secondary"
            }  cursor-pointer`}
          >
            <AvatarImage src={Avatars} className="" />
            <AvatarFallback></AvatarFallback>
          </Avatar>

          <h3
            className={`text-[32px] ${
              active == true ? "text-white" : "text-secondary"
            } font-bold mt-[15px]`}
          >
            {username}
          </h3>

          <div
            className={`text-[40px] ${
              active == true ? "text-white" : "text-secondary"
            } font-bold mt-[10px]`}
          >
            {userData?.data?.user?.balance} WP
          </div>
          {/* animate the change in number */}
        </div>
      </div>

      <div className="pb-12 relative w-[100%]">
        <div className="flex w-full h-[60px] bg-secondary items-center justify-end px-5 rounded-3xl absolute z-0">
          <p className="font-[600]">{formatTime(remainingTimeSeconds || 0)}</p>
          {/* to animate */}
        </div>
        <div
          className={`flex w-[75%] h-[60px] ${
            active == true ? "bg-primary" : "bg-secondary"
          } items-center justify-between px-7 rounded-3xl relative z-4`}
        >
          {active ? (
            <img src={LogoWhite} alt="logo2" />
          ) : (
            <img src={Logo2} alt="logo2" />
          )}
          <p className="py-0.5 px-3 bg-slate-800 rounded-md text-[12px] text-nowrap">
            Seller is active
          </p>
          <p className="text-black font-[600]">{formatNumber(earnedPoints)}</p>
          {/* to animate */}
        </div>
      </div>
    </div>
  );
};
