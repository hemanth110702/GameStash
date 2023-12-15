import Game from "./Game";

const MyGames = ({ likedGames, setLikedGames }) => {
  if (likedGames) {
    return (
      <div>
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
    );
  } 
  return <h1>There no games liked yet!</h1>
};

export default MyGames;
