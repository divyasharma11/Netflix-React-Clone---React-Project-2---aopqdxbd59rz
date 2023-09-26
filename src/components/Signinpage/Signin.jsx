import React, { useEffect, useRef, useState } from "react";
import "./Signin.css";
import logo from "../images/logo.png";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

const Signin = () => {
  const [success,setSuccess]=useState(false);
  const [error,setError]=useState(false);
  const navigate = useNavigate(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  
  const emailErrorRef = useRef(null);
  const passwordErrorRef = useRef(null);

  useEffect(() => {
    if ( success) {
      setTimeout(() => {
        navigate("/home");
      }, 3000);
    }
  }, [success]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if (!formData.email.match(emailPattern)) {
      emailErrorRef.current.style.display = "block";
    }
    if (formData.password.length < 3 || password.length > 60) {
      passwordErrorRef.current.style.display = "block";
    }

    try {
      const response = await axios.post(
        "https://academics.newtonschool.co/api/v1/user/login",
        {
          email: formData.email,
          password: formData.password,
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

      localStorage.setItem("updatedProfile", img);

      setIsLoggedIn(true);
     setSuccess(true)
    } catch (error) {
      console.error("Login Error:", error);
      if (
        error.response &&
        error.response.data &&
        error.response.data.message === "User not found"
      ) {
        setIsLoggedIn(false);
       setError(true)
      } else {
        setIsLoggedIn(false);
        setError(true)
      }
   setIsLoggedIn(true);
    }
  };
const  onClosePopup1=()=>{
  setSuccess(false);
}
const  onClosePopup2=()=>{
   setError(false)
   window.location.reload();
}
  
  return (
    <>
     {success && <div className="success-container">Successfully loggedin
     <CloseOutlinedIcon className="cross"  onClick={onClosePopup1}/>
     </div>}
     {error && <div className="error-container">
      Email or password is incorrect
      <CloseOutlinedIcon className="cross" onClick={onClosePopup2}/>
      </div>}
      <nav className="login-nav">
        <div className="logo-container" onClick={()=>navigate("/")}>
          <img src={logo} alt="Netflix Logo" className="logo" />
        </div>
      </nav>
      <div className="hero-section">
          <div className="sign-container">
            <h2>Sign In</h2>
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
               <div className="errors" ref={emailErrorRef}>
              Please enter a valid email id.
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
               <div className="errors" ref={passwordErrorRef}>
               Password must be at least 6 characters long.
            </div>
              <div className="login">
                <button onClick={handleLogin}>Login</button>
               </div>
              <div className="remember">
                <span>
                <input type="checkbox" />
                Remember me
                </span>
                <span>need help?</span>
              </div>
              <div id="new">
                New to Netflix?{" "}
                <Link to={"/signup "} className="link2">
                  Sign up now
                </Link>
              </div>
              <br />
            </div>
              <div className="end">
              <p>This page is protected by Google reCAPTCHA to
              <br />
              ensure you're not a bot. 
              <span className="learn-more"> Learn more</span>
              </p>
              </div>
          </div>
      </div>
    </>
  );
};

export default Signin;
