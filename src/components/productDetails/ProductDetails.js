import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductById } from "../../store/home/homeAction";
import "./productDetails.scss";
import {
  AiOutlineStar,
  AiOutlineHeart,
  AiOutlineMail,
  AiOutlineSync,
} from "react-icons/ai";
import ProductTabList from "../productTabList/ProductTabList";
import ProductCustomization from "../productCustomization/ProductCustomization";

// react router
import { useParams } from "react-router-dom";

export default function ProductDetails() {
  const dispatch = useDispatch();
  const productDetail = useSelector((state) => state.home.productDetail);
  const variant = productDetail && productDetail.variant_products[0].variants;

  const [isCustomizationOpen, setIsCustomization] = useState(false);
  const [currentVariant, setCurrentVariant] = useState(variant);
  const [selectedSize, setSelectSize] = useState(
    currentVariant &&
      currentVariant.product_size &&
      currentVariant.product_size[0]
  );
  const { id } = useParams();

  useEffect(() => {
    setCurrentVariant(variant);
    setSelectSize(variant && variant.product_size && variant.product_size[0]);
  }, [productDetail]);

  useEffect(() => {
    dispatch(getProductById(id));
  }, []);

  const openCustomization = () => {
    setIsCustomization(true);
  };
  const closeCustomization = () => {
    setIsCustomization(false);
  };

  const changeVarient = (variant) => {
    setCurrentVariant(variant);
  };

  const selectSize = (size) => {
    setSelectSize(size);
  };
  return (
    <div>
      <div className="product-details-container">
        <div className="img-wrapper">
          <img
            src={currentVariant ? currentVariant.gallary_image[0] : null}
            alt=""
          />
          <div className="thumb-wrapper">
            {currentVariant &&
              currentVariant.gallary_image.map((image) => (
                <div className="thumb">
                  <img src={image} alt="" />
                </div>
              ))}
          </div>
        </div>
        <div className="details-wrapper">
          <p className="text-muted">{productDetail && productDetail.brand}</p>
          <h5 className="product-title">
            {productDetail && productDetail.product_name}
          </h5>

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
              {/* <span className="review-text">2 Review</span> */}
            </div>
            <div className="stock-text">
              {productDetail && productDetail.stock}
            </div>
            {/* <div className="color-text">STYLE # COL00043454</div> */}
          </div>
          <div className="product-price">
            <p>${productDetail && productDetail.total_price.toFixed(2)}</p>
          </div>
          <div className="text-muted">Tax Included</div>

          <div className="attributes-wrapper">
            <div onClick={openCustomization} className="attribute-item">
              <div className="attribute-box">NECKLINE</div>
              <p>Change Style</p>
            </div>
            <div onClick={openCustomization} className="attribute-item">
              <div className="attribute-box">Sleeve type</div>
              <p>Change Style</p>
            </div>
            <div onClick={openCustomization} className="attribute-item">
              <div className="attribute-box">length</div>
              <p>Change Style</p>
            </div>
            <div onClick={openCustomization} className="attribute-item">
              <div className="attribute-box">customize style</div>
              <p>Change Style</p>
            </div>
          </div>

          <div className="alert-danger">
            Hurry, Only {productDetail && productDetail.quantity} left
          </div>

          <div className="color-attribute">
            COLOR : <b>{currentVariant && currentVariant.color_name}</b>
          </div>

          <div className="color-palette-wrapper">
            {productDetail &&
              productDetail.variant_products.map((varient) => (
                <div
                  onClick={changeVarient.bind(this, varient.variants)}
                  className="color"
                  style={{
                    backgroundColor: varient.variants.color_code,
                  }}
                ></div>
              ))}

            {/* <div className="color black"></div>
            <div className="color pink"></div> */}
          </div>

          <div className="color-attribute">
            SIZE : <b>{selectedSize}</b>
          </div>

          <div className="size-attribute">
            {currentVariant &&
              currentVariant.product_size &&
              currentVariant.product_size.map((size) => (
                <div className="size" onClick={selectSize.bind(this, size)}>
                  {size}
                </div>
              ))}
          </div>

          <div className="height-attribute">
            <select name="" id="" className="size">
              <option value="">Height</option>
              {currentVariant &&
                currentVariant.height &&
                currentVariant.height.map((height) => (
                  <option value="">{height}</option>
                ))}
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

          {/* <div className="details-thumb">
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
          </div> */}
        </div>
      </div>
      <ProductTabList></ProductTabList>
      <ProductCustomization
        open={isCustomizationOpen}
        close={closeCustomization}
        currentVariant={currentVariant}
      ></ProductCustomization>
    </div>
  );
}
