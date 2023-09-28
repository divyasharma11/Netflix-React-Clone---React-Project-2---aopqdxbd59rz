import React, { useEffect, useState } from "react";
import "./Style.css";
import EditIcon from "@mui/icons-material/Edit";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import profile from "../images/profile.jpg";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const token = localStorage.getItem("Token");

const ManageProfile = () => {
  const [userData, setUserData] = useState(null);
  const [accountImage, setAccountImage] = useState(null);
  const [updateImg, setUpdateImg] = useState(null);
  const navigate = useNavigate();

  const saveProfileImg = (e) => {
    const selectedImg = e.target.files[0];
    setAccountImage(selectedImg);
  };

  useEffect(() => {
    const userInfo = localStorage.getItem("userDetails");
    const updatedImage = localStorage.getItem("updatedProfile");

    if (userInfo) {
      setUserData(JSON.parse(userInfo));
    }

    if (updatedImage && updatedImage !== "undefined") {
      setUpdateImg(updatedImage);
    } else {
      setUpdateImg(profile);
    }
  }, [updateImg]);

  const uploadProfile = async () => {
    if (!accountImage) {
      return;
    }
    const formData = new FormData();
    formData.append("profileImage", accountImage);
    try {
      const response = await axios.patch(
        "https://academics.newtonschool.co/api/v1/user/updateProfileImage",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            projectId: "aopqdxbd59rz",
          },
        }
      );
      // console.log(response);
      const updateImgUrl = response.data.data.user.profileImage;
      setUpdateImg(updateImgUrl);

      localStorage.setItem("updateImg", updateImgUrl);
      toast.success("Image updated successfully.", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (error) {
      console.error("Error in image uploading :", error);
      toast.error("Failed to update image.", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <div className="profile-container">
      <ToastContainer />
      <div className="profile-contents">
        <div className="profile-content">
          <h1>Edit Profile</h1>
          <hr />
          <div className="proimg">
            <div className="edit-proimg">
              <input
                type="file"
                accept="image/*"
                id="proImgInput"
                onChange={saveProfileImg}
              />
              <label htmlFor="proImgInput">
                <span className="edit-icon">
                  <EditIcon className="edit-icons" />
                </span>
              </label>
            </div>
            <div>
              <img
                src={
                  accountImage ? URL.createObjectURL(accountImage) : updateImg
                }
                alt="profile img"
              />
            </div>
            <div className="right">
              <div className="swrup">Swarup</div>
              <p>Language:</p>
              <span className="eng">
                English
                <KeyboardArrowDownIcon className="keybrd" />
              </span>
              <h3>Game Handle:</h3>
              <p>
                Your handle is a unique name that'll be used for playing with
                other Netflix members across all Netflix Games. Learn more..
              </p>
              <div>Create Game Handle</div>
              <hr />
              <h3>Maturity settings:</h3>
              <span className="pro-span">All Maturity Ratings</span>
              <p>Show titles of all maturity ratings for this profile.</p>
              {/* <span className='pro-span'>Edit</span> */}
              <hr />
              <h3>Autoplay controls</h3>
              <div className="proinput">
                <input type="checkbox" />
                <p>Autoplay next episode in a series on all devices.</p>
                <br />
                <input type="checkbox" />
                <p>Autoplay previous with browsing on all devices.</p>
              </div>
              <hr />
              <div className="probtn">
                <button className="p-btn active" onClick={uploadProfile}>
                  Save
                </button>
                <button className="p-btn" onClick={() => navigate(-1)}>
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageProfile;
