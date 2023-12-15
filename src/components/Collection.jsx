import { useEffect, useState } from "react";

const Collection = ({ game, likedGames, setLikedGames }) => {

  const checkIsLiked = (likedGames.filter((gameObj)=> gameObj.id === game.id)).length > 0?true: false;

  const [isLiked, setIsLiked] = useState(checkIsLiked)

  const toggleLikedGame = () => {
    if(!isLiked){
      setLikedGames((prevLikedGames)=> ([...prevLikedGames, game]));
      setIsLiked(true);
    } else {
      setLikedGames((prevLikedGames)=> prevLikedGames.filter((gameObj)=> gameObj.id !== game.id))
      setIsLiked(false);
    }
  }


  return (
    <div>
      <button onClick={toggleLikedGame} style={{backgroundColor: (isLiked)?'pink': ''}} >Fav</button>
    </div>
  );
};

export default Collection;
