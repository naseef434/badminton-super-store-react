import React, { useState } from "react";
import { Link } from "react-router-dom";
import img2 from "./asset15.jpeg";
import academy from "./accademy.jpg";
import kick from "./kick.jpg";
import tournament from "./tournament.jpg";
import sportsAreana from "./sports-areana.jpg";
import swimming from "./swimming.jpg";
import kawaski from "./kawaski.png";
import restring from "./re-string.jpg";
import test from "./test.jpg";
export default function FeaturesArea({ sports }) {
  console.log(sports);
  const [staticCards, setStaticCard] = useState([
    {id: "", name:"ENGAGE SPORTS ARENA", isStatic: true},
    {id: "", name:"ENGAGE SPORTS ACCADEMY", isStatic: true},
    {id: "", name:"Engage Sports EVENTS", isStatic: true},

  ])
  return (
    <div className="banar_area">
      <div className="container-fluid padding-remove">
        <div className="row g-0">
          {sports?.map((item, idx) => (
            <>
                <Card key={idx} details={item} />
            </>
          ))}
          {staticCards?.map((item, idx) => (
            <>
                <Card key={idx} details={item} isStatic />
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Card({ details, isStatic }) {
  return (
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
        <Link to={`/products?sports=${details.id}`}>
          <img src={details?.thumbNail || tournament} height={"300px"} alt="" />
        </Link>
        <div className="banarright__content position-change">
          {/* <span className="d-none d-sm-block">Engage Sports</span> */}
          <h2 className="banar-title mb-60 pt-80"> {isStatic ? "static card": details.name}</h2>
        </div>
      </div>
    </div>
  );
}
