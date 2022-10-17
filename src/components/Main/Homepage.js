import React from "react";
import hpimg from "../../imgs/hpimg.webp";
// import itemimg from "../../imgs/itemimg.webp";
import { Link } from "react-router-dom";
import Slider from "./Slider/Slider";
import ButtonBases from "../../ButtonBase";
import { Typography, Container } from "@mui/material";

const Homepage = () => {
  return (
    <div>
      <Slider />
      {/* <div className="hpimg">
        <img src={itemimg} className="hp_simg" alt="itemimg" />
        <label>商品分類</label>
      </div> */}
      <Typography style={{ marginTop: "3.5rem" }} variant="h6" gutterBottom>
        <h1>Products</h1>
      </Typography>

      <div style={{ marginBottom: "3.5rem" }}>
        <Link to="/commerce-web/products">
          <ButtonBases />
        </Link>
      </div>

      <Typography style={{ marginTop: "0.5rem" }} variant="h6" gutterBottom>
        <h1>Gifts</h1>
      </Typography>

      <div className="hpimgs" style={{ marginBottom: "3.5rem" }}>
        <Link to="/commerce-web/products">
          <div
            className="hpimg"
            style={{ display: "flex", alignItems: "center" }}
          >
            <img src={hpimg} alt="hpimg" style={{ width: "45rem" }} />
            <label className="maintext">PLANT MAIL IS HAPPY MAIL</label>
            <label className="shopnow">+客製化多肉禮贈品服務即將登場+</label>
          </div>
        </Link>
      </div>
      <Container>
        <Typography style={{ marginTop: "2.5%" }} variant="h6" gutterBottom>
          At Leaf & Clay, we ship hand-selected succulents and houseplants right
          to your door from our greenhouses! See why our customers love shopping
          with us!
        </Typography>
        <Typography style={{ marginTop: "2.5%" }} variant="h6" gutterBottom>
          在 Leaf &
          Clay，我們將手工挑選的多肉植物和室內植物從溫室運送到您家門口！看看為什麼我們的客戶喜歡和我們一起購物！
        </Typography>
      </Container>
    </div>
  );
};

export default Homepage;
