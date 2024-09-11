import { Box, Typography } from "@mui/material";
import { useContext } from "react";
import { ThemeManager } from "../../stateManager/Theme";

export default function Logo() {
  const { theme, mode } = useContext(ThemeManager);

  return (
    <Box
      component={"a"}
      href="/"
      sx={{ textDecoration: "none", cursor: "pointer" }}
    >
      <Typography
        variant="h5"
        fontWeight={900}
        sx={{
          color: mode
            ? theme.palette.primary.main
            : theme.palette.secondary.main,
        }}
      >
        Pokemon Chart
      </Typography>
    </Box>
  );
}
