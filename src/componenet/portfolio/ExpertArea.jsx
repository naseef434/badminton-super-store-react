import React from 'react'
import imge1 from './expertise-1.jpg'
function ExpertArea() {
    return (
        <div>
            {/* expert area start  */}
<div className="expert__area mb-130">
  <div className="container">
    <div className="service__wrapper text-center mb-50">
      <h2 style={{backgroundColor:"black"}}>our services</h2>
    </div>
    <div className="row">
      <div className="col-xl-5 col-lg-5 col-md-5 offset-xl-1">
        <div className="expert__thumb">
          <img src={imge1} alt="" />
        </div>
      </div>
      <div className="col-xl-6 col-lg-6 col-md-6 pl-50">
        <div className="expertsingle mb-60 pt-30">
          <div className="expertsingle__thumb">
            <span><i className="fal fa-car" /></span>
          </div>
          <div className="expertsingle__content">
            <h5>Fast delivery </h5>
            <p>Nunc et augue pulvinar, luctus mi non, sagittis odio. <br /> Phasellus congue sem nulla.non orci malesu da vel. <br /> Aliquam posuere mi eros.</p>
          </div>
        </div>
        <div className="expertsingle mb-60">
          <div className="expertsingle__thumb expertsingle__content">
            <h5>item inspection </h5>
            <p>Nunc et augue pulvinar, luctus mi non, sagittis odio. <br /> Phasellus congue sem nulla.non orci malesu da vel. <br /> Aliquam posuere mi eros.</p>
          </div>
          <div className="expertsingle__content expertsingle__thumb">
            <span><i className="fal fa-people-carry" /></span>
          </div>
        </div>
        <div className="expertsingle ">
          <div className="expertsingle__thumb">
            <span><i className="fal fa-box" /></span>
          </div>
          <div className="expertsingle__content">
            <h5>boxing service</h5>
            <p>Nunc et augue pulvinar, luctus mi non, sagittis odio. <br /> Phasellus congue sem nulla.non orci malesu da vel. <br /> Aliquam posuere mi eros.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{/* expert area end  */}

        </div>
    )
}

export default ExpertArea
