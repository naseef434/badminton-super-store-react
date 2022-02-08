import React, { useEffect, useState } from "react";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import blog_details_img from "./blog_details.jpg";
export default function BlogDetails(props) {
  const [data, setdata] = useState({});
  useEffect(async()=> {
    const res= await props.getBlogById()
    setdata(res)
  }, [])
  console.log(data);
  return (
    <div>
    
      {/* start blog details area */}
      <section className="blog-aread pt-20">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12">
              <div className="blogitem blogitem2">
                <div className="blogitem__thumb">
                  <img src={data.thumbnail} />
                </div>
                <div className="blogitem__content">
                  <h2 className="blog-title-2">
                  {data.title}
                  </h2>
                  <div className="blogitem__content--meta">
                    <ul>
                      <li>
                        BY: <span>{data.created_by}</span>
                      </li>
                      <li>{data.date_posted}</li>
                      <li>
                        <span>02 COMMENTS</span>
                      </li>
                    </ul>
                  </div>
                  <p>
                   {data.content}
                  </p>
                  {/* <div className="blogitem__quote">
                    <h5>
                      “But I must explain to you how all this mistaken idea of
                      denouncing pleasure and praising pain wasNeque porro
                      quisquam est qui dolorem ipsum quia dolor sit amet...”
                    </h5>
                  </div> */}
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
                    {data?.images?.map((img)=>(
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        <div className="blog__readableimge mb-30">
                         
                          <img src={img} />
                        </div>
                      </div>
                    ))}
                    
                    
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
      
    </div>
  );
}
