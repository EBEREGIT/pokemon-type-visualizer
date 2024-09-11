import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import useGetSortedPokemonTypes from "../../hooks/useGetPokemonTypes";
import { Box } from "@mui/material";

export default function Chart() {
  const data = useGetSortedPokemonTypes();

  return (
    <Box component={"main"} sx={{ width: "100%", height: 500 }}>
      <ResponsiveContainer>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />

          {/* display each bar cel with its unique color */}
          <Bar dataKey="count">
            {data.map((entry) => (
              <Cell cursor="pointer" fill={entry.color} key={`cell-${entry}`} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
}
