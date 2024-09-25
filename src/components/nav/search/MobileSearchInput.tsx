import { useContext } from "react";
import { ThemeManager } from "../../../stateManager/Theme";
import SearchInput from "./searchInput";
import { Box } from "@mui/material";
import Animate from "../../General/Animate";
import { General } from "../../../stateManager/General";

export default function MobileSearchInput() {
  const { isLessThanMD } = useContext(ThemeManager);
  const { show } = useContext(General);

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
