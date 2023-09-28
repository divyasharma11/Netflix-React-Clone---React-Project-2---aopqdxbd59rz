import React, { useEffect, useState } from "react";
import logo from "../images/logo.png";
import poster1 from "../images/poster1.png";
import poster2 from "../images/poster2.jpg";
import poster3 from "../images/poster3.jpg";
import poster4 from "../images/poster4.jpg";
import "./MainPage.css";
import { Link, useNavigate } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import Modal from "react-modal";
import LanguageIcon from "@mui/icons-material/Language";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const MainPage = () => {
  const navigate = useNavigate(null);

  const handleSignIn = () => {
    navigate("/signin");
  };

  return (
    <>
      <nav className="login-nav">
        <div className="logo-container">
          <img src={logo} alt="Netflix Logo" className="logo" />
        </div>
        <div className="login-btn">
          <div className="foot-btn">
            <LanguageIcon className="language" />
            <p>English</p>
            <ArrowDropDownIcon className="key" />
          </div>
          <div>
            <button onClick={handleSignIn}>Sign In</button>
          </div>
        </div>
      </nav>
      <div className="hero-section">
        <div className="content">
          <h1>Unlimited movies, TV shows and more</h1>
          <p>Watch anywhere. Cancel anytime.</p>
          <p>
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <div className="div">
            <button className="start-btn" onClick={() => navigate("/signup")}>
              Get Started
            </button>
            <ChevronRightIcon className="ChevronRightIcon" />
          </div>
        </div>
      </div>
      <hr
        style={{
          width: "100%",
          height: "10px",
          backgroundColor: "#333",
          border: "none",
        }}
      />
      <div className="movie-section">
        <div className="movie-trailer">
          <iframe
            src="https://www.youtube.com/embed/ndl1W4ltcmg"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div id="movie-text">
          <div className="movie-title">The Witcher</div>
          <div className="movie-description">
            Geralt of Rivia, a solitary monster hunter,
            <br />
            world where people often prove more wicked than beasts.
          </div>
          <div className="movie-release-date">Released December 20, 2019</div>
        </div>
      </div>
      <hr
        style={{
          width: "100%",
          height: "10px",
          backgroundColor: "#333",
          border: "none",
        }}
      />

      <div className="movie-section">
        <div id="movie-text">
          <div className="movie-title">Enjoy on your TV</div>
          <div className="movie-description">
            Watch on smart TVs, PlayStation, Xbox,
            <br />
            Chromecast, Apple TV, Blu-ray
            <br />
            players and more.
          </div>
        </div>
        <div className="movie-poster">
          <img
            src="https://image.tmdb.org/t/p/w300/8WUVHemHFH2ZIP6NWkwlHWsyrEL.jpg"
            alt="Movie poster for The Witcher"
          />
        </div>
      </div>
      <hr
        style={{
          width: "100%",
          height: "10px",
          backgroundColor: "#333",
          border: "none",
        }}
      />

      <div className="movie-section">
        <div className="movie-poster">
          <img src={poster1} alt="Movie poster for The Witcher" />
        </div>
        <div id="movie-text">
          <div className="movie-title">
            Download your shows <br />
            to watch offline
          </div>
          <div className="movie-description">
            Save your favourites easily and <br />
            always have something to watch.
          </div>
        </div>
      </div>
      <hr
        style={{
          width: "100%",
          height: "10px",
          backgroundColor: "#333",
          border: "none",
        }}
      />
      <div className="movie-section">
        <div id="movie-text">
          <div className="movie-title">Watch everywhere</div>
          <div className="movie-description">
            Stream unlimited movies and TV shows on <br />
            your phone, tablet, laptop, and TV.
          </div>
        </div>
        <div className="movie-poster">
          <img src={poster3} alt="Movie poster for The Witcher" />
        </div>
      </div>
      <hr
        style={{
          width: "100%",
          height: "10px",
          backgroundColor: "#333",
          border: "none",
        }}
      />

      <div className="movie-section">
        <div className="movie-poster">
          <img src={poster4} alt="Movie poster for The Witcher" />
        </div>
        <div id="movie-text">
          <div className="movie-title">
            Create profiles for <br />
            kids
          </div>
          <div className="movie-description">
            Send children on adventures with their favourite <br />
            characters in a space made just <br />
            for them—free with your membership.
          </div>
        </div>
      </div>
      <hr
        style={{
          width: "100%",
          height: "10px",
          backgroundColor: "#333",
          border: "none",
        }}
      />

      <div className="cart-Container">
        <h1>Frequently Asked Questions</h1>
        <div className="cart-content">
          <div>What is Netflix?</div>
          <div>
            <AddIcon />
          </div>
        </div>
        <div className="cart-content">
          <div>How much does Netflix cost?</div>
          <div>
            <AddIcon />
          </div>
        </div>
        <div className="cart-content">
          <div>Where can i watch?</div>
          <div>
            <AddIcon />
          </div>
        </div>
        <div className="cart-content">
          <div>How do i cancel?</div>
          <div>
            <AddIcon />
          </div>
        </div>
        <div className="cart-content">
          <div>What can i watch on Netflix?</div>
          <div>
            <AddIcon className="icon" />
          </div>
        </div>
        <div className="cart-content">
          <div>Is Netflix good for kids?</div>
          <div>
            <AddIcon className="icon" />
          </div>
        </div>
        <h2>
          Ready to watch? Enter your email to create or restart your membership.
        </h2>
        <div className="div">
          <button className="start-btn" onClick={() => navigate("/signup")}>
            Get started
          </button>
          <ChevronRightIcon className="ChevronRightIcon" />
        </div>
      </div>
      <hr
        style={{
          width: "100%",
          height: "10px",
          backgroundColor: "#333",
          border: "none",
        }}
      />
      <div className="footer-content">
        <p className="tagp">Questions? Call 000-800-919-1694</p>
        <div className="footer">
          <div className="footer-links">
            <Link className="foot">FAQ</Link>
            <Link className="foot">Media Center</Link>
            <Link className="foot">Ways to Watch</Link>
            <Link className="foot">Cookies Prefrences</Link>
            <Link className="foot">Speed Test</Link>
          </div>
          <div className="footer-links">
            <Link className="foot">Help Center</Link>
            <Link className="foot">Investor Relation</Link>
            <Link className="foot">Terms of Use</Link>
            <Link className="foot">Corporate Information</Link>
            <Link className="foot">Legal Notices</Link>
          </div>
          <div className="footer-links">
            <Link className="foot">About</Link>
            <Link className="foot">Jobs</Link>
            <Link className="foot">Privacy</Link>
            <Link className="foot">contact Us</Link>
            <Link className="foot">Only on Netflix</Link>
          </div>
        </div>
        <div className="foot-btn">
          <LanguageIcon className="language" />
          <p>English</p>
          <ArrowDropDownIcon className="key" />
        </div>
      </div>
    </>
  );
};

export default MainPage;
