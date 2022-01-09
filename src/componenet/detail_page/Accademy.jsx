import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../footer/Footer'
import Navbar from '../navbar/Navbar'
import accademy from './accademy-1.jpg'
export default function Accademy() {
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
                    The Badminton Accademy{" "}
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
                        <img src={accademy} alt="blogthumb" />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                      <div className="blog__readableimge mb-30">
                        <img src={accademy} alt="blogthumb" />
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
                      <img src={accademy} alt="blogthumb" />
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
                    <img src={accademy} alt="blogthumb" />
                    <div className="singleBlog__content">
                      <p>Diam arcu, fringilla a sem con</p>
                      <span>August 4, 2020</span>
                    </div>
                  </div>
                  <div className="b_single pt-30 mb-20">
                    <div className="b_single__thumb">
                      <img src={accademy} alt="blogthumb" />
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
                      <img src={accademy} alt="blogthumb" />
                    </div>
                    <div className="b_single__content">
                      <a href="blog-details.html">
                        Take A Look At The Most Photo
                      </a>
                      <span>August 4, 2020</span>
                    </div>
                  </div>
                 
                </div>
            

            
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
  <div className="container ">
    {/* FOR DEMO PURPOSE */}
    {/* <header className="text-center mb-5 text-white">
      <div className="row">
        <div className="col-lg-7 mx-auto">
          <h1>Fees table</h1>
        
        </div>
      </div>
    </header> */}
    {/* END */}
    <div className="row text-center align-items-end">
      {/* Pricing Table*/}
      <div className="col-lg-4 mb-5 mb-lg-0">
        <div className="bg-white p-5 rounded-lg shadow">
          <h1 className="h6 text-uppercase font-weight-bold mb-4">Basic</h1>
          <h2 className="h1 font-weight-bold">199 - AED<span className="text-small font-weight-normal ml-2">/ month</span></h2>
          <div className="custom-separator my-4 mx-auto bg-primary" />
          <ul className="list-unstyled my-5 text-small text-left">
            <li className="mb-3">
              <i className="fa fa-check mr-2 text-primary" /> Lorem ipsum dolor sit amet</li>
          
            <li className="mb-3 text-muted">
              <i className="fa fa-times mr-2" />
              <del>Sed ut perspiciatis</del>
            </li>
          </ul>
          <a href="#" className="btn btn-primary btn-block p-2 shadow rounded-pill">Book Now</a>
        </div>
      </div>
      {/* END */}
        {/* Pricing Table*/}
        <div className="col-lg-4 mb-5 mb-lg-0">
        <div className="bg-white p-5 rounded-lg shadow">
          <h1 className="h6 text-uppercase font-weight-bold mb-4">Basic</h1>
          <h2 className="h1 font-weight-bold">199 - AED<span className="text-small font-weight-normal ml-2">/ month</span></h2>
          <div className="custom-separator my-4 mx-auto bg-primary" />
          <ul className="list-unstyled my-5 text-small text-left">
            <li className="mb-3">
              <i className="fa fa-check mr-2 text-primary" /> Lorem ipsum dolor sit amet</li>
          
            <li className="mb-3 text-muted">
              <i className="fa fa-times mr-2" />
              <del>Sed ut perspiciatis</del>
            </li>
          </ul>
          <a href="#" className="btn btn-primary btn-block p-2 shadow rounded-pill">Book Now</a>
        </div>
      </div>
      {/* END */}
        {/* Pricing Table*/}
        <div className="col-lg-4 mb-5 mb-lg-0">
        <div className="bg-white p-5 rounded-lg shadow">
          <h1 className="h6 text-uppercase font-weight-bold mb-4">Basic</h1>
          <h2 className="h1 font-weight-bold">199 - AED<span className="text-small font-weight-normal ml-2">/ month</span></h2>
          <div className="custom-separator my-4 mx-auto bg-primary" />
          <ul className="list-unstyled my-5 text-small text-left">
            <li className="mb-3">
              <i className="fa fa-check mr-2 text-primary" /> Lorem ipsum dolor sit amet</li>
          
            <li className="mb-3 text-muted">
              <i className="fa fa-times mr-2" />
              <del>Sed ut perspiciatis</del>
            </li>
          </ul>
          <a href="#" className="btn btn-primary btn-block p-2 shadow rounded-pill">Book Now</a>
        </div>
      </div>
      {/* END */}
     
    </div>
  </div>
</section>
<br />

      {/* start blog details end */}
      <Footer />
    </div>
       
    )
}
