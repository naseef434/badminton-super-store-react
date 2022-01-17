import React from "react";
import { Link } from "react-router-dom";

import image from "./404.jpg";

export default function Page404() {
  return (
    <>
      {/* contact area 2 start */}
      <div
        className=" error-page"
        style={{ background: `url(${image})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col xl-12 col-lg-12 col-md-12">
              <div className="contact__inner_2 error_inner text-center">
                <h2 className="mb-40">404</h2>
                <h3 className="mb-30">Page Not Found</h3>
                <p className="mb-40">
                  Sorry for the inconvenience. Go to our homepage or check out
                  our latest collections for Fashion, Chair, Decoration...
                </p>
                <Link to="/">back to homepage</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* contact area 2 end */}
    </>
  );
}
