import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import Spinner from "react-spinkit";
import { fetchAsyncStores } from "../features/store/storeSlice";
import RestContainer from "../Components/RestContainer";
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Inter:wght@100&display=swap');
</style>;
const Delivery = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  document.title = "Order Food Online 🍅";
  useEffect(() => {
    dispatch(fetchAsyncStores());
    setTimeout(() => setLoading(false), 2500);
  }, []);

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
    <>
      <Header>
        <div className="hero">
          <img src="https://ik.imagekit.io/1aafk6gx3bk/brooke-lark-4J059aGa5s4-unsplash_BKc7kymji.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651822489151" />
          <div className="header">
            <h1>Order your Favourite Food</h1>
          </div>
        </div>
      </Header>
      <Container>
        <ShadowContainer>
          <BottomHeader>
            <div className="bottom">
              <h1>Found the following Restaurants in your Area</h1>
            </div>
          </BottomHeader>
          <RestContainer />
        </ShadowContainer>
      </Container>
    </>
  );
};

const ShadowContainer = styled.div`
  @media screen and (min-width: 601px) {
    box-shadow: 0 3px 20px rgb(0 0 0 / 0.2);
  }
`;

const BottomHeader = styled.div`
  h1 {
    font-weight: 700;
  }
  .bottom {
    margin: 5px 20px 0px 20px;
    padding: 7px;
  }
`;

const Container = styled.div`
  @media screen and (min-width: 601px) {
    padding: 0 calc(12vw + 10px);
  }

  @media screen and (max-width: 450px) {
    h1 {
      font-size: 30px;
      font-weight: 650;
    }
  }
`;
const Header = styled.div`
  color: white;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(90%);
  }
  .hero {
    position: relative;
    height: 290px;
  }
  .header {
    h1 {
      font-weight: 800;
      font-size: 55px;
      font-family: "Inter", sans-serif;
    }
    margin: 30px 10px 10px 20px;
    position: absolute;
    @media screen and (min-width: 601px) {
      padding-top: 70px;
    }
    top: 8px;
    left: 16px;
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
export default Delivery;
