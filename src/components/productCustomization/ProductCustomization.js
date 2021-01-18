import React from "react";
import "react-responsive-modal/styles.css";
import "./productCustomization.scss";
import { Modal } from "react-responsive-modal";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { AiOutlineShareAlt } from "react-icons/ai";

export default function ProductCustomization({ open, close }) {
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
            <div className="img-wrapper">
              <img
                src="https://img1.eshakti.com/clothimages/CL0064234MP.jpg"
                alt=""
              />
            </div>
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
                      <div className="image">
                        <img
                          src="https://www.eshakti.com/styling%20images/Jewel.jpg"
                          alt=""
                        />
                        <p className="text-lead">Jewel</p>
                      </div>
                      <div className="image">
                        <img
                          src="https://www.eshakti.com/styling%20images/Scoop.jpg"
                          alt=""
                        />
                        <p className="text-lead">Scoop</p>
                      </div>
                      <div className="image">
                        <img
                          src="https://www.eshakti.com/styling%20images/Wide%20Scoop.jpg"
                          alt=""
                        />
                        <p className="text-lead">Wide Scoop</p>
                      </div>
                      <div className="image">
                        <img
                          src="https://www.eshakti.com/styling%20images/Boat.jpg"
                          alt=""
                        />
                        <p className="text-lead">Wide Scoop</p>
                      </div>
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
                      <div className="image">
                        <img
                          src="https://www.eshakti.com/styling%20images/Sleeveless.jpg"
                          alt=""
                        />
                        <p className="text-lead">Sleeveless</p>
                      </div>
                      <div className="image">
                        <img
                          src="https://www.eshakti.com/styling%20images/Inset%20cap.jpg"
                          alt=""
                        />
                        <p className="text-lead">Inset cap</p>
                      </div>
                      <div className="image">
                        <img
                          src="https://www.eshakti.com/styling%20images/Capsleeve.jpg"
                          alt=""
                        />
                        <p className="text-lead">Capsleeve</p>
                      </div>
                      <div className="image">
                        <img
                          src="https://www.eshakti.com/styling%20images/Short%20length.jpg"
                          alt=""
                        />
                        <p className="text-lead">Short length</p>
                      </div>
                      <div className="image">
                        <img
                          src="https://www.eshakti.com/styling%20images/Elbow%20length.jpg"
                          alt=""
                        />
                        <p className="text-lead">Elbow length</p>
                      </div>
                      <div className="image">
                        <img
                          src="https://www.eshakti.com/styling%20images/Elbow%20length.jpg"
                          alt=""
                        />
                        <p className="text-lead">Elbow length</p>
                      </div>
                      <div className="image">
                        <img
                          src="https://www.eshakti.com/styling%20images/Elbow%20length.jpg"
                          alt=""
                        />
                        <p className="text-lead">Elbow length</p>
                      </div>
                      <div className="image">
                        <img
                          src="https://www.eshakti.com/styling%20images/Elbow%20length.jpg"
                          alt=""
                        />
                        <p className="text-lead">Elbow length</p>
                      </div>
                      <div className="image">
                        <img
                          src="https://www.eshakti.com/styling%20images/Elbow%20length.jpg"
                          alt=""
                        />
                        <p className="text-lead">Elbow length</p>
                      </div>
                      <div className="image">
                        <img
                          src="https://www.eshakti.com/styling%20images/Elbow%20length.jpg"
                          alt=""
                        />
                        <p className="text-lead">Elbow length</p>
                      </div>
                      <div className="image">
                        <img
                          src="https://www.eshakti.com/styling%20images/Elbow%20length.jpg"
                          alt=""
                        />
                        <p className="text-lead">Elbow length</p>
                      </div>
                      <div className="image">
                        <img
                          src="https://www.eshakti.com/styling%20images/Elbow%20length.jpg"
                          alt=""
                        />
                        <p className="text-lead">Elbow length</p>
                      </div>
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
                      <div className="image">
                        <img
                          src="https://www.eshakti.com/styling%20images/Floor_Length_Dress.jpg"
                          alt=""
                        />
                        <p className="text-lead">Floor Length Dress</p>
                      </div>
                      <div className="image">
                        <img
                          src="https://www.eshakti.com/styling%20images/4-inches-above-ankle-length.jpg"
                          alt=""
                        />
                        <p className="text-lead">4 inches above ankle length</p>
                      </div>
                      <div className="image">
                        <img
                          src="https://www.eshakti.com/styling%20images/2-inches-above-ankle-length.jpg"
                          alt=""
                        />
                        <p className="text-lead">2 inches above ankle length</p>
                      </div>
                      <div className="image">
                        <img
                          src="https://www.eshakti.com/styling%20images/Mini.jpg"
                          alt=""
                        />
                        <p className="text-lead">Short length</p>
                      </div>
                      <div className="image">
                        <img
                          src="https://www.eshakti.com/styling%20images/Above%20knee%20length.jpg"
                          alt=""
                        />
                        <p className="text-lead">Above knee length</p>
                      </div>
                      <div className="image">
                        <img
                          src="https://www.eshakti.com/styling%20images/Knee%20length.jpg"
                          alt=""
                        />
                        <p className="text-lead">Elbow length</p>
                      </div>
                      <div className="image">
                        <img
                          src="https://www.eshakti.com/styling%20images/Below%20knee%20length.jpg"
                          alt=""
                        />
                        <p className="text-lead">Elbow length</p>
                      </div>
                      <div className="image">
                        <img
                          src="https://www.eshakti.com/styling%20images/Elbow%20length.jpg"
                          alt=""
                        />
                        <p className="text-lead">Elbow length</p>
                      </div>
                      <div className="image">
                        <img
                          src="https://www.eshakti.com/styling%20images/Elbow%20length.jpg"
                          alt=""
                        />
                        <p className="text-lead">Elbow length</p>
                      </div>
                      <div className="image">
                        <img
                          src="https://www.eshakti.com/styling%20images/Elbow%20length.jpg"
                          alt=""
                        />
                        <p className="text-lead">Elbow length</p>
                      </div>
                      <div className="image">
                        <img
                          src="https://www.eshakti.com/styling%20images/Elbow%20length.jpg"
                          alt=""
                        />
                        <p className="text-lead">Elbow length</p>
                      </div>
                      <div className="image">
                        <img
                          src="https://www.eshakti.com/styling%20images/Elbow%20length.jpg"
                          alt=""
                        />
                        <p className="text-lead">Elbow length</p>
                      </div>
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
