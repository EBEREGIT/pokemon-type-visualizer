import { Box } from "@mui/material";
import Reports from "./Reports";
import SectionHeading from "./sectionHeading";
import SearchResult from "./SearchResults";
import { Variable } from "../../stateManager/variable";
import { useContext, useEffect } from "react";
import { Pokemon } from "../../stateManager/Pokemon";

export default function Home() {
  const { search } = useContext(Variable);
  const { getPokemons } = useContext(Pokemon);

  useEffect(() => {
    // this runs only on development to avoid duplicate data
    if (location.hostname === "localhost") {
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
    <Box component={"main"} sx={{ mx: 2.5 }}>
      {search ? (
        <>
          <SectionHeading label={"Search Result"} />
          <SearchResult />
        </>
      ) : (
        ""
      )}
      <SectionHeading label={"Report"} />
      <Reports />
    </Box>
  );
}
