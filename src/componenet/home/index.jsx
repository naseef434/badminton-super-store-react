import React, { useState } from "react";
import Carousel from "./Carousel";
import FeaturesArea from "./FeaturesArea";
import ProductShowCase from "./ProductShowCase";
import BlogArea from "./BlogArea";
import { useEffect } from "react/cjs/react.development";
import * as serviceEndPoint from "../../services/serviceEndPoint";
import { urlGateWay } from "../../services/service";
import LogoSlider from "./LogoSlider";
import OfferModel from "../offer/OfferModel";


export default function Index() {
  //loading spots Name nd passing Feautures component
  const [sports, setSports] = useState([]);
  const [blog, setBlog] = useState([]);

  useEffect(async () => {
    
    try {
      const response = await urlGateWay.get(
        `${serviceEndPoint.blogsEndpoints.blogs}`
      );

      setBlog(response?.data?.results);
    } catch (error) {
      console.log("blog api rice an error ", error);
    }
  }, []);
  const [myCurousal, setmyCarousel] = useState([]);
  const [showCase, setShowCase] = useState([]);
  const [modal, setOpenModal] = useState(false);
  const [modalImage, setmodalImage] = useState([])
  useEffect(async () => {
    try {
      const response = await urlGateWay.get(
        `${serviceEndPoint.homePageEndpoints.getShoweCase}`
      );

      setShowCase(response?.data?.showcase);
      setmyCarousel(response?.data?.curosal);
      setmodalImage(response?.data?.popup)
    } catch (error) {
      console.log("showcase api rice an error ", error);
    }
  }, []);
  console.log(myCurousal);
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

  //home page modal
  const x = () => {
    setOpenModal(true);
  };

  useEffect(async() => {
  
    setTimeout(() => {
      x();
    }, 10000);
  }, []);
  return (
    <div>
      {modal && <OfferModel closeModal={setOpenModal} modalImage={modalImage}/>}
      {/* <CarouselNew /> */}
      <Carousel customCarousels={myCurousal} />
      <FeaturesArea sports={sports} />
      {/* <Categories /> */}
      <ProductShowCase showCase={showCase} />
      {/* <NewArrivals /> */}
      <BlogArea blog={blog} />
      <LogoSlider />
      {/* <Gallery /> */}
    </div>
  );
}
