import React, { useEffect } from "react";

import { getOrdersList } from "../../store/home/homeAction";

import { useSelector, useDispatch } from "react-redux";

export default function OrderHistoryList() {
  // using action dispatcher and selector to get and set state
  const dispatch = useDispatch();
  const userOrdersList = useSelector((state) => state.home.userOrdersList);

  const userId = localStorage.getItem("es_user_id");

  console.log(userOrdersList);

  useEffect(() => {
    dispatch(getOrdersList(userId));
  }, []);

  return (
    <>
      <div className="my-orders-slot">
        <p className="info-side-title">My orders</p>
        {userOrdersList &&
          userOrdersList.map((order) => (
            <div className="each-order">
              {/* <div className="img-and-common-details">
                <div className="order-img">
                  <img
                    width={150}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCFvT5KiIRBpnM2L6FAAaSioCofkvQML1IIA&usqp=CAU"
                    alt=""
                  />
                </div>
              </div> */}
              <div className="details">
                <div className="common-details">
                  <div className="name common-title-text">Order ID</div>

                  <div className="orderId">#{order.order_id}</div>
                </div>
                <div className="order-date">
                  <span className="ordered-title-text common-title-text">
                    Ordered On
                  </span>
                  <span className="value-text"> {order.order_date}</span>
                </div>
                <div className="price">
                  {" "}
                  <span className="price-title-text common-title-text">
                    Price
                  </span>
                  <div className="value-text">{order.total_order}$</div>
                </div>
                <div className="price">
                  {" "}
                  <span className="price-title-text common-title-text">
                    Status
                  </span>
                  <div className="status">{order.status}</div>
                </div>
                <div className="price">
                  {" "}
                  <div className="order-details-btn">View Order</div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}
