import React from "react";
import "./productCard.styles.scss";

// import react icons
import { AiOutlineStar } from "react-icons/ai";

export default function ProductCard({ product }) {
  return (
    <div className="product_card">
      <div className="product_img">
        <div
          className="img"
          style={{
            backgroundImage: `url(${
              product ? product.product_thumbnail[0] : ""
            })`,
          }}
        ></div>
      </div>
      <div className="brand">Eshakti</div>
      <div className="product_name">
        {product ? product.product_name : "product name"}
      </div>
      <div className="price_and_rating">
        <div className="price">
          <span className="prev_price">
            {product ? product.product_price : "33"}$
          </span>
          <span className="current_price">
            {product ? product.total_price : "22"}$
          </span>
        </div>
        <span className="rating">
          <span className="each_star">
            <AiOutlineStar />
          </span>
          <span className="each_star">
            <AiOutlineStar />
          </span>
          <span className="each_star">
            <AiOutlineStar />
          </span>
        </span>
      </div>
    </div>
  );
}
