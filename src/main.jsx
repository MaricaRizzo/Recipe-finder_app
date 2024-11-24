import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { FavoritesProvider } from "./context/FavoritesContext";
import { ErrorProvider } from "./context/ErrorContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <ErrorProvider>
        <FavoritesProvider>
          <App />
        </FavoritesProvider>
      </ErrorProvider>
    </StrictMode>
  </BrowserRouter>
);
