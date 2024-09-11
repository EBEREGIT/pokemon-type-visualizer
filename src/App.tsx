// external import
import { useContext, useEffect } from "react";

// asset
import "./App.css";

// internal import
import { Pokemon } from "./stateManager/Pokemon";
import { ThemeManager } from "./stateManager/Theme";
import { ThemeProvider } from "@mui/material";
import ModeToggle from "./components/General/ModeToggle";
import Chart from "./components/chart";

function App() {
  const { theme } = useContext(ThemeManager);
  const { getPokemons } = useContext(Pokemon);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      getPokemons();
    }, 3000);

    return () => clearTimeout(timeoutId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <ModeToggle />
        <Chart />
      </ThemeProvider>
    </>
  );
}

export default App;
