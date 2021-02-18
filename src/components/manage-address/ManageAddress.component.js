import React, { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";

export default function ManageAddress() {
  const [shippingAddress, setShippingAddress] = useState({});

  let userId = localStorage.getItem("es_user_id");

  async function fetchUserDetails() {
    userId = await JSON.parse(userId);
  }

  useEffect(() => {}, []);

  return (
    <div className="manage-address">
      <div className="shipping-address">
        <p className="info-side-title">Shipping Address</p>
        <form>
          <div className="input-control-inline">
            <div className="email common">
              <label htmlFor="name">Name</label>
              <input type="" name="name" />
            </div>

            <div className="password common">
              <label htmlFor="mobile">Phone</label>
              <input type="text" name="mobile" />
            </div>
          </div>

          <div className="input-control input-full-width-common">
            <label htmlFor="primary-address">Address line 1</label>
            <input type="text" name="primary-address" />
          </div>
          <div className="input-control input-full-width-common">
            <label htmlFor="primary-address">Address line 2</label>
            <input type="text" />
          </div>

          <div className="input-control-inline">
            <div className="name common">
              <label htmlFor="name">City</label>
              <input type="text" name="name" />
            </div>

            <div className="password common">
              <label htmlFor="number">zip Code</label>
              <input type="text" name="number" />
            </div>
          </div>

          <div className="input-control-inline">
            <div className="country common">
              <label htmlFor="country">Country</label>
              <select>
                <option value="">India</option>
                <option value="">uk</option>
              </select>
            </div>

            <div className="State common">
              <label htmlFor="state">State</label>
              <select>
                <option value="">Rajsthan</option>
                <option value="">Bhilwara</option>
              </select>
            </div>
          </div>

          <div className="btn">
            <button type="submit">Update</button>
          </div>
        </form>
      </div>

      <div className="same-address">
        <label htmlFor="same-address">Use Shipping Address as Billing</label>
        <input type="checkbox" name="same-address" />
      </div>

      <div className="billing-address">
        <p className="info-side-title">Billing Address</p>
        <form>
          <div className="input-control-inline">
            <div className="name common">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" />
            </div>

            <div className="mobile common">
              <label htmlFor="mobile">Phone</label>
              <input type="text" name="mobile" />
            </div>
          </div>

          <div className="input-control input-full-width-common">
            <label htmlFor="primary-address">Address line 1</label>
            <input type="text" name="primary-address" />
          </div>
          <div className="input-control input-full-width-common">
            <label htmlFor="primary-address">Address line 2</label>
            <input type="text" />
          </div>

          <div className="input-control-inline">
            <div className="name common">
              <label htmlFor="name">City</label>
              <input type="text" name="name" />
            </div>

            <div className="password common">
              <label htmlFor="number">zip Code</label>
              <input type="text" name="number" />
            </div>
          </div>

          <div className="input-control-inline">
            <div className="country common">
              <label htmlFor="country">Country</label>
              <select>
                <option value="">India</option>
                <option value="">uk</option>
              </select>
            </div>

            <div className="State common">
              <label htmlFor="state">State</label>
              <select>
                <option value="">Rajsthan</option>
                <option value="">Bhilwara</option>
              </select>
            </div>
          </div>
          <div className="btn">
            <button type="submit">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}
