
import { Route, Routes } from "react-router-dom";
import CheckOut from "../componenet/CheckOut/CheckOut";
import Products from "../componenet/product";

import Cart from "../componenet/Cart"
// import Home from "../pages/Home";
import Home from "../componenet/home" 
import About from "../componenet/about"
import Portfolio from "../componenet/portfolio"
import ProductSinleView from "../pages/ProductSingleView";
import PrivateRoutes from "../routes/PrivateRoutes";
import Blog from '../componenet/blog'
import Contact from "../componenet/Contact"
import BlogDetails from "../componenet/blog/BlogDetails";

export default function Auth() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/product_view/:product_id" element={<ProductSinleView />} />
      <Route path="/about" element={<About />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/events" element={<Blog />} />
      <Route path="/blog_details" element={<BlogDetails />} />
      <Route path="/contact" element={<Contact />} />

      <Route element={<PrivateRoutes />}>
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<CheckOut />} />
      </Route>
      <Route path="*" element={<Home />} />
    </Routes>
  );
}
