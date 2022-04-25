import { Typography, TypographyProps } from "@mui/material";

const Title = ({ children }: TypographyProps) => (
  <Typography
    component="h1"
    variant="h3"
    align="center"
    color="text.primary"
    gutterBottom
  >
    {children}
  </Typography>
);
export default Title;
