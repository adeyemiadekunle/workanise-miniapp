import { useEffect, useState } from "react";
import { initMiniApp} from "@telegram-apps/sdk-react";
import { Welcome } from "./components/welcome";
import { Login } from "./components/login";

export const Auth = () => {
  const [miniApp] = initMiniApp();
  const [showAuth, setShowAuth] = useState(false);

  useEffect(() => {
    // Make MiniApp ready when the component is mounted
    miniApp.ready();
    const timer = setTimeout(() => setShowAuth(true), 2000); // Delay of 2 seconds
    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, [miniApp]);

  if (!miniApp.ready || !showAuth) {
    return <Welcome />;
  }

  return <Login />;
};
