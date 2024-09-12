import Grid from "@mui/material/Grid2";
import Half from "../../../../components/Grid/Half";
import Item from "./item";
import { BasicPokemonDetails } from "../../../../assets/types";
import {
  capitalize,
  retrievePokemonAbilities,
  retrievePokemonTypes,
} from "../../../../utils/helpers";
import { Box } from "@mui/material";

export default function Pokemon(props: { pokemon: BasicPokemonDetails }) {
  const { pokemon } = props;

  return (
    <Grid
      key={pokemon.id}
      container
      sx={{
        width: "100%",
        height: "auto",
        borderRadius: 2,
        px: 5,
        py: 5,
      }}
    >
      <Half content={<Item title={"Weight"} content={pokemon.weight} />} />

      <Half content={<Item title={"Height"} content={pokemon.height} />} />

      <Half
        content={
          <Item
            title={"Type(s)"}
            content={capitalize(retrievePokemonTypes(pokemon.types))}
          />
        }
      />

      <Half
        content={
          <Item
            title={"Abilities"}
            content={capitalize(retrievePokemonAbilities(pokemon.abilities))}
          />
        }
      />

      <Half
        content={
          <Item
            title={"Cry"}
            content={
              <Box component={"audio"} controls>
                <Box
                  component={"source"}
                  src={pokemon.cries.latest}
                  type="audio/ogg"
                />
              </Box>
            }
          />
        }
      />
    </Grid>
  );
}
