import React from "react";
import Slider from "react-slick";
export default function Carousel({ customCarousels }) {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
  };
  return (
    // slider start

    <div className="slider-active swiper-container height">
      <div className="swiper-wrapper">
        <div className="swiper-slide slider-item">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="slider_images">
                  <Slider {...settings}>
                    {customCarousels?.map((item) => (
                      <div>
                        <img className="back" src={item.image} alt="slider" />
                      </div>
                    ))}

                    <div>
                      <img
                        src="./assets/img/slider/slider-img-1-test.png"
                        alt="slider" style={{maxWidth:"100%",height:"auto"}}
                      />
                    </div>
                  </Slider>
                   {/* className="back" */}
                  <img
                    className="top"
                    src="./assets/img/slider/text.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Add Pagination  */}
      <div className="swiper-pagination"></div>
    </div>
    /* slider end  */
  );
}
