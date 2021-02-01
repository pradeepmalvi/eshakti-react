import React from "react";
import "./productCard.styles.scss";

// import react icons
import { AiOutlineStar } from "react-icons/ai";

export default function ProductCard({
  brand,
  product_name,
  product_price,
  total_price,
  product_thumbnail,
}) {
  return (
    <div className="product_card">
      <div className="product_img">
        <div
          className="img"
          style={{
            backgroundImage: `url(${product_thumbnail[0]})`,
          }}
        ></div>
      </div>
      <div className="brand">{brand}</div>
      <div className="product_name">{product_name}</div>
      <div className="price_and_rating">
        <div className="price">
          <span className="prev_price">{product_price}$</span>
          <span className="current_price">{total_price}$</span>
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
