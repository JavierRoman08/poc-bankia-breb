import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.scss";
import { Amplify } from "aws-amplify";

import "@aws-amplify/ui-react/styles.css";
import "@aws-amplify/ui-react/styles/base.layer.css"; // base styling needed for Amplify UI
import "@aws-amplify/ui-react/styles/button.layer.css"; // component specific styles

import amplifyconfig from "./amplifyconfiguration.json";
Amplify.configure(amplifyconfig);

import { ThemeProvider } from "@aws-amplify/ui-react";

createRoot(document.getElementById("root")!).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
