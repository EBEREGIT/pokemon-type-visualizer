import {
  Bar,
  BarChart,
  Cell,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { SortedPokemon } from "../../../../../assets/types";
import { useContext } from "react";
import { ThemeManager } from "../../../../../stateManager/Theme";
import { General } from "../../../../../stateManager/General";

export default function Visualizer({ data }: { data: SortedPokemon[] }) {
  const { showPercentage } = useContext(General);
  const { theme, mode } = useContext(ThemeManager);

  return (
    <ResponsiveContainer width={"100%"} height={400}>
      <BarChart data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />

        {/* display each bar cel with its unique color */}
        <Bar dataKey={showPercentage ? "percentage" : "count"}>
          {data.map((entry) => (
            <Cell
              cursor="pointer"
              fill={entry.color}
              stroke={
                mode
                  ? theme.palette.primary.dark
                  : theme.palette.secondary.light
              }
              key={`cell-${entry}`}
            />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
