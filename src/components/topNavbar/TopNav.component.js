import React from "react";
import Styles from "./topNav.styles.module.scss";

// importing react icons
import { BiCaretDown, BiPhoneCall, BiUser } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";
import { IoMdLogIn } from "react-icons/io";
import { GrFacebookOption, GrTwitter, GrPinterest } from "react-icons/gr";
import { RiInstagramFill } from "react-icons/ri";

export default function TopNav() {
  return (
    <div className={Styles.top_nav}>
      <div className={Styles.left_items}>
        <div className={Styles.currency_selector}>
          <span className={Styles.currency_name}>USD</span>
          <span className={Styles.currency_sign}>($)</span>
          <span className={Styles.icon}>
            <BiCaretDown />
          </span>
        </div>
        <div className={Styles.email_address}>
          <span className={Styles.icon}>
            <HiOutlineMail />
          </span>
          <span className={Styles.text}>customerchampion@eshakti.com</span>
        </div>
        <div className={Styles.phone}>
          <span className={Styles.icon}>
            <BiPhoneCall />
          </span>
          <span className={Styles.text}>855 374 2584</span>
        </div>
      </div>
      <div className={Styles.right_items}>
        <div className={Styles.my_account}>
          <span className={Styles.icon}>
            <BiUser />
          </span>
          <span className={Styles.text}>My Account</span>
        </div>
        <div className={Styles.login}>
          <span className={Styles.icon}>
            <IoMdLogIn />
          </span>
          <span className={Styles.text}>Login</span>
        </div>
        <div className={Styles.social_media_icons}>
          <a href="#" className={Styles.icon}>
            <GrFacebookOption />
          </a>
          <a href="#" className={Styles.icon}>
            <GrTwitter />
          </a>
          <a href="#" className={Styles.icon}>
            <RiInstagramFill />
          </a>
          <a href="#" className={Styles.icon}>
            <GrPinterest />
          </a>
        </div>
      </div>
    </div>
  );
}
