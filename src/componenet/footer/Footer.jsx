import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <footer className="footer_area fix">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
              <div
                className="company__info  wow fadeInUp"
                data-wow-duration=".s"
                data-wow-delay=".3s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.3s",
                  animationName: "fadeInUp",
                }}
              >
                
                <h3 className="f-title">contact info</h3>
                <ul>
                  <li> Qusais Club, WH # 10-AL Qusais-3,</li>
                  <li>P.B #57909-Dubai, UAE</li>
                  <li>engageteams@gmail.com</li>
                  <li>(971) 55 778 4141</li>
                 
                </ul>
                <div className="social__media mb-30">
                  <h3 className="f-title">FOLLOW US ON</h3>
                  <a href="https://www.facebook.com/getengage/">
                    <i className="fab fa-facebook-f" />
                  </a>
                 
                  <a href="https://www.instagram.com/explore/locations/952109704944354/engage-sports-academy/?hl=en">
                    <i className="fab fa-instagram" />
                  </a>
                  <a href="https://www.youtube.com/channel/UCp-oDBaVYF3PlhQ5Sz7fLbw">
                  <i className="fab fa-youtube"></i>
                  </a>
                  <a href="https://www.linkedin.com/company/engagesports/">
                    <i className="fab fa-linkedin" />
                  </a>
                  
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-6 col-md-6 col-sm-12">
              <div
                className="company__info wow fadeInUp"
                data-wow-duration=".7s"
                data-wow-delay=".4s"
                style={{
                  visibility: "visible",
                  animationDuration: "0.7s",
                  animationDelay: "0.4s",
                  animationName: "fadeInUp",
                }}
              >
                <h3 className="f-title">Get Help</h3>
                <ul>
                  <li>
                    <a href="contact.html">Contact Us</a>
                  </li>
                  
                </ul>
              </div>
            </div>
            <div className="col-xl-2 col-lg-6 col-md-6 col-sm-12">
              <div
                className="company__info wow fadeInUp"
                data-wow-duration=".8s"
                data-wow-delay=".5s"
                style={{
                  visibility: "visible",
                  animationDuration: "0.8s",
                  animationDelay: "0.5s",
                  animationName: "fadeInUp",
                }}
              >
                <h3 className="f-title">Popular categories</h3>
                <ul>
                  <li>
                    <a href="shop.html">Sneaker</a>
                  </li>
                 
                </ul>
              </div>
            </div>
            <div className="col-xl-3 offset-xl-1 col-lg-6 col-md-6 col-sm-12">
              <div
                className="company__info wow fadeInUp"
                data-wow-duration=".9s"
                data-wow-delay=".6s"
                style={{
                  visibility: "visible",
                  animationDuration: "0.9s",
                  animationDelay: "0.6s",
                  animationName: "fadeInUp",
                }}
              >
                <h3 className="f-title">get in touch</h3>
                <p>
                  Sign up for all the news about our latest arrivals and
                  <br />
                  get an exclusive early access shopping. Join <br />
                  <span>60.000+ Subscribers</span> and get a new discount coupon
                  <br /> on every Saturday.
                </p>
                <div className="subscribe pt-20">
                  <form action="#">
                    <input
                      type="email"
                      placeholder="Enter your email here..."
                    />
                    <button>Subscribe</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        
        </div>
      </footer>
    </div>
  );
}
