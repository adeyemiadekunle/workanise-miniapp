import { useLaunchParams, miniApp, useSignal, miniAppReady } from "@telegram-apps/sdk-react";
import { AppRoot } from "@telegram-apps/telegram-ui";
import { RouterProvider } from "react-router-dom";
import { routes } from "@/routes/index";
import { QueryClientProvider } from "@tanstack/react-query";
import { AppContextProvider } from "@/lib/context";
import { queryClient } from "@/lib/react-query";
import { ToastProvider } from "@/hooks/use-toast";
import ToastNotification from "../ui/toast";
import { useEffect, useState } from "react";
import { Welcome } from "./welcome";

function App() {
  const lp = useLaunchParams();
  const isDark = useSignal(miniApp.isDark);

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

  return (
    <AppRoot
      appearance={isDark ? "dark" : undefined}
      platform={["macos", "ios"].includes(lp.platform) ? "ios" : "base"}
      className="h-full"
    >
      <QueryClientProvider client={queryClient}>
        <AppContextProvider>
          <ToastProvider>
            <RouterProvider router={routes} />
            <ToastNotification />
          </ToastProvider>
        </AppContextProvider>
      </QueryClientProvider>
    </AppRoot>
  );
}

export default App;
