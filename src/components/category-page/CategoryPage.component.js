import React from "react";
import "./categoryPage.styles.scss";

import icon1 from "../../assets/icons/01.png";
import icon2 from "../../assets/icons/02.png";
import icon3 from "../../assets/icons/03.png";
import icon4 from "../../assets/icons/04.png";

import ProductCard from "../productCard/ProductCard.component";
import CategoryNamesFilter from "../category-names-filter/CategoryNamesFilter.component";
import PriceFilter from "../priceFilter/PriceFilter.component";
import SizeFilter from "../sizeFilter/SizeFilter.component";
import ColorFilter from "../colorFilter/ColorFilter.component";

// react icons
import { FaDiceFour } from "react-icons/fa";

export default function categoryListing() {
  return (
    <div className="category-listing">
      <div className="inner-container">
        <div className="filters-area">
          <CategoryNamesFilter />
          <PriceFilter />
          <SizeFilter />
          <ColorFilter />
        </div>
        <div className="product-listing">
          <div className="details-and-viewOptions">
            <div className="number-of-results">Showing 1-12 of 99 Results</div>

            <div className="right-actions">
              <div className="dropdown">
                <select>
                  <option value="">Default Sorting</option>
                  <option value="">Low to Heigh</option>
                  <option value="">Heigh to Low</option>
                </select>
              </div>
              <div className="views-icons">
                <img src={icon1} alt="img" />
                <img src={icon2} alt="img" />
                <img src={icon3} alt="img" />
                <img src={icon4} alt="img" />
              </div>
            </div>
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
      </div>
    </div>
  );
}
