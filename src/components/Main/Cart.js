import React from "react";
import { Container, Typography, Button, Grid } from "@mui/material";

const Cart = () => {
  const isEmpty = true;

  const EmptyCart = () => {
    <Typography variant="subtitle1">
      你沒有任何商品在購物車內，開始購物！
    </Typography>;
  };

  const FilledCart = () => {
    <Typography variant="subtitle1">
      你有任何商品在購物車內，開始結帳！
    </Typography>;
  };

  return (
    <div>
      <Container>
        <Typography variant="h3">購物車</Typography>
        {isEmpty ? <EmptyCart /> : <FilledCart />}
      </Container>
    </div>
  );
};

export default Cart;
