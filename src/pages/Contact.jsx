import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const Contact = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = React.useState({
    name: "",
    phoneNumber: "",
    email: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Navigate to the output page and pass form data as state
    navigate("/output", { state: formData });
  };

  return (
    <>
      <Navbar />
      <div align="center">
        <div>
          <h2>Enter your details</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Enter your Name:&nbsp;&nbsp;&nbsp;
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
              <br />
            </label>
            <br />
            <label>
              Phone Number:&nbsp;&nbsp;&nbsp;
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
              />
              <br />
            </label>
            <br />
            <label>
              Email:&nbsp;&nbsp;&nbsp;&nbsp;
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </label>
            <br />
            <br />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
