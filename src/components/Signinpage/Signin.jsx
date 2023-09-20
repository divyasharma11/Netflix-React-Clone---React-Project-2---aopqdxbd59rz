import React, { useEffect, useState } from "react";
import "./Signin.css";
import logo from "../images/logo.png";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Signin = () => {
  const navigate = useNavigate(null);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // const {email, password } = formData;

  useEffect(() => {
    if (isLoggedIn) {
      setTimeout(() => {
        navigate("/home");
      }, 2200);
    }
  }, [isLoggedIn]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const formErrors = {};
    const emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if (!formData.email.match(emailPattern)) {
      formErrors.email = "email is invalid.";
    }
    if (formData.password.length < 3) {
      formErrors.password = "Password must be at least 6 characters long.";
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
      // alert("login successfully!!")
    } catch (error) {
      console.error("Login Error:", error);
      if (
        error.response &&
        error.response.data &&
        error.response.data.message === "User not found"
      ) {
        setIsLoggedIn(false);
      } else {
        setIsLoggedIn(false);
      }
    }
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      navigate("/home");
      setFormData({
        email: "",
        password: "",
      });
      setErrors({
        email: "",
        password: "",
      });
    }
    setIsLoggedIn(true);
  };

  return (
    <>
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
              <div className="errors">
                {errors.email && (
                  <p className="error-message">{errors.email}</p>
                )}
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
                {errors.password && (
                  <p className="error-message">{errors.password}</p>
                )}
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
