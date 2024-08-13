import { Link } from "react-router-dom";
import Game from "../components/Game";
import { useGameStashContext } from "../context/GameStashContext";
import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";

const MyGames = () => {
  const { likedGames, setLikedGames, darkTheme, user } = useGameStashContext();
  const [gamesData, setGamesData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  console.log("im in myGames");

  useEffect(() => {
    console.log("liked games updated");

    const fetchLikedGamesData = async () => {
      console.log("hi hlo");

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

    if (user?.username != undefined && likedGames.length > 0) {
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

  if (gamesData) {
    return (
      <div className={darkTheme ? "my-games-page" : "light-my-games-page"}>
        <h1>Liked Games</h1>
        <div className="my-games-games">
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
