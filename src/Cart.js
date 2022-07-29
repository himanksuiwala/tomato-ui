import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getCartitems, reset } from "./features/store/cartSlice";
import { getStoreData } from "./features/store/storeSlice";
import { getUserInfo } from "./features/store/userSlice";
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Inter:wght@100&display=swap');
</style>;
const Cart = () => {
  const [total, setTotal] = useState(0);
  const [payment, setPayment] = useState();
  const dispatch = useDispatch();
  const data = useSelector(getCartitems);
  const token = useSelector(getUserInfo);
  var order = {};
  var itemlist = [];
  let sum = 0;
  var s_id = 0;

  data != 0 && (s_id = data[0].i.store_id);

  const config = {
    headers: {
      Authorization: `Bearer ${token.token}`,
    },
  };

  {
    s_id &&
      itemlist &&
      (order = {
        items: itemlist,
        store_id: s_id,
        order_total: total,
        payment_type: payment,
      });
  }
  const submitHandler = (e) => {
    e.preventDefault();
    {
      payment
        ? axios.post(`http://localhost:3001/cartOrder`, order, config).then(
            (resp) => {
              resp.status == 200 && dispatch(reset())
                ? alert("Order Sucessfull !")
                : alert("Error while Placing your Order");
            },
            (e) => console.log(e)
          )
        : alert("Please select one of the payment method");
    }
  };

  const paymentHandler = (e) => {
    setPayment(e.target.value);
  };
  const clearCartHandler = (e) => {
    dispatch(reset());
  };

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
        {data.length ? (
          <ClearCart onClick={clearCartHandler}>
            <h5>Clear Cart</h5>
          </ClearCart>
        ) : (
          <h5></h5>
        )}
      </CartHeader>{" "}
      {data.length == 0 ? (
        <EmptyCart>
          <h1>Do add somethin' to checkout</h1>
        </EmptyCart>
      ) : (
        <BottomContainer>
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
                          ₹ {item.i.price} x {item.qty} ={" "}
                          {item.qty * item.i.price}{" "}
                        </p>
                      </div>
                      <div className="qty"></div>
                    </div>
                  </CartItem>
                  <hr />
                </>
              );
            })}
          </CartitemContainer>
          <Payment>
            <div className="payment">
              <h3>Mode of Payment</h3>
            </div>
            <div className="payment-style">
              <input
                onClick={paymentHandler}
                type="radio"
                id="cash"
                name="fav_language"
                value="Cash"
              />
                <label for="cash">Cash</label>
            </div>
            <div className="payment-style">
              <input
                onClick={paymentHandler}
                type="radio"
                id="cash"
                name="fav_language"
                value="Credit/Debit Card"
              />
                <label for="cash">Credit/Debit Card</label>
            </div>
            <div className="payment-style">
              <input
                onClick={paymentHandler}
                type="radio"
                id="cash"
                name="fav_language"
                value="UPI"
              />
                <label for="cash">UPI</label>
            </div>
            <div className="payment-style">
              <input
                onClick={paymentHandler}
                type="radio"
                id="cash"
                name="fav_language"
                value="cash"
              />
                <label for="cash">Paytm</label>
            </div>

            <br />
          </Payment>
          <CartSubmit>
            <TotalCart>
              <div className="grand-total">
                <h3>Grand Total :</h3>
              </div>
              <div className="total">
                <h2>₹ {total}</h2>
              </div>
            </TotalCart>
            <PlaceOrder>
              <button onClick={submitHandler}>
                {" "}
                <h2>Place Order</h2>
              </button>
            </PlaceOrder>
          </CartSubmit>
        </BottomContainer>
      )}
    </Container>
  );
};

const ClearCart = styled.div`
  font-size: 25px;
  text-decoration: underline;
  margin-top: 70px;
`;

const CartSubmit = styled.div``;
const PlaceOrder = styled.div`
  padding-left: 40px;
`;
const Payment = styled.div`
  margin-top: 18px;
  .payment-style {
    margin: 5px 1px 5px 1px;
  }
`;
const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const EmptyCart = styled.div`
  margin-left: 15px;
`;

const TotalCart = styled.div`
  margin: 18px 20px 30px 0px;
  ${"" /* width: 280px; */}
  float: right;
  display: flex;
  .total {
    margin: -6px 0px 0px 10px;
    font-size: 20px;
  }
`;

const CartItem = styled.div`
  padding: 18px 8px 18px 8px;
  display: flex;
  justify-content: space-between;
`;
const CartitemContainer = styled.div`
  margin-top: 23px;
  width:40vw;
  }
`;
const CartHeader = styled.div`
  display: flex;
  justify-content: space-between;

  .clear {
    font-size: 25px;
    text-decoration: underline;
    margin-top: 70px;
  }
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
