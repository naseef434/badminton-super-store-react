import React from "react";
import image from "./About-us1.jpg";
export default function BreadCrumb() {
    
  return (
    <div>
      {/* breadcrumb area start */}
      <div
        className="page-layout about"
       
        style={{ background: `url(${image})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <div className="breadcrumb-area text-center">
                <h2 className="page-title">about us</h2>
                <div className="breadcrumb-menu">
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb justify-content-center">
                      <li className="breadcrumb-item">
                        <a href="index.html">Home</a>
                      </li>
                      <li className="breadcrumb-item">
                        <a href="about.html">about</a>
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* breadcrumb area end */}
    </div>
  );
}
