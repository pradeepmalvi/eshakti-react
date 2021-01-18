import React from "react";
import "./productCard.styles.scss";

// import react icons
import { AiOutlineStar } from "react-icons/ai";

export default function ProductCard() {
  return (
    <div className="product_card">
      <div className="product_img">
        <div className="img"></div>
      </div>
      <div className="brand">Eshakti</div>
      <div className="product_name">Ruffle Cascade Cotton Knit Jumpsuit</div>
      <div className="price_and_rating">
        <div className="price">
          <span className="prev_price">254$</span>
          <span className="current_price">230$</span>
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
