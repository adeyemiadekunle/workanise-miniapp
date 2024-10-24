import { initDataUser } from '@telegram-apps/sdk-react';
import { DailyLoginReward } from './components/daily-login';
import { Tips } from './components/tips';
import { useState } from 'react';
import { HomeComponent } from './components/home';
import { fetchLocalUserData } from '@/lib/local-storage';
import { usePostClaimTip } from './api/claim-tip';


export const Home = () => {
  const initData = initDataUser();

  const [openDaily, setCloseDaily] = useState(false);
  const [openTips, setCloseTips] = useState(false);
  const [tipReward, setTipReward] = useState(0)

  const { user } = fetchLocalUserData() || {}
  const userId = user.id;



  const { mutate: claim } = usePostClaimTip({
    mutationConfig: {
      onSuccess: (response) => {
        console.log(response.data.rewardAmount)
        setTipReward(response.data.rewardAmount)
        setCloseTips(true);
      },
    },
  })

  const handleClaim = () => {
    try {
      claim?.({ userId })
    } catch (error) {
      console.error("Error starting session:", error);
    }
  }



  // const handleOpen = () => {
  //   setCloseDaily(true);
  // };


  if (!initData) {
    return null;
  }

  return (
    <>
      <HomeComponent
        username={initData.username}
      />

      <DailyLoginReward
        open={openDaily}
        setClose={setCloseDaily}
        handleClaim={handleClaim} // Pass the function to claim reward
      />

      <Tips
        open={openTips}
        setClose={setCloseTips}
        reward={tipReward}
      />

    </>
  );
};
