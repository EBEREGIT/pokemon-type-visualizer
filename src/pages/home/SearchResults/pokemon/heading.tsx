import { Typography } from "@mui/material";
import { useContext } from "react";
import { ThemeManager } from "../../../../stateManager/Theme";

export default function Heading(props: { title: string }) {
  const { title } = props;
  const { theme, mode } = useContext(ThemeManager);

  return (
    <Typography
      variant="body2"
      gutterBottom
      fontWeight={500}
      fontSize={14}
      sx={{
        color: mode
          ? theme.palette.primary.light
          : theme.palette.secondary.dark,
      }}
    >
      {title}
    </Typography>
  );
}
