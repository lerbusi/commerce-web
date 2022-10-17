import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { commerce } from "./commerce";

import Nav from "./components/Nav";
import Homepage from "./components/Main/Homepage";
import About from "./components/Main/About";
import Products from "./components/Main/Products/Products";
import Auth from "./components/Auth/Auth";
import Cart from "./components/Cart/Cart";
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
    const res = await commerce.cart.add(productId, quantity);
    setCart(res);
  };

  const onUpdateToCart = async (productId, quantity) => {
    const res = await commerce.cart.update(productId, quantity);
    setCart(res);
  };

  const onRemoveToCart = async (productId) => {
    const res = await commerce.cart.remove(productId);
    setCart(res);
  };

  const onEmptyToCart = async () => {
    const res = await commerce.cart.empty();
    setCart(res);
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
        <Route path="/commerce-web/" element={<Homepage />} />
        <Route path="/commerce-web/about" element={<About />} />
        <Route
          path="/commerce-web/products"
          element={<Products products={products} onAddToCart={onAddToCart} />}
        />
        <Route path="/commerce-web/auth" element={<Auth />} />
        <Route
          path="/commerce-web/cart"
          element={
            <Cart
              totalItems={cart.total_items}
              cart={cart}
              onUpdateToCart={onUpdateToCart}
              onRemoveToCart={onRemoveToCart}
              onEmptyToCart={onEmptyToCart}
            />
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
