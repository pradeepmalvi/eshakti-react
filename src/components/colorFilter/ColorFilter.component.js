import React from "react";
import "./colorFilter.styles.scss";

import Color from "../../assets/images/black.png";

export default function ColorFilter() {
  return (
    <div className="color-filter">
      <h2 className="title">filter by color</h2>
      <div className="color-list">
        <div className="each-color">
          <div className="color">
            <img
              src={Color}
              alt="img"
              width={20}
              height={20}
              className="color-pic"
            />
            <span className="color-name">red</span>
          </div>
          <div className="quantity">
            <span className="text">1</span>
          </div>
        </div>
        <div className="each-color">
          <div className="color">
            <img
              src={Color}
              alt="img"
              width={20}
              height={20}
              className="color-pic"
            />
            <span className="color-name">red</span>
          </div>
          <div className="quantity">
            <span className="text">3</span>
          </div>
        </div>
        <div className="each-color">
          <div className="color">
            <img
              src={Color}
              alt="img"
              width={20}
              height={20}
              className="color-pic"
            />
            <span className="color-name">red</span>
          </div>
          <div className="quantity">
            <span className="text">2</span>
          </div>
        </div>
        <div className="each-color">
          <div className="color">
            <img
              src={Color}
              alt="img"
              width={20}
              height={20}
              className="color-pic"
            />
            <span className="color-name">red</span>
          </div>
          <div className="quantity">
            <span className="text">2</span>
          </div>
        </div>
        <div className="each-color">
          <div className="color">
            <img
              src={Color}
              alt="img"
              width={20}
              height={20}
              className="color-pic"
            />
            <span className="color-name">red</span>
          </div>
          <div className="quantity">
            <span className="text">2</span>
          </div>
        </div>
      </div>
    </div>
  );
}
