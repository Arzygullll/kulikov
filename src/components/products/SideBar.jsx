import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Paper,
  Radio,
  RadioGroup,
  TextField,
  Typography,
  Box,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useProduct } from "../../context/ProductContextProvider";
import { useSearchParams } from "react-router-dom";

const SideBar = () => {
  const { categories, getCategories, fetchByParams } = useProduct();
  useEffect(() => {
    getCategories();
  }, []);

  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("q") || "");
  useEffect(() => {
    setSearchParams({ q: search });
  }, [search]);

  return (
    <Paper
      sx={{
        p: 3,
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        position: "fixed",
        top: 50,
        left: 0,
        width: "300px",
        height: "calc(100vh - 70px)",
        overflowY: "auto",
        zIndex: 1000,
      }}
    >
      <Box sx={{ mb: 2 }}>
        <TextField
          fullWidth
          label="Поиск..."
          variant="outlined"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          sx={{ mb: 2 }}
        />
      </Box>
      <FormControl component="fieldset">
        <FormLabel component="legend">Категории</FormLabel>
        <RadioGroup
          aria-label="category"
          name="category"
          onChange={(e) => fetchByParams("category", e.target.value)}
        >
          <FormControlLabel
            value="all"
            control={<Radio />}
            label="Весь ассортимент"
          />
          {categories.map((elem) => (
            <FormControlLabel
              key={elem.id}
              value={elem.name}
              control={<Radio />}
              label={elem.name}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </Paper>
  );
};

export default SideBar;
