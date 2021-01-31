import React, { useState } from "react";
import Styles from "./topNav.styles.scss";

import Login from "../login/Login.component";
import SignUp from "../signup/SignUp";

// importing react icons
import { BiCaretDown, BiPhoneCall, BiUser } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";
import { IoLogoCodepen, IoMdLogIn, IoMdLogOut } from "react-icons/io";
import { GrFacebookOption, GrTwitter, GrPinterest } from "react-icons/gr";
import { RiInstagramFill } from "react-icons/ri";

export default function TopNav() {
  const [openLogin, setOpenLogin] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);

  const onOpenLoginModal = () => setOpenLogin(true);
  const onCloseLoginModal = () => setOpenLogin(false);

  const onOpenRegisterModal = () => setOpenRegister(true);
  const onCloseRegisterModal = () => setOpenRegister(false);

  const logout = () => {
    localStorage.clear();
    window.location.reload();
  };
  return (
    <div className="top_nav">
      {/* login modal component */}
      <Login
        open={openLogin}
        openRegister={onOpenRegisterModal}
        onCloseModal={onCloseLoginModal}
      />
      <SignUp open={openRegister} onCloseModal={onCloseRegisterModal} />

      <div className="left_items">
        <div className="currency_selector">
          <span className="currency_name">USD</span>
          <span className="currency_sign">($)</span>
          <span className="icon">
            <BiCaretDown />
          </span>
        </div>
        <div className="email_address">
          <span className="icon">
            <HiOutlineMail />
          </span>
          <span className="text">customerchampion@eshakti.com</span>
        </div>
        <div className="phone">
          <span className="icon">
            <BiPhoneCall />
          </span>
          <span className="text">855 374 2584</span>
        </div>
      </div>
      <div className="right_items">
        {localStorage.getItem("es_login") === "true" ? (
          <>
            <div className="my_account">
              <span className="icon">
                <BiUser />
              </span>
              <span className="text">My Account</span>
            </div>
            <div className="login" onClick={logout}>
              <span className="icon">
                <IoMdLogOut />
              </span>
              <span className="text">Logout</span>
            </div>
          </>
        ) : (
          <>
            <div className="my_account" onClick={() => onOpenRegisterModal()}>
              <span className="icon">
                <BiUser />
              </span>
              <span className="text">Sign Up</span>
            </div>
            <div className="login" onClick={() => onOpenLoginModal()}>
              <span className="icon">
                <IoMdLogIn />
              </span>
              <span className="text">Login</span>
            </div>
          </>
        )}
        <div className="social_media_icons">
          <a href="#" className="icon">
            <GrFacebookOption />
          </a>
          <a href="#" className="icon">
            <GrTwitter />
          </a>
          <a href="#" className="icon">
            <RiInstagramFill />
          </a>
          <a href="#" className="icon">
            <GrPinterest />
          </a>
        </div>
      </div>
    </div>
  );
}
