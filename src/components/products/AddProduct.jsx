// AddProduct.jsx
import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useProduct } from "../../context/ProductContextProvider";
import CategorySelect from "./CategorySelect";

const AddProduct = () => {
  const { createProduct } = useProduct();

  const [activeInputIndex, setActiveInputIndex] = useState(0);
  const [product, setProduct] = useState({
    title: "",
    description: "",
    price: 0,
    image: "",
    category: "",
  });

  const inputs = [
    { label: "Title", name: "title", component: TextField },
    { label: "Description", name: "description", component: TextField },
    { label: "Price", name: "price", component: TextField },
    { label: "Image", name: "image", component: TextField },
    { label: "Category", name: "category", component: CategorySelect },
  ];

  const handleInput = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: name === "price" ? Number(value) : value,
    }));

    // Активируем следующий инпут только если текущий инпут не пустой
    if (value && activeInputIndex < inputs.length - 1) {
      setActiveInputIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handleClick = () => {
    createProduct(product);
  };

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "600px",
        margin: "20px auto",
        padding: "20px",
        backgroundColor: "#ffffff",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
        borderRadius: "8px",
        textAlign: "center",
      }}
    >
      <Typography variant="h5" gutterBottom sx={{ color: "#1976d2" }}>
        Add Product
      </Typography>
      {inputs.map(
        (input, index) =>
          index <= activeInputIndex && (
            <Box key={input.name} sx={{ marginBottom: "16px" }}>
              <input.component
                name={input.name}
                label={input.label}
                value={product[input.name]}
                onChange={handleInput}
                fullWidth
                variant="outlined"
                sx={{ backgroundColor: "#f9f9f9" }}
              />
            </Box>
          )
      )}
      {activeInputIndex === inputs.length - 1 && (
        <Button
          onClick={handleClick}
          fullWidth
          variant="contained"
          color="primary"
          sx={{ marginTop: "16px" }}
        >
          Add Product
        </Button>
      )}
    </Box>
  );
};

export default AddProduct;
