import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { getUserOrders } from "./features/store/userSlice";
var moment = require("moment");
var momentutc = require("moment-timezone");

const OrderItemContainer = () => {
  const order = useSelector(getUserOrders);
  return (
    <Container>
      {order.map((i) => {
        return (
          <OrderItem>
            <div className="top">
              <div className="restro-name">
                {i.store_id && (
                  <span className="name">{i.store_id.store_name}</span>
                )}
                {i.store_id && (
                  <span className="locality"> {i.store_id.city}</span>
                )}
              </div>
              <div className="content">
                <div className="date">
                  <div className="order-tag">
                    <p>Ordered on</p>
                  </div>
                  <span>
                    {" "}
                    {moment(i.date, "YYYY-MM-DDTHH:mm:ss.SSS[Z]").format(
                      "DD"
                    )}{" "}
                  </span>
                  <span>
                    {moment(i.date, "YYYY-MM-DDTHH:mm:ss.SSS[Z]").format("MMM")}{" "}
                  </span>
                  <span>
                    {moment(i.date, "YYYY-MM-DDTHH:mm:ss.SSS[Z]").format(
                      "YYYY"
                    )}{" "}
                  </span>
                  <span>
                    at {momentutc(i.date).tz("Asia/Kolkata").format("HH:mm a")}{" "}
                  </span>
                </div>
              </div>
            </div>
            <div className="bottom">
              <div className="item-content">
                {i.items.map((item) => {
                  return (
                    <div className="order-item-contents">
                      <div className="order-item-name">
                        <p>{item.item_id.name}</p>
                      </div>
                      <div>
                        <div className="order-item-qty">
                          <p>x {item.quantity}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="address">
                <div className="add-tag">
                  <span className="add-tag-add">Delivery Address:</span>
                  <span>{i.delivery_address}</span>
                </div>
              </div>
              <div className="order-total">
                <div className="order-payment">
                  <div className="order-payment-tag">
                    <p>Mode of payment</p>
                  </div>
                  <div className="payment-type">
                    <span>{i.payment_type}</span>
                  </div>
                </div>
                <div className="order-inner-container">
                  <div className="order-total-tag">
                    <p>Order Total</p>
                  </div>
                  <div className="order-total-fig">
                    <span> ₹ {i.order_total}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="line">
              <hr />
            </div>
          </OrderItem>
        );
      })}
    </Container>
  );
};

const OrderItem = styled.div`
  margin: 10px 0px 7px 0px;

  .address {
    .add-tag-add {
      font-weight: 750;
    }
  }
  .order-payment-tag {
    font-weight: 700;
    display: flex;
    justify-content: center;
  }

  .order-payment {
    margin: 20px 1px 20px 1px;
  }

  .payment-type {
    display: flex;
    justify-content: center;
  }
  .line {
    margin: 7px 5px 1px 5px;
  }

  .order-inner-container {
    ${"" /* margin: 20px 1px 20px 1px; */}
  }
  .order-total-tag {
    display: flex;
    justify-content: center;
    font-weight: 700;
    width: 170px;
  }
  .item-content {
    width: 220px;
  }
  .order-total-fig {
    display: flex;
    justify-content: center;
  }
  .order-item-contents {
    display: flex;
    justify-content: space-between;
  }

  .bottom {
    display: flex;
    justify-content: space-between;
    margin: 1px 0px 0px 5px;
  }
  .restro-name {
    .name {
      font-size: 28px;
      font-weight: 550;
    }
  }

  .order-tag {
    font-weight: 600;
    display: flex;
    justify-content: center;
  }
  .top {
    display: flex;
    justify-content: space-between;
  }
  .locality {
    font-size: 19px;
    color: grey;
  }
`;
const Container = styled.div`
  margin: 10px 7px 1px 7px;
`;
export default OrderItemContainer;
