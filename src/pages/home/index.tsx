import { Box } from "@mui/material";
import Reports from "./Reports";
import Heading from "./heading";

export default function Home() {
  return (
    <Box component={"main"} sx={{ mx: 2.5 }}>
      <Heading
        label={"Reports"}
        typographyStyles={{ fontWeight: 600 }}
        variant="h6"
        styles={{ mt: 5, mb: 2.5 }}
      />
      <Reports />
    </Box>
  );
}
