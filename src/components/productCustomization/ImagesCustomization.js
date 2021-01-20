import React, { useState } from "react";

export default function ImagesCustomization({ currentCustom }) {
  return (
    <div className="img-wrapper">
      <div
        class="relativeDiv mx-auto"
        style={{ width: "376.8px", height: "560px" }}
      >
        <div
          class="absoluteDiv"
          style={{
            width: "65.6px",
            height: "228px",
            left: "171.2px",
            top: "0px",
          }}
        >
          <img class="img img-fluid img-bg" src={currentCustom.top} alt="" />
        </div>
        <div
          class="absoluteDiv"
          style={{
            width: "171.2px",
            height: "228px",
            left: "0px",
            top: "0px",
          }}
        >
          <img class="img img-fluid img-bg" src={currentCustom.left} alt="" />
        </div>
        <div
          class="absoluteDiv"
          style={{
            width: "140px",
            height: "228px",
            left: "236.8px",
            top: "0px",
          }}
        >
          <img class="img img-fluid img-bg" src={currentCustom.right} alt="" />
        </div>
        <div
          class="absoluteDiv"
          style={{
            width: "376.8px",
            height: "332px",
            left: "0px",
            top: "227.2px",
          }}
        >
          <img class="img img-fluid img-bg" src={currentCustom.bottom} alt="" />
        </div>
      </div>
    </div>
  );
}
