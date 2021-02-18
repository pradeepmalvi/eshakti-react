import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { updateProfilePic, getUserDetails } from "../../store/home/homeAction";

import ImageUploader from "react-images-upload";
import Axios from "axios";

export default function UserProfile() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");

  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  async function getupdatedUserDetails() {
    const userId = await localStorage.getItem("es_user_id");
    dispatch(getUserDetails(userId));
  }

  console.log(state, "here it is");
  // onchange method to get picture from your system and set in to state
  const onDrop = (picture) => {
    const files = picture;
    const formData = new FormData();

    files.forEach((file, i) => {
      formData.append("image", file);
    });

    formData.append("id", localStorage.getItem("es_user_id"));
    dispatch(updateProfilePic(formData));
    getupdatedUserDetails();
  };

  async function getStoredUserDetails() {
    try {
      let userDetails = await JSON.parse(
        localStorage.getItem("es_user_details")
      );

      if (userDetails !== null) {
        setName(userDetails.name || "");
        setCountry(userDetails.country || "");
        setPhone(userDetails.phone);
        setEmail(userDetails.email);
      }
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getStoredUserDetails();
    getupdatedUserDetails();
  }, []);

  return (
    <>
      <div className="personal-info-slot">
        <div className="profile-img">
          {state.home.signedInUser && (
            <img
              src={
                state.home.userProfileImg ||
                `http://eshakti.ewtlive.in/dashboard/${state.home.signedInUser.user.profile_pic}`
              }
              width={100}
              height={100}
              alt=""
            />
          )}

          {/* <button className="change-profile-pic-btn">change profile pic</button> */}
          <ImageUploader
            withIcon={false}
            label={false}
            onChange={onDrop}
            buttonClassName="change-profile-pic-btn"
            buttonText={"Update Image"}
            imgExtension={[".jpg", ".gif", ".png", ".gif"]}
            maxFileSize={5242880}
          />
        </div>

        <form>
          <div className="input-control-inline">
            <div className="email common">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="email"
              />
            </div>

            <div className="country common">
              <label htmlFor="country">Country</label>
              <input
                type="text"
                name="country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
            </div>
          </div>
          <div className="input-control-inline">
            <div className="name common">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="password common">
              <label htmlFor="number">Phone</label>
              <input
                type="text"
                name="number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>

          <div className="btn">
            <button type="submit">Update</button>
          </div>
        </form>
      </div>
    </>
  );
}
