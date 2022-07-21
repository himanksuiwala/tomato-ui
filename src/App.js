import React from "react";
import Home from "./Home";
import NavBar from "./NavBar";
import Delivery from "./Delivery";
import Restaurant from "./Restaurant";
import Cart from "./Cart";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import "./App.css";
import Login from "./Login";
import User from "./User";
import TempLogin from "./TempLogin";
import ProtectedRoutes from "./ProtectedRoutes";
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/login" element={<TempLogin />} />
        {/* <Route path="/delivery/:id/cart" element={<Cart />} /> */}
        <Route path="/cart" element={<Cart />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/user" element={<User />} />
        </Route>
        <Route path="/delivery/:id" element={<Restaurant />} />
      </Routes>
    </>
  );
}

export default App;
