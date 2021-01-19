import React from "react";
import "./cartProductCard.styles.scss";
import Img from "../../assets/images/04.png";

export default function CartProductCard() {
  return (
    <div className="cart-product-card">
      <div className="inner-container">
        <div className="product-img">
          <img src={Img} alt="img" />
        </div>
        <div className="product-details">
          <div className="product-name">
            <p className="primary-text">
              Self-button Front Cotton Jersey Empire Dress
            </p>
            <p className="variation">M/Red/Cotton</p>
          </div>
          <div className="price">44.32$</div>
        </div>
      </div>
    </div>
  );
}
