import React from "react";
import Navbar from "../componenet/navbar/Navbar";
import ProductBreadCrumb from "../componenet/product/ProductBreadCrumb";
import ProductImagesView from "../componenet/product/ProductImagesView";
import ProductDetails from "../componenet/product/ProductDetails";
import { useParams } from "react-router-dom";
import {useState,useEffect} from "react";

export default function ProductSinleView(){
const {product_id} = useParams(0) 
const  [product, setProduct] = useState([])

//calling product api 
 useEffect(() => {
  async function fetchMyAPI() {
  let response = await fetch('http://localhost:8000/api/product/'+product_id)
  response = await response.json()
  setProduct(response)
}
fetchMyAPI()
}, [])
 
return(
      <>
        <Navbar />
        <div className="single_breadcrumb pt-25">
          <div className="container">
          <ProductBreadCrumb />
            <div className="row">
              <ProductImagesView />
              <ProductDetails  data={product}/>
            </div>
          </div>
        </div> 
      </>
    )
}