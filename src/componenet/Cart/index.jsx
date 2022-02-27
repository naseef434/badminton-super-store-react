import React, { useContext, useEffect, useState } from "react";
import { urlGateWay } from "../../services/service";
import * as serviceEndPoint from "../../services/serviceEndPoint";
import Cart from "../../componenet/Cart/Cart";
import { toast } from "react-toastify";
import AppContext from "../../AppContext";
export default function Index() {
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
 
  


 
  const updateCart = ()=>{
    alert("update cart")
  }
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
    toast.error("Removed item from cart!");
  };
  return (
    <div>
      <Cart cart_item={cart} deleteCartItem={deleteCartItem} updateCart={updateCart}  />
    </div>
  );
}
