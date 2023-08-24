import React from 'react';
import './Style.css'
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import profile from "../images/profile.jpg"
const ManageProfile = () => {
  return (
    <div className='profile-container'>
    <div className='profile-contents'>
      <div className='profile-content'>
      <h1>Edit Profile</h1>
      <hr />
      <div className='proimg'>
        <div > 
        <img src={profile} alt='profile img' />
        </div>
        <div className='right'>
        <div className='swrup'>Swarup</div>
        <p>language:</p>
        <span className='eng'>English 
        <KeyboardArrowDownIcon className='keybrd'/>
        </span>
        <h3>Game Handle:</h3>
        <p>Your handle is a unique name that'll be used for playing
            with other Netflix members across all Netflix Games.learn more..
        </p>
        <div>Create Game Handle</div>
        <hr/>
        <h3>Maturity settings:</h3>
            <span className='pro-span'>All Maturity Ratings</span>
            <p>Show titles of all maturity ratings for this profile.</p>
             <span className='pro-span'>Edit</span>
             <hr/>
             <h3>Autoplay controls</h3>
             <div className='proinput'>
             <input type='checkbox' />
             <p>Autoplay next episode in a series on all devices.</p>
             <br/>
             <input type='checkbox' />
             <p>Autoplay previous with browsing on all devices.</p> 
             </div>
        <hr/>
        <div className='probtn'>
            <button className='p-btn active'>Save</button>
            <button className='p-btn'>Cancel</button>
        </div>
        </div>
      </div>
      </div>
    </div>
    </div>
  )
}

export default ManageProfile;