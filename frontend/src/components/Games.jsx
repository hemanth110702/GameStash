import React, { useCallback, useEffect, useRef, useState } from "react";
import useGames from "../hooks/useGames";
import Game from "./Game";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useGameStashContext } from "../context/GameStashContext";

const Games = () => {
  const {
    setChanged,
    selectedGenre,
    selectedPlatform,
    selectedOrder,
    search,
    likedGames,
    setLikedGames,
    darkTheme,
    user,
  } = useGameStashContext();

  const [end, setEnd] = useState(false);
  const [loading, setLoading] = useState(true);
  const [skeletonLoading, setSkeletonLoading] = useState(false);
  const { games, error, setPage, hasMore, setGames } = useGames(
    setLoading,
    selectedGenre,
    selectedPlatform,
    setChanged,
    selectedOrder,
    search,
    setSkeletonLoading
  );
  console.log(games);

  useEffect(() => {
    setGames(games);
  }, [likedGames]);

  const skeletons = Array(20).fill(1);

  const observer = useRef();

  const lastGameElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setEnd(true);
          setPage((prevPage) => prevPage + 1);
        }
      });

      if (node) observer.current.observe(node);
    },
    [loading, setPage]
  );

  if (error) return <h1>{error}</h1>;

  return (
    <div className="games">
      {skeletonLoading && (
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
            // Set a ref to the last game element
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
      {end && hasMore && <div class="loader"></div>}
    </div>
  );
};

export default Games;
