import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../../store/home/homeAction";

import "./cartPage.scss";

import { AiOutlineHeart, AiOutlineInfoCircle } from "react-icons/ai";
import { BsX } from "react-icons/bs";

export default function CartPage() {
  const cart = useSelector((state) => state.home.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCart());
  }, []);

  return (
    <div className="cart-container">
      <div className="cart-wrapper">
        <div className="cart-group-wrapper">
          {cart &&
            cart.map((product) => (
              <div className="cart-item">
                <div className="cart-image">
                  <img src={product.customized_image} alt="" />
                </div>
                <div className="cart-content">
                  <div className="product-price">${product.price}</div>
                  <p className="product-title ">{product.product_name}</p>
                  <p className="style-attribute">STYLE # CL0078433</p>

                  <div className="attributes-types">
                    <div className="color">black 1</div>
                    <div className="size">
                      <select name="" id="">
                        <option value="">M</option>
                      </select>
                    </div>

                    <div className="quantity">
                      <select name="" id="">
                        <option value="">Qty 1</option>
                      </select>
                    </div>
                  </div>
                  <div className="save-later">
                    <AiOutlineHeart /> Save for later
                  </div>
                  <div className="close">
                    <BsX></BsX>
                  </div>
                </div>
              </div>
            ))}

          <div className="cart-item">
            <div className="cart-image">
              <img
                src="https://i.ibb.co/wYQh1bN/Screen-Shot-2021-01-18-at-11-01-09-PM.png"
                alt=""
              />
            </div>
            <div className="cart-content">
              <div className="product-price">$22.95</div>
              <p className="product-title ">
                Self-Button Front Cotton Jersey Empire Dress
              </p>
              <p className="style-attribute">STYLE # CL0078433</p>

              <div className="attributes-types">
                <div className="color">black 1</div>
                <div className="size">
                  <select name="" id="">
                    <option value="">M</option>
                  </select>
                </div>

                <div className="quantity">
                  <select name="" id="">
                    <option value="">Qty 1</option>
                  </select>
                </div>
              </div>
              <div className="save-later">
                <AiOutlineHeart /> Save for later
              </div>
            </div>
            <div className="close">
              <BsX></BsX>
            </div>
          </div>

          <div className="cart-item-total">
            <span>Sub Total</span> <span>$41.35</span>
          </div>
        </div>
        <div className="cart-total-wrapper">
          <div className="cart-total">
            <div className="total-header">TOTAL</div>
            <div className="subtotal">
              <span>Sub Total</span> <span>$41.35</span>
            </div>
            <div className="subtotal">
              <span>Delivery</span>{" "}
              <span>
                <AiOutlineInfoCircle></AiOutlineInfoCircle>
              </span>
            </div>
            <div className="delivery-option">
              <select name="" id="" className="">
                <option value=""> Standard Delivery (Free)</option>
              </select>
            </div>
            <div className="checkout-btn">PROCEED TO CHECKOUT</div>
            WE ACCEPT:
            <div className="payment-methods">
              <div className="card">
                <img
                  src="https://pngimg.com/uploads/visa/visa_PNG18.png"
                  alt=""
                />
              </div>
              <div className="card">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png"
                  alt=""
                />
              </div>
              <div className="card">
                <img
                  src="https://icon-library.com/images/paypal-icon-vector/paypal-icon-vector-9.jpg"
                  alt=""
                />
              </div>
              <div className="card">
                <img
                  src="https://cdn4.iconfinder.com/data/icons/payment-method/160/payment_method_american_express_card-512.png"
                  alt=""
                />
              </div>
              <div className="card">
                <img
                  src="https://pngimg.com/uploads/visa/visa_PNG18.png"
                  alt=""
                />
              </div>
              <div className="card">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png"
                  alt=""
                />
              </div>
              <div className="card">
                <img
                  src="https://icon-library.com/images/paypal-icon-vector/paypal-icon-vector-9.jpg"
                  alt=""
                />
              </div>
            </div>
            <p> Get a discount code? add it in the next step.</p>
          </div>
          <div className="shipping-info">
            <h4>Shipping Information</h4>
            <p>
              Shipping charges are calculate based on prices before discounts.
            </p>
            <a className="link">
              <i>
                <u> View Shipping Information</u>
              </i>
            </a>
          </div>
          <div className="shipping-info">
            <h4> Need Help?</h4>
            <p>We are available if you any questions!</p>
            <a className="link">
              <i>
                <u> Contact Us</u>
              </i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
