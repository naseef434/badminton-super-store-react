import React from "react";
import { Link } from "react-router-dom";
import img2 from "./asset15.jpeg";
import academy from "./accademy.jpg";
import kick from "./kick.jpg";
import tournament from "./tournament.jpg";
import sportsAreana from "./sports-areana.jpg";
import swimming from "./swimming.jpg";

export default function FeaturesArea() {
  return (
    <div className="banar_area">
      <div className="container-fluid padding-remove">
        <div className="row g-0">
          <div className="col-xl-6 col-lg-6 col-md-6">
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
                <span className="d-none d-sm-block">Engage Sports</span>
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
          <div className="col-xl-3 col-lg-3 col-md-6">
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
                <span className="d-none d-sm-block">Engage Sports</span>
                <h2 className="banar-title mb-60 pt-80">
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
          <div className="col-xl-3 col-lg-3 col-md-6">
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
                <span className="d-none d-sm-block">Engage Sports</span>
                <h2 className="banar-title mb-60 pt-80">
                  Badminton <br />
                  Academy
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
          <div className="col-xl-3 col-lg-3 col-md-3">
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
                <span className="d-none d-sm-block">Engage Sports</span>
                <h2 className="banar-title mb-60 pt-80">
                  Events <br />
                  Management
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
          <div className="col-xl-3 col-lg-3 col-md-6">
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
                <span className="d-none d-sm-block">Engage Sports</span>
                <h2 className="banar-title mb-60 pt-80">Kick</h2> <br />
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
          <div className="col-xl-6 col-lg-6 col-md-6">
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
                <img src={swimming} alt="" />
              </a>
              <div className="banarright__content position-change">
                <span className="d-none d-sm-block">Engage Sports</span>
                <h2 className="banar-title mb-60 pt-80">
                  Kawasaki <br />
                  Swimming Store
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
        </div>
      </div>
    </div>
  );
}
