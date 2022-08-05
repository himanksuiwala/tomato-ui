import React from "react";
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

function App() {
  return (
    <>
      <NavBar />
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
        <Route path="/delivery/:id" element={<Restaurant />} />
      </Routes>
    </>
  );
}

export default App;
