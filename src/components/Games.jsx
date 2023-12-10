import { useEffect } from "react";
import { useState } from "react";
import apiClient from "../services/apiClient";

const Games = () => {
  const [games, setGames] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get("/games")
      .then((res) => setGames(res.data.results))
      .catch((err) => setError(err.message));
  },[]);

  return (
    <>
      <div className="games">Games</div>
      {error && <h1>{error}</h1>}
      {games.map(game => <li key={game.id}>{game.name}</li>)}
    </>
  );
};

export default Games;
