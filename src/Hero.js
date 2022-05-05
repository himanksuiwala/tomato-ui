import React from "react";
import styled from "styled-components";
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Inter:wght@100&display=swap');
</style>;
const Hero = () => {
  return (
    <HeroComponent>
      <HeroImage>
        <div className="hero">
          <img
            className="hero-image"
            src="https://ik.imagekit.io/1aafk6gx3bk/lily-banse--YHSwy6uqvk-unsplash_zD36zAT45.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651674823983"
          />
        </div>
        <HeroHeader>
          <div className="header">
            <h1>Discover your Favourite Food & Restaurants</h1>
          </div>
        </HeroHeader>
      </HeroImage>
    </HeroComponent>
  );
};
const HeroImage = styled.div``;
const HeroHeader = styled.div``;
const HeroComponent = styled.div`
  color:white;
  ${"" /* height: 20px; */}
  @media screen and (min-width: 601px) {
    .header{
      padding:10px 30px 50px 30px;
    }
    h1 {
      font-size: 60px;
    }
  }

  @media screen and (max-width: 600px) {
    h1 {
      font-size: 50px;
    }
  }
  
  .header{
    h1{
      font-weight:800;
      font-family: 'Inter', sans-serif;
    }
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .hero{
    height:490px;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(70%);
  }
  }
`;
export default Hero;
