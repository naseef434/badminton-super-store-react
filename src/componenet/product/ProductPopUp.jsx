import React, { useState } from "react";
import { Link } from "react-router-dom";
var img = "assets/img/product/test.jpg";

export default function ProductPopUp({ closeModel, item }) {
  return (
    <div>
      <div className="overlay show-popup" />
      <div className="product-popup show-popup">
        <div className="view-background">
          <div className="row">
            <div className="col-xl-5 col-lg-5 col-md-5">
              <div className="quickview">
                <div className="quickview__thumb">
                  <img src={img} alt="" />
                </div>
              </div>
            </div>
            <div className="col-xl-7 col-lg-7 col-md-7">
              <div className="viewcontent">
                <div className="viewcontent__header">
                  <Link to={`/product_view/${item.id}`}>
                    <h2> {item.name}</h2>
                  </Link>

                  <a
                    className="view_close product-p-close"
                    onClick={() => {
                      closeModel(false);
                    }}
                    href="javascript:void(0)"
                  >
                    <i className="fal fa-times-circle" />
                  </a>
                </div>
                <div className="viewcontent__rating">
                  <i className="fal fa-star ratingcolor" />
                  <i className="fal fa-star ratingcolor" />
                  <i className="fal fa-star ratingcolor" />
                  <i className="fal fa-star" />
                </div>
                <div className="viewcontent__price">
                  <h4>
                    <span>AED - </span>
                    {item.sale_price}
                  </h4>
                </div>
                <div className="viewcontent__stock">
                  <h4>
                    Available :<span> In stock</span>
                  </h4>
                </div>
                <div className="viewcontent__details">
                  <p>{item.long_desc}</p>
                </div>
                <div className="viewcontent__action">
                  <span>Qty</span>
                  <span>
                    <input type="number" placeholder={1} />
                  </span>
                  <span>
                    <a href="#">add to cart</a>
                  </span>
                  <span>
                    <i className="fal fa-heart" />
                  </span>
                  <span>
                    <i className="fal fa-info-circle" />
                  </span>
                </div>
                <div className="viewcontent__footer">
                  <ul>
                    <li>Category:</li>
                    <li>SKU:</li>
                    <li>Brand:</li>
                  </ul>
                  <ul>
                    <li>{item.category}</li>
                    <li>2584-MK63</li>
                    <li>{item.brand}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
