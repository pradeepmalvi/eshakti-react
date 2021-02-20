import React from "react";
import "./orderDetailsPage.styles.scss";

import CartProductCard from "../cart-product-card/CartProductCard.component";

export default function OrderDetailsPage() {
  return (
    <div className="order-details">
      <div className="top-bar">
        <div className="order-id">Order ID : 354</div>
        <div className="date">2021-02-06 06:55:47</div>
        <div className="download-invoice">
          <button>
            <span>Download Invoice</span>
          </button>
        </div>
      </div>
      <div className="order-details-content">
        <div className="left">
          <div className="user-details">
            <h4>USER DETAILS</h4>
            <ul>
              <li className="name">
                <span className="key">Name : </span>
                <span className="value">Jitender</span>
              </li>
              <li className="phone">
                <span className="key">Phone : </span>
                <span className="value">98598598588</span>
              </li>
              <li>
                <span className="key">AlterNate : </span>
                <span className="value">787877878</span>
              </li>
            </ul>
          </div>

          <div className="address-details">
            <h4>ADDRESS DETAILS</h4>
            <ul>
              <li className="address">
                <span className="key">Address : </span>
                <span className="value">
                  jitender, new delhi, jaipur, 40, UAE
                </span>
              </li>
              <li className="phone">
                <span className="key">Phone : </span>
                <span className="value">9898989898</span>
              </li>
              <li className="alternative-phone">
                <span className="key">Alternate : </span>
                <span className="value"> </span>
              </li>
            </ul>
          </div>

          <div className="payment-details">
            <h4>PAYMENT DETAILS</h4>
            <ul>
              <li className="subtotal">
                <span className="key">Sub Total : </span>
                <span className="value">25$</span>
              </li>
              <li className="discount-amount">
                <span className="key">Discount: </span>
                <span className="value">2$</span>
              </li>
              <li className="alternative-phone">
                <span className="key">Shipping Charges : </span>
                <span className="value"> 23$</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="right">
          <CartProductCard />
        </div>
      </div>
    </div>
  );
}
