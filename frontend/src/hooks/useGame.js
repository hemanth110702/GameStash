import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";

const useGame = (url, setLoading = () => {}) => {
  const [gameDetails, setGameDetails] = useState("");

  const fetchGamesData = async () => {
    try {
      const response = await apiClient.get(`/games/${url}`);
      setGameDetails(response.data);
    } catch (error) {
      console.error("Error fetching game details:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchGamesData();
  }, [url]); // Include 'url' as a dependency to re-fetch when it changes

  return gameDetails;
};

export default useGame;
