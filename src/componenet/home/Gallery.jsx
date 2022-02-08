import React from "react";

import flypower from "./gallery/11.jpg"
import infinite from "./gallery/INFINITE.jpg"
import blinders from './gallery/BLINDERS.jpeg'
import young from './gallery/YOUNG.png'
import protech from './gallery/PROTECH.png'
import victor from './gallery/victor.jpeg'
import aeroplane from './gallery/airo-plane.jpg'
import mizuno from './gallery/MIZUNO 2.jpg'
import kawasaki from './gallery/kawasaki.png'
import apecs from './gallery/appecs.jpg'
export default function Gallery() {
  return (
    <div>
      <div className="gallary_area">
        <div className="gallary__thumb">
          <a href="shop.html">
            <img src={victor} />
          </a>
        </div>
        <div className="gallary__thumb">
          <a href="shop.html">
            <img src={aeroplane} />
          </a>
        </div>
        <div className="gallary__thumb">
          <a href="shop.html">
            <img src={flypower} />
          </a>
        </div>
        <div className="gallary__thumb">
          <a href="shop.html">
            <img src={infinite} />
          </a>
        </div>
        
        <div className="gallary__thumb">
          <a href="shop.html">
            <img src={mizuno} />
          </a>
        </div>
        <div className="gallary__thumb">
          <a href="shop.html">
            <img src={kawasaki} />
          </a>
        </div>
        <div className="gallary__thumb">
          <a href="shop.html">
            <img src={apecs} />
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
