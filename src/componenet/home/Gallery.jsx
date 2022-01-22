import React from "react";
import image1 from "./gallery/1.jpeg"
import image2 from "./gallery/2.jpeg"
import image3 from "./gallery/3.jpeg"
import image4 from "./gallery/4.jpeg"
import image5 from "./gallery/5.jpeg"
import image6 from "./gallery/6.jpeg"
import image7 from "./gallery/7.jpeg"
import image8 from "./gallery/8.jpeg"
import image9 from "./gallery/9.jpeg"
import image10 from "./gallery/10.jpeg"
import image11 from "./gallery/11.jpeg"
export default function Gallery() {
  return (
    <div>
      <div className="gallary_area">
        <div className="gallary__thumb">
          <a href="shop.html">
            <img src={image1} />
          </a>
        </div>
        <div className="gallary__thumb">
          <a href="shop.html">
          <img src={image2} />
          </a>
        </div>
        <div className="gallary__thumb">
          <a href="shop.html">
          <img src={image3} />
          </a>
        </div>
        <div className="gallary__thumb">
          <a href="shop.html">
          <img src={image4} />
          </a>
        </div>
        <div className="gallary__thumb">
          <a href="shop.html">
          <img src={image5} />
          </a>
        </div>
        <div className="gallary__thumb">
          <a href="shop.html">
          <img src={image6} />
          </a>
        </div>
      </div>
      {/* <div className="gallary_area">
        <div className="gallary__thumb">
          <a href="shop.html">
            <img src={image7} />
          </a>
        </div>
        <div className="gallary__thumb">
          <a href="shop.html">
          <img src={image8} />
          </a>
        </div>
        <div className="gallary__thumb">
          <a href="shop.html">
          <img src={image9} />
          </a>
        </div>
        <div className="gallary__thumb">
          <a href="shop.html">
          <img src={image10} />
          </a>
        </div>
        <div className="gallary__thumb">
          <a href="shop.html">
          <img src={image11} />
          </a>
        </div>
        <div className="gallary__thumb">
          <a href="shop.html">
          <img src={image6} />
          </a>
        </div>
      </div> */}
    </div>
  );
}
