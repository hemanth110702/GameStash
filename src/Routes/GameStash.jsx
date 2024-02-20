import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "../components/NavBar";
import GameDisplay from "../pages/GameDisplay";
import MyGames from "../pages/MyGames";
import ScrollToTop from "../components/ScrollToTop";
import ErrorPage from "../pages/ErrorPage";
import { useGameStashContext } from "../context/GameStashContext";
import Home from "../pages/Home";

const GameStash = () => {
  const { darkTheme } = useGameStashContext();
  return (
    <div className={darkTheme ? "page" : "light-page"}>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games">
          <Route path=":slug" element={<GameDisplay />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
        <Route path="/myGames" element={<MyGames />} />
        <Route path="*" element={<ErrorPage darkTheme={darkTheme} />} />
      </Routes>
      <ScrollToTop darkTheme={darkTheme} />
    </div>
  );
};

export default GameStash;
