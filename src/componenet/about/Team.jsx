import React from "react";

export default function Team() {
  return (
    <div>
      {/* team area start */}
      <div className="history__area pt-115 mb-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12">
              <div className="g_history mb-110">
                <h4 className="pl-130">Our Team</h4>
                <h2 className="title-3 pl-130 pt-20 ">Team Members</h2>
                <p className="pl-130">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-4">
              <div className="team_members text-center mb-50">
                <div className="team_members__thumb">
                  <img src="./assets/img/team/asset6.png" alt="" />
                </div>
                <div className="team_members__content pt-30">
                  <h4 className="sub-title">Eren Christopher</h4>
                  <span>Founder or Agota Store</span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4">
              <div className="team_members text-center mb-50 ">
                <div className="team_members__thumb">
                  <img src="./assets/img/team/asset7.png" alt="" />
                </div>
                <div className="team_members__content pt-30">
                  <h4 className="sub-title">Mike Jefferson</h4>
                  <span>Founder or Agota Store</span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4">
              <div className="team_members text-center mb-50">
                <div className="team_members__thumb">
                  <img src="./assets/img/team/asset8.png" alt="" />
                </div>
                <div className="team_members__content pt-30">
                  <h4 className="sub-title">Eren Christopher</h4>
                  <span>Founder or Agota Store</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* team area end */}
    </div>
  );
}
