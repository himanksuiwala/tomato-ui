import React, { useState } from "react";
import styled from "styled-components";
import { MdShoppingCart } from "react-icons/md";
import { useSelector } from "react-redux";
import { getCartQty } from "./features/store/cartSlice";
import { Link, Navigate } from "react-router-dom";
import { getUserInfo } from "./features/store/userSlice";
const NavBar = () => {
  const quantity = useSelector(getCartQty);
  const user = useSelector(getUserInfo);
  const [isUser, setUser] = useState(false);

  console.log("loc", window.location);
  return (
    <NavContainer>
      <Link to={"/"}>
        <div className="title">
          <h1>
            <i>Tomato</i>🍅
          </h1>
        </div>
      </Link>

      <Padder>
        <Link to={"/cart"}>
          <div className="cart">
            <h1>
              <MdShoppingCart />
            </h1>
            <p>({quantity})</p>
          </div>
        </Link>
        <Link to={"/user_account"}>
          <div className="account">
            {user == undefined || user.length == 0 ? (
              <h2>Login</h2>
            ) : (
              <h2>My Account</h2>
            )}
          </div>
        </Link>
      </Padder>
    </NavContainer>
  );
};
const Padder = styled.div`
  display: flex;
  .account {
    padding-left: 50px;
    margin-bottom: 5px 2px 10px 2px;
  }
  h2 {
    font-weight: 500;
    margin-top: 15px;
  }
`;
const NavContainer = styled.nav`
  height: 70px;
  background: #090b13;
  display: flex;
  justify-content: space-between;

  .title {
    font-size: 28px;
    margin: 2px;
  }
  .cart {
    display: flex;
    h1 {
      padding-top: 15px;
    }
    font-size: 22px;
    margin: 2px 5px 5px 5px;
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
