import { useLaunchParams, miniApp, useSignal } from "@telegram-apps/sdk-react";
import { AppRoot } from "@telegram-apps/telegram-ui";
import { RouterProvider } from "react-router-dom";
import { routes } from "@/routes/index";
import { QueryClientProvider } from "@tanstack/react-query";
import { AppContextProvider } from "@/lib/context";
import { queryClient } from "@/lib/react-query";
import { ToastProvider } from "@/hooks/use-toast";
import ToastNotification from "../ui/toast";

function App() {
  const lp = useLaunchParams();
  const isDark = useSignal(miniApp.isDark);

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
