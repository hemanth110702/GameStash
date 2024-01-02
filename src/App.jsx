import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import CategoryDisplay from "./components/CategoryDisplay";
import Games from "./components/Games";
import GameDisplay from "./components/GameDisplay";
import MyGames from "./components/MyGames";
import ScrollToTop from "./components/ScrollToTop";
import ErrorPage from "./components/ErrorPage";
import "./App.css";

function App() {
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [selectedPlatform, setSelectedPlatform] = useState(null);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [search, setSearch] = useState("");
  const [darkTheme, setDarkTheme] = useState(true);
  const [changed, setChanged] = useState(false);
  const likedGamesJSON = localStorage.getItem("likedGames");
  const [likedGames, setLikedGames] = useState(
    likedGamesJSON ? JSON.parse(likedGamesJSON) : []
  );

  const passer = {
    selectedGenre,
    setSelectedGenre,
    selectedPlatform,
    setSelectedPlatform,
    selectedOrder,
    setSelectedOrder,
    search,
    setSearch,
    darkTheme,
    setDarkTheme,
    changed,
    setChanged,
    likedGames,
    setLikedGames,
  };

  useEffect(() => {
    localStorage.setItem("likedGames", JSON.stringify(likedGames));
    console.log("APP", likedGames);
  }, [likedGames]);

  return (
    <div className={darkTheme ? "page" : "light-page"}>
      <NavBar {...passer} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <SideBar {...passer} />
              <CategoryDisplay {...passer} />
              <Games {...passer} />{" "}
            </>
          }
        />
        <Route path="/games">
          <Route path=":slug" element={<GameDisplay {...passer} />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
        <Route path="/myGames" element={<MyGames {...passer} />} />
        <Route path="*" element={<ErrorPage darkTheme={darkTheme} />} />
      </Routes>
      <ScrollToTop darkTheme={darkTheme} />
    </div>
  );
}

export default App;
