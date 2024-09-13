import { useContext } from "react";
import { ThemeManager } from "../../../stateManager/Theme";
import { Variable } from "../../../stateManager/variable";
import SearchInput from "./searchInput";
import { Box } from "@mui/material";
import Animate from "../../General/Animate";

export default function MobileSearchInput() {
  const { isLessThanMD } = useContext(ThemeManager);
  const { show } = useContext(Variable);

  return (
    <>
      {isLessThanMD && show ? (
        <Animate
          content={
            <Box component={"section"} sx={{ mt: 2 }}>
              <SearchInput />
            </Box>
          }
        />
      ) : (
        ""
      )}
    </>
  );
}
