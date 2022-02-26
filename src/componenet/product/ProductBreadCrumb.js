import React from "react";

export default function ProductBreadCrumb({singleProduct}) {
  console.log({singleProduct:singleProduct});
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <a href="#">Home</a>
        </li>
        <li className="breadcrumb-item">
          <a href="#">Shope</a>
        </li>
        <li className="breadcrumb-item">
         <a href="#">{singleProduct?.category?.name} </a>
        </li>
        <li className="breadcrumb-item">
          <a href="#">{singleProduct?.brand?.name}</a>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
        <a href="#">{singleProduct?.category?.short_desc}</a>
        </li>
      </ol>
    </nav>
  );
}
