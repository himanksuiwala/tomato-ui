import React from "react";
import { Counter } from "./features/counter/Counter";
import Home from "./Home";
import NavBar from "./NavBar";  
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
