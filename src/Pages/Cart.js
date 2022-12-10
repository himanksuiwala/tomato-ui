import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getCartitems, reset } from "../features/store/cartSlice";
import { getStoreData } from "../features/store/storeSlice";
import { getUserInfo } from "../features/store/userSlice";
import Spinner from "react-spinkit";
import useWindowDimensions from "../utilities/useWindowDimensions";
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Inter:wght@100&display=swap');
</style>;
const Cart = () => {
  const { height, width } = useWindowDimensions();
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [payment, setPayment] = useState();
  const dispatch = useDispatch();
  const data = useSelector(getCartitems);
  const token = useSelector(getUserInfo);
  document.title = "Tomato - Cart";
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
    data.map((item) => {
      itemlist.push({ item_id: item.i._id, quantity: item.qty });
    });
  }
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
        ? axios
            .post(
              `https://plum-tired-shark.cyclic.app/cartOrder`,
              order,
              config
            )
            .then(
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
      setTimeout(() => setLoading(false), 3000);
    }
    setTotal(sum);
  }, []);

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
            <div className="payment-container">
              <div className="payment-style">
                <input
                  onClick={paymentHandler}
                  type="radio"
                  id="cash"
                  name="fav_language"
                  value="Cash"
                />
                 {" "}
                <label className="cash" for="cash">
                  Cash
                </label>
              </div>
              <div className="payment-style">
                <input
                  onClick={paymentHandler}
                  type="radio"
                  id="cash"
                  name="fav_language"
                  value="Credit/Debit Card"
                />
                 {" "}
                <label className="cash" for="cash">
                  Credit/Debit Card
                </label>
              </div>
              <div className="payment-style">
                <input
                  onClick={paymentHandler}
                  type="radio"
                  id="cash"
                  name="fav_language"
                  value="UPI"
                />
                 {" "}
                <label className="cash" for="cash">
                  UPI
                </label>
              </div>
              <div className="payment-style">
                <input
                  onClick={paymentHandler}
                  type="radio"
                  id="cash"
                  name="fav_language"
                  value="cash"
                />
                 {" "}
                <label className="cash" for="cash">
                  Paytm
                </label>
              </div>
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
              <button className="btn" onClick={submitHandler}>
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
const ClearCart = styled.div`
  font-size: 25px;
  text-decoration: underline;
  margin-top: 70px;
  @media screen and (max-width: 450px) {
    margin-right: 30px;
  }
`;

const CartSubmit = styled.div``;
const PlaceOrder = styled.div`
  @media screen and (min-width: 455px) {
    padding-left: 40px;
  }
  @media screen and (max-width: 450px) {
    display: flex;
    justify-content: center;
    .btn {
    border-radius:7px;
    width:50vw;
    height:40px;
  }
  }

  margin-bottom: 30px;
`;
const Payment = styled.div`
  margin-top: 18px;
  .payment-style {
    margin: 5px 1px 5px 1px;
  }

  @media screen and (max-width: 450px) {
    margin-top: 35px;
    .payment {
      font-size: 22px;
    }
    .payment-container {
      display: flex;
      padding-left: 10px;
      padding-top: 7px;
      justify-content: space-between;
    }
    .cash {
      margin-left: -5px;
    }
  }
`;
const BottomContainer = styled.div`
  @media screen and (min-width: 455px) {
    display: flex;
    justify-content: space-between;
  }
  @media screen and (max-width: 450px) {
    display: flex;
    flex-direction: column;
    align-content: stretch;
  }
`;
const EmptyCart = styled.div`
  margin-left: 15px;
`;

const TotalCart = styled.div`
  margin: 18px 20px 30px 0px;

  @media screen and (min-width: 455px) {
    float: right;
    .total {
      margin: -6px 0px 0px 10px;
      font-size: 20px;
    }
  }
  display: flex;
  @media screen and (max-width: 450px) {
    .grand-total {
      font-size: 22px;
      margin-left: 4px;
      padding-top: 7px;
    }
    .total {
      margin-left: 20px;
      font-size: 24px;
    }
  }
`;

const CartItem = styled.div`
  padding: 18px 8px 18px 8px;
  display: flex;
  justify-content: space-between;
`;
const CartitemContainer = styled.div`
  margin-top: 23px;
  }
`;
const CartHeader = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 450px) {
    font-size: 50px;
  }
  .clear {
    font-size: 25px;
    text-decoration: underline;
    margin-top: 70px;
  }
  font-size: 70px;
  margin-top: 50px;
`;
const Container = styled.div`

  font-family: "Inter", sans-serif;
  @media screen and (max-width: 450px) {
    margin: 0 calc(2vw + 9px);
    margin-bottom:50px;
  }

  @media screen and (min-width: 455px) {
    margin: 0 calc(12vw + 10px);
    margin-bottom:250px;
  }
`;
export default Cart;
