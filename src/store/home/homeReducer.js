import {
  SET_PRODUCT_CATEGORY,
  SET_PRODUCT_BY_CATEGORY,
  SET_HOMEPAGE_PRODUCTS,
} from "../types";

const initalState = [];

const homeReducer = (state = initalState, action) => {
  switch (action.type) {
    case SET_PRODUCT_CATEGORY:
      return {
        ...state,
        productCategory: action.payload,
      };
    case SET_PRODUCT_BY_CATEGORY:
      return {
        ...state,
        productByCategory: action.payload,
      };

    case SET_HOMEPAGE_PRODUCTS:
      console.log(action.payload, "data loaded");
      return {
        ...state,
        homePageProducts: action.payload,
      };

    default:
      return state;
  }
};

export default homeReducer;
