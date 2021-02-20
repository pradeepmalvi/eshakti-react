import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCart, updateCart, removeCart } from "../../store/home/homeAction";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import "./cartPage.scss";

import { AiOutlineHeart, AiOutlineInfoCircle } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

export default function CartPage() {
  const cart = useSelector((state) => state.home.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCart());
  }, []);

  const updateQunitity = (type, cart_id) => {
    let quantity;
    if (type === "add") {
      for (let i = 0; i < cart.length; i++) {
        if (cart_id === cart[i].cart_id) {
          quantity = cart[i].quantity + 1;
        }
      }
    } else {
      for (let i = 0; i < cart.length; i++) {
        if (cart_id === cart[i].cart_id) {
          if (cart[i].quantity > 1) {
            quantity = cart[i].quantity - 1;
          }
        }
      }
    }
    let data = {
      quantity: quantity,
    };
    dispatch(updateCart(data, cart_id));
  };

  const cartGrandTotal = () => {
    let total = 0;
    if (cart) {
      for (let i = 0; i < cart.length; i++) {
        total = total + cart[i].price;
      }
    }
    return total;
  };
  return (
    <div className="cart-container">
      <ToastContainer></ToastContainer>
      <div className="cart-wrapper">
        <div className="cart-group-wrapper">
          {cart ? (
            cart.length > 0 ? (
              cart.map((product) => (
                <div className="cart-item">
                  <div className="cart-image">
                    <img src={product.customized_image} alt="" />
                  </div>
                  <div className="cart-content">
                    <div className="product-price">${product.price}</div>
                    <p className="product-title ">{product.product_name}</p>
                    <p className="style-attribute">STYLE # {product.sku_id}</p>

                    <div className="attributes-types">
                      <div className="quantity">
                        <div className="quantity-wrapper">
                          <div
                            className="minus"
                            onClick={updateQunitity.bind(
                              this,
                              "less",
                              product.cart_id
                            )}
                          >
                            -
                          </div>
                          <div className="quantity">{product.quantity}</div>
                          <div
                            className="plus"
                            onClick={updateQunitity.bind(
                              this,
                              "add",
                              product.cart_id
                            )}
                          >
                            +
                          </div>
                        </div>
                      </div>

                      <div className="size">{product.size}</div>

                      <div className="color">{product.color_name}</div>
                    </div>
                    <div className="save-later">
                      <AiOutlineHeart /> Save for later
                    </div>
                    <div
                      className="close"
                      onClick={() => dispatch(removeCart(product.cart_id))}
                    >
                      <AiOutlineClose></AiOutlineClose>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="empty-cart">
                Your cart is empty!
                <br /> Let's add some products in the cart. <br /> <br />
                <Link to="/" className="checkout-btn">
                  CONTINUE SHOPPING
                </Link>
              </div>
            )
          ) : null}

          {cart && cart.length > 0 ? (
            <div className="cart-item-total">
              <span>Sub Total</span> <span>${cartGrandTotal()}</span>
            </div>
          ) : null}
        </div>
        <div className="cart-total-wrapper">
          <div className="cart-total">
            <div className="total-header">TOTAL</div>
            <div className="subtotal">
              <span>Sub Total</span> <span>${cartGrandTotal()}</span>
            </div>
            <div className="subtotal">
              <span>Delivery</span>{" "}
              <span>
                <AiOutlineInfoCircle></AiOutlineInfoCircle>
              </span>
            </div>
            <div className="delivery-option">
              <select name="" id="" className="">
                <option value=""> Standard Delivery (Free)</option>
              </select>
            </div>
            <Link to="/shipping-info" className="checkout-btn">
              PROCEED TO CHECKOUT{" "}
            </Link>{" "}
            WE ACCEPT:
            <div className="payment-methods">
              <div className="card">
                <img
                  src="https://pngimg.com/uploads/visa/visa_PNG18.png"
                  alt=""
                />
              </div>
              <div className="card">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png"
                  alt=""
                />
              </div>
              <div className="card">
                <img
                  src="https://icon-library.com/images/paypal-icon-vector/paypal-icon-vector-9.jpg"
                  alt=""
                />
              </div>
              <div className="card">
                <img
                  src="https://cdn4.iconfinder.com/data/icons/payment-method/160/payment_method_american_express_card-512.png"
                  alt=""
                />
              </div>
              <div className="card">
                <img
                  src="https://pngimg.com/uploads/visa/visa_PNG18.png"
                  alt=""
                />
              </div>
              <div className="card">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png"
                  alt=""
                />
              </div>
              <div className="card">
                <img
                  src="https://icon-library.com/images/paypal-icon-vector/paypal-icon-vector-9.jpg"
                  alt=""
                />
              </div>
            </div>
            <p> Get a discount code? add it in the next step.</p>
          </div>
          <div className="shipping-info">
            <h4>Shipping Information</h4>
            <p>
              Shipping charges are calculate based on prices before discounts.
            </p>
            <a className="link">
              <i>
                <u> View Shipping Information</u>
              </i>
            </a>
          </div>
          <div className="shipping-info">
            <h4> Need Help?</h4>
            <p>We are available if you any questions!</p>
            <a className="link">
              <i>
                <u> Contact Us</u>
              </i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
