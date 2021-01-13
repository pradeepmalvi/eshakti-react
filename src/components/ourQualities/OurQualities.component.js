import React from "react";
import styles from "./ourQualities.styles.module.scss";

// react icons
import { FiTruck } from "react-icons/fi";
import { BiLike } from "react-icons/bi";
import { AiOutlineTag } from "react-icons/ai";
import { MdPayment } from "react-icons/md";

export default function OurQualities() {
  return (
    <div className={styles.our_qualities}>
      <div className={styles.inner_container}>
        <div className={styles.shipping}>
          <div className={styles.icon}>
            <FiTruck />
          </div>
          <div className={styles.description}>
            <h4>free shipping</h4>
            <p>Free shipping over all the local area order above 200$</p>
          </div>
        </div>
        <div className={styles.return}>
          <div className={styles.icon}>
            <BiLike />
          </div>
          <div className={styles.description}>
            <h4>30 Days Return</h4>
            <p>Free shipping over all the local area order above 200$</p>
          </div>
        </div>
        <div className={styles.support}>
          <div className={styles.icon}>
            <AiOutlineTag />
          </div>
          <div className={styles.description}>
            <h4>24/7 Support</h4>
            <p>Free shipping over all the local area order above 200$</p>
          </div>
        </div>
        <div className={styles.payment}>
          <div className={styles.icon}>
            <MdPayment />
          </div>
          <div className={styles.description}>
            <h4>Secure Payment</h4>
            <p>Free shipping over all the local area order above 200$</p>
          </div>
        </div>
      </div>
    </div>
  );
}
