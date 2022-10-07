import React from "react";
import Grid from "@mui/material/Grid";
import Product from "./Product/Product";
import image1 from "../../../imgs/items/item01a.webp";
import image2 from "../../../imgs/items/item02a.webp";
import image3 from "../../../imgs/items/item03a.webp";
import image4 from "../../../imgs/items/item04a.webp";
import image5 from "../../../imgs/items/item01b.webp";
import image6 from "../../../imgs/items/item02b.webp";
import image7 from "../../../imgs/items/item03b.webp";
import image8 from "../../../imgs/items/item04b.webp";

const products = [
  {
    id: 1,
    name: "ECHEVERIA",
    description: "Filtered to bright light with ample airflow",
    price: "$75",
    image: image1,
  },
  {
    id: 2,
    name: "STARS PACK",
    description: "Porous soil with adequate drainage",
    price: "$80",
    image: image2,
  },
  {
    id: 3,
    name: "PASTEL PARTY",
    description: "Water thoroughly when soil is dry to the touch",
    price: "$45",
    image: image3,
  },
  {
    id: 4,
    name: "SPIKEY",
    description: "Protect from frost",
    price: "$58",
    image: image4,
  },
  {
    id: 5,
    name: "PASTEL",
    description: "lorem",
    price: "$58",
    image: image5,
  },
  {
    id: 6,
    name: "PARTY",
    description: "Protect from frost",
    price: "$25",
    image: image6,
  },
  {
    id: 7,
    name: "STAR",
    description: "lorem Protect from frost",
    price: "$38",
    image: image7,
  },
  {
    id: 8,
    name: "ECHEVERIA",
    description: "Protect lorem from frost",
    price: "$50",
    image: image8,
  },
];

const Products = () => {
  return (
    <main>
      <h2> 產品列表</h2>
      <Grid container justify="center" spacing={4} style={{ padding: "1rem" }}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
