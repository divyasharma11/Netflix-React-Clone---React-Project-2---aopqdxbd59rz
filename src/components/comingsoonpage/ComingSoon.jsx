import React from 'react'
import "./ComingSoon.css"
import comingsoon from '../images/transfer.jpg';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
const ComingSoon = () => {
  return (
    <>
    <Navbar />
    <div className="signup-container">
      <div className='coming-img'>
          <img src={comingsoon} alt='payment' />
      </div>
     </div>
    <Footer />
    </>
  )
}

export default ComingSoon;