import React from "react";

export default function FeaturesArea(){
    return (
        // features area start  
        <div className="features-area d-none d-md-block fix">
            <div className="row g-0">
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12">
                    <div className="fetures">
                        <div className="fetures__thumb fix">
                            <a href="shop.html"><img src="./assets/img/features/fe-test.png" alt="features1" /></a>
                        </div>
                        <div className="fetures__content">
                            <h4 className="feature-title mb-40">Sport<br /> Baseball</h4>
                            <p className="d-md-none d-lg-block">all products <span className="discount"><a href="#">up to 70%
                                        off</a></span> limited time discount</p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12">
                    <div className="fetures">
                        <div className="fetures__thumb fix">
                            <a href="shop.html"><img src="./assets/img/features/fe-test-1.png" alt="features1" /></a>
                        </div>
                        <div className="fetures__content pt-200">
                            <p className="d-md-none d-lg-block">Gota store with a tool that makes design simple for everyone</p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12">
                    <div className="fetures">
                        <div className="fetures__thumb fix">
                            <a href="shop.html"><img src="./assets/img/features/fe-test.png" alt="features1" /></a>
                        </div>
                        <div className="fetures__content">
                            <h4 className="feature-title mb-40">Jacket<br />For women’s</h4>
                            <p className="d-md-none d-lg-block">all products <span className="discount"><a href="#">up to 70%
                                        off</a></span> limited time discount</p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12">
                    <div className="fetures">
                        <div className="fetures__thumb fix">
                            <a href="shop.html"><img src="./assets/img/features/fe-test-1.png" alt="features1" /></a>
                        </div>
                        <div className="fetures__content">
                            <h4 className="feature-title mb-40">Jacket<br />For women’s</h4>
                            <p className="d-md-none d-lg-block">all products <span className="discount"><a href="#">up to 70%
                                        off</a></span> limited time discount</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        // features area end  
    )
}