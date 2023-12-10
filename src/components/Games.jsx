import { useState, useEffect } from "react";
import useGames from "../hooks/useGames";
import Game from "./Game";

const Games = () => {
  const { games, error } = useGames();

  return (
    <div className="games">
      {error && <h1>{error}</h1>}
      <div className="games-container">
        {games.map((game) => (
          <div key={game.id}>
            <Game game={game} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Games;
