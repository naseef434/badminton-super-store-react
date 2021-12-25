import React from "react";
import Navbar from "../componenet/navbar/Navbar";
import Carousel from "../componenet/home/Carousel";
import FeaturesArea from "../componenet/home/FeaturesArea";
import Categories from "../componenet/home/Categories";
import ProductShowCase from "../componenet/home/ProductShowCase";
import NewArrivals from "../componenet/home/NewArrivals";
import BlogArea from "../componenet/home/BlogArea";
import Gallery from "../componenet/home/Gallery";
import Footer from "../componenet/footer/Footer";
export default function Home() {
  return (
    <>
      <Navbar />
      <Carousel />
      <FeaturesArea />
      <Categories />
      <ProductShowCase />
      <NewArrivals />
      <BlogArea />
      <Gallery />
      <Footer />
    </>
  )
}