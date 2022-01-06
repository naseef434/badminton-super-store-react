import React from "react";
import blog from "./blog.jpg";
export default function BLogBreadCrumb() {
  return (
    <div>
      {/* breadcrumb area start */}
      <div className="page-layout" style={{ background: `url(${blog})` }}>
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <div className="breadcrumb-area text-center">
                <h2 className="page-title">Blog</h2>
                <div className="breadcrumb-menu">
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb justify-content-center">
                      <li className="breadcrumb-item">
                        <a href="index.html">Home</a>
                      </li>
                      <li className="breadcrumb-item">
                        <a href="blog-no-sidebar.html">sidebar</a>
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
