import React from "react";
import contact from "./Contact1.jpg"
export default function Parallex() {
  return (
    <div>
      {/* contact area 2 start */}
      <div
        className="contact__area_2"
        data-background="./assets/img/about/Contact1.jpg"
        style={{ background: `url(${contact})` ,backgroundAttachment:"fixed"}}
      >
        <div className="container">
          <div className="row">
            <div className="col xl-12 col-lg-12 col-md-12">
              <div className="contact__inner_2 text-center">
                <h2 className="mb-80">contact us</h2>
                <p>
                  Need an expert? you are more than welcomed to leave your
                  contact info
                  <br /> and we will be in touch shortly
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* contact area 2 end */}
    </div>
  );
}
