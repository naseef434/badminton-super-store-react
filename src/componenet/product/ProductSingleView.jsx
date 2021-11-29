import React from "react";
import Navabar from "../navabar/Navabar";

export default function ProductSinleView(){
    return(
        <>
        <Navabar />
        <div className="single_breadcrumb pt-25">
          <div className="container">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="#">Home</a></li>
                <li className="breadcrumb-item"><a href="#">Shop</a></li>
                <li className="breadcrumb-item"><a href="#">Outerwears</a></li>
                <li className="breadcrumb-item"><a href="#">jackets</a></li>
                <li className="breadcrumb-item active" aria-current="page">Arsenal Home Jersey</li>
                </ol>
            </nav>
            <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-12">
                    <div className="row">
                        <div className="col-xl-2 col-lg-2 col-md-2">
                            <div className="single_product_tab">
                                <div className="single_prodct">
                                    <ul className="nav nav-tabs justify-content-center mb-55" id="dfde" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#homde" type="button" role="tab" aria-selected="true"><img src="./assets/img/product/17.jpg" alt="" /></button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profidfdle" type="button" role="tab" aria-selected="false"><img src="./assets/img/product/17-1.jpg" alt="" /></button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" data-bs-toggle="tab" data-bs-target="#contadfdct" type="button" role="tab" aria-selected="false"><img src="./assets/img/product/17-2.jpg" alt="" /></button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="kids-tab" data-bs-toggle="tab" data-bs-target="#kidsdfd" type="button" role="tab" aria-selected="false"><img src="./assets/img/product/17-3.jpg" alt="" /></button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-10 col-lg-10 col-md-10">
                            <div className="single_preview_product">
                                <div className="single-popup-view">
                                    <a className="popup-image" href="./assets/img/product/17-3.jpg"><i className="fal fa-search"></i></a>
                                </div>
                                <div className="tab-content" id="myTabefContent">
                                    <div className="tab-pane fade show active" id="homde" role="tabpanel">
                                       <div className="full-view">
                                            <img src="./assets/img/product/17.jpg" alt="" />
                                       </div>
                                    </div>
                                    <div className="tab-pane fade" id="profidfdle" role="tabpanel">
                                        <div className="full-view">
                                            <img src="./assets/img/product/17-1.jpg" alt="" />
                                        </div>                                        
                                    </div>
                                    <div className="tab-pane fade" id="contadfdct" role="tabpanel">
                                        <div className="full-view">
                                            <img src="./assets/img/product/17-2.jpg" alt="" />
                                        </div>                                        
                                    </div>
                                    <div className="tab-pane fade" id="kidsdfd" role="tabpanel">
                                        <div className="full-view">
                                        <img src="./assets/img/product/17-3.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-12">
                    <div className="single_preview_content pl-30">
                        <h2 className="title-5 edit-title border-bottom-0">Arsenal Home Jersey</h2>
                        <div className="s-product-review">
                            <span><i className="far fa-star start-color"></i></span>
                            <span><i className="far fa-star start-color"></i></span>
                            <span><i className="far fa-star start-color"></i></span>
                            <span><i className="far fa-star start-color"></i></span>
                            <span><i className="far fa-star"></i></span>
                            <span className="pl-left">(1 customer review)</span>
                        </div>
                        <div className="s-price pt-30 mb-30">
                            <span>$45.00</span>
                        </div>
                        <div className="s-des">
                            <p>Designed by Hans J. Wegner in 1949 as one of the first models created especially for Carl Hansen &amp; Son, and produced since 1950. The last of a series of chairs Wegner designed based on inspiration from antique Chinese armchairs. The gently rounded top together with the back and seat offers a</p>
                        </div>
                        <div className="viewcontent__action single_action pt-30">
                            <span><input type="number" placeholder="1" /></span>
                            <span><a href="cart.html">+ add to cart</a></span>
                            <span><i className="fal fa-heart"></i></span>
                            <span><i className="fas fa-compress"></i></span>
                        </div>
                        <div className="viewcontent__footer border-top-0 border-bottom pb-30">
                            <ul>
                                <li>Category:</li>
                                <li>SKU:</li>
                            </ul>
                            <ul>
                                <li>jackets, Youth</li>
                                <li>woo-hoodie-with-logo</li> 
                            </ul>
                        </div>
                        <div className="social__media f-social-media mb-30 pt-15">
                            <h3 className="f-title edit-f-title">FOLLOW US ON</h3>
                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                            <a href="#"><i className="fab fa-twitter"></i></a>
                            <a href="#"><i className="fab fa-instagram"></i></a>
                            <a href="#"><i className="fab fa-google-plus-g"></i></a>
                            <a href="#"><i className="fab fa-dribbble"></i></a>
                        </div>
                    </div>
                </div>
            </div>
          </div>
      </div>
 </>
    )
}