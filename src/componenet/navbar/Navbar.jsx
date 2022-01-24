import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import CartSideBar from "../Cart/CartSideBar";

export default function Navbar() {
  const [openCartModel, setCartOpen] = useState(false);
  return (
    <>
      {openCartModel && <CartSideBar closeModel={setCartOpen} />}
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
        <div className="gota_bottom position-relative">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-xl-2 col-lg-2 col-md-4 col-sm-4 d-none d-sm-block">
                <div className="gota_search">
                  {/* <form className="search_form">
                    <button className="search_action">
                      <i className="fal fa-search d-sm-none d-md-block" />
                    </button>
                    <input type="text" placeholder="search" />
                  </form> */}
                  <img src="./assets/img/logo.png" alt="" height={"76px"} />
                </div>
              </div>
              <div className="col-xl-8 col-lg-8 col-md-4 col-sm-4">
                <div className="sidemenu sidemenu-1 d-lg-none d-md-block">
                  <a className="open" href="#">
                    <i className="fal fa-bars" />
                  </a>
                </div>
                <div className="main-menu">
                  <nav id="mobile-menu" style={{ display: "block" }}>
                    <ul>
                      <li>
                        <Link to="/">Home </Link>
                        {/* <ul className="sub-menu">
                          <li>
                            <a href="index.html">home shop 1</a>
                          </li>
                        </ul> */}
                      </li>
                      <li className="position-static menu-item-has-children">
                        <Link to="#">Shop</Link>
                        <ul
                          className="mega_menu"
                          data-background="./assets/img/mega-menu/product.jpg"
                          style={{
                            backgroundImage:
                              'url("./assets/img/mega-menu/product.jpg")',
                          }}
                        >
                          <li>
                            <h4 className="mega_title">Badminton</h4>
                            <ul className="mega_item">
                              <li>
                                <a href="shop.html">Racket</a>
                              </li>
                              <li>
                                <a href="shop.html">Bags</a>
                              </li>
                              <li>
                                <a href="shop.html">Accessories</a>
                              </li>
                              <li>
                                <a href="shop.html">Other</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <h4 className="mega_title">Football</h4>
                            <ul className="mega_item">
                              <li>
                                <a href="shop-sm.html">ball</a>
                              </li>
                              <li>
                                <a href="shop-sm.html">Jersey</a>
                              </li>
                              <li>
                                <a href="shop-sm.html">accessories</a>
                              </li>
                              <li>
                                <a href="shop-sm.html">other</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <h4 className="mega_title">Cricket</h4>
                            <ul className="mega_item">
                              <li>
                                <a href="single-right.html">bat</a>
                              </li>
                              <li>
                                <a href="single-right.html">ball</a>
                              </li>
                              <li>
                                <a href="single-right.html">bad</a>
                              </li>
                              <li>
                                <a href="single-right.html">helmet</a>
                              </li>
                              <li>
                                <a href="single-right.html">accessories</a>
                              </li>
                              <li>
                                <a href="single-right.html">other</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <h4 className="mega_title">SWimming</h4>
                            <ul className="mega_item">
                              <li>
                                <a href="single-right.html">googles</a>
                              </li>
                              <li>
                                <a href="single-right.html">swim suite</a>
                              </li>
                              <li>
                                <a href="single-right.html">accessorie</a>
                              </li>
                              <li>
                                <a href="single-right.html">others</a>
                              </li>
                            </ul>
                          </li>
                          <li></li>
                        </ul>
                      </li>
                      <li className="position-static menu-item-has-children">
                        <Link to="#">Features</Link>
                        <ul className="mega_menu_2">
                          <li
                            style={{
                              backgroundImage:
                                'url("./assets/img/mega-menu/product2.jpg")',
                            }}
                          >
                            <h4 className="mega_title_2">Basketball</h4>
                            <ul className="mega_item_2">
                              <li>
                                <a href="shop.html">NikeCourts Air Zoom</a>
                              </li>
                            </ul>
                          </li>

                          <li
                            data-background="./assets/img/mega-menu/product3.jpg"
                            style={{
                              backgroundImage:
                                'url("./assets/img/mega-menu/product3.jpg")',
                            }}
                          >
                            <h4 className="mega_title_2">Helmet for Women’s</h4>
                            <ul className="mega_item_2">
                              <li>
                                <a href="shop.html">WordPress Pennant</a>
                              </li>
                            </ul>
                          </li>
                          <li
                            data-background="./assets/img/mega-menu/product4.jpg"
                            style={{
                              backgroundImage:
                                'url("./assets/img/mega-menu/product4.jpg")',
                            }}
                          >
                            <h4 className="mega_title_2">Basketball</h4>
                            <ul className="mega_item_2">
                              <li>
                                <a href="shop.html">NikeCourts Air Zoom</a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      {/* <li>
                        <Link className="d-none d-xl-block" to="/">
                          <img
                            className="pl-50 pr-50"
                            src="./assets/img/engage-logo.png"
                            alt=""
                          />
                        </Link>
                      </li> */}
                      <li>
                        <Link to="/service">Service</Link>
                      </li>
                      <li>
                        <Link to="/events">Events</Link>
                      </li>

                      <li>
                        <Link to="/about">About</Link>
                      </li>

                      <li>
                        <Link to="/contact">Contact Us </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 col-md-4 col-sm-4">
                <div className="gota_cart gotat_cart_1 text-end">
                  <a
                    onClick={() => {
                      setCartOpen(true);
                    }}
                  >
                    <i className="fal fa-shopping-cart" />
                    My Bag<span className="counter"> (2)</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div>
        <div className="fix">
          <div className="side-info ">
            <button className="side-info-close">
              <i className="fal fa-times" />
            </button>
            <div className="side-info-content">
              <div className="mobile-menu " />
              <div className="contact-infos mb-30">
                <div className="contact-list mb-30">
                  <h4>Office Address</h4>
                  <p>123/A, Miranda City Likaoli Prikano, Dope</p>
                </div>
                <div className="contact-list mb-30">
                  <h4>Phone Number</h4>
                  <p>+0989 7876 9865 9</p>
                  <p>+(090) 8765 86543 85</p>
                </div>
                <div className="contact-list mb-30">
                  <h4>Email Address</h4>
                  <p>info@example.com</p>
                  <p>example.mail@hum.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="offcanvas-overlay " />
      </div>
    </>
  );
}
