import React, { useState } from "react";
import useGames from "../hooks/useGames";
import Game from "./Game";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Games = ({ selectedGenre, selectedPlatform }) => {
  const [loading, setLoading] = useState(true);
  const { games, error } = useGames(setLoading, selectedGenre, selectedPlatform);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="games">
      {error && <h1>{error}</h1>}
      {loading && (
        <div className="games-container">
          {skeletons.map((_, index) => (
            <div key={index}>
              <SkeletonTheme baseColor="#202020" highlightColor="#444">
                <Skeleton height={200} width={300} />
                <Skeleton variant="h2" width={300} />
                <Skeleton variant="h2" width={300} />
                <Skeleton variant="h2" width={300} />
              </SkeletonTheme>
            </div>
          ))}
        </div>
      )}

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
