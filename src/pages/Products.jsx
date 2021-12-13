
import Navbar from "../componenet/navbar/Navbar";
import BreadCrumb from '../componenet/product/BreadCrumb'

import React, {useState,useEffect} from "react";

import Category from "../componenet/product/Categories";
import Product from "../componenet/product/Product";
import ProductFilter from "../componenet/product/ProductFilter";

export default function Products() {
    const  [products, setProducts] = useState([])
    const  [category, setCategory] = useState([])
   
      //calling category api 
      useEffect(() => {
        async function fetchMyAPI() {
        let response = await fetch('http://localhost:8000/api/category/')
        response = await response.json()
        // console.log({response})
        setCategory(response?.results)
        }
      fetchMyAPI()
      }, [])
    
    //calling product api 
    useEffect(() => {
      async function fetchMyAPI() {
      let response = await fetch('http://localhost:8000/api/product/')
      response = await response.json()
      // console.log({response})
      setProducts(response?.results)
    }
    fetchMyAPI()
  }, [])

    
    return (
        <>
        <Navbar />
        <BreadCrumb name = {["Home", "Shop"]} />
  <div>
  {/* shop page start */}
  <div className="shop-page pt-85">
    <div className="container">
      <div className="row">
        {/* categories area */}
        <Category data={category} />
        <div className="col-xl-9 col-lg-9 col-md-9 col-sm-12">
          <ProductFilter />
          {/* product listing start with xl-3 */}
          <div className="shop-page-product pt-50 pb-100">
            <div className="row">
              <Product  data={products} />
            </div>
          </div>
          {/* product display end */}
        </div>
      </div>
    </div>
  </div>
  {/* shop page end */}
</div>
   
  </>
    )
}