import { useEffect, useState } from "react"
import apiClient from "../services/apiClient"

const useGame = (slug) => {

  const [gameDetails, setGameDetails] = useState("");

  const fetchGamesData = async () => {
    const response = await apiClient.get(`/games/${slug}`);
    setGameDetails(response.data);
  }

  useEffect(()=>{
   fetchGamesData();
  }, [])

  return gameDetails;

}

export default useGame