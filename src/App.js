import React, { useEffect, useState } from "react";
import Home from "./Home";
import NavBar from "./NavBar";
import Delivery from "./Delivery";
import Restaurant from "./Restaurant";
import Cart from "./Cart";
import {
  BrowserRouter,
  Routes,
  Route,
  Router,
  Navigate,
} from "react-router-dom";
import "./App.css";
import User from "./User";
import TempLogin from "./TempLogin";
import StoreLogin from "./StoreLogin";
import ProtectedRoutes from "./ProtectedRoutes";
import StoreDashboard from "./StoreDashboard";
import ProtectedStoreRoutes from "./ProtectedStoreRoutes";

function App() {
  const [isStore, setisStore] = useState(false);
  useEffect(() => {
    if (
      window.location.pathname == "/store_dashboard" ||
      window.location.pathname == "/store_auth"
    ) {
      setisStore(true);
    }
  }, []);

  console.log("loc", window.location);
  console.log(isStore);
  return (
    <>
      <NavBar is_Store={isStore} />
      <Routes>
        <Route path="/store_auth" element={<StoreLogin />} />
        <Route path="/" element={<Home />} />
        <Route path="/redirect" element={<Navigate to="/cart" />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/user_auth" element={<TempLogin />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/user_account" element={<User />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
        <Route element={<ProtectedStoreRoutes />}>
          <Route path="/store_dashboard" element={<StoreDashboard />} />
        </Route>
        <Route path="/delivery/:id" element={<Restaurant />} />
      </Routes>
    </>
  );
}

export default App;
