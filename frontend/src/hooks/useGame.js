import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";

const useGame = (url, setLoading = () => {}) => {
  const [gameDetails, setGameDetails] = useState("");

  const fetchGameData = async () => {
    console.log("hello");
    try {
      console.log("entered try");
      const response = await apiClient.get(`api/games/fetch/${url}`);
      console.log(response);
      setGameDetails(response.data);
    } catch (error) {
      console.error("Error fetching game details:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchGameData();
  }, [url]); 

  return gameDetails;
};

export default useGame;
