import React from "react";

export default function ProductShowCase() {
  return (
    <div>
      <div class="show-case lightblue pt-125">
        <div class="container">
          <div class="row">
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <div class="section-wrapper text-center mb-35">
                <h4 class="sub-title">Bestseller products</h4>
                <h2 class="section-title text-white">
                  Nike Air Force 1 Sage Low LX
                </h2>
                <p class="d-none d-lg-block">
                  Commodo sociosqu venenatis cras dolor sagittis integer luctus
                  sem primis
                  <br /> eget maecenas sed urna malesuada.
                </p>
              </div>
            </div>
            <div class="case-info text-center">
              <span class="offer-text d-none d-lg-block">
                hot deal<i class="far fa-stars"></i>
              </span>
              <h2 class="back1-text d-none d-lg-block">top</h2>
              <h2 class="back-text d-none d-lg-block">limited</h2>

              <a href="shop.html">
                <img
                  class="banar-product"
                  src="./assets/img/product/slider-test.png"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
