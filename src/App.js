import React from "react";


// import Products from '../src/componenet/product/ProductList'
import { BrowserRouter as Router, Routes, Route, Navigate, Link, Outlet } from 'react-router-dom'

import Test from "./Test";
import Products from "./componenet/product";
import ProductSinleView from "./pages/ProductSingleView";
import ProductPopUp from "./componenet/product/ProductPopUp";
import Home from "./pages/Home";
import CartPage from "./pages/CartPage";
import CheckOutPage from "./pages/CheckOutPage";
import CartSideBar from "./componenet/Cart/CartSideBar";
import Page404 from "./componenet/404/Page404";
import Navbar from "./componenet/navbar/Navbar";
import Signup from "./componenet/Customer/Signup";

function App() {
  return (
    <Router>
      <Routes>
       
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product_view/:product_id" element={<ProductSinleView />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckOutPage />} />
        
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <Page404 />
            </main>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
