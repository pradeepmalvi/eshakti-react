import React from "react";
import "./shippingInfopage.styles.scss";

import { Link } from "react-router-dom";
import CartProductCard from "../cart-product-card/CartProductCard.component";
import FormInput from "../form-input/FormInput.component";
import SelectFormElement from "../select-form-element/SelectFormElement.component";

import { IoIosArrowBack } from "react-icons/io";

export default function ShippingInfoPage() {
  return (
    <div className="shipping-info">
      <div className="inner-container">
        <div className="left">
          <div className="top-title-area">
            <h2 className="title">contact information</h2>
            <div className="login-link">
              <Link className="link" to="/login">
                Already have an account ? Log In
              </Link>
            </div>
          </div>
          <div className="info-form">
            <form>
              <FormInput
                type={"text"}
                placeholder={"Enter Your Email or Phone Number"}
                name={"emailOrPhone"}
              />
              <div className="mid-title">
                <h2 className="title-text">Shipping Address</h2>
              </div>

              <div className="inline-form-shipping-address">
                <FormInput
                  type={"text"}
                  placeholder={"First Name"}
                  className={"firstName"}
                  name={"firstName"}
                />
                <FormInput
                  type={"text"}
                  placeholder={"Last Name"}
                  className="lastName"
                  name={"lastName"}
                />
              </div>

              <FormInput
                type={"text"}
                placeholder={"Apartment, Suit, etc"}
                className="residency"
                name={"residency"}
              />
              <FormInput
                type={"text"}
                placeholder={"City"}
                className={"city"}
                name={"city"}
              />

              <div className="inline-form-field">
                <SelectFormElement name={"country"}>
                  <option value="austrelia">Austrelia</option>
                  <option value="austrelia">Austrelia</option>
                  <option value="austrelia">Austrelia</option>
                </SelectFormElement>
                <SelectFormElement name={"state"}>
                  <option value="austrelia">Melbourne</option>
                  <option value="austrelia">Austrelia</option>
                  <option value="austrelia">Austrelia</option>
                </SelectFormElement>

                <FormInput
                  type={"text"}
                  className="pincode"
                  placeholder="PIN"
                />
              </div>

              <div className="save-info">
                <FormInput type={"checkbox"} className="save-info-checkbox" />
                <p>Save this information for next time</p>
              </div>

              <div className="bottom">
                <div className="return-link">
                  <Link to="/" className="link">
                    <span className="icon">
                      <IoIosArrowBack />
                    </span>
                    Return to Cart
                  </Link>
                </div>
                <FormInput
                  type={"submit"}
                  className="submit-btn"
                  value="continue to shopping"
                />
              </div>
            </form>
          </div>
        </div>
        <div className="right">
          <div className="cart-products">
            <CartProductCard />
            <CartProductCard />
          </div>
          <div className="cost-amounts">
            <div className="sub-total">
              <span className="text">Sub Total</span>
              <span className="value">85.35$</span>
            </div>
            <div className="shipping">
              <span className="text">Shipping</span>
              <span className="value">calculated at next step</span>
            </div>
            <div className="tax">
              <span className="text">Taxes (estimated)</span>
              <span className="value">4.0$</span>
            </div>
            <div className="total">
              <span className="text">Total</span>
              <span className="value">89.32$</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
