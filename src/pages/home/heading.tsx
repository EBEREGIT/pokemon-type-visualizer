import { Box, Typography } from "@mui/material";

export default function Heading(props: {
  label: string;
  typographyStyles?: object;
  styles?: object;
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "body1" | "body2";
}) {
  const { label, typographyStyles, styles, variant } = props;

  return (
    <Box component={"section"} sx={{ ...styles }}>
      <Typography
        variant={variant ? variant : "h6"}
        sx={{ ...typographyStyles }}
      >
        {label}
      </Typography>
    </Box>
  );
}
