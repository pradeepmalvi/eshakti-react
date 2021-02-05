import Axios from "../../axios/axios";
import requests from "../../axios/requests";
import {
  SET_USER_DETAILS,
  SET_PRODUCT_CATEGORY,
  SET_PRODUCT_BY_CATEGORY,
  SET_HOMEPAGE_PRODUCTS,
  SET_PARTICULAR_PRODUCT,
  SET_PRODUCT_DETAILS,
  SET_CART,
} from "../types";
import { ToastContainer, toast } from "react-toastify";
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
  Axios.get(`${requests.getProductByCategory}/${categoryId}`).then((res) => {
    dispatch({
      type: SET_PRODUCT_BY_CATEGORY,
      payload: res.data,
    });
  });
};

// getHomepageProducts
export const getHomePageProducts = (data) => (dispatch) => {
  Axios.get(`${requests.getHomePageProducts}`).then((res) => {
    dispatch({
      type: SET_HOMEPAGE_PRODUCTS,
      payload: res.data,
    });
  });
};

// Get product by id
export const getProductById = (productId) => (dispatch) => {
  Axios.get(`${requests.getProductById}/${productId}`).then((res) => {
    dispatch({
      type: SET_PRODUCT_DETAILS,
      payload: res.data,
    });
  });
};

// ADD TO CART
export const addToCart = (data) => (dispatch) => {
  Axios.post(`${requests.addToCart}`, data, config).then((res) => {
    console.log(res.data);
    toast("Product added to cart successfully", {
      type: toast.TYPE.SUCCESS,
      autoClose: 5000,
    });
    // dispatch(getCart);
    // dispatch({
    //   type: SET_PRODUCT_DETAILS,
    //   payload: res.data,
    // });
  });
};

// GET CART
export const getCart = (data) => (dispatch) => {
  Axios.get(
    `${requests.addToCart}/${localStorage.getItem("es_user_id")}`,

    config
  ).then((res) => {
    console.log(res.data);
    dispatch({
      type: SET_CART,
      payload: res.data,
    });
  });
};
