import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { fetchAsyncStoreData, getStoreData } from "./features/store/storeSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchAsyncStoreMenu } from "./features/store/storeSlice";
import MenuContainer from "./MenuContainer";
import Spinner from "react-spinkit";
import useWindowDimensions from "./useWindowDimensions";
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Inter:wght@100&display=swap');
</style>;
const Restaurant = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { height, width } = useWindowDimensions();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    dispatch(fetchAsyncStoreData(id));
    dispatch(fetchAsyncStoreMenu(id));
    setTimeout(() => setLoading(false), 2500);
  }, []);
  const data = useSelector(getStoreData);
  console.log(data);
  while (loading) {
    return (
      <AppLoading>
        <AppLoadingContents>
          <Spinner name="wordpress" fadeIn="none" />
        </AppLoadingContents>
      </AppLoading>
    );
  }
  return (
    <Container>
      <RestaurantHeader>
        <Top>
          <div className="title">
            <div>
              <div className="name">
                <h1>{data.store_name}</h1>
              </div>
              <div className="cusines">
                <p>Indian Thai Chinese</p>
              </div>
            </div>
            {width > 455 && (
              <div className="address">
                <div className="contact">
                  <p>+91{data.contact}</p>
                </div>
                <div className="store-add">
                  {/* <p>F-123, Ground Floor, M3M Arcade</p> */}
                  <p>{data.store_address}</p>
                </div>
                <div className="city">{data.city}</div>
              </div>
            )}
          </div>
          <hr />
          <StoreMeta>
            {data.home_delivery && (
              <div className="delivery">
                <span>
                  <b>•Home Delivery </b>
                </span>
              </div>
            )}
            {data.takeaway_available && (
              <div className="delivery">
                <span>
                  <b>•Takeaway </b>
                </span>
              </div>
            )}
            {data.seating_available && (
              <div className="delivery">
                <span>
                  <b>•Seating </b>
                </span>
              </div>
            )}
          </StoreMeta>
        </Top>
      </RestaurantHeader>
      <MenuContainer />
    </Container>
  );
};
const StoreMeta = styled.div`
  display: flex;
  .delivery {
    ${"" /* margin-left:5px; */}
    margin-right: 17px;
  }
`;
const AppLoading = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100%;
`;
const AppLoadingContents = styled.div`
  text-align: center;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Top = styled.div``;
const RestaurantHeader = styled.div`
  @media screen and (max-width: 450px) {
    .name {
      h1 {
        font-size: 50px;
        font-weight: 550;
      }
    }
  }
  @media screen and (min-width: 455px) {
    .name {
      h1 {
        font-size: 45px;
      }
    }
  }
  span {
    margin: 0px 4px 0px 4px;
  }
  .delivery {
    padding: 5px 0px 5px 0px;
  }
  padding: 30px 0px 2px 0px;
  .address {
    padding-top: 15px;
  }
  .title {
    display: flex;
    justify-content: space-between;
    padding-bottom: 10px;
  }

  .cusines {
    font-size: 18px;
    padding: 7px 1px 7px 1px;
  }
  .store-add {
    padding: 10px 1px 10px 1px;
    ${"" /* color: pink; */}
  }
  border-radius: 10px;
  ${"" /* box-shadow: rgb(0 0 0 / 69%) 0 1px 30px -10px; */}
`;

const Container = styled.div`

font-family: "Inter", sans-serif;
@media screen and (min-width: 455px) {
    margin: 0 calc(12vw + 10px);
  }

  @media screen and (max-width: 450px) {
    margin: 0 calc(1vw + 5px);
    h1 {
      font-size: 20px;
      font-weight: 500;
    }`;

export default Restaurant;
