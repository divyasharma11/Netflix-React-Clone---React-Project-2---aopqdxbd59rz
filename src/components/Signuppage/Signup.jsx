import React, { useEffect, useRef, useState } from "react";
import "./Signup.css";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import google from "../images/google-icon.png";
import github from "../images/github-icon.png";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const navigate = useNavigate();
  const [formDetails, setFormDetails] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = formDetails;
  const [registered, setRegistered] = useState(false);
  
  const nameErrorRef = useRef(null);
  const emailErrorRef = useRef(null);
  const passwordErrorRef = useRef(null);
  
  const handleSignup = (e) => {
    const { name, value } = e.target;
    setFormDetails((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const signUpHandler = async (e) => {
    e.preventDefault();
    const emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

    if (name.length < 3) {
      nameErrorRef.current.style.display = "block";
    }
    if (!email.match(emailPattern)) {
      emailErrorRef.current.style.display = "block";
    }
    if (password.length < 4 || password.length > 60) {
      passwordErrorRef.current.style.display = "block";
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
      toast.success("Account successfully Registered!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (error) {
      // console.log("Signup Error:", error);
      if (
        error.response &&
        error.response.data &&
        error.response.data.message === "User already exists"
      ) {
        setRegistered(false);
        toast.error("User with this email is already registered.", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
        setRegistered(false);
        toast.error("Error in signing up. Please try again.", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    }
    setRegistered(true);
  };
  useEffect(() => {
    if (registered) {
      setTimeout(() => {
        navigate("/signin");
      }, 3500);
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
            <div className="errors" ref={nameErrorRef}>
            name must be at least 3 characters.
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
            <div className="errors" ref={emailErrorRef}>
              Please enter a valid email address.
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
             <div className="errors" ref={passwordErrorRef}>
             Password must be at least 6 characters long.
            </div>
            <button className="signup-btn" onClick={signUpHandler}>
              Sign up
            </button>
            <ToastContainer />
            <div id="text">
              Already have an account? <Link to={"/signin "}>Sign in</Link>
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
