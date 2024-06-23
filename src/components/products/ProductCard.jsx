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
import { AddShoppingCart, Comment as CommentIcon } from "@mui/icons-material";
import { useCart } from "../../context/CartContextProvider";
import CommentModal from "./CommentModal";

const ProductCard = ({ elem }) => {
  const { deleteProduct } = useProduct();
  const navigate = useNavigate();
  const { addProductToCart, checkProductInCart, deleteProductFromCart } =
    useCart();
  const [openDetail, setOpenDetail] = useState(false);
  const [openComment, setOpenComment] = useState(false);

  const handleOpenDetail = () => {
    setOpenDetail(true);
  };

  const handleCloseDetail = () => {
    setOpenDetail(false);
  };

  const handleOpenComment = () => {
    setOpenComment(true);
  };

  const handleCloseComment = () => {
    setOpenComment(false);
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
      <CardActionArea onClick={handleOpenDetail}>
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
            Удалить
          </Button>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => navigate(`/edit/${elem.id}`)}
          >
            Редактировать
          </Button>
          <IconButton
            sx={{
              color: isProductInCart ? "green" : "default",
            }}
            onClick={() => addProductToCart(elem)}
          >
            <AddShoppingCart />
          </IconButton>
          <IconButton sx={{ color: "gray" }} onClick={handleOpenComment}>
            <CommentIcon />
          </IconButton>
        </Box>
      </CardContent>
      <Detail elem={elem} open={openDetail} handleClose={handleCloseDetail} />
      <CommentModal
        open={openComment}
        handleClose={handleCloseComment}
        productId={elem.id}
      />
    </Card>
  );
};

export default ProductCard;
