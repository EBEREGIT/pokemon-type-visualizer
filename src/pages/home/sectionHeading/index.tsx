import { Box } from "@mui/material";
import Title from "./title";
import CountsAndPercentagesToggle from "./countsAndPercentagesToggle";

type SectionHeadingProps = {
  label: string;
  showSwitch?: boolean;
};

export default function SectionHeading({
  label,
  showSwitch = false,
}: SectionHeadingProps) {
  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        mt: 5,
        mb: 2.5,
      }}
    >
      <Title label={label} />
      {showSwitch && <CountsAndPercentagesToggle />}
    </Box>
  );
}
