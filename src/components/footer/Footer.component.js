import React from "react";
import "./footer.styles.scss";
import { FaGreaterThan, FaVimeoV, FaPinterest } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { MdWatchLater } from "react-icons/md";
import { FiFacebook } from "react-icons/fi";
import { AiOutlineTwitter } from "react-icons/ai";
import { IoIosSend, IoIosArrowForward } from "react-icons/io";

export default function Footer() {
  return (
    <div className="footer">
      <div className="inner_container">
        <div className="order common">
          <h4>Order</h4>
          <ul>
            <li>
              <span className="right_arrow_icon">
                {/* <IoIosArrowForward /> */}
                <IoIosArrowForward />
              </span>
              <a href="#"> Fabric customisation</a>
            </li>
            <li>
              <span className="right_arrow_icon">
                <IoIosArrowForward />
              </span>
              <a href="#"> Payment & Shipping</a>
            </li>
            <li>
              <span className="right_arrow_icon">
                <IoIosArrowForward />
              </span>
              <a href="#"> Returns & Refunds</a>
            </li>
            <li>
              <span className="right_arrow_icon">
                <IoIosArrowForward />
              </span>
              <a href="#"> Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div className="partner common">
          <h4>Partner</h4>
          <ul>
            <li>
              <span className="right_arrow_icon">
                <IoIosArrowForward />
              </span>
              <a href="#"> Affilliate Program</a>
            </li>
            <li>
              <span className="right_arrow_icon">
                <IoIosArrowForward />
              </span>
              <a href="#">Wholesale</a>
            </li>
            <li>
              <span className="right_arrow_icon">
                <IoIosArrowForward />
              </span>
              <a href="#"> Refer a Friend</a>
            </li>
          </ul>
        </div>
        <div className="about common">
          <h4>About</h4>
          <ul>
            <li>
              <span className="right_arrow_icon">
                <IoIosArrowForward />
              </span>
              <a href="#"> eShakti</a>
            </li>
            <li>
              <span className="right_arrow_icon">
                <IoIosArrowForward />
              </span>
              <a href="#"> How Customisation works</a>
            </li>
            <li>
              <span className="right_arrow_icon">
                <IoIosArrowForward />
              </span>
              <a href="#"> Size Chart</a>
            </li>
            <li>
              <span className="right_arrow_icon">
                <IoIosArrowForward />
              </span>
              <a href="#"> Media Speaks</a>
            </li>
            <li>
              <span className="right_arrow_icon">
                <IoIosArrowForward />
              </span>
              <a href="#"> Customers Speaks</a>
            </li>
            <li>
              <span className="right_arrow_icon">
                <IoIosArrowForward />
              </span>
              <a href="#"> How to Measure</a>
            </li>
          </ul>
        </div>
        <div className="contact common">
          <h4>Contact Us</h4>
          <ul>
            <li>
              <span className="icon phone">
                <FiPhone />
              </span>
              <span className="text">852 854 987</span>
            </li>
            <li>
              <span className="icon watch">
                <MdWatchLater />
              </span>
              <span className="text">(Mon-Fri 8am to 4pm PST)</span>
            </li>

            <li className="social_icons">
              <span className="facebook_icon">
                <FiFacebook />
              </span>
              <span className="social_icon">
                <AiOutlineTwitter />
              </span>
              <span className="social_icon">
                <FaVimeoV />
              </span>
              <span className="social_icon">
                <FaPinterest />
              </span>
            </li>
          </ul>
          <div className="newsletter">
            <h4>Newsletter</h4>
            <div className="input_box">
              <input type="input" placeholder="Enter Your Email" />
              <button>
                <span>
                  <IoIosSend />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
