import React, { useEffect } from "react";
import styled from "styled-components";
import Hero from "./Hero";
import NavContainer from "./NavContainer";
import { useDispatch } from "react-redux";
import { fetchAsyncStores } from "./features/store/storeSlice";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAsyncStores());
  }, [dispatch]);

  return (
    <D>
      <Hero />
      <NavContainer />
      <div>Home</div>
    </D>
  );
};

const D = styled.div``;

export default Home;
