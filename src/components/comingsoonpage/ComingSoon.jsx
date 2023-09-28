import React from "react";
import "./ComingSoon.css";
import comingsoon from "../images/transfer.jpg";
import Footer from "../footer/Footer";
import Nav from "../page/Nav";
const ComingSoon = () => {
  return (
    <>
      <Nav />
      <div className="coming-container">
        <div className="coming-img">
          <img src={comingsoon} alt="payment" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ComingSoon;
