import React, { useCallback, useRef, useState } from "react";
import useGames from "../hooks/useGames";
import Game from "./Game";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

// ... (imports)

const Games = ({
  changed,
  setChanged,
  selectedGenre,
  selectedPlatform,
  selectedOrder,
  search,
  likedGames,
  setLikedGames,
  darkTheme
}) => {
  const [loadingInitial, setLoadingInitial] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [end, setEnd] = useState(false);
  const { games, error, setPage, hasMore } = useGames(
    setLoadingInitial,
    selectedGenre,
    selectedPlatform,
    setChanged,
    selectedOrder,
    search
  );
  const skeletons = Array(20).fill(1);

  const observer = useRef();

  const lastGameElementRef = useCallback(
    (node) => {
      if (loadingMore || loadingInitial) return;

      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setEnd(true);
          setLoadingMore(true);
          setPage((prevPage) => prevPage + 1);
        }
      });

      if (node) observer.current.observe(node);
    },
    [loadingMore, loadingInitial, setPage]
  );

  if (error) return <h1>{error}</h1>;

  return (
    <div className="games">
      {loadingInitial && (
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
        {games.map((game, index) => {
          if (games.length === index + 1) {
            return (
              <div key={game.id} ref={lastGameElementRef}>
                <Game
                  game={game}
                  likedGames={likedGames}
                  setLikedGames={setLikedGames}
                  darkTheme={darkTheme}
                />
              </div>
            );
          } else {
            return (
              <div key={game.id}>
                <Game
                  game={game}
                  likedGames={likedGames}
                  setLikedGames={setLikedGames}
                  darkTheme={darkTheme}
                />
              </div>
            );
          }
        })}
      </div>
      {!hasMore && <div>No more games to load</div>}
      {end && hasMore && <div className={darkTheme?"light-loader":"loader"}></div>}
    </div>
  );
};

export default Games;
