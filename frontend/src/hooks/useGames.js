import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
import { CanceledError } from "axios";

const useGames = (
  setLoading,
  selectedGenre,
  selectedPlatform,
  setChanged,
  selectedOrder,
  search,
  setSkeletonLoading
) => {
  const [games, setGames] = useState([]);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    setChanged(true);

    const fetchData = async (pageNumber) => {
      try {
        const response = await apiClient.get("/api/games", {
          signal: controller.signal,
          params: {
            genres: selectedGenre?.id,
            parent_platforms: selectedPlatform?.id,
            ordering: selectedOrder?.label,
            search: search,
            page: pageNumber,
          },
        });

        const newGames = response.data.results;

        if (newGames.length === 0) {
          setHasMore(false);
        }

        setGames((prevGames) => [...prevGames, ...newGames]);
        setLoading(false);
        setChanged(false);
      } catch (err) {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
        setChanged(false);
      }
    };
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        // Fetch more data when the bottom is reached
        setPage((prevPage) => prevPage + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);

    fetchData(page);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      controller.abort();
    };
  }, [page]);

  useEffect(() => {
    const controller = new AbortController();
    setChanged(true);
    setSkeletonLoading(true);

    const fetchData = async (pageNumber) => {
      try {
        const response = await apiClient.get("/api/games", {
          signal: controller.signal,
          params: {
            genres: selectedGenre?.id,
            parent_platforms: selectedPlatform?.id,
            ordering: selectedOrder?.label,
            search: search,
            page: pageNumber,
          },
        });

        const newGames = response.data.results;

        if (newGames.length === 0) {
          // If no more games are returned, set hasMore to false
          setHasMore(false);
        }

        setGames([...newGames]);
        setLoading(false);
        setChanged(false);
        setSkeletonLoading(false);
        window.scrollTo({ top: 0, behavior: "smooth" });
      } catch (err) {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
        setChanged(false);
        setSkeletonLoading(false);
      }
    };
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        // Fetch more data when the bottom is reached
        setPage((prevPage) => prevPage + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);

    fetchData(page);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      controller.abort();
    };
  }, [selectedGenre, selectedPlatform, selectedOrder, search]);

  return { games, error, setPage, hasMore };
};

export default useGames;
