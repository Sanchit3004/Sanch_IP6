import React from "react";
import Navbar from "../components/Navbar/Navbar.jsx";
import Section from "../components/Section/Section.jsx";
import ProfileInfo from "../components/ProfileInfo/ProfileInfo";
const Home = () => {
  return (
    <>
      <Navbar />
      <Section />
      <div style={{ marginLeft: 100 }}>
        <ProfileInfo
          name={"GitHub"}
          username={"Sanchit3004"}
          email={"sanchitm723@gmail.com"}
          link={"https://github.com/Sanchit3004"}
        />
        <ProfileInfo
          name={"Instagram"}
          username={"sanchit_mhatre_1"}
          email={"sanchitm723@gmail.com"}
          link={"https://instagram.com/sanchit_mhatre_1"}
        />
        <ProfileInfo
          name={"Facebook"}
          username={"Sanchit Mhatre"}
          email={"sanchitm723@gmail.com"}
          link={"https://facebook.com/"}
        />
      </div>
    </>
  );
};
export default Home;
