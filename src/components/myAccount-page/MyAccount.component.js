import React, { useState, useEffect } from "react";
import "./my-account.styles.scss";

import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import OrderDetailsPage from "../order-details-page/OrderDetailsPage.component";

// react redux
import { useSelector } from "react-redux";

import UserProfile from "../user-profile/UserProfile.component";
import OrderHistoryList from "../orderhistory/OrderHistoryList.component";
import ManageAddress from "../manage-address/ManageAddress.component";

export default function MyAccount() {
  const state = useSelector((state) => state);

  return (
    <div className="my-account">
      <div className="inner-container">
        <div className="navigation">
          <h4 className="navigation-title">My Account</h4>
          <div className="nav-list-container">
            <div className="nav-list">
              <Link to={`my-account/`} className="link">
                Profile
              </Link>
              <Link to={`my-account/my-orders`} className="link">
                My Orders
              </Link>
              <Link to={`my-account/manage-address`} className="link">
                Manage Address
              </Link>
            </div>
          </div>
        </div>
        <div className="info-side">
          <Switch>
            <Route exact path={`/my-account/`} render={() => <UserProfile />} />

            <Route
              exact
              path={`/my-account/my-orders`}
              render={() => <OrderHistoryList />}
            />

            <Route
              exact
              path={`/my-account/manage-address`}
              render={() => <ManageAddress />}
            />
            <Route
              exact
              path="/my-account/order-details/:orderId"
              render={() => <OrderDetailsPage />}
            />
          </Switch>
        </div>
      </div>
    </div>
  );
}
