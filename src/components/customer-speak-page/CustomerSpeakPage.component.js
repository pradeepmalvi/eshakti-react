import React, { useEffect } from "react";
import "./customer-speak-page.styles.scss";

import CustomerReviewCard from "../customer-review-card/CustomerReviewCard.component";

export default function CustomerSpeakPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="customer-speaks">
      <h1 className="main-title">Customer Speaks</h1>
      <p className="page-desc">
        We love to hear from you just email us with whatever you'd like to share
        – whether it’s feedback on our products, customer service.
      </p>
      <div className="content">
        <CustomerReviewCard />
        <CustomerReviewCard />
        <CustomerReviewCard />
        <CustomerReviewCard />
      </div>
    </div>
  );
}
