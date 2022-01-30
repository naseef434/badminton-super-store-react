import React from "react";
import Navbar from "../navbar/Navbar";
import ProductBreadCrumb from "./ProductBreadCrumb";
import ProductImagesView from "./ProductImagesView";
import ProductDetails from "./ProductDetails";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function ProductSinleView(props) {
  const { product_id } = useParams();
  const [singleProduct, setSingleProduct] = useState([0]);

  //calling product api
  useEffect(() => {
    async function fetchMyAPI() {
      let response = await fetch(
        "http://ec2-18-191-207-113.us-east-2.compute.amazonaws.com/api/product/" + product_id
      );
      response = await response.json();
      setSingleProduct(response);
    }
    fetchMyAPI();
  }, []);

  return (
    <>
    
      <div className="single_breadcrumb pt-25">
        <div className="container">
          <ProductBreadCrumb />
          <div className="row">
            <ProductImagesView product={singleProduct} />
            <ProductDetails
              addToCart={props.addToCart}
              productdata={singleProduct}
            />
          </div>
        </div>
      </div>
    </>
  );
}
