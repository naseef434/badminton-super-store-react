import React, { useState } from "react";

export default function ProductImagesView({ product }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  console.log({ productsingle: product });
  // console.log(randomstring);
  const getDatabs = (item) => {
    setSelectedIndex(item);
  };

  return (
    <div className="col-xl-6 col-lg-6 col-md-12">
      <div className="row">
        <div className="col-xl-2 col-lg-2 col-md-2">
          <div className="single_product_tab">
            <div className="single_prodct">
              <ul
                className="nav nav-tabs justify-content-center mb-55"
                id="dfde"
                role="tablist"
              >
                {product.images?.map((item, idx) => (
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="home-tab"
                      data-bs-toggle="tab"
                      type="button"
                      onClick={() => getDatabs(idx)}
                      role="tab"
                      aria-selected="true"
                    >
                      <img src={item} alt="" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="col-xl-10 col-lg-10 col-md-10">
          <div className="single_preview_product">
            <div className="tab-content" id="myTabefContent">
              <div className="tab-pane fade active show" role="tabpanel">
                <div className="full-view">
                  <img
                    src={product?.images && product.images[selectedIndex]}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
