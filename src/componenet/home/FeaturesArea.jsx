import React from "react";
import { Link } from "react-router-dom";
import img2 from "./asset15.jpeg";
import academy from "./accademy.jpg";
import kick from "./kick.jpg";
import tournament from "./tournament.jpg";
import sportsAreana from "./sports-areana.jpg";
import swimming from "./swimming.jpg";
import kawaski from "./kawaski.png";
import restring from "./re-string.jpg";

export default function FeaturesArea() {
  return (
    <div className="banar_area">
      <div className="container-fluid padding-remove">
        <div className="row g-0">
          <div className="col-xl-6 col-lg-6 col-md-6 gallary__thumb">
            <div
              className="banar_right_down wow fadeIn"
              data-wow-duration=".9s"
              data-wow-delay=".8s"
              style={{
                visibility: "visible",
                animationDuration: "0.9s",
                animationDelay: "0.8s",
                animationName: "fadeIn",
              }}
            >
              <Link to="/products">
                <img src={img2} alt="" />
              </Link>
              <div className="banarright__content position-change">
                {/* <span className="d-none d-sm-block">Engage Sports</span> */}
                <h2 className="banar-title mb-60 pt-80">
                  Badminton <br />
                  Super Store
                  {/* <br /> for men’s */}
                </h2>
                <h4 className="d-none d-sm-block">Black friday </h4>
                <p className="d-none d-sm-block">
                  <span>up to 20% off</span> All products
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 gallary__thumb">
            <div
              className="banar_right_down wow fadeIn"
              data-wow-duration=".9s"
              data-wow-delay=".8s"
              style={{
                visibility: "visible",
                animationDuration: "0.9s",
                animationDelay: "0.8s",
                animationName: "fadeIn",
              }}
            >
              <a href="shop.html">
                <img src={sportsAreana} height={"302px"} alt="" />
              </a>
              <div className="banarright__content position-change">
                {/* <span className="d-none d-sm-block">Engage Sports</span> */}
                <h2 className="banar-title mb-60 pt-80">
                  Engage <br />
                  Sports <br />
                  Areana
                  {/* <br /> for men’s */}
                </h2>
                {/* <h4 className="d-none d-sm-block">Black friday </h4>
                <p className="d-none d-sm-block">
                  <span>up to 20% off</span> All products
                </p> */}
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 gallary__thumb">
            <div
              className="banar_right_down wow fadeIn"
              data-wow-duration=".9s"
              data-wow-delay=".8s"
              style={{
                visibility: "visible",
                animationDuration: "0.9s",
                animationDelay: "0.8s",
                animationName: "fadeIn",
              }}
            >
              <a href="shop.html">
                <img src={academy} height={"302px"} alt="" />
              </a>
              <div className="banarright__content position-change">
                {/* <span className="d-none d-sm-block">Engage Sports</span> */}
                <h2 className="banar-title mb-60 pt-80">
                  Events at <br />
                  Engage <br />
                  
                  <br />
                </h2>
                {/* <h4 className="d-none d-sm-block">Black friday </h4>
                <p className="d-none d-sm-block">
                  <span>up to 20% off</span> All products
                </p> */}
              </div>
            </div>
          </div>
        </div>
        <div className="row g-0">
          <div className="col-xl-3 col-lg-3 col-md-3 gallary__thumb">
            <div
              className="banar_right_down wow fadeIn"
              data-wow-duration=".9s"
              data-wow-delay=".8s"
              style={{
                visibility: "visible",
                animationDuration: "0.9s",
                animationDelay: "0.8s",
                animationName: "fadeIn",
              }}
            >
              <a href="shop.html">
                <img src={tournament} height={"300px"} alt="" />
              </a>
              <div className="banarright__content position-change">
                {/* <span className="d-none d-sm-block">Engage Sports</span> */}
                <h2 className="banar-title mb-60 pt-80">
                  Engage <br />
                  Cricket <br />
                  
                </h2>
                {/* <br /> for men’s
                </h2>
                <h4 className="d-none d-sm-block">Black friday </h4>
                <p className="d-none d-sm-block">
                  <span>up to 20% off</span> All products
                </p> */}
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 gallary__thumb">
            <div
              className="banar_right_down wow fadeIn"
              data-wow-duration=".9s"
              data-wow-delay=".8s"
              style={{
                visibility: "visible",
                animationDuration: "0.9s",
                animationDelay: "0.8s",
                animationName: "fadeIn",
              }}
            >
              <a href="shop.html">
                <img src={kick} height={"300px"} alt="" />
              </a>
              <div className="banarright__content position-change">
                {/* <span className="d-none d-sm-block">Engage Sports</span> */}

                <h2 className="banar-title mb-60 pt-80">
                  Engage <br />
                  Kick <br />
                </h2>
                {/* Sport
                  <br /> for men’s
                </h2>
                <h4 className="d-none d-sm-block">Black friday </h4>
                <p className="d-none d-sm-block">
                  <span>up to 20% off</span> All products
                </p> */}
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-3 gallary__thumb">
            <div
              className="banar_right_down wow fadeIn"
              data-wow-duration=".9s"
              data-wow-delay=".8s"
              style={{
                visibility: "visible",
                animationDuration: "0.9s",
                animationDelay: "0.8s",
                animationName: "fadeIn",
              }}
            >
              <a href="shop.html">
                <img src={swimming} height={"300px"} alt="" />
              </a>
              <div className="banarright__content position-change">
                {/* <span className="d-none d-sm-block">Engage Sports</span> */}
                <h2 className="banar-title mb-60 pt-80">
                  Engage <br />
                  Swimming Store <br />
                </h2>
                {/* <br /> for men’s
                </h2>
                <h4 className="d-none d-sm-block">Black friday </h4>
                <p className="d-none d-sm-block">
                  <span>up to 20% off</span> All products
                </p> */}
                <img src={kawaski} alt=""  height={"60px"} style={{marginTop:"70px",marginLeft:"190px"}}/>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 gallary__thumb">
            <div
              className="banar_right_down wow fadeIn"
              data-wow-duration=".9s"
              data-wow-delay=".8s"
              style={{
                visibility: "visible",
                animationDuration: "0.9s",
                animationDelay: "0.8s",
                animationName: "fadeIn",
              }}
            >
              <a href="shop.html">
                <img src={restring} height={"300px"} alt="" />
              </a>
              <div className="banarright__content position-change">
                {/* <span className="d-none d-sm-block">Engage Sports</span> */}

                <h2 className="banar-title mb-60 pt-80 ">
                  Engage <br />
                  Re String<br />
                  Service
                </h2>
                {/* Sport
                  <br /> for men’s
                </h2>
                <h4 className="d-none d-sm-block">Black friday </h4>
                <p className="d-none d-sm-block">
                  <span>up to 20% off</span> All products
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
