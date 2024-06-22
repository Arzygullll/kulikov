import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import CategorySelect from "../components/products/CategorySelect";

const AddProduct = () => {
  const [activeInputIndex, setActiveInputIndex] = useState(0);
  const [product, setProduct] = useState({
    title: "",
    description: "",
    price: "",
    image: "",
    category: "",
  });

  const inputs = [
    { label: "Title", name: "title", component: TextField },
    { label: "Description", name: "description", component: TextField },
    { label: "Price", name: "price", component: TextField },
    { label: "Image", name: "image", component: TextField },
    { label: "Category", name: "category", component: CategorySelect }, // Подставьте свой компонент CategorySelect
  ];

  const handleInput = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));

    // Активируем следующий инпут
    if (activeInputIndex < inputs.length - 1) {
      setActiveInputIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handleClick = () => {
    // Обработка сохранения продукта
    console.log("Product:", product);
  };

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "600px",
        margin: "20px auto",
        padding: "20px",
        backgroundColor: "#ffffff",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        borderRadius: "8px",
        textAlign: "center",
      }}
    >
      <Typography variant="h4" gutterBottom>
        Admin Page
      </Typography>
      <Button
        variant="outlined"
        color="primary"
        onClick={() => console.log("Add Category clicked")}
        sx={{ marginBottom: "16px" }}
      >
        Add Category
      </Button>
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
