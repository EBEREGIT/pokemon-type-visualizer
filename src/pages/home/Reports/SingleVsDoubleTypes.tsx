import useGetPokemonSingleVsDualTypes from "../../../hooks/useGetPokemonSingleVsDualTypes";
import BarChartComponent from "./chart/BarChart";

export default function PokemonSingleVsDoubleTypes() {
  const data = useGetPokemonSingleVsDualTypes();

  return (
    <BarChartComponent
      data={data}
      label={"Pokémon Single-type vs dual-type Distribution Visualizer"}
    />
  );
}
