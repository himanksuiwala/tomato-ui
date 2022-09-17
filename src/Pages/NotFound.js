import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
export const NotFound = () => {
    document.title = "Tomato -Not Found";
  return (
    <>
      <Header>
        <div className="header">
          <h2>Nothin' getting cooked here ! </h2>
        </div>
      </Header>
      <Container>
        <Link to={"/"}>
          <div className="image">
            <img
              src="https://media4.giphy.com/media/l41lPX79K0l6sIvni/giphy.gif?cid=ecf05e4762zcpx9kamfx6ld4yi4mzx5jb4gypl1amwbfhk4r&rid=giphy.gif&ct=g"
              alt="Not Found"
            />
          </div>
        </Link>
      </Container>
    </>
  );
};
const Header = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px 7px 10px 7px;
  font-size: 30px;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  .image {
    height: auto;
  }
  img {
    max-width: 100%;
    max-height: 100%;
  }
  margin-bottom: 70px;
`;
