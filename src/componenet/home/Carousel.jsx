import React, { useState } from "react";
import Slider from "react-slick";
import Carousel from "react-bootstrap/Carousel";
// import 'bootstrap/dist/css/bootstrap.min.css';
import "./test.css";
export default function CarouselM({ customCarousels }) {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
  };
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <>
      <section>
        <div className="container">
          <Carousel activeIndex={index} onSelect={handleSelect}>
            {customCarousels?.map((item)=>(
                <Carousel.Item>
                <img 
                  className="d-block w-10"
                  src={item.image}
                  alt="First slide"
                  style={{height:"769px",width:"100%"}}
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
            
            
          </Carousel>
        </div>
      </section>
    </>
    // slider start

    // <div className="slider-active swiper-container height">
    //   <div className="swiper-wrapper">
    //     <div className="swiper-slide slider-item">
    //       <div className="container">
    //         <div className="row">
    //           <div className="col-xl-12">
    //             <div className="slider_images">
    //               <Slider {...settings}>
    //                 {customCarousels?.map((item) => (
    //                   <div>
    //                     <img className="back" src={item.image} alt="slider" />
    //                   </div>
    //                 ))}

    //               </Slider>
    //                {/* className="back" */}
    //               <img
    //                 className="top"
    //                 src="./assets/img/slider/text.png"
    //                 alt=""
    //               />
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   {/* Add Pagination  */}
    //   <div className="swiper-pagination"></div>
    // </div>
    // /* slider end  */
  );
}
