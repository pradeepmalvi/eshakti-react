import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCart,
  updateCart,
  removeCart,
  placeOrder,
} from "../../store/home/homeAction";
import "./shippingInfopage.styles.scss";

import { Link } from "react-router-dom";
import CartProductCard from "../cart-product-card/CartProductCard.component";
import FormInput from "../form-input/FormInput.component";
import SelectFormElement from "../select-form-element/SelectFormElement.component";

import { IoIosArrowBack } from "react-icons/io";

export default function ShippingInfoPage() {
  const [name, setname] = useState("");
  const [phone, setphone] = useState("");
  const [alternate_phone, setalternate_phone] = useState("");
  const [address, setaddress] = useState("");
  const [address_type, setaddress_type] = useState("");
  const [city, setcity] = useState("");
  const [country, setcountry] = useState("");
  const [state, setstate] = useState("");
  const [zip_code, setzip_code] = useState("");
  const [landmark, setlandmark] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const cart = useSelector((state) => state.home.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCart());
  }, []);

  const updateQunitity = (type, cart_id) => {
    let quantity;
    if (type === "add") {
      for (let i = 0; i < cart.length; i++) {
        if (cart_id === cart[i].cart_id) {
          quantity = cart[i].quantity + 1;
        }
      }
    } else {
      for (let i = 0; i < cart.length; i++) {
        if (cart_id === cart[i].cart_id) {
          if (cart[i].quantity > 1) {
            quantity = cart[i].quantity - 1;
          }
        }
      }
    }
    let data = {
      quantity: quantity,
    };
    dispatch(updateCart(data, cart_id));
  };

  const cartGrandTotal = () => {
    let total = 0;
    if (cart) {
      for (let i = 0; i < cart.length; i++) {
        total = total + cart[i].price;
      }
    }
    return total;
  };

  const onPlaceOrder = (e) => {
    e.preventDefault();
    let data = {
      totPrice: 1234,
      user_id: 1,
      shipping_charge: 45,
      customization_charge: 89,
      cart_id: [40],
      shipping_address: {
        name: name,
        phone: phone,
        alternate_phone: alternate_phone,
        address: address,
        address_type: address_type,
        city: city,
        country: country,
        state: state,
        zip_code: zip_code,
        landmark: landmark,
      },
      payment: {
        mode: "COD",
        status: "Unpaid",
      },
    };
    dispatch(placeOrder(data));
  };

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
            <form onSubmit={onPlaceOrder}>
              <FormInput
                type={"text"}
                placeholder={"Enter Phone Number"}
                name={"phone"}
                value={phone}
                onChange={(e) => setphone(e.target.name)}
                required
              />
              <div className="mid-title">
                <h2 className="title-text">Shipping Address</h2>
              </div>

              <div className="inline-form-shipping-address">
                <FormInput
                  type={"text"}
                  placeholder="Full Name"
                  className={"firstName"}
                  name="name"
                  value={name}
                  onChange={(e) => setname(e.target.name)}
                  required
                />
                {/* <FormInput
                  type={"text"}
                  placeholder={"Last Name"}
                  className="lastName"
                  name={"lastName"}
                /> */}
              </div>

              <FormInput
                type={"text"}
                placeholder={"Apartment, Suit, etc"}
                className="residency"
                name="address"
                value={address}
                onChange={(e) => setaddress(e.target.name)}
                required
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
            {cart && cart.length > 0
              ? cart.map((product) => <CartProductCard product={product} />)
              : " "}

            {/* <CartProductCard /> */}
          </div>
          <div className="cost-amounts">
            <div className="sub-total">
              <span className="text">Sub Total</span>
              <span className="value">${cartGrandTotal()}</span>
            </div>
            <div className="shipping">
              <span className="text">Shipping</span>
              <span className="value">calculated at next step</span>
            </div>
            <div className="tax">
              <span className="text">Taxes (estimated)</span>
              <span className="value">$0</span>
            </div>
            <div className="total">
              <span className="text">Total</span>
              <span className="value">${cartGrandTotal()}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
