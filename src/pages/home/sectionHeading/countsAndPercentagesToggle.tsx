import { Stack, Switch } from "@mui/material";
import { useContext } from "react";
import { Variable } from "../../../stateManager/variable";
import LabelComponent from "./label";

export default function CountsAndPercentagesToggle() {
  const { setShowPercentage, showPercentage } = useContext(Variable);

  return (
    <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
      <LabelComponent label={"Count"} />

      <Switch
        checked={showPercentage}
        onChange={(e) => setShowPercentage(e.target.checked)}
      />

      <LabelComponent label={"Percentage"} />
    </Stack>
  );
}
