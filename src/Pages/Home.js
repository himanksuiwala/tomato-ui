import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Hero from "../Components/Hero";
import { useDispatch } from "react-redux";
import { fetchAsyncStores } from "../features/store/storeSlice";
import Spinner from "react-spinkit";
import HomeBottom from "../Components/HomeBottom";
const Home = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  document.title = "Tomato 🍅";
  useEffect(() => {
    dispatch(fetchAsyncStores());
    setTimeout(() => setLoading(false), 3000);
  }, [dispatch]);

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
    <D>
      <Hero />
      <HomeBottom />
    </D>
  );
};

const D = styled.div``;
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

export default Home;
