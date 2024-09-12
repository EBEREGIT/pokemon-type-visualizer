import useGetSortedPokemonTypes from "../../../hooks/useGetPokemonTypes";
import BarChartComponent from "./chart/BarChart";

export default function PokemonTypes() {
  const data = useGetSortedPokemonTypes();

  return (
    <BarChartComponent
      data={data}
      label={"Type Distribution Visualizer"}
    />
  );
}
