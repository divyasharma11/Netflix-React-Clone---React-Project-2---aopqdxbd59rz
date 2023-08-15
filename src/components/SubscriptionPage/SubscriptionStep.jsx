import React from "react";
import Navbar from "../navbar/Navbar";
import CheckIcon from "@mui/icons-material/Check";
import "./Subscription.css";
import Footer from "../footer/Footer";
import { useNavigate } from "react-router-dom";

const SubscriptionStep = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div className="sub-container">
        <h5 style={{ color: "gray" }}>STEP 2 OF 3</h5>
        <h1>Choose the plan that’s right for you</h1>
        <div className="cartss">
          <div className="cart">
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
              <hr />

              <div className="select">
                <CheckIcon style={{ color: "gray", marginTop: "5px" }} />
                <p>Selected</p>
              </div>
            </div>
          </div>
          <div className="cart">
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
          <div className="cart">
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
          <div className="cart">
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
        <div className="next" onClick={()=>navigate('/payment-page')}>
        <button >Next</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SubscriptionStep;
