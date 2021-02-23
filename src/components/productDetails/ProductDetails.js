import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductById,
  addToCart,
  addToWishlist,
} from "../../store/home/homeAction";
import "./productDetails.scss";
import { AiOutlineStar, AiOutlineHeart, AiFillStar } from "react-icons/ai";

import ProductTabList from "../productTabList/ProductTabList";
import ProductCustomization from "../productCustomization/ProductCustomization";
import FeedbackForm from "../feedback-form/FeedbackForm.component";

// react router
import { useParams } from "react-router-dom";

// toastify
import { ToastContainer, toast } from "react-toastify";

import Login from "../login/Login.component";
import SignUp from "../signup/SignUp";

export default function ProductDetails() {
  const dispatch = useDispatch();
  const [openLogin, setOpenLogin] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);
  const [openFeedback, setOpenFeedback] = useState(false);

  const productDetail = useSelector((state) => state.home.productDetail);
  const tempWishlistStatus = useSelector(
    (state) => state.home.localTempWishlistItem
  );

  const variant =
    productDetail &&
    productDetail.variant_products &&
    productDetail.variant_products[0].variants;

  const [isCustomizationOpen, setIsCustomization] = useState(false);
  const [currentVariant, setCurrentVariant] = useState(variant);
  const [size, setSize] = useState(
    currentVariant &&
      currentVariant.product_size &&
      currentVariant.product_size[0]
  );
  const { id } = useParams();
  const [currentImage, setCurrentImage] = useState("");
  const [currentCustom, setCurrentCustom] = useState({});
  const [customizedImage, setCustomizedImage] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [height, setHeight] = useState("");
  const [color_id, setColorId] = useState("");

  useEffect(() => {
    setCurrentVariant(variant);
    setSize(variant && variant.product_size && variant.product_size[0]);
    setHeight(variant && variant.height && variant.height[0]);
    setColorId(variant && variant.id);
    setTimeout(() => {
      setCurrentCustom({
        neck_style: currentVariant ? currentVariant.default_design[0] : null,
        sleeve_style: currentVariant ? currentVariant.default_design[1] : null,
        bottom_style: currentVariant ? currentVariant.default_design[2] : null,
      });
    }, 200);
  }, [productDetail]);

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getProductById(id));
  }, []);

  // for login model
  const onOpenLoginModal = () => setOpenLogin(true);
  const onCloseLoginModal = () => setOpenLogin(false);

  // for registration modal
  const onOpenRegisterModal = () => setOpenRegister(true);
  const onCloseRegisterModal = () => setOpenRegister(false);

  // for feedback modal
  const onOpenFeedbackForm = () => setOpenFeedback(true);
  const onCloseFeedbackForm = () => setOpenFeedback(false);

  // for cutomisation model
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
    setSize(size);
  };
  const saveFinalCustomisation = (currentCustom) => {
    setCurrentCustom(currentCustom);
  };
  const saveFinalImage = (image) => {
    setCustomizedImage(image);
  };
  const updateQuantity = (type) => {
    if (type === "add") {
      setQuantity(quantity + 1);
    } else {
      if (quantity > 1) {
        setQuantity(quantity - 1);
      }
    }
  };

  // adding product to cart
  const onAddToCart = () => {
    if (!localStorage.getItem("es_user_id")) {
      toast("Please Login!", {
        type: toast.TYPE.ERROR,
        autoClose: 5000,
      });

      onOpenLoginModal();
    }

    var data = {
      user_id: localStorage.getItem("es_user_id"),
      product_id: productDetail.id,
      sku_id: productDetail.sku_id,
      quantity: quantity,
      color_id: color_id,
      height: height,
      sleeve_id: currentCustom.sleeve_style.id
        ? currentCustom.sleeve_style.id
        : currentVariant.default_design[0].id,
      bottom_id: currentCustom.bottom_style.id
        ? currentCustom.bottom_style.id
        : currentVariant.default_design[1].id,
      neck_id: currentCustom.neck_style.id
        ? currentCustom.neck_style.id
        : currentVariant.default_design[2].id,
      size_type: "standard",
      size: size,
      optional_style: {
        "Embroidery Option": "Remove Embroidery / Embellishment",
        "Pocket Option": "Remove Pocket",
        "Zip Option": "Add Side Zip",
      },
      customized_image: customizedImage,
    };
    dispatch(addToCart(data));
  };
  return (
    <div>
      <ToastContainer></ToastContainer>
      <Login
        open={openLogin}
        openRegister={onOpenRegisterModal}
        onCloseModal={onCloseLoginModal}
      />

      <SignUp open={openRegister} onCloseModal={onCloseRegisterModal} />
      <FeedbackForm open={openFeedback} onCloseModal={onCloseFeedbackForm} />

      <div className="product-details-container">
        <div className="img-wrapper">
          <img
            src={
              customizedImage
                ? customizedImage
                : currentImage
                ? currentImage
                : currentVariant && currentVariant.gallary_image[0]
            }
            alt=""
          />
          <div className="thumb-wrapper">
            {currentVariant &&
              currentVariant.gallary_image.map((image, key) =>
                key < 4 ? (
                  <div className="thumb">
                    <img
                      src={image}
                      alt=""
                      onClick={() => setCurrentImage(image)}
                    />
                  </div>
                ) : null
              )}
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
                  <AiFillStar />
                </span>
                <span className="each_star">
                  <AiFillStar />
                </span>
                <span className="each_star">
                  <AiFillStar />
                </span>
                <span className="each_star">
                  <AiFillStar />
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
            <div className="color-text">
              STYLE # {productDetail && productDetail.sku_id}
            </div>
          </div>
          <div className="product-price">
            <p>
              $
              {productDetail &&
                productDetail.total_price &&
                productDetail.total_price.toFixed(2)}
            </p>
          </div>
          <div className="text-muted">Tax Included</div>

          <div className="attributes-wrapper">
            <div onClick={openCustomization} className="attribute-item">
              <div className="attribute-box">
                <img
                  className="icon"
                  src={
                    currentCustom &&
                    currentCustom.neck_style &&
                    currentCustom.neck_style.design_icon
                  }
                  alt=""
                />
                {currentCustom && currentCustom.neck_style
                  ? currentCustom.neck_style.design_name
                  : "Neckline"}
              </div>
              <p>Change Style</p>
            </div>
            <div onClick={openCustomization} className="attribute-item">
              <div className="attribute-box">
                <img
                  className="icon"
                  src={
                    currentCustom &&
                    currentCustom.sleeve_style &&
                    currentCustom.sleeve_style.design_icon
                  }
                  alt=""
                />
                {currentCustom && currentCustom.sleeve_style
                  ? currentCustom.sleeve_style.design_name
                  : "Sleeve type"}
              </div>
              <p>Change Style</p>
            </div>
            <div onClick={openCustomization} className="attribute-item">
              <div className="attribute-box">
                <img
                  className="icon"
                  src={
                    currentCustom &&
                    currentCustom.bottom_style &&
                    currentCustom.bottom_style.design_icon
                  }
                  alt=""
                />
                {currentCustom && currentCustom.bottom_style
                  ? currentCustom.bottom_style.design_name
                  : "length"}
              </div>
              <p>Change Style</p>
            </div>
            {/* <div onClick={openCustomization} className="attribute-item">
              <div className="attribute-box">customize style</div>
              <p>Change Style</p>
            </div> */}
          </div>

          <div className="alert-danger">
            Hurry, Only {productDetail && productDetail.quantity} left
          </div>

          <div className="color-attribute">
            COLOR : <b>{currentVariant && currentVariant.color_name}</b>
          </div>

          <div className="color-palette-wrapper">
            {productDetail &&
              productDetail.variant_products &&
              productDetail.variant_products.map((varient, index) => (
                <div
                  key={index}
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
            SIZE : <b>{size}</b>
          </div>

          <div className="size-attribute">
            {currentVariant &&
              currentVariant.product_size &&
              currentVariant.product_size.map((sizes, index) =>
                sizes === size ? (
                  <div
                    key={index}
                    className="size selected"
                    onClick={selectSize.bind(this, sizes)}
                  >
                    {sizes}
                  </div>
                ) : (
                  <div className="size" onClick={selectSize.bind(this, sizes)}>
                    {sizes}
                  </div>
                )
              )}

            <div className="size-chart-btn" onClick={() => ""}>
              Size Chart
            </div>
          </div>

          <div className="height-attribute">
            <div className="height">
              <span className="text">
                Height: {<b>{height}</b> || <b>choose height</b>}
              </span>
            </div>

            <select
              name="height"
              value={height}
              className="size"
              onChange={(e) => setHeight(e.target.value)}
            >
              <option value="">Height</option>
              {currentVariant &&
                currentVariant.height &&
                currentVariant.height.map((height) => (
                  <option value={height}>{height}</option>
                ))}
            </select>
          </div>

          <div className="purchasing-actions-wrapper">
            {tempWishlistStatus ? (
              <div className="icon">Added to wishlist</div>
            ) : (
              <div
                className="icon"
                onClick={() => {
                  if (localStorage.getItem("es_login")) {
                    dispatch(
                      addToWishlist({
                        user_id: localStorage.getItem("es_user_id"),
                        product_id: productDetail.id,
                      })
                    );
                  } else {
                    toast.dark("Please Login first");
                  }
                }}
              >
                <AiOutlineHeart></AiOutlineHeart>
                <p>Add to Wishlist</p>
              </div>
            )}

            <div className="quantity-addtocart">
              <div className="quantity-wrapper">
                <div
                  className="minus"
                  onClick={updateQuantity.bind(this, "less")}
                >
                  -
                </div>
                <div className="quantity">{quantity}</div>
                <div
                  className="plus"
                  onClick={updateQuantity.bind(this, "add")}
                >
                  +
                </div>
              </div>
              <div className="add-cart-btn" onClick={onAddToCart}>
                ADD TO CART
              </div>
            </div>
          </div>
          <div
            className="feedback-popup-trigger"
            onClick={() => onOpenFeedbackForm()}
          >
            Feedback
          </div>
        </div>
      </div>
      <ProductTabList
        productDetail={productDetail && productDetail.long_descript}
        feature_description={productDetail && productDetail.feature_description}
      ></ProductTabList>
      <ProductCustomization
        open={isCustomizationOpen}
        close={closeCustomization}
        currentVariant={currentVariant}
        saveFinalCustomisation={saveFinalCustomisation}
        saveFinalImage={saveFinalImage}
      ></ProductCustomization>
    </div>
  );
}
