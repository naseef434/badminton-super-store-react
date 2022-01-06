import React from 'react'
import Footer from '../footer/Footer'
import Navbar from '../navbar/Navbar'
import CompanySocialStart from './CompanySocialStart'
import ContactArea from './ContactArea'
import Parallex from './Parallex'

export default function Index() {
    return (
        <div>
            <Navbar />
            <Parallex />
            <ContactArea />
            <CompanySocialStart />
            <Footer />
        </div>
    )
}
