import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
import { CanceledError } from "axios";

const useGames = (setLoading) => {
  const [games, setGames] = useState([]);
  const [error, setError] = useState("");
  

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get("/games", { signal: controller.signal })
      .then((res) => {
        setGames(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });


    return () => controller.abort();
  }, []);

  return { games, error };
};

export default useGames;
