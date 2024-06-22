import React from "react";
import SideBar from "../components/products/SideBar";
import ProductList from "../components/products/ProductList";

const ProductPage = () => {
  return (
    <div
      style={{
        marginTop: "20px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div style={{ width: "300px", flex: "none" }}>
        <SideBar />
      </div>
      <ProductList />
    </div>
  );
};

export default ProductPage;
