import React from "react";

export default function ProductFilter(){
    return(
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
                     
                      <a href="shop.html">asdas</a>
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
    )
}