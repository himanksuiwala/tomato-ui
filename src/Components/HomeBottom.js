import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HomeBottom = () => {
  return (
    <Container>
      <DeliveryContainer>
        <Content>
          <h1 className="hungry">Hungry ?? </h1>
          <h1>Order your food and Get it delivered to your Doorstep</h1>
        </Content>
        <Link to={"/delivery"}>
          <Explore>
            <h1>Explore Restaurants</h1>
          </Explore>
        </Link>
      </DeliveryContainer>
      <hr />
      <StoreContainer>
        <Content>
          <h1 className="store">Own a Store ? </h1>
          <h1>Join us and get more customers</h1>
        </Content>
        <Link to={"/store_auth"}>
          <Explore>
            <h1>Add Restaurant</h1>
          </Explore>
        </Link>
      </StoreContainer>
    </Container>
  );
};
const StoreContainer = styled.div`
  margin-top: 50px;
  padding-bottom: 80px;
  .store {
    font-size: 60px;
  }
`;
const DeliveryContainer = styled.div``;
const Explore = styled.div`
  display: flex;
  border-radius: 6px;
  justify-content: center;
  background: #fd5c63;
  height: 70px;
  padding-top: 15px;
`;
const Content = styled.div`
  padding: 5px 0px 10px 0px;
  .hungry {
    font-size: 65px;
  }
`;
const Container = styled.div`
  background: #fbceb1;

  @media screen and (min-width: 455px) {
    padding: 0px 150px 0px 150px;
  }
  @media screen and (max-width: 450px) {
    padding: 0 calc(1vw + 5px);
    padding-top:20px;
    h1{
        font-size:30px;
    }
  }

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
  a,
  a:hover,
  a:active,
  a:visited {
    color: black;
    text-decoration: none;
  }
`;

export default HomeBottom;
