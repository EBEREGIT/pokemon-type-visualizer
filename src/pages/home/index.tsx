import { Box } from "@mui/material";
import Reports from "./Reports";
import SearchResult from "./SearchResults";
import { Variable } from "../../stateManager/variable";
import { useContext, useEffect } from "react";
import { Pokemon } from "../../stateManager/Pokemon";
import SectionHeading from "./sectionHeading";
import { ThemeManager } from "../../stateManager/Theme";

export default function Home() {
  const { search } = useContext(Variable);
  const { getPokemons } = useContext(Pokemon);
  const { isLessThanMD } = useContext(ThemeManager);

  useEffect(() => {
    if (location.hostname === "localhost") {
      // this runs only on development to avoid duplicate data
      const timeoutId = setTimeout(() => {
        getPokemons();
      }, 1000);

      return () => clearTimeout(timeoutId);
    } else {
      getPokemons();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
