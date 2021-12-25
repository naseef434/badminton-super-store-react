import React from "react";
import { useState } from "react";
import CartSideBar from "../Cart/CartSideBar";


export default function Navbar() {
  const [openCartModel, setCartOpen] = useState(false)
  return (
    <>
      {openCartModel && <CartSideBar closeModel={setCartOpen} />}
      <header className="header-area">
        <div className="gota_top bg-soft d-none d-sm-block">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                <div className="gota_lang">
                  <ul>
                    <li><a href="#">usd<i className="fal fa-chevron-down" /></a>
                      <ul className="additional_dropdown">
                        <li><a href="#">euro</a></li>
                      </ul>
                    </li>
                    <li><a href="#">english<i className="fal fa-chevron-down" /></a>
                      <ul className="additional_dropdown">
                        <li><a href="#">frences</a></li>
                        <li><a href="#">japanes</a></li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-4 offset-xl-5 col-lg-6 col-md-6 col-sm-6 text-end">
                <div className="gota_right">
                  <ul>
                    <li><a href="cart.html">Wishlist</a></li>
                    <li><a href="login.html">Account</a></li>
                    <li><a href="checkout.html">Checkout</a></li>
                    <li><a href="login.html">Login &amp; register</a></li>
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
                  <form className="search_form">
                    <button className="search_action"><i className="fal fa-search d-sm-none d-md-block" /></button>
                    <input type="text" placeholder="search" />
                  </form>
                </div>
              </div>
              <div className="col-xl-8 col-lg-8 col-md-4 col-sm-4">
                <div className="sidemenu sidemenu-1 d-lg-none d-md-block">
                  <a className="open" href="#"><i className="fal fa-bars" /></a>
                </div>
                <div className="main-menu">
                  <nav id="mobile-menu" style={{ display: 'block' }}>
                    <ul>
                      <li className="menu-item-has-children"><a href="index.html">Home </a>
                        <ul className="sub-menu">
                          <li><a href="index.html">home shop 1</a></li>
                          <li><a href="index-2.html">home shop 2</a></li>
                          <li><a href="index-3.html">home shop 3</a></li>
                          <li><a href="index-4.html">home shop 4</a></li>
                        </ul>
                      </li>
                      <li className="position-static menu-item-has-children"><a href="shop.html">Shop</a>
                        <ul className="mega_menu" data-background="./assets/img/mega-menu/product.jpg" style={{ backgroundImage: 'url("./assets/img/mega-menu/product.jpg")' }}>
                          <li>
                            <h4 className="mega_title">Shop Layout</h4>
                            <ul className="mega_item">
                              <li><a href="shop.html">Pagination</a></li>
                              <li><a href="shop.html">Ajax Load More</a></li>
                              <li><a href="shop-3-width.html">Infinite Scroll</a></li>
                              <li><a href="shop-right.html">Sidebar Right</a></li>
                              <li><a href="shop.html">Sidebar Left</a></li>
                            </ul>
                          </li>
                          <li>
                            <h4 className="mega_title">shop pages</h4>
                            <ul className="mega_item">
                              <li><a href="shop-list.html">List View</a></li>
                              <li><a href="shop-sm.html">Small Products</a></li>
                              <li><a href="shop-large.html">Large Products</a></li>
                              <li><a href="shop-3-width.html">Shop — 3 Items</a></li>
                              <li><a href="shop-4.html">Shop — 4 Items</a></li>
                              <li><a href="shop-sm.html">Shop — 5 Items</a></li>
                            </ul>
                          </li>
                          <li>
                            <h4 className="mega_title">Product Layout</h4>
                            <ul className="mega_item">
                              <li><a href="shop-sticky.html">Description Sticky</a></li>
                              <li><a href="shop-carousel.html">Product Carousel</a></li>
                              <li><a href="modern.html"> Gallery Modern</a></li>
                              <li><a href="single.html"> Thumbnail Left</a></li>
                              <li><a href="single-right.html">Thumbnail Right</a></li>
                              <li><a href="single-bottom.html"> Thumbnail Botttom</a></li>
                            </ul>
                          </li>
                          <li>
                          </li>
                        </ul>
                      </li>
                      <li className="position-static menu-item-has-children"><a href="service.html">Features</a>
                        <ul className="mega_menu_2">
                          <li data-background="./assets/img/mega-menu/product2.jpg" style={{ backgroundImage: 'url("./assets/img/mega-menu/product2.jpg")' }}>
                            <h4 className="mega_title_2">Basketball</h4>
                            <ul className="mega_item_2">
                              <li><a href="shop.html">East Hampton Fleece</a></li>
                              <li><a href="shop.html">Faxon Canvas Low</a></li>
                              <li><a href="shop.html">Habitasse dictumst</a></li>
                              <li><a href="shop.html">Kaoreet lobortis</a></li>
                              <li><a href="shop.html">NikeCourt Zoom Prestige</a></li>
                              <li><a href="shop.html">NikeCourts Air Zoom</a></li>
                              <li><a href="shop.html">NikeCourts Air Zoom</a></li>
                            </ul>
                          </li>
                          <li data-background="./assets/img/mega-menu/product3.jpg" style={{ backgroundImage: 'url("./assets/img/mega-menu/product3.jpg")' }}>
                            <h4 className="mega_title_2">Helmet for Women’s</h4>
                            <ul className="mega_item_2">
                              <li><a href="shop.html">Arsenal Home Jersey</a></li>
                              <li><a href="shop.html">Arsenal Home Jersey</a></li>
                              <li><a href="shop.html">Pellentesque posuere</a></li>
                              <li><a href="shop.html">Running 3-Stripes</a></li>
                              <li><a href="shop.html">Running 3-Stripes</a></li>
                              <li><a href="shop.html">V-Neck T-Shirt</a></li>
                              <li><a href="shop.html">WordPress Pennant</a></li>
                            </ul>
                          </li>
                          <li data-background="./assets/img/mega-menu/product4.jpg" style={{ backgroundImage: 'url("./assets/img/mega-menu/product4.jpg")' }}>
                            <h4 className="mega_title_2">Basketball</h4>
                            <ul className="mega_item_2">
                              <li><a href="shop.html">East Hampton Fleece</a></li>
                              <li><a href="shop.html">Faxon Canvas Low</a></li>
                              <li><a href="shop.html">Habitasse dictumst</a></li>
                              <li><a href="shop.html">Kaoreet lobortis</a></li>
                              <li><a href="shop.html">NikeCourt Zoom Prestige</a></li>
                              <li><a href="shop.html">NikeCourts Air Zoom</a></li>
                              <li><a href="shop.html">NikeCourts Air Zoom</a></li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li><a className="d-none d-xl-block" href="index.html">
                        <img className="pl-50 pr-50" src="./assets/img/logo/logo-1.png" alt="" />
                      </a></li>
                      <li className="menu-item-has-children"><a href="blog.html">Blog</a>
                        <ul className="sub-menu">
                          <li><a href="blog-grid.html">Blog Grid</a></li>
                          <li><a href="blog-large.html">Blog large</a></li>
                          <li><a href="blog-left.html">Blog left</a></li>
                          <li><a href="blog-right.html">Blog Right</a></li>
                          <li><a href="blog-no-sidebar.html">Blog no sidebar</a></li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children"><a href="about.html">pages</a>
                        <ul className="sub-menu">
                          <li><a href="about.html">about us</a></li>
                          <li><a href="about-2.html">about us 2</a></li>
                          <li><a href="contact.html">contact</a></li>
                          <li><a href="contact-2.html">contact 2</a></li>
                          <li><a href="single.html">single page</a></li>
                          <li><a href="cart.html">cart page</a></li>
                          <li><a href="checkout.html">checkout page</a></li>
                          <li><a href="404.html">page 404</a></li>
                          <li><a href="service.html">services</a></li>
                          <li><a href="accordion.html">frequently questions</a></li>
                        </ul>
                      </li>
                      <li><a href="service.html">Portfolio</a></li>
                      <li><a href="contact.html">contact us </a></li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 col-md-4 col-sm-4">
                <div className="gota_cart gotat_cart_1 text-end">
                  <a onClick={() => { setCartOpen(true) }}  ><i className="fal fa-shopping-cart" />My Bag<span className="counter"> (2)</span></a>

                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

    </>
  )
}