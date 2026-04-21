import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const container = document.getElementById("root");
if (!container) throw new Error("Root element #root not found");

const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Pass a handler (e.g. console.log) to start measuring performance.
// Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
