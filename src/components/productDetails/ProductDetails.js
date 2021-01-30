import React, { useState, useEffect } from "react";
import "./productDetails.scss";
import {
  AiOutlineStar,
  AiOutlineHeart,
  AiOutlineMail,
  AiOutlineSync,
} from "react-icons/ai";
import ProductTabList from "../productTabList/ProductTabList";
import ProductCustomization from "../productCustomization/ProductCustomization";

export default function ProductDetails() {
  const [isCustomizationOpen, setIsCustomization] = useState(false);

  useEffect(() => {
    openCustomization();
  }, []);

  const openCustomization = () => {
    setIsCustomization(true);
  };
  const closeCustomization = () => {
    setIsCustomization(false);
  };
  return (
    <div>
      <div className="product-details-container">
        <div className="img-wrapper">
          <img
            src="https://img1.eshakti.com/clothimages/CL0064234MP.jpg"
            alt=""
          />
          <div className="thumb-wrapper">
            <div className="thumb">
              <img
                src="https://img1.eshakti.com/clothimages/CL0064234MP.jpg"
                alt=""
              />
            </div>
            <div className="thumb">
              <img
                src="https://img1.eshakti.com/clothimages/CL0064234MP.jpg"
                alt=""
              />
            </div>
            <div className="thumb">
              <img
                src="https://img1.eshakti.com/clothimages/CL0064234MP.jpg"
                alt=""
              />
            </div>
            <div className="thumb">
              <img
                src="https://img1.eshakti.com/clothimages/CL0064234MP.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="details-wrapper">
          <p className="text-muted">eShakti</p>
          <h5 className="product-title">Bird Embellished Poplin Dress</h5>

          <div className="product-details">
            <div className="product-review">
              <span className="rating">
                <span className="each_star">
                  <AiOutlineStar />
                </span>
                <span className="each_star">
                  <AiOutlineStar />
                </span>
                <span className="each_star">
                  <AiOutlineStar />
                </span>
                <span className="each_star">
                  <AiOutlineStar />
                </span>
                <span className="each_star">
                  <AiOutlineStar />
                </span>
              </span>
              <span className="review-text">2 Review</span>
            </div>
            <div className="stock-text">In Stock</div>
            <div className="color-text">STYLE # COL00043454</div>
          </div>
          <div className="product-price">
            <p>$29,00</p>
          </div>
          <div className="text-muted">Tax Included</div>

          <div className="attributes-wrapper">
            <div className="attribute-item">
              <div className="attribute-box">NECKLINE</div>
              <p>Change Style</p>
            </div>
            <div className="attribute-item">
              <div className="attribute-box">Sleeve type</div>
              <p>Change Style</p>
            </div>
            <div className="attribute-item">
              <div className="attribute-box">length</div>
              <p>Change Style</p>
            </div>
            <div className="attribute-item">
              <div className="attribute-box">customize style</div>
              <p>Change Style</p>
            </div>
          </div>

          <div className="alert-danger">Hurry, Only 8 left</div>

          <div className="color-attribute">
            COLOR : <b>GREEN</b>
          </div>

          <div className="color-palette-wrapper">
            <div className="color green"></div>
            <div className="color black"></div>
            <div className="color pink"></div>
          </div>

          <div className="color-attribute">
            SIZE : <b>M</b>
          </div>

          <div className="size-attribute">
            <div className="size">S</div>
            <div className="size">M</div>
          </div>

          <div className="height-attribute">
            <select name="" id="" className="size">
              <option value="">height</option>
            </select>
          </div>

          <div className="fav-inquiry-wrapper">
            <div className="icon">
              <AiOutlineHeart></AiOutlineHeart>
              <p> Add to Wishlist</p>
            </div>
            <div className="icon">
              <AiOutlineSync></AiOutlineSync>
              <p> Delivery & Returns</p>
            </div>
            <div className="icon">
              <AiOutlineMail></AiOutlineMail> <p>Enquiry</p>
            </div>
          </div>
          <div className="quantity-addtocart">
            <div className="quantity-wrapper">
              <div className="minus">-</div>
              <div className="quantity">1</div>
              <div className="plus">+</div>
            </div>
            <div className="add-cart-btn">ADD TO CART</div>
          </div>

          <div className="details-thumb">
            <h5> Matching Masks</h5>
            <div className="thumb-wrapper">
              <div className="thumb">
                <img
                  src="https://img1.eshakti.com/clothimages/CL0064234MP.jpg"
                  alt=""
                />
              </div>
              <div className="thumb">
                <img
                  src="https://img1.eshakti.com/clothimages/CL0064234MP.jpg"
                  alt=""
                />
              </div>
              <div className="thumb">
                <img
                  src="https://img1.eshakti.com/clothimages/CL0064234MP.jpg"
                  alt=""
                />
              </div>
              <div className="thumb">
                <img
                  src="https://img1.eshakti.com/clothimages/CL0064234MP.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <ProductTabList></ProductTabList>
      <ProductCustomization
        open={isCustomizationOpen}
        close={closeCustomization}
      ></ProductCustomization>
    </div>
  );
}
