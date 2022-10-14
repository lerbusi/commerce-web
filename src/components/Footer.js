import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";

// const Footer = () => {
//   return (
//     <div className="footer">
//       Lerbusi 2022 | 網站來源參考 leafandclay.co | 僅供網頁開發學習用途
//     </div>
//   );
// };

const Footer = () => {
  return (
    <Box>
      <Container sx={{ height: "20vh" }}></Container>
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
          <Typography variant="body2" color="text.secondary">
            Lerbusi 2022 | 網站來源參考 leafandclay | 僅供網頁開發學習用途
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
