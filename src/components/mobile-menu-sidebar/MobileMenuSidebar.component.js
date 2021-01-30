import React, { useContext } from "react";
import "./mobileMenuSidebar.styles.scss";

import { Link } from "react-router-dom";
import { CgClose } from "react-icons/cg";
import { AppContext } from "../../context/context";
import { OPEN_MENU_SIDEBAR } from "../../context/action.types";

export default function MobileMenuSidebar() {
  const { appState, dispatchAppState } = useContext(AppContext);
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
          {appState.nav_links.length > 0
            ? appState.nav_links.map((eachObj, key) => (
                <Link
                  key={key}
                  className="nav-link"
                  to={`/category-page/${eachObj.id}`}
                >
                  <li>{eachObj.main_menu}</li>
                </Link>
              ))
            : null}
        </ul>
      </div>
    </div>
  );
}
