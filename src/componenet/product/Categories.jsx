import React from "react";

export default function Category({ category_data }) {
  return (
    <div className="col-xl-3 col-lg-4 col-md-12">
      <div className="sidebar">
        <div className="product-widget">
          <h3 className="widget-title mb-30">Product categories</h3>
          <ul className="product-categories">
            {category_data.length
              ? category_data.map((item, idx) => (
                  <li>
                    <a href="shop.html">
                      {item?.name || "-"} <span>(0)</span>
                    </a>
                  </li>
                ))
              : "no dta found"}
          </ul>
        </div>
        <div className="product-widget pt-50">
          <h3 className="widget-title mb-30">Filter By Price</h3>
          <form action="#">
            <div className="price-filter">
              <div
                id="slider-range"
                className="ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"
              >
                <div
                  className="ui-slider-range ui-corner-all ui-widget-header"
                  style={{ left: "15%", width: "46.4%" }}
                />
                <span
                  tabIndex={0}
                  className="ui-slider-handle ui-corner-all ui-state-default"
                  style={{ left: "7.2%" }}
                />
                <span
                  tabIndex={0}
                  className="ui-slider-handle ui-corner-all ui-state-default"
                  style={{ left: "48.8%" }}
                />
                <div
                  className="ui-slider-range ui-corner-all ui-widget-header"
                  style={{ left: "15%", width: "45%" }}
                />
                <div
                  className="ui-slider-range ui-corner-all ui-widget-header"
                  style={{ left: "7.2%", width: "41.6%" }}
                />
              </div>
              <div className="filter-form-submit mt-35">
                <button type="submit">Filter</button>
                <div className="filter-price d-inline-block pl-20">
                  Price:{" "}
                  <input type="button" id="amount" defaultValue="$36 - $244" />
                </div>
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
            <a href="shop.html">
              <span className="blue" />
            </a>
            <a href="shop.html">
              <span className="gray" />
            </a>
            <a href="shop.html">
              <span className="skyblue" />
            </a>
            <a href="shop.html">
              <span className="red" />
            </a>
            <a href="shop.html">
              <span className="yellow" />
            </a>
          </div>
        </div>
        <div className="product_list_widget">
          <h3 className="widget-title mb-30 pt-50">Top rated</h3>
          <div className="item-widget">
            <div className="img-left">
              <a href="single.html">
                <img src="./assets/img/product/101.jpg" alt="product-meta" />
              </a>
            </div>
            <div className="product-meta">
              <a href="single.html">
                <h4 className="sm-title">Arsenal Home Jersey</h4>
              </a>
              <span>$55.00</span>
            </div>
          </div>
          <div className="item-widget">
            <div className="img-left">
              <a href="single.html">
                <img
                  src="./assets/img/product/quick-view.png"
                  alt="product-meta"
                />
              </a>
            </div>
            <div className="product-meta">
              <a href="single.html">
                <h4 className="sm-title">Arsenal Home Jersey</h4>
              </a>
              <span>$55.00</span>
            </div>
          </div>
          <div className="item-widget">
            <div className="img-left">
              <a href="single.html">
                <img src="./assets/img/product/101.jpg" alt="product-meta" />
              </a>
            </div>
            <div className="product-meta">
              <a href="single.html">
                <h4 className="sm-title">Arsenal Home Jersey</h4>
              </a>
              <span>$55.00</span>
            </div>
          </div>
          <div className="item-widget">
            <div className="img-left">
              <a href="single.html">
                <img
                  src="./assets/img/product/quick-view.png"
                  alt="product-meta"
                />
              </a>
            </div>
            <div className="product-meta">
              <a href="single.html">
                <h4 className="sm-title">Arsenal Home Jersey</h4>
              </a>
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
  );
}
