import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getUserInfo } from "./features/store/userSlice";

const ProtectedRoutes = () => {
  const user = useSelector(getUserInfo);
  let auth = user.token;
  return auth ? <Outlet /> : <Navigate to="/user_auth" />;
};

export default ProtectedRoutes;
