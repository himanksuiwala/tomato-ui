import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getCartitems } from "./features/store/cartSlice";
import { getStoreData } from "./features/store/storeSlice";
import { getUserInfo } from "./features/store/userSlice";
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Inter:wght@100&display=swap');
</style>;
const Cart = () => {
  const [total, setTotal] = useState(0);
  const data = useSelector(getCartitems);
  const token = useSelector(getUserInfo);
  console.log((data))
  let sum = 0;
  let s_id = data[0].i.store_id;
  var itemlist = [];
  useEffect(() => {
    {
      data.map((item) => {
        sum += item.i.price * item.qty;
      });
    }
    setTotal(sum);
  }, []);

  {
    data.map((item) => {
      itemlist.push({ item_id: item.i._id, quantity: item.qty });
    });
  }

  const config = {
    headers: {
      Authorization: `Bearer ${token.token}`,
    },
  };
  const order = {
    items: itemlist,
    store_id: s_id,
    order_total: total,
  };
  const submitHandler = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:3001/cartOrder`, order, config).then(
      (resp) => {
        console.log("Ordered", resp);
      },
      (e) => console.log(e)
    );
  };
  return (
    <Container>
      <CartHeader>
        <h1>Cart</h1>
      </CartHeader>{" "}
      <CheckoutContainer>
        <div className="checkout">
          <Checkout onClick={submitHandler}>Place Order</Checkout>
        </div>
      </CheckoutContainer>
      <CartitemContainer>
        <hr />
        {data.map((item) => {
          return (
            <>
              <CartItem key={item.i._id}>
                <div className="item-name">
                  <h2>{item.i.name}</h2>
                </div>
                <div>
                  <div className="price">
                    <p>
                      ₹ {item.i.price} x {item.qty} = {item.qty * item.i.price}{" "}
                    </p>
                  </div>
                  <div className="qty"></div>
                </div>
              </CartItem>
              <hr />
            </>
          );
        })}
        <TotalCart>
          <div className="grand-total">
            <h2>Grand Total</h2>
          </div>
          <div className="total">
            <h3>₹ {total}</h3>
          </div>
        </TotalCart>
      </CartitemContainer>
    </Container>
  );
};
const CheckoutContainer = styled.div`
  float: right;
  padding-bottom: 5px;
`;
const Checkout = styled.button`
  width: 90px;
  height: 30px;
`;
const TotalCart = styled.div`
  margin: 20px 0px 30px 0px;
  .total {
    margin-top: 5px;
  }
  width: 280px;
  float: right;
  display: flex;
  justify-content: space-evenly;
`;

const CartItem = styled.div`
  padding: 18px 8px 18px 8px;
  display: flex;
  justify-content: space-between;
`;
const CartitemContainer = styled.div`
  margin-top: 35px;
`;
const CartHeader = styled.div`
  font-size: 70px;
  margin-top: 50px;
  font-family: "Inter", sans-serif;
`;
const Container = styled.div`
  @media screen and (min-width: 601px) {
    margin: 0 calc(12vw + 10px);
  }
`;
export default Cart;
