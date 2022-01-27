import React from "react";
import "./logo-slider.css";
import kawasaki from "./gallery/kawasaki.png";
import flypower from "./gallery/11.jpg";
import infinite from "./gallery/INFINITE.jpg";
import victor from "./gallery/victor.jpeg";
import aeroplane from "./gallery/airo-plane.jpg";
import mizuno from "./gallery/MIZUNO 2.jpg";
import apecs from "./gallery/appecs.jpg";
export default function LogoSlider() {
  return (
    <div>
      <div className="row">
        <div className="col-lg-12 col-md-12 col-xs-12">
        <div className="slider">
        <ul>
          <li>
            <img src={kawasaki} alt="" />
          </li>
          <li>
            <img src={flypower} alt="" />
          </li>
          <li>
            <img src={infinite} alt="" />
          </li>
          <li>
            <img src={victor} alt="" />
          </li>
          <li>
            <img src={aeroplane} alt="" />
          </li>
          <li>
            <img src={mizuno} alt="" />
          </li>
          <li>
            <img src={apecs} alt="" />
          </li>
          <li>
            <img src={kawasaki} alt="" />
          </li>
          <li>
            <img src={flypower} alt="" />
          </li>
          <li>
            <img src={infinite} alt="" />
          </li>
          <li>
            <img src={victor} alt="" />
          </li>
          <li>
            <img src={aeroplane} alt="" />
          </li>
          <li>
            <img src={mizuno} alt="" />
          </li>
          <li>
            <img src={apecs} alt="" />
          </li>
        </ul>
      </div>
        </div>
      </div>

    </div>
  );
}
