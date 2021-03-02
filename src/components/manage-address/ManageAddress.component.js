import React, { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";

import { getShippingDetails } from "../../store/home/homeAction";

export default function ManageAddress() {
  const shippingDetails = useSelector((state) =>
    state.home.shippingDetails
      ? state.home.shippingDetails.shipping_address
      : null
  );

  // for shipping address
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [primryAddress, setPrimaryAddress] = useState("");
  const [secondaryAddress, setSecondaryAddress] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [country, setCountry] = useState("");
  const [shippingState, setShippingState] = useState("");

  // for billing address
  const [billing_name, setBilling_name] = useState("");
  const [billing_phone, setBilling_phone] = useState("");
  const [billing_primryAddress, setBilling_primryAddress] = useState("");
  const [billing_secondaryAddress, setBilling_SecondaryAddress] = useState("");
  const [billing_city, setBilling_City] = useState("");
  const [billing_zipCode, setBilling_ZipCode] = useState("");
  const [billing_country, setBilling_Country] = useState("");
  const [billing_state, setBilling_State] = useState("");

  let userId = localStorage.getItem("es_user_id");
  const dispatch = useDispatch();
  let shippingName = "";

  useEffect(() => {
    dispatch(getShippingDetails(userId));
  }, []);

  useEffect(() => {
    if (shippingDetails) {
      shippingName = shippingDetails.name;
      setName(shippingDetails.name);
      setPhone(shippingDetails.phone);
      setPrimaryAddress(shippingDetails.address);
      setSecondaryAddress(shippingDetails.address2);
      setZipCode(shippingDetails.zip_code);
      setCity(shippingDetails.city);
      setCountry(shippingDetails.country);
      setShippingState(shippingDetails.state);
    }
  }, [shippingDetails]);

  console.log(shippingDetails, shippingName, "shipping details");
  function onupdate(e) {
    const updateData = {
      id: shippingDetails !== undefined ? shippingDetails.id : null,
      name: name,
      phone: phone,
      alternate_phone: "",
      address: primryAddress,
      address2: secondaryAddress,
      address_type: "",
      city: city,
      country: country,
      state: shippingState,
      zip_code: zipCode,
      landmark: "",
      user_id: localStorage.getItem("es_user_id"),
    };
  }

  return (
    <div className="manage-address">
      <div className="shipping-address">
        <p className="info-side-title">Shipping Address</p>
        <form>
          <div className="input-control-inline">
            <div className="email common">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                name="name"
              />
            </div>

            <div className="password common">
              <label htmlFor="mobile">Phone</label>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                name="mobile"
              />
            </div>
          </div>

          <div className="input-control input-full-width-common">
            <label htmlFor="primary-address">Address line 1</label>
            <input
              type="text"
              value={primryAddress}
              onChange={(e) => setPrimaryAddress(e.target.value)}
              name="primary-address"
            />
          </div>
          <div className="input-control input-full-width-common">
            <label htmlFor="primary-address">Address line 2</label>
            <input
              type="text"
              value={secondaryAddress}
              onChange={(e) => setSecondaryAddress(e.target.value)}
            />
          </div>

          <div className="input-control-inline">
            <div className="name common">
              <label htmlFor="name">City</label>
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                name="name"
              />
            </div>

            <div className="password common">
              <label htmlFor="zip">zip Code</label>
              <input
                type="text"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
                name="zip"
              />
            </div>
          </div>

          <div className="input-control-inline">
            <div className="country common">
              <label htmlFor="country">Country</label>
              <input
                type="text"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
            </div>

            <div className="State common">
              <label htmlFor="state">State</label>
              <input
                type="text"
                value={shippingState}
                onChange={(e) => setShippingState(e.target.value)}
              />
            </div>
          </div>

          <div className="btn">
            <button type="submit" onClick={onupdate}>
              Update
            </button>
          </div>
        </form>
      </div>

      <div className="same-address">
        <label htmlFor="same-address">Use Shipping Address as Billing</label>
        <input
          type="checkbox"
          name="same-address"
          onChange={(e) => {
            if (e.target.checked) {
              setBilling_name(name);
              setBilling_phone(phone);
              setBilling_City(city);
              setBilling_Country(country);
              setBilling_primryAddress(primryAddress);
              setBilling_SecondaryAddress(secondaryAddress);
              setBilling_State(shippingState);
              setBilling_ZipCode(zipCode);
            } else if (!e.target.checked) {
              setBilling_name("");
              setBilling_phone("");
              setBilling_City("");
              setBilling_Country("");
              setBilling_primryAddress("");
              setBilling_SecondaryAddress("");
              setBilling_State("");
              setBilling_ZipCode("");
            }
          }}
        />
      </div>

      <div className="billing-address">
        <p className="info-side-title">Billing Address</p>
        <form>
          <div className="input-control-inline">
            <div className="name common">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                value={billing_name}
                onChange={() => {}}
              />
            </div>

            <div className="mobile common">
              <label htmlFor="mobile">Phone</label>
              <input
                type="text"
                name="mobile"
                value={billing_phone}
                onChange={() => {}}
              />
            </div>
          </div>

          <div className="input-control input-full-width-common">
            <label htmlFor="primary-address">Address line 1</label>
            <input
              type="text"
              name="primary-address"
              value={billing_primryAddress}
              onChange={() => {}}
            />
          </div>
          <div className="input-control input-full-width-common">
            <label htmlFor="primary-address">Address line 2</label>
            <input
              type="text"
              value={billing_secondaryAddress}
              onChange={() => {}}
            />
          </div>

          <div className="input-control-inline">
            <div className="name common">
              <label htmlFor="name">City</label>
              <input
                type="text"
                name="name"
                value={billing_city}
                onChange={() => {}}
              />
            </div>

            <div className="password common">
              <label htmlFor="number">zip Code</label>
              <input
                type="text"
                name="number"
                value={billing_zipCode}
                onChange={() => {}}
              />
            </div>
          </div>

          <div className="input-control-inline">
            <div className="country common">
              <label htmlFor="country">Country</label>
              <input
                type="text"
                name="country"
                value={billing_country}
                onChange={() => {}}
              />
            </div>

            <div className="State common">
              <label htmlFor="state">State</label>
              <input
                type="text"
                name="country"
                value={billing_state}
                onChange={() => {}}
              />
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
