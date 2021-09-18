import React from "react";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import HeroSlider from "../components/Slider";

const Home = () => {
  return (
    <>
      <Announcement />
      <Navbar />
      <HeroSlider />
    </>
  );
};

export default Home;
