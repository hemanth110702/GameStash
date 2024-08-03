import { createContext, useContext, useEffect, useState } from "react";
import { useAuthContext } from "./AuthContext";
import apiClient from "../services/apiClient";

export const GameStashContext = createContext();
export const useGameStashContext = () => useContext(GameStashContext);

export const GameStashContextProvider = ({ children }) => {
  const { user } = useAuthContext();
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [selectedPlatform, setSelectedPlatform] = useState(null);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [search, setSearch] = useState("");
  const [darkTheme, setDarkTheme] = useState(
    JSON.parse(localStorage.getItem("darkTheme"))
  );
  const [changed, setChanged] = useState(false);
  const [likedGames, setLikedGames] = useState([]);

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
    user,
  };

  useEffect(() => {
    if (user) {
      const fetchLikedGames = async () => {
        try {
          const response = await apiClient.get(`/api/my-games/`, {
            params: { email: user.email },
          });

          const data = await response.data;
          setLikedGames(data);
          
        } catch (error) {
          console.error("Failed to fetch liked games", error);
        }
      };
      fetchLikedGames();
    } else {
      setLikedGames([]);
    }
  }, [user]);

  useEffect(() => {
    localStorage.setItem("darkTheme", JSON.stringify(darkTheme));
  }, [darkTheme]);

  return (
    <GameStashContext.Provider value={{ ...passer }}>
      {children}
    </GameStashContext.Provider>
  );
};
