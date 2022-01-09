import React from "react";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import trading from "./trading.jpg";
import accademy from "./accademy.jpg";
import { Link } from "react-router-dom";

export default function BadmntonSuperStore() {
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
                  {/* <img src="assets/img/blog/1.jpg" alt="blogthumb"/> */}
                  <img src={accademy} alt="blogthumb" />
                </div>
                <div className="blogitem__content">
                  <h2 className="blog-title-2">
                    The Badminton Super Store Concept{" "}
                  </h2>

                  <p>
                    At Engage Sports, we pride ourselves on providing our
                    clients with only the best quality products. We make sure to
                    bring a variety of merchandise, like shoes, rackets,
                    apparel, shuttlecocks, wrist band, string, grips, kitbag,
                    and others. We came to this concept with our vast trading
                    experience for last two decades in UAE & INDIA
                  </p>
                  <div className="blogitem__quote">
                    <h5>
                    It's not always easy to do what's not popular, but that's where you make your money...”
                    </h5>
                  </div>
                  <p>
                    Almost all Famous Badminton Brands are available under one
                    hood, customers can test out our premium quality, branded
                    equipment before they buy to ensure the best purchase We
                    have shifted our pro shop to a unique badminton superstore,
                    with 2000 sqft with an actual badminton court for testing
                    the product So do drop by to see our impressive selection of
                    sports equipment, supplies, and accessories from multiple
                    brands
                  </p>
                  <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                      <div className="blog__readableimge mb-30">
                        <img src={trading} alt="blogthumb" />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                      <div className="blog__readableimge mb-30">
                        <img src={trading} alt="blogthumb" />
                      </div>
                    </div>
                    <p>
                      We also offer professional stringing services and clothing
                      customization services, which our friendly, expert staff
                      would gladly help you with. We’re open seven days a week,
                      Sunday to Saturday
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
                <div className="mainBlog text-center mb-50">
                  <div className="blog__widget">
                    <div className="mainBlog__thumb">
                      <img src={trading} alt="blogthumb" />
                    </div>
                    <div className="mainBlog__content pt-10">
                      <p>
                        There are many variations of passages of
                        <br /> lorem ipsum available, but the majority have
                        <br /> suffered alteration in some form, by injected
                        <br /> humour or randomised words which don’t <br />
                        look even slightly believable.
                        
                      </p>
                      
                    </div>
                    <div class="post-check text-center container">
                      <Link to="/products">
                        <button type="submit" class="btn btn-comment" style={{marginLeft:"80px",backgroundColor:"#d81b33"}}>
                          SHOP NOW
                        </button>
                        </Link>
                      </div>
                    
                  </div>
                  
                </div>

                <div className="common-widget mb-50">
                  <h4 className="mb-40 blog-s-title">Popular Product</h4>
                  <div className="singleBlog mb-30">
                    <img src={trading} alt="blogthumb" />
                    <div className="singleBlog__content">
                      <p>Diam arcu, fringilla a sem con</p>
                      <span>August 4, 2020</span>
                    </div>
                  </div>
                  <div className="b_single pt-30 mb-20">
                    <div className="b_single__thumb">
                      <img src={trading} alt="blogthumb" />
                    </div>
                    <div className="b_single__content">
                      <a href="blog-details.html">
                        Top 10 Outdoor Items For Your{" "}
                      </a>
                      <span>August 4, 2020</span>
                    </div>
                  </div>
                  <div className="b_single pt-30 mb-20">
                    <div className="b_single__thumb">
                      <img src={trading} alt="blogthumb" />
                    </div>
                    <div className="b_single__content">
                      <a href="blog-details.html">
                        Take A Look At The Most Photo
                      </a>
                      <span>August 4, 2020</span>
                    </div>
                  </div>
                  <div className="b_single pt-30 mb-20">
                    <div className="b_single__thumb">
                      <img src={trading} alt="blogthumb" />
                    </div>
                    <div className="b_single__content">
                      <a href="blog-details.html">
                        Simple &amp; Easy DIY Flower Deco
                      </a>
                      <span>August 4, 2020</span>
                    </div>
                  </div>
                  <div className="b_single pt-30 mb-20">
                    <div className="b_single__thumb">
                      <img src={trading} alt="blogthumb" />
                    </div>
                    <div className="b_single__content">
                      <a href="blog-details.html">
                        Sunglasses To Wear This Summer
                      </a>
                      <span>August 4, 2020</span>
                    </div>
                  </div>
                </div>
                <div className="common-widget mb-50">
                  <h4 className="mb-40 blog-s-title">Popular Categories</h4>
                  <div className="blog-category">
                    <ul>
                      <li>
                        <a href="#">
                          creative<span>(5)</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          image <span>(4)</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          music<span>(2)</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          travel<span>(5)</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          uncategorized<span>(5)</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          videos<span>(3)</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="common-widget padding-remove mb-50">
                  <h4 className="mb-20 blog-s-title">Tag</h4>
                  <div className="tags">
                    <a href="#">Basketball</a>
                    <a href="#">Handbag</a>
                    <a href="#">Jackets</a>
                    <a href="#">Kids &amp; Young</a>
                    <a href="#">Training Wear</a>
                    <a href="#">Women’s</a>
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
