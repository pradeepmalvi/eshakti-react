import React, { useContext } from "react";
import "./mobileMenuSidebar.styles.scss";

import { Link } from "react-router-dom";
import { CgClose } from "react-icons/cg";
import { appContext } from "../../context/context";
import { OPEN_MENU_SIDEBAR } from "../../context/action.types";

export default function MobileMenuSidebar() {
  const { appState, dispatchAppState } = useContext(appContext);
  console.log(appState);

  return (
    <div className={`mobile-menu-sidebar appState ${appState.menu_sidebar}`}>
      <div className="close">
        <span
          onClick={() =>
            dispatchAppState({ type: OPEN_MENU_SIDEBAR, payload: "" })
          }
        >
          <CgClose />
        </span>
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
    </div>
  );
}
