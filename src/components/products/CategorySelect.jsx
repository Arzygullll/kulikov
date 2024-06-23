// CategorySelect.jsx
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useEffect } from "react";
import { useProduct } from "../../context/ProductContextProvider";

const CategorySelect = ({ handleInput }) => {
  const { categories, getCategories } = useProduct();

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="category-select-label">Выберите категорию</InputLabel>
        <Select
          labelId="category-select-label"
          id="category-select"
          label="Category"
          name="category"
          onChange={handleInput}
        >
          {categories.map((elem) => (
            <MenuItem key={elem.id} value={elem.name}>
              {elem.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default CategorySelect;
