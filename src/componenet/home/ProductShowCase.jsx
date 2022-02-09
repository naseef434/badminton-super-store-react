import React from "react";
import img from "./s-rembg-view.png";
export default function ProductShowCase({ showCase }) {
  
  return (
    <div>
      <div class="show-case lightblue pt-125">
        <div class="container">
          <div class="row">
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <div class="section-wrapper text-center mb-35">
               

                {showCase?.map((item) => (
                  <h2 class="section-title text-white">{item.title1}</h2>
                )) }
              </div>
            </div>
            <div class="case-info text-center">
              <span class="offer-text d-none d-lg-block">
                hot deal<i class="far fa-stars"></i>
              </span>
              {showCase?.map((item) => (
                <h2 class="back1-text d-none d-lg-block">{item.title2}</h2>
              ))}

              {/* <h2 class="back-text d-none d-lg-block">Deals</h2> */}

              {showCase?.map((item) => (
                <a href="shop.html">
                  <img class="banar-product" src={item.image} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
