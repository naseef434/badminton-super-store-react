import React from "react";
import product1 from "./product-1.jpg";
import product2 from "./product-2.jpg";
import product3 from "./product-3.jpg";

export default function Categories() {
  return (
    <div className="categories_area pt-85 mb-150">
      <div className="container-fluid">
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
          <div className="section-wrapper text-center mb-35">
            <h2 className="section-title">Explore Our Bestsellers</h2>
            <p>
              Commodo sociosqu venenatis cras dolor sagittis integer luctus sem
              primis
              <br /> eget maecenas sed urna malesuada.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
            <div className="categories__tab">
              <ul
                className="nav nav-tabs justify-content-center mb-55"
                id="myTab"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="home-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#home"
                    type="button"
                    role="tab"
                    aria-selected="true"
                  >
                    All SHoes
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="profile-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#profile"
                    type="button"
                    role="tab"
                    aria-selected="false"
                  >
                    Men’s
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="contact-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#contact"
                    type="button"
                    role="tab"
                    aria-selected="false"
                  >
                    WoMen’s
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    data-bs-toggle="tab"
                    data-bs-target="#kidss"
                    type="button"
                    role="tab"
                    aria-selected="false"
                  >
                    Kids
                  </button>
                </li>
              </ul>
              <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="home">
                  <div className="container">
                    <div className="product-active h-2-product-active swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events">
                      <div
                        className="swiper-wrapper"
                        id="swiper-wrapper-08a997022bafb610e"
                        aria-live="polite"
                        style={{ transform: "translate3d(0px, 0px, 0px)" }}
                      >
                        <div
                          className="product-item swiper-slide wow fadeInUp swiper-slide-active"
                          data-wow-duration="1s"
                          data-wow-delay="0.2s"
                          role="group"
                          aria-label="1 / 6"
                          style={{
                            width: "337.333px",
                            visibility: "visible",
                            animationDuration: "1s",
                            animationDelay: "0.2s",
                            animationName: "fadeInUp",
                            marginRight: "40px",
                          }}
                        >
                          <div className="product">
                            <div className="product__thumb">
                              <a href="single.html">
                                <img
                                  className="product-primary"
                                  src={product1}
                                  alt="product_image"
                                />
                                <img
                                  className="product-secondary"
                                  src={product1}
                                  alt="product_image"
                                />
                              </a>
                              <div className="product__update">
                                <a className="#">new</a>
                              </div>
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
                                  <a href="shop.html">
                                    Lotto Flip-Flop Sports Slippers
                                  </a>
                                </h4>
                                <div className="pro-price">
                                  <p className="p-absoulute pr-1">
                                    <span>$</span>180.00 - <span>$</span>280.00
                                  </p>
                                  <a className="p-absoulute pr-2" href="#">
                                    add to cart
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
                                    <a href="javascript:void(0)">
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
                        <div
                          className="product-item swiper-slide wow fadeInUp swiper-slide-next"
                          data-wow-duration="1s"
                          data-wow-delay="0.4s"
                          role="group"
                          aria-label="2 / 6"
                          style={{
                            width: "337.333px",
                            visibility: "visible",
                            animationDuration: "1s",
                            animationDelay: "0.4s",
                            animationName: "fadeInUp",
                            marginRight: "40px",
                          }}
                        >
                          <div className="product">
                            <div className="product__thumb">
                              <a href="single.html">
                              <img
                                  className="product-primary"
                                  src={product2}
                                  alt="product_image"
                                />
                                <img
                                  className="product-secondary"
                                  src={product2}
                                  alt="product_image"
                                />
                              </a>
                              {/* <div class="product__update">
                                                                <a class="#">new</a>
                                                            </div> */}
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
                                  <a href="shop.html">
                                    Lotto Professional Sports
                                  </a>
                                </h4>
                                <div className="pro-price">
                                  <p className="p-absoulute pr-1">
                                    <span>$</span>80.00 - <span>$</span>60.00
                                  </p>
                                  <a className="p-absoulute pr-2" href="#">
                                    add to cart
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
                                    <a href="javascript:void(0)">
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
                        <div
                          className="product-item swiper-slide wow fadeInUp"
                          data-wow-duration="1s"
                          data-wow-delay="0.6s"
                          role="group"
                          aria-label="3 / 6"
                          style={{
                            width: "337.333px",
                            visibility: "visible",
                            animationDuration: "1s",
                            animationDelay: "0.6s",
                            animationName: "fadeInUp",
                            marginRight: "40px",
                          }}
                        >
                          <div className="product">
                            <div className="product__thumb">
                              <a href="single.html">
                              <img
                                  className="product-primary"
                                  src={product3}
                                  alt="product_image"
                                />
                                <img
                                  className="product-secondary"
                                  src={product3}
                                  alt="product_image"
                                />
                              </a>
                              <div className="product__update">
                                <a className="#">new</a>
                              </div>
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
                                  <a href="shop.html">Vibox with mash lining</a>
                                </h4>
                                <div className="pro-price">
                                  <p className="p-absoulute pr-1">
                                    <span>$</span>90.00 - <span>$</span>50.00
                                  </p>
                                  <a className="p-absoulute pr-2" href="#">
                                    add to cart
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
                                    <a href="javascript:void(0)">
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
                        <div
                          className="product-item swiper-slide wow fadeInUp"
                          data-wow-duration="1s"
                          data-wow-delay="0.8s"
                          role="group"
                          aria-label="4 / 6"
                          style={{
                            width: "337.333px",
                            visibility: "visible",
                            animationDuration: "1s",
                            animationDelay: "0.8s",
                            animationName: "fadeInUp",
                            marginRight: "40px",
                          }}
                        >
                          <div className="product">
                            <div className="product__thumb">
                              <a href="single.html">
                              <img
                                  className="product-primary"
                                  src={product1}
                                  alt="product_image"
                                />
                                <img
                                  className="product-secondary"
                                  src={product1}
                                  alt="product_image"
                                />
                                </a>
                              {/* <div class="product__update">
                                                                <a class="#">new</a>
                                                            </div> */}
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
                                  <a href="shop.html">Running Shoes for Men</a>
                                </h4>
                                <div className="pro-price">
                                  <p className="p-absoulute pr-1">
                                    <span>$</span>70.00 - <span>$</span>60.00
                                  </p>
                                  <a className="p-absoulute pr-2" href="#">
                                    add to cart
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
                                    <a href="javascript:void(0)">
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
                        <div
                          className="product-item swiper-slide wow fadeInUp"
                          data-wow-duration="1s"
                          data-wow-delay="1s"
                          role="group"
                          aria-label="5 / 6"
                          style={{
                            width: "337.333px",
                            visibility: "visible",
                            animationDuration: "1s",
                            animationDelay: "1s",
                            animationName: "fadeInUp",
                            marginRight: "40px",
                          }}
                        >
                          <div className="product">
                            <div className="product__thumb">
                              <a href="single.html">
                              <img
                                  className="product-primary"
                                  src={product1}
                                  alt="product_image"
                                />
                                <img
                                  className="product-secondary"
                                  src={product1}
                                  alt="product_image"
                                />
                              </a>
                              <div className="product__update">
                                <a className="#">new</a>
                              </div>
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
                                  <a href="shop.html">
                                    Lotto Flip-Flop Sports Slippers
                                  </a>
                                </h4>
                                <div className="pro-price">
                                  <p className="p-absoulute pr-1">
                                    <span>$</span>680.00 - <span>$</span>680.00
                                  </p>
                                  <a className="p-absoulute pr-2" href="#">
                                    add to cart
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
                                    <a href="javascript:void(0)">
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
                        <div
                          className="product-item swiper-slide wow fadeInUp"
                          data-wow-duration="1s"
                          data-wow-delay="0.2s"
                          role="group"
                          aria-label="6 / 6"
                          style={{
                            width: "337.333px",
                            visibility: "visible",
                            animationDuration: "1s",
                            animationDelay: "0.2s",
                            animationName: "fadeInUp",
                            marginRight: "40px",
                          }}
                        >
                          <div className="product">
                            <div className="product__thumb">
                              <a href="single.html">
                                <img
                                  className="product-primary"
                                  src="./assets/img/product/cat1.png"
                                  alt="product_image"
                                />
                                <img
                                  className="product-secondary"
                                  src="./assets/img/product/cat2.png"
                                  alt="product_image"
                                />
                              </a>
                              <div className="product__update">
                                <a className="#">new</a>
                              </div>
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
                                  <a href="shop.html">
                                    aestro 700 Turf Soccer Cleats
                                  </a>
                                </h4>
                                <div className="pro-price">
                                  <p className="p-absoulute pr-1">
                                    <span>$</span>360.00 - <span>$</span>260.00
                                  </p>
                                  <a className="p-absoulute pr-2" href="#">
                                    add to cart
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
                                    <a href="javascript:void(0)">
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
                      </div>
                      <span
                        className="swiper-notification"
                        aria-live="assertive"
                        aria-atomic="true"
                      />
                      <span
                        className="swiper-notification"
                        aria-live="assertive"
                        aria-atomic="true"
                      />
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="profile">
                  <div className="container">
                    <div className="product-active swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events">
                      <div
                        className="swiper-wrapper"
                        id="swiper-wrapper-8e938d00e3d010ae2"
                        aria-live="polite"
                        style={{ transitionDuration: "0ms" }}
                      >
                        <div className="product-item swiper-slide">
                          <div className="product">
                            <div className="product__thumb">
                              <a href="single.html">
                                <img
                                  className="product-primary"
                                  src="./assets/img/product/cat1.png"
                                  alt="product_image"
                                />
                                <img
                                  className="product-secondary"
                                  src="./assets/img/product/cat2.png"
                                  alt="product_image"
                                />
                              </a>
                              <div className="product__update">
                                <a className="#">new</a>
                              </div>
                              <div className="product-info mb-10">
                                <div className="product_category">
                                  <span>Shoes, Clothing</span>
                                </div>
                                <div className="product_rating text-end">
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
                                  <a href="single.html">Sports Sandals for </a>
                                </h4>
                                <div className="pro-price">
                                  <p className="p-absoulute pr-1">
                                    <span>$</span>180.00 - <span>$</span>880.00
                                  </p>
                                  <a className="p-absoulute pr-2" href="#">
                                    add to cart
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
                                    <a href="javascript:void(0)">
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
                        <div className="product-item swiper-slide">
                          <div className="product">
                            <div className="product__thumb">
                              <a href="single.html">
                                <img
                                  className="product-primary"
                                  src="./assets/img/product/cat2.png"
                                  alt="product_image"
                                />
                                <img
                                  className="product-secondary"
                                  src="./assets/img/product/cat1.png"
                                  alt="product_image"
                                />
                              </a>
                              <div className="product__update">
                                <a className="lightblueclr" href="#">
                                  -20%
                                </a>
                              </div>
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
                                  <a href="shop.html">Sports Sandals for </a>
                                </h4>
                                <div className="pro-price">
                                  <p className="p-absoulute pr-1">
                                    <span>$</span>180.00 - <span>$</span>980.00
                                  </p>
                                  <a className="p-absoulute pr-2" href="#">
                                    add to cart
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
                                    <a href="javascript:void(0)">
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
                        <div className="product-item swiper-slide">
                          <div className="product">
                            <div className="product__thumb">
                              <a href="single.html">
                                <img
                                  className="product-primary"
                                  src="./assets/img/product/cat3.png"
                                  alt="product_image"
                                />
                                <img
                                  className="product-secondary"
                                  src="./assets/img/product/cat2.png"
                                  alt="product_image"
                                />
                              </a>
                              {/* <div class="product__update">
                                                                <a class="#">new</a>
                                                            </div> */}
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
                                  <a href="shop.html">
                                    and American foreign trade{" "}
                                  </a>
                                </h4>
                                <div className="pro-price">
                                  <p className="p-absoulute pr-1">
                                    <span>$</span>280.00 - <span>$</span>580.00
                                  </p>
                                  <a className="p-absoulute pr-2" href="#">
                                    add to cart
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
                                    <a href="javascript:void(0)">
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
                        <div className="product-item swiper-slide">
                          <div className="product">
                            <div className="product__thumb">
                              <a href="single.html">
                                <img
                                  className="product-primary"
                                  src="./assets/img/product/cat2.png"
                                  alt="product_image"
                                />
                                <img
                                  className="product-secondary"
                                  src="./assets/img/product/cat2.png"
                                  alt="product_image"
                                />
                              </a>
                              <div className="product__update">
                                <a className="lightblueclr" href="#">
                                  -30%
                                </a>
                              </div>
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
                                  <a href="shop.html">
                                    Korean version of women's platform
                                  </a>
                                </h4>
                                <div className="pro-price">
                                  <p className="p-absoulute pr-1">
                                    <span>$</span>480.00 - <span>$</span>680.00
                                  </p>
                                  <a className="p-absoulute pr-2" href="#">
                                    add to cart
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
                                    <a href="javascript:void(0)">
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
                        <div className="product-item swiper-slide">
                          <div className="product">
                            <div className="product__thumb">
                              <a href="single.html">
                                <img
                                  className="product-primary"
                                  src="./assets/img/product/cat1.png"
                                  alt="product_image"
                                />
                                <img
                                  className="product-secondary"
                                  src="./assets/img/product/cat2.png"
                                  alt="product_image"
                                />
                              </a>
                              <div className="product__update">
                                <a className="#">new</a>
                              </div>
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
                                  <a href="shop.html">
                                    new word with thick toes and{" "}
                                  </a>
                                </h4>
                                <div className="pro-price">
                                  <p className="p-absoulute pr-1">
                                    <span>$</span>680.00 - <span>$</span>680.00
                                  </p>
                                  <a className="p-absoulute pr-2" href="#">
                                    add to cart
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
                                    <a href="javascript:void(0)">
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
                        <div className="product-item swiper-slide">
                          <div className="product">
                            <div className="product__thumb">
                              <a href="single.html">
                                <img
                                  className="product-primary"
                                  src="./assets/img/product/cat1.png"
                                  alt="product_image"
                                />
                                <img
                                  className="product-secondary"
                                  src="./assets/img/product/cat2.png"
                                  alt="product_image"
                                />
                              </a>
                              <div className="product__update">
                                <a className="#">new</a>
                              </div>
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
                                  <a href="shop.html">
                                    High-heeled sandals women 2021{" "}
                                  </a>
                                </h4>
                                <div className="pro-price">
                                  <p className="p-absoulute pr-1">
                                    <span>$</span>680.00 - <span>$</span>680.00
                                  </p>
                                  <a className="p-absoulute pr-2" href="#">
                                    add to cart
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
                                    <a href="javascript:void(0)">
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
                      </div>
                      <span
                        className="swiper-notification"
                        aria-live="assertive"
                        aria-atomic="true"
                      />
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="contact">
                  <div className="container">
                    <div className="product-active h-2-product-active swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events">
                      <div
                        className="swiper-wrapper"
                        id="swiper-wrapper-f331bfa98ded8f87"
                        aria-live="polite"
                        style={{ transitionDuration: "0ms" }}
                      >
                        <div className="product-item swiper-slide">
                          <div className="product">
                            <div className="product__thumb">
                              <a href="single.html">
                                <img
                                  className="product-primary"
                                  src="./assets/img/product/9.jpg"
                                  alt="product_image"
                                />
                                <img
                                  className="product-secondary"
                                  src="./assets/img/product/9-2.jpg"
                                  alt="product_image"
                                />
                              </a>
                              <div className="product__update">
                                <a className="#">new</a>
                              </div>
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
                                  <a href="shop.html">
                                    women's sandals stiletto super{" "}
                                  </a>
                                </h4>
                                <div className="pro-price">
                                  <p className="p-absoulute pr-1">
                                    <span>$</span>680.00 - <span>$</span>680.00
                                  </p>
                                  <a className="p-absoulute pr-2" href="#">
                                    add to cart
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
                                    <a href="javascript:void(0)">
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
                        <div className="product-item swiper-slide">
                          <div className="product">
                            <div className="product__thumb">
                              <a href="single.html">
                                <img
                                  className="product-primary"
                                  src="./assets/img/product/3.jpg"
                                  alt="product_image"
                                />
                                <img
                                  className="product-secondary"
                                  src="./assets/img/product/3-2.jpg"
                                  alt="product_image"
                                />
                              </a>
                              {/* <div class="product__update">
                                                                <a class="#">new</a>
                                                            </div> */}
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
                                  <a href="shop.html">
                                    Women's 2021 new balance heel{" "}
                                  </a>
                                </h4>
                                <div className="pro-price">
                                  <p className="p-absoulute pr-1">
                                    <span>$</span>680.00 - <span>$</span>680.00
                                  </p>
                                  <a className="p-absoulute pr-2" href="#">
                                    add to cart
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
                                    <a href="javascript:void(0)">
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
                        <div className="product-item swiper-slide">
                          <div className="product">
                            <div className="product__thumb">
                              <a href="single.html">
                                <img
                                  className="product-primary"
                                  src="./assets/img/product/11.jpg"
                                  alt="product_image"
                                />
                                <img
                                  className="product-secondary"
                                  src="./assets/img/product/11-2.jpg"
                                  alt="product_image"
                                />
                              </a>
                              <div className="product__update">
                                <a className="#">new</a>
                              </div>
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
                                  <a href="shop.html">
                                    big silk belt female sandals
                                  </a>
                                </h4>
                                <div className="pro-price">
                                  <p className="p-absoulute pr-1">
                                    <span>$</span>680.00 - <span>$</span>680.00
                                  </p>
                                  <a className="p-absoulute pr-2" href="#">
                                    add to cart
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
                                    <a href="javascript:void(0)">
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
                        <div className="product-item swiper-slide">
                          <div className="product">
                            <div className="product__thumb">
                              <a href="single.html">
                                <img
                                  className="product-primary"
                                  src="./assets/img/product/4.jpg"
                                  alt="product_image"
                                />
                                <img
                                  className="product-secondary"
                                  src="./assets/img/product/4-2.jpg"
                                  alt="product_image"
                                />
                              </a>
                              {/* <div class="product__update">
                                                                <a class="#">new</a>
                                                            </div> */}
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
                                  <a href="shop.html">
                                    heeled big silk belt female sandals
                                  </a>
                                </h4>
                                <div className="pro-price">
                                  <p className="p-absoulute pr-1">
                                    <span>$</span>680.00 - <span>$</span>680.00
                                  </p>
                                  <a className="p-absoulute pr-2" href="#">
                                    add to cart
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
                                    <a href="javascript:void(0)">
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
                        <div className="product-item swiper-slide">
                          <div className="product">
                            <div className="product__thumb">
                              <a href="single.html">
                                <img
                                  className="product-primary"
                                  src="./assets/img/product/10.jpg"
                                  alt="product_image"
                                />
                                <img
                                  className="product-secondary"
                                  src="./assets/img/product/10-2.jpg"
                                  alt="product_image"
                                />
                              </a>
                              <div className="product__update">
                                <a className="#">new</a>
                              </div>
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
                                  <a href="shop.html">
                                    Fashion high heeled big silk belt{" "}
                                  </a>
                                </h4>
                                <div className="pro-price">
                                  <p className="p-absoulute pr-1">
                                    <span>$</span>680.00 - <span>$</span>680.00
                                  </p>
                                  <a className="p-absoulute pr-2" href="#">
                                    add to cart
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
                                    <a href="javascript:void(0)">
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
                        <div className="product-item swiper-slide">
                          <div className="product">
                            <div className="product__thumb">
                              <a href="single.html">
                                <img
                                  className="product-primary"
                                  src="./assets/img/product/cat1.png"
                                  alt="product_image"
                                />
                                <img
                                  className="product-secondary"
                                  src="./assets/img/product/cat2.png"
                                  alt="product_image"
                                />
                              </a>
                              <div className="product__update">
                                <a className="#">new</a>
                              </div>
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
                                  <a href="shop.html">
                                    balance heel summer new platfh{" "}
                                  </a>
                                </h4>
                                <div className="pro-price">
                                  <p className="p-absoulute pr-1">
                                    <span>$</span>680.00 - <span>$</span>680.00
                                  </p>
                                  <a className="p-absoulute pr-2" href="#">
                                    add to cart
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
                                    <a href="javascript:void(0)">
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
                      </div>
                      <span
                        className="swiper-notification"
                        aria-live="assertive"
                        aria-atomic="true"
                      />
                      <span
                        className="swiper-notification"
                        aria-live="assertive"
                        aria-atomic="true"
                      />
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="kidss">
                  <div className="container">
                    <div className="product-active swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events">
                      <div
                        className="swiper-wrapper"
                        id="swiper-wrapper-95f1bd71e655271c"
                        aria-live="polite"
                        style={{ transitionDuration: "0ms" }}
                      >
                        <div className="product-item swiper-slide">
                          <div className="product">
                            <div className="product__thumb">
                              <a href="single.html">
                                <img
                                  className="product-primary"
                                  src="./assets/img/product/cat1.png"
                                  alt="product_image"
                                />
                                <img
                                  className="product-secondary"
                                  src="./assets/img/product/cat2.png"
                                  alt="product_image"
                                />
                              </a>
                              <div className="product__update">
                                <a className="#">new</a>
                              </div>
                              <div className="product-info mb-10">
                                <div className="product_category">
                                  <span>Shoes, Clothing</span>
                                </div>
                                <div className="product_rating text-end">
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
                                  <a href="single.html">
                                    heeled big silk belt{" "}
                                  </a>
                                </h4>
                                <div className="pro-price">
                                  <p className="p-absoulute pr-1">
                                    <span>$</span>680.00 - <span>$</span>680.00
                                  </p>
                                  <a className="p-absoulute pr-2" href="#">
                                    add to cart
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
                                    <a href="javascript:void(0)">
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
                        <div className="product-item swiper-slide">
                          <div className="product">
                            <div className="product__thumb">
                              <a href="single.html">
                                <img
                                  className="product-primary"
                                  src="./assets/img/product/cat2.png"
                                  alt="product_image"
                                />
                                <img
                                  className="product-secondary"
                                  src="./assets/img/product/cat1.png"
                                  alt="product_image"
                                />
                              </a>
                              <div className="product__update">
                                <a className="lightblueclr" href="#">
                                  -20%
                                </a>
                              </div>
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
                                  <a href="shop.html">
                                    d American style Roman{" "}
                                  </a>
                                </h4>
                                <div className="pro-price">
                                  <p className="p-absoulute pr-1">
                                    <span>$</span>680.00 - <span>$</span>680.00
                                  </p>
                                  <a className="p-absoulute pr-2" href="#">
                                    add to cart
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
                                    <a href="javascript:void(0)">
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
                        <div className="product-item swiper-slide">
                          <div className="product">
                            <div className="product__thumb">
                              <a href="single.html">
                                <img
                                  className="product-primary"
                                  src="./assets/img/product/cat3.png"
                                  alt="product_image"
                                />
                                <img
                                  className="product-secondary"
                                  src="./assets/img/product/cat2.png"
                                  alt="product_image"
                                />
                              </a>
                              {/* <div class="product__update">
                                                                <a class="#">new</a>
                                                            </div> */}
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
                                  <a href="shop.html">
                                    stiletto high-heeled thin shallow{" "}
                                  </a>
                                </h4>
                                <div className="pro-price">
                                  <p className="p-absoulute pr-1">
                                    <span>$</span>680.00 - <span>$</span>680.00
                                  </p>
                                  <a className="p-absoulute pr-2" href="#">
                                    add to cart
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
                                    <a href="javascript:void(0)">
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
                        <div className="product-item swiper-slide">
                          <div className="product">
                            <div className="product__thumb">
                              <a href="single.html">
                                <img
                                  className="product-primary"
                                  src="./assets/img/product/cat2.png"
                                  alt="product_image"
                                />
                                <img
                                  className="product-secondary"
                                  src="./assets/img/product/cat2.png"
                                  alt="product_image"
                                />
                              </a>
                              <div className="product__update">
                                <a className="lightblueclr" href="#">
                                  -30%
                                </a>
                              </div>
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
                                  <a href="shop.html">
                                    high-heeled thin shallow{" "}
                                  </a>
                                </h4>
                                <div className="pro-price">
                                  <p className="p-absoulute pr-1">
                                    <span>$</span>680.00 - <span>$</span>680.00
                                  </p>
                                  <a className="p-absoulute pr-2" href="#">
                                    add to cart
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
                                    <a href="javascript:void(0)">
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
                        <div className="product-item swiper-slide">
                          <div className="product">
                            <div className="product__thumb">
                              <a href="single.html">
                                <img
                                  className="product-primary"
                                  src="./assets/img/product/cat1.png"
                                  alt="product_image"
                                />
                                <img
                                  className="product-secondary"
                                  src="./assets/img/product/cat2.png"
                                  alt="product_image"
                                />
                              </a>
                              <div className="product__update">
                                <a className="#">new</a>
                              </div>
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
                                  <a href="shop.html">
                                    Fashion high heeled big silk belt{" "}
                                  </a>
                                </h4>
                                <div className="pro-price">
                                  <p className="p-absoulute pr-1">
                                    <span>$</span>680.00 - <span>$</span>680.00
                                  </p>
                                  <a className="p-absoulute pr-2" href="#">
                                    add to cart
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
                                    <a href="javascript:void(0)">
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
                        <div className="product-item swiper-slide">
                          <div className="product">
                            <div className="product__thumb">
                              <a href="single.html">
                                <img
                                  className="product-primary"
                                  src="./assets/img/product/cat1.png"
                                  alt="product_image"
                                />
                                <img
                                  className="product-secondary"
                                  src="./assets/img/product/cat2.png"
                                  alt="product_image"
                                />
                              </a>
                              <div className="product__update">
                                <a className="#">new</a>
                              </div>
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
                                  <a href="shop.html">heeled sandals open</a>
                                </h4>
                                <div className="pro-price">
                                  <p className="p-absoulute pr-1">
                                    <span>$</span>680.00 - <span>$</span>680.00
                                  </p>
                                  <a className="p-absoulute pr-2" href="#">
                                    add to cart
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
                                    <a href="javascript:void(0)">
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
                      </div>
                      <span
                        className="swiper-notification"
                        aria-live="assertive"
                        aria-atomic="true"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
