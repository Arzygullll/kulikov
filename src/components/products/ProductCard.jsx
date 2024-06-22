import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  IconButton,
  Rating,
  Stack,
  Typography,
  Box,
} from "@mui/material";
import React, { useState } from "react";
import { useProduct } from "../../context/ProductContextProvider";
import { useNavigate } from "react-router-dom";
import Detail from "./Detail";
import { AddShoppingCart } from "@mui/icons-material";
import { useCart } from "../../context/CartContextProvider";

const ProductCard = ({ elem }) => {
  const { deleteProduct } = useProduct();
  const navigate = useNavigate();
  const { addProductToCart, checkProductInCart, deleteProductFromCart } =
    useCart();
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const isProductInCart = checkProductInCart(elem.id);

  return (
    <Card
      sx={{
        maxWidth: 345,
        margin: "20px auto",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        borderRadius: "10px",
        transition: "transform 0.3s ease-in-out",
        "&:hover": {
          transform: "scale(1.05)",
        },
      }}
    >
      <CardActionArea onClick={handleOpen}>
        <CardMedia
          component="img"
          height="240"
          image={elem.image}
          alt={elem.title}
        />
      </CardActionArea>
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {elem.title}
        </Typography>
        <Stack spacing={1} direction="row" alignItems="center">
          <Rating name="half-rating" defaultValue={0} precision={1} />
          <Typography variant="body2" color="textSecondary">
            {elem.price}сом
          </Typography>
        </Stack>
        <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
          {elem.description}
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => {
              deleteProduct(elem.id);
              deleteProductFromCart(elem.id);
            }}
          >
            Delete
          </Button>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => navigate(`/edit/${elem.id}`)}
          >
            Edit
          </Button>
          <IconButton
            sx={{
              color: isProductInCart ? "green" : "default",
            }}
            onClick={() => addProductToCart(elem)}
          >
            <AddShoppingCart />
          </IconButton>
        </Box>
      </CardContent>
      <Detail elem={elem} open={open} handleClose={handleClose} />
    </Card>
  );
};

export default ProductCard;
