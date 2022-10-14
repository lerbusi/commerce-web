import React from "react";
import { Container, Typography, CardMedia } from "@mui/material";
import abtimg from "../../imgs/about.webp";

const About = () => {
  return (
    <div>
      <CardMedia
        style={{
          height: 300,
        }}
        component="img"
        image={abtimg}
        alt="abtimg"
      ></CardMedia>

      <Container>
        <Typography style={{ marginTop: "2.5%" }} variant="h6" gutterBottom>
          <h1>THE ULTIMATE SUCCULENT CARE GUIDE</h1>
        </Typography>
        <Typography variant="h6">
          These guides serve as a good place to start. All succulents are
          different, so you'll want to think of these parameters more as
          guidelines than law. Some fine tuning may be required to identify the
          ideal care requirements for your specific environment. Remember to
          have fun!
        </Typography>
        <Typography style={{ marginTop: "2.5%" }} variant="h6">
          Lerbusi 2022｜網頁排版設計參考 leafandclay｜僅供網頁開發練習用途
          ｜無商業利用
        </Typography>
      </Container>
    </div>
  );
};

export default About;
