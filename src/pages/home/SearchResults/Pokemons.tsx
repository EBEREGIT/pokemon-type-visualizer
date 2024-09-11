import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { BasicPokemonDetails } from "../../../assets/types";
import { Variable } from "../../../stateManager/variable";
import Pokemon from "./pokemon";
import { capitalize } from "../../../utils/helpers";

export default function Pokemons() {
  const { searchResult } = React.useContext(Variable);
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
      console.log(event);
    };

  return (
    <>
      {searchResult && searchResult.length
        ? searchResult.map((pokemon: BasicPokemonDetails) => (
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
                {capitalize(pokemon.name)}
              </AccordionSummary>
              <AccordionDetails>
                <Pokemon pokemon={pokemon} />
              </AccordionDetails>
            </Accordion>
          ))
        : "No Pokemon Found!"}
    </>
  );
}
