import React from "react";

import { CardMedia, Container, Typography, Button } from "@mui/material";
import authimg from "../../imgs/authimg.webp";

import { useNavigate } from "react-router-dom";
import { auth, provide } from "../../config/firebase";
import { signInWithPopup, signOut } from "firebase/auth";

const Auth = () => {
  const buttonStyle = {
    minWidth: "150px",
  };

  const NowLogin = () => (
    <Typography style={{ marginTop: "2.5%" }} variant="subtitle1">
      已登入會員
      {console.log(auth)}
      <br /> <img src={auth?.currentUser.photoURL} />
      <Typography variant="subtitle1">
        您好：{auth?.currentUser.displayName} (登入信箱：
        {auth?.currentUser.email})
      </Typography>
      <Typography variant="h6">
        年度會員促銷折價券（請於結帳時輸入）
        <br />
        2022HAPPYLEAF
      </Typography>
      <Typography></Typography>
      <Button
        onClick={logout}
        style={(buttonStyle, { marginTop: "2.5%" })}
        size="large"
        type="button"
        variant="contained"
        color="error"
      >
        會員登出
      </Button>
    </Typography>
  );
  const NowLogout = () => (
    <Typography style={{ marginTop: "2.5%" }} variant="subtitle1">
      <Typography>尚未登入會員，註冊/登入會員可得到最新折價券！</Typography>
      <Button
        onClick={login}
        style={(buttonStyle, { marginTop: "2.5%" })}
        size="large"
        type="button"
        variant="contained"
        color="primary"
      >
        會員登入
      </Button>
    </Typography>
  );

  const navigate = useNavigate();

  const refreshPage = () => {
    navigate(0);
  };

  const login = async () => {
    await signInWithPopup(auth, provide);
    refreshPage();
  };

  const logout = async () => {
    await signOut(auth);
    refreshPage();
  };

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

        {auth?.currentUser ? <NowLogin /> : <NowLogout />}
      </Container>
    </div>
  );
};

export default Auth;
