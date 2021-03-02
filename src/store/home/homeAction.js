import Axios from "../../axios/axios";
import requests from "../../axios/requests";

import axios from "axios";

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
  SET_ORDERS_LIST,
  SET_USER_PROFILE_IMG,
  SET_USER_DETAILS,
  SET_FILTERS,
  GET_WISHLIST,
  ADD_TO_WISHLIST,
  REMOVE_FROM_WISHLIST,
  SEARCHED_PRODUCTS,
  SET_SHIPPING_DETAILS,
  SET_B2B_FORM_STATUS,
  SET_CUSTOMER_SPEAKS_COMMENTS,
} from "../types";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const config = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem("es_token")}`,
  },
};

// onRegister
export const onRegister = (data) => (dispatch) => {
  Axios.post(`${requests.onRegister}`, data)
    .then((res) => {
      toast("Registered Successfully", {
        type: toast.TYPE.SUCCESS,
        autoClose: 5000,
      });

      dispatch({
        type: SET_USER_DETAILS,
        payload: res.data.success,
      });

      localStorage.setItem("es_token", res.data.success.token);
      localStorage.setItem("es_name", res.data.success.name);
      localStorage.setItem("es_login", true);

      window.location.reload();
    })

    .catch((res) => {
      toast(res.response.data.error, {
        type: toast.TYPE.ERROR,
        autoClose: 5000,
      });
    });
};

// onLogin
export const onLogin = (data) => (dispatch) => {
  Axios.post(`${requests.onLogin}`, data)
    .then((res) => {
      toast("Logged in Successfully", {
        type: toast.TYPE.SUCCESS,
        autoClose: 5000,
      });

      dispatch({
        type: SET_USER_DETAILS,
        payload: res.data.user,
      });

      localStorage.setItem("es_token", res.data.token);
      localStorage.setItem("es_name", res.data.user.name);
      localStorage.setItem("es_user_id", res.data.user.id);
      localStorage.setItem("es_login", true);
      localStorage.setItem("es_user_details", JSON.stringify(res.data.user));

      window.location.reload();
    })

    .catch((res) => {
      if (res.response) {
        toast(res.response.data.error, {
          type: toast.TYPE.ERROR,
          autoClose: 5000,
        });
      }
    });
};

// getCategory
export const getProductCategory = (data) => (dispatch) => {
  Axios.get(`${requests.getProductCategory}`).then((res) => {
    dispatch({
      type: SET_PRODUCT_CATEGORY,
      payload: res.data.product_categories,
    });
  });
};

// getProductByCategory
export const getProductByCategory = (categoryId) => (dispatch) => {
  Axios.get(`${requests.getProductByCategory}/${categoryId}`, config).then(
    (res) => {
      dispatch({
        type: SET_PRODUCT_BY_CATEGORY,
        payload: res.data,
      });
    }
  );
};

// getHomepageProducts
export const getHomePageProducts = (data) => (dispatch) => {
  Axios.get(`${requests.getHomePageProducts}`, config).then((res) => {
    dispatch({
      type: SET_HOMEPAGE_PRODUCTS,
      payload: res.data,
    });
  });
};

// Get product by id
export const getProductById = (productId) => (dispatch) => {
  Axios.get(`${requests.getProductById}/${productId}`).then((res) => {
    console.log(res, "product by id");
    dispatch({
      type: SET_PRODUCT_DETAILS,
      payload: res.data,
    });
  });
};

// ADD TO CART
export const addToCart = (data) => (dispatch) => {
  Axios.post(`${requests.cart}`, data, config).then((res) => {
    toast("Product added to cart successfully", {
      type: toast.TYPE.SUCCESS,
      autoClose: 5000,
    });
    dispatch(getCart());
    dispatch(getProductByCategory());
  });
};

// GET CART
export const getCart = (data) => (dispatch) => {
  Axios.get(
    `${requests.cart}/${localStorage.getItem("es_user_id")}`,
    config
  ).then((res) => {
    dispatch({
      type: SET_CART,
      payload: res.data,
    });
  });
};

// UPDATE CART
export const updateCart = (data, cart_id) => (dispatch) => {
  Axios.put(`${requests.cart}/${cart_id}`, data, config).then((res) => {
    dispatch(getCart());
    dispatch(getProductByCategory(localStorage.getItem("es_product_category")));
  });
};

// REMOVE CART
export const removeCart = (id) => (dispatch) => {
  Axios.delete(`${requests.cart}/${id}`, config).then((res) => {
    toast("Product deleted", {
      type: toast.TYPE.SUCCESS,
      autoClose: 5000,
    });
    dispatch(getCart());
  });
};

// Place order
export const placeOrder = (data) => (dispatch) => {
  Axios.post(`${requests.order}`, data, config).then((res) => {
    toast("Order Placed Successfully!", {
      type: toast.TYPE.SUCCESS,
      autoClose: 5000,
    });

    setTimeout(() => {
      window.location.href = "/my-account/my-orders";
    }, 1000);
  });
};

// get static pages
export const getPages = (data) => (dispatch) => {
  Axios.get(`${requests.getPages}`).then((res) => {
    dispatch({
      type: SET_PAGES,
      payload: res.data,
    });
  });
};

// Get country
export const getCountryList = () => (dispatch) => {
  Axios.get(`${requests.getCountry}`).then((res) => {
    dispatch({
      type: SET_COUNTRY,
      payload: res.data,
    });
  });
};

// Get state
export const getStateList = (id) => (dispatch) => {
  Axios.get(`${requests.getState}/${id}`).then((res) => {
    dispatch({
      type: SET_STATE,
      payload: res.data,
    });
  });
};

// Get city
export const getCityList = (id) => (dispatch) => {
  Axios.get(`${requests.getCity}/${id}`).then((res) => {
    dispatch({
      type: SET_CITY,
      payload: res.data,
    });
  });
};

// Get shipping charges
export const getShippingChargesList = (data) => (dispatch) => {
  Axios.post(`${requests.getShippingCharges}`, data).then((res) => {
    dispatch({
      type: SET_SHIPPING_CHARGES,
      payload: res.data.shipping_method,
    });
  });
};

// get orders list
export const getOrdersList = (userId) => (dispatch) => {
  Axios.get(`${requests.getOrdersList}/${userId}`, config).then((res) => {
    dispatch({
      type: SET_ORDERS_LIST,
      payload: res.data.order_history,
    });
  });
};

// update profile pic
export const updateProfilePic = (data) => (dispatch) => {
  Axios.post(`${requests.uploadProfilePicture}`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${localStorage.getItem("es_token")}`,
    },
  }).then((res) => {
    dispatch({ type: SET_USER_PROFILE_IMG, payload: res.data.pic });
  });
};

// get user details
export const getUserDetails = (userId) => (dispatch) => {
  Axios.get(`${requests.getUserDetails}/${userId}`, config).then((res) => {
    dispatch({ type: SET_USER_DETAILS, payload: res.data });
  });
};

// // get shipping details
export const getShippingDetails = (userId) => (dispatch) => {
  Axios.get(`${requests.getShippingDetails}/${userId}`, config).then((res) => {
    dispatch({
      type: SET_SHIPPING_DETAILS,
      payload: res.data,
    });
  });
};

// get filters data
export const getfiltersData = (categoryId) => (dispatch) => {
  Axios.get(`${requests.getFiltersDetails}/${categoryId}`, config).then(
    (res) => {
      dispatch({ type: SET_FILTERS, payload: res.data });
    }
  );
};

// get wishlist
export const getWishList = (userId) => (dispatch) => {
  Axios.get(`${requests.getWishList}/${userId}`, config).then((res) => {
    console.log(res, "wishlist");
    dispatch({ type: GET_WISHLIST, payload: res.data });
  });
};

// add to wishlist
export const addToWishlist = (data) => (dispatch) => {
  Axios.post(`${requests.addToWishList}`, data, config).then((res) => {
    if (res.status === 200) {
      console.log(res);
      dispatch({
        type: ADD_TO_WISHLIST,
        payload: { itemId: data.product_id, status: res.data.status },
      });
      dispatch(
        getProductByCategory(localStorage.getItem("es_product_category_id"))
      );
      dispatch(getHomePageProducts());
      dispatch(getProductById(data.product_id));
    }
  });
};

// remove from wishlist
export const removeFromWishlist = (id) => (dispatch) => {
  Axios.delete(`${requests.removeFromWishList}/${id}`, config).then((res) => {
    if (res.status === 200) {
      dispatch({
        type: REMOVE_FROM_WISHLIST,
        payload: { itemId: res.data.productId, status: res.data.status },
      });
      dispatch(getWishList(localStorage.getItem("es_user_id")));
      dispatch(getHomePageProducts());
      dispatch(
        getProductByCategory(localStorage.getItem("es_product_category_id"))
      );
    }
  });
};

//search products
export const searchProduct = (data) => (dispatch) => {
  Axios.post(`${requests.search}`, data).then((res) => {
    dispatch({
      type: SEARCHED_PRODUCTS,
      payload: res.data.products,
    });
  });
};

// b2b enquiry on wholesale page
export const b2bEnquiry = (dataToSend, notifySubmition) => (dispatch) => {
  Axios.post(`${requests.sendB2BForm}`, dataToSend).then((res) => {
    if (res.data.status) {
      notifySubmition();
    }
  });
};

export const getCustomerSpeaksComments = () => (dispatch) => {
  Axios.get(`${requests.getCustomerSpeaksComments}`, config).then((res) => {
    dispatch({ type: SET_CUSTOMER_SPEAKS_COMMENTS, payload: res.data.data });
  });
};
