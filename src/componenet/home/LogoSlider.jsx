import React from "react";
import Slider from "react-slick";
import kawasaki from "./gallery/kawasaki.png";
import flypower from "./gallery/11.jpg";
import infinite from "./gallery/INFINITE.jpg";
import victor from "./gallery/victor.jpeg";
import aeroplane from "./gallery/airo-plane.jpg";
import mizuno from "./gallery/MIZUNO 2.jpg";
import apecs from "./gallery/appecs.jpg";
export default function LogoSlider() {
  const settings = {
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2,
  };
  return (
    <div>
      <Slider {...settings}>
        <div>
          <img src={kawasaki} />
        </div>
        <div>
          <img src={flypower} />
        </div>
        <div>
          <img src={infinite} />
        </div>
        <div>
          <img src={victor} />
        </div>
        <div>
          <img src={aeroplane} />
        </div>
        <div>
          <img src={mizuno} />
        </div>
        <div>
          <img src={apecs} />
        </div>
        <div>
          <img src={flypower} />
        </div>
        <div>
          <img src={infinite} />
        </div>
      </Slider>
    </div>
  );
}
