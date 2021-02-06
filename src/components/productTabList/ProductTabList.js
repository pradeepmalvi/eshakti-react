import React from "react";
import "./productTabList.scss";

export default function ProductTabList({ productDetail, feature_description }) {
  return (
    <div className="tabs-main-wrapper">
      <div className="tabs-header">
        <div className="tab-absolute">
          <div className="tab active">Description</div>
          <div className="tab">Additional Information</div>
          <div className="tab">Review (0)</div>
        </div>
      </div>
      <div className="tabs-content">
        {/* <p dangerouslySetInnerHTML={{ __html: feature_description }}></p>
        <br /> */}
        <p dangerouslySetInnerHTML={{ __html: productDetail }}></p>
      </div>
    </div>
  );
}
