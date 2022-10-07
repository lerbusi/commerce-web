import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      Lerbusi 2022 | 網站來源參考 leafandclay.co | 僅供網頁開發學習用途
    </Typography>
  );
}

export default function StickyFooter() {
  return (
    <Box>
      <Container component="main" sx={{ mt: 0, mb: 0 }}></Container>
      <CssBaseline />
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: "auto",
          backgroundColor: "rgb(188, 236, 220)",
        }}
      >
        <Container>
          <Copyright />
        </Container>
      </Box>
    </Box>
  );
}
