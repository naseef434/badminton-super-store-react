import React from "react";
import Navbar from "../componenet/navbar/Navbar";
import BreadCrumb from '../componenet/product/BreadCrumb'
import {BrowserRouter as Router, Routes, Route, Navigate, Link, Outlet} from 'react-router-dom'
export default function Products() {
    return (
        <>
        <Navbar />
        <BreadCrumb />
        <div>
  {/* shop page start */}
  <div className="shop-page pt-85">
    <div className="container">
      <div className="row">
        <div className="col-xl-3 col-lg-4 col-md-12">
          <div className="sidebar">
            <div className="product-widget">
              <h3 className="widget-title mb-30">Product categories</h3>
              <ul className="product-categories">
                <li><a href="shop.html">Sportswear <span>(5)</span></a></li>
                <li><a href="shop.html">Training Wear <span>(0)</span></a></li>
               
              </ul>
            </div>
            <div className="product-widget pt-50">
              <h3 className="widget-title mb-30">Filter By Price</h3>
              <form action="#">
                <div className="price-filter">
                  <div id="slider-range" className="ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content">
                    <div className="ui-slider-range ui-corner-all ui-widget-header" style={{left: '15%', width: '46.4%'}} /><span tabIndex={0} className="ui-slider-handle ui-corner-all ui-state-default" style={{left: '7.2%'}} /><span tabIndex={0} className="ui-slider-handle ui-corner-all ui-state-default" style={{left: '48.8%'}} />
                    <div className="ui-slider-range ui-corner-all ui-widget-header" style={{left: '15%', width: '45%'}} />
                    <div className="ui-slider-range ui-corner-all ui-widget-header" style={{left: '7.2%', width: '41.6%'}} /></div>
                  <div className="filter-form-submit mt-35">
                    <button type="submit">Filter</button>
                    <div className="filter-price d-inline-block pl-20">Price: <input type="button" id="amount" defaultValue="$36 - $244" /></div>
                  </div>
                </div>
              </form>
            </div>
            <div className="product-widget pt-50">
              <h3 className="widget-title mb-30">Size</h3>
              <div className="layer-size">
                <span>3XL</span>
                <span>L</span>
                <span>M</span>
              </div>
            </div>
            <div className="product-widget pt-50">
              <h3 className="widget-title mb-30">Color Options</h3>
              <div className="colors-layer">
                <a href="shop.html"><span className="blue" /></a>
                <a href="shop.html"><span className="gray" /></a>
                <a href="shop.html"><span className="skyblue" /></a>
                <a href="shop.html"><span className="red" /></a>
                <a href="shop.html"><span className="yellow" /></a>
              </div>
            </div>
            <div className="product_list_widget">
              <h3 className="widget-title mb-30 pt-50">Top rated</h3>
              <div className="item-widget">
                <div className="img-left">
                  <a href="single.html"><img src="./assets/img/product/10.jpg" alt="product-meta" /></a>
                </div>
                <div className="product-meta">
                  <a href="single.html"><h4 className="sm-title">Arsenal Home Jersey</h4></a>
                  <span>$55.00</span>
                </div>
              </div>
              <div className="item-widget">
                <div className="img-left">
                  <a href="single.html"><img src="./assets/img/product/11.jpg" alt="product-meta" /></a>
                </div>
                <div className="product-meta">
                  <a href="single.html"><h4 className="sm-title">Arsenal Home Jersey</h4></a>
                  <span>$55.00</span>
                </div>
              </div>
              <div className="item-widget">
                <div className="img-left">
                  <a href="single.html"><img src="./assets/img/product/12.jpg" alt="product-meta" /></a>
                </div>
                <div className="product-meta">
                  <a href="single.html"><h4 className="sm-title">Arsenal Home Jersey</h4></a>
                  <span>$55.00</span>
                </div>
              </div>
              <div className="item-widget">
                <div className="img-left">
                  <a href="single.html"><img src="./assets/img/product/13.jpg" alt="product-meta" /></a>
                </div>
                <div className="product-meta">
                  <a href="single.html"><h4 className="sm-title">Arsenal Home Jersey</h4></a>
                  <span>$55.00</span>
                </div>
              </div>
            </div>
            <div className="product-widget pt-50">
              <h3 className="widget-title mb-30">Product tags</h3>
              <div className="tags mb-50">
                <a href="shop.html">Basketball</a>
                <a href="shop.html">Handbag</a>
                <a href="shop.html">Jackets</a>
                <a href="shop.html">Kids &amp; Young</a>
                <a href="shop.html">Training Wear</a>
                <a href="shop.html">Women’s</a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-9 col-lg-9 col-md-9 col-sm-12">
          <div className="shop-top-bar position-relative">
            <div className="showing-result">
              <p> Showing all 21 results</p>
            </div>
            <div className="shop-tab">
              <nav>
                <div className="nav nav-tabs shop-tabs" id="nav-tab" role="tablist">
                  <button>
                    <span>views</span>
                  </button>
                  <button className="nav-link" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">
                    <img src="./assets/img/essential/i2.svg" alt="" />
                  </button>
                  <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">
                    <img src="./assets/img/essential/i3.svg" alt="" />
                  </button>
                  <button className="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">
                    <img src="./assets/img/essential/i4.svg" alt="" />
                  </button>
                  <button className="nav-link" id="nav-contact-tab2" data-bs-toggle="tab" data-bs-target="#nav-list" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">
                    <img src="./assets/img/essential/list.svg" alt="" />
                  </button>
                </div>
              </nav>                                 
            </div>
            <div className="shop-filtaring">
              <div className="filter-select">
                <select className="order-by">
                  <option value="Default setting">Default setting</option>
                  <option value="Default setting">short by popularity</option>
                  <option value="Default setting">short by average rating</option>
                  <option value="Default setting">short by latest</option>
                  <option value="Default setting">short by price : low to high</option>
                  <option value="Default setting">Default setting</option>
                </select>
                <button className="open-filter"><i className="fal fa-plus" />filter</button>
                <div className="filter-content">
                  <div className="row">
                    <div className="col-xl-3 col-lg-3">
                      <div className="product-widget pt-50">
                        <h3 className="widget-title mb-30">color</h3>
                        <div className="colors-layer">
                          <a href="shop.html"><span className="blue" /></a>
                          <a href="shop.html"><span className="gray" /></a>
                          <a href="shop.html"><span className="skyblue" /></a>
                          <a href="shop.html"><span className="red" /></a>
                          <a href="shop.html"><span className="yellow" /></a>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-3">
                      <div className="product-widget pt-50">
                        <h3 className="widget-title mb-30">Size</h3>
                        <div className="layer-size">
                          <span>3XL</span>
                          <span>L</span>
                          <span>M</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-3">
                      <div className="product-widget pt-50">
                        <h3 className="widget-title mb-30">Filter By Price</h3>
                        <form action="#">
                          <div className="price-filter">
                            <div id="slider-range-2" className="ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content">
                              <div className="ui-slider-range ui-corner-all ui-widget-header" style={{left: '15%', width: '46.4%'}} /><span tabIndex={0} className="ui-slider-handle ui-corner-all ui-state-default" style={{left: '7.2%'}} /><span tabIndex={0} className="ui-slider-handle ui-corner-all ui-state-default" style={{left: '48.8%'}} />
                              <div className="ui-slider-range ui-corner-all ui-widget-header" style={{left: '15%', width: '45%'}} />
                              <div className="ui-slider-range ui-corner-all ui-widget-header" style={{left: '7.2%', width: '41.6%'}} /></div>
                            <div className="filter-form-submit mt-35">
                              <button type="submit">Filter</button>
                              <div className="filter-price d-inline-block pl-20">Price: <input type="button" id="amount-2" defaultValue="$36 - $244" /></div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-3">
                      <div className="product-widget pt-50">
                        <h3 className="widget-title mb-30">Product tags</h3>
                        <div className="tags mb-50">
                          <a href="shop.html">Basketball</a>
                          <a href="shop.html">Handbag</a>
                          <a href="shop.html">Jackets</a>
                          <a href="shop.html">Kids &amp; Young</a>
                          <a href="shop.html">Training Wear</a>
                          <a href="shop.html">Women’s</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* product listing start with xl-3 */}
          <div className="shop-page-product pt-50 pb-100">
            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12">
                <div className="tab-content" id="nav-tabContent">
                  <div className="tab-pane fade show active" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                    <div className="row">
                      <div className="col-xl-3">
                        <div className="product product-3">
                          <div className="product__thumb">
                            <a href="single.html">
                              <img className="product-primary" src="./assets/img/product/17.jpg" alt="product_image" />
                              <img className="product-secondary" src="./assets/img/product/17-2.jpg" alt="product_image" />
                            </a>
                            
                            <div className="product-info mb-10">
                              <div className="product_category">
                                <span>Shoes, Clothing</span>
                              </div>
                              <div className="product_rating">
                                <a href="#"><i className="fal fa-star start-color" /></a>
                                <a href="#"><i className="fal fa-star start-color" /></a>
                                <a href="#"><i className="fal fa-star start-color" /></a>
                                <a href="#"><i className="fal fa-star" /></a>
                                <a href="#"><i className="fal fa-star" /></a>
                              </div>
                            </div>
                            <div className="product__name">
                              <h4><a href="single.html"> Zoom Prestige</a></h4>
                              <div className="pro-price">
                                <p className="p-absoulute pr-1"><span>$</span>680.00 - <span>$</span>680.00</p>
                                <a className="p-absoulute pr-2" href="#">add to cart</a>
                              </div>
                            </div>
                            <div className="product__action">
                              <div className="inner__action">
                                <div className="wishlist">
                                  <a href="#"><i className="fal fa-heart" /></a>
                                </div>
                                <div className="view">
                                  <a href="javascript:void(0)"><i className="fal fa-eye" /></a>
                                </div>
                                <div className="layer">
                                  <a href="#"><i className="fal fa-layer-group" /></a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>                                  
              </div>
            </div>
          </div>
          {/* product display end */}
        </div>
      </div>
    </div>
  </div>
  {/* shop page end */}
  {/* search area  */}
  <div className="search_area">
    <div className="search_close">
      <span><i className="fal fa-times" /></span>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-xl-12 col-lg-12 col-md-12">
          <div className="search-wrapper text-center">
            <h2>search</h2>
            <div className="search-filtering pt-30">
              <div className="search_tab">
                <ul className="nav nav-tabs justify-content-center mb-55" id="fffd" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="home-tab2df" data-bs-toggle="tab" data-bs-target="#home2" type="button" role="tab" aria-selected="true">All categories</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="profile-tab2df" data-bs-toggle="tab" data-bs-target="#profile2" type="button" role="tab" aria-selected="false">Basketball</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" data-bs-toggle="tab" data-bs-target="#contact2" type="button" role="tab" aria-selected="false">Handbag</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="sportswear-tabdf" data-bs-toggle="tab" data-bs-target="#sportswear" type="button" role="tab" aria-selected="false">Sportswear</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="contact3-tabdfd" data-bs-toggle="tab" data-bs-target="#contact3" type="button" role="tab" aria-selected="false">Youth</button>
                  </li>
                </ul>
                <div className="tab-content" id="myTabContent2">
                  <div className="tab-pane fade show active" id="home2df" role="tabpanel">
                  </div>
                  <div className="tab-pane fade" id="profile2dfdf" role="tabpanel">
                  </div>
                  <div className="tab-pane fade" id="contact2dfdf" role="tabpanel">
                  </div>
                  <div className="tab-pane fade" id="sportsweardfdf" role="tabpanel">
                  </div>
                </div>
              </div>
            </div>
            <div className="main_search">
              <form action="#">
                <input type="text" name="search" placeholder="search products" />
                <button className="m-search"><i className="fal fa-search d-sm-none d-md-block" /></button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* popup area start */}
  <div className="overlay" />
  <div className="product-popup">
    <div className="view-background">
      <div className="row">
        <div className="col-xl-5 col-lg-5 col-md-5">
          <div className="quickview">
            <div className="quickview__thumb">
              <img src="./assets/img/quick_view/25.jpg" alt="" />
            </div>
          </div>
        </div>
        <div className="col-xl-7 col-lg-7 col-md-7">
          <div className="viewcontent">
            <div className="viewcontent__header">
              <a href="single.html">  <h2>Brown Leather Bags</h2>
              </a>                     <a className="view_close product-p-close" href="javascript:void(0)"><i className="fal fa-times-circle" /></a>
            </div>
            <div className="viewcontent__rating">
              <i className="fal fa-star ratingcolor" />
              <i className="fal fa-star ratingcolor" />
              <i className="fal fa-star ratingcolor" />
              <i className="fal fa-star" />
            </div>
            <div className="viewcontent__price">
              <h4><span>$</span>99.00</h4>
            </div>
            <div className="viewcontent__stock">
              <h4>Available :<span> In stock</span></h4>
            </div>
            <div className="viewcontent__details">
              <p>Anlor sit amet, consectetur adipiscing elit. Fusce condimentum est lacus, non pretium risus lacinia vel. Fusce eget turpis orci.</p>
            </div>
            <div className="viewcontent__action">
              <span>Qty</span>
              <span><input type="number" placeholder={1} /></span>
              <span><a href="#">add to cart</a></span>
              <span><i className="fal fa-heart" /></span>
              <span><i className="fal fa-info-circle" /></span>
            </div>
            <div className="viewcontent__footer">
              <ul>
                <li>Category:</li>
                <li>SKU:</li>
                <li>Brand:</li>
              </ul>
              <ul>
                <li>Watches</li>
                <li>2584-MK63</li>
                <li>Brenda</li>  
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* product popup */}
  {/* popup area end */}
</div>
   
  </>
    )
}