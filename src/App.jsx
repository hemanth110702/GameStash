import NavBar from "./components/NavBar";
import CategoryDisplay from "./components/CategoryDisplay";
import Games from "./components/Games";
import SideBar from "./components/SideBar";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import GameDisplay from "./components/GameDisplay";
import MyGames from "./components/MyGames";
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

  useEffect(() => {
    localStorage.setItem("likedGames", JSON.stringify(likedGames));
    console.log("APP", likedGames);
  }, [likedGames]);

  return (
    <div className={darkTheme?"page":"light-page"}>
      <NavBar setSearch={setSearch} setChanged={setChanged} darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <SideBar
                changed={changed}
                setChanged={setChanged}
                selectedGenre={selectedGenre}
                setSelectedGenre={setSelectedGenre}
                darkTheme={darkTheme}
              />
              <CategoryDisplay
                changed={changed}
                selectedGenre={selectedGenre}
                setChanged={setChanged}
                selectedPlatform={selectedPlatform}
                setSelectedPlatform={setSelectedPlatform}
                selectedOrder={selectedOrder}
                setSelectedOrder={setSelectedOrder}
                darkTheme={darkTheme}
              />
              <Games
                search={search}
                changed={changed}
                setChanged={setChanged}
                selectedGenre={selectedGenre}
                selectedPlatform={selectedPlatform}
                selectedOrder={selectedOrder}
                setSelectedOrder={setSelectedOrder}
                likedGames={likedGames}
                setLikedGames={setLikedGames}
                darkTheme={darkTheme}
              />{" "}
            </>
          }
        />
        <Route path="/games">
          <Route path=":slug" element={<GameDisplay darkTheme={darkTheme}/>} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
        <Route
          path="/myGames"
          element={
            <MyGames likedGames={likedGames} setLikedGames={setLikedGames} darkTheme={darkTheme}/>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
