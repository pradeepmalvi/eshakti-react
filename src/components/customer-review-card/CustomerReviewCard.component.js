import React from "react";
import "./custom-review-card.styles.scss";

// react icons
import { BsStarFill } from "react-icons/bs";

export default function CustomerReviewCard() {
  return (
    <div className="customer-review-card">
      <div className="stars">
        <span className="icon">
          <BsStarFill />
        </span>
        <span className="icon">
          <BsStarFill />
        </span>
        <span className="icon">
          <BsStarFill />
        </span>
      </div>
      <div className="review-text">
        I recently purchased a pink duster jacket with embroidery. It is so
        beautiful. I would not be able to find anything like this in stores. It
        is the type of style that looks flattering on every figure type. I can
        wear this jacket with so, many outfits. When you are able to purchase
        clothes that fit you perfectly, it always makes you look more
        attractive.
      </div>
      <div className="review-owner-name">jaxon mark</div>
      <div className="review-date">1/2/2021</div>
    </div>
  );
}
