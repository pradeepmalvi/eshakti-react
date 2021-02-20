import React from "react";
import "./colorFilter.styles.scss";

import Color from "../../assets/images/black.png";

export default function ColorFilter({ filterData }) {
  return (
    <div className="color-filter">
      <h2 className="title">{filterData.name || ""}</h2>
      <div className="color-list">
        {filterData &&
          filterData.value.map((eachVal, index) => (
            <div className="each-color" key={index}>
              <div className="color">
                <input type="checkbox" value={filterData.id} />
                {eachVal.color_image ? (
                  <img
                    src={eachVal.color_image}
                    alt="img"
                    width={20}
                    height={20}
                    className="color-pic"
                  />
                ) : (
                  <span
                    className="color-name"
                    style={{ backgroundColor: eachVal.color_code }}
                  ></span>
                )}
              </div>
              <div className="quantity">
                <span className="text">1</span>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
