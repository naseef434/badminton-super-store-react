import React from "react";
import "./style.css";
export default function ContactArea() {
  return (
    <div>
      <div>
        {/* contact info area start */}
        <div className="contact__info_2 mb-70 pt-70">
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-4">
                <div className="contact-single text-center">
                  <div className="contact-single__thumb">
                    {/* <img src="" alt=""> */}
                    <i className="fal fa-bookmark" />
                  </div>
                  <div className="contact-single__content">
                    <h3>Visit us</h3>
                    <p>
                      Qusais Club, WH # 10-AL Qusais-3, <br />
                    </p>
                    <h5>P.B #57909-Dubai, UAE</h5>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4">
                <div className="contact-single text-center">
                  <div className="contact-single__thumb">
                    {/* <img src="" alt=""> */}
                    <i className="fal fa-bell" />
                  </div>
                  <div className="contact-single__content">
                    <h3>CALL US</h3>
                    {/* <p>
                      Lorem ipsum dolor sit amet, cones <br /> ctetur adipiscing
                      elit dusch solli <br /> citudin arcu non rutrum{" "}
                    </p> */}
                    <h5>
                      <a href="tel:+44(0)2031167711">+971 55 778 4141</a>
                    </h5>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4">
                <div className="contact-single text-center border-0">
                  <div className="contact-single__thumb">
                    {/* <img src="" alt=""> */}
                    <i className="fal fa-envelope" />
                  </div>
                  <div className="contact-single__content">
                    <h3>Contact us</h3>
                    {/* <p>
                      Lorem ipsum dolor sit amet, cones <br /> ctetur adipiscing
                      elit dusch solli <br /> citudin arcu non rutrum{" "}
                    </p> */}
                    <h5>engageteams@gmail.com</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row input-container">
          <div className="col-xs-12">
            <div className="styled-input wide">
              <input type="text" required />
              <label>Name</label>
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="styled-input">
              <input type="text" required />
              <label>Email</label>
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="styled-input" style={{ float: "right" }}>
              <input type="text" required />
              <label>Phone Number</label>
            </div>
          </div>
          <div className="col-xs-12">
            <div className="styled-input wide">
              <textarea required defaultValue={""} />
              <label>Message</label>
            </div>
          </div>
          <div className="col-xs-12">
            <div className="btn-lrg submit-btn">Send Message</div>
          </div>
        </div>

        {/* contact info area end */}
        {/* <div className="map-2">
          <div className="google-map contact-map">
            <iframe
              className="w-100"
              height={400}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.91477055202!2d-74.11976321327155!3d40.69740344214894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1612427122501!5m2!1sen!2sbd"
            />
          </div>
        </div> */}
      </div>
    </div>
  );
}
