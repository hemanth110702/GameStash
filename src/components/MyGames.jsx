import { Link } from "react-router-dom";
import Game from "./Game";
import { useGameStashContext } from "../App";

const MyGames = () => {

  const { likedGames, setLikedGames, darkTheme } = useGameStashContext();
  if (likedGames) {
    return (
      <div className={darkTheme ? "my-games-page" : "light-my-games-page"}>
        <h1>Liked Games</h1>
        <div className="my-games-games">
          {likedGames.map((game) => {
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
