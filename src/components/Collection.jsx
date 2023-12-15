import { useEffect, useState } from "react";
import fav from "../assets/fav.png";
import favfill from "../assets/favfill.png";

const Collection = ({ game, likedGames, setLikedGames }) => {
  const checkIsLiked =
    likedGames.filter((gameObj) => gameObj.id === game.id).length > 0;

  const [isLiked, setIsLiked] = useState(checkIsLiked);

  const toggleLikedGame = () => {
    if (!isLiked) {
      setLikedGames((prevLikedGames) => [...prevLikedGames, game]);
    } else {
      setLikedGames((prevLikedGames) =>
        prevLikedGames.filter((gameObj) => gameObj.id !== game.id)
      );
    }
    setIsLiked(!isLiked);
  };

  return (
    <button
      onClick={toggleLikedGame}
      style={{ background: "transparent", border: "none", cursor: "pointer" }}
    >
      <img className="fav-image" src={isLiked ? favfill : fav} alt="Favorite" />
    </button>
  );
};

export default Collection;
