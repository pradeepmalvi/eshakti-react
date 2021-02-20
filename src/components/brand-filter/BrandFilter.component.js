import React from "react";
import "./brands-filter.styles.scss";
import { Link } from "react-router-dom";

export default function BrandFilter({ filterData }) {
  return (
    <div className="brand-names-filter">
      <h2 className="title">{filterData.name || ""}</h2>

      <ul className="list">
        {filterData &&
          filterData.value.map((eachVal, index) => {
            return (
              <li className="list-item" key={index}>
                <div className="eachValue">
                  <input type="checkbox" value={eachVal.id} />
                  <span>{eachVal.value}</span>
                </div>
                <div className="quantity">
                  <span className="text">2</span>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
