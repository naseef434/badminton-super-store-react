import React, { Suspense, useEffect, useState, createContext } from "react";
import { Outlet } from "react-router-dom";
import { PuffLoader } from "react-spinners";
import { css } from "@emotion/react";
import Navbar from "../componenet/navbar";
import Footer from "../componenet/footer/Footer";
import { v4 as uuidv4 } from "uuid";
import { urlGateWay } from "../services/service";
import * as serviceEndPoint from "../services/serviceEndPoint";
import AppContext from "../AppContext";
import CustomNavbar from "../componenet/navbar/CustomNavbar";

const override = css`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  border-color: red;
`;

function PublicRoute() {
  const [cartCount, setCartCount] = useState(0);
  useEffect(async () => {
    const get_uuuId = localStorage.getItem("uuid");
    const token = localStorage.getItem("token");

    if (!get_uuuId || !token) {
      //setting uuid
      const uuid = uuidv4();
      const response = await urlGateWay.post(
        serviceEndPoint.cart.getAccessToken,
        { customer_id: uuid }
      );
      localStorage.setItem("token", response?.data?.access);
      localStorage.setItem("uuid", uuid);
    } else {
      const response = await urlGateWay.get(`${serviceEndPoint.cart.getCart}`);
      setCartCount(response?.data?.item_count);
    }
  }, []);

  return (
    <div>
      <AppContext.Provider value={{cartCount, setCartCount}}>
       
        {/* <Navbar /> */}
        <CustomNavbar />
        <Suspense
          fallback={
            <PuffLoader
              color={"blue"}
              css={override}
              loading={true}
              size={150}
            />
          }
        >
          <Outlet />
        </Suspense>
        <Footer />
      </AppContext.Provider>
    </div>
  );
}

export default PublicRoute;
