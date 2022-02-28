import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import * as serviceEndPoint from "../../services/serviceEndPoint";
import { urlGateWay } from "../../services/service";
import { v4 as uuidv4 } from "uuid";
import CustomNavbar from "./CustomNavbar";
export default function Index(props) {
  // const [uuId, setuuId] = useState({
  //   customer_id: "",
  // });
    const [shop, setshop] = useState([])
    // const [cart, setCart] = useState({});
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

  

  // useEffect(async () => {
  //   const get_uuuId = localStorage.getItem("uuid");
  //   if (!get_uuuId) {
  //     //setting uuid
  //     const uuid = uuidv4();
  //     localStorage.setItem("uuid", uuid);

  //     setuuId({ customer_id: uuid });
  //   } else {
  //     setuuId({ customer_id: get_uuuId });
  //   }
  //   const response = await urlGateWay.get(`${serviceEndPoint.cart.getCart}`);
  //   setCart(response?.data);
  // }, [cart]);
  // console.log({ cart: cart });

  return (
    <div>
      {/* <Navbar  shopMenu = {shop} myBag={props.cartCount}/> */}
      <CustomNavbar shopMenu = {shop} />
    </div>
  );
}
