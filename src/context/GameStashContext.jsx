import { createContext, useContext, useEffect, useState } from "react";

export const GameStashContext = createContext();
export const useGameStashContext = () => useContext(GameStashContext);

export const GameStashContextProvider = ({ children }) => {
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [selectedPlatform, setSelectedPlatform] = useState(null);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [search, setSearch] = useState("");
  const [darkTheme, setDarkTheme] = useState(
    JSON.parse(localStorage.getItem("darkTheme"))
  );
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

  useEffect(() => {
    localStorage.setItem("darkTheme", JSON.stringify(darkTheme));
  }, [darkTheme]);

  return (
    <GameStashContext.Provider value={{ ...passer }}>
      {children}
    </GameStashContext.Provider>
  );
};
