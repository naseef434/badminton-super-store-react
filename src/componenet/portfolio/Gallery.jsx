import React from "react";
import portfolio from "./portfolio.jpg"

export default function Gallery() {
  return (
    <div>
      {/* gallary area start */}
      <div
        className="about__gallary service_page"
        
        style={{ background: `url(${portfolio})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-lg-4 col-md-4 offset-xl-1">
              <div className="service-single">
                <h3 className="mb-30">we are on our way</h3>
                <p className="mb-40">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin{" "}
                  <br /> iaculis luctus leo ut lacinia. Nunc et augue pulvinar,
                  luctus <br /> mi non, sagittis odio. Phasellus congue sem
                  nulla, non <br /> sodales orci malesuada vel. Aliquam posuere
                  mi eros, at <br /> condimentum elit feugiat vel.
                </p>
                <a href="service.html">read more</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* gallary area end */}
    </div>
  );
}
