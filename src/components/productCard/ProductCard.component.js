import React from "react";
import "./productCard.styles.scss";

import { addToWishlist } from "../../store/home/homeAction";

// social icon images
import Facebook from "../../assets/images/icon-11.png";
import Pinterest from "../../assets/images/icon-2.2.png";
import Twitter from "../../assets/images/icon-3.3.png";

import {
  FacebookShareButton,
  FacebookIcon,
  PinterestShareButton,
  PinterestIcon,
  TwitterShareButton,
  TwitterIcon,
} from "react-share";

// toastify
import { toast } from "react-toastify";

import { useDispatch, useSelector } from "react-redux";

// import react icons
import {
  AiOutlineStar,
  AiOutlineHeart,
  AiOutlineShareAlt,
} from "react-icons/ai";
import { Link } from "react-router-dom";

export default function ProductCard({ product = {} }) {
  const { id } = product;
  const { brand } = product;
  const { product_name } = product;
  const { product_price } = product;
  const { total_price } = product;
  const { product_thumbnail } = product;

  const dispatch = useDispatch();

  const handleClick = (product_id) => {
    console.log(product_id);
  };

  return (
    <>
      <div className="product_card">
        <div className="share-and-wish">
          <span
            className={"icon"}
            onClick={(e) => {
              if (localStorage.getItem("es_login")) {
                dispatch(
                  addToWishlist({
                    user_id: localStorage.getItem("es_user_id"),
                    product_id: id,
                  })
                );
              } else {
                toast.dark("Please Login first");
              }
            }}
          >
            <AiOutlineHeart />
          </span>
          <div className="share-icon">
            <span>
              <AiOutlineShareAlt />
            </span>
            <div className="social-icons">
              <TwitterShareButton
                url={`http://eshakti.ewtlive.in/product-details/${id}`}
                title={product_name}
                className="Demo__some-network__share-button"
              >
                <TwitterIcon size={28} round />
              </TwitterShareButton>
              <FacebookShareButton
                url={`http://eshakti.ewtlive.in/product-details/${id}`}
                title={product_name}
                className="Demo__some-network__share-button"
              >
                <FacebookIcon size={28} round />
              </FacebookShareButton>

              <PinterestShareButton
                url={`http://eshakti.ewtlive.in/product-details/${id}`}
                title={product_name}
                className="Demo__some-network__share-button"
              >
                <PinterestIcon size={28} round />
              </PinterestShareButton>
            </div>
          </div>
        </div>

        <Link to={`/product-details/${id}`}>
          <div className="product_img">
            <div
              className="img"
              // style={{
              //   backgroundImage: `url(${
              //     (product_thumbnail &&
              //       product_thumbnail.length > 0 &&
              //       product_thumbnail[0]) ||
              //     "https://img1.eshakti.com/clothimages/CL0081518MP.jpg"
              //   })`,
              // }}
            >
              <img
                className="img"
                src={
                  (product_thumbnail &&
                    product_thumbnail.length > 0 &&
                    product_thumbnail[0]) ||
                  "https://img1.eshakti.com/clothimages/CL0081518MP.jpg"
                }
                alt=""
              />
            </div>
          </div>
          <div className="brand">{brand || "brand name"}</div>
          <div className="product_name">{product_name || "product name"}</div>
          <div className="price_and_rating">
            <div className="price">
              <span className="prev_price">{product_price || 444}$</span>
              <span className="current_price">{total_price || 333}$</span>
            </div>
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
            </span>
          </div>
        </Link>
      </div>
    </>
  );
}
