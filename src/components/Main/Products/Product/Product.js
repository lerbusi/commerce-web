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

const Product = ({ product, onAddToCart }) => {
  return (
    <Card style={{ maxWidth: "100%" }}>
      <CardMedia
        component="img"
        height="280"
        image={product.image.url}
        title={product.name}
      />
      <CardContent>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6">{product.name}</Typography>
          <Typography variant="h6" gutterBottom>
            {product.price.raw}元
          </Typography>
        </div>
        <Typography
          dangerouslySetInnerHTML={{ __html: product.description }}
          variant="body2"
          color="textSecondary"
        />
      </CardContent>
      <CardActions
        disableSpacing
        style={{ display: "flex", justifyContent: "flex-end" }}
      >
        <IconButton
          aria-label="Add to Cart"
          onClick={() => onAddToCart(product.id, 1)}
        >
          <AddShoppingCartIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Product;
