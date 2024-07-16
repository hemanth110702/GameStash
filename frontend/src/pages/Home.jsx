import React from "react";
import SideBar from "../components/SideBar";
import CategoryDisplay from "../components/CategoryDisplay";
import Games from "../components/Games";

const Home = () => {
  return (
    <>
      <SideBar />
      <CategoryDisplay />
      <Games />
    </>
  );
};

export default Home;
