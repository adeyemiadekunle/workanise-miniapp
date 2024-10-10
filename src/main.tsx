import {  StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "@telegram-apps/telegram-ui/dist/styles.css";
import { SDKProvider} from "@telegram-apps/sdk-react";
import App from "./App";
import "./lib/mockEnv";


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SDKProvider>
      <App />
    </SDKProvider>
  </StrictMode>
);
