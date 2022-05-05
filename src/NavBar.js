import React from "react";
import styledComponents from "styled-components";
import styled from "styled-components";
const NavBar = () => {
  return (
    <Nav>
      <div className="title">
        <h1><i>Tomato🍅</i></h1>
      </div>
    </Nav>
  );
};

const Nav = styled.nav`
  height: 70px;
  background: #090b13;
  display: flex;
  .title{
      font-size:32px;
      ${'' /* padding:10px 0px 15px 0px; */}
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
