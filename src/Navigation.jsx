import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import BookingHistory from "./component/Bookinghistory";
import ExistingBooking from "./component/ExistingBooking";

const Navigation = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/recent-transaction" element={<BookingHistory />} />
      <Route path="/current-booking" element={<ExistingBooking />} />
    </Routes>
  );
};

export default Navigation;
