import React from "react";
import "./productCard.styles.scss";

// import react icons
import { AiOutlineStar } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  const { id } = product;
  const { brand } = product;
  const { product_name } = product;
  const { product_price } = product;
  const { total_price } = product;
  const { product_thumbnail } = product;
  return (
    <Link to={`/product-details/${id}`}>
      <div className="product_card">
        <div className="product_img">
          <div
            className="img"
            style={{
              backgroundImage: `url(${
                product_thumbnail &&
                product_thumbnail.length > 0 &&
                product_thumbnail[0]
              })`,
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
    </Link>
  );
}
