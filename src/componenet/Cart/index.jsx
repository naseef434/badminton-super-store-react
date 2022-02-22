import React, { useEffect, useState } from "react";
import { urlGateWay } from "../../services/service";
import * as serviceEndPoint from "../../services/serviceEndPoint";
import Cart from "../../componenet/Cart/Cart";
import { toast } from "react-toastify";
export default function Index() {
  const [cart, setCart] = useState({});
//get cart items
  useEffect(async () => {
    const response = await urlGateWay.get(`${serviceEndPoint.cart.getCart}`);
    setCart(response?.data);
  }, []);
  console.log({ cart: cart });


  //delete cart items
  const deleteCartItem = async(itemId) =>{
    let body = {
      item: itemId,
     
    };
    const response = await urlGateWay.post(
      serviceEndPoint.cart.deleteCartItem,
      body);
    setCart(response?.data);
    toast.success("Deleted an item from cart!");
    
  } 
  return (
    <div>
      <Cart cart_item={cart} deleteCartItem={deleteCartItem} />
    </div>
  );
}
