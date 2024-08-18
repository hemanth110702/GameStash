import { useEffect, useState } from "react";
import fav from "../assets/fav.png";
import favfill from "../assets/favfill.png";
import apiClient from "../services/apiClient";
import { useGameStashContext } from "../context/GameStashContext";

const Collection = ({ game }) => {
  const { user, likedGames, setLikedGames } = useGameStashContext();
  const checkIsLiked = () => {
    return likedGames.includes(game.id);
  };

  const [isLiked, setIsLiked] = useState(checkIsLiked());

  useEffect(() => {
    setIsLiked(checkIsLiked());
  }, [likedGames]);

  const toggleLikedGame = async () => {
    const tempLikedGames = [...likedGames];
    if (!isLiked) {
      setLikedGames((prevLikedGames) => [...prevLikedGames, game.id]);
    } else {
      setLikedGames((prevLikedGames) =>
        prevLikedGames.filter((likedGame) => likedGame !== game.id)
      );
    }
    try {
      await apiClient.put(`/api/my-games/update/${game.id}`, {
        email: user.email,
      });
    } catch (error) {
      setLikedGames(tempLikedGames);
      console.log("Error updating liked games:", error);
    }
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
