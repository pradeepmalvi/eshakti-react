import React, { useContext } from "react";
import "./navbar.styles.scss";

import UseWindowSize from "../../hooks/useWindowSize";

import { Link } from "react-router-dom";

import { appContext } from "../../context/context";
import { OPEN_MENU_SIDEBAR } from "../../context/action.types";

// importing icons from react-icons
import {
  AiOutlineShoppingCart,
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineMenu,
} from "react-icons/ai";

export default function Navbar() {
  const { appState, dispatchAppState } = useContext(appContext);
  const { width } = UseWindowSize();
  const navChangeWidth = 1322;

  return width > navChangeWidth ? (
    <div className="navbar-bigger">
      <div className="logo">
        <h2 className="logo_text">logoipsum</h2>
      </div>
      <div className="navlinks">
        <ul>
          <Link className="nav-link" to="/">
            <li>Top Seller</li>
          </Link>
          <Link className="nav-link" to="/">
            <li>Dress Tops Bottoms</li>
          </Link>
          <Link className="nav-link" to="/">
            <li>Sweater knits</li>
          </Link>
          <Link className="nav-link" to="/">
            <li>Shop by Brand</li>
          </Link>
          <Link className="nav-link" to="/">
            <li>Shop by Occasion</li>
          </Link>
          <Link className="nav-link" to="/">
            <li>Mask</li>
          </Link>
          <Link className="nav-link" to="/">
            <li>Sale</li>
          </Link>
          <Link className="nav-link" to="/">
            <li>Overstock</li>
          </Link>
        </ul>
      </div>
      <div className="action_icons">
        <span className="shoping_cart icon">
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
  ) : (
    <div className="navbar-smaller">
      <div className="menu-and-wish-icon">
        <span
          className="menu icon"
          onClick={() =>
            dispatchAppState({ type: OPEN_MENU_SIDEBAR, payload: "active" })
          }
        >
          <AiOutlineMenu />
        </span>
        <span className="whishlist icon">
          <AiOutlineHeart />
        </span>
      </div>

      <div className="logo">
        <h2 className="logo_text">logoipsum</h2>
      </div>

      <div className="action_icons">
        <span className="shoping_cart icon" onClick={() => {}}>
          <AiOutlineShoppingCart />
          <span className="cart_items">3</span>
        </span>

        <span className="search icon">
          <AiOutlineSearch />
        </span>
      </div>
    </div>
  );
}
