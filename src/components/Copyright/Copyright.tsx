import { Link, Typography } from "@mui/material";

const Copyright = (props: any) => (
  <Typography variant="body2" color="text.secondary" align="center" {...props}>
    {"Copyright © "}
    <Link color="inherit" href="https://github.com/wraithyy">
      Wraithyy
    </Link>{" "}
    {new Date().getFullYear()}
    {"."}
  </Typography>
);
export default Copyright;
