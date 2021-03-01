import React from "react";
import "./custom-review-card.styles.scss";

import ReactHtmlParser from "react-html-parser";

// react icons
import { BsStarFill } from "react-icons/bs";

export default function CustomerReviewCard({ comment }) {
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
        {comment ? ReactHtmlParser(comment.message) : ""}
      </div>
      <div className="review-owner-name">{comment ? comment.name : ""}</div>
      <div className="review-date">{comment ? comment.date : ""} </div>
    </div>
  );
}
