import React, { useEffect, useRef, useState } from "react";
import "./Signup.css";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import google from "../images/google-icon.png";
import github from "../images/github-icon.png";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();
  
  const [formDetails, setFormDetails] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
  });

  const { name, email, password } = formDetails;
  const [registered, setRegistered] = useState(false);
  const handleSignup = (e) => {
    const { name, value } = e.target;
    setFormDetails((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
   
  

  const signUpHandler=async (e)=>{
    e.preventDefault();
    const formErrors = {};
    const emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    
    if (name.length < 3) {
      formErrors.name = 'name must be at least 3 characters.';
    }
    if (!email.match(emailPattern)) {
      formErrors.email = 'email is invalid.';
    }
    if (password.length<3 ) {
      formErrors.password = 'Password must be at least 6 characters long.';
    }
    try {
      const response = await axios.post(
        "https://academics.newtonschool.co/api/v1/user/signup",
        {
          name: name,
          email: email,
          password: password,
          appType: "ott",
        },
        {
          headers: {
            projectId: "aopqdxbd59rz",
          },
        }
      );
      // console.log("Signup successful:", response);
      setRegistered(true);
      alert("register successfully!!");
    } catch (error) {
      // console.log("Signup Error:", error);
      if (
        error.response &&
        error.response.data &&
        error.response.data.message === "User already exists"
      ) {
        setRegistered(false);
       
      } else {
        setRegistered(false);
      }
    }
  


    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      navigate('/');
      setFormDetails({
        name: '',
        email: '',
        password: '',
      });
      setErrors({
        name: '',
        email: '',
        password: '',
      });
    }
    setRegistered(true);
  }
  useEffect(() => {
    if (registered) {
      setTimeout(() => {
        navigate("/");
      }, 1000);
    }
  }, [registered]);

  return (
    <>
      <Navbar />
      <div className="signup-container">
        <div className="content1">
          <h5>STEP 1 OF 2</h5>
          <p>
            Welcome back!
            <br />
            Joining Netflix is easy.
          </p>
          <div className="form">
            <input
              className="input-text"
              type="text"
              id="name"
              placeholder="name"
              name="name"
              value={name}
              onChange={handleSignup}
              required
            />
            <div className="errors">
            {errors.name && <p  className="error-message">{errors.name}</p>}
            </div>
            <input
              className="input-text"
              type="email"
              id="email"
              name="email"
              placeholder="email"
              value={email}
              onChange={handleSignup}
            />
            <div className="errors">
             {errors.email && <p  className="error-message">{errors.email}</p>}
            </div>
            <input
              className="input-text"
              type="password"
              id="password"
              name="password"
              placeholder="password"
              value={password}
              onChange={handleSignup}
            />
            <div className="errors">
             {errors.password && <p  className="error-message">{errors.password}</p>}
            </div>          
            <button 
            className="signup-btn"
             onClick={signUpHandler}>
              Sign up
              </button>
            <div id="text">
              Already have an account? <Link to={"/ "}>Sign in</Link>
            </div>
            {/* <div className="authentication">
            <div className="google" onClick={googleLogin}>
              <img src={google} />
            </div>
            <div className="google">
              <img src={github} />
            </div>
            </div> */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Signup;
