import React, { useState } from "react";
import useGames from "../hooks/useGames";
import Game from "./Game";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Games = ({
  changed,
  setChanged,
  selectedGenre,
  selectedPlatform,
  selectedOrder,
  search,
}) => {
  const [loading, setLoading] = useState(true);
  const { games, error } = useGames(
    setLoading,
    selectedGenre,
    selectedPlatform,
    setChanged,
    selectedOrder,
    search
  );
  const skeletons = Array(20).fill(1);

  if (error) return <h1>{error}</h1>;

  return (
    <div className="games">
      {(loading || changed) && (
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
