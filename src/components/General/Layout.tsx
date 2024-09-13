import { Paper } from "@mui/material";
import { ReactNode, useContext } from "react";
import { ThemeManager } from "../../stateManager/Theme";

type LayoutProps = { content: ReactNode; styles?: object };

export default function Layout({ content, styles }: LayoutProps) {
  const { theme, mode, isLessThanMD } = useContext(ThemeManager);

  return (
    <Paper
      square
      elevation={0}
      sx={{
        width: "95%",
        m: "auto",
        p: isLessThanMD ? 1 : 2,
        borderRadius: isLessThanMD ? 0 : 3,
        backgroundColor: mode ? theme.palette.secondary.main : "white",
        ...styles,
      }}
    >
      {content}
    </Paper>
  );
}
