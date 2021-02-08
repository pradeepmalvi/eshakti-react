import React from "react";
import "./my-account.styles.scss";

import { Link, Route, Switch, useRouteMatch } from "react-router-dom";

export default function MyAccount() {
  let { path, url } = useRouteMatch();

  console.log(url, path);
  return (
    <div className="my-account">
      <div className="inner-container">
        <div className="navigation">
          <h4 className="navigation-title">My Account</h4>
          <div className="nav-list">
            <Link to={`/my-account/profile`} className="link">
              Profile
            </Link>
            <Link to={`/my-account/my-orders`} className="link">
              My Orders
            </Link>
            <Link to={`/my-account/manage-address`} className="link">
              Manage Address
            </Link>
          </div>
        </div>
        <div className="info-side">
          <Switch>
            <Route
              exact
              path="/my-account/profile"
              render={() => (
                <>
                  <div className="personal-info-slot">
                    <p className="info-side-title">Personal info</p>
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
                      <div className="input-control-inline">
                        <div className="name common">
                          <label htmlFor="name">Name</label>
                          <input type="text" name="name" />
                        </div>

                        <div className="password common">
                          <label htmlFor="number">Phone</label>
                          <input type="text" name="number" />
                        </div>
                      </div>

                      <div className="btn">
                        <button type="submit">Update</button>
                      </div>
                    </form>
                  </div>
                </>
              )}
            />

            <Route
              exact
              path="/my-account/my-orders"
              render={() => (
                <>
                  <div className="my-orders-slot">
                    <p className="info-side-title">My orders</p>
                    <div className="each-order">
                      <div className="img-and-common-details">
                        <div className="order-img">
                          <img
                            width={150}
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCFvT5KiIRBpnM2L6FAAaSioCofkvQML1IIA&usqp=CAU"
                            alt=""
                          />
                        </div>
                        <div className="common-details">
                          <div className="name">Addidas Shirts</div>
                          <div className="orderId">#2929</div>
                        </div>
                      </div>
                      <div className="order-date">
                        <span className="ordered-title-text">Ordered On</span>
                        <span className="value-text"> 23/2/2021</span>
                      </div>
                      <div className="price">
                        {" "}
                        <span className="price-title-text">Price</span>
                        <div className="value-text">44$</div>
                      </div>
                    </div>
                    <div className="each-order">
                      <div className="img-and-common-details">
                        <div className="order-img">
                          <img
                            width={150}
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCFvT5KiIRBpnM2L6FAAaSioCofkvQML1IIA&usqp=CAU"
                            alt=""
                          />
                        </div>
                        <div className="common-details">
                          <div className="name">Addidas Shirts</div>
                          <div className="orderId">#2929</div>
                        </div>
                      </div>
                      <div className="order-date">
                        <span className="ordered-title-text">Ordered On</span>
                        <span className="value-text"> 23/2/2021</span>
                      </div>
                      <div className="price">
                        {" "}
                        <span className="price-title-text">Price</span>
                        <div className="value-text">44$</div>
                      </div>
                    </div>
                    <div className="each-order">
                      <div className="img-and-common-details">
                        <div className="order-img">
                          <img
                            width={150}
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCFvT5KiIRBpnM2L6FAAaSioCofkvQML1IIA&usqp=CAU"
                            alt=""
                          />
                        </div>
                        <div className="common-details">
                          <div className="name">Addidas Shirts</div>
                          <div className="orderId">#2929</div>
                        </div>
                      </div>
                      <div className="order-date">
                        <span className="ordered-title-text">Ordered On</span>
                        <span className="value-text"> 23/2/2021</span>
                      </div>
                      <div className="price">
                        {" "}
                        <span className="price-title-text">Price</span>
                        <div className="value-text">44$</div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            />

            <Route
              exact
              path="/my-account/"
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
          </Switch>

          {/* <div className="personal-info-slot">
            <p className="info-side-title">Personal info</p>
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
              <div className="input-control-inline">
                <div className="name common">
                  <label htmlFor="name">Name</label>
                  <input type="text" name="name" />
                </div>

                <div className="password common">
                  <label htmlFor="number">Phone</label>
                  <input type="text" name="number" />
                </div>
              </div>

              <div className="btn">
                <button type="submit">Update</button>
              </div>
            </form>
          </div> */}

          {/* <div className="my-orders-slot">
            <p className="info-side-title">My orders</p>
            <div className="each-order">
              <div className="img-and-common-details">
                <div className="order-img">
                  <img
                    width={150}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCFvT5KiIRBpnM2L6FAAaSioCofkvQML1IIA&usqp=CAU"
                    alt=""
                  />
                </div>
                <div className="common-details">
                  <div className="name">Addidas Shirts</div>
                  <div className="orderId">#2929</div>
                </div>
              </div>
              <div className="order-date">
                <span className="ordered-title-text">Ordered On</span>  
                <span className="value-text"> 23/2/2021</span>
              </div>
              <div className="price">
                {" "}
                <span className="price-title-text">Price</span>
                <div className="value-text">44$</div>
              </div>
            </div>
            <div className="each-order">
              <div className="img-and-common-details">
                <div className="order-img">
                  <img
                    width={150}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCFvT5KiIRBpnM2L6FAAaSioCofkvQML1IIA&usqp=CAU"
                    alt=""
                  />
                </div>
                <div className="common-details">
                  <div className="name">Addidas Shirts</div>
                  <div className="orderId">#2929</div>
                </div>
              </div>
              <div className="order-date">
                <span className="ordered-title-text">Ordered On</span>
                <span className="value-text"> 23/2/2021</span>
              </div>
              <div className="price">
                {" "}
                <span className="price-title-text">Price</span>
                <div className="value-text">44$</div>
              </div>
            </div>
            <div className="each-order">
              <div className="img-and-common-details">
                <div className="order-img">
                  <img
                    width={150}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCFvT5KiIRBpnM2L6FAAaSioCofkvQML1IIA&usqp=CAU"
                    alt=""
                  />
                </div>
                <div className="common-details">
                  <div className="name">Addidas Shirts</div>
                  <div className="orderId">#2929</div>
                </div>
              </div>
              <div className="order-date">
                <span className="ordered-title-text">Ordered On</span>
                <span className="value-text"> 23/2/2021</span>
              </div>
              <div className="price">
                {" "}
                <span className="price-title-text">Price</span>
                <div className="value-text">44$</div>
              </div>
            </div>
          </div> */}

          {/* <div className="manage-address">
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
                  <label htmlFor="primary-address">Address line 1</label>
                  <input type="text" name="primary-address" />
                </div>
                <div className="input-control input-full-width-common">
                  <label htmlFor="primary-address">Address line 2</label>
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
                  <label htmlFor="primary-address">Address line 1</label>
                  <input type="text" name="primary-address" />
                </div>
                <div className="input-control input-full-width-common">
                  <label htmlFor="primary-address">Address line 2</label>
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
          </div> */}

          {/* <Switch>
            <Route
              exact
              path="/my-account/size-profile"
              render={() => <div>hello</div>}
            ></Route>
            <Route
              exact
              path="/my-account/profile-info"
              component={<div>profile info</div>}
            />
            <Route
              exact
              path="/my-account/my-orders"
              component={<div>orders</div>}
            />
            <Route
              exact
              path="/my-account/manage-address"
              component={<div>manage orders</div>}
            />
            <Route
              exact
              path="/my-account/gift-coupon-and-cards"
              component={<div>gift coupon card</div>}
            />
            <Route
              exact
              path="/my-account/size-profile"
              component={<div>size profile</div>}
            />
          </Switch> */}
        </div>
      </div>
    </div>
  );
}
