import React from "react";
import img from './test.jpg';
var img1 = "../assets/img/product/test.jpg";

export default function ProductImagesView({ product }) {
  // product.images?.map((item) => {
  //   console.log(item);
  // });
console.log({product})
  return (
    
    <div class="col-xl-6 col-lg-6 col-md-12">
    
      <div class="row">
        <div class="col-xl-2 col-lg-2 col-md-2">
          <div class="single_product_tab">
            <div class="single_prodct">
              <ul
                class="nav nav-tabs justify-content-center mb-55"
                id="dfde"
                role="tablist"
              > {product?.images?.map((image,inx)=>(
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link active"
                    id="home-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#homde"
                    type="button"
                    role="tab"
                    aria-selected="true"
                  >
                    <img src={image} alt="" />
                  </button>
                </li>
              ))}
                
                
              </ul>
            </div>
          </div>
        </div>
        <div class="col-xl-10 col-lg-10 col-md-10">
          <div class="single_preview_product">
            <div class="single-popup-view">
              <a class="popup-image" href={img}>
                <i class="fal fa-search"></i>
              </a>
            </div>
            <div class="tab-content" id="myTabefContent">
              <div class="tab-pane fade show active" id="homde" role="tabpanel">
                <div class="full-view">
                  <img src={img} alt="" />
                </div>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
