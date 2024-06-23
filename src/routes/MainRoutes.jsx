// routes/MainRoutes.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductPage from "../pages/ProductPage";
import EditProduct from "../components/products/EditProduct";
import AboutPage from "../pages/AboutPage";
import Contacts from "../pages/Contacts";
import AdminPage from "../pages/AdminPage";
import HeaderHomePage from "../components/homePage/HeaderHomePage";
import CartPage from "../pages/CartPage";
import Signup from "../components/Signup";
import Login from "../components/Login";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    { id: 1, path: "/", element: <HeaderHomePage /> },
    { id: 2, path: "/products", element: <ProductPage /> },
    { id: 3, path: "/edit/:id", element: <EditProduct /> },
    { id: 4, path: "/about", element: <AboutPage /> },
    { id: 5, path: "/contacts", element: <Contacts /> },
    { id: 6, path: "/admin", element: <AdminPage /> },
    { id: 7, path: "/cart", element: <CartPage /> },
    { id: 8, path: "/signup", element: <Signup /> },
    { id: 9, path: "/login", element: <Login /> },
  ];

  return (
    <Routes>
      {PUBLIC_ROUTES.map((route) => (
        <Route key={route.id} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
