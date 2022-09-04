import React, { useEffect, useState } from "react";
import Home from "./Pages/Home";
import NavBar from "./public/NavBar";
import Delivery from "./Pages/Delivery";
import Restaurant from "./Pages/Restaurant";
import Cart from "./Pages/Cart";
import { Routes, Route, Navigate } from "react-router-dom";
import "./public/App.css";
import User from "./Pages/User";
import TempLogin from "./Pages/TempLogin";
import StoreLogin from "./Pages/StoreLogin";
import ProtectedRoutes from "./utilities/ProtectedRoutes";
import StoreDashboard from "./Pages/StoreDashboard";
import ProtectedStoreRoutes from "./utilities/ProtectedStoreRoutes";
import { Footer } from "./Components/Footer";
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
      <Footer />
    </>
  );
}

export default App;
