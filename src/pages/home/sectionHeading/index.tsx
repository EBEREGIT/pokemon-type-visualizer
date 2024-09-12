import { Box } from "@mui/material";
import Title from "./title";
import CountsAndPercentagesToggle from "./countsAndPercentagesToggle";

export default function SectionHeading(props: {
  label: string;
  showSwitch?: boolean;
}) {
  const { label, showSwitch } = props;

  return (
    <Box
      component={"section"}
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        mt: 5, mb: 2.5
      }}
    >
      <Title label={label} />

      {showSwitch ? <CountsAndPercentagesToggle /> : ""}
    </Box>
  );
}
