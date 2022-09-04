import React from "react";
import styled from "styled-components";
import useWindowDimensions from "../utilities/useWindowDimensions";
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Inter:wght@100&display=swap');
</style>;
const Hero = () => {
  const { height, width } = useWindowDimensions();
  return (
    <>
      {width > 455 ? (
        <Container>
          <div className="text-container">
            <div className="container">
              <h1>Discover your Favourite Food & Restaurants</h1>
            </div>
          </div>
        </Container>
      ) : (
        <MobileContainer>
          <img
            src="https://ik.imagekit.io/1aafk6gx3bk/lily-banse--YHSwy6uqvk-unsplash_zD36zAT45.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651674823983"
            alt="Hero"
          />
          <div class="centered">
            <div className="text">
              <h1>Discover your Favourite Food & Restaurants</h1>
            </div>
          </div>
        </MobileContainer>
      )}
    </>
  );
};

const MobileContainer = styled.div`
  position: relative;
  text-align: center;
  color: white;
  height: 450px;
  .text {
    text-align: left;
  }
  .centered {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 30px;
  }
  img {
    width: 99%;
    height: 100%;
    object-fit: cover;
    filter: brightness(50%);
    -webkit-filter: brightness(70%);
    -moz-filter: brightness(70%);
    -o-filter: brightness(70%);
    -ms-filter: brightness(70%);
    overflow-x: hidden;
  }
`;

const Container = styled.div`
  height: 450px;
  color: white;
  background: no-repeat center/100%
    url(https://ik.imagekit.io/1aafk6gx3bk/lily-banse--YHSwy6uqvk-unsplash_zD36zAT45.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651674823983);
  .container {
    padding-top: 100px;
    h1 {
      font-size: 70px;
    }
    margin-top: 60px;
  }
  .text-container {
    display: flex;
    justify-content: center;
  }
`;

export default Hero;
