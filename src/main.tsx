import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext.tsx";
import ApiProvider from "./context/Api.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ApiProvider>
        <LanguageProvider>
          <App />
        </LanguageProvider>
      </ApiProvider>
    </BrowserRouter>
  </React.StrictMode>
);
