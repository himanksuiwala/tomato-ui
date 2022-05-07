import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import StoreComponent from "./StoreComponent";
const RestContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(fetchAsyncStores());
  }, []);

  return (
    <Container>
      <StoreComponent />
    </Container>
  );
};

const StoreContain = styled.div``;
const Container = styled.div`
  padding: 7px;
  margin: 5px 20px 0px 25px;
`;
export default RestContainer;
