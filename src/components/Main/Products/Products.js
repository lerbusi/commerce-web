import React from "react";
import Grid from "@mui/material/Grid";
import Product from "./Product/Product";

import { CardMedia } from "@mui/material";
import abtimg from "../../../imgs/productimg.webp";

// ---內建商品資料(for test)
// import image1 from "../../../imgs/items/item01a.webp";
// import image2 from "../../../imgs/items/item02a.webp";
// import image3 from "../../../imgs/items/item03a.webp";
// import image4 from "../../../imgs/items/item04a.webp";

// const products = [
//   {
//     id: 1,
//     name: "ECHEVERIA",
//     description: "Filtered to bright light with ample airflow",
//     price: "$75",
//     image: image1,
//   },
//   {
//     id: 2,
//     name: "STARS PACK",
//     description: "Porous soil with adequate drainage",
//     price: "$80",
//     image: image2,
//   },
//   {
//     id: 3,
//     name: "PASTEL PARTY",
//     description: "Water thoroughly when soil is dry to the touch",
//     price: "$45",
//     image: image3,
//   },
//   {
//     id: 4,
//     name: "SPIKEY",
//     description: "Protect from frost",
//     price: "$58",
//     image: image4,
//   },
//
// ];
// ----

const Products = ({ products, onAddToCart }) => {
  return (
    <main>
      <CardMedia
        style={{
          height: 300,
        }}
        component="img"
        image={abtimg}
        alt="abtimg"
      ></CardMedia>

      <h1 style={{ marginTop: "1%" }}>產品列表</h1>
      <Grid container justify="center" spacing={4} style={{ padding: "1rem" }}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} onAddToCart={onAddToCart} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
