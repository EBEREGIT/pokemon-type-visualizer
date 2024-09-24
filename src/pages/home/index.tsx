import { Box } from "@mui/material";
import Reports from "./Reports";
import SearchResult from "./SearchResults";
import { Variable } from "../../stateManager/variable";
import { useContext } from "react";
import SectionHeading from "./sectionHeading";
import { ThemeManager } from "../../stateManager/Theme";

export default function Home() {
  const { search } = useContext(Variable);
  const { isLessThanMD } = useContext(ThemeManager);

  return (
    <Box component={"main"} sx={{ mx: isLessThanMD ? 1 : 2.5 }}>
      {/* search results section */}
      {search && (
        <>
          <SectionHeading label={"Search Result"} />
          <SearchResult />
        </>
      )}

      {/* charts section */}
      <SectionHeading label={"Report"} showSwitch={true} />
      <Reports />
    </Box>
  );
}
