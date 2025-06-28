import React from "react";
import ReactDOM from "react-dom/client"; // ✅ New import for React 18+
import App from "./App";
import "./index.css"; // Your Tailwind styles

const root = ReactDOM.createRoot(document.getElementById("root")); // ✅ createRoot instead of render
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
