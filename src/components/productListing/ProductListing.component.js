import React from "react";
import "./productListing.styles.scss";

//product card component
import ProductCard from "../productCard/ProductCard.component";

export default function ProductListing({ title, description }) {
  return (
    <div className="product_listing">
      <div className="heading_text">
        <h2 className="title">{title}</h2>
        <div className="description">{description}</div>
      </div>
      <div className="products">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
}
