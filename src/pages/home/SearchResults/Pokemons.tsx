import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { BasicPokemonDetails } from "../../../assets/types";
import { Variable } from "../../../stateManager/variable";

export default function Pokemons() {
  const { searchResult } = React.useContext(Variable);

  console.log(searchResult);

  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
      console.log(event);
    };

  return (
    <div>
      {searchResult &&
        searchResult.length ?
        searchResult.map((pokemon: BasicPokemonDetails) => (
          <Accordion
            expanded={expanded === `panel${pokemon.id}`}
            onChange={handleChange(`panel${pokemon.id}`)}
            elevation={0}
            key={pokemon.id}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${pokemon.id}bh-content`}
              id={`panel${pokemon.id}bh-header`}
              sx={{}}
            >
              {pokemon.name}
            </AccordionSummary>
            <AccordionDetails>{pokemon.name}</AccordionDetails>
          </Accordion>
        )):"No Pokemon Found!"}
    </div>
  );
}
