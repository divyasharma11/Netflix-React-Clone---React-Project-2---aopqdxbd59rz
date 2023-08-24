import React from "react";
import Nav from "./Nav";
import './Style.css';
import upi from '../images/upi.jpg'
import CollectionsIcon from '@mui/icons-material/Collections';
import { useNavigate } from "react-router-dom";
import Footer from "../footer/Footer";
const Account = () => {
  const navigate=useNavigate();
  return (
    <>
      <Nav/>
      <div className="account-container">
        <div className="ac-container">
        <div className="ac-contents">
          <h3>Account</h3>
          <CollectionsIcon className="icon"/>
          <p>member since March 2023</p>
        </div>
          <hr />
        <div className="ac-content">
          <div>
            <h2>MEMBERSHIP & BILLING</h2>
            <button className="spans">Cancel Membership</button>
          </div>
          <div className="ac-content">
            <div className="acc">
              <h4>koksaurav@gmail.com</h4>
              <h5>password:*******</h5>
              <h5>phone:09337764382</h5>
              <div className="under-content">        
              <img src={upi} alt="upi" />
              <h5>g****@paytm</h5>
               </div>
            </div>
            <div className="tag-p">
              <p>Change email</p>
              <p onClick={()=>navigate("/password")}>Change password</p>
              <p>Change phone number</p>
              <p>Varify phone number</p>
              <div className="under-ct">
              <p>Manage payment info </p>
               <p>Billing details</p>
                <p>Redeem gift card or promo code</p>
              </div>
            </div>
          </div>
        </div>
            <hr />
        <div className="ac-content">
            <h2>PLAN DETAILS</h2>
            <p>Mobile</p>
            <p className="tag-p">change plan</p>
          </div>
          <hr />
        <div className="ac-content">
          <h2>SECURITY & PRIVACY</h2>
          <p>
            Control access to this account, view the <br/>
            most recently active devices
            and more.
          </p>
            <div className="tag-p">
            <p>Manage access and devices</p> 
            <p>Sign out of all devices</p>
            </div>
        </div>
        <hr/>
      </div>
      </div>
      <Footer />
    </>
  );
};

export default Account;
