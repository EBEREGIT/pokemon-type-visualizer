import { Stack, Switch, Typography } from "@mui/material";
import { useContext } from "react";
import { Variable } from "../../../stateManager/variable";
import { ThemeManager } from "../../../stateManager/Theme";

export default function CountsAndPercentagesToggle() {
  const { setShowPercentage, showPercentage } = useContext(Variable);
  const { isLessThanMD } = useContext(ThemeManager);

  return (
    <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
      {isLessThanMD ? "" : <Typography>Count</Typography>}
      <Switch
        checked={showPercentage}
        onChange={(e) => setShowPercentage(e.target.checked)}
      />
      {isLessThanMD ? "" : <Typography>Percentage</Typography>}
    </Stack>
  );
}
