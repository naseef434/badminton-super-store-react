import React from "react";
import portfolio from "./engage-ground.jpg";

export default function Gallery() {
  return (
    <div>
      {/* gallary area start */}
      <div
        className="about__gallary service_page"
        style={{ background: `url(${portfolio})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-lg-4 col-md-4 offset-xl-1">
              <div className="service-single">
                <h3 className="mb-30">we are on our way</h3>
                <p className="mb-40">
                  We can help you with a range of events from award ceremonies,
                  road shows, product launches, business awards, team building,
                  brand activations, corporate parties, and press conferences
                  through to sporting events and ala dinners we also help with
                  Small Gatherings, Private Themed Events, Corporate Sports
                  Events District Level Tournaments, State Level Tournaments,
                  International Tournaments, Tournaments and Leagues and Other
                  EventsT
                </p>
                <p>
                  This means it doesn't matter if your event is a prestigious
                  award ceremony for a whole industry or an event for just for a
                  handful of employees, as we are happy to help.
                </p>
                <p>
                We also offer additional complimentary corporate services to make your experience with us more memorable:
                </p>
                <a href="service.html">read more</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* gallary area end */}
    </div>
  );
}
