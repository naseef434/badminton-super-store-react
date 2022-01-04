
import { Route, Routes } from "react-router-dom";
import CheckOut from "../componenet/CheckOut/CheckOut";
import Products from "../componenet/product";

import Cart from "../componenet/Cart"
import Home from "../pages/Home";
import ProductSinleView from "../pages/ProductSingleView";
import PrivateRoutes from "../routes/PrivateRoutes";


export default function Auth() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/product_view/:product_id" element={<ProductSinleView />} />

      <Route element={<PrivateRoutes />}>
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<CheckOut />} />
      </Route>
      <Route path="*" element={<Home />} />
    </Routes>
  );
}
