import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { getUserOrders, getStoreOrder } from "../features/store/userSlice";
import useWindowDimensions from "../utilities/useWindowDimensions";
var moment = require("moment");
var momentutc = require("moment-timezone");
const OrderItemContainer = () => {
  const { height, width } = useWindowDimensions();
  const fetchedUser = useSelector(getUserOrders);
  const fetchedStore = useSelector(getStoreOrder);
  let order = [];
  {
    fetchedStore.length ? (order = fetchedStore) : (order = fetchedUser);
  }
  const sorted_order = order.slice();
  sorted_order.reverse();

  return (
    <Container>
      {order.length == 0 ? (
        <Empty>
          <div>
            <div>
              <h1>You haven't ordered Anything</h1>
            </div>
            <div className="browse">
              <h3>
                Browse Restaurants <Link to={"/delivery"}>here</Link>
              </h3>
            </div>
          </div>
        </Empty>
      ) : (
        sorted_order.map((i) => {
          return (
            <OrderItem>
              <div className="top">
                {fetchedStore.length ? (
                  ""
                ) : (
                  <div className="restro-name">
                    {i.store_id && (
                      <span className="name">{i.store_id.store_name}</span>
                    )}
                    {i.store_id && (
                      <span className="locality"> {i.store_id.city}</span>
                    )}
                  </div>
                )}

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
                      {moment(i.date, "YYYY-MM-DDTHH:mm:ss.SSS[Z]").format(
                        "MMM"
                      )}{" "}
                    </span>
                    <span>
                      {moment(i.date, "YYYY-MM-DDTHH:mm:ss.SSS[Z]").format(
                        "YYYY"
                      )}{" "}
                    </span>
                    {width > 455 && (
                      <span>
                        at{" "}
                        {momentutc(i.date).tz("Asia/Kolkata").format("HH:mm a")}{" "}
                      </span>
                    )}
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

                {fetchedStore.length ? (
                  width > 455 && (
                    <div className="address">
                      <div className="add-tag">
                        <div className="add-tag-add">Ordered by:</div>
                        <span>{i.user_id.name}</span>
                      </div>
                    </div>
                  )
                ) : (
                  <Address>
                    {width > 455 && (
                      <div className="address">
                        <div className="add-tag">
                          <span className="add-tag-add">Delivery Address:</span>
                          <span>{i.delivery_address}</span>
                        </div>
                      </div>
                    )}
                  </Address>
                )}

                <div className="order-total">
                  <div className="order-payment">
                    {width > 455 ? (
                      <div className="order-payment-tag">
                        <p>Mode of payment</p>
                      </div>
                    ) : (
                      <div className="order-payment-tag">
                        <p>Payment</p>
                      </div>
                    )}
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
        })
      )}
    </Container>
  );
};
const Address = styled.div``;
const Empty = styled.div`
  .browse {
    margin-top: 13px;
  }
  display: flex;
  padding-top: 10px;
  justify-content: center;
  margin-bottom: 200px;
`;
const OrderItem = styled.div`
  @media screen and (max-width: 450px) {
    font-size: 15.5px;
    .order-payment {
      margin: 8px 0px 7px 0px;
    }
    .order-total {
      width: 31vw;
    }
    .order-total-tag {
      display: flex;
      justify-content: center;
      font-weight: 700;
    }
    .content {
      padding: 6px 0px 4px 07px;
      font-weight: 700;
      margin-right: 19px;
    }
  }
  @media screen and (min-width: 455px) {
    font-size: 15.5px;
    .content {
      padding: 2px 0px 6px 7px;
      font-weight: 600;
    }
    .order-payment {
      margin: 20px 1px 20px 1px;
    }
    .order-total-tag {
      display: flex;
      justify-content: center;
      font-weight: 700;
      width: 170px;
    }
  }
  margin: 10px 0px 7px 0px;
  .add-tag-add {
    display: flex;
    justify-content: center;
  }
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
  .payment-type {
    display: flex;
    justify-content: center;
  }
  .line {
    margin: 7px 5px 1px 5px;
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
  margin: 10px 15px 1px 15px;
`;
export default OrderItemContainer;
