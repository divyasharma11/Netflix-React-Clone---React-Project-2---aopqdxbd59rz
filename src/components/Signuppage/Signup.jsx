import React, { useEffect, useState } from "react";
import "./Signup.css";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import google from "../images/google-icon.png";
import github from "../images/github-icon.png";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase";
import { useDispatch,useSelector } from "react-redux";
import { getRegister } from "../../Redux/loginSlice";

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {isRegister} = useSelector((state) => state.login)
  const [formDetails, setFormDetails] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = formDetails;

  const handleSignup = (e) => {
    const { name, value } = e.target;
    setFormDetails((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
   
  const googleLogin = (event) => {
    event.preventDefault();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log("RESULT", result);
        const userName = result.user.displayName;
        const email = result.user.email;
        localStorage.setItem(
          "user",
          JSON.stringify({
            ...userRef.current,
            username: userName,
            email: email,
            password:password,
            islogged: true,
          })
        );
        navigate("/home");
      })
      .catch((error) => {
        console.log("ERROR", error);
      });
  };
  const signUpHandler=()=>{
    dispatch(getRegister(formDetails));
    if(isRegister){
      navigate("/")
    }
  }
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
            />
            {errors.name && (
              <p style={{ color: "red" }} className="error-message">
                {errors.name}
              </p>
            )}
            <input
              className="input-text"
              type="email"
              id="email"
              name="email"
              placeholder="email"
              value={email}
              onChange={handleSignup}
            />
            {errors.email && (
              <p style={{ color: "red" }} className="error-message">
                {errors.email}
              </p>
            )}
            <input
              className="input-text"
              type="password"
              id="password"
              name="password"
              placeholder="password"
              value={password}
              onChange={handleSignup}
            />
            {errors.password && (
              <p style={{ color: "red" }} className="error-message">
                {errors.password}
              </p>
            )}
            <button className="signup-btn" onClick={signUpHandler}>Sign up</button>
            <div id="text">
              Already have an account? <Link to={"/ "}>Sign in</Link>
            </div>
            <div className="authentication">
            <div className="google" onClick={googleLogin}>
              <img src={google} />
            </div>
            <div className="google">
              <img src={github} />
            </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Signup;
