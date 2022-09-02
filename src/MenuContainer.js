import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { MdRestaurantMenu } from "react-icons/md";
import { getStoreMenu } from "./features/store/storeSlice";
import { addProduct } from "./features/store/cartSlice";
import axios from "axios";
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Inter:wght@100&display=swap');
</style>;
const MenuContainer = (props) => {
  let from_store = false;
  {
    props.location === "store" ? (from_store = true) : (from_store = false);
  }

  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  let auth_token = props.token;
  const submitHandler = (e, i) => {
    dispatch(addProduct({ i, qty }));
    setQty(1);
    e.preventDefault();
  };
  const removeItem = async (item) => {
    const response = await axios
      .delete(`http://localhost:3001/item/${item}`, {
        headers: { Authorization: `Bearer ${auth_token}` },
      })
      .catch((e) => {
        console.log(e);
      });

    window.location.reload(false);
  };
  const itemDeleteHandler = (e, item) => {
    removeItem(item);
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
                  <div className="item">
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
                    {from_store ? (
                      <div
                        onClick={(e) => itemDeleteHandler(e, i._id)}
                        className="delete-item"
                      >
                        <h4>
                          <u>Delete</u>
                        </h4>
                      </div>
                    ) : (
                      ""
                    )}

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
  @media screen and (max-width: 450px) {
    .item-description {
      margin-top: 13px;
    }
  }

  @media screen and (min-width: 455px) {
    .item-description {
      margin-top: 20px;
    }
  }
  .delete-item {
    margin-top: 8px;
  }
  .item {
    width: 65vw;
  }
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
`;
const ContainerHeader = styled.div``;
const Menu = styled.div`
  margin-top: 5px;
`;
const Container = styled.div`
  @media screen and (min-width: 455px) {
    .title {
      font-weight: 500;
      font-size: 40px;
    }
  }
  @media screen and (max-width: 450px) {
    .title {
      font-weight: 550;
      font-size: 30px;
    }
    .logo {
      font-size: 25px;
    }
  }

  margin-top: 30px;
  margin-bottom: 100px;
  margin-left: 5px;
  font-family: "Inter", sans-serif;

  .logo {
    span {
      padding-top: 15px;
    }
  }
`;

export default MenuContainer;
