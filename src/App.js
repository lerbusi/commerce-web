import React from "react";
import { Routes, Route } from "react-router-dom";

import Nav from "./components/Nav";

import Homepage from "./components/Main/Homepage";
import About from "./components/Main/About";
import Products from "./components/Main/Products/Products";
import Auth from "./components/Main/Auth";
import Cart from "./components/Main/Cart";

import Footer from "./components/Footer";

import "./style/style.css";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
