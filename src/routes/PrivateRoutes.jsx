import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Footer from "../componenet/footer/Footer";
import Navbar from "../componenet/navbar/Navbar";

function PrivateRoutes() {
  const userToken = localStorage.getItem("token");
 
  return userToken ? (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  ) : (
    <>
      <Navigate to="/products" />
    </>
  );
}

export default PrivateRoutes;
