import React, { useState } from "react";
import { Link } from "react-router-dom";
import Signup from "../Customer";
import ProductPopUp from "./ProductPopUp";
var img = "assets/img/product/test.jpg";

export default function Product({
  products_data,
  // handleLoginPop,
  openLoginModel,
  setLoginModel,
  openModelSingleView,
  setOpen,
  product,
  openModelFunction,
  addToCart,
}) {
  return (
    <>
      {/* if model is true run the component */}
      {openModelSingleView && (
        <ProductPopUp closeModel={setOpen} item={product} />
      )}
      {openLoginModel && <Signup closeModel={setLoginModel} />}
      <div className="col-xl-12 col-lg-12 col-md-12">
        <div className="tab-content" id="nav-tabContent">
          <div
            className="tab-pane fade show active"
            id="nav-contact"
            role="tabpanel"
            aria-labelledby="nav-contact-tab"
          >
            <div className="row">
              {products_data.map((item, key) => {
                return (
                  <div className="col-xl-3">
                    <div className="product product-3">
                      <div className="product__thumb">
                        <Link to={`/products/view/${item.id}`}>
                          <img
                            className="product-primary"
                            src={img}
                            alt="product_image"
                          />
                          <img
                            className="product-secondary"
                            src={img}
                            alt="product_image"
                          />
                        </Link>

                        <div className="product-info mb-10">
                          <div className="product_category">
                            <span>Shoes, Clothing</span>
                          </div>
                          <div className="product_rating">
                            <a href="#">
                              <i className="fal fa-star start-color" />
                            </a>
                            <a href="#">
                              <i className="fal fa-star start-color" />
                            </a>
                            <a href="#">
                              <i className="fal fa-star start-color" />
                            </a>
                            <a href="#">
                              <i className="fal fa-star" />
                            </a>
                            <a href="#">
                              <i className="fal fa-star" />
                            </a>
                          </div>
                        </div>
                        <div className="product__name">
                          <h4>
                            <Link to={`/product_view/${item.id}`}>
                              {" "}
                              {item.name}
                            </Link>
                          </h4>
                          {/* <h4><Link to=""> {item.name}</Link></h4> */}
                          <div className="pro-price">
                            <p className="p-absoulute pr-1">
                              <span>AED - {item.price} </span>
                              {products_data.rate}{" "}
                            </p>
                            <a
                              className="p-absoulute pr-2"
                              href="javascript:void(0)"
                              onClick={() => addToCart(item)}
                            >
                              add toooo cart
                            </a>
                          </div>
                        </div>
                        <div className="product__action">
                          <div className="inner__action">
                            <div className="wishlist">
                              <a href="#">
                                <i className="fal fa-heart" />
                              </a>
                            </div>
                            <div className="view">
                              <a onClick={() => openModelFunction(item)}>
                                <i className="fal fa-eye" />
                              </a>
                            </div>
                            <div className="layer">
                              <a href="#">
                                <i className="fal fa-layer-group" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
