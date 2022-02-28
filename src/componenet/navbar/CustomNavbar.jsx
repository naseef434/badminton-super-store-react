import React from 'react'
import { Link } from 'react-router-dom'
import './mystyle.css'
function CustomNavbar({shopMenu}) {
  console.log(shopMenu);
  return (
    
        <div className="wrapper">
  <nav>
    <input type="checkbox" id="show-search" />
    <input type="checkbox" id="show-menu" />
    <label htmlFor="show-menu" className="menu-icon"><i className="fas fa-bars" /></label>
    <div className="content">
      <div className="logo"> <img src="./assets/img/logo.png" alt="" height={"76px"} /></div>
      <ul className="links">
        <li><Link to="/">Home </Link></li>
        <li> <Link to="#">Shop</Link></li>
        <li><Link to="/service">Service</Link></li>
        <li> <Link to="/events">Events</Link></li>
        <li> <Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact Us </Link></li>
        <li>
          <a href="#" className="desktop-link">Features</a>
          <input type="checkbox" id="show-features" />
          <label htmlFor="show-features">Features</label>
          <ul>
            <li><a href="#">Drop Menu 1</a></li>
            <li><a href="#">Drop Menu 2</a></li>
            <li><a href="#">Drop Menu 3</a></li>
            <li><a href="#">Drop Menu 4</a></li>
          </ul>
        </li>
        <li>
          <a href="#" className="desktop-link">Services</a>
          <input type="checkbox" id="show-services" />
          <label htmlFor="show-services">Services</label>
          <ul>
            {/* <li><a href="#">Drop Menu 1</a></li>
            <li><a href="#">Drop Menu 2</a></li>
            <li><a href="#">Drop Menu 3</a></li> */}
            {shopMenu?.map((menu)=>(
                  <li>
                  <a href="#" className="desktop-link">{menu.name}</a>
                  <input type="checkbox" id="show-items" />
                  <label htmlFor="show-items">{menu.name}</label>
                  <ul>
                    {menu?.category.map((item)=>(
                      <li><a href="#">{item.name}</a></li>
                    ))}
                    
                   
                  </ul>
                </li>
            ))}
        
          </ul>
        </li>
        <li><a href="#">Feedback</a></li>
      </ul>
    </div>
    <label htmlFor="show-search" className="search-icon"><i className="fas fa-search" /></label>
    <form action="#" className="search-box">
      <input type="text" placeholder="Type Something to Search..." required />
      <button type="submit" className="go-icon"><i className="fas fa-long-arrow-alt-right" /></button>
    </form>
  </nav>
</div>

    
  )
}

export default CustomNavbar