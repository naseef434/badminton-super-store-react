import React from "react";
import gal1 from "./gal-1.jpg";

export default function History() {
  return (
    <div>
      {/* history area start */}
      <div className="history__area pt-115 mb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12">
              <div className="g_history mb-100">
                <h4 className="pl-130">our story</h4>
                <h2 className="title-3 pl-130 pt-20 mb-70">GET ENGAGED</h2>
                <p>
                  Founded by Jamal Backer in the year of 2016 the engage sports
                  LLC is a driven and highly successful enterprise that focuses
                  on a healthier, mappier life through the means of sports. Our
                  vision is a community where all have access to structured and
                  organized programs which promote psycho-social development. A
                  venue in a fun and safe envi onment to promote life skills and
                  activities.
                </p>
                <p>
                  Engage Sports is all about bonding, new experiences and a
                  healthier festyle. Our main objective is to promote the
                  practice of sports amongst the major percentage of the
                  population. Help yourself to a healthy and invigorating game
                  of basketball or badminton whenever ou like at the Engage
                  Sports Arena.
                </p>
                <p>
                  At the Engage Sports, all of us believe in one collective
                  effort to im prove the future for our upcoming generation.
                  Integrating sports and an active way of living in your day
                  will surely bring back benefits of uge quantity for you, your
                  family and friends.
                </p>
                <p>
                  We are the Engage Sports Arena and we specialize in the sports
                  industry. From owning our own personal ports venue to
                  providing personal and group sports aining, we have got
                  everything that you need to make a change in your life.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-8 col-lg-8 col-md-12">
              <div className="history__thumb mb-30">
                <img src={gal1} alt="" />
              </div>
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="thumb mb-30">
                    <img src={gal1} alt="" />
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="thumb mb-30">
                    <img src={gal1} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="thumb mb-30">
                <img src={gal1} alt="" />
              </div>
              <div className="thumb mb-30">
                <img src={gal1} alt="" />
              </div>
            </div>
          </div>

  
        </div>
      </div>
      {/* history area end */}
    </div>
  );
}
