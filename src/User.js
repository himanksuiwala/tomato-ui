import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "react-spinkit";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import {
  fetchAsyncUserLogOut,
  fetchAsyncUserOrder,
  getUserInfo,
} from "./features/store/userSlice";
import OrderItemContainer from "./OrderItemContainer";
import useBackListener from "./useBackListener";
const User = () => {
  const data = useSelector(getUserInfo);
  const dispatch = useDispatch();
  let navigate = useNavigate();
  let defaultState = true;
  const [loading, setLoading] = useState(true);
  const [ordersContainer, setOrdersContainer] = useState(true);
  const [accountContainer, SetaccountContainer] = useState(false);
  const OrderclickHandler = async (e) => {
    setOrdersContainer(true);
    defaultState = false;
    SetaccountContainer(false);
  };

  useBackListener(({ location }) => {
    console.log("Navigated Back", { location });
    navigate("/", { replace: true });
  });

  const logOutHandler = async (e) => {
    dispatch(fetchAsyncUserLogOut(data.token));
    console.log("Logout");
    navigate("/", { replace: true });
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
    setTimeout(() => setLoading(false), 3000);
  }, []);

  let slice_name = " ";
  for (let i = 0; i < data.checkforUser.name.length; i++) {
    if (data.checkforUser.name[i] == " ") break;
    else {
      slice_name += data.checkforUser.name[i];
    }
  }
  console.log(slice_name);
  while (loading) {
    return (
      <AppLoading>
        <AppLoadingContents>
          <Spinner name="wordpress" fadeIn="none" />
        </AppLoadingContents>
      </AppLoading>
    );
  }
  return (
    <Container>
      <Header>
        <h1>My Account</h1>
        <div className="logout" onClick={logOutHandler}>
          <h3>Logout</h3>
        </div>
      </Header>
      <UserContainer>
        {data.token && (
          <div className="sliced-name">
            <span className="spa">Hi!</span>
            <span className="span">{slice_name}</span>
          </div>
        )}
      </UserContainer>
      <BottomContainer>
        <OptionsContainer>
          <div onClick={OrderclickHandler} className="orders">
            <h1>Your Orders</h1>
          </div>
          {/* <div onClick={AccountclickHandler} className="Account">
            <h1>Profile</h1>
          </div> */}
        </OptionsContainer>
        <hr />
        <Body>
          {ordersContainer ? (
            <MyOrders>
              <OrderItemContainer />
            </MyOrders>
          ) : (
            ""
            /* <AccountContainer>
              <ProfileContainer />
            </AccountContainer> */
          )}
        </Body>
      </BottomContainer>
    </Container>
  );
};
const UserContainer = styled.div`
  padding: 7px;
  
  span {
    font-size: 20px;
  }
  .sliced-name {
    .span {
      font-size: 30px;
      font-weight: 600;
    }
  }
`;
const AccountContainer = styled.div``;
const MyOrders = styled.div``;
const Body = styled.div``;
const OptionsContainer = styled.div`
  display: flex;
  margin-top: 25px;
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
const AppLoading = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100%;
`;
const AppLoadingContents = styled.div`
  text-align: center;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
