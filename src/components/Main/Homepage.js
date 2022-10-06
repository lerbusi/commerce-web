import React from "react";
import hpimg from "../../imgs/hpimg.webp";
import itemimg from "../../imgs/itemimg.webp";
import { Link } from "react-router-dom";
import Slider from "./Slider/Slider";

const Homepage = () => {
  return (
    <div>
      <Slider />
      <div className="hpimgs">
        <Link to="/items">
          <div className="hpimg">
            <img src={hpimg} alt="hpimg" />
            <label className="maintext">PLANT MAIL IS HAPPY MAIL</label>
            <label className="shopnow">SHOP NOW</label>
          </div>
        </Link>
      </div>
      <div className="hpimg">
        <img src={itemimg} className="hp_simg" alt="itemimg" />
        <label>商品分類</label>
      </div>

      <div>
        <h1> NEW ARRIVALS</h1>
        <br />
        四種商品圖片(MAP)
        <br />
        <br />
        <h3>VIEW ALL</h3>
      </div>
    </div>
  );
};

export default Homepage;
