// external import
import { useContext, useEffect } from "react";

// asset
import "./App.css";

// internal import
import { Pokemon } from "./stateManager/Pokemon";
import { ThemeManager } from "./stateManager/Theme";
import { Paper, ThemeProvider } from "@mui/material";
import Loader from "./components/Feedback/Loader";
import Toast from "./components/Feedback/toast";
import Nav from "./components/nav";
import Home from "./pages/home";

function App() {
  const { theme, mode } = useContext(ThemeManager);
  const { getPokemons } = useContext(Pokemon);

  useEffect(() => {
    getPokemons();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Loader />
      <Toast />
      <Paper
        square
        elevation={0}
        sx={{
          height: "100vh",
          py: 3.5,
          backgroundColor: mode ? "" : theme.palette.primary.main,
        }}
      >
        <Nav />
        <Home />
      </Paper>
    </ThemeProvider>
  );
}

export default App;
