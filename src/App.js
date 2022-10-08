import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { commerce } from "./commerce";

import Nav from "./components/Nav";
import Homepage from "./components/Main/Homepage";
import About from "./components/Main/About";
import Products from "./components/Main/Products/Products";
import Auth from "./components/Main/Auth";
import Cart from "./components/Main/Cart";
import Footer from "./components/Footer";

import "./style/style.css";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const onAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);
    setCart(item);
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  console.log(cart);

  return (
    <div>
      <Nav totalItems={cart.total_items} />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/products"
          element={<Products products={products} onAddToCart={onAddToCart} />}
        />
        <Route path="/auth" element={<Auth />} />
        <Route path="/cart" element={<Cart totalItems={cart.total_items} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
