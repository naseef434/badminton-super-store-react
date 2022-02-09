import React from "react";
import { Link } from "react-router-dom";

export default function BlogArea({ blog }) {
  const first_blog = blog ? blog && blog[0] : "nothing found";
  const first_three = blog.slice(1, 3);
 
  return (
    <div>
      <div className="blog-area mb-100">
        <div className="container">
          <div className="section-wrapper text-center mb-35">
            <h2 className="section-title">
              <a href="blog.html">from our blog</a>
            </h2>
            <p>
              Commodo sociosqu venenatis cras dolor sagittis integer luctus sem
              primis
              <br /> eget maecenas sed urna malesuada.
            </p>
          </div>
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
              <div
                className="blog attachment-gota-post-thumbwide size-gota-post-thumbwide wp-post-image"
                width="685"
                height="450"
                alt=""
                loading="lazy"
                style={{
                  backgroundImage: `url(${first_blog?.thumbnail})`}}
              >
                <div className="blog__content">
                  <h3 className="blog-title ">
                    <Link to={`/events/${first_blog?.id}`}>
                      {first_blog?.title}
                    </Link>
                  </h3>
                  <p>
                    {first_blog?.created_by} /
                    <span> {first_blog?.date_posted}</span>
                  </p>
                  <Link to={`/events/${first_blog?.id}`}>Continue reading</Link>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
              {first_three?.map((item, idx) => (
                <div className="bpost m-0">
                  <div className="bpost__thumb">
                    <img
                      src={item.thumbnail}
                      alt="blog_post"
                      height={"198px"}
                      width={"250px"}
                    />
                  </div>
                  <div className="bpost__content">
                    <h3 className="blog-title title-2">
                      <Link to={`/events/${item?.id}`}>{item.title}</Link>
                    </h3>
                    <p>
                      By <span>{item?.created_by} </span>/{item?.date_posted}
                    </p>
                    <p>
                      Sapien luctus id justo suscipit nonummy eget hymenaeos...
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
