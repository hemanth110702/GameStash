import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
import { CanceledError } from "axios";

const useGames = (setLoading, selectedGenre, selectedPlatform, setChanged) => {
  const [games, setGames] = useState([]);
  const [error, setError] = useState("");
  console.log("this is the selected genre" ,selectedGenre);
  useEffect(() => {
    const controller = new AbortController();
    setChanged(true);

    apiClient
      .get("/games", { signal: controller.signal, params: {
        genres: selectedGenre?.id,
        platforms: selectedPlatform?.id
      } })
      .then((res) => {
        setGames(res.data.results);
        setLoading(false);
        setChanged(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
        setChanged(false);
      });

    return () => controller.abort();
  }, [selectedGenre, selectedPlatform]);

  return { games, error };
};

export default useGames;
