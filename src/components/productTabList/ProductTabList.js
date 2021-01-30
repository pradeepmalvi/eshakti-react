import React, { Component } from "react";
import "./productTabList.scss";
import { AiOutlineRight } from "react-icons/ai";

export default class ProductTabList extends Component {
  render() {
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
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde qui in
          velit eius dolor quas temporibus quidem magnam reiciendis itaque,
          molestiae est modi consectetur inventore, illum cumque praesentium
          nemo id cupiditate quam. Quis, fugiat eligendi repudiandae consequatur
          est veniam aspernatur. Accusantium voluptatem pariatur iure quas
          quidem labore expedita. Totam, eligendi?
          <ul>
            <li>
              <AiOutlineRight></AiOutlineRight>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              tenetur ut sunt.
            </li>
            <li>
              <AiOutlineRight></AiOutlineRight> Lorem, ipsum dolor sit amet
              consectetur adipisicing elit.
            </li>
            <li>
              <AiOutlineRight></AiOutlineRight>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              dicta consectetur expedita necessitatibus earum.
            </li>
            <li>
              <AiOutlineRight></AiOutlineRight>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo, maxime!
            </li>
            <li>
              <AiOutlineRight></AiOutlineRight>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              tenetur ut sunt.
            </li>
            <li>
              <AiOutlineRight></AiOutlineRight> Lorem, ipsum dolor sit amet
              consectetur adipisicing elit.
            </li>
            <li>
              <AiOutlineRight></AiOutlineRight>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              dicta consectetur expedita necessitatibus earum.
            </li>
            <li>
              <AiOutlineRight></AiOutlineRight>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo, maxime!
            </li>
            <li>
              <AiOutlineRight></AiOutlineRight>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              tenetur ut sunt.
            </li>
            <li>
              <AiOutlineRight></AiOutlineRight> Lorem, ipsum dolor sit amet
              consectetur adipisicing elit.
            </li>
            <li>
              <AiOutlineRight></AiOutlineRight>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              dicta consectetur expedita necessitatibus earum.
            </li>
            <li>
              <AiOutlineRight></AiOutlineRight>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo, maxime!
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
