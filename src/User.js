import axios from "axios";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getUserInfo } from "./features/store/userSlice";

const User = () => {
  const data = useSelector(getUserInfo);
  console.log(data.token);
  const config = {
    headers: {
      Authorization: `Bearer ${data.token}`,
    },
  };
  useEffect(() => {
    axios.get("http://localhost:3001/cart", config).then(
      (resp) => {
        console.log("ORders:", resp.data);
      },
      (e) => console.log(e)
    );
  }, []);
  return <button>User</button>;
};

export default User;
