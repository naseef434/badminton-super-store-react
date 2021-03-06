import React, { useState } from "react";
import { Link } from "react-router-dom";
import tournament from "./tournament.jpg";
import academy from "./accademy.jpg";
export default function FeaturesArea({ sports }) {
  const [staticCards, setStaticCard] = useState([
    { id: "", name: "ENGAGE SPORTS ARENA", isStatic: true },
    {
      id: "",
      name: "ENGAGE SPORTS ACCADEMY",
      isStatic: true,
      link: "accademy",
      image: academy,
    },
    { id: "", name: "Engage Sports EVENTS", isStatic: true },
  ]);
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
        {isStatic ? (
          <>
            <Link to={`/${details.link}`}>
              <img src={details?.image || tournament} height={"300px"} alt="" />
            </Link>
          </>
        ) : (
          <>
            <Link to={`/products?sport=${details.id}`}>
              <img
                src={details?.thumbnail || tournament}
                height={"300px"}
                alt=""
              />
            </Link>
          </>
        )}

        <div className="banarright__content position-change">
          {/* <span className="d-none d-sm-block">Engage Sports</span> */}
          <h2 className="banar-title mb-60 pt-80">
            {" "}
            {isStatic ? details.name : details.name}
          </h2>
        </div>
      </div>
    </div>
  );
}
