import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
import { CanceledError } from "axios";

const useGenres = (setLoading) => {
  const [genres, setGenres] = useState([]);
  const [error, setError] = useState("");

  
  useEffect(() => {
    setLoading(true);
    const controller = new AbortController();

    apiClient
      .get("/genres", { signal: controller.signal })
      .then((res) => {
        setGenres(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { genres, error };
};

export default useGenres;
