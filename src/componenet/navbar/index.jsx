import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import * as serviceEndPoint from "../../services/serviceEndPoint";
import { urlGateWay } from "../../services/service";
export default function Index() {
    
    const [shop, setshop] = useState([])
    useEffect(async () => {
    try {
      const response = await urlGateWay.get(
        `${serviceEndPoint.sportsEndpoints.getNavbarItems}`
      );
      setshop(response?.data)
      
    } catch (error) {
      console.log("navbar api rice an error ", error);
    }
  }, []);

  const [cart, setCart] = useState({});

  const myBag = (async () => {
    const response = await urlGateWay.get(`${serviceEndPoint.cart.getCart}`);
    setCart(response?.data);
  }, []);
  console.log({ cart: cart });

  return (
    <div>
      <Navbar  shopMenu = {shop} myBag={myBag}/>
    </div>
  );
}
