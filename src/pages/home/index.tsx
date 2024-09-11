import { Box } from "@mui/material";
import Reports from "./Reports";
import SectionHeading from "./sectionHeading";
import SearchResult from "./SearchResults";

export default function Home() {
  return (
    <Box component={"main"} sx={{ mx: 2.5 }}>
      <SectionHeading label={"Search Result"} />
      <SearchResult />

      <SectionHeading label={"Report"} />
      <Reports />
    </Box>
  );
}
