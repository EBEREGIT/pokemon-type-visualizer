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

function App() {
  const { theme, mode, isLessThanMD } = useContext(ThemeManager);

  return (
    <ThemeProvider theme={theme}>
      <Loader />
      <Toast />
      <Paper
        square
        elevation={0}
        sx={{
          height: "100vh",
          backgroundColor: mode ? "" : theme.gray.main,
        }}
      >
        <Paper
          square
          elevation={0}
          sx={{
            pt: isLessThanMD ? 0 : 3.5,
            pb: 5,
            height: "auto",
            backgroundColor: mode ? "" : theme.gray.main,
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
