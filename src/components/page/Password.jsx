import React, { useState, useRef, useEffect } from 'react';
import Nav from './Nav';
import './Style.css';
import Footer from '../footer/Footer';
import axios from 'axios';
import bcrypt from 'bcryptjs';
import { useNavigate } from 'react-router-dom';

const token = localStorage.getItem('Token');

const Password = () => {
  const navigate = useNavigate();
  const [passDetails, setPassDetails] = useState({
    email: '',
    currentPassword: '',
    newPassword: '',
    reNewPassword: '',
  });
  const [userData, setUserData] = useState({});
  const [update, setUpdate] = useState(false);
  const [signOut, setSignOut] = useState(true);

  const { email, currentPassword, newPassword, reNewPassword } = passDetails;

  const emailRef = useRef(null);
  const passRef = useRef(null);
  const newPassRef = useRef(null);
  const reNewPasswordRef = useRef(null);

  useEffect(() => {
    const userInfo = localStorage.getItem('userDetails');

    if (userInfo) {
      setUserData(JSON.parse(userInfo));
    }
  }, [update]);

  const checkboxHandler = () => {
    setSignOut(!signOut);
  };

  const handlePasChange = (e) => {
    const { name, value } = e.target;
    setPassDetails((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    if (name === 'email') {
      emailRef.current.style.display = 'none';
    } else if (name === 'currentPassword') {
      passRef.current.style.display = 'none';
    } else if (name === 'newPassword') {
      newPassRef.current.style.display = 'none';
    } else if (name === 'reNewPassword') {
      reNewPasswordRef.current.style.display = 'none';
    }
  };

  const handleUpdatePassword = async () => {
    const emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    const matchPassword = await bcrypt.compare(
      currentPassword,
      userData?.userPassword
    );

    if (!matchPassword) {
      passRef.current.style.display = 'block';
      return;
    }
    if (email !== userData?.userEmail || !email.match(emailPattern)) {
      emailRef.current.style.display = 'block';
      return;
    }
    if (newPassword.length < 6 || newPassword.length > 60 || newPassword === '') {
      newPassRef.current.style.display = 'block';
      return;
    }
    if (newPassword !== reNewPassword || reNewPassword === '') {
      reNewPasswordRef.current.style.display = 'block';
      return;
    }

    if (currentPassword === newPassword && currentPassword !== '') {
      alert('current  password and new password should be different.');
      return;
    }

    if (currentPassword === '' || newPassword === '' || reNewPassword === '') {
      alert('All fields are mandatory.');
      return;
    }

    if (
      matchPassword &&
      (newPassword === reNewPassword || reNewPassword !== '' || newPassword !== '')
    ) {
      try {
        const response = await axios.patch(
          'https://academics.newtonschool.co/api/v1/user/updateMyPassword',
          {
            name: userData?.userName,
            email: userData?.userEmail,
            passwordCurrent: currentPassword,
            password: newPassword,
            appType: 'ott',
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
              projectId: 'aopqdxbd59rz',
            },
          }
        );

        if (signOut) {
          localStorage.removeItem('Token');
          localStorage.removeItem('userDetails');
          setUpdate(true);
        }

        localStorage.setItem(
          'userDetails',
          JSON.stringify({
            ...userData,
            userPassword: newPassword,
          })
        );

        setPassDetails({
          email: '',
          currentPassword: '',
          newPassword: '',
          reNewPassword: '',
        });

        setUpdate(true);
      } catch (error) {
        console.error('Update password error:', error);
      }
    }
  };

  useEffect(() => {
    let timeoutId;
    if (update) {
      timeoutId = setTimeout(() => {
        localStorage.removeItem('Token');
        localStorage.removeItem('userDetails');
        navigate('/');
      }, 1000);
    }
    return () => {
      clearTimeout(timeoutId);
    };
  }, [update]);

  return (
    <>
      <Nav />
      <div className="password-container">
        <div>
          <h1>Change your password</h1>
          <p>Protect your account with a unique password at least 6 characters long.</p>
          <div className='pass-container'>
            <input
              className='pas-input'
              type='email'
              name='email'
              value={email}
              onChange={handlePasChange}
              placeholder='Enter your email'
            />
            <p className="pass-ref" ref={emailRef}>
              Email didn't match.
            </p>
            <input
              className='pas-input'
              type='password'
              name='currentPassword'
              value={currentPassword}
              onChange={handlePasChange}
              placeholder='Enter current password'
            />
            <p className="pass-ref" ref={passRef}>
              Password didn't match.
            </p>

            <input
              className='pas-input'
              type='password'
              name='newPassword'
              value={newPassword}
              onChange={handlePasChange}
              placeholder='New Password (6-60 characters)'
            />
            <p className="pass-ref" ref={newPassRef}>
              Password should be between 6 and 60 characters long.
            </p>
            <input
              className='pas-input'
              type='password'
              name='reNewPassword'
              value={reNewPassword}
              onChange={handlePasChange}
              placeholder="Enter your password again"
            />
            <p className="pass-ref" ref={reNewPasswordRef}>
              Must match your new password.
            </p>
          </div>
          <div className='typecheck'>
            <input type='checkbox'
              checked={signOut}
              onChange={checkboxHandler}
            />
            <p>Sign out of all devices</p>
          </div>
          <div className='save' onClick={handleUpdatePassword}>
            <button>Save</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Password;
