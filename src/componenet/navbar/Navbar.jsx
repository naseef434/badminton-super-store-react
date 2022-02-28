import React, { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import CartSideBar from "../Cart/CartSideBar";
import AppContext from "../../AppContext"
export default function Navbar({ shopMenu }) {
  const {cartCount} = useContext(AppContext);

  const [openCartModel, setCartOpen] = useState(false);
  return (
    <>
      {openCartModel && <CartSideBar closeModel={setCartOpen}  />}
      <header className="header-area">
        <div className="gota_top bg-soft d-none d-sm-block">
          <div className="container-fluid">
            <div class="row">
              <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                <div class="gota_lang">
                  <ul>
                    <li>
                      <a href="#">
                        AED<i class="fal fa-chevron-down"></i>
                      </a>
                      <ul class="additional_dropdown">
                        <li>
                          <a href="#">AED</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">
                        english<i class="fal fa-chevron-down"></i>
                      </a>
                      <ul class="additional_dropdown">
                        <li>
                          <a href="#">Arabic</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 text-center">
                <div class="gota_lang">
                  <ul>
                    <li>
                      <Link to="/">
                        <h4 style={{ color: "white" }}>
                          {" "}
                          ENGAGE{" "}
                          <span style={{ color: "#ed1b33" }}>SPORTS</span>
                        </h4>
                        <h3></h3>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-xl-3  col-lg-6 col-md-6 col-sm-6 text-end">
                <div class="gota_right">
                  <ul>
                    <li>
                      <a href="login.html">Book &amp; Play</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
       
      </header>
      <div>
       
      
      </div>
    </>
  );
}
