import React, { useState } from "react";
import styled from "styled-components";
import { MdShoppingCart } from "react-icons/md";
import { useSelector } from "react-redux";
import { getCartQty } from "./features/store/cartSlice";
import { Link, Navigate } from "react-router-dom";
import { getStoreData, getUserInfo } from "./features/store/userSlice";
const NavBar = ({ is_Store }) => {
  const quantity = useSelector(getCartQty);
  const user = useSelector(getUserInfo);
  const store_data = useSelector(getStoreData);
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
        {store_data.token ? (
          <Link to={"/store_dashboard"}>
            <div className="store_dashboard">
              <h2>Dashboard</h2>
            </div>
          </Link>
        ) : (
          <>
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
          </>
        )}
      </Padder>
    </NavContainer>
  );
};
const Padder = styled.div`
  @media screen and (max-width: 450px) { //For MOBILE
    margin-right: 10px;
    font-size: 13px;
    h1 {
      font-size: 20px;
    }
    p {
      font-size: 17px;
    }
    .account {
      margin-left: 7px;
      margin-bottom: 5px 2px 10px 2px;
      h2 {
        font-weight: 500;
        margin-top: 15px;
      }
    }
    .store_dashboard {
      font-size: 20px;
    }
  }
  display: flex;
  @media screen and (min-width: 455px) {
    .account {
      padding-left: 50px;
      margin-bottom: 5px 2px 10px 2px;
      h2 {
        font-weight: 500;
        margin-top: 15px;
      }
    }
    .store_dashboard {
      font-size: 20px;
    }
  }
`;
const NavContainer = styled.nav`
  @media screen and (min-width: 455px) {
    padding: 0px 20px 0px 20px;
    .title {
      font-size: 28px;
    }
  }
  @media screen and (max-width: 450px) {
    padding: 0px 10px 0px 20px;

    .title {
      font-size: 25px;
    }
  }
  height: 70px;
  background: #090b13;
  display: flex;
  justify-content: space-between;

  .title {
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
  ${"" /* padding: 0 60px; */}
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
