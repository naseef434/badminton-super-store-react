import React from "react";


// import Products from '../src/componenet/product/ProductList'
import {BrowserRouter as Router, Routes, Route, Navigate, Link, Outlet} from 'react-router-dom'

import Test from "./Test";
import Products from "./pages/Products";
import ProductSinleView from "./pages/ProductSingleView";
import ProductPopUp from "./componenet/product/ProductPopUp";
import Home from "./pages/Home";
import CartPage from "./pages/CartPage";
import CheckOutPage from "./pages/CheckOutPage";
import CarttSideBar from "./componenet/Cart/CarttSideBar";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home /> } />
        <Route path="/test" element={<Test />} />
        <Route path="/products" element={<Products />}  />
        <Route path="/productsview/:product_id"  element={<ProductSinleView /> } />
        <Route path="/cart" element={<CartPage /> } />
        <Route path="/checkout" element={<CheckOutPage />} />
        <Route path="/cart_sidebar" element={<CarttSideBar />} />

        
          

        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
  