import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../../store/home/homeAction";
import "./navbar.styles.scss";

import UseWindowSize from "../../hooks/useWindowSize";

import { Link } from "react-router-dom";

import { AppContext } from "../../context/context";
import { OPEN_MENU_SIDEBAR } from "../../context/action.types";

// importing icons from react-icons
import {
  AiOutlineShoppingCart,
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineMenu,
} from "react-icons/ai";

export default function Navbar() {
  const cart = useSelector((state) => state.home.cart);
  const dispatch = useDispatch();

  const { dispatchAppState } = useContext(AppContext);
  const categories = useSelector((state) => state.home.productCategory);
  const { width } = UseWindowSize();
  const navChangeWidth = 1322;

  useEffect(() => {
    dispatch(getCart());
  }, []);

  return width > navChangeWidth ? (
    <div className="navbar-bigger">
      <div className="navbar-inner-container">
        <div className="logo">
          <Link to="/" className="link">
            <h2 className="logo_text">logoipsum</h2>
          </Link>
        </div>
        <div className="navlinks">
          <ul>
            {categories
              ? categories.length > 0
                ? categories.map((eachObj, key) => (
                    <Link
                      key={key}
                      className="nav-link"
                      to={`/category-page/${eachObj.id}`}
                    >
                      <li>{eachObj.main_menu}</li>
                    </Link>
                  ))
                : null
              : null}
          </ul>
        </div>
        <div className="action_icons">
          <Link to="/cart" className="link">
            <span className="shoping_cart icon">
              <AiOutlineShoppingCart />
              <span className="cart_items">3</span>
            </span>
          </Link>
          <span className="whishlist icon">
            <Link className="link" to="/wishlist">
              <AiOutlineHeart />
            </Link>
          </span>
          <span className="search icon">
            <AiOutlineSearch />
          </span>
        </div>
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
          <Link className="link" to="/wishlist">
            <AiOutlineHeart />
          </Link>
        </span>
      </div>

      <div className="logo">
        <Link to="/" className="link">
          <h2 className="logo_text">logoipsum</h2>
        </Link>
      </div>

      <div className="action_icons">
        <Link to="/cart" className="shoping_cart icon link" onClick={() => {}}>
          <AiOutlineShoppingCart />
          <span className="cart_items">{cart ? cart.length : 0}</span>
        </Link>

        <span className="search icon">
          <AiOutlineSearch />
        </span>
      </div>
    </div>
  );
}
