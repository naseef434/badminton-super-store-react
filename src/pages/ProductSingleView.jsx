import React from "react";
import Navbar from "../componenet/navbar/Navbar";
import ProductBreadCrumb from "../componenet/product/ProductBreadCrumb";
import ProductImagesView from "../componenet/product/ProductImagesView";
import ProductDetails from "../componenet/product/ProductDetails";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function ProductSinleView() {
  const { product_id } = useParams(0);
  const [singleProduct, setSingleProduct] = useState([]);

  //calling product api
  useEffect(() => {
    async function fetchMyAPI() {
      let response = await fetch(
        "http://localhost:8000/api/product/" + product_id
      );
      response = await response.json();
      setSingleProduct(response);
    }
    fetchMyAPI();
  }, []);
  
  

  return (
    <>
      <Navbar />
      <div className="single_breadcrumb pt-25">
        <div className="container">
          <ProductBreadCrumb />
          <div className="row">
            <ProductImagesView product={singleProduct} />
            <ProductDetails productdata={singleProduct} />
          </div>
        </div>
      </div>
    </>
  );
}
