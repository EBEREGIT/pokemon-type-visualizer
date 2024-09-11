"use client";

import { Box } from "@mui/material";
import ModeToggle from "../General/ModeToggle";
import Logo from "./Logo";
import SearchComponent from "./search";
import Layout from "../General/Layout";

export default function Nav() {
  return (
    <Layout
      content={
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

          <SearchComponent />

          <ModeToggle />
        </Box>
      }
    />
  );
}
