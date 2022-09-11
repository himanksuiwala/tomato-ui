import React from "react";
import styled from "styled-components";
import StoreComponent from "./StoreComponent";
const RestContainer = () => {
  return (
    <Container>
      <StoreComponent />
    </Container>
  );
};

const Container = styled.div`
  padding: 7px;
  margin: 5px 20px 0px 25px;
`;

export default RestContainer;
