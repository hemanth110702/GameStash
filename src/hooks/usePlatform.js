import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
import { CanceledError } from "axios";

const usePlatform = () => {
  const [platforms, setPlatforms] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get("/platforms/lists/parents", { signal: controller.signal })
      .then((res) => {
        console.log("platform res:", res);
        setPlatforms(res.data.results);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(true);
      });

    return () => controller.abort();
  }, []);

  return { platforms, error };
};

export default usePlatform;
