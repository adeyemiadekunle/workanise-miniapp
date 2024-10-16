import { useEffect, useState } from "react";
import {miniAppReady } from "@telegram-apps/sdk-react";
import { Welcome } from "./components/welcome";
import { Login } from "./components/login";

export const Auth = () => {

  const [showAuth, setShowAuth] = useState(false);


  useEffect(() => {
    // Make MiniApp ready when the component is mounted
   miniAppReady()
    const timer = setTimeout(() => setShowAuth(true), 2000); // Delay of 2 seconds
    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  if (!miniAppReady || !showAuth) {
    return <Welcome />;
  }

  return <Login />;
};
