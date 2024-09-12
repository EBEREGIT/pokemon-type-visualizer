"use client";

import { Box } from "@mui/material";
import ModeToggle from "../General/ModeToggle";
import Logo from "./Logo";
import SearchComponent from "./search/searchInput";
import Layout from "../General/Layout";
import { useContext } from "react";
import { ThemeManager } from "../../stateManager/Theme";
import SearchButton from "./search/searchButton";
import { Variable } from "../../stateManager/variable";

export default function Nav() {
  const { isLessThanMD } = useContext(ThemeManager);
  const { show } = useContext(Variable);

  return (
    <Layout
      styles={{ position: "sticky", top: 0, zIndex: 1 }}
      content={
        <>
          <Box
            component={"nav"}
            sx={{
              m: "auto",
              position: "sticky",
              top: 0,
              zIndex: 1,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Logo />

            {isLessThanMD ? <SearchButton /> : <SearchComponent />}

            <ModeToggle />
          </Box>

          {isLessThanMD && show ? <SearchComponent /> : ""}
        </>
      }
    />
  );
}
