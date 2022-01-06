import React from "react";
import brand1 from "./brand-1.png"
import brand2 from "./brand-2.png"
import brand3 from "./brand-3.png"
export default function Brand() {
  return (
    <div>
      {/* brand area start */}
      <div className="brand-area service_brand">
        <div className="container">
          <div className="service__wrapper text-center mb-100">
            <h2>companies we've worked with</h2>
          </div>
          <div className="row">
            <div className="col-xl-11 col-lg-11 offset-xl-1">
              <div className="brand-active swiper-container">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="brand-item">
                      <img
                        src={brand1}
                        alt="brand_logo"
                      />
                    </div>
                    
                  </div>
                  <div class="swiper-slide">
                                <div class="brand-item">
                                <img
                        src={brand1}
                        alt="brand_logo"
                      />
                                </div>
                            </div>
            
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* brand area end */}
    </div>
  );
}
