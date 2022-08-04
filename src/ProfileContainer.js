import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { getUserInfo } from "./features/store/userSlice";
var moment = require("moment");
const ProfileContainer = () => {
  const data = useSelector(getUserInfo).checkforUser;
  console.log(data);
  return (
    <Container>
      <UserName>
        <div className="user-tag">
          <h2>Name</h2>
        </div>
        <div className="user-name">
          <h2>{data.name}</h2>
        </div>
      </UserName>
      <UserName>
        <div className="user-tag">
          <h2>Email</h2>
        </div>
        <div className="user-name">
          <h2>{data.email}</h2>
        </div>
      </UserName>
      {/* <UserName>
        <div className="user-tag">
          <h2>Address</h2>
        </div>
      </UserName> */}
      <UserName>
        <div className="user-tag">
          <h2>Joined</h2>
        </div>
        <div className="user-date">
          <span>
            {"  "}
            {moment(data.created, "YYYY-MM-DDTHH:mm:ss.SSS[Z]").format(
              "MMMM"
            )}{" "}
          </span>
          <span>
            {" "}
            {moment(data.created, "YYYY-MM-DDTHH:mm:ss.SSS[Z]").format(
              "YYYY"
            )}{" "}
          </span>
        </div>
      </UserName>
    </Container>
  );
};

const UserName = styled.div`
  ${'' /* margin-top: 20px; */}
  display: flex;
  height: 80px;
  .user-name {
    margin: 0px 0px 1px 40px;
  }
  .user-date{
    font-size:20px;
    font-weight:600;
    margin-left:25px;
  }

`;
const Container = styled.div`
  margin: 25px 15px 10px 15px;

`;
export default ProfileContainer;
