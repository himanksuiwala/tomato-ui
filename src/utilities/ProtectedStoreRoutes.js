import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getStoreData } from "../features/store/userSlice";

const ProtectedStoreRoutes = () => {
  const store = useSelector(getStoreData);
  let auth = store.token;
  return auth ? <Outlet /> : <Navigate to="/store_auth" />;
};

export default ProtectedStoreRoutes;
