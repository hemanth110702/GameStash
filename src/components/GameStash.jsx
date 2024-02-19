import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import CategoryDisplay from "./CategoryDisplay";
import Games from "./Games";
import GameDisplay from "./GameDisplay";
import MyGames from "./MyGames";
import ScrollToTop from "./ScrollToTop";
import ErrorPage from "./ErrorPage";
import { useGameStashContext } from "../context/GameStashContext";

const GameStash = () => {
  const { darkTheme } = useGameStashContext();
  return (
    <div className={darkTheme ? "page" : "light-page"}>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <SideBar />
              <CategoryDisplay />
              <Games />
            </>
          }
        />
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
