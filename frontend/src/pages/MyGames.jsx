import { Link } from "react-router-dom";
import Game from "../components/Game";
import { useGameStashContext } from "../context/GameStashContext";
import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const MyGames = () => {
  const { likedGames, setLikedGames, darkTheme, user } = useGameStashContext();
  const [gamesData, setGamesData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const skeletons = Array(4).fill(1);

  useEffect(() => {
    const fetchLikedGamesData = async () => {
      try {
        setLoading(true);
        const response = await apiClient.post("/api/my-games/data", {
          email: user.email,
        });
        setGamesData(response.data.gameDetailsList);
      } catch (error) {
        setError(error);
        console.error("Error fetching game data", error);
      } finally {
        setLoading(false);
      }
    };

    if (user?.username !== undefined && likedGames.length > 0) {
      console.log("calling");
      fetchLikedGamesData();
    }
  }, []);

  useEffect(() => {
    console.log("updated liked games, new useeffect");
    console.log(gamesData, likedGames);
    setGamesData((prevGamesData) =>
      prevGamesData.filter((game) => likedGames.includes(game.id))
    );

    console.log(gamesData, likedGames);
  }, [likedGames]);

  if (loading) {
    return (
      <div className={darkTheme ? "my-games-page" : "light-my-games-page"}>
        <h1>Liked Games</h1>
        <div className="my-games-games">
          {loading &&
            skeletons.map((_, index) => (
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
        <button>
          <Link to="/">Go back Home</Link>
        </button>
      </div>
    );
  }

  if (gamesData) {
    return (
      <div className={darkTheme ? "my-games-page" : "light-my-games-page"}>
        <h1>Liked Games</h1>
        <div className="my-games-games">
          {loading &&
            skeletons.map((_, index) => (
              <div key={index}>
                <SkeletonTheme baseColor="#202020" highlightColor="#444">
                  <Skeleton height={200} width={300} />
                  <Skeleton variant="h2" width={300} />
                  <Skeleton variant="h2" width={300} />
                  <Skeleton variant="h2" width={300} />
                </SkeletonTheme>
              </div>
            ))}
          {gamesData.map((game) => {
            return (
              <Game
                game={game}
                key={game.id}
                likedGames={likedGames}
                setLikedGames={setLikedGames}
                darkTheme={darkTheme}
              />
            );
          })}
        </div>
        <button>
          <Link to="/">Go back Home</Link>
        </button>
      </div>
    );
  }
  return <h1>There no games liked yet!</h1>;
};

export default MyGames;
