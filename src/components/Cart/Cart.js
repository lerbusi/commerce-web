import React from "react";
import { Link } from "react-router-dom";
import { Container, Typography, Button, Grid, CardMedia } from "@mui/material";
import CardItem from "./CardItem";
import itemimg from "../../imgs/itemimg.webp";

const Cart = ({ cart, onUpdateToCart, onRemoveToCart, onEmptyToCart }) => {
  // const isEmpty = true;
  const buttonStyle = {
    minWidth: "150px",
    marginBottom: "5px",
    marginRight: "20px",
  };

  const EmptyCart = () => (
    <Typography variant="subtitle1">
      還沒有任何商品在購物車內
      <br />
      <br />
      <Button size="large" type="button" variant="contained" color="primary">
        <Link to="/products" style={{ color: "white", textDecoration: "none" }}>
          開始購物
        </Link>
      </Button>
    </Typography>
  );

  const FilledCart = () => (
    <>
      <Grid container spacing={3}>
        {cart.line_items.map((item) => (
          <Grid item xs={12} sm={4} key={item.id}>
            <CardItem
              item={item}
              onUpdateToCart={onUpdateToCart}
              onRemoveToCart={onRemoveToCart}
            />
          </Grid>
        ))}
      </Grid>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Typography
          style={{
            display: "flex",
            marginTop: "5%",
            marginBottom: "2.5%",
            width: "100%",
          }}
          variant="h4"
        >
          總價：{cart.subtotal.raw} NTD
        </Typography>
        <div>
          <Button
            style={buttonStyle}
            size="large"
            type="button"
            variant="contained"
            color="error"
            onClick={onEmptyToCart}
          >
            清空購物車
          </Button>
        </div>
        <div>
          <Button
            style={buttonStyle}
            size="large"
            type="button"
            variant="contained"
            color="primary"
          >
            結帳
          </Button>
        </div>
      </div>
    </>
  );

  if (!cart.line_items)
    return (
      <div>
        <CardMedia
          style={{
            height: 300,
          }}
          component="img"
          image={itemimg}
          alt="itemimg"
        ></CardMedia>

        <h2 style={{ minWidth: "150px", marginTop: "25px", color: "gray" }}>
          讀取購物車資料中
        </h2>
      </div>
    );

  return (
    <div>
      <CardMedia
        style={{
          height: 300,
        }}
        component="img"
        image={itemimg}
        alt="itemimg"
      ></CardMedia>
      <Container>
        <Typography style={{ marginTop: "2.5%" }} variant="h3" gutterBottom>
          購物車
        </Typography>
        {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
      </Container>
    </div>
  );
};

export default Cart;
