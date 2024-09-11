import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import GeneralProvider from "./stateManager/General.tsx";
import ThemeManagerProvider from "./stateManager/Theme.tsx";
import VariableProvider from "./stateManager/variable.tsx";
import PokemonProvider from "./stateManager/Pokemon.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <VariableProvider>
      <ThemeManagerProvider>
        <GeneralProvider>
          <PokemonProvider>
            <App />
          </PokemonProvider>
        </GeneralProvider>
      </ThemeManagerProvider>
    </VariableProvider>
  </StrictMode>
);
