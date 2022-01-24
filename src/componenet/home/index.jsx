import React from "react";
import Navbar from "../navbar/Navbar";
import Carousel from "../home/Carousel";
import FeaturesArea from "../home/FeaturesArea";
import Categories from "../home/Categories";
import ProductShowCase from "../home/ProductShowCase";
import NewArrivals from "../home/NewArrivals";
import BlogArea from "../home/BlogArea";
import Gallery from "../home/Gallery";
import Footer from "../footer/Footer"
import { ClipLoader } from "react-spinners";

export default function index() {
  return (
    <div>
    
      <Carousel />
      <FeaturesArea />
      {/* <Categories /> */}
      <ProductShowCase />
      {/* <NewArrivals /> */}
      <BlogArea />
      <Gallery />
     
    </div>
  );
}
