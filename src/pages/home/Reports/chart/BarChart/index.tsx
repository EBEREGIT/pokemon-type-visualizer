import { SortedPokemon } from "../../../../../assets/types";
import Layout from "../../../../../components/General/Layout";
import Animate from "../../../../../components/General/Animate";
import Title from "./title";
import Visualizer from "./visualizer";

type BarChartComponentProps = {
  data: SortedPokemon[];
  label: string;
};

export default function BarChartComponent({
  data,
  label,
}: BarChartComponentProps) {
  return (
    <Animate
      content={
        <Layout
          content={
            <>
              {/* chart title */}
              <Title label={label} />

              {/* chart body */}
              <Visualizer data={data} />
            </>
          }
        />
      }
    />
  );
}
