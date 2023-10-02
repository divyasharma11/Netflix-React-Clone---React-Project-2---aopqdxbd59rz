import React, { useState } from "react";
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

const SubscriptionStep = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(649);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [upiId, setUpiId] = useState('');
  const [inputFilled, setInputFilled] = useState(false);
  // const [selectedOption, setSelectedOption] = useState('599');
  const [displayNone, setDisplayNone] = useState(true)
  const [subscriptionStatus, setSubscriptionStatus] = useState(null);
  const [isAlertOpen1, setIsAlertOpen1] = useState(false);
  const [isAlertOpen2, setIsAlertOpen2] = useState(false);
  const [isAlertOpen3, setIsAlertOpen3] = useState(false);
  const [isAlertOpen4, setIsAlertOpen4] = useState(false);

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
    if(!subscriptionStatus) {
      // handleClose();
        toast.error("Please Select Plan.", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }else if(subscriptionStatus){
        handleOpen();
      }
  }
  // const handleCloseAlert1 = () => {
  //   setIsAlertOpen1(false);
  // };
  // const handleCloseAlert2 = () => {
  //   setIsAlertOpen2(false);
  // };
  const handleCloseAlert3 = () => {
    setIsAlertOpen3(false);
  };
  const handleCloseAlert4 = () => {
    setIsAlertOpen4(false);
  };

  const handlePaymentConfirm = () => {
    if (inputFilled && upiId.length > 6 && upiId.includes('@')) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        // setIsAlertOpen1(true);
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
        setSubscriptionStatus(selectedPlan);
        localStorage.setItem(`subscriptionStatus-${userEmail}`, selectedPlan);
        setUpiId('')
        handleClose();
      }, 5000)
    } else if(!selectedPlan) {
      // setIsAlertOpen2(true);
        toast.error("Please Select Plan.", {
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
  const token = localStorage.getItem("Token");
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
          {subscriptionStatus && (
            <div className='payment_status_description'>
              <p>You are subscribed to: {subscriptionStatus} plan</p>
            </div>
          )}
        </div>
        <Snackbar open={isAlertOpen1} autoHideDuration={6000} onClose={handleCloseAlert1}>
          <Stack sx={{ width: '100%' }} spacing={2}>
            <Alert severity="success" onClose={handleCloseAlert1}>
              Payment Successful!
            </Alert>
          </Stack>
        </Snackbar>
        <Snackbar open={isAlertOpen2} autoHideDuration={6000} onClose={handleCloseAlert2}>
          <Stack sx={{ width: '100%' }} spacing={2}>
            <Alert severity="error" onClose={handleCloseAlert2}>
              length should be 8 and includes @!
            </Alert>
          </Stack>
        </Snackbar>
        <Snackbar open={isAlertOpen3} autoHideDuration={6000} onClose={handleCloseAlert3}>
          <Stack sx={{ width: '100%' }} spacing={2}>
            <Alert severity="success" onClose={handleCloseAlert3}>
              already subscribed!
            </Alert>
          </Stack>
        </Snackbar>
        <Snackbar open={isAlertOpen4} autoHideDuration={6000} onClose={handleCloseAlert4}>
          <Stack sx={{ width: '100%' }} spacing={2}>
            <Alert severity="error" onClose={handleCloseAlert4}>
              Already Subscribed to a higher Plan!
            </Alert>
          </Stack>
        </Snackbar>
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
