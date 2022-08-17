import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import AddItemStore from "./AddItemStore";
import { fetchAsyncStoreMenu } from "./features/store/storeSlice";
import {
  fetchAsyncStoreLogout,
  fetchAsyncStoreOrders,
  getStoreData,
} from "./features/store/userSlice";
import MenuContainer from "./MenuContainer";
import OrderItemContainer from "./OrderItemContainer";
const StoreDashboard = () => {
  const dispatch = useDispatch();
  let defaultState = true;
  const [ordersContainer, setOrdersContainer] = useState(false);
  const [accountContainer, SetaccountContainer] = useState(false);
  const [addItemInput, setAddItemInput] = useState(false);
  const store_data = useSelector(getStoreData);
  console.log(store_data);
  const logOutHandler = async (e) => {
    dispatch(fetchAsyncStoreLogout(store_data.token));
  };
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
  const AddItemHandler = (e) => {
    {
      !addItemInput && setAddItemInput(true);
      addItemInput && setAddItemInput(false);
    }
  };
  const config = {
    headers: {
      Authorization: `Bearer ${store_data.token}`,
    },
  };
  useEffect(() => {
    dispatch(fetchAsyncStoreOrders(config));
    dispatch(fetchAsyncStoreMenu(store_data.checkforStore._id));
  }, []);

  const fromChild = (data) => {
    if (data == "cancel") {
      AddItemHandler();
    }
  };

  return (
    <Container>
      <AddItem>{addItemInput && <AddItemStore flag={fromChild} />}</AddItem>
      <Header>
        <h1>Store Dashboard</h1>
        <div className="logout" onClick={logOutHandler}>
          <h3>Logout</h3>
        </div>
      </Header>
      <BottomContainer>
        <OptionsContainer>
          <div onClick={OrderclickHandler} className="orders">
            <h1>Orders</h1>
          </div>
          <div onClick={AccountclickHandler} className="Account">
            <h1>Menu</h1>
          </div>
        </OptionsContainer>
        <hr />
        <Body>
          {ordersContainer ? (
            <MyOrders>
              <OrderItemContainer />
            </MyOrders>
          ) : (
            <AccountContainer>
              <h2 className="add-item" onClick={AddItemHandler}>
                Add/Remove Items
              </h2>
              <MenuContainer location={"store"} />
            </AccountContainer>
          )}
        </Body>
      </BottomContainer>
    </Container>
  );
};
const AddItemContainer = styled.div``;
const AddItem = styled.div``;
const AccountContainer = styled.div`
  .add-item {
    margin-left: 19px;
    margin-top: 5px;
  }
`;
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
  display: flex;
  justify-content: space-between;
  .logout {
    margin-top: 10px;
    text-decoration: underline;
  }
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

export default StoreDashboard;
