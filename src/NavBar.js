import React from "react";
import styledComponents from "styled-components";
import styled from "styled-components";
import { MdShoppingCart } from "react-icons/md";
import { useSelector } from "react-redux";
import { getCartQty } from "./features/store/cartSlice";
const NavBar = () => {
  const quantity = useSelector(getCartQty);
  console.log(quantity);
  return (
    <NavContainer>
      <div className="title">
        <h1>
          <i>Tomato</i>🍅
        </h1>
      </div>
      <div className="cart">
        <h1>
          <MdShoppingCart />
        </h1>
        <p>({quantity})</p>
      </div>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  height: 70px;
  background: #090b13;
  display: flex;
  justify-content: space-between;

  .title {
    font-size: 32px;
    ${"" /* padding:10px 0px 15px 0px; */}
  }
  .cart {
    display: flex;
    h1 {
      padding-top: 15px;
    }
    font-size: 25px;
    margin-right: 150px;
  }
  align-items: center;
  padding: 0 60px;
  overflow-x: hidden;
  color: white;
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
    color: white;
    text-decoration: none;
  }
`;
export default NavBar;
