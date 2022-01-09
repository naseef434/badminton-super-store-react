import React from "react";
import shipping from "./shipping.jpg"
import parallex from "./parallex.jpg";
export default function Shipping() {
  return (
    <div>
      {/* free shiping area start */}
      <div
        className="free__shiping"
        style={{ background: `url(${shipping})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12">
              <div className="shiping text-center">
                <div className="shiping__thumb">
                  {/* <img src="" alt=""> */}
                  <span />
                </div>
                <div className="shiping__content">
                  <h2 className="title-6 pb-30">
                    All Orders Are Free Shipping
                  </h2>
                  <p>
                    Donec vehicula cursus vestibulum lectus, sit eros integer
                    varius cum turpis et quam congue
                    <br /> accumsan ac bibendum ac in erat. Donec posuere
                    consectetuer volutpat rutrum ac sollicitudin quam quisque at
                    interdum dignissim fringilla
                    <br /> elit risus lorem condimentum eros mollis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* free shiping area end */}
    </div>
  );
}
