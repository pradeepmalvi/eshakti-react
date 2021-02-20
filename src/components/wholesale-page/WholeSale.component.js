import React, { useEffect } from "react";
import "./whole-sale.styles.scss";

// react icons
import { BsDot } from "react-icons/bs";

// actions
import { getPages } from "./../../store/home/homeAction";

// react redux
import { useDispatch, useSelector } from "react-redux";

// html parser
import ReactHtmlParser from "react-html-parser";

export default function WholeSale() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.home.staticPages);

  function fetchData() {
    dispatch(getPages());
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchData();
  }, []);

  let filtered, wholeSaleContent;

  // checking if privacy policy data exist in state
  if (state !== undefined) {
    // filter data with the name of partner
    filtered = state.filter(
      (each) => each.page_group.toLowerCase() === "partner"
    );

    // find ou data for affilate program page
    wholeSaleContent = filtered[0].page.filter(
      (each) => each.page_name === "Wholesale"
    );
    wholeSaleContent = wholeSaleContent[0].contents;
  }

  // if affilate page content exist return this html
  if (wholeSaleContent) {
    return ReactHtmlParser(wholeSaleContent);
  }

  return (
    <div className="whole-sale">
      <div className="loading">
        <div className="spinner"></div>
      </div>
    </div>
  );
}
