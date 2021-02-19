import React from "react";
import "./default-filter.styles.scss";

export default function DefaultFilter({ filterData }) {
  return (
    <div className="default-filter">
      <h2 className="title">{filterData.name || ""}</h2>

      <ul className="list">
        {filterData &&
          filterData.value.map((eachVal, index) => (
            <li className="list-item" key={index}>
              <div className="eachValue">
                <input type="checkbox" value={eachVal.id} />
                <span>{eachVal.value}</span>
              </div>
              <div className="quantity">
                <span className="text">2</span>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}
