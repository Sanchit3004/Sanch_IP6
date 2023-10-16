import React from "react";
import Navbar from "../components/Navbar/Navbar.jsx";

const Output = (props) => {
  const { location } = props;
  const formData = location.state;

  if (!formData) {
    // Handle the case where state is undefined
    return <div>No data to display</div>;
  }

  return (
    <div>
      <h2>Thank you for your response</h2>
      <p>Name: {formData.name}</p>
      <p>Phone Number: {formData.phoneNumber}</p>
      <p>Email: {formData.email}</p>
    </div>
  );
};

export default Output;
