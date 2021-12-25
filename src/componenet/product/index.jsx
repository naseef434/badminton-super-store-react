
import React, { useState, useEffect } from "react"
import { urlGateWay } from "../../services/service"
import * as serviceEndPoint from "../../services/serviceEndPoint"
import Navbar from "../navbar/Navbar";
import BreadCrumb from "./BreadCrumb";
import Categories from "./Categories"
import ProductFilter from "./ProductFilter"
import Product from "./Product"


export default function Index() {
    const [products, setProducts] = useState([])
    const [category, setCategory] = useState([])
    //get categories
    useEffect(async () => {
        const response = await urlGateWay.get(`${serviceEndPoint.productsEndpoints.getCategory}`)
        setCategory(response?.data?.results)
    }, [])

    //get products
    useEffect(async () => {
        const response = await urlGateWay.get(`${serviceEndPoint.productsEndpoints.getProducts}`)
        // console.log({products: response?.data?.results});
        setProducts(response?.data?.results)
    }, [])
    // console.log({ products: products });
    return (
        <>
            <Navbar />
            <BreadCrumb name={["Home", "Shop"]} />
            {/* shop page start */}
            <div className="shop-page pt-85">
                <div className="container">
                    <div className="row">
                        {/* categories area */}
                        <Categories category_data={category} />
                        <div className="col-xl-9 col-lg-9 col-md-9 col-sm-12">
                            <ProductFilter />
                            {/* product listing start with xl-3 */}
                            <div className="shop-page-product pt-50 pb-100">
                                <div className="row">
                                    <h1>Products</h1>
                                    <Product products_data={products} />
                                </div>
                            </div>
                            {/* product display end */}
                        </div>
                    </div>
                </div>
            </div>
            {/* shop page end */}
        </>

    )
}
