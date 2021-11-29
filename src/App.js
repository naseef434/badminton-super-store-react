import React from "react";
import Home from './componenet/home/Home';

// import Products from '../src/componenet/product/ProductList'

import {BrowserRouter as Router, Routes, Route, Navigate, Link, Outlet} from 'react-router-dom'
import Test from "./Test";
import Products from "./pages/Products";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="test" element={<Test />} />
        <Route path="products" element={<Products />} />
      </Routes>
    </Router>
  );
}

export default App;
  