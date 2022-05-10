import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getCartitems } from "./features/store/cartSlice";
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Inter:wght@100&display=swap');
</style>;
const Cart = () => {
  const data = useSelector(getCartitems);
  console.log(data);

  return (
    <Container>
      <CartHeader>
        <h1>Cart</h1>
      </CartHeader>
    </Container>
  );
};
const CartHeader = styled.div`
  font-size: 70px;
  margin-top: 50px;
  font-family: "Inter", sans-serif;
`;
const Container = styled.div`
  @media screen and (min-width: 601px) {
    margin: 0 calc(12vw + 10px);
  }
`;
export default Cart;
