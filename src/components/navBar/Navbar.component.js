import React from "react";
import styles from "./navbar.styles.module.scss";

import { Link } from "react-router-dom";

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
          <Link to="/">
            <li>Top Seller</li>
          </Link>
          <Link to="/">
            <li>Dress Tops Bottoms</li>
          </Link>
          <Link to="/">
            <li>Sweater knits</li>
          </Link>
          <Link to="/">
            <li>Shop by Brand</li>
          </Link>
          <Link to="/">
            <li>Shop by Occasion</li>
          </Link>
          <Link to="/">
            <li>Mask</li>
          </Link>
          <Link to="/">
            <li>Sale</li>
          </Link>
          <Link to="/">
            <li>Overstock</li>
          </Link>
        </ul>
      </div>
      <div className={styles.action_icons}>
        <span
          className={`${styles.shoping_cart} ${styles.icon}`}
          onClick={() => {}}
        >
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
