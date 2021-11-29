import React from "react";
import shop from './shop-1.jpg'

var img = "assets/img/slider/shop-1.jpg"
export default function BreadCrumb(){
    return(
    <div className="page-layout" data-background="assets/img/slider/shop-1.jpg" style={{background: `url(${img})`,
      }}> 
        <div className="container">
            <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <div className="breadcrumb-area text-center">
                        <h2 className="page-title">shop</h2>
                            <div className="breadcrumb-menu">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb justify-content-center">
                                    <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                    <li className="breadcrumb-item"><a href="shop.html">shop</a></li>
                                </ol>
                            </nav>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}