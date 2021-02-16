import React, { useEffect } from "react";

import { getOrdersList } from "../../store/home/homeAction";

import { useSelector, useDispatch } from "react-redux";

export default function OrderHistoryList() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const userId = localStorage.getItem("es_user_id");

  console.log(state);

  useEffect(() => {
    dispatch(getOrdersList(userId));
  }, []);

  return (
    <>
      <div className="my-orders-slot">
        <p className="info-side-title">My orders</p>
        <div className="each-order">
          <div className="img-and-common-details">
            <div className="order-img">
              <img
                width={150}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCFvT5KiIRBpnM2L6FAAaSioCofkvQML1IIA&usqp=CAU"
                alt=""
              />
            </div>
          </div>
          <div className="details">
            <div className="common-details">
              <div className="name common-title-text">Name & Order ID</div>
              <div className="order-name">Addidas Shirts</div>
              <div className="orderId">#2929</div>
            </div>
            <div className="order-date">
              <span className="ordered-title-text common-title-text">
                Ordered On
              </span>
              <span className="value-text"> 23/2/2021</span>
            </div>
            <div className="price">
              {" "}
              <span className="price-title-text common-title-text">Price</span>
              <div className="value-text">44$</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
