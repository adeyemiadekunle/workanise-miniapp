import { useInitData } from "@telegram-apps/sdk-react";

export const Home = () => {
  const initData = useInitData()

  if (!initData) {
    return;
  }

  return (
    <>
      <div>
        {initData.user ? initData.user.username : "No user data available"}
      </div>
    </>
  );
};
