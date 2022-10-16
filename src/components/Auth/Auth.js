import React from "react";

import { CardMedia, Container, Typography } from "@mui/material";
import authimg from "../../imgs/authimg.webp";

const Auth = () => {
  return (
    <div>
      <CardMedia
        style={{
          height: 300,
        }}
        component="img"
        image={authimg}
        alt="authimg"
      ></CardMedia>

      <Container>
        <Typography style={{ marginTop: "2.5%" }} variant="h6" gutterBottom>
          <h1>會員專區</h1>
        </Typography>
        <Typography variant="h6">
          These guides serve as a good place to start. All succulents are
          different, so you'll want to think of these parameters more as
          guidelines than law. Some fine tuning may be required to identify the
          ideal care requirements for your specific environment. Remember to
          have fun
        </Typography>
      </Container>
    </div>
  );
};

export default Auth;
