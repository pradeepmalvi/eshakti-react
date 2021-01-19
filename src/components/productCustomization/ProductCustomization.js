import React, { useState } from "react";
import "react-responsive-modal/styles.css";
import "./productCustomization.scss";
import { Modal } from "react-responsive-modal";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { AiOutlineShareAlt } from "react-icons/ai";
import ImagesCustomization from "./ImagesCustomization";

export default function ProductCustomization({ open, close }) {
  const [imageCustom, setImageCustom] = useState({
    top: [
      {
        id: "1",
        type: "top",
        name: "Peter Pan",
        img: "https://www.eshakti.com/styling%20images/Peter%20Pan.jpg",
        top:
          "https://www.eshakti.com/images/CL0080522/CL0080522-Neckline-Peter%20Pan.jpg?v=21011909",
      },
      {
        id: "2",
        type: "top",
        name: "Shawl collar",
        img: "https://www.eshakti.com/styling%20images/Shawl%20collar.jpg",
        top:
          "https://www.eshakti.com/images/CL0080522/CL0080522-Neckline-Shawl%20collar.jpg?v=21011910",
      },
    ],
    bottom: [
      {
        id: "1",
        type: "bottom",
        name: "Foot Length Dress",
        img: "https://www.eshakti.com/styling%20images/Floor_Length_Dress.jpg",
        bottom:
          "https://www.eshakti.com/images/CL0080522/CL0080522-Length-Floor%20Length%20Dress.jpg?v=21011909",
      },
      {
        id: "2",
        type: "bottom",
        name: "Knee length",
        img: "https://www.eshakti.com/styling%20images/Knee%20length.jpg",
        bottom:
          "https://www.eshakti.com/images/CL0080522/CL0080522-Length-Knee%20length.jpg?v=21011909",
      },
    ],
    leftRight: [
      {
        id: "1",
        type: "leftRight",
        name: "Sleeveless",
        img: "https://www.eshakti.com/styling%20images/Sleeveless.jpg",
        left:
          "https://www.eshakti.com/images/CL0080522/CL0080522-SleeveType-Sleeveless_L.jpg?v=21011909",
        right:
          "https://www.eshakti.com/images/CL0080522/CL0080522-SleeveType-Sleeveless_R.jpg?v=21011909",
      },
      {
        id: "2",
        type: "leftRight",
        name: "Long Length",
        img: "https://www.eshakti.com/styling%20images/Long%20length.jpg",
        left:
          "https://www.eshakti.com/images/CL0080522/CL0080522-SleeveType-Long%20length_L.jpg?v=21011910",
        right:
          "https://www.eshakti.com/images/CL0080522/CL0080522-SleeveType-Long%20length_R.jpg?v=21011910",
      },
    ],
  });

  const [currentCustom, setCurrentCustom] = useState({
    top:
      "https://www.eshakti.com/images/CL0080522/CL0080522-Neckline-Mandarin Collar.jpg?v=21011909",
    bottom:
      "https://www.eshakti.com/images/CL0080522/CL0080522-Length-Knee length.jpg?v=21011909",
    right:
      "https://www.eshakti.com/images/CL0080522/CL0080522-SleeveType-Bracelet length_R.jpg?v=21011909",
    left:
      "https://www.eshakti.com/images/CL0080522/CL0080522-SleeveType-Bracelet length_L.jpg?v=21011909",
  });

  const changeImage = (data) => {
    let custom = currentCustom;
    console.log(currentCustom.top);
    if (data.type === "top") {
      custom.top = data.top;
      setCurrentCustom({ ...currentCustom, top: data.top });
    } else if (data.type === "bottom") {
      setCurrentCustom({ ...currentCustom, bottom: data.bottom });
    } else {
      setCurrentCustom({
        ...currentCustom,
        left: data.left,
        right: data.right,
      });
    }
  };

  const onCloseModal = () => {
    close();
  };

  const left = (e) => {
    sideScroll(
      e.target.parentElement.parentElement.lastChild,
      "left",
      25,
      55,
      10
    );
  };
  const right = (e) => {
    sideScroll(
      e.target.parentElement.parentElement.lastChild,
      "right",
      25,
      55,
      10
    );
  };

  const sideScroll = (element, direction, speed, distance, step) => {
    let scrollAmount = 0;
    var slideTimer = setInterval(function () {
      if (direction == "left") {
        element.scrollLeft -= step;
      } else {
        element.scrollLeft += step;
      }
      scrollAmount += step;
      if (scrollAmount >= distance) {
        window.clearInterval(slideTimer);
      }
    }, speed);
  };

  return (
    <div>
      <Modal
        classNames={{
          modal: "customization-modal p-0",
        }}
        open={open}
        onClose={onCloseModal}
        center
      >
        <div className="main-customization-wrapper">
          <div className="product-customization-container">
            <ImagesCustomization
              currentCustom={currentCustom}
            ></ImagesCustomization>
            <div className="details-wrapper">
              <h5 className="product-title">
                Customize your style with eShakti FX
              </h5>
              <p className="text-lead">
                Click on any box and see the style change!
              </p>

              <div className="attribute-wrapper">
                <div className="attribute-header">NECKLINE</div>
                <div className="attribute-container">
                  <div className="default-attribute">
                    <div className="text-lead">As Shown</div>
                    <div className="default-image">
                      <div className="text-lead">Default</div>
                    </div>
                  </div>
                  <div className="customize-slider-container">
                    <div className="text-lead">Click to change Neckline</div>
                    <div className="images-slider">
                      {imageCustom.top.map((image, key) => (
                        <div
                          key={key}
                          className="image"
                          onClick={changeImage.bind(this, image)}
                        >
                          <img src={image.img} alt="" />
                          <p className="text-lead">{image.name}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="attribute-wrapper">
                <div className="attribute-header">SLEEVE TYPE</div>
                <div className="attribute-container">
                  <div className="default-attribute">
                    <div className="text-lead">As Shown</div>
                    <div className="default-image">
                      <div className="text-lead">Default</div>
                    </div>
                  </div>
                  <div className="customize-slider-container">
                    <div className="text-lead">Click to change Sleeve Type</div>
                    <div className="left-button" onClick={left}>
                      <BsChevronLeft />
                    </div>
                    <div className="right-button" onClick={right}>
                      <BsChevronRight />
                    </div>
                    <div className="images-slider">
                      {imageCustom.leftRight.map((image, key) => (
                        <div
                          key={key}
                          className="image"
                          onClick={changeImage.bind(this, image)}
                        >
                          <img src={image.img} alt="" />
                          <p className="text-lead">{image.name}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="attribute-wrapper">
                <div className="attribute-header">LENGTH</div>
                <div className="attribute-container">
                  <div className="default-attribute">
                    <div className="text-lead">As Shown</div>
                    <div className="default-image">
                      <div className="text-lead">Default</div>
                    </div>
                  </div>
                  <div className="customize-slider-container">
                    <div className="text-lead">Click to change Sleeve Type</div>
                    <div className="left-button" onClick={left}>
                      <BsChevronLeft />
                    </div>
                    <div className="right-button" onClick={right}>
                      <BsChevronRight />
                    </div>
                    <div className="images-slider">
                      {imageCustom.bottom.map((image, key) => (
                        <div
                          key={key}
                          className="image"
                          onClick={changeImage.bind(this, image)}
                        >
                          <img src={image.img} alt="" />
                          <p className="text-lead">{image.name}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="other-option-wrapper">
                <div className="other-option-header">OTHER OPTIONS (FREE)</div>
                <div className="checkbox-group">
                  <input type="checkbox" />
                  <label htmlFor="">Remove Pocket</label>
                </div>
                <div className="checkbox-group">
                  <input type="checkbox" />
                  <label htmlFor="">Remove Embroidery / Embellishment</label>
                </div>
                <div className="checkbox-group">
                  <input type="checkbox" />
                  <label htmlFor="">Add Side Zip</label>
                </div>
              </div>
            </div>
          </div>
          <div className="customization-footer">
            <div className="left-footer">
              <p className="text-lead">
                Selected style options - Jewel, Elbow length, Above knee length
              </p>
              <div className="share">
                <AiOutlineShareAlt /> <span> Share</span>
              </div>
            </div>
            <div className="right-footer">
              <div className="btn save-style">Save Style</div>
              <div className="btn process-style">Select style & proceed</div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
