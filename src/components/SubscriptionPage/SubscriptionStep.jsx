import React, { useEffect, useState } from "react";
import Nav from "../page/Nav";
import CheckIcon from "@mui/icons-material/Check";
import "./Subscription.css";
import Footer from "../footer/Footer";
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { FaRupeeSign } from 'react-icons/fa';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import CloseIcon from "@mui/icons-material/Close";
import { CircularProgress } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  // bgcolor: 'background.paper',
  bgcolor:'rgba(0,0,0,0.9)',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
const token = localStorage.getItem("Token");
const SubscriptionStep = () => {
  const Divya =  localStorage.getItem(`subscriptionStatus-${token}`);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(649);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [upiId, setUpiId] = useState('');
  const [inputFilled, setInputFilled] = useState(false);
  const [displayNone, setDisplayNone] = useState(true)
  const [subscriptionStatus, setSubscriptionStatus] = useState(null);

  const handleSelect = (plan) => {
    setSelectedPlan(plan);
  };
  const handleInputChange = (event) => {
    const { value } = event.target;
    setUpiId(value);
    setInputFilled(value !== '');
  };
  const handleInputFocus = () => {
    setInputFilled(true); 
  };
  const handlePayButtonClick = () => {
      handleOpen();
  }
  
  const handlePaymentConfirm = () => {
    if (inputFilled && upiId.length > 6 && upiId.includes('@')) {
      setIsLoading(true);
      setTimeout(() =>{
        setIsLoading(false);
        toast.success("Payment Successfull.", {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setTimeout(() => {
          handleClose();
          },2000)
        setSubscriptionStatus(selectedPlan);
        localStorage.setItem(`subscriptionStatus-${token}`, selectedPlan);
        setUpiId('');
      }, 5000)  
    } 
    else{
      toast.error("length should be 6 and includes @!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }
  useEffect(() => {
    const savedSubscriptionStatus = localStorage.getItem(`subscriptionStatus-${token}`);
    if (savedSubscriptionStatus) {
      setSubscriptionStatus(savedSubscriptionStatus);
      if (savedSubscriptionStatus === selectedPlan) {
        setDisplayNone(false);
      } else if (savedSubscriptionStatus > selectedPlan) {
        setDisplayNone(false);
      } else {
        setDisplayNone(true);
      }
    } else {
      setDisplayNone(true);
    }
  }, [selectedPlan]);
  return (
    <>
      <Nav />
      <div className="sub-container">
        <h5 style={{ color: "gray" }}>STEP 2 OF 3</h5>
        <h1>Choose the plan that’s right for you</h1>
        <div className="cartss">
          <div
            className={`cart ${selectedPlan === "649" ? "selected" : ""}`}
            onClick={() => handleSelect("649")}
          >
            <div className="premium">
              <h2>Premium</h2>
              <h3>4K + HDR</h3>
            </div>
            <div className="cart-contents">
              <div className="price">
                <div className="check-box">
                  <CheckIcon className="check" />
                </div>
                <div className="tag">
                  <p>Monthly Price</p>
                  <h4> ‎₹ 649</h4>
                </div>
              </div>
              <hr />
              <div className="price">
                <div className="check-box">
                  <CheckIcon className="check" />
                </div>
                <div className="tag">
                  <p>Resolution</p>
                  <h4>4K (Ultra HD) + HDR</h4>
                </div>
              </div>
              <hr />
              <div className="price">
                <div className="check-box">
                  <CheckIcon className="check" />
                </div>
                <div className="tag">
                  <p>Video quality</p>
                  <h4>Best</h4>
                </div>
              </div>
              <hr />
              <div className="price">
                <div className="check-box">
                  <CheckIcon className="check" />
                </div>
                <div className="tag">
                  <p>Supported devices</p>
                  <h4>TV, computer, mobile phone, tablet</h4>
                </div>
              </div>
              {/* <hr /> */}
              {/* <div className="select">
                <CheckIcon style={{ color: "gray", marginTop: "5px" }} />
                <p>Selected</p>
              </div> */}
            </div>
          </div>
          <div
            className={`cart ${selectedPlan === "449" ? "selected" : ""}`}
            onClick={() => handleSelect("449")}
          >
            <div className="premium">
              <h2>Standard</h2>
              <h3>1080p</h3>
            </div>
            <div className="cart-contents">
              <div className="price">
                <div className="check-box">
                  <CheckIcon className="check" />
                </div>
                <div className="tag">
                  <p>Monthly Price</p>
                  <h4> ‎₹ 449</h4>
                </div>
              </div>
              <hr />
              <div className="price">
                <div className="check-box">
                  <CheckIcon className="check" />
                </div>
                <div className="tag">
                  <p>Resolution</p>
                  <h4>1080p (full HD)</h4>
                </div>
              </div>
              <hr />
              <div className="price">
                <div className="check-box">
                  <CheckIcon className="check" />
                </div>
                <div className="tag">
                  <p>Video quality</p>
                  <h4>Better</h4>
                </div>
              </div>
              <hr />
              <div className="price">
                <div className="check-box">
                  <CheckIcon className="check" />
                </div>
                <div className="tag">
                  <p>Supported devices</p>
                  <h4>TV, computer, mobile phone, tablet</h4>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`cart ${selectedPlan === "199" ? "selected" : ""}`}
            onClick={() => handleSelect("199")}
          >
            <div className="premium">
              <h2>Basic</h2>
              <h3>720p</h3>
            </div>
            <div className="cart-contents">
              <div className="price">
                <div className="check-box">
                  <CheckIcon className="check" />
                </div>
                <div className="tag">
                  <p>Monthly Price</p>
                  <h4> ‎₹ 199</h4>
                </div>
              </div>
              <hr />
              <div className="price">
                <div className="check-box">
                  <CheckIcon className="check" />
                </div>
                <div className="tag">
                  <p>Resolution</p>
                  <h4>720p (HD)</h4>
                </div>
              </div>
              <hr />
              <div className="price">
                <div className="check-box">
                  <CheckIcon className="check" />
                </div>
                <div className="tag">
                  <p>Video quality</p>
                  <h4>Good</h4>
                </div>
              </div>
              <hr />
              <div className="price">
                <div className="check-box">
                  <CheckIcon className="check" />
                </div>
                <div className="tag">
                  <p>Supported devices</p>
                  <h4>TV, computer, mobile phone, tablet</h4>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`cart ${selectedPlan === "149" ? "selected" : ""}`}
            onClick={() => handleSelect("149")}
          >
            <div className="premium">
              <h2>Mobile</h2>
              <h3>480p</h3>
            </div>
            <div className="cart-contents">
              <div className="price">
                <div className="check-box">
                  <CheckIcon className="check" />
                </div>
                <div className="tag">
                  <p>Monthly Price</p>
                  <h4> ‎₹ 149</h4>
                </div>
              </div>
              <hr />
              <div className="price">
                <div className="check-box">
                  <CheckIcon className="check" />
                </div>
                <div className="tag">
                  <p>Resolution</p>
                  <h4>480p</h4>
                </div>
              </div>
              <hr />
              <div className="price">
                <div className="check-box">
                  <CheckIcon className="check" />
                </div>
                <div className="tag">
                  <p>Video quality</p>
                  <h4>Good</h4>
                </div>
              </div>
              <hr />
              <div className="price">
                <div className="check-box">
                  <CheckIcon className="check" />
                </div>
                <div className="tag">
                  <p>Supported devices</p>
                  <h4>mobile phone, tablet</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="ptag">
          HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability subject
          to your internet service and device capabilities. Not all content is
          available in all resolutions. See our Terms of Use for more details.
          Only people who live with you may use your account. Watch on 4
          different devices at the same time with Premium, 2 with Standard, and
          1 with Basic and Mobile.
        </p>
        <div className="next" 
        // onClick={() => navigate("/payment-page")}
        >
          {displayNone && (
            <button onClick={() => handlePayButtonClick(selectedPlan)}>
              Pay
               <FaRupeeSign style={{ fontSize: '14px', marginTop: '5px' }} />
                {selectedPlan}
            </button>
          )}
        </div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
              <CloseIcon className="payment_close_icon"  onClick={handleClose}/>
            <div className='payment_modal'>
              <h1>Enter UPI ID</h1>
              <input type='text' placeholder={inputFilled ? '' : 'upi id...'} value={upiId}
                onChange={handleInputChange} onFocus={handleInputFocus}/>
              <button onClick={handlePaymentConfirm}>Confirm and Pay</button>
            </div>
          </Box>
        </Modal>
        <div className='payment_status'>
          { Divya && (
            <div className='payment_status_description'>
              <p>You are subscribed to: { Divya} plan</p>
            </div>
          )}
        </div>
        {isLoading && (
          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            zIndex: 9999,
          }}>
            <CircularProgress />
          </Box>
        )}
      </div>
      <Footer />
    </>
  );
};

export default SubscriptionStep;
