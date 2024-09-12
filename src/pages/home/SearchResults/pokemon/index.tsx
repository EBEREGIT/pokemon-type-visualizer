import Grid from "@mui/material/Grid2";
import Half from "../../../../components/Grid/Half";
import Item from "./item";
import { BasicPokemonDetails } from "../../../../assets/types";
import {
  capitalize,
  retrievePokemonAbilities,
  retrievePokemonTypes,
} from "../../../../utils/helpers";
import { useContext } from "react";
import { ThemeManager } from "../../../../stateManager/Theme";
import Cry from "./Cry";

export default function Pokemon(props: { pokemon: BasicPokemonDetails }) {
  const { pokemon } = props;
  const { isLessThanMD } = useContext(ThemeManager);

  return (
    <Grid
      key={pokemon.id}
      container
      sx={{
        width: "100%",
        height: "auto",
        borderRadius: 2,
        px: isLessThanMD ? 0 : 5,
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

      <Cry pokemon={pokemon} />
    </Grid>
  );
}
