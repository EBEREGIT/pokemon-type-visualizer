import { Box } from "@mui/material";
import { BasicPokemonDetails } from "../../../../assets/types";
import Heading from "./heading";

export default function Cry({ pokemon }: { pokemon: BasicPokemonDetails }) {
  return (
    <Box component={"section"} sx={{ my: 2 }}>
      {/* title */}
      <Heading title={"Cry / Sound"} />

      {/* sound element */}
      <Box component={"audio"} controls>
        <Box component={"source"} src={pokemon.cries.latest} type="audio/ogg" />
      </Box>
    </Box>
  );
}
