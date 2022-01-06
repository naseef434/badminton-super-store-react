import React from "react";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import blog_details_img from "./blog_details.jpg";
export default function BlogDetails() {
  return (
    <div>
      <Navbar />
      {/* start blog details area */}
      <section className="blog-aread pt-20">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12">
              <div className="blogitem blogitem2">
                <div className="blogitem__thumb">
                  <img src={blog_details_img} />
                </div>
                <div className="blogitem__content">
                  <h2 className="blog-title-2">
                    Designers, Use Uncode’s Visuals for Great Visitor
                    Experiences in 2018{" "}
                  </h2>
                  <div className="blogitem__content--meta">
                    <ul>
                      <li>
                        BY: <span>SALIM RANA</span>
                      </li>
                      <li>07 may 2018</li>
                      <li>
                        <span>02 COMMENTS</span>
                      </li>
                    </ul>
                  </div>
                  <p>
                    This tool allows you to completely transform a boring,
                    one-page design. Instead, you can have something
                    eye-catching and for exciting to the viewer. With slide
                    scroll, your users can easily move between sections of your
                    page. They can do so with their to mouse or keyboard.Major
                    companies all over the world, such as Apple have adapted It
                    is accompanied by a case that can contain up to three
                    different diffusers and can be used for dry storage of loose
                    tea. The perfect way to enjoy brewing tea on low hanging
                    fruit to identify… Lighting is a minimal residence located
                    in Tokyo, Japan, designed by Agota. Large tiles were
                    arranged on the counter top plate near the window of the
                    living room, and they were connected to the kitchen counter
                    through the opening in the existing building wall. For me,
                    the most important part of improving at photography has been
                    sharing it. Sign up for an Exposure account, or post
                    regularly to Tumblr, or both. Tell people you’re trying to
                    get better at photography. Talk about it. When you talk
                    about it, other people get excited about it. They’ll come on
                    photo walks with you. They’ll pose for portraits. They’ll
                    buy your prints, zines, whatever.
                  </p>
                  <div className="blogitem__quote">
                    <h5>
                      “But I must explain to you how all this mistaken idea of
                      denouncing pleasure and praising pain wasNeque porro
                      quisquam est qui dolorem ipsum quia dolor sit amet...”
                    </h5>
                  </div>
                  <p>
                    On the other hand, we denounce with righteous indignation
                    and dislike men who are so beguiled and demoralized by the
                    of the pleasure of the moment, so blinded by desire, that
                    they cannot foresee the pain and trouble that are bound to
                    ensue; and equal blame belongs to those who fail in their
                    duty through weakness of will, which is the same as saying
                    through shrinking from toil and pain. These cases are
                    perfectly simple and easy to distinguish.
                  </p>
                  <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                      <div className="blog__readableimge mb-30">
                        <img src={blog_details_img} />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                      <div className="blog__readableimge mb-30">
                        <img src={blog_details_img} />
                      </div>
                    </div>
                    <p>
                      Potenti fusce himenaeos hac aenean quis donec vivamus
                      aliquet, wprdpress integer inceptos curae sollicitudin in
                      class sociosqu netus, euismod tempus fermentum odio
                      gravida eleifend viverra pulvinar inceptos ligula
                      consectetur potenti ante porttitor tristique curae
                      scelerisque tristique, dictum eu donec conubia sit rutrum
                      duis viverra in commodo, nisi habitasse viverra praesent a
                      maecenas odio erat tristique praesent .
                    </p>
                    <p>
                      Sem conubia primis proin libero ultrices sem nullam
                      aenean, faucibus cursus hendrerit ornare purus nulla hac,
                      augue mollis in taciti suspendisse ullamcorper sapien
                      velit nibh dapibus id phasellus venenatis porta molestie
                      justo ligula, magna integer sit amet elementum ut
                      himenaeos quam cursus, ipsum aliquam rhoncus tempor erat
                      donec lectus risus.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-3 col-md-6">
              <div className="sidebar__wrapper mb-100">
                <div className="common-widget instagram">
                  <h4 className="mb-20 blog-s-title">Instagram</h4>
                  <div className="instagram-images pt-20 text-center">
                    <a className="popup-image" href="./assets/img/blog/s1.jpg">
                      <img src={blog_details_img} />
                    </a>
                    <a className="popup-image" href="./assets/img/blog/s2.jpg">
                      <img src={blog_details_img} />
                    </a>
                    <a className="popup-image" href="./assets/img/blog/s3.jpg">
                      <img src={blog_details_img} />
                    </a>
                    <a className="popup-image" href="./assets/img/blog/s4.jpg">
                      <img src={blog_details_img} />
                    </a>
                    <a className="popup-image" href="./assets/img/blog/s5.jpg">
                      <img src={blog_details_img} />
                    </a>
                    <a className="popup-image" href="./assets/img/blog/s6.jpg">
                      {" "}
                      <img src={blog_details_img} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* start blog details end */}
      <Footer />
    </div>
  );
}
