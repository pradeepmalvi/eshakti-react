import React from "react";
import "./currency-changer.styles.scss";
import ReactCountryFlag from "react-country-flag";

// react modal
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

export default function CurrencyChanger({ open, onClose }) {
  return (
    <Modal open={open} onClose={onClose}>
      <div className="currency-changer-container">
        <div className="inner-container">
          <div className="each-currency">
            <div className="inner-area">
              <span className="flag">
                <ReactCountryFlag
                  countryCode="US"
                  className="flag"
                  svg
                  style={{
                    width: "1.3em",
                    height: "1.8em",
                  }}
                  title="US"
                />
              </span>
              <span className="country-name">United States</span>
            </div>
          </div>
          <div className="each-currency">
            <div className="inner-area">
              <span className="flag">
                <ReactCountryFlag
                  countryCode="US"
                  className="flag"
                  svg
                  style={{
                    width: "1.3em",
                    height: "1.8em",
                  }}
                  title="US"
                />
              </span>
              <span className="country-name">United States</span>
            </div>
          </div>
          <div className="each-currency">
            <div className="inner-area">
              <span className="flag">
                <ReactCountryFlag
                  countryCode="US"
                  className="flag"
                  svg
                  style={{
                    width: "1.3em",
                    height: "1.8em",
                  }}
                  title="US"
                />
              </span>
              <span className="country-name">United States</span>
            </div>
          </div>
          <div className="each-currency">
            <div className="inner-area">
              <span className="flag">
                <ReactCountryFlag
                  countryCode="US"
                  className="flag"
                  svg
                  style={{
                    width: "1.3em",
                    height: "1.8em",
                  }}
                  title="US"
                />
              </span>
              <span className="country-name">United States</span>
            </div>
          </div>
          <div className="each-currency">
            <div className="inner-area">
              <span className="flag">
                <ReactCountryFlag
                  countryCode="US"
                  className="flag"
                  svg
                  style={{
                    width: "1.3em",
                    height: "1.8em",
                  }}
                  title="US"
                />
              </span>
              <span className="country-name">United States</span>
            </div>
          </div>
          <div className="each-currency">
            <div className="inner-area">
              <span className="flag">
                <ReactCountryFlag
                  countryCode="US"
                  className="flag"
                  svg
                  style={{
                    width: "1.3em",
                    height: "1.8em",
                  }}
                  title="US"
                />
              </span>
              <span className="country-name">United States</span>
            </div>
          </div>
          <div className="each-currency">
            <div className="inner-area">
              <span className="flag">
                <ReactCountryFlag
                  countryCode="US"
                  className="flag"
                  svg
                  style={{
                    width: "1.3em",
                    height: "1.8em",
                  }}
                  title="US"
                />
              </span>
              <span className="country-name">United States</span>
            </div>
          </div>
          <div className="each-currency">
            <div className="inner-area">
              <span className="flag">
                <ReactCountryFlag
                  countryCode="US"
                  className="flag"
                  svg
                  style={{
                    width: "1.3em",
                    height: "1.8em",
                  }}
                  title="US"
                />
              </span>
              <span className="country-name">United States</span>
            </div>
          </div>
          <div className="each-currency">
            <div className="inner-area">
              <span className="flag">
                <ReactCountryFlag
                  countryCode="US"
                  className="flag"
                  svg
                  style={{
                    width: "1.3em",
                    height: "1.8em",
                  }}
                  title="US"
                />
              </span>
              <span className="country-name">United States</span>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
