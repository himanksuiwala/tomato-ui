import React, { useState } from "react";
import styled from "styled-components";
import $ from "jquery";
const StoreLogin = () => {
  const BACKDROP_IMAGE_URL = `https://ik.imagekit.io/1aafk6gx3bk/louis-hansel-wVoP_Q2Bg_A-unsplash_xDnXz45aA.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1659644493814`;

  const [form, setForm] = useState(true);
  const [seating, setSeating] = useState("seating_true");
  const [delivery, setDelivery] = useState("food_delivery_true");
  const [takeaway, setTakeaway] = useState("takeaway_true");
  const [rest_mail, setRest_mail] = useState("");
  const [pass, setPass] = useState("");
  const [rest_name, setRest_name] = useState("");
  const [rest_add, setRest_add] = useState("");
  const [rest_city, setRest_city] = useState("");
  const [rest_contact, setRest_contact] = useState("");
  const [rest_cuisine, setRest_cuisine] = useState("");

  const FormToggle = () => {
    $("form").animate({ height: "toggle", opacity: "toggle" }, "slow");
  };
  const seatRadioButtonHandle = (e) => {
    setSeating(e.target.value);
  };
  const foodDeliveyRadioButtonHandle = (e) => {
    setDelivery(e.target.value);
  };
  const takeawayRadioButtonHandle = (e) => {
    setTakeaway(e.target.value);
  };
  const formSubmitHandle = (e) => {
    e.preventDefault();
    console.log("SUBMIT", store_reg_obj);
  };
  const ProceedHandler = (e) => {
    setForm(false);
  };

  const store_reg_obj = {
    store_name: rest_name,
    email: rest_mail,
    password: pass,
    contact: rest_contact,
    city: rest_city,
    store_address: rest_add,
    cuisine_type: rest_cuisine,
    home_delivery: delivery === "food_delivery_true" ? true : false,
    takeaway_available: takeaway === "takeaway_true" ? true : false,
    seating_available: seating === "seating_true" ? true : false,
  };
  return (
    <>
      <HeroComponent>
        <HeroImage>
          <div className="hero">
            <img className="hero-image" src={BACKDROP_IMAGE_URL} />
          </div>
          <HeroHeader>
            <div className="header">
              {form ? (
                <FormContainer>
                  <div className="login-page">
                    <div className="form">
                      <div className="login-header">
                        <div>
                          <h1>🍅</h1>
                        </div>
                        <div>
                          <h2>Welcome Back!</h2>
                        </div>
                      </div>
                      <form onSubmit={ProceedHandler} className="register-form">
                        <input
                          type="email"
                          required
                          onChange={(e) => {
                            setRest_mail(e.target.value);
                          }}
                          placeholder="email address"
                        />
                        <input
                          type="password"
                          required
                          onChange={(e) => {
                            setPass(e.target.value);
                          }}
                          placeholder="password"
                        />

                        <button>Proceed</button>
                        <p className="message">
                          Already with us ?{" "}
                          <a href="#" onClick={FormToggle}>
                            Login to your Dashboard
                          </a>
                        </p>
                      </form>
                      <form className="login-form">
                        <input
                          type="email"
                          id="username"
                          autoComplete="off"
                          required
                          placeholder="username"
                        />
                        <input
                          type="password"
                          id="password"
                          required
                          placeholder="password"
                        />
                        <button>login</button>
                        <p className="message">
                          Wanna Partner with us ?{" "}
                          <a href="#" onClick={FormToggle}>
                            Register Your Restaurant
                          </a>
                        </p>
                      </form>
                    </div>
                  </div>
                </FormContainer>
              ) : (
                <NewStoreDetail>
                  <RegisterFormContainer>
                    <form onSubmit={formSubmitHandle} className="form">
                      <div className="input-container">
                        <div className="input-tag">
                          <p>Restaurant name</p>
                        </div>
                        <input
                          className="text-field"
                          type="text"
                          required
                          onChange={(e) => {
                            setRest_name(e.target.value);
                          }}
                          placeholder="Store Name"
                        />
                      </div>
                      <div className="input-container">
                        <div className="input-tag">
                          <p>Restaurant Address</p>
                        </div>
                        <input
                          className="text-field"
                          type="text"
                          onChange={(e) => {
                            setRest_add(e.target.value);
                          }}
                          required
                          placeholder="Address"
                        />
                      </div>
                      <div className="input-container">
                        <div className="input-tag">
                          <p>City</p>
                        </div>
                        <input
                          type="text"
                          required
                          onChange={(e) => {
                            setRest_city(e.target.value);
                          }}
                          className="text-field"
                          placeholder="Ex- New Delhi"
                        />
                      </div>
                      <div className="input-container">
                        <div className="input-tag">
                          <p>Contact Number </p>
                        </div>
                        <input
                          type="text"
                          required
                          onChange={(e) => {
                            setRest_contact(e.target.value);
                          }}
                          className="text-field"
                          placeholder="Ex- 1234567890"
                        />
                      </div>
                      <div className="input-container">
                        <div className="input-tag">
                          <p>Cusine Category </p>
                        </div>
                        <input
                          type="text"
                          required
                          onChange={(e) => {
                            setRest_cuisine(e.target.value);
                          }}
                          className="text-field"
                          placeholder="Ex- Thai,Chinese"
                        />
                      </div>
                      <div className="radio-button-container">
                        <div className="input-container">
                          <div className="input-tag">
                            <p>Seating</p>
                          </div>
                          <div className="seating">
                            <div>
                              <input
                                type="radio"
                                value="seating_true"
                                onClick={seatRadioButtonHandle}
                                checked={seating === "seating_true"}
                                name="seating_true"
                              />{" "}
                              Available
                            </div>
                            <div>
                              <input
                                type="radio"
                                value="seating_false"
                                checked={seating === "seating_false"}
                                onClick={seatRadioButtonHandle}
                                name="seating_false"
                              />{" "}
                              Not Available
                            </div>
                          </div>
                        </div>
                        {/* ///---HomeDelivery---/// */}
                        <div className="input-container">
                          <div className="input-tag">
                            <p>Food Delivery </p>
                          </div>
                          <div className="seating">
                            <div>
                              <input
                                type="radio"
                                onClick={foodDeliveyRadioButtonHandle}
                                checked={delivery == "food_delivery_true"}
                                value="food_delivery_true"
                                name="food_delivery_true"
                              />{" "}
                              Available
                            </div>
                            <div>
                              <input
                                type="radio"
                                onClick={foodDeliveyRadioButtonHandle}
                                checked={delivery == "food_delivery_false"}
                                value="food_delivery_false"
                                name="food_delivery_false"
                              />{" "}
                              Not Available
                            </div>
                          </div>
                        </div>
                        {/* ///---Takeaway---/// */}
                        <div className="input-container">
                          <div className="input-tag">
                            <p>Takeaway </p>
                          </div>
                          <div className="seating">
                            <div>
                              <input
                                type="radio"
                                onClick={takeawayRadioButtonHandle}
                                checked={takeaway == "takeaway_true"}
                                value="takeaway_true"
                                name="takeaway_true"
                              />{" "}
                              Available
                            </div>
                            <div>
                              <input
                                type="radio"
                                onClick={takeawayRadioButtonHandle}
                                checked={takeaway == "takeaway_false"}
                                value="takeaway_false"
                                name="takeaway_false"
                              />{" "}
                              Not Available
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="button-container">
                        <button>Register</button>
                      </div>
                    </form>
                  </RegisterFormContainer>
                </NewStoreDetail>
              )}
            </div>
          </HeroHeader>
        </HeroImage>
      </HeroComponent>
    </>
  );
};
const RegisterFormContainer = styled.div`
  height: 490px;
  width: 490px;
  padding: 15px 10px 10px 10px;
  .button-container {
    text-align: center;
    padding-top: 13px;
  }
  .form button {
    border-radius: 20px;
    font-family: "Roboto", sans-serif;
    text-transform: uppercase;
    outline: 0;
    ${"" /* background: #4caf50; */}
    background: #090b13;
    width: 50%;
    border: 0;
    padding: 15px;
    color: #ffffff;
    font-size: 14px;
    -webkit-transition: all 0.3 ease;
    transition: all 0.3 ease;
    cursor: pointer;
  }
  .form button:hover,
  .form button:active,
  .form button:focus {
    ${"" /* background: #43a047; */}
    background: #090b13;
  }
  .seating {
    width: 250px;
    display: flex;
    font-size: 18px;
    font-weight: 650;
    justify-content: space-between;
  }
  .input-container {
    display: flex;
    justify-content: space-between;
    font-size: 22px;
    font-weight: 700;
    margin: 20px 8px 20px 8px;
  }
  .text-field {
    border-radius: 5px;
  }
`;
const NewStoreDetail = styled.div`
  color: black;
  background-color: white;
  border-radius: 15px;
`;
const HeroComponent = styled.div`
  color: white;
  @media screen and (min-width: 601px) {
    .header {
    }
    h1 {
      font-size: 60px;
    }
  }
  @media screen and (max-width: 600px) {
    h1 {
      font-size: 50px;
    }
  }
  .header {
    h1 {
      font-weight: 800;
      font-family: "Inter", sans-serif;
    }
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .hero {
    height: 90.8vh;
  }
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
    filter: brightness(70%);
  }
`;
const FormContainer = styled.div`
  .login-header {
    color: black;
    margin-bottom: 50px;
  }
  @import url(https://fonts.googleapis.com/css?family=Roboto:300);
  height: 500px;
  .login-page {
    width: 360px;
    padding: 8% 0 0;
    margin: auto;
  }
  .form {
    border-radius: 20px;
    position: relative;
    z-index: 1;
    background: #ffffff;
    max-width: 360px;
    margin: 0 auto 100px;
    padding: 45px;
    text-align: center;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
  }
  .input-container {
    display: flex;
  }
  .form input {
    font-family: "Roboto", sans-serif;
    border-radius: 20px;
    outline: 0;
    background: #f2f2f2;
    width: 100%;
    border: 0;
    ${"" /* margin: 0px 0px 15px; */}
    padding: 15px;
    box-sizing: border-box;
    font-size: 14px;
  }
  .form button {
    border-radius: 20px;
    font-family: "Roboto", sans-serif;
    text-transform: uppercase;
    outline: 0;
    ${"" /* background: #4caf50; */}
    background: #090b13;
    width: 100%;
    border: 0;
    padding: 15px;
    color: #ffffff;
    font-size: 14px;
    -webkit-transition: all 0.3 ease;
    transition: all 0.3 ease;
    cursor: pointer;
  }
  .form button:hover,
  .form button:active,
  .form button:focus {
    ${"" /* background: #43a047; */}
    background: #090b13;
  }
  .form .message {
    margin: 15px 0 0;
    color: #b3b3b3;
    font-size: 12px;
  }
  .form .message a {
    ${"" /* color: #4caf50; */}
    color: #090b13;
    text-decoration: none;
  }
  .form .register-form {
    display: none;
  }
  .container {
    position: relative;
    z-index: 1;
    max-width: 300px;
    margin: 0 auto;
  }
  .container:before,
  .container:after {
    content: "";
    display: block;
    clear: both;
  }
  .container .info {
    margin: 50px auto;
    text-align: center;
  }
  .container .info h1 {
    margin: 0 0 15px;
    padding: 0;
    font-size: 36px;
    font-weight: 300;
    color: #1a1a1a;
  }
  .container .info span {
    color: #4d4d4d;
    font-size: 12px;
  }
  .container .info span a {
    color: #000000;
    text-decoration: none;
  }
  .container .info span .fa {
    color: #ef3b3a;
  }
  body {
    background: #76b852; /* fallback for old browsers */
    background: rgb(141, 194, 111);
    background: linear-gradient(
      90deg,
      rgba(141, 194, 111, 1) 0%,
      rgba(118, 184, 82, 1) 50%
    );
    font-family: "Roboto", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

const HeroImage = styled.div``;
const HeroHeader = styled.div``;

export default StoreLogin;
