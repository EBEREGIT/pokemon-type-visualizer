import { Box } from "@mui/material";
import ModeToggle from "../General/ModeToggle";
import Logo from "./Logo";
import Layout from "../General/Layout";
import { useContext } from "react";
import { ThemeManager } from "../../stateManager/Theme";
import SearchButton from "./search/searchButton";
import SearchInput from "./search/searchInput";
import MobileSearchInput from "./search/MobileSearchInput";

export default function Nav() {
  const { isLessThanMD } = useContext(ThemeManager);

  return (
    <Layout
      styles={{ position: "sticky", top: 0, zIndex: 1 }}
      content={
        <>
          <Box
            component={"nav"}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Logo />

            {isLessThanMD ? <SearchButton /> : <SearchInput />}

            <ModeToggle />
          </Box>

          {/* search on mobile devices */}
          <MobileSearchInput />
        </>
      }
    />
  );
}
