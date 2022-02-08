import React from "react";
import { Link } from "react-router-dom";
import blog_details_img from "./blog_details.jpg";
export default function BlogArea({blogs}) {
  console.log({blogs});
  return (
    <div>
      {/* blog area start  */}
      <div className="blog__area mb-100 pt-80">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12">
              <div className="bigpost-wrapper">

                {blogs?.map((blog,idx)=>(
                     <div className="bigpost mb-40">
                     <div className="bigpost__thumb">
                       <img src={blog.thumbnail} alt="" />
                     </div>
                     <div className="bigpost__content">
                       <h4>{blog.created_by} </h4>
                       <h2 className="b-title mb-20">
                         <Link to={`/events/${blog?.id}`}>
                         {blog.title}
                         </Link>
                       </h2>
                       <p>
                         {blog.content.substr(0, 500)}…
                       </p>
                       <div className="post-meta pt-15">
                         <p>
                           Post Date: <span> {blog.date_posted} </span>
                         </p>
                       </div>
                     </div>
                   </div>
                ))}
             
            
               
             
           
                <div className="pagination pt-50">
                  <ul>
                    <li>
                      <a href="#">1</a>
                    </li>
                    <li>
                      <a href="#">2</a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="far fa-angle-right" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* blog area end  */}
    </div>
  );
}
