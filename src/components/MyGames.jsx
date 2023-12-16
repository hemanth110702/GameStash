import { Link } from "react-router-dom";
import Game from "./Game";

const MyGames = ({ likedGames, setLikedGames }) => {
  if (likedGames) {
    return (
      <div className="my-games-page">
        <h1>Liked Games</h1>
        <div className="my-games-games">
          {likedGames.map((game) => {
            return (
              <Game
                game={game}
                likedGames={likedGames}
                setLikedGames={setLikedGames}
              />
            );
          })}
        </div>
        <button><Link to="/" >Go back Home</Link></button>
      </div>
    );
  } 
  return <h1>There no games liked yet!</h1>
};

export default MyGames;
