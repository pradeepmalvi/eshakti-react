import React, { useState } from "react";
import "./productTabList.scss";

export default function ProductTabList({ productDetail, feature_description }) {
  const [currentTab, setCurrectTab] = useState(1);

  return (
    <div className="tabs-main-wrapper">
      <div className="tabs-header">
        <div className="tab-absolute">
          <div
            className={`tab ${currentTab === 1 ? "active" : null}`}
            onClick={() => setCurrectTab(1)}
          >
            Description
          </div>
          <div
            className={`tab ${currentTab === 2 ? "active" : null}`}
            onClick={() => setCurrectTab(2)}
          >
            Additional Information
          </div>
          <div
            className={`tab ${currentTab === 3 ? "active" : null}`}
            onClick={() => setCurrectTab(3)}
          >
            Review (0)
          </div>
        </div>
      </div>
      <div className="tabs-content">
        {currentTab === 1 ? (
          <p dangerouslySetInnerHTML={{ __html: productDetail }}></p>
        ) : null}

        {currentTab === 2 ? (
          <p dangerouslySetInnerHTML={{ __html: feature_description }}></p>
        ) : null}
        {currentTab === 3 ? (
          <p dangerouslySetInnerHTML={{ __html: feature_description }}></p>
        ) : null}
      </div>
    </div>
  );
}
