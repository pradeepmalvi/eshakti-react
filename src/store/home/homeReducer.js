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
  SET_USER_PROFILE_IMG,
  SET_FILTERS,
  GET_WISHLIST,
  ADD_TO_WISHLIST,
  REMOVE_FROM_WISHLIST,
  SEARCHED_PRODUCTS,
  SET_SHIPPING_DETAILS,
  SET_CUSTOMER_SPEAKS_COMMENTS,
  SET_BILLING_DETAILS,
  SET_CURRENCY_RATES,
} from "../types";

const initalState = { tempWishlist: [] };

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
        productByCategory: action.payload.product,
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
      return {
        ...state,
        userOrdersList: action.payload,
      };

    case SET_USER_PROFILE_IMG:
      return {
        ...state,
        userProfileImg: action.payload,
      };

    case SET_FILTERS:
      return {
        ...state,
        categoryFilters: action.payload,
      };

    case GET_WISHLIST:
      return {
        ...state,
        userWishList: action.payload,
      };

    case ADD_TO_WISHLIST:
      return {
        ...state,
        tempWishlist: [...state.tempWishlist, action.payload],
      };

    case REMOVE_FROM_WISHLIST:
      return {
        ...state,
        tempWishlist: [...state.tempWishlist, action.payload],
      };

    case SEARCHED_PRODUCTS:
      return {
        ...state,
        searchedProducts: action.payload,
      };

    case SET_SHIPPING_DETAILS:
      return {
        ...state,
        shippingDetails: action.payload,
      };

    case SET_CUSTOMER_SPEAKS_COMMENTS:
      return {
        ...state,
        customerSpeaksComments: action.payload,
      };
    case SET_BILLING_DETAILS:
      return {
        ...state,
        billingDetails: action.payload,
      };

    case SET_CURRENCY_RATES:
      return {
        ...state,
        currencyRates: action.payload.data,
      };

    default:
      return state;
  }
};

export default homeReducer;
