import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { getStoreMenu } from "./features/store/storeSlice";
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Inter:wght@100&display=swap');
</style>;
const MenuContainer = () => {
  useEffect(() => {
    // dispatch(fetchAsyncStoreMenu(id));
  }, []);
  const data = useSelector(getStoreMenu);
  console.table(data);
  return (
    <Container>
      <ContainerHeader>
        <div className="title">
          <h1>Menu</h1>
        </div>
      </ContainerHeader>
      <Menu>
        {data &&
          data.map((i) => {
            return (
              <MenuItem key={i._id}>
                <div className="item-title">
                  <p>{i.name}</p>
                </div>
                {/* <div className="item-category">
                  <p>{i.cuisine_category}</p>
                </div> */}
                <div className="item-description">
                  <p>{i.description}</p>
                </div>
              </MenuItem>
            );
          })}
      </Menu>
    </Container>
  );
};
const MenuItem = styled.div`
padding:15px 8px 15px 8px;
.item-title{
    font-size:22px;
    font-weight:550;
}
.item-description{
    margin-top:18px;
}
`;
const ContainerHeader = styled.div``;
const Menu = styled.div`
  margin-top: 20px;
  margin-left: 5px;
`;
const Container = styled.div`
  margin-top: 50px;

  margin-left: 5px;
  font-family: "Inter", sans-serif;
  .title {
  }
`;

export default MenuContainer;
