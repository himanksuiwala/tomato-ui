import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { getUserInfo } from "./features/store/userSlice";
const User = () => {
  const data = useSelector(getUserInfo);
  const [orders, setOrders] = useState(true);
  const clickHandler = async (e) => {
    setOrders(false);
  };
  const config = {
    headers: {
      Authorization: `Bearer ${data.token}`,
    },
  };
  useEffect(() => {
    axios.get("http://localhost:3001/cart", config).then(
      (resp) => {
        console.log("ORders:", resp.data);
      },
      (e) => console.log(e)
    );
  }, []);
  return (
    <Container>
      <Header>
        <h1>My Account</h1>
      </Header>
      <BottomContainer>
        <OptionsContainer>
          <div className="orders">
            <h1 onClick={clickHandler}>Your Orders</h1>
          </div>
          <div className="Account">
            <h1>Account Details</h1>
          </div>
        </OptionsContainer>
        <hr />
        <Body>
          {orders ? (
            <MyOrders>MY IRDRE</MyOrders>
          ) : (
            <Account>Account Details</Account>
          )}
        </Body>
      </BottomContainer>
    </Container>
  );
};

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
