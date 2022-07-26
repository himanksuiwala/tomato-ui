import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { fetchAsyncUserOrder, getUserInfo } from "./features/store/userSlice";
import OrderItemContainer from "./OrderItemContainer";
const User = () => {
  const data = useSelector(getUserInfo);
  const dispatch = useDispatch();
  let defaultState = true;
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
  };
  const config = {
    headers: {
      Authorization: `Bearer ${data.token}`,
    },
  };

  useEffect(() => {
    dispatch(fetchAsyncUserOrder(config));
  }, []);
  console.log("A", data);

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
              <OrderItemContainer />
            </MyOrders>
          ) : (
            <accountContainer>Account</accountContainer>
          )}
        </Body>
      </BottomContainer>
    </Container>
  );
};

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
