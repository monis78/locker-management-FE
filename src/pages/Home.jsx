import React from "react";
import BookingForm from "../component/BookingForm";
import ExistingBooking from "../component/ExistingBooking";

const Home = () => {
  return (
    <>
      <ExistingBooking />
      <BookingForm />
    </>
  );
};

export default Home;
