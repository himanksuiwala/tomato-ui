import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "react-spinkit";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import {
  fetchAsyncUserLogOut,
  fetchAsyncUserOrder,
  getUserInfo,
} from "../features/store/userSlice";
import OrderItemContainer from "./OrderItemContainer";
import useBackListener from "../utilities/useBackListener";
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Inter:wght@100&display=swap');
</style>;
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
  document.title = "My Account 🍅";
  useBackListener(({ location }) => {
    navigate("/", { replace: true });
  });

  const logOutHandler = async (e) => {
    dispatch(fetchAsyncUserLogOut(data.token));
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

  // let slice_name = " ";
  // for (let i = 0; i < data.checkforUser.name.length; i++) {
  //   if (data.checkforUser.name[i] == " ") break;
  //   else {
  //     slice_name += data.checkforUser.name[i];
  //   }
  // }
  while (loading) {
    return (
      <AppLoading>
        <AppLoadingContents>
          {<Spinner name="wordpress" fadeIn="none" />}
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
            <span className="span">{data.checkforUser.name}</span>
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
  @media screen and (max-width: 450px) {
    margin: 0 calc(2vw + 5px);
  }
  margin-top:12px;
  padding: 4px;
  .sliced-name {
    font-weight:500;
    .spa {
      font-weight: 600;
      font-size: 40px;
    }
    font-size: 35px;
  }
  }
`;
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
  @media screen and (max-width: 450px) {
    margin: 0 calc(2vw + 5px);
    margin-top: 10px;
    h1 {
      font-size: 70px;
    }
  }
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
  @media screen and (min-width: 455px) {
    margin: 0 calc(12vw + 10px);
  }
  @media screen and (max-width: 450) {
    h1 {
      font-size: 20px;
      font-weight: 400;
    }
  }
`;

export default User;
