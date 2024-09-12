import { Box } from "@mui/material";
import { useContext } from "react";
import { ThemeManager } from "../../stateManager/Theme";

export default function RepoRedirect() {
  const { theme } = useContext(ThemeManager);

  return (
    <Box component={"span"}>
      <Box
        component={"a"}
        href="https://github.com/EBEREGIT/pokemon-type-chart"
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          textDecoration: "none",
          cursor: "pointer",
          color: theme.palette.primary.main,
        }}
      >
        Pokemon Types Chart
      </Box>
    </Box>
  );
}
