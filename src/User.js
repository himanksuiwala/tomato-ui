import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { getUserInfo } from "./features/store/userSlice";
var moment = require("moment");
var momentutc = require("moment-timezone");

const User = () => {
  const data = useSelector(getUserInfo);
  let defaultState = true;
  const [order, setOrder] = useState();
  const [ordersContainer, setOrdersContainer] = useState(false);
  const [accountContainer, SetaccountContainer] = useState(false);
  const OrderclickHandler = async (e) => {
    setOrdersContainer(true);
    defaultState = false;
    SetaccountContainer(false);
  };

  const AccountclickHandler = async (e) => {
    SetaccountContainer(true);
    defaultState = false;
    setOrdersContainer(false);
    console.log("as");
  };
  const config = {
    headers: {
      Authorization: `Bearer ${data.token}`,
    },
  };

  useEffect(() => {
    axios.get("http://localhost:3001/cart", config).then(
      (resp) => {
        setOrder(resp.data);
        console.table("ORders:", resp.data);
      },
      (e) => console.log(e)
    );
  }, []);
  // var dateComponent = moment("2011-04-11T10:20:30Z").utc().format("YYYY-MM-DD");
  var timeComponent = moment("2011-04-11T10:20:30Z").utc().format("HH:mm:ss");

  console.log("A", timeComponent);

  return (
    <Container>
      <Header>
        <h1>My Account</h1>
      </Header>
      <BottomContainer>
        <OptionsContainer>
          <div onClick={OrderclickHandler} className="orders">
            <h1>Your Orders</h1>
          </div>
          <div onClick={AccountclickHandler} className="Account">
            <h1>Account Details</h1>
          </div>
        </OptionsContainer>
        <hr />
        <Body>
          {ordersContainer ? (
            <MyOrders>
              <OrderItemContainer>
                {order.map((i) => {
                  return (
                    <OrderItem>
                      <div className="top">
                        <div className="restro-name">
                          <span className="name">{i.store_id.store_name}</span>
                          <span className="locality"> {i.store_id.city}</span>
                        </div>
                        <div className="content">
                          <div className="date">
                            <div className="order-tag">
                              <p>Ordered on</p>
                            </div>
                            <span>
                              {" "}
                              {moment(
                                i.date,
                                "YYYY-MM-DDTHH:mm:ss.SSS[Z]"
                              ).format("DD")}{" "}
                            </span>
                            <span>
                              {moment(
                                i.date,
                                "YYYY-MM-DDTHH:mm:ss.SSS[Z]"
                              ).format("MMM")}{" "}
                            </span>
                            <span>
                              {moment(
                                i.date,
                                "YYYY-MM-DDTHH:mm:ss.SSS[Z]"
                              ).format("YYYY")}{" "}
                            </span>
                            <span>
                              at{" "}
                              {momentutc(i.date)
                                .tz("Asia/Kolkata")
                                .format("HH:mm a")}{" "}
                            </span>
                          </div>
                        </div>
                      </div>
                    </OrderItem>
                  );
                })}
              </OrderItemContainer>
            </MyOrders>
          ) : (
            <accountContainer>Account</accountContainer>
          )}
        </Body>
      </BottomContainer>
    </Container>
  );
};

const OrderItem = styled.div`
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
const OrderItemContainer = styled.div`
  margin: 10px 7px 1px 7px;
`;
const DefaultContainer = styled.div``;
const Account = styled.div``;
const MyOrders = styled.div``;
const Body = styled.div``;
const OptionsContainer = styled.div`
  display: flex;
  margin-top: 40px;
  margin-bottom: 10px;
  .orders {
    margin: 0px 10px 0px 10px;
  }

  .Account {
    margin: 0px 10px 0px 10px;
  }
`;
const BottomContainer = styled.div``;
const Header = styled.div`
  margin-top: 40px;
  h1 {
    font-size: 80px;
  }
`;

const Container = styled.div`

font-family: "Inter", sans-serif;

@media screen and (min-width: 601px) {
    margin: 0 calc(12vw + 10px);
  }
  @media screen and (max-width: 600px) {
    h1 {
      font-size: 20px;
      font-weight: 500;
    }`;

export default User;
