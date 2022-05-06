import React from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Inter:wght@100&display=swap');
</style>;
const NavContainer = () => {
  return (
    <Container>
      <Header>
        <div className="header">
          <h3>
            <i>How would you like to eat today?</i>
          </h3>
        </div>
      </Header>
      <OptionsContainer>

        <div className="option">
          <Link to={`/delivery`}>
            <div className="online">
              <div className="online-image">
                <img src="https://ik.imagekit.io/1aafk6gx3bk/fidel-fernando-DKWZrV0Ty14-unsplash_EepN4MpgPv.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651760681917" />
              </div>
              <div className="online-header">
                <p>Order Online</p>
              </div>
            </div>
          </Link>
          <Link to={`/restaurants`}>
            <div className="restro">
              <div className="online-image">
                <img src="https://ik.imagekit.io/1aafk6gx3bk/paul-griffin-WWST6E8LxeE-unsplash_qjOdyltzu.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651760571781" />
              </div>
              <div className="online-header">
                <p>Dine Out</p>
              </div>
            </div>
          </Link>
        </div>
      </OptionsContainer>
    </Container>
  );
};

const OptionsContainer = styled.div`
  height: 300px;
  ${"" /* background: pink; */}
  ${"" /* display: flex; */}
  
  .option {
    margin-top: 20px;
    display: flex;
    ${'' /* display: flex; */}
  ${'' /* flex: 2 0 175px; */}
    margin: auto;
    ${'' /* padding:100px; */}
    justify-content: space-between; 
    padding: auto;
    flex-wrap: wrap;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    ${"" /* filter: brightness(70%); */}
    border-radius: 10px;
  }

  p {
    font-weight: 700;
  }
  .online {
    ${"" /* margin-top:20px; */}
    ${"" /* background: red; */}
    border-radius: 10px;
    margin: auto;
    -moz-box-shadow: 0 0 3px #ccc;
    -webkit-box-shadow: 0 0 3px #ccc;
    box-shadow: 0 3px 20px rgb(0 0 0 / 0.2);
  }

  .restro {
    -moz-box-shadow: 0 0 3px #ccc;
    box-shadow: 0 3px 30px rgb(0 0 0 / 0.2);
    -webkit-box-shadow: 0 0 3px #ccc;
    box-shadow: 0 0 3px #ccc;
    margin: auto;
    border-radius: 10px;
  }
  .online-image {
    width: 320px;
    height: 230px;
    padding: 10px;
  }

  .online-header {
    text-align: center;
    padding-bottom: 09px;
  }
`;

const Header = styled.div`
  .header {
    padding: 10px 30px 10px 30px;
  }
`;

const Container = styled.div`
  padding-top: 15px;
  padding: 0 calc(4.5vw + 0.313rem);
  font-weight: 800;
  font-family: "Inter", sans-serif;
  background: rgb(245, 245, 243);
  height: 400px;
  ${
    "" /* margin: auto;
  width: 50%; */
  }
  .header {
    margin: auto;
    width: 50%;
    text-align: center;
  }

  @media screen and (min-width: 601px) {
    h3 {
      font-size: 30px;
    }
  }

  @media screen and (max-width: 600px) {
    h3 {
      font-size: 18px;
    }
    .header {
      width: 80vw;
    }
  }
`;

export default NavContainer;
