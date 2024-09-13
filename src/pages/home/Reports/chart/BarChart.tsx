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
import { SortedPokemon } from "../../../../assets/types";
import Heading from "../../heading";
import Layout from "../../../../components/General/Layout";
import { useContext } from "react";
import { Variable } from "../../../../stateManager/variable";
import { ThemeManager } from "../../../../stateManager/Theme";
import { motion, AnimatePresence } from "framer-motion";

export default function BarChartComponent(props: {
  data: SortedPokemon[];
  label: string;
}) {
  const { data, label } = props;
  const { showPercentage } = useContext(Variable);
  const { theme, mode } = useContext(ThemeManager);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={label}
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <Layout
          content={
            <>
              {/* chart title */}
              <Heading
                label={label}
                typographyStyles={{ fontWeight: 500 }}
                variant="body1"
                styles={{ mb: 2 }}
              />

              {/* chart body */}
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
            </>
          }
        />
      </motion.div>
    </AnimatePresence>
  );
}
