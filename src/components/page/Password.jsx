import React, { useState } from 'react'
import Nav from './Nav';
import './Style.css'
import Footer from '../footer/Footer';

const Password = () => {
    const [passDetails,setPassDetails]=useState({
        currentpassword:"",
          newpassword:"",
    });
    const{currentpassword,newpassword}=passDetails;
  
    const handlePasChange=(e)=>{
      // const { name, value } = e.target;
      // setPassDetails((prevData) => ({
      //   ...prevData,
      //   [name]: value,
      // }));
      setPassDetails(e.target.value)
    }
    return (  
    <>
    <Nav />
    <div className="password-container">
        <div>
        <h1>Change your password</h1>
        <p>Protect your account with a unique password at least 6 character long.</p>
          <div className='pass-container'>
          <input
          className='pas-input'
          type='password'
          name='current password'
          value={currentpassword}
          onChange={handlePasChange}
          placeholder='Current Password'
          />
          <input
          className='pas-input'
          type='password'
          name='new password'
          value={newpassword}
          onChange={handlePasChange}
          placeholder='New Password (6-60 character)'
          />
          <input
          className='pas-input'
          type='password'
          name='new password'
          value={newpassword}
          onChange={handlePasChange}
          placeholder='Re-enter new Password'
          />
          </div>
          <div className='typecheck'>
          <input 

          type='checkbox'
          />
          <p>Sign out of all devices</p>
          </div>
          <div className='save'>
           <button>Save</button>
          </div>
          </div>
    </div>
    <Footer />
    </>
  )
}

export default Password;