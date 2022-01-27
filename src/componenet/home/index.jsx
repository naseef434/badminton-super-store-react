import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import Carousel from "./Carousel";
import FeaturesArea from "./FeaturesArea";
import Categories from "./Categories";
import ProductShowCase from "./ProductShowCase";
import NewArrivals from "./NewArrivals";
import BlogArea from "./BlogArea";
import Gallery from "./Gallery";
import Footer from "../footer/Footer";
import { ClipLoader } from "react-spinners";
import { useEffect } from "react/cjs/react.development";
import axios from "axios";
import * as serviceEndPoint from "../../services/serviceEndPoint";
import { urlGateWay } from "../../services/service";
import LogoSlider from "./LogoSlider";
export default function Index() {

//loading spots Name nd passing Feautures component
  const [sports, setSports] = useState([]);
  useEffect(async () => {
    try {
      const response = await urlGateWay.get(
        `${serviceEndPoint.sportsEndpoints.getSports}`
      );
        console.log(response);
      setSports(response?.data);
    } catch (error) {
      console.log("sport api rice an error ", error);
    }
  }, []);

  return (
    <div>
      <Carousel />
      <FeaturesArea sports={sports} />
      {/* <Categories /> */}
      <ProductShowCase />
      {/* <NewArrivals /> */}
      <BlogArea />
      <LogoSlider />
      {/* <Gallery /> */}
    </div>
  );
}
