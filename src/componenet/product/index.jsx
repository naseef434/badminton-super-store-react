import React, { useState, useEffect, useContext } from "react";
import { urlGateWay } from "../../services/service";
import * as serviceEndPoint from "../../services/serviceEndPoint";
import Navbar from "../navbar/Navbar";
import BreadCrumb from "./BreadCrumb";
import Categories from "./Categories";
import ProductFilter from "./ProductFilter";
import Product from "./Product";
import { PuffLoader } from "react-spinners";
import { css } from "@emotion/react";
import { useLocation, useParams } from "react-router-dom";
import ProductSinleView from "./ProductSingleView";
// import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";
import qs from "query-string";
import AppContext from "../../AppContext";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: #ff0000;
`;
export default function Index(props) {
  // const [uuId, setuuId] = useState({
  //   customer_id: "",
  // });

  const [sports, setSports] = useState([]);
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [brands, setBrands] = useState([]);
  const [params, setParams] = useState({
    category: null,
    brand: null,
    search: null,
    q: "",
  });
  const [loader, setLoader] = useState(true);
  const { search } = useLocation();
  const {cartCount, setCartCount} = useContext(AppContext);
  //loading spots Name nd passing Feautures component
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
  //get categories
  useEffect(async () => {
    const query = qs.parse(search);
    try {
      const response = await urlGateWay.get(
        `${serviceEndPoint.productsEndpoints.getCategory}`,
        { params: { sport: query.sport } }
      );
      setCategory(response?.data);
    } catch (e) {
      console.log("categories api error ");
    }
  }, [search]);
  console.log(category);
  //get brands
  useEffect(async () => {
    const query = qs.parse(search);

    const response = await urlGateWay.get(
      `${serviceEndPoint.productsEndpoints.getBrands}`,
      { params: { sport: query.sport } }
    );
    setBrands(response?.data);
  }, [search]);

  //get products
  useEffect(async () => {
    setLoader(true);
    // const get_uuuId = localStorage.getItem("uuid");
    // if (!get_uuuId) {
    //   //setting uuid
    //   const uuid = uuidv4();
    //   localStorage.setItem("uuid", uuid);

    //   setuuId({ customer_id: uuid });
    // } else {
    //   setuuId({ customer_id: get_uuuId });
    // }

    const query = qs.parse(search);
    console.log(query);
    let prodParams = {};
    if (query.category) {
      prodParams.category = query.category;
    } else if (query.sport) {
      prodParams.sport = query.sport;
    } else if (query.offerProd) {
      prodParams.on_offer = true;
    }
    const response = await urlGateWay.get(
      `${serviceEndPoint.productsEndpoints.getProducts}`,
      { params: prodParams }
    );
    setProducts(response?.data?.results);
    setLoader(false);
    // console.log({ prodParams });
  }, [search]);

  //get product by category
  const SelectCategory = async (id) => {
    setParams({ ...params, brand: null, category: id });
    const response = await urlGateWay.get(
      `${serviceEndPoint.productsEndpoints.getProducts}`,
      { params: { category: id } }
    );
    setProducts(response?.data?.results);
  };
  console.log(products);
  //get product by brand
  const getProductByBrand = async (id) => {
    console.log("brand clicked");
    setParams({ ...params, category: null, brand: id });
    const response = await urlGateWay.get(
      `${serviceEndPoint.productsEndpoints.getProducts}`,
      { params: { brand: id } }
    );
    setProducts(response?.data?.results);
  };
  const [offerBanner, setofferBanner] = useState([]);
  //get offer banner
  useEffect(async () => {
    const response = await urlGateWay.get(
      `${serviceEndPoint.offerBanner.offerBanner}`
    );

    setofferBanner(response);
  }, []);

  //search
  const searchInput = (event) => {
    // console.log(event.target.value);
    setParams({ ...params, q: event.target.value });
  };

  const buttonSerach = async () => {
    const response = await urlGateWay.get(
      `${serviceEndPoint.productSearch.psearch}`,
      { params: { q: params.q } }
    );
    setProducts(response?.data?.results);
    console.log("response", products);
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
    price: "",
    size: "",
    thumbnail: "",
  });
  //calling single product model
  function openModelFunction(item) {
    console.log({ item: item });
    setOpen(true);
    setProduct({
      id: item.id,
      category: item.category.name,
      brand: item.brand.name,
      color: item.color,
      long_desc: item.long_desc,
      name: item.name,
      price: item.price,
      sale_price: item.sale_price,
      short_desc: item.short_desc,
      size: item.size,
      thumbnail: item.thumbnail,
    });
  }

  //handle add to cart qty
  const [Qty, setQty] = useState(1);
  const cartQty = (event) => {
    setQty(event.target.value);
  };

  //add items  to cart
  const addToCart = async (prod) => {
    // const uuId= localStorage.getItem("uuid")
    // const response = await urlGateWay.post(
    //   serviceEndPoint.cart.getAccessToken,
    //   uuId
    // );
    const qty = parseInt(Qty);
    // localStorage.setItem("token", response?.data?.access);
    // const userToken = localStorage.getItem("token");
    // if (userToken) {
    let body = {
      product_id: prod.id,
      quantity: qty,
    };
    const response = await urlGateWay.post(
      serviceEndPoint.cart.addToCart,
      body
    );
    // }
    setCartCount(response?.data?.item_count || cartCount);
    toast.success("Added to cart!");
    setQty(1);
  };
  //delete cart item

  const { section } = useParams();
  return (
    <>
      <PuffLoader color={"blue"} loading={loader} css={override} size={150} />
      {section === "view" ? (
        <ProductSinleView addToCart={addToCart} cartQty={cartQty} />
      ) : (
        <>
          <BreadCrumb offerBanner={offerBanner} />
          {/* shop page start */}
          <div className="shop-page pt-85">
            <div className="container">
              <div className="row">
                {/* categories area */}
                <Categories
                  category_data={category}
                  sports={sports}
                  selectCategory={SelectCategory}
                  brands={brands}
                  getProductByBrand={getProductByBrand}
                  params={params}
                />
                <div className="col-xl-9 col-lg-9 col-md-9 col-sm-12">
                  <ProductFilter
                    searchInput={searchInput}
                    buttonSerach={buttonSerach}
                    products_data={products}
                  />
                  {/* product listing start with xl-3 */}
                  <div className="shop-page-product pt-50 pb-100">
                    <div className="row">
                      <Product
                        products_data={products}
                        // handleLoginPop={loginModelFunction}
                        // openLoginModel={openLoginModel}
                        // setLoginModel={setLoginModel}
                        openModelSingleView={openModel}
                        setOpen={setOpen}
                        product={product}
                        setProduct={setProduct}
                        openModelFunction={openModelFunction}
                        addToCart={addToCart}
                        cartQty={cartQty}
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
      )}
    </>
  );
}
