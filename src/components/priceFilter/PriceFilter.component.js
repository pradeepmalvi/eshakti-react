import React from "react";
import "./priceFilter.styles.scss";

// rc slider
import Slider, { Range } from "rc-slider";
import "rc-slider/assets/index.css";

export default function PriceFilter() {
  return (
    <div className="price-filter">
      <h2 className="title">By price</h2>
      <>
        <Range min={0} max={50} />
        <div className="price-range">
          <span className="label">Price:</span>
          <span className="min">10$</span>-<span className="max">250$</span>
        </div>
      </>
    </div>
  );
}
