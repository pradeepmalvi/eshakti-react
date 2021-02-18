import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductByCategory } from "../../store/home/homeAction";

import "./categoryPage.styles.scss";

// react router
import { useParams } from "react-router-dom";

// local icons
import icon1 from "../../assets/icons/01.png";
import icon2 from "../../assets/icons/02.png";

// react icons
import { FiChevronDown } from "react-icons/fi";

import ProductCard from "../productCard/ProductCard.component";
import CategoryNamesFilter from "../category-names-filter/CategoryNamesFilter.component";
import PriceFilter from "../priceFilter/PriceFilter.component";
import SizeFilter from "../sizeFilter/SizeFilter.component";
import ColorFilter from "../colorFilter/ColorFilter.component";

// importing axios

export default function CategoryPage() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.home.productByCategory);
  const [showFilter, setShowFilter] = useState("");

  const { id } = useParams();

  useEffect(() => {
    dispatch(getProductByCategory(id));
  }, [id]);

  return (
    <div className="category-page">
      {products && products.length > 0 ? (
        <div className="inner-container">
          <div className={`filters-area ${showFilter}`}>
            <CategoryNamesFilter />
            <PriceFilter />
            <SizeFilter />
            <ColorFilter />
          </div>
          <div className="product-listing">
            <div className="details-and-view-options">
              <div
                className="filter-badge"
                onClick={() =>
                  setShowFilter(showFilter === "show" ? "" : "show")
                }
              >
                <span className="text">Filters</span>
                <span className="icon">
                  <FiChevronDown />
                </span>
              </div>
              <div className="number-of-results">
                Showing 1-12 of 99 Results
              </div>

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
                </div>
              </div>
            </div>
            <div className="number-of-results-small">
              Showing 1-12 of 99 Results
            </div>

            {products && products.length > 0
              ? console.log(products, "data derees")
              : null}

            <div className="products">
              {products && products.length > 0
                ? products.map((product, key) => (
                    <ProductCard key={key} product={product} />
                  ))
                : ""}
            </div>
          </div>
        </div>
      ) : (
        <div className="no-data">
          <h3>No Products</h3>
        </div>
      )}
    </div>
  );
}
