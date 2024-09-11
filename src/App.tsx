// external import
import { useContext } from "react";

// asset
import "./App.css";

// internal import
import { ThemeManager } from "./stateManager/Theme";
import { Paper, ThemeProvider } from "@mui/material";
import Loader from "./components/Feedback/Loader";
import Toast from "./components/Feedback/toast";
import Nav from "./components/nav";
import Home from "./pages/home";
import useGetPokemonSingleVsDualTypes from "./hooks/useGetPokemonSingleVsDualTypes";

function App() {
  const { theme, mode } = useContext(ThemeManager);

  const pokemonMap = useGetPokemonSingleVsDualTypes()

  console.log(pokemonMap);
  

  return (
    <ThemeProvider theme={theme}>
      <Loader />
      <Toast />
      <Paper
        square
        elevation={0}
        sx={{
          height: "100vh",
          backgroundColor: mode ? "" : theme.palette.primary.main,
        }}
      >
        <Paper
          square
          elevation={0}
          sx={{
          py: 3.5,
            height: "auto",
            backgroundColor: mode ? "" : theme.palette.primary.main,

          }}
        >
          <Nav />
          <Home />
        </Paper>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
