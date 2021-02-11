import React from "react";
import "./wishlist.styles.scss";

import ProductCard from "../productCard/ProductCard.component";

import { BsHeart } from "react-icons/bs";

export default function Wishlist() {
  return (
    <div className="wishlist">
      <div className="inner-container">
        <h2 className="wishlist-title">Your Wishlist</h2>

        <div className="listing">
          <div className="item">
            <ProductCard />
          </div>
          <div className="item">
            <ProductCard />
          </div>
          <div className="item">
            <ProductCard />
          </div>
          <div className="item">
            <ProductCard />
          </div>
          <div className="item">
            <ProductCard />
          </div>
          <div className="item">
            <ProductCard />
          </div>
          <div className="item">
            <ProductCard />
          </div>
          <div className="item">
            <ProductCard />
          </div>
        </div>
      </div>
    </div>
  );
}
