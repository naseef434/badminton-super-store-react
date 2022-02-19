import React from "react";
import shop from "./shop-1.jpg";
import { Link } from "react-router-dom";
var img = "assets/img/slider/shop-1.jpg";
export default function BreadCrumb({ offerBanner }) {
  return (
    <div className="row">
      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
        {offerBanner?.data?.map((item, idx) => (
          <img src={item.image} />
        ))}
      </div>
    </div>
  );
}
