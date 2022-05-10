import React, { useEffect } from "react";
import styled from "styled-components";
import {
  fetchAsyncStoreData,
  getStoreData,
  StoreData,
} from "./features/store/storeSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchAsyncStoreMenu } from "./features/store/storeSlice";
import MenuContainer from "./MenuContainer";
import { getStoreMenu } from "./features/store/storeSlice";
import Cart from "./Cart";
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Inter:wght@100&display=swap');
</style>;
const Restaurant = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(fetchAsyncStoreData(id));
    dispatch(fetchAsyncStoreMenu(id));
  }, []);
  const data = useSelector(getStoreData);
  // const as = useSelector(getStoreMenu);
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
          </div>
          <hr />
          <div className="meta">
            <div className="delivery">
              <span>
                <b>Home Delivery</b>
              </span>
              <span>Delivery</span>
            </div>
            <div className="delivery">
              <span>
                <b>Takeaway</b>
              </span>
              <span>Delivery</span>
            </div>
            <div className="delivery">
              <span>
                <b>Seating</b>
              </span>
              <span>Delivery</span>
            </div>
          </div>
        </Top>
      </RestaurantHeader>
      <MenuContainer />
    </Container>
  );
};
const Top = styled.div`
  ${"" /* padding: 20px; */}
`;
const RestaurantHeader = styled.div`
  span {
    margin: 0px 4px 0px 4px;
  }
  .delivery {
    padding: 5px 0px 5px 0px;
  }
  padding: 30px 0px 12px 0px;
  .address {
    padding-top: 15px;
  }
  .title {
    display: flex;
    justify-content: space-between;
    padding-bottom: 10px;
  }
  .name {
    h1 {
      font-size: 45px;
    }
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
@media screen and (min-width: 601px) {
    margin: 0 calc(12vw + 10px);
  }

  @media screen and (max-width: 600px) {
    h1 {
      font-size: 20px;
      font-weight: 500;
    }`;

export default Restaurant;
