import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

// Defensive mount: ensure element exists and give a clear console error.
const mountNode = document.getElementById("root");
if (!mountNode) {
  console.error('Mount node not found. Make sure index.html contains <div id="root"></div>');
  throw new Error('Mount node "#root" not found in index.html');
}

createRoot(mountNode).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
