import React, { useEffect, useState } from "react";
import { useProduct } from "../../context/ProductContextProvider";
import { Box } from "@mui/material";
import ProductCard from "./ProductCard";
import PaginationControlled from "./Pagination";
import { useSearchParams } from "react-router-dom";

const ProductList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { getProducts, products } = useProduct();
  const [page, setPage] = useState(1);

  useEffect(() => {
    getProducts();
  }, [searchParams]);

  useEffect(() => {
    getProducts();
  }, []);

  const itemsPerPage = 6;
  const countPage = Math.ceil(products.length / itemsPerPage);

  const currentData = () => {
    const beginIndex = (page - 1) * itemsPerPage;
    const endIndex = beginIndex + itemsPerPage;
    return products.slice(beginIndex, endIndex);
  };

  const handleChange = (e, value) => {
    setPage(value);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        justifyContent: "center",
      }}
    >
      {currentData().map((elem) => (
        <ProductCard key={elem.id} elem={elem} />
      ))}
      <PaginationControlled
        page={page}
        countPage={countPage}
        handleChange={handleChange}
      />
    </Box>
  );
};

export default ProductList;
