import React from "react";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import HeroSlider from "../components/HeroSlider";
import Categories from "../components/Categories";

const Home = () => {
  return (
    <>
      <Announcement />
      <Navbar />
      <HeroSlider />
      <Categories />
    </>
  );
};

export default Home;
