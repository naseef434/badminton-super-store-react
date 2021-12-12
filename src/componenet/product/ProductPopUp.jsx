import React, { useState } from "react";

export default function ProductPopUp( { closeModel }) {

    return (
        <div>
            {/* <button onClick={() => { closeModel(false) }}>X</button> */}
            <div className="overlay show-popup" />
            <div className="product-popup show-popup">
                <div className="view-background">
                    <div className="row">
                        <div className="col-xl-5 col-lg-5 col-md-5">
                            <div className="quickview">
                                <div className="quickview__thumb">
                                    <img src="./assets/img/quick_view/25.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-7 col-md-7">
                            <div className="viewcontent">
                                <div className="viewcontent__header">
                                    <a href="single.html">  <h2>Brown Leather Bags</h2>
                                    </a>                     <a className="view_close product-p-close"  onClick={() => { closeModel(false) }} href="javascript:void(0)"><i className="fal fa-times-circle" /></a>
                                </div>
                                <div className="viewcontent__rating">
                                    <i className="fal fa-star ratingcolor" />
                                    <i className="fal fa-star ratingcolor" />
                                    <i className="fal fa-star ratingcolor" />
                                    <i className="fal fa-star" />
                                </div>
                                <div className="viewcontent__price">
                                    <h4><span>$</span>99.00</h4>
                                </div>
                                <div className="viewcontent__stock">
                                    <h4>Available :<span> In stock</span></h4>
                                </div>
                                <div className="viewcontent__details">
                                    <p>Anlor sit amet, consectetur adipiscing elit. Fusce condimentum est lacus, non pretium risus lacinia vel. Fusce eget turpis orci.</p>
                                </div>
                                <div className="viewcontent__action">
                                    <span>Qty</span>
                                    <span><input type="number" placeholder={1} /></span>
                                    <span><a href="#">add to cart</a></span>
                                    <span><i className="fal fa-heart" /></span>
                                    <span><i className="fal fa-info-circle" /></span>
                                </div>
                                <div className="viewcontent__footer">
                                    <ul>
                                        <li>Category:</li>
                                        <li>SKU:</li>
                                        <li>Brand:</li>
                                    </ul>
                                    <ul>
                                        <li>Watches</li>
                                        <li>2584-MK63</li>
                                        <li>Brenda</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}