import React from "react";
import "./categoryNamesFilter.styles.scss";
import { Link } from "react-router-dom";

export default function CategoryNamesFilter() {
  return (
    <div className="category-names-filter">
      <h2 className="title">Product Categories</h2>
      <div className="list">
        <Link className="link" to="/">
          zepelle
        </Link>
        <Link className="link" to="/">
          Lekme
        </Link>
        <Link className="link" to="/">
          maybeline
        </Link>
        <Link className="link" to="/">
          Eshakti
        </Link>
      </div>
    </div>
  );
}
