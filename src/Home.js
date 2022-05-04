import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useDispatch } from "react-redux";
import { fetchAsyncStores } from "./features/store/storeSlice";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAsyncStores());
  },[dispatch]);

  return (
    <D>
      <div>Home</div>
    </D>
  );
};

const D = styled.div`
  margin: 10px;
`;

export default Home;
