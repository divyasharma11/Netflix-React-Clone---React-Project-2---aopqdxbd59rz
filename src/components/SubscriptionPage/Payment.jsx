import React from "react";
import "./Subscription.css";
import comingsoon from "../images/coming-soon.png";
import Footer from "../footer/Footer";
import Nav from "../page/Nav";
const Payment = () => {
  return (
    <>
      <Nav />
      <div className="signup-container">
        <div className="payment-img">
          <img src={comingsoon} alt="payment" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Payment;
