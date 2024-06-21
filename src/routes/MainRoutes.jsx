import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductPage from "../pages/ProductPage";
import EditProduct from "../components/products/EditProduct";
import AboutPage from "../pages/AboutPage";
import Contacts from "../pages/Contacts";
import AdminPage from "../pages/AdminPage";
import HeaderHomePage from "../components/homePage/HeaderHomePage";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    { id: 1, link: "/", element: <HeaderHomePage /> },
    { id: 2, link: "/products", element: <ProductPage /> },
    { id: 3, link: "/edit/:id", element: <EditProduct /> },
    { id: 4, link: "/about", element: <AboutPage /> },
    { id: 5, link: "/contacts", element: <Contacts /> },
    { id: 6, link: "/admin", element: <AdminPage /> },
    // { id: 7, link: "/cart", element: <CartPage /> },
  ];
  return (
    <Routes>
      {PUBLIC_ROUTES.map((elem) => (
        <Route key={elem.id} path={elem.link} element={elem.element} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
