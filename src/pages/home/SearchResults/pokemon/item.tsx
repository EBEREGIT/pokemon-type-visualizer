import { Box, Typography } from "@mui/material";
import { ReactNode, useContext } from "react";
import { ThemeManager } from "../../../../stateManager/Theme";
import Heading from "./heading";

export default function Item({
  title,
  content,
}: {
  title: string;
  content: ReactNode;
}) {
  const { theme, mode } = useContext(ThemeManager);

  return (
    <Box component={"aside"} sx={{ px: 1, py: 2 }}>
      {/* title */}
      <Heading title={title} />

      {/* content */}
      <Box
        component={"section"}
        sx={{
          border: `1px solid ${
            mode ? theme.palette.primary.dark : theme.palette.secondary.main
          }`,
          borderRadius: 2,
          p: 2,
        }}
      >
        <Typography variant="body2" gutterBottom fontWeight={400} fontSize={16}>
          {content}
        </Typography>
      </Box>
    </Box>
  );
}
