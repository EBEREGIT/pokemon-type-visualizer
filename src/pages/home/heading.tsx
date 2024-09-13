import { Box, Typography } from "@mui/material";

type HeadingProps = {
  label: string;
  typographyStyles?: object;
  styles?: object;
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "body1" | "body2";
};

export default function Heading({
  label,
  typographyStyles,
  styles,
  variant,
}: HeadingProps) {
  
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
