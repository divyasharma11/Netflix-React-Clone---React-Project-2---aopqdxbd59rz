import React from 'react'
import "./Subscription.css";
import comingsoon from '../images/coming-soon.png';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
const Payment = () => {
  return (
    <>
    <Navbar />
    <div className="signup-container">
      <div className='payment-img'>
          <img src={comingsoon} alt='payment' />
      </div>
     </div>
    <Footer />
    </>
  )
}

export default Payment;