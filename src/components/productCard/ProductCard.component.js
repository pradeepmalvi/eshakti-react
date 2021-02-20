import React from "react";
import "./productCard.styles.scss";

// import react icons
import { AiOutlineStar, AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function ProductCard({ product = {} }) {
  const { id } = product;
  const { brand } = product;
  const { product_name } = product;
  const { product_price } = product;
  const { total_price } = product;
  const { product_thumbnail } = product;

  const handleClick = (product_id) => {
    console.log(product_id);
  };

  return (
    <div className="product_card">
      <span
        className={"icon"}
        onClick={() => {
          handleClick(id);
        }}
      >
        <AiOutlineHeart />
      </span>

      <Link to={`/product-details/${id}`}>
        <div className="product_img">
          <div
            className="img"
            // style={{
            //   backgroundImage: `url(${
            //     (product_thumbnail &&
            //       product_thumbnail.length > 0 &&
            //       product_thumbnail[0]) ||
            //     "https://img1.eshakti.com/clothimages/CL0081518MP.jpg"
            //   })`,
            // }}
          >
            <img
              className="img"
              src={
                (product_thumbnail &&
                  product_thumbnail.length > 0 &&
                  product_thumbnail[0]) ||
                "https://img1.eshakti.com/clothimages/CL0081518MP.jpg"
              }
              alt=""
            />
          </div>
        </div>
        <div className="brand">{brand || "brand name"}</div>
        <div className="product_name">{product_name || "product name"}</div>
        <div className="price_and_rating">
          <div className="price">
            <span className="prev_price">{product_price || 444}$</span>
            <span className="current_price">{total_price || 333}$</span>
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
      </Link>
    </div>
  );
}
