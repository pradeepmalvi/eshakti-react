import React from "react";
import styles from "./productListing.styles.module.scss";

//product card component
import ProductCard from "../productCard/ProductCard.component";

export default function ProductListing({ title, description }) {
  return (
    <div className={styles.product_listing}>
      <div className={styles.heading_text}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.description}>{description}</div>
      </div>
      <div className={styles.products}>
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
