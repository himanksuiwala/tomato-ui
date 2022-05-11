import React from "react";
import { Counter } from "./features/counter/Counter";
import Home from "./Home";
import NavBar from "./NavBar";
import Delivery from "./Delivery";
import Restaurant from "./Restaurant";
// ProductDetail
import Cart from "./Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/delivery" element={<Delivery />} />
        {/* <Route path="/restaurants" element={<Restaurants/>}/> */}
        <Route path="/cart" element={<Cart />} />
        <Route path="/delivery/:id" element={<Restaurant />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
