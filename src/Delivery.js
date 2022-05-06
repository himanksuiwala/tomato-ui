import React from "react";
import styled from "styled-components";
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Inter:wght@100&display=swap');
</style>;
const Delivery = () => {
  return (
    <>
      <Header>
        <div className="hero">
          <img src="https://ik.imagekit.io/1aafk6gx3bk/brooke-lark-4J059aGa5s4-unsplash_BKc7kymji.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651822489151" />
          <div className="header">
            <h1>Order your Favourite Food</h1>
          </div>
        </div>
      </Header>
      <Container>
        <ShadowContainer>
          <BottomHeader>
            <div className="bottom">
              <h1>Found the following Restaurants in your Area</h1>
            </div>
          </BottomHeader>
        </ShadowContainer>
      </Container>
    </>
  );
};

const ShadowContainer = styled.div`
@media screen and (min-width: 601px){
    box-shadow: 0 3px 20px rgb(0 0 0 / 0.2);
}
`

const BottomHeader = styled.div`
  h1 {
    font-weight: 700;
  }
  .bottom {
    margin: 5px 20px 0px 20px;
    padding:7px
  }
  
`;

const Container = styled.div`
  @media screen and (min-width: 601px) {
    padding: 0 calc(12vw + 10px);
  }

  @media screen and (max-width: 600px) {
    h1 {
      font-size: 20px;
      font-weight: 500;
    }
  }
`;
const Header = styled.div`
  ${"" /* height: 350px; */}
  color: white;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(90%);
  }

  .hero {
    position: relative;
    height: 290px;
  }
  .header {
    h1 {
      font-weight: 800;
      font-size: 55px;
      font-family: "Inter", sans-serif;
    }
    margin: 30px 10px 10px 20px;
    position: absolute;
    @media screen and (min-width: 601px) {
      padding-top: 70px;
    }
    top: 8px;
    left: 16px;
  }
`;
export default Delivery;
