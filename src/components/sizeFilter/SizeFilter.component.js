import React from "react";
import "./sizefilter.styles.scss";

export default function SizeFilter() {
  return (
    <div className="size-filter">
      <h2 className="title">filter by Size</h2>
      <div className="size-list">
        <div className="each-size">
          <div className="eachValue">
            <input type="checkbox" />
            <span>L</span>
          </div>
          <div className="quantity">
            <span className="text">2</span>
          </div>
        </div>
        <div className="each-size">
          <div className="eachValue">
            <input type="checkbox" />
            <span>M</span>
          </div>
          <div className="quantity">
            <span className="text">3</span>
          </div>
        </div>
        <div className="each-size">
          <div className="eachValue">
            <input type="checkbox" />
            <span>XL</span>
          </div>
          <div className="quantity">
            <span className="text">2</span>
          </div>
        </div>
        <div className="each-size">
          <div className="eachValue">
            <input type="checkbox" />
            <span>XXL </span>
          </div>
          <div className="quantity">
            <span className="text">4</span>
          </div>
        </div>
        <div className="each-size">
          <div className="eachValue">
            <input type="checkbox" />
            <span>S</span>
          </div>
          <div className="quantity">
            <span className="text">3</span>
          </div>
        </div>
      </div>
    </div>
  );
}
