import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  IconButton,
  Typography,
  CardMedia,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const Product = ({ product }) => {
  return (
    <Card style={{ maxWidth: "100%" }}>
      <CardMedia
        component="img"
        height="350"
        image={product.image}
        title={product.name}
      />
      <CardContent>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h5">{product.name}</Typography>
          <Typography variant="h5" gutterBottom>
            {product.price}
          </Typography>
        </div>
        <Typography variant="body2" color="textSecondary">
          {product.description}
        </Typography>
      </CardContent>
      <CardActions
        disableSpacing
        style={{ display: "flex", justifyContent: "flex-end" }}
      >
        <IconButton aria-label="Add to Cart">
          <AddShoppingCartIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Product;
