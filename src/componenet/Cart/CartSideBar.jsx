import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { urlGateWay } from "../../services/service";
import * as serviceEndPoint from "../../services/serviceEndPoint";
import { toast } from "react-toastify";
import AppContext from "../../AppContext";

function CartSideBar({ closeModel }) {
  const { cartCount, setCartCount } = useContext(AppContext);

  const [cart, setCart] = useState({});
  //get cart items
  useEffect(async () => {
    const token = localStorage.getItem("token");
    if (token) {
      const response = await urlGateWay.get(`${serviceEndPoint.cart.getCart}`);
      setCart(response?.data);
    }
  }, []);

  //delete cart items
  const deleteCartItem = async (itemId) => {
    let body = {
      item: itemId,
    };
    const response = await urlGateWay.post(
      serviceEndPoint.cart.deleteCartItem,
      body
    );
    setCart(response?.data);
    setCartCount(response?.data?.item_count ?? cartCount);
    toast.error("Removed an item from cart!");
  };
  const hello = () => {
    alert("hello");
  };
  return (
    <div>
      <div className="outer" onClick={hello}></div>
      {/* cart area start  */}
      <div className="cart__sidebar open-cart">
        <div className="container">
          <div className="cart__content">
            <div className="cart-text">
              <h3 className="mb-40">Shopping cart</h3>
              {cart?.items?.map((itm) => (
                <div className="add_cart_product">
                  <div className="add_cart_product__thumb">
                    {itm.thumbnail === "null" ? (
                      <img src="./assets/img/product/17.jpg" alt="" />
                    ) : (
                      <img src={itm.thumbnail} />
                    )}
                  </div>
                  <div className="add_cart_product__content">
                    <h5>
                      <a href="shop.html">{itm.product}</a>
                    </h5>
                    <p>
                      {itm.quantity} × {itm.price} - AED
                    </p>
                    <button
                      className="cart_close"
                      onClick={() => {
                        deleteCartItem(itm.id);
                      }}
                    >
                      <i className="fal fa-times" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="cart-icon">
              <i
                className="fal fa-times"
                onClick={() => {
                  closeModel(false);
                }}
              />
            </div>
            <div className="cart-bottom">
              <div className="cart-bottom__text">
                <span>Subtotal:</span>
                <span className="end">{cart?.total}- AED</span>
                <Link to="/cart">view cart</Link>
                <a href="checkout.html">checkout</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="cart-offcanvas-overlay open-cart-overlay"
        onClick={() => {
          closeModel(false);
        }}
      />
      {/* cart area end  */}
    </div>
  );
}

export default CartSideBar;
