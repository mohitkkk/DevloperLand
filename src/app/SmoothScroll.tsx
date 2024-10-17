import React from "react";
import ReactDOM from "react-dom/client";
import App from "../app/page";
import "./index.css";
import SmoothScrolling from "../components/ui/SmoothScrolling"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    // wrappper here
    <SmoothScrolling>
      <App />
    </SmoothScrolling>
  </React.StrictMode>
);
