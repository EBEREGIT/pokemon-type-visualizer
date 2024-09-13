import Grid from "@mui/material/Grid2";
import PokemonTypes from "./PokemonTypes";
import PokemonSingleVsDualTypes from "./SingleVsDoubleTypes";

export default function Reports() {
  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
        <PokemonTypes />
      </Grid>
      <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
        <PokemonSingleVsDualTypes />
      </Grid>
    </Grid>
  );
}
