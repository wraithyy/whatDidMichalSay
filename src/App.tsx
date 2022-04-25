import {
  AppBar,
  Box,
  Button,
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
  Toolbar,
  Typography,
  Link as MuiLink,
} from "@mui/material";
import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { Home, New, List } from "@pages";
import { GitHub } from "@mui/icons-material";
import { Copyright } from "@components";

function App() {
  const theme = createTheme();
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <CssBaseline />
        <AppBar
          position="static"
          color="default"
          elevation={0}
          sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
        >
          <Toolbar sx={{ flexWrap: "wrap" }}>
            <Typography
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              WhatDidMichalSay
            </Typography>
            <nav>
              <MuiLink
                component={Link}
                variant="button"
                color="text.primary"
                to="/"
                sx={{ my: 1, mx: 1.5 }}
              >
                Náhodné moudro
              </MuiLink>
              <MuiLink
                component={Link}
                variant="button"
                color="text.primary"
                to="/list"
                sx={{ my: 1, mx: 1.5 }}
              >
                Seznam
              </MuiLink>
            </nav>
            <Button
              component={Link}
              to="/new"
              variant="outlined"
              sx={{ my: 1, mx: 1.5 }}
            >
              Přidat Moudro
            </Button>
          </Toolbar>
        </AppBar>

        <main>
          <Box
            sx={{
              bgcolor: "background.paper",
              pt: 8,
              pb: 6,
            }}
          >
            <Container maxWidth="sm">
              <Routes>
                <Route index element={<Home />} />
                <Route path="/new" element={<New />} />
                <Route path="/list" element={<List />} />
              </Routes>
            </Container>
          </Box>
        </main>
        <Box
          component="footer"
          sx={{
            py: 3,
            px: 2,
            mt: "auto",
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[200]
                : theme.palette.grey[800],
          }}
        >
          <Container maxWidth="sm">
            <Typography variant="h3" component="p" sx={{ textAlign: "center" }}>
              Software Gore by Michal
            </Typography>
            <Typography
              variant="body2"
              color="text.primary"
              align="center"
              gutterBottom
            >
              <MuiLink
                href="https://github.com/wraithyy/whatDidMichalSay"
                underline="none"
                color="primary"
                align="center"
              >
                <GitHub /> Source
              </MuiLink>
            </Typography>
            <Copyright />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
