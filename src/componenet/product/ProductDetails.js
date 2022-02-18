import React from "react";

export default function ProductDetails({ productdata, addToCart }) {
  console.log(productdata);
  return (
    <div className="col-xl-6 col-lg-6 col-md-12">
      <div className="single_preview_content pl-30">
        <h2 className="title-5 edit-title border-bottom-0">
          {productdata.name}
        </h2>
        <div className="s-product-review">
          <span>
            <i className="far fa-star start-color"></i>
          </span>
          <span>
            <i className="far fa-star start-color"></i>
          </span>
          <span>
            <i className="far fa-star start-color"></i>
          </span>
          <span>
            <i className="far fa-star start-color"></i>
          </span>
          <span>
            <i className="far fa-star"></i>
          </span>
          <span className="pl-left">(1 customer review)</span>
        </div>
        <div className="s-price pt-30 mb-30">
        <span style={{textDecoration: "line-through"}}>{productdata.price}  AED   </span>  &nbsp;&nbsp;&nbsp;&nbsp;  <span>{productdata.sale_price} - AED  </span>
        </div>
        <div className="viewcontent__stock">
                  <h4>
                    Available :<span> {productdata.quantity} In stock</span>
                  </h4>
                </div>
        <div className="s-des">
          <p>{productdata.long_desc}</p>
        </div>
        {/* <div class="product-widget pt-50">
          <h3 class="widget-title mb-30">Size</h3>
          <div class="layer-size">
            <a href="shop.html">
              <span>3XL</span>
            </a>
          </div>
        </div>
        <div class="product-widget pt-50">
          <h3 class="widget-title mb-30">Color Options</h3>
          <div class="colors-layer">
            <a href="shop.html">
              <span class="blue"></span>
            </a>
          </div>
        </div> */}
        <div className="viewcontent__action single_action pt-30">
          <span>
            <input type="number" placeholder="1" />
          </span>
          <span>
            <a href="javascript:void(0)" onClick={() => addToCart(productdata)}>
              + add to cart
            </a>
          </span>
          <span>
            <i className="fal fa-heart"></i>
          </span>
          <span>
            <i className="fas fa-compress"></i>
          </span>
        </div>
        <div className="viewcontent__footer border-top-0 border-bottom pb-30">
          <ul>
            <li>Category:</li>
            <li>SKU:</li>
          </ul>
          <ul>
            {/* <li>{productdata?.category?.name}</li>
            <li>{productdata.brand.name}</li> */}
          </ul>
        </div>
        <div className="social__media f-social-media mb-30 pt-15">
          <h3 className="f-title edit-f-title">FOLLOW US ON</h3>
          <a href="#">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#">
            <i className="fab fa-google-plus-g"></i>
          </a>
          <a href="#">
            <i className="fab fa-dribbble"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
