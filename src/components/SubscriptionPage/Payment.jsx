import React from 'react'
import Navbar from '../navbar/Navbar';
import comingsoon from '../images/coming-soon.png';
import Footer from '../footer/Footer';
import "./Subscription.css";

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