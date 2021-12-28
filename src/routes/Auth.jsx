import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Products from "../componenet/product"
import CartPage from '../pages/CartPage'
import Home from "../pages/Home"
import ProductSinleView from "../pages/ProductSingleView"
import PrivateRoutes from "../routes/PrivateRoutes"
export default function Auth() {
   
    return (
        
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product_view/:product_id" element={<ProductSinleView />} />
            
            <Route element={<PrivateRoutes />} >
                <Route path="/cart" element={<CartPage />} />
            </Route>

        </Routes>
    )
}
