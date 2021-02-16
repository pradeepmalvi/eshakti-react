import {
  SET_PRODUCT_CATEGORY,
  SET_PRODUCT_BY_CATEGORY,
  SET_HOMEPAGE_PRODUCTS,
  SET_PRODUCT_DETAILS,
  SET_CART,
  SET_PAGES,
  SET_COUNTRY,
  SET_STATE,
  SET_CITY,
  SET_SHIPPING_CHARGES,
  SET_USER_DETAILS,
  SET_ORDERS_LIST,
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
      return {
        ...state,
        homePageProducts: action.payload,
      };
    case SET_PRODUCT_DETAILS:
      return {
        ...state,
        productDetail: action.payload,
      };

    case SET_CART:
      return {
        ...state,
        cart: action.payload,
      };

    case SET_PAGES:
      return {
        ...state,
        staticPages: action.payload.pages,
      };

    case SET_COUNTRY:
      return {
        ...state,
        countryList: action.payload,
      };

    case SET_STATE:
      return {
        ...state,
        stateList: action.payload,
      };

    case SET_CITY:
      return {
        ...state,
        cityList: action.payload,
      };

    case SET_SHIPPING_CHARGES:
      return {
        ...state,
        shippingChargesList: action.payload,
      };

    case SET_USER_DETAILS:
      return {
        ...state,
        signedInUser: action.payload,
      };

    case SET_ORDERS_LIST:
      console.log(action.payload, "getting in");
      return {
        ...state,
        userOrdersList: action.payload,
      };

    default:
      return state;
  }
};

export default homeReducer;
