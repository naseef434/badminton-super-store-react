import React from 'react'
import Footer from '../footer/Footer'
import Navbar from '../navbar/Navbar'
import Brand from './Brand'
import Gallery from './Gallery'
import Service from './Service'
import ExpertArea from './ExpertArea'
export default function index() {
    return (
        <div>
          
            <Gallery />     
            <Service /> 
            <ExpertArea />   
            {/* <Brand />   */}
          
        </div>
    )
}
