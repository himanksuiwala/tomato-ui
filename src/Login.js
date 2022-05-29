import axios from "axios";
import React, { useContext, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { userLogin } from "./features/store/cartSlice";
import { fetchAsyncUser } from "./features/store/storeSlice";
import {
  fetchAsyncUserLogin,
  fetchAsyncUserLogOut,
  getUserInfo,
} from "./features/store/userSlice";
const Login = () => {
  const dispatch = useDispatch();
  const data = useSelector(getUserInfo);

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  console.log(data.token);
  const cred = {
    email: user,
    password: pwd,
  };
  const handleLogout = async (e) => {
    axios
      .get(`http://localhost:3001/user/logout`, {
        headers: { Authorization: `Bearer ${data.token}` },
      })
      .then(
        (resp) => {
          console.log("Akcjon", resp);
        },
        (e) => console.log(e)
      );
    // dispatch(fetchAsyncUserLogOut(data.token));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(fetchAsyncUserLogin(cred));
    setUser("");
    setPwd("");
  };

  useEffect(() => {}, []);
  return (
    <LoginContainer>
      <button onClick={handleLogout}></button>
      <LoginSection>
        <Container>
          <div className="head">
            <h1>Sign In</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="user">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                // ref={userRef}
                autoComplete="off"
                onChange={(e) => setUser(e.target.value)}
                value={user}
                required
              />
            </div>

            <div className="pass">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
                required
              />
            </div>
            <div className="btn">
              <button>Sign In</button>
            </div>
          </form>
          <p>
            Need an Account?
            <br />
            <span className="line">
              {/*put router link here*/}
              <a href="#">Sign Up</a>
            </span>
          </p>
        </Container>
      </LoginSection>
    </LoginContainer>
  );
};
const LoginButton = styled.button``;
const Container = styled.div`
  height: 300px;
  .user,
  .pass,
  .btn {
    margin: 20px;
  }

  .head {
    width: 50%;
    margin: 0 auto;
  }
`;
const LoginSection = styled.div`
  display: flex;
  justify-content: center;
`;
const LoginContainer = styled.div`
  margin: 50px;
`;

export default Login;
