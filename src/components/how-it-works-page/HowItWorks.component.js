import React from "react";
import "./how-it-works.styles.scss";

// react icons
import { FiPlayCircle } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function HowItWorks() {
  return (
    <div className="how-it-works">
      <div className="inner-container">
        <div
          className="hero-section"
          style={{
            backgroundImage: `url('https://www.eshakti.com/assets/images/how-works/howitworks_mainban.jpg')`,
          }}
        >
          <div className="play-icon">
            <FiPlayCircle />
          </div>
        </div>

        <div className="bottom-content">
          <div className="favourite-design">
            <div className="left">
              <img
                src="https://www.eshakti.com/assets/images/how-works/how_it_works_page_01.jpg"
                alt=""
              />
            </div>
            <div className="right">
              <h2 className="area-title">1. Pick your favourite design</h2>
              <p className="area-desc">
                Choose one (or many) of the dresses, tops, and bottoms in the
                eShakti collection.
              </p>
              <div className="shop-now-btn">
                <Link to="/" className="shop-now-btn link">
                  Shop Styles Now
                </Link>
              </div>
            </div>
          </div>
          <div className="your-measurements">
            <div className="left">
              <h2 className="area-title">1. Pick your favourite design</h2>
              <p className="area-desc">
                Choose one (or many) of the dresses, tops, and bottoms in the
                eShakti collection.
              </p>
              <div className="shop-now-btn">
                <Link to="/" className="shop-now-btn link">
                  Shop Styles Now
                </Link>
              </div>
            </div>
            <div className="right">
              <img
                src="https://www.eshakti.com/assets/images/how-works/how_it_works_page_02.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="customise-design">
            <div className="left">
              <img
                src="https://www.eshakti.com/assets/images/how-works/how_it_works_page_03.jpg"
                alt=""
              />
            </div>
            <div className="right">
              <h2 className="area-title">1. Pick your favourite design</h2>
              <p className="area-desc">
                Choose one (or many) of the dresses, tops, and bottoms in the
                eShakti collection.
              </p>
              <div className="shop-now-btn">
                <Link to="/" className="shop-now-btn link">
                  Shop Styles Now
                </Link>
              </div>
            </div>
          </div>
          <div className="customized-clothing">
            <div className="left">
              <h2 className="area-title">1. Pick your favourite design</h2>
              <p className="area-desc">
                Choose one (or many) of the dresses, tops, and bottoms in the
                eShakti collection.
              </p>
              <div className="shop-now-btn">
                <Link to="/" className="shop-now-btn link">
                  Shop Styles Now
                </Link>
              </div>
            </div>
            <div className="right">
              <img
                src="https://www.eshakti.com/assets/images/how-works/how_it_works_page_04.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="fabulous-fit">
            <div className="left">
              <img
                src="https://www.eshakti.com/assets/images/how-works/how_it_works_page_05.jpg"
                alt=""
              />
            </div>
            <div className="right">
              <h2 className="area-title">1. Pick your favourite design</h2>
              <p className="area-desc">
                Choose one (or many) of the dresses, tops, and bottoms in the
                eShakti collection.
              </p>
              <div className="shop-now-btn">
                <Link to="/" className="shop-now-btn link">
                  Shop Styles Now
                </Link>
              </div>
            </div>
          </div>
          <div className="what-customers-says">
            <div className="left">
              <h2 className="area-title">1. Pick your favourite design</h2>
              <p className="area-desc">
                Choose one (or many) of the dresses, tops, and bottoms in the
                eShakti collection.
              </p>
              <div className="shop-now-btn">
                <Link to="/" className="shop-now-btn link">
                  Shop Styles Now
                </Link>
              </div>
            </div>
            <div className="right">
              <img
                src="https://www.eshakti.com/assets/images/how-works/how-it-works-06.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
