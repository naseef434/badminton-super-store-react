import React from 'react'

function CarttSideBar() {
    return (
        <div>
         <div className="cart__sidebar">
    <div className="container">
      <div className="cart__content">
        <div className="cart-text">
          <h3 className="mb-40">Shopping cart</h3>
          <div className="add_cart_product">
            <div className="add_cart_product__thumb">
              <img src="./assets/img/product/29-3.jpg" alt="" />
            </div>
            <div className="add_cart_product__content">
              <h5><a href="shop.html">Running 3-Stripes</a></h5>
              <p>1 × $66.00</p>
              <button className="cart_close"><i className="fal fa-times" /></button>
            </div>
          </div>
          <div className="add_cart_product">
            <div className="add_cart_product__thumb">
              <img src="./assets/img/product/17.jpg" alt="" />
            </div>
            <div className="add_cart_product__content">
              <h5><a href="shop.html">Buddy non Stripes</a></h5>
              <p>1 × $40.00</p>
              <button className="cart_close"><i className="fal fa-times" /></button>
            </div>
          </div>
        </div>
        <div className="cart-icon">
          <i className="fal fa-times" />
        </div>
        <div className="cart-bottom">
          <div className="cart-bottom__text">
            <span>Subtotal:</span>
            <span className="end">$121.00</span>
            <a href="cart.html">view cart</a>
            <a href="checkout.html">checkout</a>
          </div>
        </div>
      </div>
    </div>
  </div>
        </div>
    )
}

export default CarttSideBar
