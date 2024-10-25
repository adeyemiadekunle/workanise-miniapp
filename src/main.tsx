import {  StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { init } from "@/lib/init";
import { retrieveLaunchParams } from "@telegram-apps/sdk-react";

import "@/lib/mockEnv"
import { Root } from "@/components/layout/root";

import "./index.css";
import "@telegram-apps/telegram-ui/dist/styles.css";



// Configure all application dependencies
init(retrieveLaunchParams().startParam === 'debug' || import.meta.env.DEV);


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Root/>
  </StrictMode>
);
