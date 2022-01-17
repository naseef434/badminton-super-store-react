import React from 'react'
import Footer from '../footer/Footer'
import Navbar from '../navbar/Navbar'
import Award from './Award'
import BreadCrumb from './BreadCrumb'
import History from './History'
import Shipping from './Shipping'
import Team from './Team'


export default function index() {
    return (
        <div>
           
            <BreadCrumb  />
            <History />
            <Award />
            <Shipping />
            <Team />
          
        </div>
    )
}
