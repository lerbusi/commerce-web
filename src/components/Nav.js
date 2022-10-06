import React from "react";
import { Link } from "react-router-dom";
import logo from ".././imgs/logo.webp";

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/about">
            <span class="material-icons">auto_awesome</span>關於我們
          </Link>
        </li>
        <li>
          <Link to="/items">
            <span class="material-icons">redeem</span>商品一覽
          </Link>
        </li>
        <li>
          <Link to="/">
            <img src={logo} alt="logo" className="logo" />
          </Link>
        </li>
        <li>
          <Link to="/auth">
            <span class="material-icons">person</span>
            會員專區
          </Link>
        </li>
        <li>
          <Link to="/cart">
            <span class="material-icons">shopping_cart</span>購物車
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
