// external imports
import { Theme, createTheme } from "@mui/material";
import React, { createContext, useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";

declare module "@mui/material/styles" {
  interface Theme {
    red: {
      error: string;
    };
    gray: {
      main: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    red: {
      error: string;
    };
    gray: {
      main: string;
    };
  }
}

type ThemeManagerType = {
  mode: boolean;
  setMode: React.Dispatch<React.SetStateAction<boolean>>;
  theme: Theme;
  isGreaterThanMD: boolean;
  isGreaterThanSM: boolean;
  isLessThanMD: boolean;
  isLessThanSM: boolean;
};

type ThemeManagerProviderProps = {
  children: React.ReactNode;
};

export const ThemeManager = createContext({} as ThemeManagerType);

export default function ThemeManagerProvider({
  children,
}: ThemeManagerProviderProps) {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [mode, setMode] = useState<boolean>(prefersDarkMode);

  const theme = createTheme({
    palette: {
      primary: {
        main: "#0d5e95",
      },
      secondary: {
        main: "#00070e",
      },
      mode: mode ? "dark" : "light",
    },
    red: {
      error: "#FF2E2E",
    },
    gray: {
      main: "#e8ecef",
    },
  });

  const isGreaterThanMD = useMediaQuery(theme.breakpoints.up("md"));
  const isGreaterThanSM = useMediaQuery(theme.breakpoints.up("sm"));
  const isLessThanMD = useMediaQuery(theme.breakpoints.down("md"));
  const isLessThanSM = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <ThemeManager.Provider
      value={{
        mode,
        setMode,
        theme,
        isGreaterThanMD,
        isGreaterThanSM,
        isLessThanMD,
        isLessThanSM,
      }}
    >
      {children}
    </ThemeManager.Provider>
  );
}
