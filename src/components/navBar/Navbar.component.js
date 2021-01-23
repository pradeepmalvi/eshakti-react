import React from "react";
import styles from "./navbar.styles.scss";

import { Link } from "react-router-dom";

// importing icons from react-icons
import {
  AiOutlineShoppingCart,
  AiOutlineHeart,
  AiOutlineSearch,
} from "react-icons/ai";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <h2 className="logo_text">logoipsum</h2>
      </div>
      <div className="navlinks">
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
      <div className="action_icons">
        <span className="shoping_cart icon" onClick={() => {}}>
          <AiOutlineShoppingCart />
          <span className="cart_items">3</span>
        </span>
        <span className="whishlist icon">
          <AiOutlineHeart />
        </span>
        <span className="search icon">
          <AiOutlineSearch />
        </span>
      </div>
    </div>
  );
}
