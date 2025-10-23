import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import "./lib/i18n";

const savedLang = localStorage.getItem("lng");
if (savedLang) {
  import("./lib/i18n").then(({ default: i18n }) =>
    i18n.changeLanguage(savedLang)
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
