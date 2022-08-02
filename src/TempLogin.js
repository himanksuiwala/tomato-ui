import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "./features/store/cartSlice";
// import { fetchAsyncUser } from "./features/store/storeSlice";
import {
  fetchAsyncUserLogin,
  fetchAsyncUserLogOut,
  fetchAsyncUserRegister,
  getUserInfo,
} from "./features/store/userSlice";
import $ from "jquery";
import { useNavigate } from "react-router-dom";

const TempLogin = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const data = useSelector(getUserInfo);
  const [user, setUser] = useState("");
  const [userName, setUserName] = useState("");
  const [pwd, setPwd] = useState("");
  const cred = {
    email: user,
    password: pwd,
  };
  const register_cred = {
    name: userName,
    email: user,
    password: pwd,
  };
  useEffect(() => {
    {
      data.length != 0 && navigate("/");
    }
  }, []);
  {
    data.length != 0 && navigate("/");
  }
  const FormToggle = () => {
    $("form").animate({ height: "toggle", opacity: "toggle" }, "slow");
  };
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    dispatch(fetchAsyncUserLogin(cred));
    setUser("");
    setPwd("");
  };

  const handleLogout = async (e) => {
    dispatch(fetchAsyncUserLogOut(data.token));
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    dispatch(fetchAsyncUserRegister(register_cred));
    setUser("");
    setPwd("");
    setUserName("");
  };

  return (
    <>
      <HeroComponent>
        <HeroImage>
          <div className="hero">
            <img
              className="hero-image"
              src="https://ik.imagekit.io/1aafk6gx3bk/rachel-park-hrlvr2ZlUNk-unsplash_TIKHc3mky.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1658312903489"
            />
          </div>
          <HeroHeader>
            <div className="header">
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
                    <form
                      className="register-form"
                      onSubmit={handleRegisterSubmit}
                    >
                      <input
                        type="text"
                        onChange={(e) => {
                          setUserName(e.target.value);
                        }}
                        value={userName}
                        placeholder="name"
                      />
                      <input
                        type="password"
                        onChange={(e) => setPwd(e.target.value)}
                        value={pwd}
                        placeholder="password"
                      />
                      <input
                        type="text"
                        onChange={(e) => setUser(e.target.value)}
                        value={user}
                        placeholder="email address"
                      />
                      <button>create</button>
                      <p className="message">
                        Already registered?{" "}
                        <a href="#" onClick={FormToggle}>
                          Sign In
                        </a>
                      </p>
                    </form>
                    <form className="login-form" onSubmit={handleLoginSubmit}>
                      <input
                        type="text"
                        id="username"
                        autoComplete="off"
                        onChange={(e) => setUser(e.target.value)}
                        value={user}
                        required
                        placeholder="username"
                      />
                      <input
                        type="password"
                        id="password"
                        onChange={(e) => setPwd(e.target.value)}
                        value={pwd}
                        required
                        placeholder="password"
                      />
                      <button>login</button>
                      <p className="message">
                        Not registered?{" "}
                        <a href="#" onClick={FormToggle}>
                          Create an account
                        </a>
                      </p>
                    </form>
                  </div>
                </div>
              </FormContainer>
            </div>
          </HeroHeader>
        </HeroImage>
      </HeroComponent>
    </>
  );
};
const HeroImage = styled.div``;
const HeroHeader = styled.div``;
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
    height: 100%;
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
  .form input {
    font-family: "Roboto", sans-serif;
    border-radius: 20px;
    outline: 0;
    background: #f2f2f2;
    width: 100%;
    border: 0;
    margin: 0 0 15px;
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

const O = styled.div`
  background: blue;
  overflow: hidden;
  ${"" /* height: 91.4vh; */}
`;
const LoginContainer = styled.div`
  background: red;
  width: 100vw;
`;
const BackdropContainer = styled.div`
  img {
    max-width: 100%;
  }
  .background {
    width: 60vw;
    height: auto;
  }
`;
const OContainer = styled.div`
  background: white;
  ${"" /* display: flex; */}
`;
export default TempLogin;
