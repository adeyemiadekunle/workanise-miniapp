import { initDataUser } from '@telegram-apps/sdk-react';
import { DailyLoginReward } from './components/daily-login';
import { Tips } from './components/tips';
import { useState } from 'react';
import { HomeComponent } from './components/home';

export const Home = () => {
  const initData = initDataUser();

  const [openDaily, setCloseDaily] = useState(false);
  const [openTips, setCloseTips] = useState(false);

  // const handleOpen = () => {
  //   setCloseDaily(true);
  // };

  const openNextDrawer = () => {
    setCloseTips(true); // Opens the Tips drawer after DailyLoginReward is closed
  };

  if (!initData) {
    return null;
  }

  return (
    <>
      <HomeComponent
      />

      <DailyLoginReward
        open={openDaily}
        setClose={setCloseDaily}
        openNextDrawer={openNextDrawer} // Pass the function to open Tips
      />

      <Tips
        open={openTips}
        setClose={setCloseTips}
      />

    </>
  );
};
