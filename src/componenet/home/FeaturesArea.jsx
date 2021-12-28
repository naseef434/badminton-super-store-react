import React from "react";
import { Link } from "react-router-dom";

export default function FeaturesArea() {
  return (
    // features area start
    <div className="features-area d-none d-md-block fix">
      <div className="row g-0">
        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
          <div className="fetures">
            <div className="fetures__thumb fix">
              <a href="shop.html">
                <img src="./assets/img/features/fe-test.png" alt="features1" />
              </a>
            </div>
            <div className="fetures__content">
              <h4 className="feature-title mb-40">
                Engage Sports <br />
                Areana
              </h4>
              <p className="d-md-none d-lg-block">
                all products{" "}
                <span className="discount">
                  <a href="#">up to 70% off</a>
                </span>{" "}
                limited time discount
              </p>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
          <div className="fetures">
            <div className="fetures__thumb fix">
              <Link to="/products">
                <img
                  src="./assets/img/features/fe-test-1.png"
                  alt="features1"
                />
              </Link>
            </div>
            <div className="fetures__content">
              <h4 className="feature-title mb-40">
                Badminton
                <br />
                Super Storeeeeeee
              </h4>
              <p className="d-md-none d-lg-block">
                all products{" "}
                <span className="discount">
                  <Link to="/products">up to 70% off</Link>
                </span>{" "}
                limited time discount
              </p>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
          <div className="fetures">
            <div className="fetures__thumb fix">
              <a href="shop.html">
                <img src="./assets/img/features/fe-test.png" alt="features1" />
              </a>
            </div>
            <div className="fetures__content">
              <h4 className="feature-title mb-40">
                Badminton
                <br />
                Academy
              </h4>
              <p className="d-md-none d-lg-block">
                all products{" "}
                <span className="discount">
                  <a href="#">up to 70% off</a>
                </span>{" "}
                limited time discount
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row g-0">
        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
          <div className="fetures">
            <div className="fetures__thumb fix">
              <a href="shop.html">
                <img src="./assets/img/features/fe-test.png" alt="features1" />
              </a>
            </div>
            <div className="fetures__content">
              <h4 className="feature-title mb-40">
                Events <br /> Planner
              </h4>
              <p className="d-md-none d-lg-block">
                all products{" "}
                <span className="discount">
                  <a href="#">up to 70% off</a>
                </span>{" "}
                limited time discount
              </p>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
          <div className="fetures">
            <div className="fetures__thumb fix">
              <a href="shop.html">
                <img
                  src="./assets/img/features/fe-test-1.png"
                  alt="features1"
                />
              </a>
            </div>
            <div className="fetures__content">
              <h4 className="feature-title mb-40">
                Engage
                <br />
                Kick
              </h4>
              <p className="d-md-none d-lg-block">
                all products{" "}
                <span className="discount">
                  <a href="#">up to 70% off</a>
                </span>{" "}
                limited time discount
              </p>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
          <div className="fetures">
            <div className="fetures__thumb fix">
              <a href="shop.html">
                <img src="./assets/img/features/fe-test.png" alt="features1" />
              </a>
            </div>
            <div className="fetures__content">
              <h4 className="feature-title mb-40">
                Kawasaki
                <br />
                Swimming Store
              </h4>
              <p className="d-md-none d-lg-block">
                all products{" "}
                <span className="discount">
                  <a href="#">up to 70% off</a>
                </span>{" "}
                limited time discount
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    // features area end
  );
}
