import React, { useEffect } from "react";
import "./customer-speak-page.styles.scss";

import CustomerReviewCard from "../customer-review-card/CustomerReviewCard.component";

// actions
import { getPages } from "./../../store/home/homeAction";

// react redux
import { useDispatch, useSelector } from "react-redux";

// html parser
import ReactHtmlParser from "react-html-parser";

export default function CustomerSpeakPage() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.home.staticPages);

  function fetchData() {
    dispatch(getPages());
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchData();
  }, []);

  let filtered, customerSpeaks;

  // checking if privacy policy data exist in state
  if (state !== undefined) {
    // filter data with the name of partner
    filtered = state.filter(
      (each) => each.page_group.toLowerCase() === "about"
    );

    // find ou data for affilate program page
    customerSpeaks = filtered[0].page.filter(
      (each) => each.page_name === "Customers Speaks"
    );
    customerSpeaks = customerSpeaks[0].contents;
  }

  // if affilate page content exist return this html
  if (customerSpeaks) {
    return ReactHtmlParser(customerSpeaks);
  }

  return (
    <div className="customer-speaks">
      <div className="loading">
        <div className="spinner"></div>
      </div>
    </div>
  );
}
