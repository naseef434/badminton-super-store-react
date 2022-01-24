import React from "react";
import SERVICES1 from "./SERVICES_2-1.png"
import SERVICES2 from "./SERVICES_3-1.png"
import SERVICES3 from "./SERVICES_1-1.png"
import { Link } from "react-router-dom";
export default function Service() {
  const style = {
    display: "inline-block",
    padding: "9px 46px",
    background: "#ed1b33",
    textTransform:"uppercase",
    fontWeight: "600",
    color:"white"
  }
  return (
   
    <div>
      
      {/* service area start  */}
      <div className="m_service__area mb-100">
        <div className="container">
          <div className="service__wrapper text-center pt-100">
            <h2>our services</h2>
          </div>
          <div className="row">
            <div className="col-xl-3 col-lg-3 col-md-4 offset-xl-1">
              <div className="m_single_service pt-80">
                <div className="m_single_service__thumb">
                  <img src={SERVICES1} alt="" />
                </div>
                <div className="m_single_service__content">
                  <h5>SUPER STORE</h5>
                  <p>
                    Nunc et augue pulvinar, luctus mi non, sagittis odio.
                    Phasellus congue sem nulla.non sodales orci malesu da vel.
                    Aliquam mi eros.{" "}
                  </p>
                  <Link to="/trading" style={style}>read more</Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-4">
              <div className="m_single_service pt-80">
                <div className="m_single_service__thumb">
                  <img src={SERVICES2} alt="" />
                </div>
                <div className="m_single_service__content">
                  <h5>BOOK AND PLAY</h5>
                  <p>
                    Nunc et augue pulvinar, luctus mi non, sagittis odio.
                    Phasellus congue sem nulla.non sodales orci malesu da vel.
                    Aliquam mi eros.{" "}
                  </p>
                  <Link to="/trading" style={style}>read more</Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-4">
              <div className="m_single_service pt-80">
                <div className="m_single_service__thumb">
                  <img src={SERVICES3} alt="" />
                </div>
                <div className="m_single_service__content">
                  <h5>ACCADEMY</h5>
                  <p>
                    Nunc et augue pulvinar, luctus mi non, sagittis odio.
                    Phasellus congue sem nulla.non sodales orci malesu da vel.
                    Aliquam mi eros.{" "}
                  </p>
                  <Link to="/accademy" style={style}>read more</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-3 col-lg-3 col-md-4 offset-xl-1">
              <div className="m_single_service pt-80">
                <div className="m_single_service__thumb">
                  <img src={SERVICES1} alt="" />
                </div>
                <div className="m_single_service__content">
                  <h5>STRING SERVICE</h5>
                  <p>
                    Nunc et augue pulvinar, luctus mi non, sagittis odio.
                    Phasellus congue sem nulla.non sodales orci malesu da vel.
                    Aliquam mi eros.{" "}
                  </p>
                  <Link to="/trading" style={style}>read more</Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-4">
              <div className="m_single_service pt-80">
                <div className="m_single_service__thumb">
                  <img src={SERVICES2} alt="" />
                </div>
                <div className="m_single_service__content">
                  <h5>EVENT MANAGEMENT</h5>
                  <p>
                    Nunc et augue pulvinar, luctus mi non, sagittis odio.
                    Phasellus congue sem nulla.non sodales orci malesu da vel.
                    Aliquam mi eros.{" "}
                  </p>
                  <Link to="/trading" style={style}>read more</Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-4">
              <div className="m_single_service pt-80">
                <div className="m_single_service__thumb">
                  <img src={SERVICES3} alt="" />
                </div>
                <div className="m_single_service__content">
                  <h5>EQUIPMENT</h5>
                  <p>
                    Nunc et augue pulvinar, luctus mi non, sagittis odio.
                    Phasellus congue sem nulla.non sodales orci malesu da vel.
                    Aliquam mi eros.{" "}
                  </p>
                  <Link to="/trading" style={style}>read more</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* service area end  */}
    </div>
    
  );
}
