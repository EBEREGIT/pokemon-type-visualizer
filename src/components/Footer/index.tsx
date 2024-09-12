import { Box, Typography } from "@mui/material";
import Layout from "../General/Layout";
import RepoRedirect from "./RepoRedirect";

export default function Footer() {
  return (
    <Layout
      styles={{ mt: 5 }}
      content={
        <>
          <Box
            component={"footer"}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="body1"
              fontWeight={400}
              gutterBottom
              sx={{ display: "flex", alignItems: "center", gap: 1 }}
            >
              <Box component={"span"}>&copy;</Box>

              <Box component={"span"}>{new Date().getFullYear()}</Box>

              <RepoRedirect />
            </Typography>
          </Box>
        </>
      }
    />
  );
}
