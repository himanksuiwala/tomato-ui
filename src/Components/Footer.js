import React from "react";
import styled from "styled-components";
import { GoMarkGithub } from "react-icons/go";

export const Footer = () => {
  return (
    <Container>
      <InnerContainer>
        <Title>
          <div className="title">
            <h1>
              <i>Tomato</i>🍅
            </h1>
            <h2>
              {" "}
              <div className="git-icon">
                <a
                  target="_blank"
                  href="https://github.com/himanksuiwala/tomato"
                >
                  <GoMarkGithub />
                </a>
              </div>
            </h2>
          </div>
          <div className="tagline">
            <h2>A Food Ordering App</h2>
          </div>
        </Title>
        <Signature>
          <span>Made with 💗 by Himank Suiwala </span>
          <p>
            {" "}
            <a target="_blank" href="https://github.com/himanksuiwala/">
              <GoMarkGithub />
            </a>
          </p>
        </Signature>
      </InnerContainer>
    </Container>
  );
};
const InnerContainer = styled.div`
  padding-top: 22px;
`;
const Signature = styled.div`
  display: flex;
  margin-top: 30px;
  margin-bottom: 10px;
  align-items: center;
  justify-content: center;
  padding: 5px;
  span {
    font-size: 20px;
    line-height: 170%;
    padding-left: 5px;
  }
  p {
    padding-top: 4px;
    padding-left: 7px;
  }
`;

const Container = styled.div`
  color: white;

  background: rgb(9, 11, 19);
  height: 32vh;
  padding: 0 calc(2vw + 10px);
  h3 {
    line-height: 100%;
  }
  a,
  a:hover,
  a:active,
  a:visited {
    color: white;
  }
`;

const FooterCard = styled.div`
  background-color: rgb(9, 11, 19);

  height: 35vh;
  padding: 10px;
`;

const Title = styled.div`
  h1 {
    font-size: 50px;
  }
  .git-icon {
    margin-top: 24px;
    margin-left: 14px;
    font-size: 30px;
  }
  .tagline {
    padding: 10px 0px 0px 7px;
    font-weight: 500;
    display: flex;
  }
  .title {
    display: flex;
  }
`;
