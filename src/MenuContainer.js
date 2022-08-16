import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { MdRestaurantMenu } from "react-icons/md";
import { getStoreMenu } from "./features/store/storeSlice";
import { addProduct } from "./features/store/cartSlice";
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Inter:wght@100&display=swap');
</style>;
const MenuContainer = (props) => {
  let from_store = false;
  {
    props.location === "store" ? (from_store = true) : (from_store = false);
  }
  console.log(from_store);
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const submitHandler = (e, i) => {
    dispatch(addProduct({ i, qty }));
    setQty(1);
    e.preventDefault();
  };
  const data = useSelector(getStoreMenu);
  return (
    <Container>
      {!from_store ? (
        <ContainerHeader>
          <div className="title">
            <span>Menu</span>
            <span className="logo">
              <MdRestaurantMenu />
            </span>
          </div>
        </ContainerHeader>
      ) : (
        ""
      )}
      <Menu>
        {data &&
          data.map((i) => {
            return (
              <>
                <MenuItem key={i._id}>
                  <div>
                    <div className="item-title">
                      <p>{i.name}</p>
                    </div>
                    <div className="item-description">
                      <p>{i.description}</p>
                    </div>
                  </div>

                  <div>
                    <div className="price">
                      <p>
                        ₹ {""}
                        {i.price}
                      </p>
                    </div>
                    {!from_store ? (
                      <div>
                        <form
                          className="form"
                          onSubmit={(e) => submitHandler(e, i)}
                        >
                          <div className="qty">
                            <input
                              type="number"
                              onChange={(e) => {
                                setQty(e.target.value);
                              }}
                              defaultValue={1}
                            />
                          </div>
                          <div className="cart">
                            <button>
                              <p>Add To Cart</p>{" "}
                            </button>
                          </div>
                        </form>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </MenuItem>
                <hr />
              </>
            );
          })}
      </Menu>
    </Container>
  );
};
const MenuItem = styled.div`
  .qty {
    input {
      width: 40px;
    }
  }
  .cart {
    padding: 2px 0px 2px 0px;
  }
  padding: 25px 8px 25px 8px;
  display: flex;
  justify-content: space-between;
  .item-title {
    font-size: 22px;
    font-weight: 550;
  }
  .item-description {
    margin-top: 20px;
  }
`;
const ContainerHeader = styled.div``;
const Menu = styled.div`
  margin-top: 20px;
  margin-left: 5px;
`;
const Container = styled.div`
  margin-top: 50px;
  margin-bottom: 100px;
  margin-left: 5px;
  font-family: "Inter", sans-serif;
  .title {
    font-weight: 500;
    font-size: 40px;
  }
  .logo {
    span {
      padding-top: 15px;
    }
  }
`;

export default MenuContainer;
