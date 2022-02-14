import React, { useEffect, useState } from 'react'
import * as serviceEndPoint from "../../services/serviceEndPoint";
import { urlGateWay } from '../../services/service';
import CheckOut from './CheckOut';

export default function Index() {
    const [cart, setCart] = useState({});

    useEffect(async () => {
      const response = await urlGateWay.get(`${serviceEndPoint.cart.getCart}`);
      setCart(response?.data);
    }, []);
    console.log({ cartsss: cart });
  return (
    <div>
        <CheckOut cart={cart} />
    </div>
  )
}
