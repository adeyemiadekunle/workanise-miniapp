import { bindViewportCSSVars, useViewport } from "@telegram-apps/sdk-react";
import { AppRoot } from "@telegram-apps/telegram-ui";
import { useEffect } from "react";
import { RouterProvider } from 'react-router-dom';
import { routes } from './routes/index';
import { QueryClientProvider } from "@tanstack/react-query";
import { ToastProvider } from "./hooks/ToastContext";
import { AppContextProvider } from "./lib/context";
import { queryClient } from "./lib/react-query";
import ToastNotification from "./components/toast";

function App() {
  const viewport = useViewport();

  if (!viewport?.isExpanded) {
    viewport?.expand();
  }

  useEffect(() => {
    return viewport && bindViewportCSSVars(viewport);
  }, [viewport]);

  return (
    <AppRoot appearance="dark">
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
