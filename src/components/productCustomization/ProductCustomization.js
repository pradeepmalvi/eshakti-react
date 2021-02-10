import React, { useState, useEffect } from "react";
import "react-responsive-modal/styles.css";
import "./productCustomization.scss";
import { Modal } from "react-responsive-modal";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { AiOutlineShareAlt } from "react-icons/ai";
import ImagesCustomization from "./ImagesCustomization";
import mergeImages from "merge-images";

export default function ProductCustomization({
  open,
  close,
  currentVariant,
  saveFinalCustomisation,
  saveFinalImage,
}) {
  const [style, setStyle] = useState({});

  useEffect(() => {
    currentVariant && getImgSize();

    setTimeout(() => {
      currentVariant && getImgSize();
      saveFinalCustomisation(currentCustom);
      currentVariant &&
        setCurrentCustom({
          neck_style: currentVariant ? currentVariant.default_design[0] : null,
          sleeve_style: currentVariant
            ? currentVariant.default_design[1]
            : null,
          bottom_style: currentVariant
            ? currentVariant.default_design[2]
            : null,
        });
    }, 500);
  }, [open]);

  const [currentCustom, setCurrentCustom] = useState();

  const changeImage = (data) => {
    getImgSize();
    if (data.type === "neck_style") {
      setCurrentCustom({ ...currentCustom, neck_style: data });
    } else if (data.type === "bottom_style") {
      setCurrentCustom({ ...currentCustom, bottom_style: data });
    } else {
      setCurrentCustom({
        ...currentCustom,
        sleeve_style: data,
      });
    }
  };

  const getImgSize = () => {
    var style = {};

    var neck_design = new Image();
    neck_design.src = currentVariant.neck_style[0].neck_design;

    style.topWidth = neck_design.width;
    style.topHeight = neck_design.height;

    var lhand_design = new Image();
    lhand_design.src = currentVariant.sleeve_style[0].lhand_design;
    style.leftWidth = lhand_design.width;

    var rhand_design = new Image();
    rhand_design.src = currentVariant.sleeve_style[0].rhand_design;
    style.rightWidth = rhand_design.width;

    var bottom_design = new Image();
    bottom_design.src = currentVariant.bottom_style[0].bottom_design;
    style.bottomWidth = bottom_design.width;
    style.bottomHeight = bottom_design.height;

    setStyle(style);
    return style;
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

  const onSave = () => {
    saveFinalCustomisation(currentCustom);
    compressImage();
    onCloseModal();
  };

  const compressImage = () => {
    mergeImages(
      [
        {
          src:
            currentCustom &&
            currentCustom.neck_style &&
            currentCustom.neck_style.neck_design,
          x: style.leftWidth,
          y: 0,
        },
        {
          src:
            currentCustom &&
            currentCustom.sleeve_style &&
            currentCustom.sleeve_style.lhand_design,
          x: 0,
          y: 0,
        },
        {
          src:
            currentCustom &&
            currentCustom.sleeve_style &&
            currentCustom.sleeve_style.rhand_design,
          x: style.leftWidth + style.topWidth,
          y: 0,
        },
        {
          src:
            currentCustom &&
            currentCustom.bottom_style &&
            currentCustom.bottom_style.bottom_design,
          x: 0,
          y: style.topHeight,
        },
      ],
      {
        width: style.leftWidth + style.topWidth + style.rightWidth,
        height: style.topHeight + style.bottomHeight,
        crossOrigin: true,
      }
    ).then((b64) => {
      console.log(b64);
      saveFinalImage(b64);
    });
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
              style={style}
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
                    {currentVariant &&
                    currentVariant.default_design &&
                    currentVariant.default_design.length > 0 &&
                    currentCustom &&
                    currentCustom.neck_style &&
                    currentCustom.neck_style.id ===
                      currentVariant.default_design[0].id ? (
                      <div className="default-image selected-image">
                        <div className="text-lead">Default</div>
                      </div>
                    ) : (
                      <div
                        className="default-image"
                        onClick={changeImage.bind(
                          this,
                          currentVariant && currentVariant.default_design[0]
                        )}
                      >
                        <div className="text-lead">Default</div>
                      </div>
                    )}
                    <p className="text-lead">
                      {currentVariant &&
                        currentVariant.default_design[0].design_name}
                    </p>
                  </div>
                  <div className="customize-slider-container">
                    <div className="text-lead">Click to change Neckline</div>
                    <div className="images-slider">
                      {currentVariant &&
                        currentVariant.neck_style.map(
                          (image, key) =>
                            image.id !== "0" && (
                              <div
                                key={key}
                                className="image"
                                onClick={changeImage.bind(this, image)}
                              >
                                {currentCustom &&
                                currentCustom.neck_style &&
                                currentCustom.neck_style.id === image.id ? (
                                  <img
                                    className="selected-image"
                                    src={image.design_icon}
                                    alt=""
                                  />
                                ) : (
                                  <img src={image.design_icon} alt="" />
                                )}
                                <p className="text-lead">{image.design_name}</p>
                              </div>
                            )
                        )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="attribute-wrapper">
                <div className="attribute-header">SLEEVE TYPE</div>
                <div className="attribute-container">
                  <div className="default-attribute">
                    <div className="text-lead">As Shown</div>
                    {currentVariant &&
                    currentVariant.default_design &&
                    currentVariant.default_design.length > 0 &&
                    currentCustom &&
                    currentCustom.sleeve_style &&
                    currentCustom.sleeve_style.id ==
                      currentVariant.default_design[1].id ? (
                      <div className="default-image selected-image">
                        <div className="text-lead">Default</div>
                      </div>
                    ) : (
                      <div
                        className="default-image"
                        onClick={changeImage.bind(
                          this,
                          currentVariant && currentVariant.default_design[1]
                        )}
                      >
                        <div className="text-lead">Default</div>
                      </div>
                    )}
                    <p className="text-lead">
                      {currentVariant &&
                        currentVariant.default_design[1].design_name}
                    </p>
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
                      {currentVariant &&
                        currentVariant.sleeve_style.map(
                          (image, key) =>
                            image.id !== "0" && (
                              <div
                                key={key}
                                className="image"
                                onClick={changeImage.bind(this, image)}
                              >
                                {currentCustom &&
                                currentCustom.sleeve_style &&
                                currentCustom.sleeve_style.id === image.id ? (
                                  <img
                                    className="selected-image"
                                    src={image.design_icon}
                                    alt=""
                                  />
                                ) : (
                                  <img src={image.design_icon} alt="" />
                                )}

                                <p className="text-lead">{image.design_name}</p>
                              </div>
                            )
                        )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="attribute-wrapper">
                <div className="attribute-header">LENGTH</div>
                <div className="attribute-container">
                  <div className="default-attribute">
                    <div className="text-lead">As Shown</div>
                    {currentVariant &&
                    currentVariant.default_design &&
                    currentVariant.default_design.length > 0 &&
                    currentCustom &&
                    currentCustom.bottom_style &&
                    currentCustom.bottom_style.id ==
                      currentVariant.default_design[2].id ? (
                      <div className="default-image selected-image">
                        <div className="text-lead">Default</div>
                      </div>
                    ) : (
                      <div
                        className="default-image"
                        onClick={changeImage.bind(
                          this,
                          currentVariant && currentVariant.default_design[2]
                        )}
                      >
                        <div className="text-lead">Default</div>
                      </div>
                    )}
                    <p className="text-lead">
                      {currentVariant &&
                        currentVariant.default_design[2].design_name}
                    </p>
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
                      {currentVariant &&
                        currentVariant.bottom_style.map(
                          (image, key) =>
                            image.id !== "0" && (
                              <div
                                key={key}
                                className="image"
                                onClick={changeImage.bind(this, image)}
                              >
                                {currentCustom &&
                                currentCustom.bottom_style &&
                                currentCustom.bottom_style.id === image.id ? (
                                  <img
                                    className="selected-image"
                                    src={image.design_icon}
                                    alt=""
                                  />
                                ) : (
                                  <img src={image.design_icon} alt="" />
                                )}
                                <p className="text-lead">{image.design_name}</p>
                              </div>
                            )
                        )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="other-option-wrapper">
                <div className="other-option-header">OTHER OPTIONS (FREE)</div>
                <div className="checkbox-group">
                  <label>
                    <input type="checkbox" value="" />
                    Remove Pocket
                  </label>
                </div>
                <div className="checkbox-group">
                  <label>
                    <input type="checkbox" value="" />
                    Remove Embroidery / Embellishment
                  </label>
                </div>
                <div className="checkbox-group">
                  <label>
                    <input type="checkbox" value="" />
                    Add Side Zip
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="customization-footer">
            <div className="left-footer">
              <p className="text-lead">
                Selected style options -{" "}
                {currentCustom &&
                  currentCustom.neck_style &&
                  currentCustom.neck_style.design_name}
                ,{" "}
                {currentCustom &&
                  currentCustom.sleeve_style &&
                  currentCustom.sleeve_style.design_name}
                ,{" "}
                {currentCustom &&
                  currentCustom.bottom_style &&
                  currentCustom.bottom_style.design_name}
              </p>
              <div className="share">
                <AiOutlineShareAlt /> <span> Share</span>
              </div>
            </div>
            <div className="right-footer">
              <div className="btn save-style">Save Style</div>
              <div className="btn process-style" onClick={onSave}>
                Select style & proceed
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
