import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getCartitems } from "./features/store/cartSlice";
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Inter:wght@100&display=swap');
</style>;
const Cart = () => {
  const [total, setTotal] = useState(0);
  const data = useSelector(getCartitems);
  // console.log(data);
  let sum = 0;

  useEffect(() => {
    {
      data.map((item) => {
        sum += item.i.price * item.qty;
      });
    }
    setTotal(sum);
  }, []);

  return (
    <Container>
      <CartHeader>
        <h1>Cart</h1>
      </CartHeader>

      <CartitemContainer>
        <hr />
        {data.map((item) => {
          return (
            <>
              <CartItem>
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
const TotalCart = styled.div`
  .total {
    margin-top: 5px;
  }
  width: 280px;
  float: right;
  display: flex;
  justify-content: space-evenly;
`;

const CartItem = styled.div`
  padding: 25px 8px 25px 8px;
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
