import React, { useState } from "react";
import Carousel from "./Carousel";
import FeaturesArea from "./FeaturesArea";
import ProductShowCase from "./ProductShowCase";
import BlogArea from "./BlogArea";
import { useEffect } from "react/cjs/react.development";
import * as serviceEndPoint from "../../services/serviceEndPoint";
import { urlGateWay } from "../../services/service";
import LogoSlider from "./LogoSlider";

export default function Index() {
  //loading spots Name nd passing Feautures component
  const [sports, setSports] = useState([]);
  const [shoCase, setShowCase] = useState([]);
  useEffect(async () => {
    try {
      const response = await urlGateWay.get(
        `${serviceEndPoint.homePageEndpoints.getShoweCase}`
      );

      setShowCase(response?.data?.showcase);
    } catch (error) {
      console.log("showcase api rice an error ", error);
    }
  }, []);

  console.log({ showcasedata: shoCase });
  useEffect(async () => {
    try {
      const response = await urlGateWay.get(
        `${serviceEndPoint.sportsEndpoints.getSports}`
      );

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
      <ProductShowCase showCase={shoCase} />
      {/* <NewArrivals /> */}
      <BlogArea />
      <LogoSlider />
      {/* <Gallery /> */}
    </div>
  );
}
