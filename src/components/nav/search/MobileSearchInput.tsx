import { useContext } from "react";
import { ThemeManager } from "../../../stateManager/Theme";
import { Variable } from "../../../stateManager/variable";
import SearchInput from "./searchInput";
import { Box } from "@mui/material";
import { motion } from "framer-motion";

export default function MobileSearchInput() {
  const { isLessThanMD } = useContext(ThemeManager);
  const { show } = useContext(Variable);

  const showCSS = {
    opacity: 1,
    display: "block",
  };

  const hideCSS = {
    opacity: 0,
    display: "none",
  };

  return (
    <>
      {isLessThanMD ? (
        <motion.div animate={show ? showCSS : hideCSS}>
          <Box component={"section"} sx={{ mt: 2 }}>
            <SearchInput />
          </Box>
        </motion.div>
      ) : (
        ""
      )}
    </>
  );
}
