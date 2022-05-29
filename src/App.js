import React from "react";
import Home from "./Home";
import NavBar from "./NavBar";
import Delivery from "./Delivery";
import Restaurant from "./Restaurant";
import Cart from "./Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./Login";
import User from "./User";
// AuthProvider

function App() {
  return (
    // <BrowserRouter>
    // <AuthProvider>
    <>
      <NavBar />
      <Routes>
        <Route path="/">
          <Route path="/" element={<Home />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/user" element={<User />} />
        </Route>

        <Route path="/delivery/:id" element={<Restaurant />} />
      </Routes>
    </>

    // </AuthProvider>
    // </BrowserRouter>
  );
}

export default App;
