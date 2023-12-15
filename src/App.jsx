import NavBar from "./components/NavBar";
import CategoryDisplay from "./components/CategoryDisplay";
import Games from "./components/Games";
import "./App.css";
import SideBar from "./components/SideBar";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import GameDisplay from "./components/GameDisplay";
import MyGames from "./components/MyGames";

function App() {
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [selectedPlatform, setSelectedPlatform] = useState(null);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [search, setSearch] = useState("");
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
    <>
      <NavBar setSearch={setSearch} setChanged={setChanged} />
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
              />
              <CategoryDisplay
                changed={changed}
                selectedGenre={selectedGenre}
                setChanged={setChanged}
                selectedPlatform={selectedPlatform}
                setSelectedPlatform={setSelectedPlatform}
                selectedOrder={selectedOrder}
                setSelectedOrder={setSelectedOrder}
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
              />{" "}
            </>
          }
        />
        <Route path="/games">
          <Route path=":slug" element={<GameDisplay />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
        <Route path="/myGames" element={<MyGames likedGames={likedGames} setLikedGames={setLikedGames} />} />
      </Routes>
    </>
  );
}

export default App;
