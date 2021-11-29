import React from "react";

export default function Carousel(){
    return(
        // slider start 
        <div className="slider-active swiper-container height">
            <div className="swiper-wrapper">
                <div className="swiper-slide slider-item">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="slider_images">
                                  
                                    <img className="back" src="./assets/img/slider/slider-img-1-test.png" alt="" />
                                    <img className="top" src="./assets/img/slider/text.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="swiper-slide slider-item">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="slider_images">
                                    <img className="back" src="./assets/img/slider/slider-img-1.png" alt="" />
                                    <img className="top" src="./assets/img/slider/text.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="swiper-slide slider-item">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="slider_images">
                                    <img className="back" src="./assets/img/slider/slider-img-1.png" alt="" />
                                    <img className="top" src="./assets/img/slider/text.png" alt="" />
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
    )
}