import React from "react";

export default function award() {
  return (
    <div>
      {/* award area start */}
      <div className="award__area mb-30">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="singleaward text-center mb-50">
                <div className="singleaward__thumb">
                  {/* <img src="" alt=""> */}
                  <span>
                    <i className="fad fa-trophy-alt" />
                  </span>
                </div>
                <div className="singleaward__content pb-50">
                  <h3 className="title-4">19 Years of Experience</h3>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="singleaward singleaward_2 text-center mb-50">
                <div className="singleaward__thumb">
                  {/* <img src="" alt=""> */}
                  <span>
                    <i className="fal fa-thumbs-up" />
                  </span>
                </div>
                <div className="singleaward__content">
                  <h3 className="title-4">Awesome Performance</h3>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="singleaward  text-center mb-50">
                <div className="singleaward__thumb">
                  {/* <img src="" alt=""> */}
                  <span>
                    <i className="fal fa-user" />
                  </span>
                </div>
                <div className="singleaward__content pb-50">
                  <h3 className="title-4">60,000+ Happy Customer</h3>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* award area end */}
    </div>
  );
}
