import React from "react";
import SideBar from "../components/products/SideBar";
import ProductList from "../components/products/ProductList";
import { Container, Grid } from "@mui/material";

const ProductPage = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Grid container spacing={3} sx={{ marginTop: "40px" }}>
        <Grid item xs={12} md={3}>
          <SideBar />
        </Grid>
        <Grid item xs={12} md={9}>
          <ProductList />
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductPage;
