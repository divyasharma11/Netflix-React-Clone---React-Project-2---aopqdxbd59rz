import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
const Footer = (props) => {
  return (
    <div className="footer-content1">
      {/* <p>Questions? Call 000-800-919-1694</p> */}
      <p>Netflix Clone By Divya</p>
      <div className="footerr">
        <div className="footer-link">
          <Link className="footr">FAQ</Link>
          <Link className="footr">Media Center</Link>
          <Link className="footr">Ways to Watch</Link>
          <Link className="footr">Cookies Prefrences</Link>
          <Link className="footr">Speed Test</Link>
        </div>
        <div className="footer-link">
          <Link className="footr">Help Center</Link>
          <Link className="footr">Investor Relation</Link>
          <Link className="footr">Terms of Use</Link>
          <Link className="footr">Corporate Information</Link>
          <Link className="footr">Legal Notices</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
