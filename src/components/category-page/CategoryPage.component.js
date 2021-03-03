import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductByCategory,
  getfiltersData,
} from "../../store/home/homeAction";

import "./categoryPage.styles.scss";

// react router
import { useParams } from "react-router-dom";

// local icons
import icon1 from "../../assets/icons/01.png";
import icon2 from "../../assets/icons/02.png";

// react icons
import { FiChevronDown } from "react-icons/fi";

import ProductCard from "../productCard/ProductCard.component";
import BrandFilter from "../brand-filter/BrandFilter.component";
import PriceFilter from "../priceFilter/PriceFilter.component";
import SizeFilter from "../sizeFilter/SizeFilter.component";
import ColorFilter from "../colorFilter/ColorFilter.component";
import DefaultFilter from "../defaultFilter/DefaultFilter.component";

// importing axios
export default function CategoryPage() {
  const [gridView, setGridView] = useState("grid-view-three");
  const dispatch = useDispatch();
  const products = useSelector((state) => state.home.productByCategory);
  const [showFilter, setShowFilter] = useState("");

  const categoryFilters = useSelector((state) => state.home.categoryFilters);

  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getProductByCategory(id));
    dispatch(getfiltersData(id));
    localStorage.setItem("es_product_category_id", id);
  }, [id]);

  return (
    <div className="category-page">
      {products && products.length > 0 ? (
        <div className="inner-container">
          <div className={`filters-area ${showFilter}`}>
            {categoryFilters &&
              categoryFilters.map((eachfilter, index) => {
                switch (eachfilter.name.toLowerCase()) {
                  case "brand":
                    return <BrandFilter key={index} filterData={eachfilter} />;

                  case "size":
                    return <SizeFilter key={index} filterData={eachfilter} />;

                  case "price":
                    return <PriceFilter key={index} filterData={eachfilter} />;

                  case "color":
                    return <ColorFilter key={index} filterData={eachfilter} />;

                  default:
                    return (
                      <DefaultFilter key={index} filterData={eachfilter} />
                    );
                }
              })}
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
                    <option value="">Low to Height</option>
                    <option value="">Heigh to Low</option>
                  </select>
                </div>
                <div className="views-icons">
                  <img
                    src={icon1}
                    onClick={() => setGridView("grid-view-two")}
                    alt="img"
                  />
                  <img
                    src={icon2}
                    onClick={() => setGridView("grid-view-three")}
                    alt="img"
                  />
                </div>
              </div>
            </div>
            <div className="number-of-results-small">
              Showing 1-12 of 99 Results
            </div>

            <div className={`products ${gridView}`}>
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
