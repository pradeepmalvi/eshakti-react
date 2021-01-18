import React from "react";
import styles from "./navbar.styles.module.scss";

// importing icons from react-icons
import {
  AiOutlineShoppingCart,
  AiOutlineHeart,
  AiOutlineSearch,
} from "react-icons/ai";

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <h2 className={styles.logo_text}>logoipsum</h2>
      </div>
      <div className={styles.navlinks}>
        <ul>
          <li>Top Seller</li>
          <li>Dress Tops Bottoms</li>
          <li>Sweater knits</li>
          <li>Shop by Brand</li>
          <li>Shop by Occasion</li>
          <li>Mask</li>
          <li>Sale</li>
          <li>Overstock</li>
        </ul>
      </div>
      <div className={styles.action_icons}>
        <span className={`${styles.shoping_cart} ${styles.icon}`}>
          <AiOutlineShoppingCart />
          <span className={styles.cart_items}>3</span>
        </span>
        <span className={`${styles.whishlist}  ${styles.icon}`}>
          <AiOutlineHeart />
        </span>
        <span className={`${styles.search}  ${styles.icon}`}>
          <AiOutlineSearch />
        </span>
      </div>
    </div>
  );
}
