import { Paper } from "@mui/material";
import { ReactNode, useContext } from "react";
import { ThemeManager } from "../../stateManager/Theme";

export default function Layout(props: { content: ReactNode; styles?: object }) {
  const { content, styles } = props;
  const { theme, mode } = useContext(ThemeManager);

  return (
    <Paper
      square
      elevation={0}
      sx={{
        width: "95%",
        m: "auto",
        p: 2,
        borderRadius: 3,
        border: `1px solid ${
          mode ? theme.palette.primary.dark : theme.palette.secondary.light
        }`,
        backgroundColor: mode ? theme.palette.secondary.main : "white",
        ...styles,
      }}
    >
      {content}
    </Paper>
  );
}
