import { Typography, Box, Grid, Button } from "@mui/material";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <>
      <Box
        component="div"
        style={{ padding: "15px", marginBottom: "30px" }}
        sx={{
          backgroundColor: "purple",
        }}
      >
        <Grid container>
          <Grid item lg={10}>
            <NavLink
              to="/"
              style={{
                textDecoration: "none",
              }}
            >
              <Typography
                component="h2"
                sx={{
                  fontSize: "25px",
                  color: "#fff",
                  textTransform: "uppercase",
                  fontWeight: "700",
                }}
              >
                Home
              </Typography>
            </NavLink>
          </Grid>
          <Grid item lg={2}>
            <NavLink to="login">
              <Button
                color="secondary"
                sx={{ color: "#fff", textTransform: "none", fontWeight: "700" }}
              >
                Login
              </Button>
            </NavLink>
            <NavLink to="register">
              <Button
                color="secondary"
                sx={{ color: "#fff", textTransform: "none", fontWeight: "700" }}
              >
                Registration
              </Button>
            </NavLink>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Navbar;
