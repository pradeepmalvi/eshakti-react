import React from "react";
import styles from "./saleBanner.styles.module.scss";

export default function SaleBanner({}) {
  return (
    <div className={styles.sale_banner}>
      <div className={styles.inner_container}>
        <button className={styles.button}>
          <span>Shop Now</span>
        </button>
      </div>
    </div>
  );
}
