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

  return (
    <Card
      sx={{
        height: 650,
        boxShadow: "none",
        margin: "2%",
        width: {
          md: "30vw",
          lg: "19vw",
        },
      }}
    >
      <CardActionArea onClick={handleOpen}>
        <CardMedia
          sx={{ height: 240, borderRadius: 4 }}
          image={elem.image}
        ></CardMedia>
      </CardActionArea>
      <CardContent
        sx={{
          padding: "20px 5px 0 px 5px",
          display: "flex",
          height: 300,
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h5" fontSize="16" fontWeight={700} component="div">
          {elem.title}
        </Typography>
        <Stack>
          <Rating name="half-rating" defaultValue={0} precision={1} />
        </Stack>
        <Typography color="black" fontSize="22px" fontWeight={800}>
          ${elem.price}
        </Typography>
        <Typography color="gray" fontSize="12px" fontWeight={800}>
          {elem.description}
        </Typography>
        <Button
          onClick={() => {
            deleteProduct(elem.id);
            deleteProductFromCart(elem.id);
          }}
          color="secondary"
          variant="outlined"
          size="medium"
        >
          Delete
        </Button>
        <Button
          color="primary"
          variant="outlined"
          size="medium"
          onClick={() => navigate(`/edit/${elem.id}`)}
        >
          Edit
        </Button>
        <IconButton
          sx={{
            backgroundColor: checkProductInCart(elem.id) ? "black" : "",
            color: checkProductInCart(elem.id) ? "white" : "",
          }}
          onClick={() => addProductToCart(elem)}
        >
          <AddShoppingCart />
        </IconButton>
      </CardContent>
      <Detail elem={elem} open={open} handleClose={handleClose} />
    </Card>
  );
};

export default ProductCard;
