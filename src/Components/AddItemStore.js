import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { getStoreData } from "../features/store/userSlice";
const AddItemStore = (props) => {
  const store_data = useSelector(getStoreData);
  const [itemName, setItemName] = useState("");
  const [CuisineType, setCuisineType] = useState("");
  const [price, setPrice] = useState("");
  const [desc, SetDesc] = useState("");
  const [cancel, setCancel] = useState(false);

  const addItem = async () => {
    const response = await axios
      .post(`https://plum-tired-shark.cyclic.app/item/add`, add_item_obj, {
        headers: { Authorization: `Bearer ${store_data.token}` },
      })
      .catch((e) => {
        console.log(e);
      });
    window.location.reload(true);
    props.flag("cancel");
  };
  const submitHandler = (e) => {
    e.preventDefault();
    addItem();
    setItemName("");
    setCuisineType("");
    setPrice("");
    SetDesc("");
    {
      add_item_obj && console.log(add_item_obj);
    }
  };

  const add_item_obj = {
    name: itemName,
    cuisine_category: CuisineType,
    price: price,
    description: desc,
  };
  const cancelHandler = (e) => {
    e.preventDefault();
    setCancel(true);
    props.flag("cancel");
  };
  return (
    <Container>
      <Header>
        <h2>Add Item</h2>
      </Header>
      <form onSubmit={submitHandler}>
        <InputContainer>
          <div className="item-input">
            <input
              type="text"
              className="itemName"
              value={itemName}
              required
              onChange={(e) => {
                setItemName(e.target.value);
              }}
              placeholder="Item Name"
            />
          </div>
          <div className="item-input">
            <input
              type="text"
              className="itemName"
              required
              onChange={(e) => {
                setCuisineType(e.target.value);
              }}
              value={CuisineType}
              placeholder="Cuisine Type"
            />
          </div>
          <div className="item-input">
            <input
              type="text"
              className="itemName"
              required
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
              placeholder="Item Price"
            />
          </div>
          <div className="item-input">
            <input
              type="text"
              className="itemName"
              required
              value={desc}
              onChange={(e) => {
                SetDesc(e.target.value);
              }}
              placeholder="Item Description"
            />
          </div>
        </InputContainer>
        <AddButton>
          <button className="btn">Add Item</button>
          <button onClick={cancelHandler} className="btn">
            Cancel
          </button>
        </AddButton>
      </form>
    </Container>
  );
};

const AddButton = styled.div`
  display: flex;
  .btn {
    margin: 2px 10px 2px 10px;
    font-size:17px;
  }
  justify-content: center;
  margin-bottom: 20px;
`;
const Header = styled.div`
  display: flex;
  justify-content: center;
  margin: 30px;
`;
const InputContainer = styled.div`
  .item-input {
    margin: 20px 10px 20px 10px;
  }
  margin: 2px 15px 2px 15px;
  .itemName {
    border-radius: 7px;
    height: 30px;

    width: 250px;
  }
`;
const Container = styled.div`
  border-radius: 7px;
  .close {
    display: flex;
    flex-direction: row-reverse;
    padding-right: 10px;
  }
  background: #dbd7d2;
  position: fixed;
  left: 50%;
  margin-top: 100px;
  transform: translate(-50%, 0);
  z-index: 1;
`;
export default AddItemStore;
