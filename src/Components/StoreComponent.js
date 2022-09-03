import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { getAllStore } from "../features/store/storeSlice";
import { Link } from "react-router-dom";
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Inter:wght@100&display=swap');
</style>;
const StoreComponent = () => {
  const data = useSelector(getAllStore);
  return (
    <Container>
      <Content>
        {data &&
          data.map((i) => {
            return (
              <Wrap key={i._id}>
                <Link to={`/delivery/${i._id}`}>
                  <div>
                    <img
                      src={`https://ik.imagekit.io/1aafk6gx3bk/davide-cantelli-jpkfc5_d-DI-unsplash_ZjWvaEwdn.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651904388724`}
                      alt={"asdasd"}
                    />
                  </div>
                  <div className="store-name">
                    <p>{i.store_name}</p>
                  </div>
                </Link>
              </Wrap>
            );
          })}
      </Content>
    </Container>
  );
};

const Content = styled.div`
  .store-category {
    color: grey;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  .store-name > p {
    font-family: "Inter", sans-serif;
    font-size: 20px;
    display: flex;
    justify-content: center;
    font-weight: 400;
    margin: 2px 0px 2px 0px;
  }
  display: grid;
  grid-gap: 1.563rem;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  @media (max-width: 700px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
  border-radius: 0.625rem;
  cursor: pointer;
  overflow: hidden;
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0 / 69%) 0 26px 30px -10px,
    rgb(0 0 0 / 73%) 0 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &:hover {
    transform: scale(1.05);
    box-shadow: rgb(0 0 0 / 80%) 0 40px 58px -16px,
      rgb(0 0 0 / 72%) 0 30px 22px -10px;
    border-color: rgba(249, 249, 249, 0.8);
  }
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 1%;
  justify-content: space-between;
  p {
    font-family: "Inter", sans-serif;
  }
`;

export default StoreComponent;
