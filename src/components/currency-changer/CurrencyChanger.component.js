import React from "react";
import "./currency-changer.styles.scss";
import ReactCountryFlag from "react-country-flag";

import { useDispatch, useSelector } from "react-redux";

// react-cookie
import { useCookies } from "react-cookie";

// react modal
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

export default function CurrencyChanger({ open, onClose }) {
  const availableCurrencies = useSelector((state) => state.home.currencyRates);
  const [cookies, setCookie] = useCookies([
    "countryCode",
    "userSelectedCurrency",
  ]);

  console.log(cookies);

  return (
    <Modal open={open} onClose={onClose}>
      {console.log(cookies.countryCode)}
      <div className="currency-changer-container">
        <div className="inner-container">
          {availableCurrencies !== undefined && availableCurrencies !== null
            ? availableCurrencies.currencyRates.map((eachCurrency, index) => (
                <div
                  className="each-currency"
                  key={index}
                  id={eachCurrency.currencyCode}
                  onClick={(e) => {
                    setCookie("userSelectedCurrency", e.currentTarget.id);
                  }}
                >
                  <div className="inner-area">
                    <span className="flag">
                      <ReactCountryFlag
                        countryCode={eachCurrency.countryCode}
                        className="flag"
                        svg
                        style={{
                          width: "1.3em",
                          height: "1.8em",
                        }}
                        title="US"
                      />
                    </span>
                    <span className="country-name">
                      {eachCurrency.countryCode}
                    </span>
                  </div>
                </div>
              ))
            : null}
        </div>
      </div>
    </Modal>
  );
}
