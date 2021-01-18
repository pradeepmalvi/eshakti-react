import React from "react";
import styles from "./bottomBar.styles.module.scss";
import PaymentAcceptedImg from "../../assets/images/payments.png";

export default function BottomBar() {
  return (
    <div className={styles.bottom_bar}>
      <div className={styles.inner_area}>
        <div className={styles.copyright_text}>
          <span className={styles.copyright_icon}> &copy;</span>
          copyright 2021 All rights are reserved
        </div>
        <div className={styles.payment}>
          <img src={PaymentAcceptedImg} alt="payment accepted" />
        </div>
      </div>
    </div>
  );
}
