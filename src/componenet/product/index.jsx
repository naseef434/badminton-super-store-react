import React, { useState, useEffect } from "react";
import { urlGateWay } from "../../services/service";
import * as serviceEndPoint from "../../services/serviceEndPoint";
import Navbar from "../navbar/Navbar";
import BreadCrumb from "./BreadCrumb";
import Categories from "./Categories";
import ProductFilter from "./ProductFilter";
import Product from "./Product";

export default function Index() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [brands, setBrands] = useState([]);
  const [params, setParams] = useState({
    category: null,
    brand: null,
  });
  //get categories
  useEffect(async () => {
    const response = await urlGateWay.get(
      `${serviceEndPoint.productsEndpoints.getCategory}`
    );
    setCategory(response?.data?.results);
  }, []);

  //get brands
  useEffect(async () => {
    const response = await urlGateWay.get(
      `${serviceEndPoint.productsEndpoints.getBrands}`
    );
    setBrands(response?.data?.results)
  }, []);

  //get products
  useEffect(async () => {
    const response = await urlGateWay.get(
      `${serviceEndPoint.productsEndpoints.getProducts}`,
      { params }
    );
    setProducts(response?.data?.results);
  }, [params]);
  //get product by category
  const SelectCategory = (id) => {
    setParams({ ...params, category: id });
  };

  //get product by brand
  const getProductByBrand = (id) => {
    setParams({ ...params, brand: id });
  };

  //handle login popup
  const [openLoginModel, setLoginModel] = useState(false);

  const loginModelFunction = async (prod) => {
    const userToken = localStorage.getItem("token");
    if (userToken) {
      let body = {
        product_id: prod.id,
        quantity: 1,
      };
      const response = await urlGateWay.post(
        serviceEndPoint.cart.addToCart,
        body
      );
      const { data, status } = response;
      if (status === 200) {
        alert("added item  cart");
      } else {
        window.alert("something went wrong");
      }
    } else {
      setLoginModel(true);
    }
  };

  //single product
  const [openModel, setOpen] = useState(false);
  const [product, setProduct] = useState({
    id: "",
    category: "",
    brand: "",
    color: "",
    long_desc: "",
    name: "",
    sale_price: "",
    short_desc: "",
    size: "",
    thumbnail: "",
  });
  //calling single product model
  function openModelFunction(item) {
    setOpen(true);
    setProduct({
      id: item.id,
      category: item.category.name,
      brand: item.brand.name,
      color: item.color,
      long_desc: item.long_desc,
      name: item.name,
      sale_price: item.sale_price,
      short_desc: item.short_desc,
      size: item.size,
      thumbnail: item.thumbnail,
    });
  }

  return (
    <>
      <Navbar />
      <BreadCrumb name={["Home", "Shop"]} />
      {/* shop page start */}
      <div className="shop-page pt-85">
        <div className="container">
          <div className="row">
            {/* categories area */}
            <Categories
              category_data={category}
              selectCategory={SelectCategory}
              brands = {brands}
              getProductByBrand={getProductByBrand}
            />
            <div className="col-xl-9 col-lg-9 col-md-9 col-sm-12">
              <ProductFilter />
              {/* product listing start with xl-3 */}
              <div className="shop-page-product pt-50 pb-100">
                <div className="row">
                  <Product
                    products_data={products}
                    handleLoginPop={loginModelFunction}
                    openLoginModel={openLoginModel}
                    setLoginModel={setLoginModel}
                    openModelSingleView={openModel}
                    setOpen={setOpen}
                    product={product}
                    setProduct={setProduct}
                    openModelFunction={openModelFunction}
                    
                  />
                </div>
              </div>
              {/* product display end */}
            </div>
          </div>
        </div>
      </div>
      {/* shop page end */}
    </>
  );
}
