import { initDataUser } from "@telegram-apps/sdk-react";
import { DailyLoginReward } from "./components/daily-login";
import { Tips } from "./components/tips";
import { useEffect, useState } from "react";
import { HomeComponent } from "./components/home";
import { fetchLocalUserData } from "@/lib/local-storage";
import { usePostClaimTip } from "./api/claim-tip";
import { useGetSession } from "./api/get-session";
import { useGetUser } from "@/api/get-user";
import { useGetDailyLogin } from "./api/get-daily-login";

export const Home = () => {
  const initData = initDataUser();

  const [openDaily, setOpenDaily] = useState(false);
  const [openTips, setOpenTips] = useState(false);
  const [tipReward, setTipReward] = useState(0);

  const { user } = fetchLocalUserData() || {};
  const userId = user.id;

  const { data: dailyLogin } = useGetDailyLogin({ userId });

  const { data: sessionData } = useGetSession({
    userId,
    refetchInterval: 2000 // Refetch data every second
  });

  const { data: userData } = useGetUser({ userId });

  const { mutate: claim } = usePostClaimTip({
    mutationConfig: {
      onSuccess: (response) => {
        setTipReward(response.data?.rewardAmount);
        setOpenTips(true);
      },
    },
    userId
  });

  // Use useEffect to avoid setting state during the render phase
  useEffect(() => {
    if (dailyLogin?.data?.dailyLogin?.active === true) {
      setOpenDaily(true);
    } else {
      setOpenDaily(false);
    }
  }, [dailyLogin]);

  const handleClaim = () => {
    try {
      claim?.({ userId });
    } catch (error) {
      console.error("Error starting session:", error);
    }
  };

  if (!initData) {
    return null;
  }

  return (
    <>
      <HomeComponent
        username={initData.username}
        sessionData={sessionData}
        userData={userData}
      />

      <DailyLoginReward
        open={openDaily}
        setClose={setOpenDaily}
        handleClaim={handleClaim} // Pass the function to claim reward
      />

      <Tips open={openTips} setClose={setOpenTips} reward={tipReward} />
    </>
  );
};
