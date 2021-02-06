import React, { useEffect } from "react";
import "./whole-sale.styles.scss";

// react icons
import { BsDot } from "react-icons/bs";

export default function WholeSale() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="whole-sale">
      <div className="title-text">
        <p>Retailers/Resellers</p>
        <h1>A Big opprtunity to grow your business</h1>
      </div>

      <div className="content">
        <div className="write-us">
          <div className="left">
            <img
              src="https://img1.eshakti.com/bannerimages/wholesalemain.jpg"
              alt=""
            />
          </div>
          <div className="right">
            <h3>What's New Here</h3>
            <ul className="key-points">
              <li>
                <span className="icon">
                  <BsDot />
                </span>
                <span className="text">
                  Clothes to your customers' size and style!
                </span>
              </li>
              <li>
                <span className="icon">
                  <BsDot />
                </span>
                <span className="text">
                  Clothes to your customers' size and style!
                </span>
              </li>
              <li>
                <span className="icon">
                  <BsDot />
                </span>
                <span className="text">
                  Clothes to your customers' size and style!
                </span>
              </li>
              <li>
                <span className="icon">
                  <BsDot />
                </span>
                <span className="text">
                  Clothes to your customers' size and style!
                </span>
              </li>
            </ul>
            <div className="btn-part">
              <button className="write-us-btn">
                <span>Write To Us Today</span>
              </button>
            </div>
          </div>
        </div>
        <div className="custom-clothing">
          <div className="left">
            <h3>eShakti</h3>
            <p>The #1 custom-clothing brand online now comes to you!</p>
          </div>
          <div className="right">
            <img
              src="https://images.theconversation.com/files/293774/original/file-20190924-54793-157i3zo.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop"
              alt=""
            />
          </div>
        </div>

        <div className="enquiry-form">
          <div className="title-area">
            <h3>eShakti B2B Inquiry Form</h3>
            <p>
              Thank you for your interest in eShakti. May we request you to fill
              up a few details. Our representative will be in touch with you
              once we receive your information.
            </p>
          </div>

          <div className="form">
            <form>
              <div className="form-control">
                <label htmlFor="#">Name of the Store</label>
                <input type="text" />
              </div>
              <div className="form-control">
                <label htmlFor="#">Address</label>
                <textarea></textarea>
              </div>

              <div className="form-control">
                <label htmlFor="#">Annual Revenue in USD</label>
                <input type="text" />
              </div>

              <div className="form-control">
                <label htmlFor="">Name of Contact Person</label>
                <input type="text" />
              </div>
              <div className="form-control">
                <label htmlFor="">Email ID</label>
                <input type="text" />
              </div>
              <div className="form-control">
                <label htmlFor="">Phone Number (with Area Code)</label>
                <input type="text" />
              </div>
              <div className="form-control">
                <label htmlFor="#">Anything else you would like to add:</label>
                <textarea></textarea>
              </div>

              <div className="form-control">
                <input type="submit" value="Submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
