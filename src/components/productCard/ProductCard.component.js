import React from "react";
import styles from "./productCard.styles.module.scss";

// import react icons
import { AiOutlineStar } from "react-icons/ai";

export default function ProductCard() {
  return (
    <div className={styles.product_card}>
      <div className={styles.product_img}>
        <div className={styles.img}></div>
      </div>
      <div className={styles.brand}>Eshakti</div>
      <div className={styles.product_name}>
        Ruffle Cascade Cotton Knit Jumpsuit
      </div>
      <div className={styles.price_and_rating}>
        <div className={styles.price}>
          <span className={styles.prev_price}>254$</span>
          <span className={styles.current_price}>230$</span>
        </div>
        <span className={styles.rating}>
          <span className={styles.each_star}>
            <AiOutlineStar />
          </span>
          <span className={styles.each_star}>
            <AiOutlineStar />
          </span>
          <span className={styles.each_star}>
            <AiOutlineStar />
          </span>
        </span>
      </div>
    </div>
  );
}
