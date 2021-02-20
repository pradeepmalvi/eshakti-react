import React from "react";
import "./cartProductCard.styles.scss";
import Img from "../../assets/images/04.png";

export default function CartProductCard({ product }) {
  return (
    <div className="cart-product-card">
      <div className="inner-container">
        <div className="product-img">
          <img src={product.customized_image} alt="img" />
        </div>
        <div className="product-details">
          <div className="product-name">
            <p className="primary-text">{product && product.product_name}</p>
            <p className="variation">{product && product.color_name}</p>
          </div>
          <div className="price">${product && product.price}</div>
        </div>
      </div>
    </div>
  );
}
