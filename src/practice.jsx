import React, { useState, useEffect } from 'react';
import './Subscribe.css';
import { useSelector } from 'react-redux';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaRupeeSign } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import CircularProgress from '@mui/material/CircularProgress';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Subscribe = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [upiId, setUpiId] = useState('');
  const [isInputFilled, setIsInputFilled] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const showDetails = useSelector(state => state.showDetails.showDetails);
  const [selectedOption, setSelectedOption] = useState('599');
  const [isAlertOpen1, setIsAlertOpen1] = useState(false);
  const [isAlertOpen2, setIsAlertOpen2] = useState(false);
  const [isAlertOpen3, setIsAlertOpen3] = useState(false);
  const [isAlertOpen4, setIsAlertOpen4] = useState(false);
  const [subscriptionStatus, setSubscriptionStatus] = useState(null);
  const [displayNone, setDisplayNone] = useState(true)
  // const userEmailSignin = useSelector(state => state.user.signinUser?.data?.email);
  // const userEmailSignup = useSelector(state => state.user.signupUser.data.email);
  const userEmailSignin = JSON.parse(localStorage.getItem('sign_in_user'));
  const userEmailSignup = JSON.parse(localStorage.getItem('sign_up_user'));
  const [userEmail, setUserEmail] = useState(() => {
    if(userEmailSignin){
    return userEmailSignin.data.email
  }
  return userEmailSignup.data.user.email
  })
console.log(userEmail);
  // if(userEmailSignin){
  //   setUserEmail(userEmailSignin)
  // }else{
  //   setUserEmail(userEmailSignup)
  // }
  // console.log('line 50', userEmail)
  console.log('line 52', userEmailSignin)
  console.log('line 53', userEmailSignup)
  const settings = {
    dots: false,
    infinite: true,
    speed: 100000,
    slidesToShow: 8,
    slidesToScroll: 100,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
  };
  // useEffect(() => {
  //   const savedSubscriptionStatus = localStorage.getItem('subscriptionStatus');
  //   if (savedSubscriptionStatus) {
  //     setSubscriptionStatus(savedSubscriptionStatus);
  //   }
  // }, []);
  useEffect(() => {
    const savedSubscriptionStatus = localStorage.getItem(`subscriptionStatus-${userEmail}`);
    if (savedSubscriptionStatus) {
      setSubscriptionStatus(savedSubscriptionStatus);
      if (savedSubscriptionStatus === selectedOption) {
        setDisplayNone(false);
      } else if (savedSubscriptionStatus > selectedOption) {
        setDisplayNone(false);
      } else {
        setDisplayNone(true);
      }
    } else {
      setDisplayNone(true);
    }
  }, [selectedOption]);
  const handleOptionChange = (price) => {
    setSelectedOption(price);
    // if (localStorage.getItem('subscriptionStatus')) {
    //   if (localStorage.getItem('subscriptionStatus') === price) {
    //     setDisplayNone(false);
    //   } else if(localStorage.getItem('subscriptionStatus') > price) {
    //     setDisplayNone(false);
    //   } else{
    //     setDisplayNone(true)
    //   }
    // } else {
    //   setDisplayNone(true);
    // }
  };
  const handleInputChange = (event) => {
    const { value } = event.target;
    setUpiId(value);
    setIsInputFilled(value !== '');
  };
  const handleInputFocus = () => {
    setIsInputFilled(true); 
  };
  const handlePayButtonClick = () => {
    handleOpen();
      // const boughtSubscription = localStorage.getItem('subscriptionStatus')
      // if (boughtSubscription) {
      //   if (boughtSubscription === selectedOption) {
      //     setIsAlertOpen3(true)
      //   } else if (boughtSubscription > selectedOption) {
      //     setIsAlertOpen4(true)
      //   } else {
      //     handleOpen();
      //   }
      // } else {
      //   handleOpen();
      // }
  };
  

  const handleConfirm = () => {
    if (isInputFilled && upiId.length > 8 && upiId.includes('@')) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setIsAlertOpen1(true);
        setSubscriptionStatus(selectedOption);
        localStorage.setItem(`subscriptionStatus-${userEmail}`, selectedOption);
        setUpiId('')
        handleClose();
      }, 5000)
    } else {
      setIsAlertOpen2(true);
    }
  }
  const handleCloseAlert1 = () => {
    setIsAlertOpen1(false);
  };
  const handleCloseAlert2 = () => {
    setIsAlertOpen2(false);
  };
  const handleCloseAlert3 = () => {
    setIsAlertOpen3(false);
  };
  const handleCloseAlert4 = () => {
    setIsAlertOpen4(false);
  };
  const userName1 = JSON.parse(localStorage.getItem('sign_up_user'))
  const userName2 = JSON.parse(localStorage.getItem('sign_in_user'))
  return (
    <div className='subscribe_container'>
      <Slider {...settings}>
        {showDetails?.data?.map(item => (
          <div key={item._id} className="subscribe_slider">
            <img src={item.thumbnail} alt={item.title} />
          </div>
        ))}
      </Slider>
      <div className='linear_background'></div>
      <div className='subscribe_container_body'>
        <div className='subscribe_header'>
          <Link to='/home'>
            <div className='subscribe_header_logo'><img src='https://images.slivcdn.com/UI_icons/New_Final_Icons_30052020/liv_icon.png?q=high&fr=webp' /></div>
          </Link>
          <div className='subscribe_header_name'>
            {userName1 ? (
              <div className='profile_name'>{userName1.data.user?.name}</div>
            ) : userName2 ? (
              <div className='profile_name'>{userName2.data?.name}</div>
            ) : null}
          </div>
        </div>
        <div className='subscribe_table_body'>
          <h1 className='subscribe_table_title'>Subscribe to watch all content on Sony LIV</h1>
          <div className='subscribe_table'>
            <table>
              <thead>
                <tr>
                  <th colSpan='1' rowSpan='2' style={{ height: '100px' }}>
                    <div className='subscribe_table_header'>
                      <h5>Access All Content</h5>
                      <p>Movies, Originals And Live Sports</p>
                    </div>
                  </th>
                  <th className={selectedOption === '599' ? 'selected_th' : ''}>
                    <div className='subscribe_table_head' onClick={() => handleOptionChange('599')}>
                      <div><input type='radio' style={{ width: '16px', height: '16px', marginBottom: '5px' }} onChange={() => handleOptionChange('599')}
                        checked={selectedOption === '599'} /></div>
                      <div style={{ fontSize: '14px', fontWeight: '500', marginBottom: '5px' }} className={selectedOption === '599' ? 'selected_th' : ''}>Mobile Only</div>
                      <div>
                        <span className={selectedOption === '599' ? 'selected_th' : 'un_selected'}><FaRupeeSign style={{ fontSize: '14px' }} />599</span>
                        <span style={{ fontSize: '12px', fontWeight: '500' }} className={selectedOption === '599' ? 'selected_th' : ''}>Yearly</span>
                      </div>
                    </div>
                  </th>
                  <th className={selectedOption === '999' ? 'selected_th' : ''}>
                    <div className='subscribe_table_head' onClick={() => handleOptionChange('999')}>
                      <div><input type='radio' style={{ width: '16px', height: '16px', marginBottom: '5px' }} onChange={() => handleOptionChange('999')}
                        checked={selectedOption === '999'} /></div>
                      <div style={{ fontSize: '14px', fontWeight: '500', marginBottom: '5px' }}>LIV Premium</div>
                      <div>
                        <span className={selectedOption === '999' ? 'selected_th' : 'un_selected'}><FaRupeeSign style={{ fontSize: '14px' }} />999</span>
                        <span style={{ fontSize: '12px', fontWeight: '500' }}>Yearly</span>
                      </div>
                    </div>
                  </th>
                  <th className={selectedOption === '699' ? 'selected_th' : ''}>
                    <div className='subscribe_table_head' onClick={() => handleOptionChange('699')}>
                      <div><input type='radio' style={{ width: '16px', height: '16px', marginBottom: '5px' }} onChange={() => handleOptionChange('699')}
                        checked={selectedOption === '699'} /></div>
                      <div style={{ fontSize: '14px', fontWeight: '500', marginBottom: '5px' }}>LIV Premium</div>
                      <div>
                        <span className={selectedOption === '699' ? 'selected_th' : 'un_selected'}><FaRupeeSign style={{ fontSize: '14px' }} />699</span>
                        <span style={{ fontSize: '12px', fontWeight: '500' }}>6 Months</span>
                      </div>
                    </div>
                  </th>
                  <th className={selectedOption === '299' ? 'selected_th' : ''}>
                    <div className='subscribe_table_head' onClick={() => handleOptionChange('299')}>
                      <div><input type='radio' style={{ width: '16px', height: '16px', marginBottom: '5px' }} onChange={() => handleOptionChange('299')}
                        checked={selectedOption === '299'} /></div>
                      <div style={{ fontSize: '14px', fontWeight: '500', marginBottom: '5px' }}>LIV Premium</div>
                      <div>
                        <span className={selectedOption === '299' ? 'selected_th' : 'un_selected'}><FaRupeeSign style={{ fontSize: '14px' }} />299</span>
                        <span style={{ fontSize: '12px', fontWeight: '500' }}>Monthly</span>
                      </div>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th style={{ height: '50px' }}>
                    <div className='subscribe_table_row'>
                      <span style={{ fontSize: '14px', fontWeight: '500' }}>Number of logged in devicesinfo_icon</span>
                      <span style={{ marginLeft: '20px', marginTop: '5px' }}><img src='https://images.slivcdn.com/UI_icons/info_new.png?q=high&fr=webp' width={'16px'} height={'16px'} /></span>
                    </div>
                  </th>
                  <td className={selectedOption === '599' ? 'selected_td' : ''}>1</td>
                  <td className={selectedOption === '999' ? 'selected_td' : ''}>5</td>
                  <td className={selectedOption === '699' ? 'selected_td' : ''}>5</td>
                  <td className={selectedOption === '299' ? 'selected_td' : ''}>5</td>
                </tr>
                <tr>
                  <th style={{ height: '50px' }}>
                    <div className='subscribe_table_row'>
                      <span style={{ fontSize: '14px', fontWeight: '500' }}>Watch on devices at same timeinfo_icon</span>
                      <span style={{ marginLeft: '20px', marginTop: '5px' }}><img src='https://images.slivcdn.com/UI_icons/info_new.png?q=high&fr=webp' width={'16px'} height={'16px'} /></span>
                    </div>
                  </th>
                  <td className={selectedOption === '599' ? 'selected_td' : ''}>1</td>
                  <td className={selectedOption === '999' ? 'selected_td' : ''}>2</td>
                  <td className={selectedOption === '699' ? 'selected_td' : ''}>2</td>
                  <td className={selectedOption === '299' ? 'selected_td' : ''}>1</td>
                </tr>
                <tr>
                  <th style={{ height: '50px' }}>
                    <div className='subscribe_table_row'>
                      <span style={{ fontSize: '14px', fontWeight: '500' }}>Max Video Qualityinfo_icon</span>
                      <span style={{ marginLeft: '20px', marginTop: '5px' }}><img src='https://images.slivcdn.com/UI_icons/info_new.png?q=high&fr=webp' width={'16px'} height={'16px'} /></span>
                    </div>
                  </th>
                  <td className={selectedOption === '599' ? 'selected_td' : ''}>HD (720p)</td>
                  <td className={selectedOption === '999' ? 'selected_td' : ''}>FULL HD (1080p)</td>
                  <td className={selectedOption === '699' ? 'selected_td' : ''}>FULL HD (1080p)</td>
                  <td className={selectedOption === '299' ? 'selected_td' : ''}>FULL HD (1080p)</td>
                </tr>
                <tr>
                  <th style={{ height: '50px' }}>
                    <div className='subscribe_table_row'>
                      <span style={{ fontSize: '14px', fontWeight: '500' }}>Max Audio Qualityinfo_icon</span>
                      <span style={{ marginLeft: '20px', marginTop: '5px' }}><img src='https://images.slivcdn.com/UI_icons/info_new.png?q=high&fr=webp' width={'16px'} height={'16px'} /></span>
                    </div>
                  </th>
                  <td style={{ color: '#b9b9b9' }} className={selectedOption === '599' ? 'selected_td' : ''}>Stereo 2.1</td>
                  <td style={{ color: '#b9b9b9' }} className={selectedOption === '999' ? 'selected_td' : ''}>Stereo 2.1</td>
                  <td style={{ color: '#b9b9b9' }} className={selectedOption === '699' ? 'selected_td' : ''}>Stereo 2.1</td>
                  <td style={{ color: '#b9b9b9' }} className={selectedOption === '299' ? 'selected_td' : ''}>Stereo 2.1</td>
                </tr>
                <tr>
                  <th style={{ height: '50px' }}>
                    <div className='subscribe_table_row'>
                      <span style={{ fontSize: '14px', fontWeight: '500' }}>Advertisementinfo_icon</span>
                      <span style={{ marginLeft: '20px', marginTop: '5px' }}><img src='https://images.slivcdn.com/UI_icons/info_new.png?q=high&fr=webp' width={'16px'} height={'16px'} /></span>
                    </div>
                  </th>
                  <td className={selectedOption === '599' ? 'selected_td' : ''}>On Live Sports, Channels & Reality TV Shows</td>
                  <td className={selectedOption === '999' ? 'selected_td' : ''}>On Live Sports, Channels & Reality TV Shows</td>
                  <td className={selectedOption === '699' ? 'selected_td' : ''}>On Live Sports, Channels & Reality TV Shows</td>
                  <td className={selectedOption === '299' ? 'selected_td' : ''}>On Live Sports, Channels & Reality TV Shows</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className='subscribe_button'>
          {displayNone && (
            <button onClick={() => handlePayButtonClick(selectedOption)}>
              Pay <FaRupeeSign style={{ fontSize: '14px', marginTop: '5px' }} />{selectedOption}
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
            <div className='subscribe_modal'>
              <h1>Enter UPI ID</h1>
              <input type='text' placeholder={isInputFilled ? '' : 'upi id...'} value={upiId}
                onChange={handleInputChange} onFocus={handleInputFocus}/>
              <button onClick={handleConfirm}>Confirm and Pay</button>
            </div>
          </Box>
        </Modal>
        <div className='subscribe_list'>
          <ul>
            <li>Terms and Conditions<span className='subscribe_list_dot'></span></li>
            <li>Privacy Policy<span className='subscribe_list_dot'></span></li>
            <li>FAQ</li>
          </ul>
        </div>
        <div className='subscribe_status'>
          {subscriptionStatus && (
            <div>
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
    </div>
  )
}

export default Subscribe;