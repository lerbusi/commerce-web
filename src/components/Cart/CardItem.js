import React from "react";
import {
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from "@mui/material";

const CardItem = ({ item, onUpdateToCart, onRemoveToCart }) => {
  const quantityButton = { display: "flex", alignItems: "center" };

  return (
    <Card>
      <CardMedia
        style={{ height: 200 }}
        component="img"
        image={item.image.url}
        alt={item.name}
      />
      <CardContent style={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h5">{item.name}</Typography>
        <Typography variant="h6">{item.line_total.raw} NTD</Typography>
      </CardContent>
      <CardActions style={{ justifyContent: "space-between" }}>
        <div style={quantityButton}>
          <Button
            style={{ fontSize: "1.25rem" }}
            type="button"
            size="small"
            onClick={() => onUpdateToCart(item.id, item.quantity + 1)}
          >
            +
          </Button>
          <Typography>{item.quantity}</Typography>
          <Button
            style={{ fontSize: "1.25rem" }}
            type="button"
            size="small"
            onClick={() => onUpdateToCart(item.id, item.quantity - 1)}
          >
            -
          </Button>
        </div>
        <Button
          variant="contained"
          type="button"
          color="error"
          onClick={() => onRemoveToCart(item.id)}
        >
          移除
        </Button>
      </CardActions>
    </Card>
  );
};

export default CardItem;
