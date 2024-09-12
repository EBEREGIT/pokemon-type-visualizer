import { Stack, Switch, Typography } from "@mui/material";
import { useContext } from "react";
import { Variable } from "../../../stateManager/variable";

export default function CountsAndPercentagesToggle() {
  const { setShowPercentage, showPercentage } = useContext(Variable);

  return (
    <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
      <Typography>Count</Typography>
      <Switch
        checked={showPercentage}
        onChange={(e) => setShowPercentage(e.target.checked)}
      />
      <Typography>Percentage</Typography>
    </Stack>
  );
}
