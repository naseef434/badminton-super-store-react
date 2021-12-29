import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function PrivateRoutes({ isLoggedIn }) {
  const userToken = localStorage.getItem("token");
  return userToken ? <Outlet /> : <Navigate to="/products" />;
}

export default PrivateRoutes;
