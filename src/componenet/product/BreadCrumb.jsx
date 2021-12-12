import React from "react";
import shop from './shop-1.jpg'
import { Link } from "react-router-dom";
var img = "assets/img/slider/shop-1.jpg"
export default function BreadCrumb(props){
   
    return(
    <div className="page-layout" data-background="assets/img/slider/shop-1.jpg" height="400px" style={{background: `url(${img})`
      }}> 
        <div className="container">
            <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <div className="breadcrumb-area text-center">
                        <h2 className="page-title">{props.name[1]}</h2>
                            <div className="breadcrumb-menu">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb justify-content-center">
                                    <li className="breadcrumb-item"><Link to="/">{props.name[0]}</Link></li>
                                    <li className="breadcrumb-item"><Link to="/products">{props.name[1]}</Link></li>
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