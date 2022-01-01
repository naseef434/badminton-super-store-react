import React, { useEffect, useState } from "react";
import { urlGateWay } from "../../services/service";
import * as serviceEndPoint from "../../services/serviceEndPoint";
import Cart from "../../componenet/Cart/Cart";

export default function Index() {
  const [cart, setCart] = useState({});

  useEffect(async () => {
    const response = await urlGateWay.get(`${serviceEndPoint.cart.getCart}`);
    setCart(response?.data);
  }, []);
  console.log({ cart: cart });

  return (
    <div>
      <Cart cart_item={cart} />
    </div>
  );
}
