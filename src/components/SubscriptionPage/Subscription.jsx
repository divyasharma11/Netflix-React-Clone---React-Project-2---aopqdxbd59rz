import React from 'react'
import './Subscription.css'
import Nav from "../page/Nav"
import Footer from '../footer/Footer';
import CheckIcon from '@mui/icons-material/Check';
import { useNavigate } from 'react-router-dom';
const Subscription = () => {
 const navigate=useNavigate();
  return (
    <>
       <Nav/> 
       <div className="subscription-container">
       <div className="content2">
       <div className='check-icon'>
        <CheckIcon className='check' />
       </div>
          <h5 style={{color:"gray"}}>STEP 1 OF 3</h5>
          <h1>Choose your plan.</h1>
          <div >
          <div  className='small'>
            <CheckIcon className='check'/>
            <p>No commitments, cancel anytime.</p>
            </div>
          <div className='small'> 
          <CheckIcon className='check'/> 
           <p>Everything on Netflix for one low price.</p>
           </div>
          <div className='small'>
             <CheckIcon className='check'/>
              <p>No ads and no extra fees. Ever.</p>
              </div>
          </div>
          <button onClick={()=>navigate('/subscription-step2')}>Next</button>
          </div>
       </div>
       <Footer />
    </>
  )
}

export default Subscription;