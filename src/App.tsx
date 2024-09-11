// external import
import { useContext, useEffect } from "react";

// asset
import "./App.css";

// internal import
import { Pokemon } from "./stateManager/Pokemon";
import { ThemeManager } from "./stateManager/Theme";
import { Paper, ThemeProvider } from "@mui/material";
import ModeToggle from "./components/General/ModeToggle";
import Chart from "./components/chart";
import Loader from "./components/Feedback/Loader";
import Toast from "./components/Feedback/toast";

function App() {
  const { theme } = useContext(ThemeManager);
  const { getPokemons } = useContext(Pokemon);

  useEffect(() => {
    getPokemons();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Paper square elevation={0} sx={{ height: "100vh" }}>
        <Loader />
        <Toast />
        <ModeToggle />
        <Chart />
      </Paper>
    </ThemeProvider>
  );
}

export default App;
