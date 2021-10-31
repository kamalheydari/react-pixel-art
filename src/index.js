import React from "react";
import { render } from "react-dom";
import App from "./components/App";
import { AppProvider } from "./context/context";
render(
  <AppProvider>
    <App />
  </AppProvider>,
  document.getElementById("root")
);
