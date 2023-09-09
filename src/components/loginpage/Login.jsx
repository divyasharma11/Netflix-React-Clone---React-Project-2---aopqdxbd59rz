import React, { useEffect, useState } from "react";
import logo from "../images/logo.png";
import poster1 from "../images/poster1.png";
import poster2 from "../images/poster2.jpg";
import poster3 from "../images/poster3.jpg";
import poster4 from "../images/poster4.jpg";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import Modal from "react-modal";
import LanguageIcon from "@mui/icons-material/Language";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import SignOut from "../SignOut";
import axios from "axios";
Modal.setAppElement('#root');

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    width: "350px",
    height: "350px",
    border: "none",
    borderRadius: "10px",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "rgba(0,0,0,0.8)",
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.4)",
  },
};
const Login = () => {
  const navigate = useNavigate(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });
const [isLoggedIn,setIsLoggedIn]=useState(false);

  // const {email, password } = formData;
  
  useEffect(()=>{
    if (isLoggedIn) {
      setTimeout(() => {
        navigate("/home");
      }, 2200);
    }
  },[isLoggedIn]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  const handleOpen = () => {
    setIsModalOpen(true);
  };
  
  function closeModal() {
    setIsModalOpen(false);
  }
  const handleLogin = async(e) => {
    e.preventDefault();
    const formErrors = {};
    const emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if (!formData.email.match(emailPattern)) {
      formErrors.email = 'email is invalid.';
    }
    if (formData.password.length<3 ) {
      formErrors.password = 'Password must be at least 6 characters long.';
    }
   
    try{ 
       const response = await axios.post(
        "https://academics.newtonschool.co/api/v1/user/login",
        {
          email:formData.email,
          password:formData.password,
          appType: "ott",
        },
        {
          headers: {
            projectId: "aopqdxbd59rz",
          },
       }
      );

      const token = response.data.token;

      const name = response.data.data.name;
      const email = response.data.data.email;
      const password = response.data.data.password;
      const img = response.data.data.profileImage;
  
      const userInfo = {
        userName: name,
        userEmail: email,
        userPassword: password,
      };

      localStorage.setItem("Token", token);

      localStorage.setItem("userDetails", JSON.stringify(userInfo));

      localStorage.setItem("updatedProfile",img);

      setIsLoggedIn( true);
      // alert("login successfully!!")
     
    } catch (error) {
      console.error("Login Error:", error);
      if (
        error.response &&
        error.response.data &&
        error.response.data.message === "User not found"
      ){
        setIsLoggedIn(false)
      } else {
        setIsLoggedIn(false)
      }
    }
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      navigate('/home');
      setFormData({
        email: '',
        password: '',
      });
      setErrors({
        email: '',
        password: '',
      });
    }
    setIsLoggedIn(true);
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
            {isLoggedIn ?
            (
            <button onClick={() => SignOut(navigate)}>Sign Out</button>
            ):
            (
            <button onClick={handleOpen}>Sign In</button>
            )
            }
            <Modal
              isOpen={isModalOpen}
              onRequestClose={closeModal}
              style={customStyles}
            >
              <div className="sign-container">
                <p>Sign In</p>
                <div>
                  <input
                    className="inpt-txt"
                    type="email"
                    id="email"
                    name="email"
                    placeholder="email"
                    value={formData.email}
                    onChange={handleOnChange}
                  />
                  <div className="errors">
             {errors.email && <p  className="error-message">{errors.email}</p>}
            </div>
                  <input
                    className="inpt-txt"
                    type="password"
                    id="password"
                    name="password"
                    placeholder="password"
                    value={formData.password}
                    onChange={handleOnChange}
                  />
                   <div className="errors">
             {errors.password && <p  className="error-message">{errors.password}</p>}
            </div>
                  <div className="login">
                    <button onClick={handleLogin}>Login</button>
                  </div>
                  <div>{/* <input type="checkbox" />Remember me */}</div>
                  <div id="new">
                    new to Netflix?{" "}
                    <Link to={"/signup "} className="link2">
                      Sign up now
                    </Link>
                  </div>
                </div>
              </div>
            </Modal>
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
          <button className="start-btn" onClick={() => navigate("/signup")}>Get Started</button>
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
        <button className="start-btn" onClick={() => navigate("/signup")}>Get started</button>
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

export default Login;
