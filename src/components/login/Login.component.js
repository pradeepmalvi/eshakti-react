import React, { useState } from "react";
import "./login.styles.scss";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import FormInput from "../form-input/FormInput.component";
import { Link } from "react-router-dom";

const Login = ({ open, onCloseModal }) => (
  <Modal open={open} onClose={onCloseModal} center>
    <div className="inner-container-login">
      <div className="title">
        <h2 className="title-text">Sign in or Register</h2>
      </div>
      <div className="content">
        <div className="left">
          <div className="form">
            <form>
              <div className="form-element-group">
                <label htmlFor="username">UserName</label>
                <FormInput
                  type="text"
                  placeholder={"Username"}
                  className="username"
                  name="username"
                />
              </div>
              <div className="form-element-group">
                <label htmlFor="username">Password</label>
                <FormInput
                  type="text"
                  placeholder={"Password"}
                  className="username"
                  name="username"
                />
              </div>
              <div className="forgott-password-link">
                <Link className="forgot-link" to="">
                  Forgot your Password ?
                </Link>
              </div>
              <div className="form-element-group">
                <FormInput
                  type="submit"
                  className="submit-btn"
                  name="submit-btn"
                />
              </div>
            </form>
          </div>
        </div>

        <div className="right">
          <h3 className="area-title">New Here</h3>
          <div className="discription">
            <div className="heading-text">Registration is free and easy</div>
            <ul className="points">
              <li>Faster checkout</li>
              <li>Save multiple addresses</li>
              <li>View and track orders and more</li>
            </ul>
          </div>
          <button className="create-account-btn">Create An Account</button>
        </div>
      </div>
    </div>
  </Modal>
);

export default Login;
