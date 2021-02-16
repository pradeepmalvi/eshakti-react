import React, { useState, useEffect } from "react";
import "./my-account.styles.scss";

import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import OrderDetailsPage from "../order-details-page/OrderDetailsPage.component";

import { useSelector } from "react-redux";
import UserProfile from "../user-profile/UserProfile.component";
import OrderHistoryList from "../orderhistory/OrderHistoryList.component";

export default function MyAccount() {
  const state = useSelector((state) => state);

  return (
    <div className="my-account">
      <div className="inner-container">
        <div className="navigation">
          <h4 className="navigation-title">My Account</h4>
          <div className="nav-list-container">
            <div className="nav-list">
              <Link to={`my-account/profile`} className="link">
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
            <Route
              exact
              path={`/my-account/profile`}
              render={() => <UserProfile />}
            />

            <Route
              exact
              path={`/my-account/`}
              render={() => <OrderHistoryList />}
            />

            <Route
              exact
              path={`my-account/manage-address`}
              render={() => (
                <>
                  <div className="manage-address">
                    <div className="shipping-address">
                      <p className="info-side-title">shipping Address</p>
                      <form>
                        <div className="input-control-inline">
                          <div className="email common">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" />
                          </div>

                          <div className="password common">
                            <label htmlFor="email">Password</label>
                            <input type="password" name="password" />
                          </div>
                        </div>

                        <div className="input-control input-full-width-common">
                          <label htmlFor="primary-address">
                            Address line 1
                          </label>
                          <input type="text" name="primary-address" />
                        </div>
                        <div className="input-control input-full-width-common">
                          <label htmlFor="primary-address">
                            Address line 2
                          </label>
                          <input type="text" />
                        </div>

                        <div className="input-control-inline">
                          <div className="name common">
                            <label htmlFor="name">City</label>
                            <input type="text" name="name" />
                          </div>

                          <div className="password common">
                            <label htmlFor="number">zip Code</label>
                            <input type="text" name="number" />
                          </div>
                        </div>

                        <div className="input-control-inline">
                          <div className="country common">
                            <label htmlFor="country">Country</label>
                            <select>
                              <option value="">India</option>
                              <option value="">uk</option>
                            </select>
                          </div>

                          <div className="State common">
                            <label htmlFor="state">State</label>
                            <select>
                              <option value="">Rajsthan</option>
                              <option value="">Bhilwara</option>
                            </select>
                          </div>
                        </div>

                        <div className="btn">
                          <button type="submit">Update</button>
                        </div>
                      </form>
                    </div>

                    <div className="same-address">
                      <label htmlFor="same-address">
                        Use Shipping Address as Billing
                      </label>
                      <input type="checkbox" name="same-address" />
                    </div>

                    <div className="billing-address">
                      <p className="info-side-title">Billing Address</p>
                      <form>
                        <div className="input-control-inline">
                          <div className="name common">
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" />
                          </div>

                          <div className="mobile common">
                            <label htmlFor="mobile">MobileNumber</label>
                            <input type="text" name="mobile" />
                          </div>
                        </div>

                        <div className="input-control input-full-width-common">
                          <label htmlFor="primary-address">
                            Address line 1
                          </label>
                          <input type="text" name="primary-address" />
                        </div>
                        <div className="input-control input-full-width-common">
                          <label htmlFor="primary-address">
                            Address line 2
                          </label>
                          <input type="text" />
                        </div>

                        <div className="input-control-inline">
                          <div className="name common">
                            <label htmlFor="name">City</label>
                            <input type="text" name="name" />
                          </div>

                          <div className="password common">
                            <label htmlFor="number">zip Code</label>
                            <input type="text" name="number" />
                          </div>
                        </div>

                        <div className="input-control-inline">
                          <div className="country common">
                            <label htmlFor="country">Country</label>
                            <select>
                              <option value="">India</option>
                              <option value="">uk</option>
                            </select>
                          </div>

                          <div className="State common">
                            <label htmlFor="state">State</label>
                            <select>
                              <option value="">Rajsthan</option>
                              <option value="">Bhilwara</option>
                            </select>
                          </div>
                        </div>
                        <div className="btn">
                          <button type="submit">Update</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </>
              )}
            />

            <Route
              exact
              path="/my-account/order-details"
              render={() => <OrderDetailsPage />}
            />
          </Switch>
        </div>
      </div>
    </div>
  );
}
